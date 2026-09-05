"use client";
import { useEffect } from "react";

/** One delegated, frame-throttled sheen; text and hit targets remain stationary. */
export function PointerEffects() {
  useEffect(() => {
    const preference = matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0,
      active: HTMLElement | null = null,
      pending: PointerEvent | null = null;
    const clear = () => {
      active?.style.setProperty("--glass-active", "0");
      active = null;
    };
    const update = () => {
      frame = 0;
      const event = pending;
      if (!event || !preference.matches) {
        clear();
        return;
      }
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>(
              ".liquid-glass-nav,.liquid-glass-surface",
            )
          : null;
      if (target !== active) {
        clear();
        active = target;
      }
      if (!active) return;
      const box = active.getBoundingClientRect();
      active.style.setProperty("--glass-active", "1");
      active.style.setProperty(
        "--mx",
        `${((event.clientX - box.left) / box.width) * 100}%`,
      );
      active.style.setProperty(
        "--my",
        `${((event.clientY - box.top) / box.height) * 100}%`,
      );
    };
    const move = (event: PointerEvent) => {
      pending = event;
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", clear);
    preference.addEventListener("change", clear);
    return () => {
      cancelAnimationFrame(frame);
      clear();
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", clear);
      preference.removeEventListener("change", clear);
    };
  }, []);
  return null;
}
