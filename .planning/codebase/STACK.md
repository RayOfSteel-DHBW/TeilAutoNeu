# Technology Stack

## Languages & Runtime

| Language   | Usage                                    | Files |
|------------|------------------------------------------|-------|
| HTML       | Page templates (Tera syntax)             | 9 src + 3 templates |
| CSS        | Styling (vanilla, no preprocessor)       | 7 files |
| JavaScript | Inline `<script>` blocks only (accordion toggle, map init) | 0 standalone files; embedded in `accordion.html`, `map-parking.html` |
| PowerShell | Build script (`build-site.ps1`)          | 1 file |
| YAML       | GitHub Actions CI/CD                     | 1 workflow |

**Primary runtime:** None — the project produces **static HTML/CSS** files. There is no server-side runtime, no Node.js runtime code, and no client-side JS framework.

**Required CLI tools (build-time only):**

| Tool       | Purpose                         | Install method       |
|------------|---------------------------------|----------------------|
| Node.js    | npm script runner (>=18)        | `scoop install nodejs-lts` |
| npm        | Script orchestration (>=9)      | Bundled with Node.js |
| PowerShell 7 | Build script execution        | `scoop install pwsh` |
| Rust toolchain | Compile tera-cli            | `scoop install rustup` |
| `tera` CLI | Tera template rendering         | `cargo install --git https://github.com/chevdor/tera-cli --locked` |

## Frameworks & Libraries

### Templating — Tera (via `tera-cli`)

- **Engine:** [Tera](https://keats.github.io/tera/) (Jinja2/Django-style templates for Rust)
- **CLI:** `chevdor/tera-cli` (Git build, not crates.io — required for `--include-path` and `--env-only` flags)
- **Pattern:** `src/*.html` files use `{% extends "base.html" %}` with blocks (`head`, `nav`, `body`); reusable partials live in `templates/`
- **Macros:** `base.html` defines `create_nav()`, `create_nav_link()`, `create_title()` macros used across all pages

### CSS — Vanilla

- No CSS framework (no Tailwind, Bootstrap, etc.)
- Custom properties (`--accent`, `--accent-hover`)
- Responsive design via `@media (orientation: portrait/landscape)` and `(width < 800px)` breakpoints
- CSS `@import` used for accordion styles in `index.css`

### JavaScript — Minimal inline

- **Accordion:** Vanilla JS click handler toggling `.active` class and `maxHeight` (embedded in `accordion.html`)
- **Map:** MapLibre GL JS module loaded from CDN (embedded in `map-parking.html`)
- **Navigation:** Inline `onclick` toggling `open` attribute on `<nav>` for mobile hamburger menu
- **Contact form:** `onsubmit="alert('...')"` placeholder — no real submission logic

## Build System

### Build pipeline: `npm run build`

```
npm script → PowerShell (build-site.ps1 -Task build)
  1. Clean: remove build/ directory
  2. For each file in src/ (recursively):
     → tera --include-path templates/ --env-only --template <file> -o build/dist/<file>
  3. Copy public/* → build/dist/
```

### Available scripts (package.json)

| Script       | Command                                      |
|--------------|----------------------------------------------|
| `clean`      | `build-site.ps1 -Task clean` — deletes `build/` |
| `build`      | `build-site.ps1 -Task build` — clean + render all templates + copy public assets |
| `watch`      | `build-site.ps1 -Task watch` — clean build + FileSystemWatcher with 250ms poll, auto-rebuilds on `src/`, `templates/`, `public/` changes |
| `dev`        | Alias for `watch`                            |

### CI/CD — GitHub Actions

- Workflow: `.github/workflows/static.yml`
- Trigger: push to `dhbw/publish` branch or manual dispatch
- Runner: `windows-latest`
- Steps: checkout → setup Node 20 → install Rust → `cargo install tera-cli` → `npm ci` → `npm run build` → upload `build/dist` as Pages artifact → deploy to GitHub Pages

### Output

- Static files in `build/dist/` — flat HTML + CSS + images, no JS bundles
- Served via GitHub Pages (current deployment target)
- sFTP deployment mentioned as future plan (not implemented)

## Configuration

| File                         | Purpose                                    |
|------------------------------|--------------------------------------------|
| `package.json`               | npm metadata, scripts, engine constraints  |
| `package-lock.json`          | Lock file (empty — zero npm dependencies)  |
| `.gitignore`                 | Ignores `build/` and `node_modules/`       |
| `.vscode/settings.json`      | Live Preview default path: `build/dist/index.html` |
| `.vscode/tasks.json`         | Background task for `npm run watch`        |
| `.github/workflows/static.yml` | GitHub Pages deploy pipeline            |

### No environment variables or `.env` files

The `tera` CLI is invoked with `--env-only` but no environment variables are currently injected. All content is hardcoded in templates.

## Dependencies

### Production

**None.** The `package.json` has zero `dependencies`. The built output is purely static HTML/CSS with two inline `<script>` blocks.

### Development

**None in npm.** The `package.json` has zero `devDependencies`.

All build tooling is installed at the system level:

| Tool         | Version constraint | Role                        |
|--------------|-------------------|-----------------------------|
| Node.js      | >=18              | npm script runner           |
| npm          | >=9               | Script orchestration        |
| PowerShell 7 | (any)             | Build script runtime        |
| Rust/Cargo   | stable            | Compile tera-cli            |
| tera-cli     | HEAD (chevdor)    | Template rendering          |

### Client-side (CDN, loaded at runtime)

| Library         | Source                                         | Used in             |
|-----------------|------------------------------------------------|---------------------|
| MapLibre GL JS  | `unpkg.com/maplibre-gl/dist/maplibre-gl.js`    | `map-parking.html`  |
| MapLibre GL CSS | `unpkg.com/maplibre-gl/dist/maplibre-gl.css`   | `map-parking.html`  |
