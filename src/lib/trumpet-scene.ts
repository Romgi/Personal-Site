import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { disposeTrumpetModel, loadTrumpetModel } from "./trumpet-model";

export type TrumpetScene = {
  setProgress: (progress: number) => void;
  setReducedMotion: (reduced: boolean) => void;
  destroy: () => void;
};

const clamp = THREE.MathUtils.clamp;
const smooth = (value: number, start: number, end: number) => {
  const t = clamp((value - start) / (end - start), 0, 1);
  return t * t * (3 - 2 * t);
};

/** Orbit into the bell, then let its opening become the next page surface. */
export function createTrumpetScene(
  canvas: HTMLCanvasElement,
  hero: HTMLElement,
  initiallyReduced: boolean,
  onReady: (ready: boolean) => void,
): TrumpetScene | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
  } catch {
    return null;
  }
  renderer.setClearColor(0x05070b, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.03, 100);
  const studio = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(studio, 0.04);
  scene.environment = environment.texture;
  scene.environmentIntensity = 1;
  studio.dispose();
  pmrem.dispose();

  const rig = new THREE.Group();
  scene.add(rig);
  const key = new THREE.DirectionalLight(0xffe6bb, 3);
  key.position.set(-3, 6, 7);
  const rim = new THREE.DirectionalLight(0x85baff, 3.5);
  rim.position.set(4, 2, -4);
  const fill = new THREE.DirectionalLight(0xffffff, 2);
  fill.position.set(4, -1, 5);
  scene.add(key, rim, fill);

  const arrival = hero.querySelector<HTMLElement>(".scene-arrival");
  const pointer = new THREE.Vector2();
  const easedPointer = new THREE.Vector2();
  const startRotation = new THREE.Quaternion();
  const endRotation = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(0, -Math.PI / 2, 0),
  );
  const euler = new THREE.Euler();
  const bell = new THREE.Vector3();
  const worldBell = new THREE.Vector3();
  const opening = new THREE.Vector3();
  const edge = new THREE.Vector3();
  const startOffset = new THREE.Vector3(-0.15, -0.65, 0);
  let bellRadius = 1;
  let model: THREE.Group | null = null;
  let progress = Number(hero.dataset.trumpetProgress ?? 0);
  let reduced = initiallyReduced;
  let visible = true;
  let destroyed = false;
  let lost = false;
  let frame = 0;
  let started = 0;
  let width = 1;
  let height = 1;
  let frameDistance = 12;

  const clearAperture = () => {
    ["--bell-radius", "--bell-x", "--bell-y"].forEach((property) =>
      arrival?.style.removeProperty(property),
    );
  };

  const pose = (time: number) => {
    if (!model) return;
    const p = reduced ? 0 : progress;
    const turn = smooth(p, 0.04, 0.5);
    const travel = smooth(p, 0.36, 0.89);
    const narrow = width < 768;
    const settle = reduced
      ? 0
      : Math.sin(Math.min((time - started) / 4000, 1) * Math.PI) * 0.025;
    easedPointer.lerp(pointer, 0.08);

    startRotation.setFromEuler(
      euler.set(
        0.12 + (reduced ? 0 : easedPointer.y * 0.04),
        -0.2 + (reduced ? 0 : easedPointer.x * 0.06),
        (narrow ? 0.55 : 0.12) + settle,
      ),
    );
    rig.quaternion.slerpQuaternions(startRotation, endRotation, turn);

    // Pivot toward the actual bell center, rather than sliding the instrument
    // out of frame. The bell is dead-center before the camera travels forward.
    worldBell
      .copy(bell)
      .applyQuaternion(startRotation)
      .add(startOffset)
      .multiplyScalar(1 - turn);
    rig.position
      .copy(worldBell)
      .sub(opening.copy(bell).applyQuaternion(rig.quaternion));
    const arrivalDistance =
      (bellRadius * height) /
      (Math.tan(THREE.MathUtils.degToRad(16)) *
        Math.hypot(width, height) *
        1.35);
    camera.position.set(
      0,
      0,
      frameDistance * Math.pow(arrivalDistance / frameDistance, travel),
    );
    camera.lookAt(0, 0, 0);
    key.position.x = -3 + turn * 6;
    rig.updateMatrixWorld(true);
    camera.updateMatrixWorld(true);

    // Project the model's real rim into CSS pixels. The opening and the page
    // mask share a center and radius at every viewport size and scroll position.
    opening.copy(bell).applyMatrix4(rig.matrixWorld).project(camera);
    edge
      .copy(bell)
      .addScaledVector(THREE.Object3D.DEFAULT_UP, bellRadius * 0.965)
      .applyMatrix4(rig.matrixWorld)
      .project(camera);
    const radius = Math.hypot(
      ((edge.x - opening.x) * width) / 2,
      ((edge.y - opening.y) * height) / 2,
    );
    arrival?.style.setProperty(
      "--bell-x",
      `${((opening.x + 1) * width) / 2}px`,
    );
    arrival?.style.setProperty(
      "--bell-y",
      `${((1 - opening.y) * height) / 2}px`,
    );
    arrival?.style.setProperty("--bell-radius", `${p < 0.48 ? 0 : radius}px`);
    renderer.render(scene, camera);
  };

  const render = (time: number) => {
    frame = 0;
    if (destroyed || lost || !model || !visible || document.hidden) return;
    if (!started) started = time;
    const settling = !reduced && time - started < 4000;
    const moving = !reduced && pointer.distanceToSquared(easedPointer) > 0.0001;
    pose(time);
    if (settling || moving) frame = requestAnimationFrame(render);
  };
  const requestRender = () => {
    if (!frame && model && !destroyed && !lost && visible && !document.hidden) {
      frame = requestAnimationFrame(render);
    }
  };

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    width = Math.max(bounds.width, 1);
    height = Math.max(bounds.height, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    frameDistance = Math.max(
      11.6,
      4.5 / (Math.tan(THREE.MathUtils.degToRad(16)) * camera.aspect),
    );
    camera.updateProjectionMatrix();
    requestRender();
  };
  const move = (event: PointerEvent) => {
    if (reduced || progress > 0.5 || event.pointerType !== "mouse") return;
    const bounds = hero.getBoundingClientRect();
    pointer.set(
      ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    );
    requestRender();
  };
  const leave = () => {
    pointer.set(0, 0);
    requestRender();
  };
  const visibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else requestRender();
  };
  const contextLost = (event: Event) => {
    event.preventDefault();
    lost = true;
    cancelAnimationFrame(frame);
    frame = 0;
    clearAperture();
    onReady(false);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) requestRender();
    else {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });
  intersection.observe(hero);
  hero.addEventListener("pointermove", move, { passive: true });
  hero.addEventListener("pointerleave", leave);
  document.addEventListener("visibilitychange", visibility);
  canvas.addEventListener("webglcontextlost", contextLost);
  resize();

  void loadTrumpetModel()
    .then((loaded) => {
      if (destroyed || lost) {
        disposeTrumpetModel(loaded.group);
        return;
      }
      model = loaded.group;
      bell.copy(loaded.bellCenter);
      bellRadius = loaded.bellRadius;
      rig.add(model);
      started = performance.now();
      pose(started);
      onReady(true);
      requestRender();
    })
    .catch(() => {
      if (!destroyed) {
        clearAperture();
        onReady(false);
      }
    });

  return {
    setProgress(value) {
      progress = clamp(value, 0, 1);
      requestRender();
    },
    setReducedMotion(value) {
      reduced = value;
      pointer.set(0, 0);
      easedPointer.set(0, 0);
      requestRender();
    },
    destroy() {
      destroyed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", visibility);
      canvas.removeEventListener("webglcontextlost", contextLost);
      clearAperture();
      if (model) disposeTrumpetModel(model);
      environment.dispose();
      renderer.dispose();
    },
  };
}
