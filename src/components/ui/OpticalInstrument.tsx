"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const vertexSource = `attribute vec2 position; varying vec2 uv;
void main() { uv = position * .5 + .5; gl_Position = vec4(position,0.,1.); }`;
const fragmentSource = `precision mediump float;
varying vec2 uv; uniform sampler2D artwork; uniform vec2 pointer; uniform float energy;
float noise(vec2 p) { return sin(p.x * 29. + sin(p.y * 17.)) * sin(p.y * 23. + sin(p.x * 13.)); }
void main() {
  vec2 cursor = vec2(.5) + pointer * .38;
  vec2 delta = uv - cursor;
  float lens = exp(-dot(delta * vec2(1., .9), delta * vec2(1., .9)) * 12.);
  vec2 normal = delta * lens;
  vec2 ripple = vec2(noise(uv * 1.8), noise(uv.yx * 1.6));
  vec2 shift = normal * energy * .045 + pointer * .008 + ripple * energy * .0007;
  vec2 sampleUv = clamp(uv + shift, vec2(.002), vec2(.998));
  float fringe = energy * lens * .0009;
  vec3 color;
  color.r = texture2D(artwork, sampleUv + normal * fringe).r;
  color.g = texture2D(artwork, sampleUv).g;
  color.b = texture2D(artwork, sampleUv - normal * fringe).b;
  gl_FragColor = vec4(color, 1.);
}`;

/** An image-backed optical shader. The source image remains the no-WebGL fallback. */
export function OpticalInstrument() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return;
    const shaders: WebGLShader[] = [];
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource),
      fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) {
      shaders.forEach((shader) => gl.deleteShader(shader));
      return;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
      return;
    }
    gl.useProgram(program);
    const buffer = gl.createBuffer(),
      texture = gl.createTexture();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.uniform1i(gl.getUniformLocation(program, "artwork"), 0);
    const pointerUniform = gl.getUniformLocation(program, "pointer"),
      energyUniform = gl.getUniformLocation(program, "energy");
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let ready = false,
      visible = true,
      disposed = false,
      frame = 0;
    let x = 0,
      y = 0,
      targetX = 0,
      targetY = 0,
      energy = 0,
      targetEnergy = 0;
    const draw = () => {
      frame = 0;
      if (!ready || disposed || !visible || document.hidden) return;
      x += (targetX - x) * 0.085;
      y += (targetY - y) * 0.085;
      energy += (targetEnergy - energy) * 0.085;
      gl.uniform2f(pointerUniform, x, y);
      gl.uniform1f(energyUniform, energy);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      canvas.style.opacity = "1";
      if (
        Math.abs(targetX - x) +
          Math.abs(targetY - y) +
          Math.abs(targetEnergy - energy) >
        0.001
      )
        frame = requestAnimationFrame(draw);
    };
    const schedule = () => {
      if (!frame && ready && visible && !document.hidden)
        frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const ratio = Math.min(devicePixelRatio, 1.5);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * ratio));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * ratio));
      gl.viewport(0, 0, canvas.width, canvas.height);
      schedule();
    };
    const source = new window.Image();
    source.onload = () => {
      if (disposed) return;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        source,
      );
      ready = true;
      resize();
    };
    source.src = "/images/design/optic.png";
    const hero = canvas.closest("section");
    const move = (event: PointerEvent) => {
      if (preference.matches || event.pointerType === "touch") return;
      const box = canvas.getBoundingClientRect();
      targetX = Math.max(
        -1,
        Math.min(1, ((event.clientX - box.left) / box.width) * 2 - 1),
      );
      targetY = Math.max(
        -1,
        Math.min(1, 1 - ((event.clientY - box.top) / box.height) * 2),
      );
      targetEnergy = 1;
      schedule();
    };
    const reset = () => {
      targetX = targetY = targetEnergy = 0;
      if (preference.matches) {
        x = y = energy = 0;
      }
      schedule();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(canvas);
    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(canvas);
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else schedule();
    };
    const lost = (event: Event) => {
      event.preventDefault();
      ready = false;
      canvas.style.opacity = "0";
      cancelAnimationFrame(frame);
      frame = 0;
    };
    hero?.addEventListener("pointermove", move, { passive: true });
    hero?.addEventListener("pointerleave", reset);
    preference.addEventListener("change", reset);
    document.addEventListener("visibilitychange", visibility);
    canvas.addEventListener("webglcontextlost", lost);
    return () => {
      disposed = true;
      source.onload = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      sizeObserver.disconnect();
      hero?.removeEventListener("pointermove", move);
      hero?.removeEventListener("pointerleave", reset);
      preference.removeEventListener("change", reset);
      document.removeEventListener("visibilitychange", visibility);
      canvas.removeEventListener("webglcontextlost", lost);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
    };
  }, []);
  return (
    <div className="flight-optic" aria-hidden="true">
      <Image
        src="/images/design/optic.png"
        alt=""
        fill
        preload
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <canvas ref={canvasRef} />
      <span className="optic-angle optic-angle-top">34.05°</span>
      <span className="optic-angle optic-angle-middle">117.42°</span>
      <span className="optic-angle optic-angle-bottom">−12.30°</span>
    </div>
  );
}
