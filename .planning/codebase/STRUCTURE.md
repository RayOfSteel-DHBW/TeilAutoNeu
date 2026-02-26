# Directory Structure

## Layout

```
site/
├── .gitignore                  # Ignores build/ and node_modules/
├── .vscode/
│   ├── settings.json           # Live Preview points to build/dist/index.html
│   └── tasks.json              # Background "npm: watch" task
├── package.json                # npm scripts (clean, build, watch, dev) — no runtime deps
├── package-lock.json           # Lock file
├── README.md                   # Setup guide, prerequisites, deployment notes
│
├── scripts/
│   └── build-site.ps1          # PowerShell build orchestrator (clean/build/watch)
│
├── templates/                  # Tera template fragments (not directly emitted)
│   ├── base.html               # Parent layout — nav macros, head/body/footer blocks
│   ├── accordion.html          # FAQ accordion component with inline JS
│   └── map-parking.html        # MapLibre interactive map component with inline JS
│
├── src/                        # Source files — every file processed through Tera → build/dist/
│   ├── index.html              # Home page (hero, benefits, how-to, FAQ, user types)
│   ├── index.css               # Home page styles (imports accordion.css)
│   ├── preise.html             # Pricing tables
│   ├── preise.css              # Pricing table layout
│   ├── nachhaltig.html         # Sustainability page
│   ├── nachhaltig.css          # Sustainability styles
│   ├── fahrzeuge.html          # Vehicle fleet + parking map
│   ├── fahrzeuge.css           # Vehicle page styles + map sizing
│   ├── geschaeftskunden.html   # Business customers page
│   ├── ueber-uns.html          # About us page
│   ├── mitglied-werden.html    # Membership signup (contact form + phone)
│   ├── mitglied-werden.css     # Contact form grid layout
│   ├── datenschutz.html        # Privacy policy (stub — empty body)
│   ├── impressum.html          # Legal notice (stub — empty body)
│   ├── base.css                # Global styles (nav, footer, responsive layout, variables)
│   └── accordion.css           # Accordion component styles
│
├── public/                     # Static assets — copied verbatim to build/dist/
│   └── img/
│       ├── talogo.svg          # teilAuto logo (used in nav + hero)
│       ├── bergrutsch.jpg      # Hero background image
│       ├── adam.png            # Opel Adam vehicle photo
│       ├── mokka.png           # Opel Mokka vehicle photo
│       ├── car.png             # How-to illustration (drive step)
│       ├── coins.png           # How-to illustration (save step)
│       └── phone.png           # How-to illustration (book step)
│
└── build/                      # Generated output (gitignored)
    └── dist/                   # Deploy-ready flat static site
        ├── *.html              # Rendered pages
        ├── *.css               # Copied CSS
        └── img/                # Copied images
```

## Key Locations

| What | Where |
|------|-------|
| Build script | `scripts/build-site.ps1` |
| npm config | `package.json` |
| Parent layout template | `templates/base.html` |
| Reusable components | `templates/accordion.html`, `templates/map-parking.html` |
| Page source files | `src/*.html` |
| Global stylesheet | `src/base.css` |
| Page-specific stylesheets | `src/<page>.css` (6 files) |
| Static images | `public/img/` |
| Build output | `build/dist/` (gitignored) |
| VS Code settings | `.vscode/settings.json`, `.vscode/tasks.json` |
| Home page | `src/index.html` |
| CSS variables (design tokens) | `src/base.css` (`:root` block, line 1) |

## File Naming

### Conventions observed

- **Page HTML files**: German lowercase slug matching the URL path — `preise.html`, `nachhaltig.html`, `fahrzeuge.html`, `geschaeftskunden.html`, `ueber-uns.html`, `mitglied-werden.html`.
- **CSS files**: Named identically to their paired HTML page — `preise.html` ↔ `preise.css`. Not every page has a CSS file; only pages with custom layout.
- **Template files**: Descriptive English names — `base.html`, `accordion.html`, `map-parking.html`.
- **Images**: Lowercase, descriptive — `talogo.svg`, `bergrutsch.jpg`, `adam.png`, `mokka.png`.
- **Hyphens** as word separator in all filenames (no underscores, no camelCase).
- **No file prefixes or numbering** — flat structure, alphabetical.

### File type distribution

| Type | Count | Location |
|------|-------|----------|
| HTML pages | 9 | `src/` |
| CSS files | 7 | `src/` |
| HTML templates | 3 | `templates/` |
| Images | 7 | `public/img/` |
| Build scripts | 1 | `scripts/` |
| Config files | 4 | root + `.vscode/` |

**Total source files:** ~31

## Source Organization

### `src/` — Flat page-centric layout
All pages and their CSS live at the root of `src/` with no subdirectories. Each page is a self-contained Tera template that extends `base.html`. The convention is:
- `<page>.html` — page content (extends base, fills blocks)
- `<page>.css` — page-specific styles (optional, linked in `head` block)

CSS files that are shared components (`base.css`, `accordion.css`) also live in `src/` at the same level.

### `templates/` — Non-emitted template fragments
Contains files used only via `{% extends %}` or `{% include %}` — they are never directly rendered to output. The distinction is:
- **`src/`** = files that become output pages (1:1 mapping to `build/dist/`)
- **`templates/`** = fragments consumed by source files during build

### `public/` — Passthrough static assets
Contains only `img/` with 7 image files. Copied verbatim to `build/dist/` during build. No processing, no optimization.

### `scripts/` — Build tooling
Single PowerShell script. Handles three tasks: `clean`, `build`, `watch`. No other tooling scripts.

### No deep nesting
The entire site is flat — no sub-routes, no nested directories in `src/`, no component folders. This matches the small scale of the project (~9 pages for a local carsharing cooperative).
