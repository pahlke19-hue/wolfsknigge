# Wolfsknigge Website — Claude Code Instructions

## Quick Start Commands
- **Dev Server**: `npm run dev` (Runs Astro dev server at localhost:4321)
- **Production Build**: `npm run build` (Builds production bundle to ./dist/)
- **Preview Build**: `npm run preview` (Previews production build locally)
- **Astro Check**: `npx astro check` (Runs TypeScript and Astro checks)

## Project Context
- **Business**: Mobile dog school ("Wolfsknigge"), focusing on dog behavior issues (aggression, anxiety, stress).
- **Service Area**: 35km radius around 24796 Bredenbek (Kiel, Rendsburg, Neumünster, Eckernförde).
- **Primary Goal**: Trust -> Expertise -> Contact (Focus on mobile conversions).
- **Audience**: Primary target group accesses the site via mobile devices, often while on-the-go on dog training fields.

## Tech Stack
- **Framework**: Astro (v6.x) - static routing, `.astro` components.
- **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` in `astro.config.mjs`).
- **SEO & Sitemap**: `@astrojs/sitemap` (excludes `/danke`, `/thanks-formular`, `/404`).
- **Domain**: `https://wolfsknigge.de`

---

## Coding Guidelines & Standards

### 1. Code Style & Patterns
- **Tailwind CSS v4**: Use utility classes for styling. Put global adjustments in `src/styles/global.css`.
- **Responsive Layout**: Mobile-first design. Use CSS `clamp()` for fluid typography and responsive spacing.
- **Semantic HTML**: Use semantic tags (`<main>`, `<article>`, `<section>`, `<nav>`). Exactly one `<h1>` per page.
- **Accessibility (A11y)**: Semantic focus styles, meaningful `alt` attributes, keyboard navigable elements.
- **Progressive Enhancement**: Keep JavaScript minimal. Ensure site is fully functional and readable without JS.

### 2. DSGVO / GDPR Compliance (German Legal Requirements)
- **Self-Hosted Assets Only**: No Google Fonts, Google Maps, or external analytics/reCAPTCHA from third-party CDNs.
- **Privacy Wrappers**: Use double-click / consent wrappers for external embeds (YouTube, Vimeo, maps, social media).
- **Legal Pages**: Mandatory links to Impressum and Datenschutzerklärung in the footer.

### 3. Local SEO
- **Structured Data**: `schema.org/LocalBusiness` JSON-LD configuration for the home page (coordinates, service area, address).
- **Metadata**: Unique `<title>` and `<meta name="description">` on every page.
- **Local Keywords**: Natural integration of geo-keywords: Kiel, Rendsburg, Neumünster, Eckernförde, Bredenbek.

---

## AI Execution Rules (Karpathy-Style Developer Setup)

### 1. Interaction & Output
- **Be Concise**: Provide direct code solutions. Avoid long preambles, summaries, or conversational fluff unless asked.
- **Full Code Blocks**: Do not output lazy code placeholders (e.g. `// ... rest of the code`). Output the complete changed block.
- **Surgical Edits**: Use precise code replacements. Never rewrite entire files when only a few lines change.

### 2. Search & Context
- **Search First**: Always use `grep` or file listings before reading large files.
- **Minimal Token Reading**: Only read relevant sections of files. If a file is > 200 lines, read only the target lines.

### 3. Verification & Guardrails
- **Build Checks**: Run `npm run build` or `npx astro check` to verify compilation before declaring a task done.
- **Strict Consents**: Do NOT run `npm install` for new dependencies, do NOT create Git commits/branches, and do NOT delete files without explicit user approval.
