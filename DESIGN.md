---
name: Jonathan Graydon Portfolio
description: Flight deck — black, ice-white, blue, condensed typography and refracting glass.
colors:
  background: "#05070b"
  foreground: "#eef4ff"
  accent: "#7dbbff"
  muted: "#a5b5cc"
  hairline: "#2b3b52"
  surface: "#0b111c"
  glass: "rgba(5, 7, 11, 0.2)"
  control-border: "#6989ae"
  badge-ink: "#dbeaff"
  badge-tint: "#3b82f6"
  badge-border: "#93c5fd"
  music-background: "#05070b"
  music-accent: "#7dbbff"
  music-muted: "#a5b5cc"
  music-hairline: "#2b3b52"
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
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.05
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  navigation:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "18px"
    letterSpacing: "0.13em"
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
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
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
    textColor: "{colors.background}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "12px 0"
  search:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.field}"
    padding: "12px"
  filter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
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

Black grounds, ice-white lettering, blue controls and smoked refracting glass connect Home, Projects, Music and Resume. Oversized condensed typography establishes identity; real project images, performance photographs and ruled records carry the evidence. The interface is spacious around introductions and denser around project details, repertoire and resume entries.

Music shares the blue-and-black palette and condensed typography. The existing JG identity and portfolio media remain binding assets under `PRODUCT.md`. Original project screenshots and factual photographs retain their source colors without redefining the interface palette. The Computer Science highlight uses the same flat, ruled row as the Robotics and Music highlights; its former blue background was removed at the user’s request.

This record describes the current implemented CSS and components. The user-authorized cinematic Home opening supersedes layout A’s first viewport. Earlier layout A captures and the forced hero/responsive gates in `.impeccable/build/state.json` remain historical records of that earlier composition, including its original-content exceptions and typography drift. They are not reference captures or approval for the current title card; this document is not a shipping verdict.

**Key Characteristics:**

- Condensed display typography with readable sans-serif evidence text.
- Dark tonal surfaces, thin rules and restrained blue interaction states.
- Refracting navigation and a scroll-held title card over a live computation network.
- Original project media and complete content across all four routes.

## Colors

The palette combines black, ice-white and clear blue, shared across every route.

### Primary

Accent blue marks actions, current navigation, selected filters and focus. The legacy Tailwind blue utility names resolve to blue values in the current theme; they now supply the blue interface system.

### Secondary

Music uses the shared blue accent, cool secondary text and black surfaces. Subtle surface elevation distinguishes its sections.

### Neutral

Graphite is the page ground; ice-white is the main text color. Muted blue-gray supports secondary prose and metadata. Hairlines separate records. The slightly lighter surface appears in the footer and robotics region; transparent glass allows background pixels to contribute to depth.

**The Evidence Color Rule.** Preserve the colors of existing portfolio media; interface tokens govern controls and typography, not the factual images.

## Typography

Big Shoulders supplies page titles, section headings, resume headings and the footer identity. Barlow Condensed supplies project titles, navigation, actions, several supporting headings and Home introduction text. Geist supplies reading text and search/filter controls; Geist Mono supplies compact technology badges and counts. All are loaded through `next/font` in the root layout.

The Home name is a deliberate signature exception: Bebas Neue at weight 400, centered in two stacked uppercase lines without the former horizontal scaling. The title card uses clamp(96px, 15vw, 230px) with 0.83 leading and −0.015em tracking; below 1101px the name becomes 20vw, and below 768px it becomes 29vw with 0.88 leading. Its following Software / Robotics / Music heading uses Big Shoulders at weight 550. In pinned viewports 540–679px high, the name uses min(29vw, 29svh), the bridge heading uses clamp(40px, 8svh, 54px), and introduction text becomes 16px with tighter spacing. These sizes belong to this composition and do not extend the reusable type scale.

The reusable hierarchy runs from the large page display to section headlines, condensed project titles, and calmer body text. Section descriptions use 17px/1.8 with a 68ch cap; page descriptions use the body role. Project details use 14px and cap prose at 70ch. Mobile page titles use 22vw; section headings use 42px. Featured project titles enlarge to 40px, reducing to 34px on mobile.

**The Condensed Hierarchy Rule.** Keep expressive condensed faces on identity, headings and short controls; preserve Geist for sustained reading.

## Layout

The shared container caps at 1536px with 6% horizontal padding, switching to 24px below 768px. Major sections use 110px vertical padding on desktop and 72px on mobile. Thin rules and open space organize content without enclosing every record in glass.

Home opens with a centered, full-viewport title card over the live computation network. Edge fading and a dark radial shade keep the identity legible. Scrolling separates the two name lines in opposing directions and moves the real graph camera through the network. The pinned version also opens the scene’s clipping frame. A Software / Robotics / Music bridge then introduces the original tagline and View projects / View resume actions. The opening releases into the work preview tray in normal flow, with two columns on larger screens and stacked previews on mobile. Home’s preview tray and Featured projects section both select RouteLab and PC Turf. A visible Skip intro link targets that tray; portfolio content and accomplishments remain intact.

With motion permitted, the Home scroll scene runs at every width. At viewport heights of at least 540px, the title card pins for additional scroll travel equal to 1.85 viewport heights at widths of 900px and above, or 1.15 viewport heights below 900px. Between 540px and 679px high, compact typography and spacing reserve room for the bridge actions, network controls and Skip intro. Below 540px high, the title separation and network camera still scrub over 0.85 viewport heights while the readable bridge and actions stay in normal document flow. Reduced motion disables this choreography at every size and keeps all introduction content visible in the unpinned layout. Network controls remain available whenever WebGL initializes, including the unpinned and reduced-motion versions; their caption hides on smaller or compact-height screens while the buttons stay visible.

Projects uses a sticky 220px filter sidebar and two result columns. At 1200px the sidebar becomes 180px and results become one column; below 768px filters move into normal flow as wrapping buttons. Featured projects pair image and text on desktop and stack on mobile.

Music uses ruled accomplishment rows, a repertoire table and a gallery whose lead image spans both columns. On mobile rows and table cells stack, the table header hides, and the gallery becomes one column. Resume presents its document directly below the shared top navigation, with a 28% heading column beside the evidence and stacked section headings on mobile. The secondary section index was removed at the user’s request; all resume content and section anchors remain, and the Contact anchor uses a 96px scroll margin. Print CSS removes navigation and actions and uses dark text on white.

Robotics and Music media reveals run at every width. A whole composition briefly holds when it fits beneath the navigation with 28px of bottom clearance. Below 1024px, if the stacked composition is too tall, only its photograph holds when that media area fits; the following copy and video remain in natural flow. Oversized media receives an unpinned scroll reveal. The top pin clearance is 86px below 768px wide, 96px from 768px to 1023px, and 112px from 1024px. Base scroll travel is 0.68 viewport heights for Robotics and 0.52 for Music, shortened to 65% of those distances below 1024px. Resume retains continuous reading with scroll-linked rules and heading color at every width. Reduced motion disables all scene pins and scroll-driven reveals, leaving the underlying content visible.

## Elevation & Depth

Most records are flat and separated by hairlines. Glass is reserved for navigation and selected media/supporting containers, with inset highlights, diffuse shadows and pointer-tracked sheen. Navigation layers a diagonal white/blue highlight over a black tint at 0.24 opacity, with inset upper, perimeter and lower highlights plus a diffuse drop shadow. Cards retain a diffuse external shadow plus optical edges; this is not a hard offset shadow system.

SVG backdrop displacement preserves the requested background refraction in supported engines. Navigation uses edge displacement scale −20, warp-noise scale 3, optical blur 0.45px, saturation 155%, contrast 1.04 and brightness 1.08; its fine static grain remains unchanged. The surface filter remains unchanged with 0.65px optical blur. WebKit and Gecko retain frosted blur fallbacks of 11px for surfaces and 14px for navigation. Text remains outside the displaced pixels. Do not document the unused legacy light-music navigation modifier as a live theme.

Hover transitions generally last 200–300ms; glass sheen uses 400ms. The computation background renders live blue points, links and traveling signals through WebGL. Perspective, depth fading, additive light and spring deformation give the network volume; it does not sample a raster image. Animation pauses offscreen, in hidden tabs and through the explicit Pause control. Reduced motion starts the scene paused, with an optional Play action; a deterministic SVG network remains available before WebGL initializes or when it is unavailable. Global reduced-motion CSS removes smooth scrolling and nearly eliminates transitions.

The Home sequence follows scroll position with 0.35-second smoothing; reversing scroll reverses the title separation, graph-camera journey and bridge reveal. The network’s Pause button freezes its renderer, while the operating-system reduced-motion preference disables the scroll choreography altogether. Supporting media reveals at every width use 0.45-second smoothing: Robotics opens horizontally with a brief scan across the photograph, and Music opens vertically like a stage aperture. Both ease their image scale from 1.12 to 1 while text and video controls remain available. Resume draws a thin blue rule along each section and shifts its heading toward the accent as the reader advances.

**The Sharp Foreground Rule.** Refract the background while keeping text, focus and controls legible.

## Shapes

Controls use nearly square corners, with slightly softer badges and rounded media frames. Navigation and the work tray share 12px corners and fine borders. Project records are ruled layouts; featured images use rounded corners while ordinary project media can remain square. A dimensional, triangulated network of luminous points and fine connections is the Home signature.

## Components

### Headings and terminology

Headings use direct sentence case, and descriptions state the work, roles and accomplishments supported by the portfolio. CSS may render short controls or identity text in uppercase. The shared `SectionHeading` renders an H2 and optional description, with no eyebrow. `PageHero` uses `title` for the short H1 and `subtitle` for its supporting H2, retaining the existing two-column composition.

| Term                         | Meaning in the interface                                                          |
| ---------------------------- | --------------------------------------------------------------------------------- |
| Projects / Featured projects | The project collection and a selected subset; Home features RouteLab and PC Turf. |
| GitHub                       | The project’s code repository.                                                    |
| Open demo                    | Opens the project’s running demonstration.                                        |
| Download page                | Opens the page hosting the download.                                              |
| Email for a resume PDF       | Opens an email request for a PDF; no file download is promised.                   |

Visible actions stay concise. Project links and Technical details disclosures include the project name in their accessible names; external links announce that they open in a new tab. Named media actions identify the piece or background animation they control.

### Buttons

Primary and secondary actions are outlined at rest, with a minimum height of 48px. Primary uses the accent for text and border; secondary uses ice-white text and a muted blue border. Hover fills both with the accent and darkens the text. Small buttons use 40px minimum height and 8px/12px padding. Ghost actions omit the visible border and fill, and turn accent on hover. Shared visible focus is a 2px accent outline with 5px offset. Pointer response adds glass sheen without magnetic transforms.

### Inputs and filters

Search is a transparent, bordered field with a 14px input and a focus-within accent border. Filters are semantic buttons with `aria-pressed`; selected buttons fill with blue and dark text. Counts use compact mono type. Mobile filters wrap and acquire visible borders. Empty results retain explanatory text and a clear-filter action.

### Badges and records

Technology badges use a faint blue tint, blue border, light ink, mono type and a subtle inset highlight. Project records combine original media, title/status, description, technology badges, expandable technical details and existing links. Detail disclosures use native summaries and an accent open state. Experience, accomplishment and resume entries use rules instead of generic raised cards. Home’s Computer Science, Robotics and Music highlights share one flat, ruled row treatment without a separate image background.

### Navigation

A fixed refracting bar sits 10px from viewport edges. It contains the original JG mark and condensed uppercase route links; the current link has accent text and a bottom underline. The desktop bar is 64px high; below 768px it is 60px with a 44px menu target. The mobile menu is an opaque dark panel with large route links, visible current state, Escape dismissal and focus return. The header retains its layered glass material while scrolling. In engines using SVG backdrop refraction, a static PNG normal map is derived from the bar’s current dimensions and rounded corners, with a 16px rim that flattens toward the center. ResizeObserver and a scheduled animation frame update the map only when dimensions change; scrolling does not regenerate it. The original static SVG map remains the initial fallback.

### Cinematic Home opening

The opening pairs a centered identity with a scroll cue, a fine progress track and a native Skip intro anchor. During the pinned sequence, the bridge becomes interactive as it is revealed; its hidden actions are inert before that point. Without the pin, all bridge content and actions remain visible and interactive in normal flow. The preview tray sits after the opening as ordinary document content. Reduced motion hides the animated cue and progress track while preserving Skip intro and available network controls.

### Live computation network

The Home background is a reproducible graph of 493 nodes and 1,388 weighted connections. CPU projection and damped springs position the network; WebGL renders its live vertices, links and signal particles. The title-card scroll timeline drives camera rotation, perspective, scale and graph deformation through the same renderer, alongside pointer interaction. Signals follow weighted Dijkstra distances through the actual graph rather than expanding as screen-space circles. This is an interactive illustration of computation, not portfolio telemetry or a claim about system performance.

Mouse movement deforms nearby nodes; mouse dragging rotates the network, and a click or tap sends a signal from the nearest node. Touch dragging preserves page scrolling. Native Send signal and Play/Pause buttons provide keyboard access to the main actions, with 44px minimum targets and the shared focus treatment. Paused or reduced-motion signal activation produces a static highlight rather than an animated pulse. The canvas and deterministic SVG fallback are hidden from assistive technology; the meaningful instructions and controls remain semantic HTML. The caption reads Interactive network; instructions describe dragging to rotate and clicking a node to send a signal. Accessible button names are Send signal through the background network and Play background animation / Pause background animation. Controls appear only when the live scene initializes. The renderer releases its resources on unmount and restores the SVG fallback after context loss.

### Performance media

The performance video begins as the official YouTube poster with a Play Bugler’s Holiday control. Its accessible name specifies Bugler’s Holiday with the McMaster Concert Band in the YouTube player. Activation loads the privacy-enhanced YouTube iframe and moves focus to it; the iframe title names Jonathan Graydon, the work and the ensemble. Keep that actionable facade and original performance attribution.

## Do's and Don'ts

### Do:

- Do preserve the existing identity, media, content and accomplishments required by PRODUCT.md.
- Do use the condensed hierarchy and retain comfortable reading measures for evidence text.
- Do use direct sentence-case headings, factual descriptions and action labels that state their destination or outcome.
- Do keep music in the shared blue-and-black palette.
- Do preserve real background refraction, static fallbacks, keyboard focus and reduced-motion behavior.
- Do allow responsive content to flow rather than clipping text to the desktop composition.

### Don't:

- Don't reintroduce the obsolete old green interface or light paper music theme.
- Don't recolor original portfolio media to force palette uniformity.
- Don't present the interactive graph as real performance data or a measured system.
- Don't promote leftover uppercase supporting labels into a required eyebrow or kicker system.
- Don't describe recorded review exceptions as clean pixel matches or shipping approval.

Not canonized: remaining uppercase supporting labels and historical layout A hero/comparison discrepancies are not rules for new surfaces. The former horizontal lettering adjustments and old first-viewport arrangement are superseded history. The current title-card timing and graph journey remain local composition choices, not a requirement to pin every section.
