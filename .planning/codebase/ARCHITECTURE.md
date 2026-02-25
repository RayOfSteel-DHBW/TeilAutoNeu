# Architecture

## Overview

Static multi-page website for **teilAuto Mössingen** (a carsharing cooperative). The site uses a **template-compiled static architecture** — HTML source files are processed through the [Tera](https://keats.github.io/tera/) templating engine (Rust-based Jinja2 variant) at build time and emitted as flat HTML/CSS into a `build/dist/` output directory. There is no JavaScript framework and no server-side runtime. JS is split into small deferred scripts for UI interactions (nav toggle, accordion, pricing, fleet map).

**Pattern:** Source-template compilation → static file output
**Language:** HTML (Tera syntax), CSS (Tailwind v4 + custom), vanilla JS
**Build tooling:** PowerShell 7 + `tera-cli` (chevdor fork) + Tailwind CLI
**Package manager:** npm (devDependencies only: `tailwindcss@^4.1.18`, `@tailwindcss/cli@^4.1.18`, `postcss`, `autoprefixer`)

## Entry Points

| Entry Point | File | Role |
|---|---|---|
| **Build entry** | `scripts/build-site.ps1` | Orchestrates clean/build/watch via PowerShell |
| **npm entry** | `package.json` | Exposes `clean`, `build`, `watch`, `dev` scripts that invoke the PS1 |
| **Page entry (home)** | `src/index.html` | Landing page — first page users see |
| **Layout root** | `templates/base.html` | Parent template all pages extend |

### Page inventory (9 pages)

| Page | Source | External CSS | Nav link |
|---|---|---|---|
| Home | `src/index.html` | — | — |
| Preise | `src/preise.html` | — | Preise |
| Nachhaltigkeit | `src/nachhaltig.html` | — | — |
| Fahrzeuge | `src/fahrzeuge.html` | MapLibre GL CSS (CDN) | Fahrzeuge |
| Für Firmen | `src/geschaeftskunden.html` | — | Für Firmen |
| Über uns | `src/ueber-uns.html` | — | Über uns |
| Mitglied werden | `src/mitglied-werden.html` | — | — |
| Datenschutz | `src/datenschutz.html` | — | — |
| Impressum | `src/impressum.html` | — | — |

All pages use Tailwind utility classes via the global `tailwind.css` + `base.css`. No page-specific CSS files.

## Build Pipeline

```
npm run build
  └─ pwsh scripts/build-site.ps1 -Task build
       ├─ Invoke-Clean          → rm -rf build/
       └─ Invoke-Build
            ├─ For each file in src/ (recursive):
            │    └─ tera --include-path templates/ --env-only --template <file> -o build/dist/<file>
            ├─ Invoke-Tailwind
            │    └─ npx @tailwindcss/cli -i src/tailwind.css -o build/dist/tailwind.css
            └─ Copy public/* → build/dist/   (JS, images, data, static assets)
```

### Key build details

- **Tera CLI flags:** `--include-path` points to `templates/` for `{% extends %}` and `{% include %}` resolution. `--env-only` means no JSON/TOML data context is passed — templates rely only on Tera built-in functions and block inheritance.
- **All `src/` files** are processed through Tera, including `.css` files. CSS files pass through unchanged (no Tera syntax in them), but the pipeline treats everything uniformly.
- **Tailwind CSS:** `src/tailwind.css` (containing `@tailwind base/components/utilities`) is compiled by `@tailwindcss/cli` into `build/dist/tailwind.css`. Scans `src/` and `templates/` for utility class usage via `tailwind.config.js` content paths.
- **Watch mode** uses `System.IO.FileSystemWatcher` on `src/`, `templates/`, and `public/` with a 250ms debounce. Any change triggers a full rebuild (including Tailwind recompile).
- **Output:** `build/dist/` is the deploy-ready directory (flat structure mirroring `src/` + compiled Tailwind CSS + public assets).
- **No minification, no bundling, no source maps.** Output is Tera-rendered HTML + Tailwind-compiled CSS + custom CSS + copied JS/images.

## Page Architecture

### Template inheritance model

```
templates/base.html               ← defines: title, head, header, main, footer blocks
  │                                  includes partials/header.html and partials/footer.html
  │
  ├── src/index.html               {% extends "base.html" %}  → fills title, head, main
  │     └── {% include "accordion.html" %}
  ├── src/preise.html              {% extends "base.html" %}
  ├── src/fahrzeuge.html           {% extends "base.html" %}
  │     └── {% include "map-parking.html" %}
  ├── src/nachhaltig.html          {% extends "base.html" %}
  ├── src/geschaeftskunden.html    {% extends "base.html" %}
  ├── src/ueber-uns.html           {% extends "base.html" %}
  ├── src/mitglied-werden.html     {% extends "base.html" %}
  ├── src/datenschutz.html         {% extends "base.html" %}
  └── src/impressum.html           {% extends "base.html" %}

templates/partials/header.html   ← nav bar with hamburger button + nav links
templates/partials/footer.html   ← footer content (contact, legal links)
templates/accordion.html         ← FAQ accordion, included by index.html
templates/map-parking.html       ← MapLibre map, included by fahrzeuge.html
```

### Block contract (base.html)

| Block | Required | Purpose |
|---|---|---|
| `title` | No | Page title (defaults to "teilAuto Mössingen") |
| `head` | No | Page-specific `<meta>`, `<link>` tags |
| `header` | No | Includes `partials/header.html` by default; pages can override |
| `main` | No | Main page content |
| `footer` | No | Includes `partials/footer.html` by default; pages can override |

### Layout structure (base.html)

```html
<body class="min-h-screen bg-brand-surface text-brand-ink font-sans">
  <a class="sr-only focus:not-sr-only ..." href="#main-content">Zum Inhalt springen</a>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-brand-muted bg-white">{% include "partials/header.html" %}</header>
    <main id="main-content" class="flex-1">
      <div class="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{% block main %}</div>
    </main>
    <footer class="border-t border-brand-muted bg-brand-surface">{% include "partials/footer.html" %}</footer>
  </div>
  <script src="js/nav.js" defer></script>
  <script src="js/accordion.js" defer></script>
</body>
```

Key: `min-h-screen flex flex-col` + `flex-1` on main = sticky footer pattern (already working).

### Navigation (partials/header.html)

The header partial contains:
- **Brand link:** `<a>teilAuto Mössingen</a>`
- **Hamburger button:** `<button>` with `aria-controls="primary-nav"`, `aria-expanded="false"`, `aria-label`, hidden on `md:` via `md:hidden`
- **Nav element:** `<nav id="primary-nav">` with `hidden` class toggled by `nav.js`, shown on desktop via `md:flex`
- **Nav links:** Plain `<a>` tags (Preise, Fahrzeuge, Für Firmen, Über uns) — no active page indicator yet

### CSS strategy

- **`tailwind.css`** — Tailwind v4 directives (`@tailwind base/components/utilities`). Processed by Tailwind CLI.
- **`base.css`** — Custom styles: Google Fonts import (Source Sans 3, Space Grotesk), box-sizing reset, heading typography, image reset, link colors, focus-visible ring, fleet map/marker/popup styles.
- **Page-specific CSS** — No longer used; pages rely on Tailwind utility classes.
- **`tailwind.config.js`** — Custom theme tokens: `brand-primary`, `brand-ink`, `brand-surface`, `brand-muted`, `font-display` (Space Grotesk).
- **Responsive approach:** Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) for breakpoints. Custom CSS uses `@media (min-width)` for fleet map only.

## Data Flow

Mostly static content authored in HTML templates, with two JSON-driven features:

- **Pricing data** — loaded from `public/data/pricing.json` by `public/js/pricing.js` at runtime.
- **Vehicle info** — hardcoded in `fahrzeuge.html`.
- **Map markers** — hardcoded coordinates in `map-parking.html` (uses MapLibre GL JS with OpenFreeMap tiles).
- **FAQ content** — hardcoded in `accordion.html`.
- **Contact form** — `mitglied-werden.html` has a `<form>` with `onsubmit="alert(...)"` — **not wired to any backend**.

No API calls, no CMS integration. Content changes require editing HTML source files (or JSON data files) and rebuilding.

## Key Abstractions

### 1. Tera template system
The central abstraction. `base.html` acts as a layout shell; pages extend it and fill blocks. Reusable fragments are included via `{% include %}`. Partials (`header.html`, `footer.html`) provide shared layout components.

### 2. Tailwind utility layer
All layout and styling uses Tailwind CSS v4 utility classes. Custom brand tokens (`brand-primary`, `brand-ink`, `brand-surface`, `brand-muted`) defined in `tailwind.config.js`. `base.css` only handles fonts, headings, and fleet map styles.

### 3. Deferred JS scripts
Interactive behavior split into focused scripts loaded with `defer`: `nav.js` (hamburger toggle), `accordion.js` (FAQ expand/collapse), `pricing.js` (JSON-driven pricing), `fleet-map.js` (MapLibre map). No bundler — each script is self-contained.

### 4. Build script as orchestrator
`build-site.ps1` is the single build entry point, handling clean, build, and file-watching in one script. It invokes Tera CLI per-file for template rendering, Tailwind CLI for CSS, and copies static assets.

### 5. Flat output = deploy artifact
`build/dist/` is a self-contained static site. No routing, no server config needed. Every page is a standalone `.html` file with relative asset references. Suitable for GitHub Pages, sFTP, or any static host.

## External Dependencies

| Dependency | Type | Usage |
|---|---|---|
| `tailwindcss` v4.1.18 | npm devDependency | Utility CSS framework |
| `@tailwindcss/cli` v4.1.18 | npm devDependency | Tailwind CLI for CSS build |
| `postcss` + `autoprefixer` | npm devDependency | CSS post-processing |
| `tera-cli` (chevdor fork) | Build-time CLI (system) | Template rendering |
| Google Fonts (Source Sans 3, Space Grotesk) | CDN | Typography |
| MapLibre GL JS | CDN (`unpkg`) | Interactive map on fahrzeuge page |
| OpenFreeMap tiles | CDN | Map tile layer |

Zero npm runtime dependencies. All npm packages are devDependencies for the build pipeline.
