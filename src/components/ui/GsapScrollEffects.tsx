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
      const roboticsSection = root.querySelector<HTMLElement>(
        "[data-robotics-experiences]",
      );
      const roboticsScanline = root.querySelector<HTMLElement>(
        "[data-robotics-scanline]",
      );
      const roboticsYear = root.querySelector<HTMLElement>(
        "[data-robotics-year]",
      );
      const roboticsHudLabel = root.querySelector<HTMLElement>(
        "[data-robotics-hud-label]",
      );

      if (homeHero && homeHeroCard) {
        const homeHeroBackground = homeHeroCard.querySelector<HTMLElement>(
          ".hero-background-image",
        );
        const homeHeroAmbient =
          homeHeroCard.querySelector<HTMLElement>(".hero-ambient");
        const homeHeroGrid =
          homeHeroCard.querySelector<HTMLElement>(".hero-grid");

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
          force3D: false,
        });
        if (homeHeroBackground) {
          gsap.set(homeHeroBackground, { autoAlpha: 0.28 });
        }
        if (homeHeroAmbient) {
          gsap.set(homeHeroAmbient, { autoAlpha: 0.86 });
        }
        if (homeHeroGrid) {
          gsap.set(homeHeroGrid, { autoAlpha: 0.14 });
        }
        gsap.set(homeHeroContent, {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
          force3D: false,
        });
        gsap.set(homeHeroVeil, { autoAlpha: 0 });
        gsap.set(homeHeroAperture, {
          autoAlpha: 0,
          scale: 0.4,
          transformOrigin: "50% 50%",
          willChange: "transform, opacity",
          force3D: false,
        });
        gsap.set(homeHeroCue, { autoAlpha: 1, y: 0 });

        const heroTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: homeHero,
            start: "top top",
            end: "bottom bottom",
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
            homeHeroBackground ?? [],
            {
              autoAlpha: 0.08,
              duration: 0.52,
            },
            0.3,
          )
          .to(
            homeHeroAmbient ?? [],
            {
              autoAlpha: 0,
              duration: 0.48,
            },
            0.32,
          )
          .to(
            homeHeroGrid ?? [],
            {
              autoAlpha: 0.04,
              duration: 0.44,
            },
            0.36,
          )
          .to(
            homeHeroVeil,
            {
              autoAlpha: 1,
              duration: 0.58,
            },
            0.3,
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
              duration: 0.24,
            },
            0.76,
          );
      }

      if (
        musicContexts &&
        musicContextVisual &&
        window.matchMedia("(min-width: 1024px)").matches
      ) {
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

      if (roboticsSection && roboticsYear && roboticsHudLabel) {
        // Season HUD: as each experience card crosses the middle of the
        // viewport, the game logo crossfades behind a scanline sweep and
        // the year and team readout roll over with it.
        const logoLayers = gsap.utils.toArray<HTMLElement>(
          "[data-robotics-logo]",
          root,
        );
        const hudElements = [roboticsYear, roboticsHudLabel];
        let activeYear = roboticsYear.textContent?.trim() ?? "";

        logoLayers.forEach((layer, index) => {
          gsap.set(layer, {
            autoAlpha: index === 0 ? 1 : 0,
            scale: index === 0 ? 1 : 0.94,
            transformOrigin: "50% 50%",
            willChange: "transform, opacity, filter",
          });
        });

        if (roboticsScanline) {
          gsap.set(roboticsScanline, { autoAlpha: 0, top: "0%" });
        }

        const applySeason = (year: string, label: string) => {
          if (!year || year === activeYear) {
            return;
          }

          activeYear = year;

          // Rapid scrolling can queue overlapping swaps; clear any tweens
          // still in flight (including delayed ones) before starting.
          gsap.killTweensOf(logoLayers);
          gsap.killTweensOf(hudElements);

          const incoming = logoLayers.find(
            (layer) => layer.dataset.hudYear === year,
          );
          const outgoing = logoLayers.filter((layer) => layer !== incoming);

          gsap.to(outgoing, {
            autoAlpha: 0,
            scale: 0.94,
            filter: "blur(8px)",
            duration: 0.3,
            ease: "power2.in",
            overwrite: "auto",
          });

          if (incoming) {
            gsap.fromTo(
              incoming,
              { autoAlpha: 0, scale: 1.05, filter: "blur(10px)" },
              {
                autoAlpha: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.55,
                delay: 0.14,
                ease: "power3.out",
                overwrite: "auto",
              },
            );
          }

          if (roboticsScanline) {
            gsap
              .timeline({ defaults: { overwrite: "auto" } })
              .set(roboticsScanline, { top: "0%" })
              .to(roboticsScanline, { autoAlpha: 1, duration: 0.1 }, 0)
              .to(
                roboticsScanline,
                { top: "100%", duration: 0.55, ease: "power2.inOut" },
                0,
              )
              .to(roboticsScanline, { autoAlpha: 0, duration: 0.16 }, 0.42);
          }

          gsap
            .timeline()
            .to(hudElements, {
              y: -14,
              autoAlpha: 0,
              filter: "blur(5px)",
              duration: 0.16,
              ease: "power2.in",
              overwrite: "auto",
            })
            .add(() => {
              roboticsYear.textContent = year;
              roboticsHudLabel.textContent = label;
            })
            .fromTo(
              hudElements,
              { y: 16, filter: "blur(5px)" },
              {
                y: 0,
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 0.3,
                ease: "power3.out",
              },
            );
        };

        gsap.utils
          .toArray<HTMLElement>("[data-robotics-entry]", root)
          .forEach((entry) => {
            const activate = () =>
              applySeason(
                entry.dataset.hudYear ?? "",
                entry.dataset.hudLabel ?? "",
              );

            ScrollTrigger.create({
              trigger: entry,
              start: "top 55%",
              end: "bottom 55%",
              onEnter: activate,
              onEnterBack: activate,
            });
          });
      }

      sections
        .filter((section) => !section.hasAttribute("data-home-hero"))
        .forEach((section) => {
          gsap.fromTo(
            section,
            {
              autoAlpha: 0,
              y: 40,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 84%",
                once: true,
              },
            },
          );
        });

      // Batch sibling reveals so grids cascade instead of popping in at once.
      const batchItems = revealItems.filter(
        (item) => !homeHero?.contains(item),
      );

      gsap.set(batchItems, { autoAlpha: 0, y: 32 });

      ScrollTrigger.batch(batchItems, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.09,
            overwrite: true,
          });
        },
      });

      // Slow vertical drift on media while it passes through the viewport.
      gsap.utils
        .toArray<HTMLElement>("[data-parallax]", root)
        .forEach((element) => {
          gsap.fromTo(
            element,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: element.parentElement ?? element,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.4,
                invalidateOnRefresh: true,
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
