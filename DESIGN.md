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
    fontSize: "clamp(30px, 2.8vw, 38px)"
    fontWeight: 600
    lineHeight: 1.06
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
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
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
    backgroundColor: "{colors.surface}"
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

The reusable hierarchy runs from the large page display to section headlines, condensed project titles, and calmer body text. Section descriptions use 17px/1.8 with a 68ch cap; page descriptions use the body role. Project details use 14px and cap prose at 70ch. Mobile page titles use 22vw; section headings use 42px. Project titles use clamp(30px, 2.8vw, 38px), while featured titles use clamp(44px, 4.2vw, 64px) and clamp(38px, 9vw, 52px) below 768px. About highlight headings use Big Shoulders at clamp(36px, 4.3vw, 66px), reducing to clamp(34px, 8.5vw, 50px) on mobile. Resume entry headings use Barlow Condensed at 28px/1.2.

**The Condensed Hierarchy Rule.** Keep expressive condensed faces on identity, headings and short controls; preserve Geist for sustained reading.

## Layout

The shared container caps at 1536px with 6% horizontal padding, switching to 24px below 768px. Major sections use 110px vertical padding on desktop and 72px on mobile. Thin rules and open space organize content without enclosing every record in glass.

Home opens with a centered, full-viewport title card over the live computation network. Edge fading and a dark radial shade keep the identity legible. Scrolling separates the two name lines in opposing directions and moves the real graph camera through the network. The pinned version also opens the scene’s clipping frame. A Software / Robotics / Music bridge then introduces the original tagline and View projects / View resume actions. The opening releases into the work preview tray in normal flow, with two columns on larger screens and stacked previews on mobile. Home’s preview tray and Featured projects section both select RouteLab and PC Turf. Portfolio content and accomplishments remain intact.

With motion permitted, the Home scroll scene runs at every width. At viewport heights of at least 540px, the title card pins for additional scroll travel equal to 1.85 viewport heights at widths of 900px and above, or 1.15 viewport heights below 900px. Between 540px and 679px high, compact typography and spacing reserve room for the bridge actions and scroll cue. Below 540px high, the title separation and network camera still scrub over 0.85 viewport heights while the readable bridge and actions stay in normal document flow. Reduced motion disables this choreography at every size and keeps all introduction content visible in the unpinned layout.

Below the Home opening, About separates its introduction and expanded biography into two columns, followed by full-width ruled highlight links. Each link pairs a large discipline title and existing abbreviation with descriptive copy and its destination; these pairs stack below 768px. The Robotics section leads with the original robot photograph, a title/season caption and the existing technical record beneath it. Its photograph uses a wide 21:10 crop on desktop and 4:3 on mobile. The Home Music section pairs a 4:5 performance photograph and caption with open, ruled repertoire and accomplishment records; the image becomes 4:3 and the composition stacks on mobile.

Projects uses a sticky 220px filter sidebar and two result columns. At 1200px the sidebar becomes 180px and results become one column; below 768px filters move into normal flow as a horizontally scrollable row. Featured projects pair a generous image mat with title, description and technical evidence, alternating the image side from 1000px upward and stacking below 768px. The image column is slightly wider on large screens. Original project images use object-contain within a 16:10 frame so their full content remains visible. Ordinary project entries place the same framed imagery above the text. Projects and Music include in-page chapter links beneath their introductions.

Music opens with a large title and introduction beside an existing trumpet photograph. The image occupies the right column across both title and description rows; below 768px the title, introduction and 4:3 image stack. Its chapter links lead to the performance, repertoire and gallery. Featured repertoire presents the work title first, then composer and the original description in open, ruled records. The full repertoire is searchable by composer, piece or descriptive text and retains its original table structure. On mobile, accomplishment rows and table cells stack, column headings remain available to assistive technology, and the gallery becomes one column. Gallery figures include captions from their existing image descriptions; the lead image spans both desktop columns, the third is portrait-oriented and the fourth centers vertically in its grid row.

Resume presents its document directly below the shared top navigation, with a 28% heading column beside the evidence. Section headings stay at a 112px top offset while their section is in view on desktop, and return to normal flow below 768px and in print. Technical skill groups use two columns on desktop and one on mobile. The introduction has the dark surface background. The secondary section index remains removed at the user’s request; all resume content and section anchors remain, and the Contact anchor uses a 96px scroll margin. Print CSS removes navigation and actions and uses dark text on white.

Ensemble experience places its heading above a full-width, two-column grid of open records with thin top rules. Each ensemble name leads, followed by a blue role and a muted date on a wrapping metadata line, then the original descriptive notes. There are no role bullets. The grid uses a 64px column gutter and stacks below 960px; ensemble names reduce from 36px to 30px while every record stays in its original reading order.

The Projects Robotics composition and Music performance composition retain their media reveals at every width. A whole composition briefly holds when it fits beneath the navigation with 28px of bottom clearance. Below 1024px, if the stacked composition is too tall, only its photograph holds when that media area fits; the following copy and video remain in natural flow. Oversized media receives an unpinned scroll reveal. The top pin clearance is 86px below 768px wide, 96px from 768px to 1023px, and 112px from 1024px. Base scroll travel is 0.68 viewport heights for Robotics and 0.52 for Music, shortened to 65% of those distances below 1024px. Resume retains continuous reading with scroll-linked rules and heading color at every width. Reduced motion disables all scene pins and scroll-driven reveals, leaving the underlying content visible.

## Elevation & Depth

Most records are flat and separated by hairlines. Glass is reserved for navigation and selected media/supporting containers, with inset highlights, diffuse shadows and pointer-tracked sheen. Navigation layers a diagonal white/blue highlight over a black tint at 0.24 opacity, with inset upper, perimeter and lower highlights plus a diffuse drop shadow. Project images sit within bordered dark-blue mats; the image itself carries a soft downward shadow. Home Music records are open ruled text rather than glass containers. The system uses diffuse depth rather than hard offset shadows.

SVG backdrop displacement preserves the requested background refraction in supported engines. Navigation uses edge displacement scale −20, warp-noise scale 24, optical blur 0.2px, saturation 155%, contrast 1.04 and brightness 1.08; its fine static grain remains unchanged. The surface filter remains unchanged with 0.65px optical blur. WebKit and Gecko retain frosted blur fallbacks of 11px for surfaces and 14px for navigation. Text remains outside the displaced pixels. Do not document the unused legacy light-music navigation modifier as a live theme.

Hover transitions generally last 200–300ms; glass sheen uses 400ms. The computation background renders live blue points, links and traveling signals through WebGL. Perspective, depth fading, additive light and spring deformation give the network volume; it does not sample a raster image. Animation pauses offscreen and in hidden tabs. The scene follows the operating-system reduced-motion preference directly, with no on-page override; a deterministic SVG network remains available before WebGL initializes or when it is unavailable. Global reduced-motion CSS removes smooth scrolling and nearly eliminates transitions.

Project hover and keyboard focus lift the inner image by 4px over 550ms with exponential ease-out, while the mat border becomes clearer. Native Technical details summaries animate their plus into a minus; all disclosure content remains browser-managed. About highlight links extend an accent rule and shift the heading slightly on hover or focus. Music's hero photograph opens through an 800ms clip-path aperture on initial display at widths of 768px and above when motion is permitted. Repertoire result counts give a brief 220ms update response. These enhancements begin with visible content and honor reduced motion.

The Home sequence follows scroll position with 0.35-second smoothing; reversing scroll reverses the title separation, graph-camera journey and bridge reveal. The operating-system reduced-motion preference stops continuous network animation and disables the scroll choreography altogether. Supporting media reveals at every width use 0.45-second smoothing: Robotics opens horizontally with a brief scan across the photograph, and Music opens vertically like a stage aperture. Both ease their image scale from 1.12 to 1 while text and video controls remain available. Resume draws a thin blue rule along each section and shifts its heading toward the accent as the reader advances.

**The Sharp Foreground Rule.** Refract the background while keeping text, focus and controls legible.

## Shapes

Controls use nearly square corners, with slightly softer badges and rounded media frames. Navigation, the work tray and project image mats use 12px corners and fine borders. Project records keep open text bodies with ruled disclosures; their inset images use 4px corners. A dimensional, triangulated network of luminous points and fine connections is the Home signature.

## Components

### Headings and terminology

Headings use direct sentence case, and descriptions state the work, roles and accomplishments supported by the portfolio. CSS may render short controls or identity text in uppercase. The shared `SectionHeading` renders an H2 and optional description, with no eyebrow. `PageHero` uses `title` for the short H1 and `subtitle` for its supporting H2. Its optional media slot supports Music's photograph-led composition; Projects and Resume retain the text-led two-column introduction.

| Term                         | Meaning in the interface                                                          |
| ---------------------------- | --------------------------------------------------------------------------------- |
| Projects / Featured projects | The project collection and a selected subset; Home features RouteLab and PC Turf. |
| GitHub                       | The project’s code repository.                                                    |
| Open demo                    | Opens the project’s running demonstration.                                        |
| Download page                | Opens the page hosting the download.                                              |
| Email for a resume PDF       | Opens an email request for a PDF; no file download is promised.                   |

Visible actions stay concise. Project links and Technical details disclosures include the project name in their accessible names; external links announce that they open in a new tab. Named media actions identify the piece or background animation they control.

### Buttons

Primary actions use a solid accent fill and dark text, changing to an ice-white fill on hover. Secondary actions remain outlined with ice-white text and a muted blue border, filling with accent and dark text on hover. Both have a minimum height of 48px. Small buttons use 40px minimum height and 8px/12px padding; project actions increase that minimum to 44px. Ghost actions omit the visible border and fill, and turn accent on hover. Shared visible focus is a 2px accent outline with 5px offset. Button icons shift 3px on hover or keyboard focus when motion is permitted. Pointer response retains glass sheen without magnetic transforms.

### Inputs and filters

Project search uses a dark surface, a visible blue border and an accent outline on focus. Its input uses 14px type on desktop and 16px on mobile. An inline Clear search button returns focus to the field. Category filters are semantic buttons with `aria-pressed` and `aria-controls`; selected buttons fill with blue and dark text. Counts use compact mono type and tabular numerals. Mobile filters form a bordered, horizontally scrollable row with 44px targets. The live result status stays above the list, and empty results retain explanatory text and a clear-filter action.

Repertoire search uses a labeled 16px field, a clear action that returns input focus, and a polite live result count. Search matches every entered word across composer, title and description, without changing the stored order. The initial view includes all pieces. Empty results explain the query and offer Show all pieces. Mobile table headings are visually clipped rather than removed from assistive technology; row headers and cell roles remain explicit in the stacked view.

### Badges and records

Shared technology badges use a faint blue tint, blue border, light ink, mono type and a subtle inset highlight. Within project records they become quieter transparent badges with hairline borders, muted ink and no shadow. Project records combine original media, title/status, description, every technology badge, expandable technical details and existing links. Status pairs a small icon with text; In Progress uses the accent. Detail disclosures use native summaries, a plus/minus indicator and an accent open state. Experience, accomplishment and resume entries use rules instead of generic raised cards. Home's Computer Science, Robotics and Music highlights remain flat and ruled, now with larger headings and separate descriptive columns; none has a separate image background.

### Navigation

Projects and Music add chapter links within their page introductions. These are ordinary anchor links with a 44px minimum target, a directional arrow and clear hover/focus color. They wrap across a row on desktop and stack as ruled links on mobile. The existing global scroll padding keeps anchor destinations below the fixed navigation. Resume does not acquire a new section index.

A fixed bar sits 10px from viewport edges. It contains the original JG mark and condensed uppercase route links; the current link has accent text and a bottom underline. Desktop links are centered in a three-column grid, with an always-visible Glass switch at the right. The switch uses a 44px target, `role="switch"`, the accessible name Liquid glass navigation, and `aria-checked` for its state. Glass is on by default; the browser saves the visitor’s choice across routes and reloads. When storage is unavailable, the choice remains usable for the current page session. Turning Glass off gives the same navigation an opaque #0b111c surface, a hairline border and 12px corners, with no backdrop effect, shadow or sheen. Content, route links and menu behavior stay the same.

The desktop bar is 64px high; below 768px it is 60px, with the Glass switch beside the 44px menu target. The mobile menu is an opaque dark panel with large route links, visible current state, Escape dismissal and focus return. When Glass is on, the header retains its layered glass material while scrolling. In engines using SVG backdrop refraction, a static PNG normal map is derived from the bar’s current dimensions and rounded corners, with a 16px rim that flattens toward the center. ResizeObserver and a scheduled animation frame update the map only when dimensions change; scrolling does not regenerate it. The observer runs only while Glass is on. The original static SVG map remains the initial fallback.

### Cinematic Home opening

The opening pairs a centered identity with the Scroll to explore cue and a fine progress track. During the pinned sequence, the bridge becomes interactive as it is revealed; its hidden actions are inert before that point. Without the pin, all bridge content and actions remain visible and interactive in normal flow. The preview tray sits after the opening as ordinary document content. Reduced motion hides the entire scroll-cue container, including its animated cue and progress track.

### Live computation network

The Home background is a reproducible graph of 493 nodes and 1,388 weighted connections. CPU projection and damped springs position the network; WebGL renders its live vertices, links and signal particles. The title-card scroll timeline drives camera rotation, perspective, scale and graph deformation through the same renderer, alongside pointer interaction. Signals follow weighted Dijkstra distances through the actual graph rather than expanding as screen-space circles. This is an interactive illustration of computation, not portfolio telemetry or a claim about system performance.

Mouse movement deforms nearby nodes; mouse dragging rotates the network, and a click or tap sends a signal from the nearest node. Touch dragging preserves page scrolling. The network has no visible caption, instructions or action buttons. Under reduced motion, signal activation produces a static highlight rather than an animated pulse. The decorative canvas and deterministic SVG fallback are hidden from assistive technology. The renderer releases its resources on unmount and restores the SVG fallback after context loss.

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
