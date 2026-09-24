"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { TrumpetScene as TrumpetSceneController } from "@/lib/trumpet-scene";

export function TrumpetScene() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = canvas.current;
    const hero = element?.closest<HTMLElement>("[data-page-scene]");
    if (!element || !hero) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let scene: TrumpetSceneController | null = null;
    let disposed = false;

    const update = (event: Event) => {
      const value = (event as CustomEvent<{ progress: number }>).detail
        ?.progress;
      if (typeof value === "number") scene?.setProgress(value);
    };
    const preference = () => scene?.setReducedMotion(motion.matches);
    hero.addEventListener("trumpet-scroll", update);
    motion.addEventListener("change", preference);

    import("@/lib/trumpet-scene")
      .then(({ createTrumpetScene }) => {
        if (disposed) return;
        scene = createTrumpetScene(element, hero, motion.matches, (value) => {
          if (!disposed) setReady(value);
        });
      })
      .catch(() => {
        // The server-rendered introduction remains usable without WebGL.
        if (!disposed) setReady(false);
      });

    return () => {
      disposed = true;
      hero.removeEventListener("trumpet-scroll", update);
      motion.removeEventListener("change", preference);
      scene?.destroy();
    };
  }, []);

  return (
    <div className="trumpet-stage" data-ready={ready} aria-hidden="true">
      <Image
        src="/images/music/trumpet-kagelok-studio.png"
        alt=""
        fill
        sizes="100vw"
        preload
        className="trumpet-poster"
      />
      <canvas ref={canvas} className="trumpet-canvas" />
    </div>
  );
}
