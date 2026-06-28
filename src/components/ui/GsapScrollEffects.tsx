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
      const musicContexts = root.querySelector<HTMLElement>(
        "[data-music-contexts]",
      );
      const musicContextVisual = root.querySelector<HTMLElement>(
        "[data-music-context-visual]",
      );
      const musicContextMeter = root.querySelector<HTMLElement>(
        "[data-music-context-meter]",
      );
      const musicContextOrb = root.querySelector<HTMLElement>(
        "[data-music-context-orb]",
      );

      if (homeHero && homeHeroCard) {
        const getHeroZoomScale = () => {
          const rect = homeHeroCard.getBoundingClientRect();
          const coverScale = Math.max(
            window.innerWidth / Math.max(rect.width, 1),
            window.innerHeight / Math.max(rect.height, 1),
          );

          return Math.min(2.4, Math.max(1.85, coverScale * 2.1));
        };

        gsap.set(homeHeroCard, {
          autoAlpha: 1,
          scale: 1,
          transformOrigin: "50% 50%",
          willChange: "transform, border-radius, opacity",
          force3D: true,
        });
        gsap.set(homeHeroContent, {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
          force3D: true,
        });
        gsap.set(homeHeroVeil, { autoAlpha: 0 });
        gsap.set(homeHeroAperture, {
          autoAlpha: 0,
          scale: 0.4,
          transformOrigin: "50% 50%",
          willChange: "transform, opacity",
          force3D: true,
        });
        gsap.set(homeHeroCue, { autoAlpha: 1, y: 0 });

        const heroTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: homeHero,
            start: "top top",
            end: "bottom top",
            scrub: 0.18,
            invalidateOnRefresh: true,
          },
        });

        heroTimeline
          .to(
            homeHeroCard,
            {
              scale: getHeroZoomScale,
              borderRadius: 0,
              duration: 1,
            },
            0,
          )
          .to(
            homeHeroCue,
            {
              autoAlpha: 0,
              y: 18,
              duration: 0.14,
            },
            0,
          )
          .to(
            homeHeroContent,
            {
              autoAlpha: 0,
              yPercent: -12,
              scale: 0.95,
              duration: 0.32,
            },
            0.04,
          )
          .to(
            homeHeroVeil,
            {
              autoAlpha: 0.9,
              duration: 0.78,
            },
            0.12,
          )
          .to(
            homeHeroAperture,
            {
              autoAlpha: 1,
              scale: 5.5,
              duration: 0.62,
            },
            0.18,
          )
          .to(
            homeHeroAperture,
            {
              autoAlpha: 0,
              duration: 0.22,
            },
            0.78,
          )
          .to(
            homeHeroCard,
            {
              autoAlpha: 0,
              duration: 0.16,
            },
            0.84,
          );
      }

      if (musicContexts && musicContextVisual) {
        const getMusicOrbTravel = () =>
          Math.max(0, musicContextVisual.clientHeight - 32);

        gsap.set(musicContextVisual, {
          autoAlpha: 1,
          y: 0,
          willChange: "opacity",
          force3D: true,
        });
        gsap.set(musicContextMeter, {
          scaleY: 0,
          transformOrigin: "50% 0%",
          willChange: "transform",
        });
        gsap.set(musicContextOrb, {
          y: 0,
          scale: 0.86,
          willChange: "transform",
          force3D: true,
        });

        const contextsTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: musicContexts,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        contextsTimeline
          .to(
            musicContextMeter,
            {
              scaleY: 1,
              duration: 1,
            },
            0,
          )
          .to(
            musicContextOrb,
            {
              y: getMusicOrbTravel,
              scale: 1.18,
              duration: 1,
            },
            0,
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
                once: true,
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
              once: true,
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
