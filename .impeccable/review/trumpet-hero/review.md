# Music: 3D trumpet opening

Implemented a real procedural 3D trumpet to replace the low-resolution photographic opening. The instrument is rendered locally with Three.js: a hollow flared bell, three piston casings and pearl buttons, nickel trim, curved slides, rings, braces and water key. Model dimensions are 8.053 by 2.673 by 2.405 units; merged geometry uses 50,048 triangles across 11 meshes. No external models, textures or runtime asset services are required.

The scroll sequence turns the instrument from its side toward its bell, brings the viewer closer, and moves it aside while the existing Music introduction appears. Stage lighting uses a generated room environment, warm key and cool rim lighting. The implementation follows the official [Three.js environment lighting API](https://threejs.org/docs/pages/RoomEnvironment.html). The Three.js renderer is loaded only by the Music scene through a dynamic import. Music's performance section and Resume's static introduction retain the preceding user-requested behavior.

## Verification

- One initial desktop/mobile visual batch, one framing and lighting correction batch, and one confirmation batch. Entry, bell-facing midpoint and final summary remain legible; narrow screens receive their own instrument framing. Screenshots are alongside this review.
- Functional checks at 1440 by 1000 and 390 by 844 verified a ready WebGL canvas, a single opening pin, hidden summary controls becoming usable when revealed, and an unpinned performance section. Mobile at 2x density renders a 780 by 1688 canvas. Pixel density is capped at 2.
- Reduced motion leaves the scene static, disables pinning and exposes actions in normal flow. Mouse response does not capture touch gestures. There is no audio.
- Rendering stops after the initial four-second settling motion and resumes on scroll, pointer input or resize. Instrumented browser checks counted zero WebGL clears during 800ms windows after settling, while offscreen, and while reduced motion was idle.
- Navigating from the middle of the Music opening to Resume left no canvas or pin spacers and reset scroll correctly.
- A transparent 2880 by 2000 PNG was exported from the rendered model itself as the loading, unavailable-WebGL and context-loss fallback. A forced WebGL context loss revealed the loaded poster and left both the summary action and Skip intro usable. The fallback is still raster-based; normal operation uses live 3D geometry.
- Production build, TypeScript, ESLint, changed-source formatting and git whitespace checks passed. No JavaScript runtime errors were recorded. The existing Big Shoulders fallback-font build warning remains.

Functional evidence is recorded in `functional.json`. Testing used Chromium desktop and emulated mobile viewports, not physical mobile hardware; no sustained device frame-rate claim is made. Installing Three.js did not introduce an audited vulnerable package; the dependency audit reports existing packages and is saved at `../trumpet-dependency-audit.json`. No deployment was performed.
