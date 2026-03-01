---
phase: 23-design-c
plan: 03
subsystem: ui
tags: [preise, fahrzeuge, pricing-js, maplibre, fleet-map, sand-cards]

requires:
  - phase: 23-design-c
    provides: Direction C design system foundation
provides:
  - Direction C preise page with sand card layout and pricing.js preserved
  - Direction C fahrzeuge page with sand cards and MapLibre map preserved
affects: [23-05]

tech-stack:
  added: []
  patterns: [rounded-xl-table-containers, sand-card-vehicle-descriptions]

key-files:
  created: []
  modified:
    - site/src/preise.html
    - site/src/fahrzeuge.html

key-decisions:
  - "Pricing containers use rounded-2xl sand cards since pricing.js renders tables into them"
  - "Vehicle spec tables inside sand cards use rounded-xl with thin border"

patterns-established:
  - "Direction C table containers: rounded-xl border border-brand-primary/15 overflow-hidden"

requirements-completed: [IMPL-03, IMPL-04, CONV-04]

duration: 5min
completed: 2026-03-01
---

# Phase 23 Plan 03: Preise + Fahrzeuge Summary

**Direction C preise page with sand card pricing layout (pricing.js preserved), fahrzeuge with sand card vehicles + MapLibre map + rounded-xl spec tables**

## Performance

- **Duration:** 5 min
- **Started:** 2026-03-01T00:08:00Z
- **Completed:** 2026-03-01T00:13:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Preise page restyled with sand card layout, pricing.js integration fully preserved
- Fahrzeuge page restyled with vehicle descriptions in sand cards with rounded-xl spec tables
- MapLibre map container preserved in rounded-2xl shadow wrapper
- Both pages have terracotta CTA sections with phone number

## Task Commits

1. **Task 1: Restyle preise** - `9fd0f57` (feat)
2. **Task 2: Restyle fahrzeuge** - `1496e0b` (feat)

## Files Created/Modified
- `site/src/preise.html` - Direction C pricing page with sand cards and preserved JS integration
- `site/src/fahrzeuge.html` - Direction C fleet page with sand cards, spec tables, and preserved map

## Decisions Made
- Pricing containers use rounded-2xl (consistent with cards) since pricing.js renders tables into them
- Vehicle spec tables use rounded-xl with thin terracotta border inside sand cards

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None

## Next Phase Readiness
- Preise and fahrzeuge complete with Direction C styling
- JS integrations (pricing.js, fleet-map.js) preserved
- Ready for Plan 23-05 (visual audit)

---
*Phase: 23-design-c*
*Completed: 2026-03-01*
