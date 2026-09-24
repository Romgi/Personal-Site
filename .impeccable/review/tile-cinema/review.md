# Tile layouts and cinematic page openings

Reviewed September 24, 2026 against the user's request for tile grouping and a distinct fullscreen scroll hero on every main page. The existing Home scene remains; Projects, Music and Resume use three new compositions.

## Scope and visual review

- Tiles replace primary ruled records across Home highlights, project collections, robotics, music records, repertoire, gallery and resume subjects.
- Projects assembles screenshot plates, Music opens photographic shutters, and Resume unfolds three factual folio panels.
- Inspected desktop hero entry, middle and end states at 1440 by 1000, plus representative content tiles. Captures are in `desktop/`.
- Inspected mobile hero entry/end states and content at 390 by 844, with representative tablet content at 820px. Captures are in `mobile/`.
- All four routes passed document/content overflow checks at 320, 390 and 820px.

The initial visual pass found three concrete CSS conflicts: featured image containers collapsed, featured gaps retained the previous spacing, and the project result count retained its divider. One correction batch restored stretched media, enforced tile gutters, and removed that divider. Confirmation captured correctly sized artwork on Projects at desktop/mobile and Home on mobile: 24px desktop gaps, 16px mobile gaps, and no result divider. Initial captures remain as evidence of the findings; the final confirmation captures are `desktop/screenshot-1790264737085.png`, `mobile/screenshot-1790264747096.png`, and `mobile/screenshot-1790264756877.png`.

## Functional checks

- The three new heroes pin on desktop and portrait mobile. Summary controls are inert while hidden and interactive when revealed.
- Reduced motion exposes content in ordinary flow with no pin spacers. Short landscape at 844 by 390 also uses normal flow without overflow.
- Skip links, direct section anchors and Home-to-Robotics navigation resolve below the fixed header.
- Navigating between routes mid-pin and returning with Back leaves exactly one appropriate hero pin, without leaked spacers.
- Project search and repertoire search remain functional.
- Hash-only ButtonLink destinations initially failed the existing URL validator; explicit route-and-hash destinations fixed that runtime error.
- Print inspection found cinematic text overriding the resume's dark print styles. The targeted print fix was confirmed using actual browser print media: a 44px heading, dark title/subtitle/summary, normal flow, no pins, visible summary, and no inert controls.

## Code and build checks

- React best-practices review: static hero markup remains server-rendered; animation uses the existing GSAP lifecycle and cleanup; no new client state or dependencies; decorative duplicates are hidden from assistive technology.
- Prettier check passed for changed source and design documentation.
- ESLint passed for `src`.
- Production build and TypeScript validation passed; all nine static outputs generated.
- `git diff --check` passed.

The existing Next.js warning about missing Big Shoulders fallback font override metadata remains. Browser checks used Chromium; external video playback and destination services were outside this layout change's verification scope. No deployment was performed.
