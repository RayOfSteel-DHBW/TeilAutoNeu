---
phase: 27-epic-skin-a
plan: 02
subsystem: ui
tags: [tailwind-v4, html, pricing-js, maplibre, fleet-map, editorial-layout, carsharing]

# Dependency graph
requires:
  - phase: 27-01
    provides: "Design A theme tokens, base.css, JS files, homepage template pattern"
provides:
  - "Preise page with pricing.js integration rendering dynamic pricing tables"
  - "Fahrzeuge page with MapLibre map and editorial vehicle details layout"
affects: [27-03, 27-04]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Subpage editorial layout: page header + ruled content sections + CTA block"
    - "JS integration pages: pricing-values/examples/disclaimer divs for pricing.js"
    - "MapLibre map section with #fleet-map div and .fleet-map responsive class"
    - "Vehicle specs as definition lists in two-column grid (no cards)"

key-files:
  created:
    - site/epic/a/preise.html
    - site/epic/a/fahrzeuge.html
  modified:
    - site/epic/a/tailwind-out.css

key-decisions:
  - "Accepted pricing.js card-like output (rounded-2xl) as the one exception to no-cards rule since it is structured tabular data"
  - "Used definition lists (dl/dt/dd) for vehicle specs instead of table elements for editorial consistency"

patterns-established:
  - "Subpage nav pattern: active page gets border-b-2 border-brand-accent, all others text-white/80"
  - "CTA block pattern: amber accent rule + centered phone number + Mitglied werden button"

requirements-completed: [IMPL-03, IMPL-04, VIS-02, VIS-03, CONV-03]

# Metrics
duration: 2min
completed: 2026-03-09
---

# Phase 27 Plan 02: Preise + Fahrzeuge Pages Summary

**Dynamic pricing page with pricing.js rendering into editorial ruled sections, and fleet page with MapLibre map at responsive heights plus editorial vehicle specs layout**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-09T08:21:04Z
- **Completed:** 2026-03-09T08:23:04Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Preise page with pricing.js integration rendering membership fees, example calculations, and disclaimer into three container divs
- Fahrzeuge page with MapLibre GL JS 5.17.0 CDN integration and fleet-map.js for interactive parking map
- Both pages maintain editorial broadsheet identity with horizontal rule separators, no card containers
- Vehicle details displayed as definition lists in two-column editorial grid

## Task Commits

Each task was committed atomically:

1. **Task 1: Build Preise page with pricing.js integration and editorial ruled layout** - `ef0e80a` (feat)
2. **Task 2: Build Fahrzeuge page with MapLibre map and editorial fleet display** - `6b02812` (feat)

## Files Created/Modified
- `site/epic/a/preise.html` - Pricing page with pricing.js script tag, 3 JS target divs, membership teaser, editorial ruled layout
- `site/epic/a/fahrzeuge.html` - Fleet page with MapLibre CDN, #fleet-map div, vehicle specs, parking locations, Quernutzung section
- `site/epic/a/tailwind-out.css` - Rebuilt Tailwind output including new page utilities

## Decisions Made
- Accepted pricing.js card-like rendering (rounded-2xl containers) as the one acceptable exception to the no-cards rule, since pricing data is structured tabular content
- Used semantic definition lists (dl/dt/dd) for vehicle specifications instead of tables, maintaining the editorial text-flow identity
- Added amber accent rule before CTA blocks on both pages for visual consistency with homepage pattern

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Both data-driven pages complete with working JS integrations
- Plans 27-03 and 27-04 can build remaining 6 pages using the established subpage template pattern
- All nav links to preise.html and fahrzeuge.html now resolve to real files

## Self-Check: PASSED

All created files verified on disk. Both task commits (ef0e80a, 6b02812) verified in git log.

---
*Phase: 27-epic-skin-a*
*Completed: 2026-03-09*
