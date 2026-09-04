/**
 * A single, document-level SVG filter used by every liquid-glass backdrop.
 *
 * The low-frequency noise behaves like tiny variations in glass thickness:
 * its red and green channels shift backdrop pixels independently, while a
 * very faint copy of the map adds surface texture without affecting content.
 */
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
        <filter
          id="liquid-glass-refraction"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
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
            stdDeviation={0.65}
            edgeMode="duplicate"
            result="softNoise"
          />
          <feComponentTransfer in="softNoise" result="displacementNoise">
            <feFuncR type="linear" slope={0.6} intercept={0.2} />
            <feFuncG type="linear" slope={0.6} intercept={0.2} />
          </feComponentTransfer>
          <feDisplacementMap
            in="SourceGraphic"
            in2="displacementNoise"
            scale={18}
            xChannelSelector="R"
            yChannelSelector="G"
            result="refractedBackdrop"
          />
          <feColorMatrix
            in="rawNoise"
            type="matrix"
            values="0.333 0.333 0.333 0 0
                    0.333 0.333 0.333 0 0
                    0.333 0.333 0.333 0 0
                    0 0 0 0.035 0"
            result="surfaceNoise"
          />
          <feBlend
            in="refractedBackdrop"
            in2="surfaceNoise"
            mode="soft-light"
          />
        </filter>
      </defs>
    </svg>
  );
}
