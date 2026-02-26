# Phase 1: Foundation & Deployment - Context

**Gathered:** 2026-02-08
**Status:** Ready for planning

<domain>
## Phase Boundary

Site builds as a static HTML/Tailwind project with preview and owner-run deployment. V1 targets GitHub Pages only; STRATO full-site deployment is out of scope for V1.

</domain>

<decisions>
## Implementation Decisions

### GitHub Pages Preview Pipeline

- Existing GitHub Actions workflow (`static.yml`) is already configured: triggers on push to `dhbw/publish`, builds with tera + Tailwind, deploys to GitHub Pages.
- Adopt this workflow as-is; no new pipeline configuration needed for V1.
- Build runs on `windows-latest` using Node 20 + Rust/tera-cli, outputs to `site/build/dist`.

### Owner Data-Update Workflow

- V1 scope is **data update only**, not full-site SFTP deployment.
- Workflow: Excel → JSON import → upload the JSON. One-click behavior.
- V1: Manual import step (owner runs a script that converts and uploads).
- No SFTP full-site deployment in V1 — site is served from GitHub Pages.

### URL & Output Structure

- Deploy to root path on GitHub Pages (no subdirectory nesting).
- Clean URL slugs (`.html`-less routes) are **not required**.
- STRATO-specific path details are deferred — not relevant until V2.

### Credentials & Secrets

- V1: Hardcoded values in the owner's local script (no credential store).
- Acceptable for V1 since the script lives only on the owner's machine.

### Copilot's Discretion

- Build tool configuration details (Tailwind, tera-cli setup)
- Exact JSON schema for the data import
- Script language choice for the one-click import tool
- CI pipeline tweaks (caching, build optimizations)

</decisions>

<specifics>
## Specific Ideas

- Existing `static.yml` workflow is the reference point — proven working configuration to build on.
- "One-click" means the owner runs one command/script and data is updated; no multi-step manual process.

</specifics>

<deferred>
## Deferred Ideas

- **STRATO SFTP full-site deployment** — final enhancement for V1 (V1.X). Deferred until static site and data workflows are proven on GitHub Pages.
- **Direct .xlsx link instead of manual import** — V2 enhancement for the data-update workflow.
- **Credential store / secrets management** — V2, replace hardcoded values with a proper store.

</deferred>

---

_Phase: 01-foundation-deployment_
_Context gathered: 2026-02-08_
