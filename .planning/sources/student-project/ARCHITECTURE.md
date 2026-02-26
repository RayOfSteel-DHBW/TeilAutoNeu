# Architecture Analysis: student-project

**Source:** `references/old/student-project/TA/TA_Website/`
**Analyzed:** 2026-02-07

---

## Pattern

Static site generator using **template composition** — a serverless, no-framework approach.
Pages are Tera templates that extend a shared base layout and include reusable partials.
The build step renders templates to flat HTML; the output (`build/src/`) is deployed as-is.

**No JavaScript framework.** All interactivity is vanilla JS inlined in templates (accordion toggle, map initialization, hamburger menu).

## Tech Stack

| Layer         | Technology                | Notes                                           |
|---------------|---------------------------|-------------------------------------------------|
| Templating    | **Tera** (Rust CLI)       | Jinja2-like; macros, extends, includes          |
| Build runner  | **PowerShell 7** script   | `scripts/build-site.ps1` — clean/build/watch    |
| Task runner   | **npm scripts**           | Thin wrappers that invoke the PS1 script         |
| Node.js       | >=18 (scripts only)       | Zero runtime dependencies; `package-lock.json` is empty |
| Fonts         | Google Fonts (CDN)        | Montserrat, Chilanka, Material Symbols Outlined  |
| Maps          | MapLibre GL JS (CDN)      | Loaded from `unpkg.com`; tiles from OpenFreeMap  |
| CI/CD         | GitHub Actions            | `deploy.yml` → GitHub Pages                      |
| Editor        | VS Code                   | `.vscode/` with tasks, settings, launch config   |

## File Structure

```
TA_Website/
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages deploy pipeline
├── .vscode/
│   ├── launch.json             # Firefox debug launch (preise.html)
│   ├── settings.json           # Live Preview → build/src/index.html
│   └── tasks.json              # Background watcher task
├── package.json                # npm scripts (clean/build/watch/dev)
├── package-lock.json           # Empty — no npm dependencies
├── .gitignore                  # build/, node_modules/
├── README.md                   # Setup instructions
├── scripts/
│   └── build-site.ps1          # PowerShell build system (131 lines)
├── templates/                  # Reusable Tera partials & base layout
│   ├── base.html               # Master layout (nav macro, head, footer)
│   ├── accordion.html          # FAQ accordion partial (HTML + inline JS)
│   └── map-parking.html        # MapLibre map partial (HTML + inline JS)
├── src/                        # Page templates + per-page CSS
│   ├── index.html              # Homepage
│   ├── index.css
│   ├── preise.html             # Pricing page
│   ├── preise.css
│   ├── nachhaltig.html         # Sustainability page
│   ├── nachhaltig.css
│   ├── fahrzeuge.html          # Vehicles page
│   ├── fahrzeuge.css
│   ├── geschaeftskunden.html   # Business customers page
│   ├── ueber-uns.html          # About us page
│   ├── mitglied-werden.html    # Membership sign-up page
│   ├── mitglied-werden.css
│   ├── impressum.html          # Imprint (legal, empty body)
│   ├── datenschutz.html        # Privacy policy (empty body)
│   ├── base.css                # Global styles (nav, footer, layout)
│   └── accordion.css           # Accordion component styles
└── public/                     # Static assets (copied verbatim to build)
    └── img/
        ├── talogo.svg          # TeilAuto logo (Inkscape SVG)
        ├── bergrutsch.jpg      # Hero parallax background photo
        ├── adam.png            # Opel Adam vehicle photo
        ├── mokka.png           # Opel Mokka vehicle photo
        ├── car.png             # Car illustration (how-to section)
        ├── phone.png           # Phone illustration (how-to section)
        └── coins.png           # Coins illustration (how-to section)
```

## Build System

**`scripts/build-site.ps1`** is the single build entry point (131 lines of PowerShell 7):

1. **`clean`** — Deletes `build/` directory
2. **`build`** — Runs clean, then:
   - Iterates all files in `src/` recursively
   - Passes each through `tera` CLI with `--include-path templates/`
   - Outputs to `build/src/<relative-path>`
   - Copies `public/*` into `build/src/` verbatim
3. **`watch`** — Runs build once, then uses `FileSystemWatcher` on `src/`, `templates/`, `public/` and rebuilds on any change (250ms debounce loop)

All files in `src/` (HTML and CSS) are processed through Tera. CSS files pass through unchanged since they contain no Tera syntax. HTML files are rendered — template directives (`{% extends %}`, `{% include %}`, `{{ macro() }}`) are expanded into final HTML.

## Page Structure

Every page follows the same pattern:

```
{% extends "base.html" %}        ← Inherits master layout
{% block head %}                  ← Page-specific <head> content (CSS link, <title>)
{% endblock head %}
{% block nav %}                   ← Injects navigation via macro
{{ self::create_nav(page="X") }} ← Highlights current page in nav
{% endblock nav %}
{% block body %}                  ← Page-specific content
{% endblock body %}
```

**`base.html`** provides:
- HTML5 boilerplate with `lang="de"`
- Google Fonts preconnect + stylesheet links
- Material Symbols icon font
- Navigation macro (`create_nav`) with hamburger responsive toggle
- Footer with Impressum + Datenschutz links

## Navigation Architecture

Navigation is rendered via a Tera macro in `base.html`:
- `create_nav(page)` — builds `<nav>` with all nav links
- `create_nav_link(name, page, current)` — renders each `<li>` with active state

Mobile: Hamburger menu with CSS clip-path animation (no JS library).
Desktop: Sticky horizontal nav bar with CSS-only active indicator (triangle clip-path).

**Nav items:** Preise → Nachhaltigkeit → Fahrzeuge → Für Firmen → Über uns
**Footer links:** Impressum, Datenschutzerklärung

## CSS Architecture

- **No preprocessor** — plain CSS with custom properties
- **`base.css`** (230 lines) — Global reset, nav, footer, `.simple-list-layout` utility, responsive breakpoints
- **Per-page CSS** — Scoped styles for each page's specific layout
- **Responsive strategy:** `@media (orientation: portrait/landscape)` instead of width breakpoints (except nav at 800px)
- **Design tokens:** `--accent: hsl(195, 53%, 79%)`, `--accent-hover: hsl(195, 53%, 72%)`

## Key Observations

1. **No bundler/minifier** — Output is unoptimized; no CSS/JS concatenation
2. **No JavaScript framework** — All JS is inline `<script>` in templates
3. **Two empty pages** — `impressum.html` and `datenschutz.html` have no body content
4. **Contact form is non-functional** — `onsubmit="alert('...')"` with no backend
5. **Map uses free tile service** — OpenFreeMap requires no API key
6. **Build requires Rust toolchain** — `tera-cli` must be compiled via `cargo install`
7. **License is UNLICENSED** — No open-source license granted
