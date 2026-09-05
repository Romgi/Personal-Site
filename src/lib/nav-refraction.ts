/** A rounded pane's surface normals, encoded in the displacement map's R/G channels. */
function createNavNormalMap(width: number, height: number, radius: number) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.min(2048, Math.max(1, Math.round(width)));
  canvas.height = Math.max(1, Math.round(height));
  const context = canvas.getContext("2d");
  if (!context) return;

  const pixels = context.createImageData(canvas.width, canvas.height);
  const corner = Math.min(radius, height / 2);
  const rim = Math.min(16, height / 2);

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const px = ((x + 0.5) * width) / canvas.width - width / 2;
      const py = ((y + 0.5) * height) / canvas.height - height / 2;
      const qx = Math.abs(px) - (width / 2 - corner);
      const qy = Math.abs(py) - (height / 2 - corner);
      const ox = Math.max(qx, 0);
      const oy = Math.max(qy, 0);
      const length = Math.hypot(ox, oy);
      const depth = corner - length - Math.min(Math.max(qx, qy), 0);
      const t = Math.min(1, Math.max(0, depth / rim));
      // Smoothly flatten toward the center. A 16px rim and 20px displacement
      // keep the sampled image continuous, without folded or mirrored bands.
      const strength = 0.46 * (1 - t * t * (3 - 2 * t));
      const nx = length
        ? (ox / length) * Math.sign(px)
        : qx > qy
          ? Math.sign(px)
          : 0;
      const ny = length
        ? (oy / length) * Math.sign(py)
        : qx > qy
          ? 0
          : Math.sign(py);
      const index = (y * canvas.width + x) * 4;
      pixels.data[index] = Math.round(127.5 + nx * 255 * strength);
      pixels.data[index + 1] = Math.round(127.5 + ny * 255 * strength);
      pixels.data[index + 2] = 128;
      pixels.data[index + 3] = 255;
    }
  }

  context.putImageData(pixels, 0, 0);
  return canvas.toDataURL();
}

/** Rebuild only on a size change; scrolling never regenerates the texture. */
export function observeNavRefraction(nav: HTMLElement | null) {
  const map = document.querySelector<SVGFEImageElement>(
    "#liquid-glass-nav-refraction feImage",
  );
  if (
    !nav ||
    !map ||
    !getComputedStyle(nav)
      .getPropertyValue("backdrop-filter")
      .includes("liquid-glass-nav-refraction")
  )
    return;

  const initialMap = map.getAttribute("href");
  let frame = 0;
  let lastSize = "";
  const update = () => {
    frame = 0;
    const { width, height } = nav.getBoundingClientRect();
    const radius = parseFloat(getComputedStyle(nav).borderTopLeftRadius) || 12;
    const size = `${width}:${height}:${radius}`;
    if (!width || !height || size === lastSize) return;
    lastSize = size;
    const image = createNavNormalMap(width, height, radius);
    if (image) map.setAttribute("href", image);
  };
  const observer = new ResizeObserver(() => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(update);
  });
  observer.observe(nav);

  return () => {
    observer.disconnect();
    cancelAnimationFrame(frame);
    if (initialMap) map.setAttribute("href", initialMap);
  };
}
