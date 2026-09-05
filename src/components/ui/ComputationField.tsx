"use client";

import { Pause, Play, Radio } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createComputationGraph } from "@/lib/computation-graph";
import {
  createComputationScene,
  type ComputationScene,
} from "@/lib/computation-scene";

const fallback = createComputationGraph(13, 9);
const project = (node: { x: number; y: number; z: number }) => [
  500 + node.x * 118 + node.y * 24,
  310 + node.y * 100 - node.z * 70,
];
const fallbackPath = fallback.edges
  .map(({ a, b }) => {
    const [x1, y1] = project(fallback.nodes[a]);
    const [x2, y2] = project(fallback.nodes[b]);
    return `M${x1},${y1}L${x2},${y2}`;
  })
  .join("");

const preference = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const query = matchMedia(preference);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function ComputationField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<ComputationScene | null>(null);
  const [ready, setReady] = useState(false);
  const [motionOverride, setMotionOverride] = useState<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    () => matchMedia(preference).matches,
    () => true,
  );
  const paused = motionOverride === null ? reducedMotion : !motionOverride;
  const pausedRef = useRef(paused);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.closest("section");
    if (!canvas || !hero) return;
    const scene = createComputationScene(canvas, hero, pausedRef.current, () =>
      setReady(false),
    );
    sceneRef.current = scene;
    const updateScroll = (event: Event) => {
      const detail = (event as CustomEvent<{ progress?: unknown }>).detail;
      if (typeof detail?.progress === "number") {
        scene?.setScrollProgress(detail.progress);
      }
    };
    hero.addEventListener("computation-scroll", updateScroll);
    const initialProgress = Number(hero.dataset.computationProgress ?? 0);
    scene?.setScrollProgress(initialProgress);
    // Let the fallback paint before revealing a successfully initialized canvas.
    const frame = requestAnimationFrame(() => setReady(Boolean(scene)));
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("computation-scroll", updateScroll);
      scene?.destroy();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
    sceneRef.current?.setPaused(paused);
  }, [paused]);

  return (
    <>
      <div
        className="computation-field"
        data-ready={ready}
        data-paused={paused}
      >
        <div className="computation-visual" aria-hidden="true">
          <svg
            className="computation-fallback"
            viewBox="0 0 1000 650"
            fill="none"
          >
            <path d={fallbackPath} stroke="#3b82f6" strokeOpacity=".38" />
            {fallback.nodes.map((node, index) => {
              const [cx, cy] = project(node);
              return (
                <circle key={index} cx={cx} cy={cy} r={2.2} fill="#93c5fd" />
              );
            })}
          </svg>
          <canvas ref={canvasRef} />
        </div>
      </div>
      <div className="computation-console" data-paused={paused} hidden={!ready}>
        <div className="computation-caption">
          <span className="computation-indicator" aria-hidden="true" />
          <span>Interactive network</span>
          <span className="computation-instruction">
            Drag to rotate · click a node to send a signal
          </span>
        </div>
        <div className="computation-controls">
          <button
            type="button"
            onClick={() => sceneRef.current?.pulse()}
            aria-label="Send signal through the background network"
          >
            <Radio size={15} aria-hidden="true" />
            Send signal
          </button>
          <button
            type="button"
            onClick={() => setMotionOverride(paused)}
            aria-label={
              paused
                ? "Play background animation"
                : "Pause background animation"
            }
          >
            {paused ? (
              <Play size={15} aria-hidden="true" />
            ) : (
              <Pause size={15} aria-hidden="true" />
            )}
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </>
  );
}
