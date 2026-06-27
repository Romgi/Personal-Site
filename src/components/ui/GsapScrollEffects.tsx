"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type GsapScrollEffectsProps = {
  children: ReactNode;
};

export function GsapScrollEffects({ children }: GsapScrollEffectsProps) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const root = scope.current;

      if (!root) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const sections = gsap.utils.toArray<HTMLElement>("section", root);
      const revealItems = gsap.utils.toArray<HTMLElement>(
        "[data-gsap-reveal]",
        root,
      );

      if (prefersReducedMotion) {
        gsap.set([...sections, ...revealItems], {
          clearProps: "all",
          autoAlpha: 1,
        });
        return;
      }

      const homeHero = root.querySelector<HTMLElement>("[data-home-hero]");
      const homeHeroCard = root.querySelector<HTMLElement>(
        "[data-home-hero-card]",
      );
      const homeHeroContent = root.querySelector<HTMLElement>(
        "[data-home-hero-content]",
      );
      const homeHeroVeil = root.querySelector<HTMLElement>(
        "[data-home-hero-veil]",
      );
      const homeHeroAperture = root.querySelector<HTMLElement>(
        "[data-home-hero-aperture]",
      );
      const homeHeroCue = root.querySelector<HTMLElement>(
        "[data-home-hero-cue]",
      );

      if (homeHero && homeHeroCard) {
        gsap.set(homeHeroCard, {
          transformOrigin: "50% 50%",
          willChange: "transform, border-radius, opacity",
        });
        gsap.set(homeHeroAperture, {
          transformOrigin: "50% 50%",
          willChange: "transform, opacity",
        });

        const heroTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: homeHero,
            start: "top top",
            end: "bottom top",
            scrub: 0.85,
          },
        });

        heroTimeline
          .to(
            homeHeroCue,
            {
              autoAlpha: 0,
              y: 18,
            },
            0,
          )
          .to(
            homeHeroContent,
            {
              autoAlpha: 0,
              y: -64,
              scale: 0.96,
            },
            0.06,
          )
          .to(
            homeHeroCard,
            {
              scale: 1.08,
              borderRadius: 18,
              duration: 0.18,
              ease: "power1.out",
            },
            0,
          )
          .to(
            homeHeroVeil,
            {
              autoAlpha: 0.78,
            },
            0.14,
          )
          .to(
            homeHeroAperture,
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.18,
              ease: "power1.out",
            },
            0.16,
          )
          .to(
            homeHeroCard,
            {
              scale: 9.5,
              borderRadius: 0,
              duration: 0.68,
              ease: "power2.inOut",
            },
            0.2,
          )
          .to(
            homeHeroAperture,
            {
              scale: 20,
              autoAlpha: 0,
              duration: 0.7,
              ease: "power2.inOut",
            },
            0.2,
          )
          .to(
            homeHeroCard,
            {
              autoAlpha: 0,
              duration: 0.08,
            },
            0.94,
          );
      }

      sections
        .filter((section) => !section.hasAttribute("data-home-hero"))
        .forEach((section) => {
          gsap.fromTo(
            section,
            {
              autoAlpha: 0,
              y: 54,
              scale: 0.985,
              filter: "blur(8px)",
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                end: "top 48%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

      revealItems.forEach((item) => {
        if (homeHero?.contains(item)) {
          return;
        }

        const delay = Number(item.dataset.gsapDelay ?? 0);

        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            y: 28,
            scale: 0.99,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            delay,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
              end: "top 58%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      ScrollTrigger.refresh();
    },
    { scope, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div ref={scope} className="contents">
      {children}
    </div>
  );
}
