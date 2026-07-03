"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const GLASS_SELECTOR = ".liquid-glass-surface, .liquid-glass-nav";
const TILT_MAX_DEG = 2.2;
const MAGNET_STRENGTH = 0.16;
const MAGNET_MAX_PX = 10;

/**
 * Site-wide pointer choreography, all driven by one delegated listener:
 * - a soft ambient glow that trails the cursor
 * - a specular sheen on liquid-glass surfaces (via --mx/--my CSS vars)
 * - a magnetic pull on [data-magnetic] controls
 * - a faint 3D tilt on [data-tilt] cards
 * Disabled for touch input and reduced-motion preferences.
 */
export function PointerEffects() {
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const glow = glowRef.current;
    const finePointer = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;

    if (!glow || !finePointer) {
      return;
    }

    const glowX = gsap.quickTo(glow, "x", { duration: 0.55, ease: "power3" });
    const glowY = gsap.quickTo(glow, "y", { duration: 0.55, ease: "power3" });

    let activeGlass: HTMLElement | null = null;
    let activeTilt: HTMLElement | null = null;
    let activeMagnet: HTMLElement | null = null;

    const releaseGlass = () => {
      if (activeGlass) {
        activeGlass.style.setProperty("--glass-active", "0");
        activeGlass = null;
      }
    };

    const releaseTilt = () => {
      if (activeTilt) {
        gsap.to(activeTilt, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.55)",
        });
        activeTilt = null;
      }
    };

    const releaseMagnet = () => {
      if (activeMagnet) {
        gsap.to(activeMagnet, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        });
        activeMagnet = null;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      glowX(event.clientX);
      glowY(event.clientY);

      if (glow.style.opacity !== "1") {
        gsap.to(glow, { opacity: 1, duration: 0.6, overwrite: "auto" });
      }

      const target =
        event.target instanceof Element ? event.target : null;

      // Specular sheen follows the pointer inside glass surfaces.
      const glass = target?.closest<HTMLElement>(GLASS_SELECTOR) ?? null;

      if (glass !== activeGlass) {
        releaseGlass();
        activeGlass = glass;
        activeGlass?.style.setProperty("--glass-active", "1");
      }

      if (glass) {
        const rect = glass.getBoundingClientRect();
        glass.style.setProperty(
          "--mx",
          `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(2)}%`,
        );
        glass.style.setProperty(
          "--my",
          `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(2)}%`,
        );
      }

      // Subtle depth tilt on cards.
      const tilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;

      if (tilt !== activeTilt) {
        releaseTilt();
        activeTilt = tilt;
      }

      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
        const ratioY = (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(tilt, {
          rotateY: ratioX * TILT_MAX_DEG * 2,
          rotateX: -ratioY * TILT_MAX_DEG * 2,
          transformPerspective: 900,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      // Magnetic pull on primary controls.
      const magnet = target?.closest<HTMLElement>("[data-magnetic]") ?? null;

      if (magnet !== activeMagnet) {
        releaseMagnet();
        activeMagnet = magnet;
      }

      if (magnet) {
        const rect = magnet.getBoundingClientRect();
        const pullX = (event.clientX - (rect.left + rect.width / 2)) *
          MAGNET_STRENGTH;
        const pullY = (event.clientY - (rect.top + rect.height / 2)) *
          MAGNET_STRENGTH;

        gsap.to(magnet, {
          x: gsap.utils.clamp(-MAGNET_MAX_PX, MAGNET_MAX_PX, pullX),
          y: gsap.utils.clamp(-MAGNET_MAX_PX, MAGNET_MAX_PX, pullY),
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const onPointerLeave = () => {
      gsap.to(glow, { opacity: 0, duration: 0.5, overwrite: "auto" });
      releaseGlass();
      releaseTilt();
      releaseMagnet();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
    };
  });

  return <div ref={glowRef} aria-hidden="true" className="cursor-glow" />;
}
