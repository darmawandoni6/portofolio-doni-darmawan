# AGENTS.md - Portfolio Doni Darmawan

Vite + React 19 + TypeScript + Tailwind v4 single-page portfolio. All CV content, packages, and projects are data-driven — never hardcode.

## Data source (single source of truth)

- **All personal bio, stats, NPM packages, projects, work experience, skills, education live in `src/data/cvData.ts`.** Update data there, never in component files.
- `NPM_PACKAGES`, `FEATURED_PROJECTS`, `WORK_EXPERIENCES`, `SKILL_CATEGORIES`, `EDUCATION_LIST`, `PERSONAL_DATA`.
- **CV source of truth: `docs/CV_Doni_Darmawan.md` — always read it when asked about the CV, CV PDF, or anything CV-related. Live PDF copy: `public/assets/CV_Doni_Darmawan.pdf`. Keep both in sync.**
- NPM package versions are also fetched live from `registry.npmjs.org` at runtime by `src/hooks/useNpmVersions.ts`; static `version` field in `cvData.ts` is the fallback. Don't chase exact versions in code.

## Commands & verification

- `npm run build` — `tsc && vite build`; typechecks + production build. **Always run after editing.**
- `npm run format` — Prettier write; `npm run format:check` — dry run.
- `npm run dev` — Vite dev server (`http://localhost:5173/`).
- No test framework, no ESLint. Verification = typecheck + build only.

## Structure notes

- Path alias `@/*` → `src/*` (vite.config.ts + tsconfig.json).
- `index.html` holds SEO/OG/Twitter metadata; uses `https://darmawan.netlify.app/` for image URLs.
- Components map 1:1 to sections (Navbar, Hero, NpmSpotlight, Experience, Projects, Skills, Education, Contact, Footer).

## Design rules

- Dual theme: light `bg-slate-50` / dark `bg-slate-950`. Tailwind v4 `@custom-variant dark` in `src/index.css` — dark utilities trigger on `.dark` on root element.
- Cards: `.glass-card`, `.glass-card-hover` glassmorphism classes in `src/index.css`.
- Icons: `lucide-react` for UI; brand icons (`GithubIcon`, `LinkedinIcon`, `WhatsappIcon`) from `src/components/SocialIcons.tsx`.
- Fonts: Plus Jakarta Sans (body), JetBrains Mono (code) — loaded in `index.html`.

## Environment & deploy

- Local Node: `.nvmrc` = 24. Netlify build (`netlify.toml`) uses Node 20, runs `npm run build`, publishes `dist/`.
- Live: `https://darmawan.netlify.app/`.

## Assets

- `public/assets/me.png`, `CV_Doni_Darmawan.pdf`, `banner.png`, `banner.svg` — keep present; PDF/PNG ignored by Prettier (`.prettierignore`).
- `docs/CV_Doni_Darmawan.md` — CV markdown source (see Data source section).
