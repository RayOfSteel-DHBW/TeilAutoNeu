---
phase: quick-1
plan: 01
subsystem: deployment
tags: [github-pages, review, multi-design, side-by-side]

requires:
  - design/a branch with Design A complete
  - design/b branch with Design B complete
  - design/c branch with Design C complete
  - gsd/v1.0-claudesdesigns branch with original design
provides:
  - review/all-designs branch with all 4 versions under /v0-v3/ paths
  - Landing page at dist/index.html linking to all 4 versions
  - Simplified static.yml workflow (no build step — pre-built files committed)
  - Live GitHub Pages deployment at dhbw/publish
affects: [phase-24-joint-review]

tech-stack:
  added: []
  patterns: [pre-built-deploy, versioned-dist-subdirs]

key-files:
  created:
    - site/build/dist/index.html (landing page)
    - site/build/dist/v0/ (Original production design)
    - site/build/dist/v1/ (Design A — Editorial Broadsheet)
    - site/build/dist/v2/ (Design B — Nordic Signal)
    - site/build/dist/v3/ (Design C — Nachbarschaftlich)
  modified:
    - .github/workflows/static.yml (simplified to static deploy)

key-decisions:
  - "Pre-built approach: each design built locally from its branch, dist committed — no CI build needed"
  - "Force-pushed review/all-designs to dhbw/publish to deploy"
  - "review/all-designs branch based on gsd/v1.0-claudesdesigns as clean base"

patterns-established:
  - "Versioned dist subdirectories for multi-design review"

requirements-completed: []

duration: ~5min
completed: 2026-03-08
---

# Quick Task 1: Multi-Design GitHub Pages Review Site

## What Was Built

Created a `review/all-designs` branch that hosts all 4 design versions under a single GitHub Pages deployment:

| Path | Source Branch | Design |
|------|-------------|--------|
| /v0/ | gsd/v1.0-claudesdesigns | Original (Produktionsversion) |
| /v1/ | design/a | Design A — Editorial Broadsheet |
| /v2/ | design/b | Design B — Nordic Signal |
| /v3/ | design/c | Design C — Nachbarschaftlich |

A landing page at the root links to all 4 versions with design descriptions.

## How It Works

1. Built each design from its source branch (`npm run build`)
2. Copied dist outputs into versioned subdirectories (`v0/`–`v3/`)
3. Created standalone landing page with inline CSS (no external dependencies)
4. Simplified GitHub Actions workflow to skip build step (pre-built files committed)
5. Force-pushed to `dhbw/publish` to trigger deployment

## CSS/Path Safety

All HTML pages use relative paths for CSS, JS, and images. Moving them into subdirectories preserves correct resolution — no path rewriting needed.

## Branches

- `review/all-designs` — local branch with assembled review site
- `dhbw/publish` — updated to serve the review site
- Design branches (`design/a`, `design/b`, `design/c`) — untouched
