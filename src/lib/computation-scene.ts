import { createComputationGraph, signalDistances } from "./computation-graph";

const vertexSource = `
attribute vec2 position;
attribute float energy;
attribute float depth;
uniform float pixelRatio;
varying float light;
varying float distanceFade;
void main() {
  gl_Position = vec4(position, 0., 1.);
  gl_PointSize = (5. + energy * 15.) * pixelRatio * depth;
  light = energy;
  distanceFade = depth;
}`;
const fragmentSource = `
precision mediump float;
uniform float points;
varying float light;
varying float distanceFade;
void main() {
  vec3 blue = mix(vec3(.16,.44,.88), vec3(.62,.86,1.), min(light, 1.));
  float alpha = (.26 + light * .72) * distanceFade;
  if (points > .5) {
    float r = length(gl_PointCoord - .5) * 2.;
    float core = 1. - smoothstep(.08, .33, r);
    float halo = pow(max(0., 1. - r), 2.5);
    alpha = (core * .85 + halo * (.3 + light)) * distanceFade;
    blue = mix(blue, vec3(.88,.96,1.), core * min(.4 + light, 1.));
  }
  gl_FragColor = vec4(blue, alpha);
}`;

export type ComputationScene = {
  setPaused: (paused: boolean) => void;
  setScrollProgress: (progress: number) => void;
  destroy: () => void;
};

/** A projected graph, spring deformation and graph-distance signal propagation. */
export function createComputationScene(
  canvas: HTMLCanvasElement,
  hero: HTMLElement,
  initialPaused: boolean,
  onUnavailable: () => void,
): ComputationScene | null {
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    powerPreference: "low-power",
    premultipliedAlpha: true,
  });
  if (!gl) return null;
  const shaders: WebGLShader[] = [];
  const buffers: WebGLBuffer[] = [];
  const program = gl.createProgram();
  const release = () => {
    buffers.forEach((buffer) => gl.deleteBuffer(buffer));
    shaders.forEach((shader) => gl.deleteShader(shader));
    if (program) gl.deleteProgram(program);
  };
  if (!program) return null;
  for (const [type, source] of [
    [gl.VERTEX_SHADER, vertexSource],
    [gl.FRAGMENT_SHADER, fragmentSource],
  ] as const) {
    const shader = gl.createShader(type);
    if (!shader) {
      release();
      return null;
    }
    shaders.push(shader);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      release();
      return null;
    }
    gl.attachShader(program, shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    release();
    return null;
  }
  gl.useProgram(program);
  gl.enable(gl.BLEND);
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  const position = gl.getAttribLocation(program, "position");
  const energy = gl.getAttribLocation(program, "energy");
  const depth = gl.getAttribLocation(program, "depth");
  const pointUniform = gl.getUniformLocation(program, "points");
  const ratioUniform = gl.getUniformLocation(program, "pixelRatio");
  const buffer = gl.createBuffer();
  if (!buffer) {
    release();
    return null;
  }
  buffers.push(buffer);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  for (const attribute of [position, energy, depth])
    gl.enableVertexAttribArray(attribute);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 16, 0);
  gl.vertexAttribPointer(energy, 1, gl.FLOAT, false, 16, 8);
  gl.vertexAttribPointer(depth, 1, gl.FLOAT, false, 16, 12);

  const graph = createComputationGraph();
  const count = graph.nodes.length;
  const vertices = new Float32Array(count * 4);
  const lines = new Float32Array(graph.edges.length * 8);
  const packets = new Float32Array(graph.edges.length * 4);
  const displacement = new Float32Array(count);
  const velocity = new Float32Array(count);
  const projected = new Float32Array(count * 2);
  const signals: { distances: Float32Array; start: number }[] = [];
  let stillSignal: Float32Array | null = null;
  let width = 1,
    height = 1,
    ratio = 1;
  let frame = 0,
    clock = 0,
    previous = 0,
    visible = true,
    disposed = false;
  let paused = initialPaused;
  const titleCard = hero.classList.contains("title-card");
  let scrollProgress = 0;
  let pointerX = -10000,
    pointerY = -10000;
  let yaw = -0.22,
    targetYaw = -0.22,
    pitch = -0.4,
    targetPitch = -0.4;
  let down: {
    x: number;
    y: number;
    yaw: number;
    pitch: number;
    touch: boolean;
  } | null = null;
  let nearest = Math.floor(count / 2);
  let lastPulse = -10;

  const sendSignal = () => {
    if (clock - lastPulse < 0.18 && !paused) return;
    const distances = signalDistances(graph, nearest);
    if (paused) stillSignal = distances;
    else {
      signals.push({ distances, start: clock });
      if (signals.length > 3) signals.shift();
    }
    lastPulse = clock;
    draw(0);
    schedule();
  };
  const upload = (data: Float32Array, mode: number, size: number) => {
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
    gl.uniform1f(pointUniform, mode === gl.POINTS ? 1 : 0);
    gl.drawArrays(mode, 0, size);
  };
  const draw = (dt: number) => {
    if (disposed) return;
    const mobile = width < 768;
    // The scroll camera sits above pointer rotation: dragging changes the view,
    // while reversing the page precisely reverses its dive through the graph.
    const progress = titleCard ? scrollProgress : 0;
    const journey = progress * progress * (3 - 2 * progress);
    const dive = Math.sin(journey * Math.PI);
    const centerX =
      width * (titleCard ? 0.5 + journey * 0.12 : mobile ? 0.7 : 0.74);
    const centerY =
      height * (titleCard ? 0.5 - dive * 0.06 : mobile ? 0.38 : 0.45);
    const scale = titleCard
      ? Math.min(width * (mobile ? 0.27 : 0.19), height * 0.3) *
        (1 + dive * 1.05 - journey * 0.12)
      : Math.min(width * (mobile ? 0.2 : 0.1), height * 0.24);
    const smoothing = 1 - Math.exp(-dt * 6);
    yaw += (targetYaw - yaw) * smoothing;
    pitch += (targetPitch - pitch) * smoothing;
    const angle = yaw + journey * 1.65 + Math.sin(clock * 0.13) * 0.06;
    const cameraPitch = pitch - dive * 0.65 + journey * 0.24;
    const cameraDistance = 7 - dive * 1.8;
    const cy = Math.cos(angle),
      sy = Math.sin(angle);
    const cp = Math.cos(cameraPitch),
      sp = Math.sin(cameraPitch);
    let closest = Infinity;
    for (let i = 0; i < count; i++) {
      const node = graph.nodes[i];
      const dx = projected[i * 2] - pointerX,
        dy = projected[i * 2 + 1] - pointerY;
      const distance = Math.hypot(dx, dy);
      if (pointerX > -999 && distance < closest) {
        closest = distance;
        nearest = i;
      }
      const influence = Math.exp(-(distance * distance) / 16000);
      if (dt) {
        velocity[i] +=
          ((influence * 1.2 - displacement[i]) * 34 - velocity[i] * 8) * dt;
        displacement[i] += velocity[i] * dt;
      }
      const z =
        node.z +
        displacement[i] +
        Math.sin(node.x * 1.3 + clock * 0.55) * 0.08 +
        Math.sin(node.x * 1.15 + journey * Math.PI * 2) * dive * 0.65;
      const x = node.x * cy + z * sy;
      const rz = z * cy - node.x * sy;
      const y = node.y * cp - rz * sp;
      const cameraZ = node.y * sp + rz * cp;
      // Keep even aggressively dragged, spring-displaced nodes in front of the
      // near plane. A finite cap also avoids huge line overdraw on small GPUs.
      const perspective = Math.min(
        3,
        cameraDistance / Math.max(1.6, cameraDistance - cameraZ),
      );
      const px = centerX + x * scale * perspective;
      const py = centerY + y * scale * perspective;
      projected[i * 2] = px;
      projected[i * 2 + 1] = py;
      let heat = 0.1 + influence * 0.4;
      if (titleCard) {
        const scan = (node.x + 3.2) / 6.4 - journey;
        heat += Math.exp(-scan * scan * 95) * dive * 0.6;
      }
      for (const signal of signals) {
        const front = (clock - signal.start) * 2.5;
        heat += Math.exp(-Math.pow((signal.distances[i] - front) * 3.4, 2));
      }
      if (stillSignal) heat += Math.exp(-stillSignal[i] * 0.55) * 0.85;
      const offset = i * 4;
      vertices[offset] = (px / width) * 2 - 1;
      vertices[offset + 1] = 1 - (py / height) * 2;
      vertices[offset + 2] = Math.min(heat, 1.5);
      vertices[offset + 3] = Math.max(0.35, Math.min(1, perspective * 0.7));
    }
    let packetCount = 0;
    graph.edges.forEach((edge, index) => {
      const a = edge.a * 4,
        b = edge.b * 4;
      for (let channel = 0; channel < 4; channel++) {
        lines[index * 8 + channel] = vertices[a + channel];
        lines[index * 8 + 4 + channel] = vertices[b + channel];
      }
      for (const signal of signals) {
        const front = (clock - signal.start) * 2.5;
        const from = Math.min(
          signal.distances[edge.a],
          signal.distances[edge.b],
        );
        const t = (front - from) / edge.length;
        if (t < 0 || t > 1 || packetCount >= graph.edges.length) continue;
        const u =
          signal.distances[edge.a] < signal.distances[edge.b] ? t : 1 - t;
        const offset = packetCount++ * 4;
        packets[offset] = vertices[a] + (vertices[b] - vertices[a]) * u;
        packets[offset + 1] =
          vertices[a + 1] + (vertices[b + 1] - vertices[a + 1]) * u;
        packets[offset + 2] = 1.25;
        packets[offset + 3] = 0.85;
      }
    });
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    upload(lines, gl.LINES, graph.edges.length * 2);
    upload(vertices, gl.POINTS, count);
    if (packetCount)
      upload(packets.subarray(0, packetCount * 4), gl.POINTS, packetCount);
  };
  const tick = (now: number) => {
    frame = 0;
    if (disposed || paused || !visible || document.hidden) return;
    const dt = previous ? Math.min((now - previous) / 1000, 0.032) : 1 / 60;
    previous = now;
    clock += dt;
    while (signals.length && clock - signals[0].start > 5) signals.shift();
    draw(dt);
    schedule();
  };
  function schedule() {
    if (!frame && !disposed && !paused && visible && !document.hidden)
      frame = requestAnimationFrame(tick);
  }
  const stop = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    previous = 0;
  };
  const resize = () => {
    width = Math.max(1, canvas.clientWidth);
    height = Math.max(1, canvas.clientHeight);
    ratio = Math.min(devicePixelRatio || 1, width < 768 ? 1.5 : 1.75);
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(ratioUniform, ratio);
    draw(0);
    schedule();
  };
  const excluded = (target: EventTarget | null) =>
    target instanceof Element &&
    Boolean(
      target.closest(
        "a,button,input,textarea,select,summary,[role=button],.flight-work",
      ),
    );
  const coordinates = (event: PointerEvent) => {
    const box = canvas.getBoundingClientRect();
    return { x: event.clientX - box.left, y: event.clientY - box.top };
  };
  const move = (event: PointerEvent) => {
    if (paused || excluded(event.target)) return;
    const p = coordinates(event);
    pointerX = p.x;
    pointerY = p.y;
    if (down && !down.touch) {
      targetYaw = down.yaw + (p.x - down.x) * 0.004;
      targetPitch = Math.max(
        -0.9,
        Math.min(0.6, down.pitch + (p.y - down.y) * 0.003),
      );
    }
  };
  const press = (event: PointerEvent) => {
    if (event.button !== 0 || excluded(event.target)) return;
    const p = coordinates(event);
    if (
      p.y < 0 ||
      p.y > height ||
      p.x > width ||
      p.x < (titleCard ? 0 : width * (width < 768 ? 0.35 : 0.49))
    )
      return;
    down = {
      ...p,
      yaw: targetYaw,
      pitch: targetPitch,
      touch: event.pointerType === "touch",
    };
    pointerX = p.x;
    pointerY = p.y;
  };
  const lift = (event: PointerEvent) => {
    if (!down) return;
    const p = coordinates(event);
    if (Math.hypot(p.x - down.x, p.y - down.y) < 9 && !excluded(event.target)) {
      // Resolve the tap location even when motion is paused or on touch screens.
      let distance = Infinity;
      for (let i = 0; i < count; i++) {
        const d = Math.hypot(
          projected[i * 2] - p.x,
          projected[i * 2 + 1] - p.y,
        );
        if (d < distance) {
          distance = d;
          nearest = i;
        }
      }
      sendSignal();
    }
    down = null;
  };
  const leave = () => {
    pointerX = pointerY = -10000;
    down = null;
  };
  const visibility = () => {
    if (document.hidden) stop();
    else schedule();
  };
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) schedule();
    else stop();
  });
  observer.observe(canvas);
  const sizeObserver = new ResizeObserver(resize);
  sizeObserver.observe(canvas);
  hero.addEventListener("pointermove", move, { passive: true });
  hero.addEventListener("pointerdown", press, { passive: true });
  hero.addEventListener("pointerleave", leave);
  window.addEventListener("pointerup", lift, { passive: true });
  window.addEventListener("pointercancel", leave);
  document.addEventListener("visibilitychange", visibility);
  const lost = () => {
    stop();
    disposed = true;
    onUnavailable();
  };
  canvas.addEventListener("webglcontextlost", lost);
  resize();
  if (!paused)
    signals.push({ distances: signalDistances(graph, nearest), start: 0.25 });
  return {
    setScrollProgress(value) {
      if (!Number.isFinite(value) || disposed) return;
      scrollProgress = Math.max(0, Math.min(1, value));
      // Reuse the scene's frame, with its pause, visibility and offscreen gates.
      // No extra render loop or React state is involved in scroll updates.
      schedule();
    },
    setPaused(value) {
      paused = value;
      stop();
      if (!paused) {
        stillSignal = null;
        if (clock === 0 && signals.length === 0) {
          signals.push({
            distances: signalDistances(graph, nearest),
            start: 0.2,
          });
        }
        schedule();
      }
    },
    destroy() {
      disposed = true;
      stop();
      observer.disconnect();
      sizeObserver.disconnect();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerdown", press);
      hero.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerup", lift);
      window.removeEventListener("pointercancel", leave);
      document.removeEventListener("visibilitychange", visibility);
      canvas.removeEventListener("webglcontextlost", lost);
      release();
    },
  };
}
