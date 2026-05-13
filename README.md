# Abdullah Zeb — Portfolio

Premium personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI and Lucide icons.

## Stack

- **Framework**: Next.js 15 (App Router) · React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS · Shadcn UI primitives
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans / Geist Mono

## Quick start

```bash
cd /Users/daffah-mac/abdullah-portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

### Other scripts

```bash
npm run build   # production build
npm run start   # start production server
npm run lint    # eslint
```

## Project structure

```
app/
  layout.tsx          # root layout, metadata, fonts
  page.tsx            # homepage assembly
  globals.css         # tailwind + design tokens

components/
  ui/                 # shadcn-style primitives (button, card, badge, input...)
  sections/           # hero, about, experience, projects, tech-stack, services, testimonials, contact
  navbar.tsx
  footer.tsx
  animated-background.tsx
  section-heading.tsx

lib/
  data.ts             # all portfolio content (profile, projects, experience, services, etc.)
  utils.ts            # cn helper
```

## Customising content

All copy lives in [`lib/data.ts`](./lib/data.ts) — update the `profile`, `experiences`, `projects`, `services`, `testimonials` and `contactChannels` exports to personalise. No content is duplicated across components.

## Deployment

Designed to deploy to Vercel out of the box — `vercel deploy` from this directory, or push to a Git repo and import via the Vercel dashboard.
