"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Thin reading-progress line pinned to the top edge of the viewport. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const bar = barRef.current;

      if (!bar) {
        return;
      }

      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: 0.3,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 shadow-[0_0_12px_rgba(77,124,255,0.5)]"
    />
  );
}
