---
phase: 04-pricing-value-system
plan: 01
subsystem: data
tags: [pricing, json, data-source, owner-workflow, readme]

# Dependency graph
requires:
  - Phase 3: Homepage & Membership Funnel (site structure, templates)
provides:
  - Abstracted pricing JSON data source at public/data/pricing.json
  - Owner-facing update documentation in README
affects:
  - Plan 04-02: Preise page renderer consumes pricing.json
  - Plan 04-03: Copy refinement edits pricing.json wording

# Tech tracking
tech-stack:
  added: []
  patterns:
    [
      JSON data source under public/ for runtime fetch,
      owner-editable without HTML changes,
    ]

key-files:
  created: [site/public/data/pricing.json]
  modified: [site/README.md]

key-decisions:
  - "All pricing values use qualitative ranges, no exact EUR amounts"
  - "ASCII-only German throughout pricing.json for compatibility"

patterns-established:
  - "Data-driven content: JSON in public/data/, fetched at runtime by page-scoped JS"
  - "Owner update workflow: edit JSON, build, deploy"

# Metrics
duration: 3min
completed: 2026-02-08
---

# Phase 04 Plan 01: Pricing JSON Data Source and Update Workflow Summary

**Abstracted pricing data in standalone JSON with XS/M classes only, plus owner-facing README update workflow**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-08T20:10:00Z
- **Completed:** 2026-02-08T20:13:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Created pricing.json with membership, usage, classes, examples, disclaimer, and quernutzung sections
- XS and M classes only, with Quernutzung for larger vehicles
- All values use qualitative ranges (no exact EUR amounts)
- README documents edit-build-deploy workflow for non-technical owners

## Task Commits

Each task was committed atomically:

1. **Task 1: Create pricing JSON data source** - `954a6e7` (feat)
2. **Task 2: Document pricing JSON update workflow** - `88c6540` (docs)

## Files Created/Modified

- `site/public/data/pricing.json` - Abstracted pricing data with membership, usage, classes, examples
- `site/README.md` - Added "Pricing data" section with update workflow

## Decisions Made

- All values kept abstract (ranges/qualitative terms) per PRICE-03 and handbook guidance
- ASCII-only German for broad compatibility
- Disclaimer covers both personal contact and current documents

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## Next Phase Readiness

- pricing.json is ready for consumption by Plan 04-02's JS renderer
- File is in public/data/ so build copies it to build/dist/data/pricing.json

---

_Phase: 04-pricing-value-system_
_Completed: 2026-02-08_
