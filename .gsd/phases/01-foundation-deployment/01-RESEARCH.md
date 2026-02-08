# Phase 1: Foundation and Deployment - Research

**Researched:** 2026-02-08
**Domain:** Static site build and GitHub Pages deployment (Tera + Tailwind + owner data updates)
**Confidence:** MEDIUM

## Summary

This phase covers a static HTML build pipeline using Tera templates, Tailwind CSS for styling, and GitHub Pages for preview deployment. The repository already ships a PowerShell build script that renders Tera templates to `site/build/dist` and a GitHub Actions workflow that installs the `chevdor/tera-cli` build of Tera, builds on Windows, uploads a Pages artifact, and deploys it.

The missing piece for V1 is the owner-run data update flow. The standard approach is to parse the Excel file with a mature library (SheetJS) into JSON, write the JSON into the repo (likely under `site/public/` for static serving), and push to the `dhbw/publish` branch to trigger the existing GitHub Pages workflow.

**Primary recommendation:** Keep the existing Tera + GitHub Pages pipeline unchanged and add a one-click data import script that uses SheetJS to generate JSON, writes into `site/public/data`, and pushes to `dhbw/publish`.

## Standard Stack

The established libraries/tools for this domain:

### Core

| Library | Version | Purpose | Why Standard |
| --- | --- | --- | --- |
| `chevdor/tera-cli` | v0.5.x | Tera template rendering on CLI | Supports `--include-path` and `--env-only` required by the build script | 
| Tailwind CSS + `@tailwindcss/cli` | v4.x | Utility-first CSS build | Official Tailwind CLI workflow for static sites | 
| Node.js + npm | Node 18+ (local), 20 (CI) | Build driver and script runtime | Already required by existing build scripts and GitHub Actions | 
| PowerShell 7 (`pwsh`) | 7.x | Build and watch scripts on Windows | Current build pipeline is PowerShell-based | 
| GitHub Actions Pages (configure/upload/deploy) | configure-pages@v5, upload-pages-artifact@v4, deploy-pages@v4 | Static site deployment | Official Pages deployment flow | 

### Supporting

| Library | Version | Purpose | When to Use |
| --- | --- | --- | --- |
| SheetJS `xlsx` | v0.20.x | Excel to JSON conversion | Owner data update script |
| Rust toolchain (stable) | latest | Build `tera` CLI | Required to install `chevdor/tera-cli` |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
| --- | --- | --- |
| SheetJS `xlsx` | `exceljs` | More opinionated API, still requires schema mapping |
| Tailwind CLI | Handwritten CSS only | Harder to scale and keep consistent; misses Tailwind utility ecosystem |

**Installation:**

```bash
npm install -D tailwindcss @tailwindcss/cli
npm install xlsx
```

## Architecture Patterns

### Recommended Project Structure

```
site/
├── src/          # Tera templates (pages)
├── templates/    # Tera partials and base layouts
├── public/       # Static assets copied verbatim to build output
├── build/dist/   # Generated static output for GitHub Pages
└── scripts/      # PowerShell build and data import scripts
```

### Pattern 1: Tera render-per-page

**What:** Render each file in `site/src` via `tera` with `templates/` as include path.
**When to use:** All page generation; ensures Tera inheritance and includes resolve.
**Example:**

```bash
# Source: https://github.com/chevdor/tera-cli
tera --include-path templates --template templates/template.md.tera --env-only
```

### Pattern 2: Two-job GitHub Pages workflow

**What:** Build on Windows, upload Pages artifact, deploy on Ubuntu.
**When to use:** GitHub Pages preview deployments from the `dhbw/publish` branch.
**Example:**

```yaml
# Source: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- name: Configure GitHub Pages
  uses: actions/configure-pages@v5
- name: Upload GitHub Pages artifact
  uses: actions/upload-pages-artifact@v4
- name: Deploy to GitHub Pages
  uses: actions/deploy-pages@v4
```

### Pattern 3: One-click owner data update

**What:** Script converts Excel to JSON, writes to `site/public/data`, commits, and pushes to `dhbw/publish`.
**When to use:** V1 data updates without full-site SFTP deployment.
**Example:**

```javascript
// Source: https://docs.sheetjs.com/docs/getting-started/examples/import
const workbook = XLSX.read(file);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
```

### Anti-Patterns to Avoid

- **Using crates.io `tera-cli`:** The crates.io build lacks `--include-path` and `--env-only`, which the current build relies on.
- **Dynamic Tailwind class names in templates:** Tailwind scans plain text and will not generate classes that are constructed dynamically.
- **Deploying without `upload-pages-artifact`:** GitHub Pages expects a properly packaged artifact; use the official action.

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
| --- | --- | --- | --- |
| Excel parsing | Manual CSV parsing | SheetJS `xlsx` | Handles Excel formats and edge cases |
| Template system | Custom HTML string concatenation | Tera templates | Inheritance, includes, filters |
| Pages artifact packaging | DIY tar/gzip | `actions/upload-pages-artifact` | Ensures valid artifact format |
| CSS pruning | Custom regex pruning | Tailwind CLI scanning | Reliable utility detection |

**Key insight:** Use the official tooling for templating and deployment; custom pipelines add fragile edge cases.

## Common Pitfalls

### Pitfall 1: Tera CLI mismatch

**What goes wrong:** Using the crates.io `tera-cli` build, which is missing `--include-path` and `--env-only` flags.
**Why it happens:** The default crate does not ship the extended flags used by the current build script.
**How to avoid:** Install `chevdor/tera-cli` from GitHub as the README specifies.
**Warning signs:** Build failures where includes or env data are not resolved.

### Pitfall 2: Tailwind class scanning misses templates

**What goes wrong:** Tailwind removes classes because it cannot detect them in Tera templates.
**Why it happens:** Tailwind scans plain text and ignores dynamic class name construction.
**How to avoid:** Keep class names static or use explicit `@source` registrations.
**Warning signs:** Classes render in dev but disappear in compiled CSS.

### Pitfall 3: Pages deployment waiting for artifacts

**What goes wrong:** Deploy job runs without an uploaded Pages artifact.
**Why it happens:** Missing `needs: build` or artifact upload step.
**How to avoid:** Follow the official two-job workflow with `upload-pages-artifact`.
**Warning signs:** Deploy job fails with missing artifact errors.

### Pitfall 4: `--env-only` limits data injection

**What goes wrong:** JSON data is never available in templates because the build only loads environment variables.
**Why it happens:** `--env-only` ignores context files.
**How to avoid:** Switch to `--env` + context file or `--stdin` when data JSON is required.
**Warning signs:** Templates render without data placeholders filled.

## Code Examples

Verified patterns from official sources:

### Tailwind CLI setup

```bash
# Source: https://tailwindcss.com/docs/installation/tailwind-cli
npm install tailwindcss @tailwindcss/cli
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

### Tera CLI include path and env-only

```bash
# Source: https://github.com/chevdor/tera-cli
tera --include-path templates --template templates/template.md.tera --env-only
```

### SheetJS import to rows

```javascript
// Source: https://docs.sheetjs.com/docs/getting-started/examples/import
const workbook = XLSX.read(file);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
| --- | --- | --- | --- |
| Branch-based Pages or third-party actions | Official Pages actions (`configure-pages`, `upload-pages-artifact`, `deploy-pages`) | 2023-2024 | More reliable deployments and built-in artifact validation |

**Deprecated/outdated:**

- Legacy `gh-pages` branch deploys for built artifacts; official actions are the supported path for custom builds.

## Open Questions

1. **STRATO SFTP requirement vs V1 scope**
   - What we know: Context defers full-site STRATO deployment to V2, but requirements list includes it.
   - What's unclear: Whether to remove FOUND-03 from Phase 1 or mark it as deferred.
   - Recommendation: Align the plan with the context and move STRATO SFTP to V2 explicitly.
2. **Data JSON schema and location**
   - What we know: Excel should be converted to JSON for V1.
   - What's unclear: Required fields and where templates will consume the JSON.
   - Recommendation: Define schema and place output under `site/public/data/` for static fetch.
3. **Branch workflow for owner updates**
   - What we know: GitHub Pages workflow triggers on `dhbw/publish`.
   - What's unclear: Whether the owner script should commit and push to that branch or another flow is preferred.
   - Recommendation: Script should commit and push to `dhbw/publish` to trigger the existing workflow.

## Sources

### Primary (HIGH confidence)

- https://github.com/chevdor/tera-cli - CLI flags (`--include-path`, `--env-only`), install method
- https://tailwindcss.com/docs/installation/tailwind-cli - Tailwind CLI install and build usage
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages - Official Pages workflow guidance

### Secondary (MEDIUM confidence)

- https://docs.sheetjs.com/docs/getting-started/examples/import - `XLSX.read` and `sheet_to_json` usage
- https://tailwindcss.com/docs/content-configuration - Tailwind class detection limitations

### Tertiary (LOW confidence)

- None

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - based on repo config and official docs
- Architecture: MEDIUM - data update workflow inferred from context
- Pitfalls: MEDIUM - derived from docs and current build setup

**Research date:** 2026-02-08
**Valid until:** 2026-03-08
