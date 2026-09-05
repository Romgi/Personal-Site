"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export function GsapScrollEffects({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        // Translation preserves visible content and avoids creating backdrop roots.
        gsap.utils
          .toArray<HTMLElement>("[data-gsap-reveal]", root)
          .forEach((element) => {
            gsap.from(element, {
              y: 24,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 94%", once: true },
            });
          });
        const name = root.querySelector(".flight-name");
        if (name)
          gsap.from(name, {
            y: 22,
            duration: 1.1,
            ease: "expo.out",
            clearProps: "transform",
          });
      });
      const layers = Array.from(
        root.querySelectorAll<HTMLElement>("[data-robotics-logo]"),
      );
      const year = root.querySelector<HTMLElement>("[data-robotics-year]");
      const label = root.querySelector<HTMLElement>(
        "[data-robotics-hud-label]",
      );
      const activate = (entry: HTMLElement) => {
        layers.forEach((layer) => {
          const active = layer.dataset.hudYear === entry.dataset.hudYear;
          layer.style.opacity = active ? "1" : "0";
          layer.style.visibility = active ? "visible" : "hidden";
        });
        if (year) year.textContent = entry.dataset.hudYear ?? "";
        if (label) label.textContent = entry.dataset.hudLabel ?? "";
      };
      root
        .querySelectorAll<HTMLElement>("[data-robotics-entry]")
        .forEach((entry) => {
          ScrollTrigger.create({
            trigger: entry,
            start: "top 55%",
            end: "bottom 55%",
            onEnter: () => activate(entry),
            onEnterBack: () => activate(entry),
          });
        });
      const refresh = () => ScrollTrigger.refresh();
      const images = Array.from(root.querySelectorAll("img"));
      images.forEach((img) =>
        img.addEventListener("load", refresh, { once: true }),
      );
      document.fonts.ready.then(refresh);
      return () => {
        media.revert();
        images.forEach((img) => img.removeEventListener("load", refresh));
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
