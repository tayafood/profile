# TAYA FOOD Profile Website — AI Coding Instructions

## Architecture

Single-page static website (`index.html`, ~1600 lines) with **all CSS embedded in `<style>`** and HTML in one file. No build tools, no bundler, no framework — just vanilla HTML/CSS/JS served via GitHub Pages.

- **`index.html`** — Main page: embedded CSS (~1100 lines) + HTML structure + inline AOS init script + JSON-LD
- **`privacy.html`** — Standalone privacy policy page (own embedded CSS, no shared stylesheet)
- **`asset/js/main.js`** — IIFE module pattern with `I18n`, `MobileMenu`, `HeaderScroll`, `ScrollToTop`, `SmoothScroll` modules
- **`asset/js/seo-config.js`** — Per-language SEO metadata, exposes `window.applySEO(lang)`
- **`asset/js/i18n/*.js`** — 6 language files (vi/en/zh/ja/ko/th), each registers to `window.i18n.<lang>`

## i18n System

Translations use `data-i18n` attributes on HTML elements. The key maps to a flat object in each `asset/js/i18n/<lang>.js` file. Values can contain HTML (e.g. `<span>`, `<br>`), applied via `innerHTML`.

**When adding/editing text content:**
1. Add default Vietnamese text directly in `index.html` with `data-i18n="key_name"`
2. Add the key to ALL 6 files in `asset/js/i18n/` — they must stay in sync
3. Each i18n file registers via: `if (typeof window.i18n === 'undefined') window.i18n = {}; window.i18n.<lang> = <lang>;`
4. i18n files MUST load before `main.js` (see script order at bottom of `index.html`)

## CSS Conventions

- **CSS variables** defined in `:root` — use `var(--primary-red)`, `var(--shadow-md)`, etc.
- **Responsive breakpoints** (mobile-first base, then min-width up):
  - `576px` → small devices
  - `768px` → tablets (nav-links shown, `.menu-toggle` hidden)
  - `1024px` → desktops
  - `1200px` → large desktops
  - `max-width: 767px` → mobile-specific overrides (menu toggle, scrollbar hide, AOS disabling)
  - `max-width: 374px` → extra-small devices
- **AOS on mobile**: `fade-left`/`fade-right`/`flip-*` are neutralized with `transform: none !important; opacity: 1 !important` in the `max-width: 767px` block to prevent horizontal overflow
- Both `html` and `body` have `overflow-x: hidden` — required to prevent AOS pre-animation overflow
- Mobile scrollbar hidden via `scrollbar-width: none` + `::-webkit-scrollbar { display: none }`

## Key Patterns

- **Section numbering**: Sections use `data-aos` attributes and IDs (`#intro`, `#vision`, `#products`, `#strengths`, `#equipment`, `#cert`, `#contact`)
- **Container**: `.container` = `max-width: 1200px; padding: 0 20px` (mobile: `0 16px`)
- **Header**: Fixed position, shrinks padding on scroll (15px → 10px) via `HeaderScroll` module
- **Mobile menu**: Toggle button swaps `fa-bars` ↔ `fa-times` icons, `.nav-links.active` shows dropdown
- **Images**: All in `asset/images/`, referenced as `./asset/images/filename`

## Development Workflow

- **Local dev**: `python -m http.server 8000` from project root (Live Server causes reload issues with Playwright testing)
- **Mobile testing**: Use Playwright at viewport `375×812`. After edits, always verify `scrollWidth === clientWidth` and `overflowCount === 0`
- **Deploy**: Auto-deploys to GitHub Pages on push to `main` via `.github/workflows/static.yml`
- No build step, no npm, no dependencies to install — edit and reload

## External Dependencies (CDN only)

- Font Awesome 6.4.0 — icons (`fas fa-*`)
- AOS 2.3.4 — scroll animations (`data-aos="fade-up"`, etc.)
- Google Fonts — Be Vietnam Pro (weights: 300–800)
- Flag CDN — `flagcdn.com/w40/<code>.png` for language switcher flags
- Google Maps iframe — embedded in contact section
