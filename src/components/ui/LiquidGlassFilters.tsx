type EdgeMapOptions = {
  horizontalInset: number;
  verticalInset: number;
};

function createEdgeNormalMap({
  horizontalInset,
  verticalInset,
}: EdgeMapOptions) {
  const xShoulder = (horizontalInset * 0.42).toFixed(2);
  const yShoulder = (verticalInset * 0.42).toFixed(2);
  const xInner = horizontalInset.toFixed(2);
  const yInner = verticalInset.toFixed(2);
  const xFarInner = (100 - horizontalInset).toFixed(2);
  const yFarInner = (100 - verticalInset).toFixed(2);
  const xFarShoulder = (100 - horizontalInset * 0.42).toFixed(2);
  const yFarShoulder = (100 - verticalInset * 0.42).toFixed(2);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <linearGradient id="x" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#080080"/>
        <stop offset="${xShoulder}%" stop-color="#400080"/>
        <stop offset="${xInner}%" stop-color="#800080"/>
        <stop offset="${xFarInner}%" stop-color="#800080"/>
        <stop offset="${xFarShoulder}%" stop-color="#c00080"/>
        <stop offset="100%" stop-color="#f80080"/>
      </linearGradient>
      <linearGradient id="y" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#000800"/>
        <stop offset="${yShoulder}%" stop-color="#004000"/>
        <stop offset="${yInner}%" stop-color="#008000"/>
        <stop offset="${yFarInner}%" stop-color="#008000"/>
        <stop offset="${yFarShoulder}%" stop-color="#00c000"/>
        <stop offset="100%" stop-color="#00f800"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#x)"/>
    <rect width="100" height="100" fill="url(#y)" style="mix-blend-mode:screen"/>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const surfaceEdgeMap = createEdgeNormalMap({
  horizontalInset: 14,
  verticalInset: 18,
});

const navEdgeMap = createEdgeNormalMap({
  horizontalInset: 8,
  verticalInset: 22,
});

type RefractionFilterProps = {
  id: string;
  edgeMap: string;
  edgeScale: number;
  noiseScale?: number;
};

function RefractionFilter({
  id,
  edgeMap,
  edgeScale,
  noiseScale = 7,
}: RefractionFilterProps) {
  return (
    <filter
      id={id}
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      {/* Inherit the filter subregion. Explicit percentage dimensions resolve
          against the zero-sized definitions SVG in Chromium and lose the map. */}
      <feImage href={edgeMap} preserveAspectRatio="none" result="edgeField" />
      {/* Broad, low-amplitude irregularities in the glass, separate from grain. */}
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.012 0.018"
        numOctaves={2}
        seed={17}
        stitchTiles="stitch"
        result="rawNoise"
      />
      <feGaussianBlur
        in="rawNoise"
        stdDeviation={0.8}
        edgeMode="duplicate"
        result="softNoise"
      />
      <feComponentTransfer in="softNoise" result="warpNoise">
        <feFuncR type="linear" slope={0.7} intercept={0.15} />
        <feFuncG type="linear" slope={0.7} intercept={0.15} />
      </feComponentTransfer>
      <feDisplacementMap
        in="SourceGraphic"
        in2="warpNoise"
        scale={noiseScale}
        xChannelSelector="R"
        yChannelSelector="G"
        result="wavyBackdrop"
      />
      <feDisplacementMap
        in="wavyBackdrop"
        in2="edgeField"
        scale={edgeScale}
        xChannelSelector="R"
        yChannelSelector="G"
        result="edgeRefracted"
      />
      {/* Fine, static grain avoids the cloudy patches of the warp noise. */}
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.72"
        numOctaves={2}
        seed={29}
        stitchTiles="stitch"
        result="fineNoise"
      />
      <feColorMatrix
        in="fineNoise"
        type="saturate"
        values="0"
        result="grayNoise"
      />
      <feComponentTransfer in="grayNoise" result="surfaceNoise">
        <feFuncR type="linear" slope={1.45} intercept={-0.225} />
        <feFuncG type="linear" slope={1.45} intercept={-0.225} />
        <feFuncB type="linear" slope={1.45} intercept={-0.225} />
        <feFuncA type="linear" slope={0.035} />
      </feComponentTransfer>
      <feBlend in="surfaceNoise" in2="edgeRefracted" mode="soft-light" />
    </filter>
  );
}

/** Document-level definitions shared by every liquid-glass backdrop. */
export function LiquidGlassFilters() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      className="liquid-glass-filter-defs"
    >
      <defs>
        <RefractionFilter
          id="liquid-glass-surface-refraction"
          edgeMap={surfaceEdgeMap}
          edgeScale={-40}
        />
        <RefractionFilter
          id="liquid-glass-nav-refraction"
          edgeMap={navEdgeMap}
          edgeScale={-20}
          noiseScale={6}
        />
      </defs>
    </svg>
  );
}
