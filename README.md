# Jonathan Graydon Portfolio

Production-ready personal portfolio for Jonathan Graydon, built for Vercel with Next.js App Router, TypeScript, Tailwind CSS v4, Motion for React, ESLint, and Prettier.

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
- `src/data/robotics.ts` for FRC roles, skills, timeline entries, robot projects, gallery, and highlights.
- `src/data/music.ts` for trumpet repertoire, accomplishments, ensembles, and music gallery.
- `src/data/resume.ts` for education, skills, resume projects, experience, awards, and placeholders.

Links in data files are validated through `src/lib/links.ts` so unsafe protocols fail early.

## Replace placeholder images

Placeholder assets are in:

- `public/images/profile-placeholder.jpg`
- `public/images/projects/placeholder-1.jpg`
- `public/images/robotics/placeholder-1.jpg`
- `public/images/music/placeholder-1.jpg`

Replace those files with real images using the same paths, or update the image paths in the data files.

## Resume PDF

The resume download button points to `/resume.pdf`. Place the real PDF at:

```txt
public/resume.pdf
```

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
