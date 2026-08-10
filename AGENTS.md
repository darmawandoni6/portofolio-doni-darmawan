# AGENTS.md - Developer Context & Rules for Portfolio Doni Darmawan

This document provides project context, tech stack rules, design guidelines, and developer constraints for any AI coding assistant or developer maintaining or updating this project.

---

## 👤 Profile & Developer Context

- **Full Name**: Doni Darmawan
- **Role**: Software Engineer (5+ Years Experience)
- **Specialization**: Next.js, React, TypeScript, Node.js, WebView Bridges, & Open-Source Libraries
- **Location**: Depok, West Java, Indonesia
- **Email**: darmawandoni6@gmail.com
- **Phone**: +62 085761298781
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

---

## 🛠️ Project Architecture & Tech Stack

```
portofolio-doni-darmawan/
├── assets/                       # Raw source assets (CV PDF & Profile Photo)
├── public/assets/                # Served public assets (me.png, CV_Doni_Darmawan.pdf)
├── src/
│   ├── components/               # React UI Components
│   │   ├── Navbar.tsx            # Sticky navigation bar & mobile menu
│   │   ├── Hero.tsx              # Hero header with profile photo & stats
│   │   ├── NpmSpotlight.tsx      # Open-source NPM packages showcase
│   │   ├── Experience.tsx       # Work experience timeline
│   │   ├── Projects.tsx         # Featured project cards
│   │   ├── Skills.tsx           # Technical skills matrix
│   │   ├── Education.tsx        # Education & Bootcamps
│   │   ├── Contact.tsx          # Direct contact info & quick message form
│   │   ├── Footer.tsx           # Footer with links & copyright
│   │   └── SocialIcons.tsx      # Custom SVG icons for Github & Linkedin
│   ├── data/
│   │   └── cvData.ts             # CENTRAL DATA STORE (CV info, packages, experience)
│   ├── App.tsx                   # Main layout container
│   ├── main.tsx                  # Vite React entrypoint
│   └── index.css                 # Tailwind v4 import & custom CSS animations
├── index.html                    # SEO metadata & Google Fonts
├── vite.config.ts                # Vite configuration with path aliases (@/*)
└── tsconfig.json                 # TypeScript strict configuration
```

---

## 🎨 Design Rules & Styling Guidelines

1. **Aesthetics & Theme**:
   - Primary Background: Dark Slate (`bg-slate-950`)
   - Typography: `Plus Jakarta Sans` (sans-serif) & `JetBrains Mono` (monospace code)
   - Accents: Neon Cyan (`#38bdf8`), Indigo (`#818cf8`), Purple (`#c084fc`), Emerald (`#10b981`)
   - Cards: Glassmorphism (`.glass-card`, `.glass-card-hover`) with semi-transparent background and blur effect.

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

- **Updating Work Experience or Skills**:
  - Open `src/data/cvData.ts` and update `WORK_EXPERIENCES` or `SKILL_CATEGORIES`.

- **Testing & Verification**:
  - Run `npm run build` after editing to ensure zero TypeScript errors.
  - Run `npm run dev` to preview local changes.
