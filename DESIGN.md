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

Music shares the blue-and-black palette and condensed typography. The existing JG identity and portfolio media remain binding assets under `PRODUCT.md`. The blue Computer Science background and original project screenshots remain visible source imagery; their colors do not redefine the interface palette.

This record describes implemented CSS and components, supplemented by the refreshed Home desktop, mobile and tablet captures. It is not a shipping verdict: `.impeccable/build/state.json` records forced hero and responsive gates with original-content exceptions and historical typography drift; the independent finish review owns acceptance.

**Key Characteristics:**

- Condensed display typography with readable sans-serif evidence text.
- Dark tonal surfaces, thin rules and restrained blue interaction states.
- Refracting navigation and an image-backed interactive optical instrument.
- Original media and complete content across all four routes.

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

The Home name is a deliberate signature exception: Bebas Neue at weight 400, two stacked uppercase lines, with final CSS horizontal scaling. It is not Big Shoulders and does not establish a reusable transform for other headings. Desktop uses 17.84vw type and 0.79 leading; the tablet override uses 22vw and 0.8 leading, while mobile uses 36.5vw and 0.9 leading. These are composition-specific observations, not added scale tokens.

The reusable hierarchy runs from the large page display to section headlines, condensed project titles, and calmer body text. Section descriptions use 17px/1.8 with a 68ch cap; page descriptions use the body role. Project details use 14px and cap prose at 70ch. Mobile page titles use 22vw; section headings use 42px. Featured project titles enlarge to 40px, reducing to 34px on mobile.

**The Condensed Hierarchy Rule.** Keep expressive condensed faces on identity, headings and short controls; preserve Geist for sustained reading.

## Layout

The shared container caps at 1536px with 6% horizontal padding, switching to 24px below 768px. Major sections use 110px vertical padding on desktop and 72px on mobile. Thin rules and open space organize content without enclosing every record in glass.

The Home desktop hero positions the identity left, optical instrument right and a two-column work preview tray beneath. Below 1101px the hero changes to normal content flow; tablet keeps an overlapping optical image and two previews, while mobile stacks the previews. The instrument stays decorative behind the reading order. The first viewport composition belongs to the surface contract, not every route.

Projects uses a sticky 220px filter sidebar and two result columns. At 1200px the sidebar becomes 180px and results become one column; below 768px filters move into normal flow as wrapping buttons. Featured projects pair image and text on desktop and stack on mobile.

Music uses ruled accomplishment rows, a repertoire table and a gallery whose lead image spans both columns. On mobile rows and table cells stack, the table header hides, and the gallery becomes one column. Resume uses a sticky section index and a 28% heading column beside the evidence; mobile gives the index horizontal scrolling and stacks section headings above content. Print CSS removes navigation and actions and uses dark text on white.

## Elevation & Depth

Most records are flat and separated by hairlines. Glass is reserved for navigation and selected media/supporting containers, with inset highlights, diffuse shadows and pointer-tracked sheen. Navigation uses a subdued graphite tint and an inset upper highlight. Cards retain a diffuse external shadow plus optical edges; this is not a hard offset shadow system.

SVG backdrop displacement preserves the requested background refraction in supported engines. Surface and navigation optical blur are 0.65px and 0.8px; WebKit and Gecko take frosted blur fallbacks of 11px and 14px. Text remains outside the displaced pixels. Do not document the unused legacy light-music navigation modifier as a live theme.

Hover transitions generally last 200–300ms; glass sheen uses 400ms. The optical hero samples a real image through WebGL for pointer distortion and subtle color separation, with a static image fallback. Reduced-motion preferences and offscreen state constrain animation. Global reduced-motion CSS removes smooth scrolling and nearly eliminates transitions.

**The Sharp Foreground Rule.** Refract the background while keeping text, focus and controls legible.

## Shapes

Controls use nearly square corners, with slightly softer badges and rounded media frames. Navigation and the work tray share 12px corners and fine borders. Project records are ruled layouts; featured images use rounded corners while ordinary project media can remain square. The concentric optical silhouette is the Home signature, not a requirement to decorate every section with rings.

## Components

### Buttons

Primary and secondary actions are outlined at rest, with a minimum height of 48px. Primary uses the accent for text and border; secondary uses ice-white text and a muted blue border. Hover fills both with the accent and darkens the text. Small buttons use 40px minimum height and 8px/12px padding. Ghost actions omit the visible border and fill, and turn accent on hover. Shared visible focus is a 2px accent outline with 5px offset. Pointer response adds glass sheen without magnetic transforms.

### Inputs and filters

Search is a transparent, bordered field with a 14px input and a focus-within accent border. Filters are semantic buttons with `aria-pressed`; selected buttons fill with blue and dark text. Counts use compact mono type. Mobile filters wrap and acquire visible borders. Empty results retain explanatory text and a clear-filter action.

### Badges and records

Technology badges use a faint blue tint, blue border, light ink, mono type and a subtle inset highlight. Project records combine original media, title/status, description, technology badges, expandable technical details and existing links. Detail disclosures use native summaries and an accent open state. Experience, accomplishment and resume entries use rules instead of generic raised cards.

### Navigation

A fixed refracting bar sits 10px from viewport edges. It contains the original JG mark and condensed uppercase route links; the current link has accent text and a bottom underline. The desktop bar is 64px high; below 768px it is 60px with a 44px menu target. The mobile menu is an opaque dark panel with large route links, visible current state, Escape dismissal and focus return. The header does not use the obsolete shrinking-on-scroll layout.

### Optical instrument and performance media

The Home instrument is an image-backed WebGL enhancement, not a live 3D scene or a data readout. Its angle annotations are decorative. The image remains available without WebGL. The performance video begins as the official YouTube poster with an explicit Play performance control; activation loads the privacy-enhanced YouTube iframe and moves focus to it. Keep that actionable facade and original performance attribution.

## Do's and Don'ts

### Do:

- Do preserve the existing identity, media, content and accomplishments required by PRODUCT.md.
- Do use the condensed hierarchy and retain comfortable reading measures for evidence text.
- Do keep music in the shared blue-and-black palette.
- Do preserve real background refraction, static fallbacks, keyboard focus and reduced-motion behavior.
- Do allow responsive content to flow rather than clipping text to the desktop composition.

### Don't:

- Don't reintroduce the obsolete old green interface or light paper music theme.
- Don't recolor original portfolio media to force palette uniformity.
- Don't turn decorative optical annotations into unsupported measurements or product claims.
- Don't promote leftover uppercase supporting labels into a required eyebrow or kicker system.
- Don't describe recorded review exceptions as clean pixel matches or shipping approval.

Not canonized: remaining uppercase supporting labels and the historical hero/comparison discrepancies are not rules for new surfaces. Labels are retained implementation details under finish review; the signature lettering adjustments are local composition work, not a global typography recipe.
