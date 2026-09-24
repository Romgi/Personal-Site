# Music hero revision

Replaced the procedural instrument with Kagelok's locally hosted CC BY 4.0 trumpet. Original artist geometry, normals, materials and real slide/valve layout retained; 28,076 triangles and 883,899 bytes across glTF/bin. Full provenance in public/models/trumpet/README.md and visible attribution below the gallery.

Scroll now rotates toward the actual bell center, dollies toward its opening, and projects the measured rim into a matching content aperture. The Music introduction is revealed inside the bell before the rim expands beyond the viewport. The camera path reverses with scroll and releases into ordinary content flow. Progress is synchronized directly from the timeline and its refresh callback to avoid an observed image-load refresh reset.

Verification:
- Desktop 1440 x 1000 at DPR 2 and mobile 390 x 844 at DPR 2: inspected opening, bell approach, masked content reveal, and completed introduction. No horizontal overflow or final text clipping.
- Final screenshots: final-desktop/ and final-mobile/.
- Reverse scroll to zero restores title opacity 1 and hides/inerts the summary.
- Functional checks: functional.json. Reduced motion, WebGL context loss, Skip intro, unpinned performance, Music to Resume cleanup, repeated image-load refreshes and animation-frame progress sampling all passed.
- Local 2880 x 2000 alpha PNG fallback rendered from the actual replacement model. Canvas capped at DPR 2.
- TypeScript and production build passed. ESLint: zero errors, existing warnings confined to bundled Impeccable scripts. Existing Big Shoulders fallback font metadata warning remains.
- Fresh functional browser session recorded no runtime errors. An earlier development session retained a transient compilation error captured while the model module and renderer were being edited concurrently; this was resolved before verification.

No extra dependencies added in this revision. Existing high-quality image settings, static Resume intro and normal-flow Music performance section preserved.
