---
name: Jonathan Graydon Portfolio
description: Flight deck — white and blue surfaces, near-black text, content tiles, cinematic openings and solid navigation.
colors:
  background: "#ffffff"
  foreground: "#11151c"
  accent: "#164bd6"
  on-accent: "#ffffff"
  muted: "#4c5c70"
  text-secondary: "#334155"
  hairline: "#cbd6e5"
  surface: "#edf3fb"
  surface-hover: "#dce8f8"
  accent-soft: "#dce8ff"
  tile-surface: "#edf3fb"
  tile-surface-raised: "#deebff"
  tile-surface-hover: "#dce8f8"
  cobalt: "#164bd6"
  control-border: "#71859f"
  chip-ink: "#173f86"
  chip-surface: "#dce8fa"
  badge-border: "transparent"
  music-background: "#ffffff"
  music-accent: "#164bd6"
  music-muted: "#4c5c70"
  music-hairline: "#cbd6e5"
typography:
  display:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "clamp(66px, 8.3vw, 128px)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "clamp(38px, 4.15vw, 64px)"
    fontWeight: 550
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(30px, 2.8vw, 38px)"
    fontWeight: 600
    lineHeight: 1.06
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  navigation:
    fontFamily: "Geist, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    letterSpacing: "0"
  control:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    letterSpacing: "0.09em"
  badge:
    fontFamily: "Geist Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.025em"
rounded:
  control: "3px"
  field: "4px"
  badge: "6px"
  media: "12px"
  tile: "16px"
  tile-image: "8px"
spacing:
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  7: "28px"
  9: "36px"
  11: "44px"
  12: "48px"
  tile-gap: "24px"
  tile-gap-mobile: "16px"
  tile-inset: "clamp(24px, 2.5vw, 40px)"
components:
  content-tile:
    backgroundColor: "{colors.tile-surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.tile}"
    padding: "{spacing.tile-inset}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "12px 22px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "12px 22px"
  button-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "12px 0"
  search:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.field}"
    padding: "12px"
  filter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "10px"
  skill-badge:
    typography: "{typography.badge}"
    rounded: "{rounded.badge}"
    padding: "4px 10px"
---

# Design System: Jonathan Graydon Portfolio

## Overview

**Creative North Star: "Flight deck"**

White grounds, blue controls, pale-blue tiles, near-black text and a solid white header connect Home, Projects, Music and Resume. This light palette extends through every hero and the footer. Oversized condensed typography establishes identity; real project images, performance photographs and grouped content tiles carry the evidence. Home, Projects and Music have distinct full-viewport scroll openings; Resume opens with an immediately readable static introduction. The interface is spacious around introductions and denser around project details, repertoire and resume entries.

Music shares the white-and-blue foundation and condensed typography. The existing JG identity and portfolio media remain binding assets under `PRODUCT.md`. Original project screenshots, factual photographs and the physical brass trumpet retain their source colors without redefining the interface palette. The user's subsequent request for tiles replaces the former ruled records; white and pale-blue surfaces distinguish the complete content groups.

This record describes the current implemented CSS and components. The user-authorized cinematic Home opening supersedes layout A’s first viewport; the subsequent tile and fullscreen-hero request extends the visual language across the remaining routes. Earlier layout A captures and the forced hero/responsive gates in `.impeccable/build/state.json` remain historical records of that earlier composition, including its original-content exceptions and typography drift. They are not reference captures or approval for the current interface; this document is not a shipping verdict.

**Key Characteristics:**

- Condensed display typography with readable sans-serif evidence text.
- White and pale-blue content tiles, near-black reading text, generous gutters and clear blue interaction states.
- Clear fixed navigation and distinct scroll-held openings: computation, screenshot assembly and a polished 3D trumpet.
- Original project media and complete content across all four routes.

## Colors

The entire interface uses white and blue, with near-black text and accents. `globals.css` and `tiles.css` establish the white default; `palette.css` supplies screen-only `data-tone="paper"` and `data-tone="blue"` scopes. Paper uses a near-white #f6f9fd ground with white tiles. Blue uses a pale #deebff ground with near-black text. The nearest scope supplies the complete reading and control palette, including nested tiles.

### Primary

Royal blue #164bd6 marks actions, current navigation, selected filters and focus. Primary fills and selected filters pair `--accent` with white `--on-accent` text. Large surfaces remain white or pale blue; near-black #11151c supplies primary reading contrast. Existing text utilities follow the foreground, secondary, muted and accent tokens.

| Default semantic token    | Value                       |
| ------------------------- | --------------------------- |
| Background / foreground   | #ffffff / #11151c           |
| Muted / secondary text    | #4c5c70 / #334155           |
| Accent / on-accent        | #164bd6 / #ffffff           |
| Surface / hover           | #edf3fb / #dce8f8           |
| Tile / raised / hover     | #edf3fb / #deebff / #dce8f8 |
| Hairline / control border | #cbd6e5 / #71859f           |
| Accent soft               | #dce8ff                     |
| Chip surface / ink        | #dce8fa / #173f86           |

### Secondary

Pale blue creates separation between tiles and chapters, while subdued blue-gray supports secondary text. Music metadata uses the shared blue accent. Brass and silver belong to the real instrument's material appearance, with no gold or brass interface theme.

### Neutral

Home opens on white with a blue computation network; Projects opens on white with pale screenshot plates. Music places its natural brass trumpet against a white and pale-blue radial studio. Home's discipline tiles, featured projects, Music records and Resume subjects use white and pale-blue groupings with dark text. Resume's static introduction and the shared footer use pale blue. Featured projects use pale-blue tiles. Education, Work experience and standalone Music records use the softer blue surface, so each tile remains distinct on the white page. The Music performance section retains its near-white paper ground.

Space and surface contrast separate collections and chapters; horizontal rules no longer carry the primary grouping. Text, inputs, disclosures, badges and hover states use semantic tokens so they remain legible in each region. Tone overrides apply on screen and leave the existing dark-on-white print treatment intact. Navigation uses opaque white with near-black text and pale-blue current-route tiles.

**The Evidence Color Rule.** Preserve the colors of existing portfolio media; interface tokens govern controls and typography, not the factual images.

Image delivery uses Next.js quality 100 throughout the site. Responsive size hints follow the actual tile and gallery breakpoints so Retina screens receive sufficient pixels, including full-width tablet tiles and the lead gallery image. Keep source files at their original resolution; delivery settings cannot recover detail missing from smaller originals such as the 750 by 1000 lakeside photograph retained in the Music gallery. The Music opening uses a live 3D instrument with a 2880 by 2000 transparent render of the same model as its fallback, rather than a photograph.

## Typography

Big Shoulders supplies page titles, section headings, resume headings and the footer identity. Barlow Condensed supplies project titles, actions, several supporting headings and Home introduction text. Geist supplies reading text, navigation and search/filter controls; desktop navigation uses 14px title-case labels. Geist Mono supplies compact technology badges and counts. All are loaded through `next/font` in the root layout.

The Home name is a deliberate signature exception: Bebas Neue at weight 400, centered in two stacked uppercase lines without the former horizontal scaling. The title card uses clamp(96px, 15vw, 230px) with 0.83 leading and −0.015em tracking; below 1101px the name becomes 20vw, and below 768px it becomes 29vw with 0.88 leading. Its following Software / Robotics / Music heading uses Big Shoulders at weight 550. In pinned viewports 540–679px high, the name uses min(29vw, 29svh), the bridge heading uses clamp(40px, 8svh, 54px), and introduction text becomes 16px with tighter spacing. These sizes belong to this composition and do not extend the reusable type scale.

The reusable hierarchy runs from the large page display to section headlines, condensed project titles, and calmer body text. Section descriptions use 17px/1.8 with a 68ch cap. Project details use 14px and cap prose at 70ch; section headings use 42px on mobile. Project titles use clamp(30px, 2.8vw, 38px), while featured tile titles use clamp(38px, 3.3vw, 52px) and 40px below 768px. About highlight headings use Big Shoulders at clamp(36px, 3.9vw, 56px), reducing to clamp(36px, 10vw, 46px) on mobile. Resume tile headings use clamp(36px, 3.4vw, 48px); entry headings retain Barlow Condensed at 28px/1.2.

The Projects cinematic title uses Big Shoulders at clamp(88px, 17vw, 252px), 0.87 leading and -0.025em tracking. Its mobile title uses 21vw within its bounds, with smaller viewport-height limits on compact pinned screens. Music uses a larger clamp(110px, 22vw, 340px) title with -0.035em tracking, becoming 29vw on mobile. In its pinned composition, the Music title sits at the upper left behind the instrument. Subtitles remain Geist at 16–22px, and final summary text uses 18–23px with a 62ch measure, reducing to 16px on compact pinned screens. These fullscreen compositions are deliberate exceptions to the reusable type scale.

**The Condensed Hierarchy Rule.** Keep expressive condensed faces on identity, headings and short controls; preserve Geist for sustained reading.

## Layout

The shared container caps at 1536px with 6% horizontal padding, switching to 24px below 768px. Major sections use 110px vertical padding on desktop and 72px on mobile. Content tiles use 24px gutters, reducing to 16px below 768px, with clamp(24px, 2.5vw, 40px) internal padding. Each tile groups one coherent subject; entries within a Resume subject remain open instead of becoming nested cards. Open space separates major chapters.

Home opens with a centered, full-viewport title card over the live computation network. Edge fading and a white radial wash keep the identity legible against the blue network. Scrolling separates the two name lines in opposing directions and moves the real graph camera through the network. The pinned version also opens the scene’s clipping frame. A Software / Robotics / Music bridge then introduces the original tagline and View projects / View resume actions. The opening releases into the work preview tray in normal flow, with two columns on larger screens and stacked previews on mobile. Home’s preview tray and Featured projects section both select RouteLab and PC Turf. Portfolio content and accomplishments remain intact.

With motion permitted, the Home scroll scene runs at every width. At viewport heights of at least 540px, the title card pins for additional scroll travel equal to 1.85 viewport heights at widths of 900px and above, or 1.15 viewport heights below 900px. Between 540px and 679px high, compact typography and spacing reserve room for the bridge actions and scroll cue. Below 540px high, the title separation and network camera still scrub over 0.85 viewport heights while the readable bridge and actions stay in normal document flow. Reduced motion disables this choreography at every size and keeps all introduction content visible in the unpinned layout.

Below the Home opening, About separates its introduction and expanded biography into two columns, followed by three discipline tiles in a 1.2fr / 1fr / 1fr grid. Each tile pairs its large title and existing abbreviation with descriptive copy and a destination. At 1100px and below, Computer Science spans two columns above Robotics and Music; below 768px all three stack. The Robotics section groups its original robot photograph, title/season caption and technical record into one continuous tile. Its photograph uses a wide 21:10 crop on desktop and 4:3 on mobile. The Home Music section pairs a 4:5 performance photograph and caption with separate repertoire and accomplishment tiles; the image becomes 4:3 and the composition stacks on mobile.

Projects opens on white with three original screenshots in pale plates assembling from scattered positions beneath the departing title: RouteLab, PC Turf and Personal Portfolio Website. Wide screens resolve into three columns; narrow screens form an overlapping fan. The final description and Explore the projects action appear as the artwork recedes. Project counts and chapter links sit in ordinary flow after the hero.

The Projects explorer retains its sticky filter sidebar and responsive result grid; below 768px filters move into normal flow as a horizontally scrollable row. Both featured and ordinary project tiles place imagery above title, description and technical evidence. Featured projects use two columns, reducing to one below 960px. Original images use object-contain within a 16:10 frame so their full content remains visible, with an inset of 24px on desktop and 16px on mobile. The tile body contains every existing technology, disclosure and destination.

Music opens on a white studio stage with a pale-blue radial backdrop and a live, polished brass trumpet. Warm key light, room reflections and a blue rim light reveal its hollow bell, curved tubing, nickel details and pearl valve buttons. Scrolling rotates the instrument around its bell, then moves the camera toward the opening. The introduction appears through a circular aperture projected from the actual bell rim; as the rim passes beyond the viewport, the aperture becomes the ordinary page background. The Performance & repertoire heading and Watch a performance action are revealed inside that opening. Chapter-link tiles in normal flow lead to the performance, repertoire and gallery. Repertoire is presented in the full searchable list; the separate Featured repertoire section is removed. Accomplishments use three columns, two at 1100px and below, and one on mobile.

The full repertoire remains searchable by composer, piece or descriptive text and retains its semantic table structure. Desktop rows are separate tonal surfaces with 12px vertical spacing; on mobile each record becomes one padded tile while column headings remain available to assistive technology. Gallery figures group original imagery and existing captions into tiles; the lead image spans both desktop columns, the third is portrait-oriented and the fourth centers vertically in its grid row. The gallery becomes one column on mobile.

Resume opens with a static `PageHero` using `animate={false}`. Its Resume & contact title, subtitle, description, Email for a resume PDF and View LinkedIn profile actions are immediately visible and interactive. The introduction has no pinned sequence, decorative folio or scroll cue. Contact links follow as tiles, then subject tiles group Education, Technical skills, Work experience, Projects, Robotics experience, Music experience, and Awards and accomplishments. Paired subjects use two columns, reducing to one below 960px; Work experience spans its full row. Subject headings are static above their evidence, with no sticky heading column or animated divider. Technical skill groups use two columns on desktop and one on mobile. The secondary section index remains removed at the user’s request; all resume content and section anchors remain, and the Contact anchor uses a 96px scroll margin. Print CSS removes navigation and actions, flattens tile groups and uses dark text on white.

Ensemble experience places its heading above a two-column tile grid with the shared 24px gutter. Each ensemble name leads, followed by a blue role and a muted date on a wrapping metadata line, then the original descriptive notes. There are no role bullets. The grid stacks below 960px; ensemble names reduce from 36px to 30px while every record stays in its original reading order.

Projects and Music share the `CinematicHero` structure while retaining different artwork and choreography. With motion permitted and viewport heights of at least 600px, the hero pins at 100svh when its summary fits: up to 46% of the viewport for Projects and 70% for Music. Projects adds 1.5 viewport heights of scroll travel at widths of at least 768px and 1.2 below that; Music adds 1.8 at every width. Both use 0.4-second smoothing. Short viewports, oversized summaries and reduced motion retain visible content in normal flow. Mobile fallback keeps one project screenshot to avoid an unnecessarily long introduction. Each hero has a persistent Skip intro anchor outside animated layers; the scroll label and progress track appear only during the enhanced scene. Hidden summary actions are inert until the summary is visible and the bell aperture has uncovered its controls, and return to normal interaction when the scene is removed.

The Projects Robotics composition retains its media reveal at every width. The whole composition briefly holds when it fits beneath the navigation with 28px of bottom clearance. Below 1024px, if the stacked composition is too tall, only its photograph holds when that media area fits; the following copy remains in natural flow. Oversized media receives an unpinned scroll reveal. The top pin clearance is 86px below 768px wide, 96px from 768px to 1023px, and 112px from 1024px. Base scroll travel is 0.68 viewport heights, shortened to 65% of that distance below 1024px. The Music performance photograph, copy and video use normal flow without a pinned hold, aperture or zoom reveal. Resume subject tiles remain in continuous document flow with accent headings and no visible progress rule. Reduced motion disables all scene pins and scroll-driven reveals, leaving the underlying content visible.

## Elevation & Depth

Content tiles separate through tonal contrast and gutters, without outlining or shadowing every record. The fixed header uses an opaque white surface and a fine lower border. Project images sit within their tile padding without a separate shadow. The cinematic project plates use soft downward shadows to make their assembly legible. Contact tiles use opaque surfaces. The system uses diffuse depth rather than hard offset shadows.

Jonathan's latest explicit request removes liquid glass throughout the interface and supersedes the earlier refraction commitment. The header and mobile menu have no transparency, backdrop filters or pointer-tracked sheen. The Glass switch, persisted glass preference, SVG displacement filters, refraction observers and shared glass-effects infrastructure are removed. The independent computation and trumpet renderers remain part of their existing hero compositions.

Hover transitions generally last 200–300ms. The computation background renders live blue points, links and traveling signals through WebGL. Perspective, depth fading and spring deformation give the network volume. Normal alpha compositing keeps royal-blue links and dark-blue nodes and signals visible on white; the renderer does not sample a raster image. Animation pauses offscreen and in hidden tabs. The scene follows the operating-system reduced-motion preference directly, with no on-page override; a deterministic SVG network remains available before WebGL initializes or when it is unavailable. Global reduced-motion CSS removes smooth scrolling and nearly eliminates transitions.

Project hover and keyboard focus retain the inner image's 4px lift over 550ms with exponential ease-out, without adding a shadow. Native Technical details summaries animate their plus into a minus inside a filled control; all disclosure content remains browser-managed. About highlight links respond through a 220ms surface-color transition, with no extending rule or heading shift. Music's opening uses the instrument's scroll-linked turn and reframing. Repertoire result counts give a brief 220ms update response. These enhancements begin with visible content and honor reduced motion.

The Home sequence follows scroll position with 0.35-second smoothing; reversing scroll reverses the title separation, graph-camera journey and bridge reveal. Projects assembles screenshots, and Music turns its 3D trumpet toward the viewer before the camera travels into the bell and reveals the introduction. Both directions of scroll use the same continuous camera path and projected opening. In Projects, the assembled objects rise and soften before the summary appears. The operating-system reduced-motion preference stops continuous network animation and disables the scroll choreography altogether. The supporting Robotics reveal uses 0.45-second smoothing, opens horizontally with a brief scan across the photograph, and eases image scale from 1.12 to 1. The Music performance photograph, copy and video remain static in normal document flow.

**The Clear Navigation Rule.** Keep the header opaque, route labels readable and keyboard focus visible over every page composition.

## Shapes

Controls use nearly square corners, with slightly softer badges and rounded media frames. The header spans the viewport with a straight lower edge; its current-route state is a pale-blue tile. The work tray retains 12px corners and fine borders. Content tiles use 16px corners; project images and filled Technical details controls use 8px corners. Cinematic screenshot plates use 12px corners. Desktop repertoire rows use 12px end corners, while mobile repertoire tiles use the shared 16px radius. A dimensional, triangulated network of blue points and fine connections is the Home signature.

## Components

### Headings and terminology

Headings use direct sentence case, and descriptions state the work, roles and accomplishments supported by the portfolio. CSS may render short controls or identity text in uppercase. The shared `SectionHeading` renders an H2 and optional description, with no eyebrow. `CinematicHero` supplies the Projects and Music openings: `title` is the H1, `subtitle` is its supporting H2, and description/actions form the later summary. Decorative artwork is hidden from assistive technology; the factual records remain accessible in the page body. Home retains its dedicated name-and-network composition. Resume uses `PageHero` with `animate={false}`, retaining its title, subtitle, description and actions without an entrance animation or scroll choreography.

| Term                         | Meaning in the interface                                                          |
| ---------------------------- | --------------------------------------------------------------------------------- |
| Projects / Featured projects | The project collection and a selected subset; Home features RouteLab and PC Turf. |
| GitHub                       | The project’s code repository.                                                    |
| Open demo                    | Opens the project’s running demonstration.                                        |
| Download page                | Opens the page hosting the download.                                              |
| Email for a resume PDF       | Opens an email request for a PDF; no file download is promised.                   |

Visible actions stay concise. Project links and Technical details disclosures include the project name in their accessible names; external links announce that they open in a new tab. Named media actions identify the piece or background animation they control.

### Buttons

Primary actions use a solid accent fill and on-accent text, changing to the local foreground fill and background text on hover. Secondary actions remain outlined with foreground text and a control-border edge, filling with accent and on-accent text on hover. Both have a minimum height of 48px. Small buttons use 40px minimum height and 8px/12px padding; project actions increase that minimum to 44px. Ghost actions omit the visible border and fill, and turn accent on hover. Shared visible focus is a 2px accent outline with 5px offset. Button icons shift 3px on hover or keyboard focus when motion is permitted. Controls have no shared pointer-tracked glass sheen or magnetic transforms.

### Inputs and filters

Project search uses the local surface, a visible control border and an accent outline on focus. Its input uses 14px type on desktop and 16px on mobile. An inline Clear search button returns focus to the field. Category filters are semantic buttons with `aria-pressed` and `aria-controls`; selected buttons use accent fill and on-accent text. Counts use compact mono type and tabular numerals. Mobile filters form a bordered, horizontally scrollable row with 44px targets. The live result status stays above the list, and empty results retain explanatory text and a clear-filter action.

Repertoire search uses a labeled 16px field, a clear action that returns input focus, and a polite live result count. Search matches every entered word across composer, title and description, without changing the stored order. The initial view includes all pieces. Empty results explain the query and offer Show all pieces. Mobile table headings are visually clipped rather than removed from assistive technology; row headers and cell roles remain explicit in the stacked view.

### Badges and records

Shared technology badges use semantic chip surfaces and ink, transparent borders, mono type and their existing subtle inset highlight. The same tokens govern badges inside project tiles, pairing dark-blue ink with pale-blue fills across white and paper cards. Project tiles combine original media, title/status, description, every technology badge, expandable technical details and existing links. Status pairs a small icon with text; In Progress uses the accent. Detail disclosures use native summaries, a plus/minus indicator and an accent open state within a filled surface control. Experience and accomplishment tiles each group one record; Resume tiles group an entire subject with open entries inside. Home's Computer Science, Robotics and Music highlights form complete navigation tiles with no separate image background.

### Navigation

Projects and Music place chapter-link tiles after their cinematic introductions in normal flow. These remain ordinary anchors with a directional arrow, 20px by 24px padding, the shared tile radius and clear hover/focus treatment. They wrap across a row on desktop and stack on narrow screens. The existing global scroll padding keeps anchor destinations below the fixed navigation. The independent Skip intro anchors lead to featured Projects and Music performance content. Resume does not acquire a new section index.

A fixed, full-width white header sits flush with the top and sides of the viewport. Its inner content caps at 1440px with 6% horizontal padding on desktop and 24px on mobile. The original black JG mark and Jonathan Graydon name sit at the left. Desktop route links use title-case Geist at 14px; the current route has blue text on a pale-blue tile and retains `aria-current="page"`. A cobalt Contact action sits at the right and leads to the existing contact section. The desktop header is 88px high, reducing to 72px on mobile.

The mobile header retains the identity and a 44px menu button. At widths of 359px and below, the button is icon-only with a 44px square target and its accessible label preserved, maintaining the 24px side gutters. Opening it reveals an opaque white panel with large route tiles, a blue current-route highlight and a Contact link. The button exposes its expanded state and controlled panel. Escape dismisses the panel and returns focus to the menu button; choosing a route or contact destination closes it. Moving keyboard focus outside the header, clicking outside it or resizing to desktop also closes the panel. Header and menu remain solid white while scrolling, with no Glass toggle, transparency, refraction, backdrop effect or supporting glass-effects infrastructure. The latest explicit removal request supersedes all earlier glass-navigation preferences.

### Cinematic Home opening

The opening pairs a centered identity with the Scroll to explore cue and a fine progress track. During the pinned sequence, the bridge becomes interactive as it is revealed; its hidden actions are inert before that point. Without the pin, all bridge content and actions remain visible and interactive in normal flow. About Jonathan follows the opening as ordinary document content. Reduced motion hides the entire scroll-cue container, including its animated cue and progress track.

### Cinematic route openings

The Projects and Music openings each give their subject one distinct scroll sequence, then release into the ordinary page. Projects uses uncropped screenshots; Music uses a lit 3D brass trumpet on a white and pale-blue studio backdrop. Title, artwork and summary are separate layers, while Skip intro remains outside the animated layers. The summary's controls become interactive only after it is visible. Without enhancement, title, summary and actions remain visible in normal flow; no script is required to reach the content.

### Live trumpet stage

The Music instrument uses Kagelok's licensed CC BY 4.0 trumpet, stored locally as glTF and binary geometry (884 KB total). The original 28,076 triangles, normals, valve arrangement, tuning slides, braces and finger rings are retained. Runtime adaptation resets the presentation pose, centers the instrument, scales it uniformly, and adjusts material roughness. Asset provenance and license are in `public/models/trumpet/README.md`; visible attribution appears below the Music gallery. Room reflections, warm light and a cool blue rim give the natural brass its form against the white and pale-blue studio. The initial view settles for four seconds, then updates on scroll or input. Mouse movement adds a slight response; touch retains ordinary scrolling, and the scene produces no audio.

Reduced motion keeps a static 3D view and visible introduction in normal flow. A transparent 2880 by 2000 render of the same instrument appears before loading, when WebGL is unavailable, or after context loss. Rendering pauses offscreen and in hidden tabs, and pixel density is capped at 2. Both the canvas and its fallback are decorative and hidden from assistive technology.

### Live computation network

The Home background is a reproducible graph of 493 nodes and 1,388 weighted connections. CPU projection and damped springs position the network; WebGL renders its live vertices, links and signal particles. The title-card scroll timeline drives camera rotation, perspective, scale and graph deformation through the same renderer, alongside pointer interaction. Signals follow weighted Dijkstra distances through the actual graph rather than expanding as screen-space circles. This is an interactive illustration of computation, not portfolio telemetry or a claim about system performance.

Mouse movement deforms nearby nodes; mouse dragging rotates the network, and a click or tap sends a signal from the nearest node. Touch dragging preserves page scrolling. The network has no visible caption, instructions or action buttons. Under reduced motion, signal activation produces a static highlight rather than an animated pulse. The decorative canvas and deterministic SVG fallback are hidden from assistive technology. The renderer releases its resources on unmount and restores the SVG fallback after context loss.

### Performance media

The Music performance section keeps its photograph, introduction and video in normal flow, with no pin, aperture or zoom reveal. The performance video begins as the official YouTube poster with a Play Bugler’s Holiday control. Its accessible name specifies Bugler’s Holiday with the McMaster Concert Band in the YouTube player. Activation loads the privacy-enhanced YouTube iframe and moves focus to it; the iframe title names Jonathan Graydon, the work and the ensemble. Keep that actionable facade and original performance attribution.

## Do's and Don'ts

### Do:

- Do preserve the existing identity, media, content and accomplishments required by PRODUCT.md.
- Do use the condensed hierarchy and retain comfortable reading measures for evidence text.
- Do use direct sentence-case headings, factual descriptions and action labels that state their destination or outcome.
- Do keep the entire interface white and blue with near-black text and accents, including heroes and the footer.
- Do keep navigation opaque and preserve static hero fallbacks, keyboard focus and reduced-motion behavior.
- Do allow responsive content to flow rather than clipping text to the desktop composition.

### Don't:

- Don't reintroduce dark stages, solid cobalt page regions, white body text on blue, or brass interface accents.
- Don't restore liquid glass, a Glass toggle, transparent navigation or refraction infrastructure.
- Don't recolor original portfolio media to force palette uniformity.
- Don't present the interactive graph as real performance data or a measured system.
- Don't promote leftover uppercase supporting labels into a required eyebrow or kicker system.
- Don't describe recorded review exceptions as clean pixel matches or shipping approval.

Not canonized: remaining uppercase supporting labels and historical layout A hero/comparison discrepancies are not rules for new surfaces. The former horizontal lettering adjustments and old first-viewport arrangement are superseded history. The current title-card timing and graph journey remain local composition choices, not a requirement to pin every section.
