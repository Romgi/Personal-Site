---
name: Jonathan Graydon Portfolio
description: Existing technical portfolio and trumpet performance visual system.
colors:
  background: "#101215"
  foreground: "#f8fafc"
  white: "#ffffff"
  primary: "oklch(62.3% 0.214 259.815)"
  primary-deep: "oklch(54.6% 0.245 262.881)"
  primary-light: "oklch(80.9% 0.105 251.813)"
  primary-highlight: "oklch(70.7% 0.165 254.624)"
  muted: "oklch(70.4% 0.04 256.788)"
  secondary-text: "oklch(86.9% 0.022 252.894)"
  hairline: "rgba(148, 163, 184, 0.14)"
  glass-surface: "rgba(8, 12, 22, 0.2)"
  music-ink: "#302316"
  music-muted: "#705c48"
  music-brass: "#b98222"
  music-brass-strong: "#8a5a11"
  music-burgundy: "#74303a"
  music-paper: "#fff7e8"
  music-paper-deep: "#ead4af"
typography:
  display:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: "2.5rem"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: "1.75rem"
  body:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5rem"
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.3em"
  navigation:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: "1.25rem"
  music-headline:
    fontFamily: 'Georgia, "Times New Roman", serif'
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: "2.5rem"
    letterSpacing: "0"
rounded:
  md: "6px"
  lg: "8px"
  hero: "24px"
  pill: "9999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  8: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.navigation}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  glass-card:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "24px"
  skill-badge:
    textColor: "oklch(93.2% 0.032 255.585 / 0.9)"
    rounded: "{rounded.md}"
    padding: "4px 10px"
  navigation:
    typography: "{typography.navigation}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
---

# Design System: Jonathan Graydon Portfolio

## Overview

This record documents the current implementation for live iteration. It does not establish a replacement visual direction or a new creative metaphor. Sources are `src/app/globals.css`, the shared UI components, the installed Tailwind theme, and computed styles from the running home page.

The technical pages use dark backgrounds, blue accents, precise sans-serif headings, monospaced labels, grid textures, and refracting glass surfaces. The music route carries a distinct, existing performance identity through warm paper surfaces, brass and burgundy accents, and serif primary headings. Shared components, navigation, and glass behavior connect the routes.

**Key Characteristics:**

- Dark technical pages and a scoped warm music theme.
- Liquid glass with background refraction, fine grain, edge highlights, and pointer response.
- Large headings, spacious sections, and compact technical labels.
- Scroll-driven reveals and a fixed navigation bar that contracts after scrolling.

## Colors

The frontmatter preserves the actual CSS color formats used by the implementation.

### Primary

Blue is the technical accent: primary actions use a gradient from `primary` to `primary-deep`; `primary-light` and `primary-highlight` appear in labels, focus indicators, and illuminated edges.

### Secondary

The music route uses its existing brass and burgundy accents. These colors apply within `.music-page` and the music navigation modifier.

### Neutral

Dark technical backgrounds pair with bright foreground text, cooler muted copy, fine translucent borders, and transparent glass surfaces. Music content uses paper backgrounds and ink-colored text with warmer secondary copy.

## Typography

Geist supplies the technical headings, body, controls, and navigation. Geist Mono supplies technical labels and skill badges. Music page `h1` and `h2` elements use Georgia with Times New Roman and serif fallbacks; other shared text remains sans-serif.

The home display heading is 48px on small screens and 72px from the small breakpoint, at weight 600 and line-height 1. Section headings step from 30px to 36px. Body prose generally uses 16px with 28px leading, or 18px with 32px leading, while the home introduction uses 20px with 36px leading. The body's inherited baseline is 16px/24px. Navigation and buttons use 14px/20px. Eyebrows are uppercase with expanded tracking; skill badges use the same compact mono family with tighter tracking.

## Layout

The shared container is centered, full width, and capped at 1280px. Horizontal padding grows from 20px to 24px at 640px, then 32px at 1024px. Common gaps and padding use the recorded 4px spacing scale.

Project grids grow from one column to two at 768px and three at 1280px. Text sections commonly cap their introduction at 768px. The fixed header sits 16px from the top and sides; its inner maximum width changes from 1280px to 1024px after scrolling. Desktop navigation appears at 768px, with an expandable menu below that width.

The existing home introduction uses a sticky, viewport-height frame within a 320svh scroll section. Preserve its current scroll behavior during scoped changes to other components.

## Elevation & Depth

Glass combines a translucent tint, refracted backdrop, inset edge highlights, diffuse external shadows, and a pointer-tracked sheen. SVG displacement applies to the backdrop so foreground labels remain sharp. Surface optical blur is 0.65px and navigation optical blur is 0.8px where refraction is supported. Other engines receive the existing frosted fallback. The fine page grain is static and pointer-transparent.

Cards have a diffuse `0 22px 70px rgba(0, 0, 0, 0.2)` external shadow with additional inset highlights. Navigation has a `0 18px 56px rgba(0, 0, 0, 0.22)` external shadow at rest and a deeper scrolled state. Music cards use warm shadows. Full representative snippets are in `.impeccable/design.json`.

Hover changes typically take 200–300ms. Navigation contraction and tint transitions use 500ms; the sheen fades over 400ms. GSAP manages reveal and scroll motion, with existing reduced-motion handling.

## Shapes

Buttons, badges, and compact controls use 6px corners. Navigation, cards, and media surfaces use 8px corners, with thin borders. The home frame has 24px corners, and the scroll cue uses a pill. Preserve each component's incumbent silhouette during a scoped variation unless that variation explicitly changes shape.

## Components

### Buttons

`ButtonLink` has primary, secondary, and ghost variants. Medium buttons have a minimum 48px height and 12px/20px padding; small buttons have a minimum 40px height and 8px/16px padding. Primary actions have a blue gradient, light upper edge, and blue shadow. Secondary actions have a faint white tint and border; ghost actions remain transparent. Focus uses a visible 2px outline with a 4px offset. Primary and secondary links participate in the existing magnetic pointer behavior.

### Chips and badges

Skill badges use monospaced 11px labels, translucent blue backgrounds, fine blue borders, and 4px/10px padding. Project filter chips are actual buttons with `aria-pressed`, 14px text, and a stronger selected border and tint.

### Cards

Glass cards share the refraction and edge treatments but retain their content-specific padding and structure. Common padding is 20px or 24px; project media cards clip images within their rounded boundary. Hover strengthens the border and shadow. The music route overrides the tint, border, and shadow with its warm equivalents.

### Navigation

The fixed bar contains the JG logo, Jonathan's name where space permits, and Home, Projects, Music, and Resume links. The active route has a fine underline and stronger text. The inner row contracts from 64px to 56px after scrolling. The mobile menu button exposes its expanded state; open menus use a stronger tint for legibility over page content and photos. Route changes retain the current menu-closing behavior.

### Section headings

Section introductions combine an optional mono eyebrow with a short accent line, a large heading, and optional muted prose. Left alignment is the default; the component also supports centered alignment.

## Do's and Don'ts

### Do

- Do preserve the existing dark technical and warm music identities in scoped variations.
- Do keep the real content, projects, media, and accomplishments required by `PRODUCT.md`.
- Do preserve backdrop refraction while keeping foreground text and controls sharp.
- Do retain keyboard focus, responsive navigation, reduced-motion behavior, and readable open-menu tints.

### Don't

- Don't spread music-specific colors and serif heading overrides to unrelated routes.
- Don't replace the requested glass refraction with blur alone in browsers that support it.
- Don't add permanent opacity-based backdrop boundaries around glass cards.
- Don't assume the user has approved a new aesthetic, metaphor, palette, or typeface during live setup.
