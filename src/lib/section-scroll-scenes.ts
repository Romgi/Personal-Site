import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PIN_BOTTOM_SPACE = 28;

function pinTop() {
  // The mobile bar ends at 70px and the tablet bar at 74px. Retain the
  // original desktop breathing room while giving small screens more space.
  return window.innerWidth < 768 ? 86 : window.innerWidth < 1024 ? 96 : 112;
}

/** Pin only a complete, readable composition that fits below the navigation. */
function fitsViewport(scene: HTMLElement) {
  return scene.offsetHeight <= window.innerHeight - pinTop() - PIN_BOTTOM_SPACE;
}

function mediaScene(
  scene: HTMLElement,
  frame: HTMLElement,
  image: HTMLImageElement,
  fromClip: string,
  travel: number,
) {
  const stacked = window.innerWidth < 1024;
  const media = scene.querySelector<HTMLElement>(
    "[data-robotics-scene-media], [data-music-scene-media]",
  );
  // A stacked story is often taller than a phone. Hold just its photograph in
  // that case; the following copy and video retain their natural document flow.
  const pinTarget = fitsViewport(scene)
    ? scene
    : stacked && media && fitsViewport(media)
      ? media
      : null;
  const trigger = pinTarget ?? (stacked ? (media ?? scene) : scene);
  const scrollTravel = stacked ? travel * 0.65 : travel;

  return gsap
    .timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger,
        start: () => (pinTarget ? `top ${pinTop()}px` : "top 78%"),
        // If a shorter resize no longer fits, release immediately. The reading
        // area never remains pinned with content below the viewport.
        end: () =>
          pinTarget
            ? `+=${fitsViewport(pinTarget) ? Math.round(window.innerHeight * scrollTravel) : 1}`
            : "top 24%",
        pin: pinTarget ?? false,
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

/** Call from a GSAP context when reduced motion is opted out. */
export function setupSectionScrollScenes(root: HTMLElement): void {
  // Nested matchMedia is owned by the caller's context. Rebuild when the layout
  // stacks, navigation changes size, or device rotation changes what can fit.
  gsap.matchMedia().add(
    {
      all: "all",
      stacked: "(max-width: 1023px)",
      mobile: "(max-width: 767px)",
      landscape: "(orientation: landscape)",
    },
    () => {
      setupRobotics(root);
      setupMusic(root);
      setupResume(root);
    },
  );
}
