"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteScrollReset() {
  const pathname = usePathname();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (window.location.hash) {
        let id = window.location.hash.slice(1);
        try {
          id = decodeURIComponent(id);
        } catch {
          /* A malformed hash still has a literal target. */
        }
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "instant", block: "start" });
      } else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  return null;
}
