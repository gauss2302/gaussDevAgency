# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for "Gauss Dev Agency". Vue 3 SPA, built with Vite, styled with Tailwind v4 (via `@tailwindcss/vite`), shipped as a static bundle behind nginx in Docker. Package name in `package.json` is still `sitora-vue` (template artifact).

## Commands

Package manager is **pnpm** (enforced by Dockerfile + `pnpm-lock.yaml`). Node `^20.19.0 || >=22.12.0`.

- `pnpm dev` — Vite dev server.
- `pnpm build` — Runs `type-check` and `build-only` in parallel (`run-p`). `type-check` uses `vue-tsc --noEmit -p tsconfig.app.json --composite false`; build output goes to `dist/`.
- `pnpm build-only` — Skip type-check (faster local iteration; CI/Docker uses full `build`).
- `pnpm type-check` — Standalone vue-tsc check.
- `pnpm format` — Prettier on `src/` (config: no semis, single quotes, printWidth 100).

No test runner or linter is configured. Don't invent `pnpm test` / `pnpm lint` — they don't exist.

## Architecture

- **Entry**: `src/main.ts` constructs the router inline (no separate `router/` module) with three routes: `/` → `views/Home.vue`, `/services` → `views/Service.vue`, `/contact` → `views/Conract.vue`. Note the misspelled filename `Conract.vue` — the import in `main.ts` matches it; rename both together if fixing.
- **Shell**: `App.vue` renders `Header` + `<router-view>` + `Footer`. Global resets and the `#08080c` page background live in `App.vue`'s unscoped `<style>` block.
- **Views** are page-level components and tend to be large (Home is ~23KB) with most styles co-located in scoped `<style>`.
- **`src/components/`** — page-composing components (`Header`, `Footer`, `ContactWidget`).
- **`src/components/ui/`** — reusable visual components re-exported from `ui/index.ts` (`DottedSurface`, `RetroGrid`, `Timeline`, `Badge`, `FeatureSectionWithBentoGrid`). Two TS types are also re-exported from here (`TimelineItem`, `BentoServiceItem`); prefer importing from `@/components/ui` rather than the individual files so renames stay contained.
- **`DottedSurface`** is a Three.js-based animated background — it owns its own WebGL renderer/scene lifecycle (mount/unmount), so don't try to share a renderer across instances.
- **`src/lib/utils.ts`** exposes `cn(...)` (clsx + tailwind-merge) — use it whenever conditionally composing Tailwind classes.
- **`src/types/features.ts`** holds the `FeatureItem` / `FeatureMedia` shapes used by the bento/feature sections.

## Conventions

- **Path alias**: `@/*` → `src/*` (configured in both `vite.config.ts` and `tsconfig.app.json`). Use it instead of long relative paths.
- **Styling**: Tailwind v4 is wired up via the Vite plugin, but most existing components use **scoped `<style>` blocks with hand-written CSS** and a small custom palette (`--surface: #08080c`, `--gold: #faeb92`, `--purple: #9929ea`, `--pink: #cc66da`, `--muted: #a1a1aa`). When extending an existing component, match its styling approach rather than swapping to Tailwind mid-file.
- **Composition API + `<script setup lang="ts">`** throughout; props via `defineProps<…>()` with `withDefaults`, events via typed `defineEmits`.
- Animations frequently use a `mounted` ref toggled in `onMounted(() => requestAnimationFrame(...))` plus `transition-delay: var(--delay)` for staggered reveals — mirror this pattern for consistency.
- `resend` and `dotenv` are listed as dependencies but there is no server code in the repo; email is handled via `mailto:` links in `ContactWidget`. If you wire up a real send flow, the secret/handler must live outside this static bundle.

## Deployment

`Dockerfile` is a two-stage build: `node:20-alpine` runs `pnpm install --frozen-lockfile` + `pnpm run build`, then `dist/` is copied into `nginx:1.27-alpine`. `nginx/conf.d/gaussdev.conf` redirects 80→443, serves the SPA with `try_files … /index.html`, never caches `index.html`, and applies `immutable` long-cache to hashed assets. `docker-compose.yml` mounts `./nginx/ssl` read-only for the TLS cert + key (not committed). If you change `vite.config.ts`'s `server.allowedHosts` or add env-dependent logic, remember the production build is fully static — there is no Node runtime in the prod image.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
