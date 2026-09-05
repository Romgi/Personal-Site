"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef, type ReactNode } from "react";
import { setupHomeScrollScene } from "@/lib/home-scroll-scene";
import { setupSectionScrollScenes } from "@/lib/section-scroll-scenes";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function GsapScrollEffects({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      let disposed = false;
      let refreshFrame = 0;
      const media = gsap.matchMedia();
      media.add(
        {
          motion: "screen and (prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 900px)",
          tall: "(min-height: 680px)",
        },
        (context) => {
          const { motion, desktop, tall } = context.conditions!;
          if (!motion) return;
          const cleanHome = tall
            ? setupHomeScrollScene(root, desktop)
            : undefined;
          if (desktop) setupSectionScrollScenes(root);
          const pageTitle = root.querySelector(".page-hero h1");
          if (pageTitle)
            gsap.from(pageTitle, {
              y: 42,
              clipPath: "inset(0% 0% 100% 0%)",
              duration: 0.85,
              ease: "expo.out",
            });
          root
            .querySelectorAll<HTMLElement>("[data-gsap-reveal]")
            .forEach((element) => {
              if (
                element.closest(
                  "[data-robotics-scene], [data-music-scene], .resume-section",
                )
              )
                return;
              gsap.from(element, {
                y: 24,
                duration: 0.75,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 94%",
                  once: true,
                },
              });
            });
          return () => cleanHome?.();
        },
      );
      const refresh = () => {
        cancelAnimationFrame(refreshFrame);
        refreshFrame = requestAnimationFrame(() => {
          if (!disposed) ScrollTrigger.refresh();
        });
      };
      const images = Array.from(root.querySelectorAll("img"));
      images.forEach((image) => image.addEventListener("load", refresh));
      document.fonts.ready.then(refresh);
      return () => {
        disposed = true;
        cancelAnimationFrame(refreshFrame);
        media.revert();
        images.forEach((image) => image.removeEventListener("load", refresh));
      };
    },
    { scope, dependencies: [pathname], revertOnUpdate: true },
  );
  return (
    <div ref={scope} className="contents">
      {children}
    </div>
  );
}
