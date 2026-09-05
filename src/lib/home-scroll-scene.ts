import gsap from "gsap";

export function setupHomeScrollScene(
  root: HTMLElement,
  desktop: boolean,
  pin: boolean,
) {
  const hero = root.querySelector<HTMLElement>(".title-card");
  if (!hero) return;
  const words = hero.querySelectorAll(".title-card-word");
  const role = hero.querySelector(".flight-role");
  const bridge = hero.querySelector<HTMLElement>(".title-card-bridge")!;
  const progress = hero.querySelector(".title-card-progress");
  const visual = hero.querySelector(".computation-visual");
  hero.classList.toggle("is-scroll-scene", pin);
  bridge.inert = pin;
  const camera = { progress: 0 };
  const updateCamera = () => {
    hero.dataset.computationProgress = String(camera.progress);
    hero.dispatchEvent(
      new CustomEvent("computation-scroll", {
        detail: { progress: camera.progress },
      }),
    );
  };
  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      id: "home-title-card",
      trigger: hero,
      start: "top top",
      end: () =>
        `+=${window.innerHeight * (pin ? (desktop ? 1.85 : 1.15) : 0.85)}`,
      pin,
      pinSpacing: true,
      scrub: 0.35,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: (trigger) => {
        camera.progress = trigger.progress;
        updateCamera();
        bridge.inert = pin && Number(gsap.getProperty(bridge, "opacity")) < 0.9;
      },
    },
  });
  timeline
    .to(camera, { progress: 1, duration: 1, onUpdate: updateCamera }, 0)
    .to(progress, { scaleX: 1, duration: 1 }, 0)
    .to(role, { opacity: 0, y: -18, duration: 0.16 }, 0.05)
    .to(
      words[0],
      {
        xPercent: -105,
        yPercent: -16,
        scale: 0.83,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      0.1,
    )
    .to(
      words[1],
      {
        xPercent: 105,
        yPercent: 16,
        scale: 0.83,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      0.1,
    );
  // Short landscape viewports keep the reading content in document flow while
  // the title separation and graph camera still follow the visitor's scroll.
  if (pin) {
    timeline
      .fromTo(
        visual,
        { clipPath: "inset(7% 3% 7% 3% round 24px)" },
        { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 0.5 },
        0.12,
      )
      .fromTo(
        bridge,
        { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.3,
          ease: "power2.out",
          onUpdate: () => {
            bridge.inert = Number(gsap.getProperty(bridge, "opacity")) < 0.9;
          },
        },
        0.61,
      );
  }
  const entry = root.querySelector(".home-entry");
  if (entry)
    gsap.from(entry, {
      y: 52,
      clipPath: "inset(0% 2% 0% 2% round 18px)",
      ease: "none",
      scrollTrigger: {
        trigger: entry,
        start: "top bottom",
        end: "top 55%",
        scrub: true,
      },
    });
  return () => {
    hero.classList.remove("is-scroll-scene");
    bridge.inert = false;
    hero.dataset.computationProgress = "0";
    hero.dispatchEvent(
      new CustomEvent("computation-scroll", { detail: { progress: 0 } }),
    );
  };
}
