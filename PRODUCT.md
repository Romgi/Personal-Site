# Jonathan Graydon Portfolio

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is recruiters and technical collaborators evaluating Jonathan Graydon's software and robotics work. They need to understand his capabilities and inspect the projects, accomplishments, and supporting evidence already presented on the site.

## Product Purpose

Present Jonathan's projects, technical experience, accomplishments, and trumpet performance in a public personal portfolio. A successful visit leaves the visitor very impressed by both the sophistication of the website's frontend and the substance of his work and accomplishments.

The website itself is evidence of frontend engineering ability. Its implementation should demonstrate the same care and technical skill that the portfolio describes.

## Positioning

The portfolio brings together Jonathan's software development, McMaster University Computer Science studies, FRC robotics programming and leadership, and trumpet performance. Its credibility comes from the specific work, roles, accomplishments, repositories, demos, and performance media documented in the project.

## Operating Context

- Public website with Home, Projects, Music, and Resume routes.
- Visitors browse and filter projects, inspect robotics experience, explore music repertoire and performance media, review the resume, and follow available repository, demo, download, and contact links.
- Contact uses email, telephone, and social links. The resume PDF action is an email request; the resume is also presented directly on the website.
- Content is maintained in the TypeScript data files under `src/data/`, with media under `public/images/`.

## Capabilities and Constraints

- **Preserve all existing website content and every listed project.** Future design work must retain the descriptions, accomplishments, credentials, repertoire, media, and supporting links. Removing content or projects requires an explicit change to this instruction from Jonathan.
- Keep factual claims grounded in the existing content and evidence. Do not invent projects, achievements, testimonials, metrics, affiliations, or credentials.
- Maintain the working project filters, navigation, contact actions, media, and external project links as the interface evolves.
- The existing application uses Next.js App Router, React, TypeScript, Tailwind CSS, and GSAP. Follow `AGENTS.md` and the installed Next.js documentation when changing code.
- The current portfolio has no authentication, API routes, or contact form backend. Its content pages are statically generated, and its security policy is defined in `next.config.ts`.

## Brand Commitments

- Preserve the Jonathan Graydon identity and its association with software, robotics, and trumpet performance.
- Use the existing name, JG logo, project images, robotics media, and music media as established assets.
- Jonathan explicitly requested liquid glass that distorts background pixels using SVG displacement and subtle noise. Preserve actual refraction where supported, with a usable fallback in other browsers.
- Frontend sophistication is an explicit product priority. Future work should make that sophistication evident while preserving access to the portfolio's content.

## Evidence on Hand

- `src/data/profile.ts`: identity, introduction, interests, navigation, and contact links.
- `src/data/projects.ts`: the project inventory, descriptions, technologies, statuses, repository links, demos, and downloads.
- `src/data/robotics.ts`: FRC experience, team roles, timeline, robot projects, and supporting media.
- `src/data/music.ts`: trumpet background, repertoire, ensembles, accomplishments, and performance media.
- `src/data/resume.ts`: education, technical skills, experience, projects, and awards.
- `public/images/JGLogo.png` and `public/images/`: the existing identity and portfolio media assets.
- The website's source and rendered interface: direct evidence of frontend implementation, interaction, and responsive behavior.

## Product Principles

1. Impress through both frontend execution and substantive projects and accomplishments.
2. Preserve the complete existing portfolio as presentation and interaction evolve.
3. Make technical experience and its supporting evidence easy for recruiters and collaborators to inspect.
4. Keep every claim attributable to real portfolio content and evidence.
5. Ensure advanced effects remain usable across screen sizes, input methods, and motion preferences.

## Accessibility & Inclusion

Preserve the existing keyboard navigation, visible focus states, skip link, image descriptions, semantic controls, and reduced-motion handling. Important content and actions must remain available on touch devices and when decorative motion or refraction is unavailable. No additional product-specific accessibility standard has been specified.
