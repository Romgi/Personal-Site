# Jonathan Graydon Portfolio

Production-ready personal portfolio for Jonathan Graydon, built for Vercel with Next.js App Router, TypeScript, Tailwind CSS v4, GSAP scroll animations, ESLint, and Prettier.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
npm run lint
npm run build
npm run format:check
```

## Edit content

Most editable information lives in:

- `src/data/profile.ts` for name, tagline, contact info, navigation, and home highlights.
- `src/data/projects.ts` for project cards, tags, links, status, and featured projects.
- `src/data/robotics.ts` for the FRC robotics section on the projects page, skills, timeline entries, robot projects, gallery, and highlights.
- `src/data/music.ts` for trumpet repertoire, accomplishments, ensembles, and music gallery.
- `src/data/resume.ts` for education, skills, resume projects, experience, and awards.

Links in data files are validated through `src/lib/links.ts` so unsafe protocols fail early.

## Update images

Current site images are stored in:

- `public/images/background.jpg`
- `public/images/projects/`
- `public/images/robotics/`
- `public/images/music/`

Update image paths and alt text in the corresponding files in `src/data/`.

## Resume

The deployed resume page is rendered from `src/data/resume.ts`. The primary resume action uses email so the deployment does not depend on a missing PDF file.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL, for example `https://your-domain.com`.
4. Deploy with the default Next.js settings.

## Security decisions

- No API routes, backend, contact form, or exposed secrets.
- Contact uses `mailto:` and `tel:` links.
- External links are rendered with `rel="noopener noreferrer"`.
- `next.config.ts` sets CSP, `frame-ancestors`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS, and disables `X-Powered-By`.
- Images are restricted to local `/images/**` paths for Next Image optimization.
- `sitemap.ts` and `robots.ts` are generated through App Router metadata conventions.
