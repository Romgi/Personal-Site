import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PIN_TOP = 112;
const PIN_BOTTOM_SPACE = 28;

/** Pin only a complete, readable composition that fits below the navigation. */
function fitsViewport(scene: HTMLElement) {
  return scene.offsetHeight <= window.innerHeight - PIN_TOP - PIN_BOTTOM_SPACE;
}

function mediaScene(
  scene: HTMLElement,
  frame: HTMLElement,
  image: HTMLImageElement,
  fromClip: string,
  travel: number,
) {
  const pin = fitsViewport(scene);

  return gsap
    .timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: scene,
        start: pin ? `top ${PIN_TOP}px` : "top 78%",
        // If a shorter resize no longer fits, release immediately. The reading
        // area never remains pinned with content below the viewport.
        end: () =>
          pin
            ? `+=${fitsViewport(scene) ? Math.round(window.innerHeight * travel) : 1}`
            : "top 24%",
        pin: pin ? scene : false,
        pinSpacing: true,
        scrub: 0.45,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
    .fromTo(
      frame,
      { clipPath: fromClip },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
      0,
    )
    .fromTo(image, { scale: 1.12 }, { scale: 1, duration: 1 }, 0);
}

function setupRobotics(root: HTMLElement) {
  const scene = root.querySelector<HTMLElement>("[data-robotics-scene]");
  const frame = scene?.querySelector<HTMLElement>(".portfolio-image");
  const image = frame?.querySelector("img");

  if (scene && frame && image) {
    const timeline = mediaScene(
      scene,
      frame,
      image,
      "inset(0% 34% 0% 34%)",
      0.68,
    );
    const scan = scene.querySelector<HTMLElement>("[data-robotics-field-scan]");

    if (scan) {
      timeline
        .fromTo(
          scan,
          { x: 0, opacity: 0 },
          { x: () => frame.clientWidth, duration: 1 },
          0,
        )
        .to(scan, { opacity: 0.65, duration: 0.15 }, 0.08)
        .to(scan, { opacity: 0, duration: 0.2 }, 0.8);
    }
  }

  const layers = Array.from(
    root.querySelectorAll<HTMLElement>(
      "[data-robotics-logo], [data-robotics-caption]",
    ),
  );
  const entries = Array.from(
    root.querySelectorAll<HTMLElement>("[data-robotics-entry]"),
  );
  if (!layers.length || !entries.length) return;

  // Create the quick tweens inside the caller's GSAP context so route changes
  // and reduced-motion changes also revert work started by these callbacks.
  const layerOpacity = layers.map((layer) =>
    gsap.quickTo(layer, "opacity", { duration: 0.38, ease: "power2.out" }),
  );
  const activate = (entry: HTMLElement) => {
    layers.forEach((layer, index) => {
      layerOpacity[index](
        layer.dataset.hudYear === entry.dataset.hudYear ? 1 : 0,
      );
    });
  };

  entries.forEach((entry) => {
    ScrollTrigger.create({
      trigger: entry,
      start: "top 55%",
      end: "bottom 55%",
      onEnter: () => activate(entry),
      onEnterBack: () => activate(entry),
      onRefresh: (trigger) => {
        if (trigger.isActive) activate(entry);
      },
    });
  });

  const current = entries.findLast(
    (entry) => entry.getBoundingClientRect().top <= window.innerHeight * 0.55,
  );
  activate(current ?? entries[0]);
}

function setupMusic(root: HTMLElement) {
  const scene = root.querySelector<HTMLElement>("[data-music-scene]");
  const frame = scene?.querySelector<HTMLElement>(".portfolio-image");
  const image = frame?.querySelector("img");
  if (!scene || !frame || !image) return;

  // The photograph opens like a stage aperture. Text and the video controls
  // stay fully visible and interactive throughout the brief hold.
  mediaScene(scene, frame, image, "inset(27% 0% 27% 0%)", 0.52);
}

function setupResume(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>(".resume-section").forEach((section) => {
    gsap.fromTo(
      section,
      { "--section-progress": 0 },
      {
        "--section-progress": 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          end: "bottom 35%",
          scrub: true,
        },
      },
    );

    const heading = section.querySelector("h2");
    if (heading) {
      gsap.to(heading, {
        color: "var(--accent)",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "top 30%",
          scrub: true,
        },
      });
    }
  });
}

/** Call from a GSAP context for desktop with reduced motion opted out. */
export function setupSectionScrollScenes(root: HTMLElement): void {
  setupRobotics(root);
  setupMusic(root);
  setupResume(root);
}
