<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Status

Next.js 16.3.1, single-page portfolio complete (all 7 phases in `PLAN.md` done). Turbopack, TypeScript, Tailwind v4, App Router, `src/`.

## Sources of truth

- `Requirements.md` — content, stack, design spec (read before implementing)
- `PLAN.md` — phased implementation order; follow it top to bottom

## Intended setup (from PLAN.md)

- Next.js v16.3.1, TypeScript, App Router, `src/` dir, npm
- Tailwind CSS v4.3.x (v4 `@theme` tokens in `globals.css`, not `tailwind.config`)
- Framer Motion via `motion` package
- Single-page dark glassmorphism portfolio (Hero, Experience, Stack, Work, Contact, Footer + sticky navbar)
- Deploy target: Vercel (zero-config)

## Workflow

- Execute phases in `PLAN.md` order
- After each phase, verify with:
  - `npm run lint`
  - `npm run build`
- Commit after completion of each phase (one commit per phase)
- Content must match `Requirements.md` exactly (name, roles, dates, stack, contact details)

## Gotchas

- Tailwind v4: no `tailwind.config.js`; theme goes in `@theme` inside CSS
- Next.js 16 / React 19 — use current App Router conventions, no legacy pages router patterns
- `create-next-app` generates its own `AGENTS.md` (managed block only) — don't let a scaffold copy overwrite this file's custom content
