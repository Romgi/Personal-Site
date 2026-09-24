import gsap from "gsap";

/** Each route has a distinct composition, within the shared GSAP lifecycle. */
export function setupPageScrollScene(
  root: HTMLElement,
  wide: boolean,
  tall: boolean,
) {
  const hero = root.querySelector<HTMLElement>("[data-page-scene]");
  if (!hero) return;
  const summary = hero.querySelector<HTMLElement>(".scene-summary");
  const title = hero.querySelector<HTMLElement>(".scene-title");
  if (!summary || !title) return;
  const variant = hero.dataset.pageScene;
  const arrival = hero.querySelector<HTMLElement>(".scene-arrival");

  // Keep introductions in natural flow when the reading panel would crowd
  // the stage, including short landscape screens and browser zoom.
  if (
    !tall ||
    summary.scrollHeight >
      window.innerHeight * (variant === "music" ? 0.7 : 0.46)
  )
    return;

  hero.classList.add("is-cinematic");
  summary.inert = true;
  gsap.set(summary, { autoAlpha: 0, y: 28 });
  const syncControls = () => {
    summary.inert =
      Number(gsap.getProperty(summary, "opacity")) < 0.95 ||
      (variant === "music" && Number(hero.dataset.trumpetProgress ?? 0) < 0.74);
  };
  const updateInstrument = (progress: number) => {
    hero.dataset.trumpetProgress = String(progress);
    hero.dispatchEvent(
      new CustomEvent("trumpet-scroll", {
        detail: { progress },
      }),
    );
  };
  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    onUpdate: function () {
      if (variant === "music") updateInstrument(this.progress());
      syncControls();
    },
    scrollTrigger: {
      id: `page-hero-${variant}`,
      trigger: hero,
      start: "top top",
      end: () =>
        `+=${Math.round(window.innerHeight * (variant === "music" ? 1.8 : wide ? 1.5 : 1.2))}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.4,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: (trigger) => {
        if (variant === "music") updateInstrument(trigger.progress);
        syncControls();
      },
    },
  });

  timeline.fromTo(
    hero.querySelector(".scene-progress"),
    { scaleX: 0 },
    { scaleX: 1, duration: 1 },
    0,
  );

  if (variant === "projects") {
    const plates = hero.querySelectorAll<HTMLElement>(".scene-project-plate");
    timeline.to(
      title,
      { yPercent: -32, scale: 1.12, autoAlpha: 0, duration: 0.3 },
      0.08,
    );
    plates.forEach((plate, index) => {
      const side = index - 1;
      timeline.fromTo(
        plate,
        {
          x: () => side * window.innerWidth * (wide ? 0.25 : 0.72),
          y: index === 1 ? 100 : 180,
          rotation: side * 18,
          rotationY: side * -24,
          scale: 0.68,
          opacity: 0.16,
          transformPerspective: 1200,
        },
        {
          x: () => (wide ? 0 : side * window.innerWidth * 0.13),
          y: wide ? (index === 1 ? -24 : 20) : side * 26,
          rotation: wide ? 0 : side * 7,
          rotationY: 0,
          scale: wide ? 1 : index === 1 ? 0.96 : 0.87,
          opacity: 1,
          duration: 0.55,
          ease: "power2.inOut",
        },
        0.12 + index * 0.025,
      );
    });
  } else if (variant === "music") {
    timeline
      .to(title, { yPercent: -18, autoAlpha: 0, duration: 0.24 }, 0.06)
      .to(
        hero.querySelector(".trumpet-poster"),
        { scale: 2.8, opacity: 0, duration: 0.4 },
        0.28,
      );
    if (arrival) {
      // WebGL supplies the projected bell opening. This aperture also works
      // independently when graphics are unavailable or a context is lost.
      timeline.fromTo(
        arrival,
        { "--fallback-aperture": "0vmax" },
        { "--fallback-aperture": "150vmax", duration: 0.4, ease: "power2.in" },
        0.46,
      );
      timeline.fromTo(
        arrival,
        { "--portal-reveal": 0 },
        { "--portal-reveal": 1, duration: 0.08 },
        0.48,
      );
    }
  }

  if (variant === "projects") {
    timeline.to(
      hero.querySelector(".scene-project-stack"),
      { yPercent: -30, duration: 0.25, ease: "power2.inOut" },
      0.64,
    );
    timeline.to(
      hero.querySelectorAll(".scene-project-plate"),
      { opacity: 0.6, duration: 0.2 },
      0.74,
    );
  }

  timeline.to(
    summary,
    {
      autoAlpha: 1,
      y: 0,
      duration: variant === "music" ? 0.21 : 0.22,
      ease: "power2.out",
    },
    variant === "music" ? 0.52 : 0.7,
  );

  return () => {
    hero.classList.remove("is-cinematic");
    summary.inert = false;
    if (variant === "music") {
      updateInstrument(0);
      delete hero.dataset.trumpetProgress;
    }
  };
}
