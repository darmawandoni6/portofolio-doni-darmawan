# AGENTS.md - Developer Context & Rules for Portfolio Doni Darmawan

This document provides project context, tech stack rules, design guidelines, and developer constraints for any AI coding assistant or developer maintaining or updating this project.

---

## 👤 Profile & Developer Context

- **Full Name**: Doni Darmawan
- **Role**: Software Engineer (5+ Years Experience)
- **Specialization**: Next.js, React, TypeScript, Node.js, WebView Bridges, & Open-Source Libraries
- **Location**: Depok, West Java, Indonesia
- **Email**: darmawandoni6@gmail.com
- **Phone**: +62 857-6129-8781
- **GitHub**: [darmawandoni6](https://github.com/darmawandoni6)
- **LinkedIn**: [doni-darmawan](https://www.linkedin.com/in/doni-darmawan/)
- **Profile Image**: `public/assets/me.png`
- **CV PDF**: `public/assets/CV_Doni_Darmawan.pdf`

---

## 📦 Published NPM Packages & Key Projects

When updating package spotlights or projects, reference these exact URLs and details:

1. **`socketio-kit`** (v0.2.0):
   - Description: Developer-friendly Socket.IO SDK wrapper for Client & Express Server with type-safety, room helpers, React hooks, and automatic cleanup.
   - Install: `npm i socketio-kit`
   - NPM: `https://www.npmjs.com/package/socketio-kit`
   - GitHub: `https://github.com/darmawandoni6/socket-kit`

2. **`template-ui-react`** (v2.0.1):
   - Description: CLI tool & starter boilerplate to quickly scaffold React projects with a ready-to-use UI template and modern best practices.
   - Install: `npm i template-ui-react`
   - NPM: `https://www.npmjs.com/package/template-ui-react`
   - GitHub: `https://github.com/darmawandoni6/template-ui-react`

3. **`sidebar-menu-ui`** (v1.0.3):
   - Description: Free simple UI sidebar menu component ready to use for React applications.
   - Install: `npm i sidebar-menu-ui`
   - NPM: `https://www.npmjs.com/package/sidebar-menu-ui`
   - GitHub: `https://github.com/darmawandoni6/sidebar-menu-ui`

4. **AmarthaFin Mobile App (Hybrid WebView Modules)**:
   - Role: Software Engineer (Aug 2021 – Present)
   - Key highlights: Next.js & TypeScript WebView modules integrated in AmarthaFin iOS & Android apps, 80%+ Jest unit test coverage, hybrid WebView JS bridges, CleverTap analytics, KYC verification workflow.
   - Google Play Store: `https://play.google.com/store/apps/details?id=com.amarthaplus.amarthabeyond&hl=id`
   - Apple App Store: `https://apps.apple.com/id/app/amarthafin-investasi-pulsa/id6446885044?l=id`

5. **TwisCode**:
   - Role: Front-End Developer (May 2020 – Aug 2021)
   - Key highlights: Next.js admin dashboards, WordPress & Elementor client landing pages, high-velocity software house projects.

6. **WebChat Monorepo App (`web-chat`)**:
   - Description: High-performance real-time monorepo chat platform featuring Google OAuth 2.0 & Guest auth, private 1-on-1 messaging, group channels, inline file/photo uploads, and presence indicators.
   - Tech Stack: Turborepo, React 18, Vite, Express, TypeScript, Socket.IO (`socketio-kit`), Tailwind CSS v4.
   - GitHub: `https://github.com/darmawandoni6/web-chat`

7. **Education & Bootcamp Credentials**:
   - **Alterra Academy**: Back End Golang Developer Intensive Bootcamp (Jul 2021 – Aug 2021) — [Certificate](https://drive.google.com/file/d/1rcgLEJqXrUm6qZmkK0t5M48lhL_pb_os/view?usp=share_link)
   - **PT. DumbWays Indonesia Teknologi**: Full Stack Developer JavaScript Intensive Bootcamp (Feb 2020 – May 2020) — [Certificate](https://drive.google.com/file/d/1ecbaxKpbvq1xy_FOfehNBmMpZjURYVhO/view?usp=share_link)
   - **Universitas Mikroskil**: Diploma Degree (D3) in Manajemen Informatika (Jan 2016 – Nov 2019)

---

## 🛠️ Project Architecture & Tech Stack

```
portofolio-doni-darmawan/
├── assets/                       # Raw source assets (CV PDF & Profile Photo)
├── public/assets/                # Served public assets (me.png, CV_Doni_Darmawan.pdf)
├── src/
│   ├── components/               # React UI Components
│   │   ├── Navbar.tsx            # Sticky navigation bar with 1-click theme toggle & mobile menu
│   │   ├── Hero.tsx              # Hero header with profile photo, badges & stats
│   │   ├── NpmSpotlight.tsx      # Open-source NPM packages showcase
│   │   ├── Experience.tsx       # Work experience timeline
│   │   ├── Projects.tsx         # Featured project cards
│   │   ├── Skills.tsx           # Technical skills matrix
│   │   ├── Education.tsx        # Education & Bootcamps
│   │   ├── Contact.tsx          # Direct contact info, PDF download CTA & mailto form
│   │   ├── Footer.tsx           # Footer with links & copyright
│   │   └── SocialIcons.tsx      # Custom SVG icons for Github & Linkedin
│   ├── context/
│   │   └── ThemeContext.tsx      # Central Theme Engine (Light, Dark, System fallback & localStorage)
│   ├── data/
│   │   └── cvData.ts             # CENTRAL DATA STORE (CV info, packages, experience)
│   ├── App.tsx                   # Main layout container wrapped with ThemeProvider
│   ├── main.tsx                  # Vite React entrypoint
│   └── index.css                 # Tailwind v4 import, @custom-variant dark & glassmorphism theme tokens
├── index.html                    # SEO metadata & Google Fonts
├── vite.config.ts                # Vite configuration with path aliases (@/*)
└── tsconfig.json                 # TypeScript strict configuration
```

---

## 🎨 Design Rules & Styling Guidelines

1. **Aesthetics & Theme**:
   - **Dual Theme System**: Supports Light Mode (`bg-slate-50`, `#f8fafc`) and Dark Mode (`bg-slate-950`, `#020617`).
   - **System Fallback**: Defaults to OS preference (`prefers-color-scheme`) with 1-click toggle (`Sun` / `Moon`) saved to `localStorage`.
   - **Tailwind v4 Variant**: Configured `@custom-variant dark (&:where(.dark, .dark *));` in `src/index.css` to trigger `dark:` class utilities on root `html`/`body`.
   - **Typography**: `Plus Jakarta Sans` (sans-serif) & `JetBrains Mono` (monospace code).
   - **Accents**: Neon Cyan (`#38bdf8`), Indigo (`#818cf8`), Purple (`#c084fc`), Emerald (`#10b981`).
   - **Cards**: Theme-adaptive Glassmorphism (`.glass-card`, `.glass-card-hover`). Light mode renders crisp white glass cards with soft drop shadows; Dark mode renders dark slate glass cards.

2. **Data-Driven Architecture**:
   - **DO NOT hardcode** CV info, text content, or package details directly inside component files.
   - **ALWAYS edit `src/data/cvData.ts`** when updating personal bio, skills, work experience, projects, or NPM package details.

3. **Icons & Assets**:
   - Standard UI icons use `lucide-react`.
   - Brand icons (GitHub, LinkedIn) use `<GithubIcon />` and `<LinkedinIcon />` from `src/components/SocialIcons.tsx`.

---

## 🚀 Workflows for Future Updates

- **Adding a new NPM package or project**:
  - Open `src/data/cvData.ts` and add an entry to `NPM_PACKAGES` or `FEATURED_PROJECTS`.

- **Updating Work Experience, Skills, or Education**:
  - Open `src/data/cvData.ts` and update `WORK_EXPERIENCES`, `SKILL_CATEGORIES`, or `EDUCATION_LIST` (including `certificateUrl`).

- **Testing & Verification**:
  - Run `npm run build` after editing to ensure zero TypeScript errors.
  - Run `npm run format` to enforce Prettier formatting.
  - Run `npm run dev` to preview local changes.
