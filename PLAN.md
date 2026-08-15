# Portfolio Plan — Somnath Gaihre

## Techstack

- Next.js v16.3.1
- Tailwindcss v4.3.x
- Framer Motion (`motion`)
- TypeScript, App Router, `src/` directory, npm

## Architecture

- Monolithic, single-page app

## Design Aesthetic

- Dark glassmorphism with blue/indigo gradient accents
- Frosted glass cards (`bg-white/10`, `backdrop-blur`, soft borders, rounded-2xl)
- Ambient gradient blobs + grid/noise overlay background
- Fonts: Space Grotesk (display) + Inter (body) via `next/font`

## Deployment

- Vercel (zero-config)

## Page Sections

- Navbar (sticky glass pill, smooth-scroll anchors, mobile menu)
- Hero
- Experience (timeline + education)
- Stack
- Work
- Contact
- Footer

## Content

- Name: Somnath Gaihre
- Title: Full Stack Developer

### Experience

| Role | Company | Period |
| --- | --- | --- |
| Full Stack Intern | Hivecore Technologies | Apr 2025 - Jul 2025 |
| Full Stack Engineer | Hivecore Technologies | Jul 2025 - Apr 2026 |

### Education

- Bachelors in Science Computer Science and Information Technology
- 2022 - 2026 · Amrit Science Campus, Tribhuvan University

### Stack

JavaScript, TypeScript, Next.js, Nest.js, MongoDB, PostgreSQL, AWS EC2

### Work

- Wellness Automate — CRM Platform for beauty parlour, salon, spa and all beauty shops for appointment booking and booking courses
- FitnSync — Platform to manage booking trainer and scheduling, a gym management system

### Contact

- Phone +977 9864868723
- Gmail somnathgaihre7@gmail.com

---

## Phases

### Phase 1 — Scaffold & Setup
- `npx create-next-app@latest` (Next.js 16, TS, Tailwind v4, App Router, `src/`, npm)
- Install `motion` (Framer Motion)
- Purge boilerplate: delete demo page, unused assets, reset global CSS
- Add `Space Grotesk` + `Inter` fonts via `next/font`
- Define `@theme` tokens in `globals.css` (glass surfaces, accent colors, shadows)
- Configure `metadata` in `layout.tsx`
- **Verify:** `npm run dev` boots, `npm run build` passes

### Phase 2 — Layout & Background System
- Global ambient background component: fixed gradient blobs (blue/indigo), grid/noise overlay
- Shared `Section` wrapper (id anchors, consistent max-width/padding, section headings with badge + title)
- Glass card base styles (utility classes/components)
- `Navbar` — sticky glass pill with smooth-scroll anchor links, mobile menu
- **Verify:** Sections scroll to anchors, background renders correctly

### Phase 3 — Hero Section
- Name + title, animated tagline
- CTAs (View Work / Contact)
- Scroll-down indicator
- Framer Motion entrance animations
- **Verify:** Animations play on load, responsive on mobile

### Phase 4 — Experience & Education
- Timeline layout with glass cards (Hivecore roles + education)
- `whileInView` stagger animations
- **Verify:** Timeline aligns, mobile layout intact

### Phase 5 — Stack & Work
- **Stack:** chip grid — JavaScript, TypeScript, Next.js, Nest.js, MongoDB, PostgreSQL, AWS EC2 (grouped, hover effects)
- **Work:** cards — Wellness Automate, FitnSync (description, hover lift)
- `whileInView` reveal + hover effects
- **Verify:** Grid responsive, animations smooth

### Phase 6 — Contact & Footer
- **Contact:** glass card with tel `+977 9864868723` and mailto `somnathgaihre7@gmail.com`
- **Footer:** copyright, social links, back-to-top
- **Verify:** Links work, layout clean

### Phase 7 — Polish & Verification
- Final pass: spacing, transitions, contrast, reduced-motion respect
- `npm run lint`, `npm run build` — all green
- Confirm Vercel-ready (zero config)
