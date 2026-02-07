# Architecture

## Overview

Static multi-page website for **teilAuto Mössingen** (a carsharing cooperative). The site uses a **template-compiled static architecture** — HTML source files are processed through the [Tera](https://keats.github.io/tera/) templating engine (Rust-based Jinja2 variant) at build time and emitted as flat HTML/CSS into a `build/dist/` output directory. There is no JavaScript framework, no bundler, and no server-side runtime. The only JS is small inline scripts for UI interactions (accordion, hamburger nav, MapLibre map).

**Pattern:** Source-template compilation → static file output  
**Language:** HTML (Tera syntax), CSS, inline JS  
**Build tooling:** PowerShell 7 + `tera-cli` (chevdor fork)  
**Package manager:** npm (scripts only — zero runtime dependencies)

## Entry Points

| Entry Point | File | Role |
|---|---|---|
| **Build entry** | `scripts/build-site.ps1` | Orchestrates clean/build/watch via PowerShell |
| **npm entry** | `package.json` | Exposes `clean`, `build`, `watch`, `dev` scripts that invoke the PS1 |
| **Page entry (home)** | `src/index.html` | Landing page — first page users see |
| **Layout root** | `templates/base.html` | Parent template all pages extend |

### Page inventory (8 pages)

| Page | Source | Page-specific CSS | Nav highlight |
|---|---|---|---|
| Home | `src/index.html` | `index.css` | *(none)* |
| Preise | `src/preise.html` | `preise.css` | `Preise` |
| Nachhaltigkeit | `src/nachhaltig.html` | `nachhaltig.css` | `Nachhaltigkeit` |
| Fahrzeuge | `src/fahrzeuge.html` | `fahrzeuge.css` | `Fahrzeuge` |
| Für Firmen | `src/geschaeftskunden.html` | *(none)* | `Für Firmen` |
| Über uns | `src/ueber-uns.html` | *(none)* | `Über uns` |
| Mitglied werden | `src/mitglied-werden.html` | `mitglied-werden.css` | *(none)* |
| Datenschutz | `src/datenschutz.html` | *(none)* | *(none)* |
| Impressum | `src/impressum.html` | *(none)* | *(none)* |

## Build Pipeline

```
npm run build
  └─ pwsh scripts/build-site.ps1 -Task build
       ├─ Invoke-Clean          → rm -rf build/
       └─ Invoke-Build
            ├─ For each file in src/ (recursive):
            │    └─ tera --include-path templates/ --env-only --template <file> -o build/dist/<file>
            └─ Copy public/* → build/dist/   (images, static assets)
```

### Key build details

- **Tera CLI flags:** `--include-path` points to `templates/` for `{% extends %}` and `{% include %}` resolution. `--env-only` means no JSON/TOML data context is passed — templates rely only on Tera built-in functions and block inheritance.
- **All `src/` files** are processed through Tera, including `.css` files. CSS files pass through unchanged (no Tera syntax in them), but the pipeline treats everything uniformly.
- **Watch mode** uses `System.IO.FileSystemWatcher` on `src/`, `templates/`, and `public/` with a 250ms debounce. Any change triggers a full rebuild.
- **Output:** `build/dist/` is the deploy-ready directory (flat structure mirroring `src/`).
- **No minification, no bundling, no source maps.** Output is essentially the Tera-rendered HTML + copied CSS + copied images.

## Page Architecture

### Template inheritance model

```
templates/base.html          ← defines: head, nav, body, footer blocks
  │                             provides: create_nav() and create_title() macros
  │
  ├── src/index.html          {% extends "base.html" %}  → fills head, nav, body
  ├── src/preise.html         {% extends "base.html" %}  → fills head, nav, body
  ├── src/fahrzeuge.html      {% extends "base.html" %}  → fills head, nav, body
  │     └── {% include "map-parking.html" %}
  ├── src/nachhaltig.html     {% extends "base.html" %}
  ├── src/geschaeftskunden.html
  ├── src/ueber-uns.html
  ├── src/mitglied-werden.html
  ├── src/datenschutz.html    (empty body — stub)
  └── src/impressum.html      (empty body — stub)

templates/accordion.html     ← included by index.html via {% include %}
templates/map-parking.html   ← included by fahrzeuge.html via {% include %}
```

### Block contract (base.html)

| Block | Required | Purpose |
|---|---|---|
| `head` | Yes | Page-specific `<link>` and `<title>` |
| `nav` | Yes | Must call `{{ self::create_nav(page="...") }}` — throws if missing |
| `body` | No | Main page content (defaults to "NO BODY CONTENT") |

### Macros (defined in base.html)

- **`create_nav(page)`** — Renders the full `<nav>` with hamburger toggle; `page` param highlights the current nav item via `nav-current` class.
- **`create_nav_link(name, page, current)`** — Internal helper; creates a single `<li>` with conditional active class.
- **`create_title(page)`** — Renders `<title>{{page}} | teilAuto Mössingen</title>`.

### CSS strategy

- **`base.css`** — Global styles: reset, nav (responsive hamburger + desktop sticky), footer, `.simple-list-layout` utility, CSS custom properties (`--accent`, `--accent-hover`).
- **Page CSS** — Loaded per-page via `<link>` in the `head` block. Only pages with custom layout needs have a CSS file.
- **`accordion.css`** — Imported by `index.css` via CSS `@import url('accordion.css')`.
- **Responsive approach:** Exclusively uses `@media (orientation: portrait/landscape)` and `@media screen and (width < 800px)` breakpoints. No CSS frameworks.

## Data Flow

There is no dynamic data flow. All content is **statically authored** in HTML templates.

- **Pricing data** — hardcoded in `preise.html` tables.
- **Vehicle info** — hardcoded in `fahrzeuge.html`.
- **Map markers** — hardcoded coordinates in `map-parking.html` (uses MapLibre GL JS with OpenFreeMap tiles).
- **FAQ content** — hardcoded in `accordion.html`.
- **Contact form** — `mitglied-werden.html` has a `<form>` with `onsubmit="alert(...)"` — **not wired to any backend**.

No API calls, no JSON data files, no CMS integration. Content changes require editing HTML source files and rebuilding.

## Key Abstractions

### 1. Tera template system
The central abstraction. `base.html` acts as a layout shell; pages extend it and fill blocks. Reusable fragments (`accordion.html`, `map-parking.html`) are included where needed. Macros handle nav generation with active-state logic.

### 2. `.simple-list-layout` CSS component
A reusable responsive layout pattern (defined in `base.css` lines 203–238) used by `fahrzeuge.html`, `mitglied-werden.html`, and `index.html` `#users` section. Switches from column to row layout at landscape orientation, with decorative dividers.

### 3. Build script as orchestrator
`build-site.ps1` is the single build entry point, handling clean, build, and file-watching in one script. It abstracts the Tera CLI invocation per-file and asset copying.

### 4. Flat output = deploy artifact
`build/dist/` is a self-contained static site. No routing, no server config needed. Every page is a standalone `.html` file with relative asset references. Suitable for GitHub Pages, sFTP, or any static host.

## External Dependencies

| Dependency | Type | Usage |
|---|---|---|
| `tera-cli` (chevdor fork) | Build-time CLI | Template rendering |
| Google Fonts (Montserrat, Chilanka, Material Symbols) | CDN | Typography + icons |
| MapLibre GL JS | CDN (`unpkg`) | Interactive map on fahrzeuge page |
| OpenFreeMap tiles | CDN | Map tile layer |

Zero npm runtime dependencies. Zero bundled JS libraries.
