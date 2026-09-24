# Palette refresh

Kept black and blue as the primary identity, with cobalt landmarks, white paper surfaces, deeper navy tiles, and restrained brass Music metadata. Existing layouts, content, images, hero choreography and static Resume behavior are preserved.

Implementation: semantic ink/paper/cobalt surface tokens in src/app/palette.css. Home About uses paper with cobalt/ink/white discipline tiles. Featured projects use white cards. Music performance uses paper with an ink video card; featured repertoire uses cobalt and paper. Resume has a static cobalt introduction, white Education/Work tiles and cobalt Skills. The footer is cobalt. Buttons, descriptions, search, disclosure panels and skill chips inherit suitable ink and surface colors.

Verification completed in a bounded desktop/mobile batch:

- Home and Resume inspected at 1440x1000 and390x844; Projects and Music inspected at the same sizes by independent reviewer.
- No horizontal overflow, clipped content or new runtime errors in completed routes.
- Project disclosures, combined search/filter/empty state and repertoire search remained functional.
- Sampled body/control text contrast ranges from5.78:1 upward. Resume paper text6.86:1+, cobalt headings6.97:1, Skills chips9.61:1. See resume-contrast.json andfirst-agent/functional.json.
- Primary hover foreground/background checked. Navigation retains dark tint and refraction over paper regions.
- One correction: print contact spans/icons now inherit dark ink; final PDF colors confirmed neutral. The paper/cobalt overrides are screen-only.
- TypeScript and production build passed. ESLint has0errors;94pre-existing warnings come from bundled Impeccable scripts. Existing Big Shoulders fallback-font metadata warning remains.
- Current project data contains no private-project badges; their token styling was inspected in source.

First visual batch required no screen-layout corrections. No additional visual polish cycle was run. DESIGN.md updated. No dependencies or media assets added.
