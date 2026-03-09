---
phase: 29-epic-skin-c
plan: 02
subsystem: ui
tags: [tailwind-cdn, html, carsharing, design-c, pricing, fleet-map, maplibre, organic-blobs]

requires:
  - phase: 29-epic-skin-c
    provides: Design C homepage template (nav, footer, @theme, c-blob, mobile bar)
provides:
  - Pricing page with dynamic pricing.js integration at site/epic/c/preise.html
  - Vehicles page with MapLibre map and fleet details at site/epic/c/fahrzeuge.html
affects: [29-03, 29-04, 29-05]

tech-stack:
  added: [maplibre-gl-5.17.0]
  patterns: [compact-page-header, dl-vehicle-specs, responsive-map-heights, pricing-container-pattern]

key-files:
  created:
    - site/epic/c/preise.html
    - site/epic/c/fahrzeuge.html
  modified: []

key-decisions:
  - "Compact page headers with organic blobs (not full heroes) for interior pages -- consistent with Design B/C subpage pattern"
  - "Vehicle specs use dl/dt/dd definition lists matching Design A convention and Design C community framing"
  - "Responsive fleet-map heights (420/480/520px) for mobile/sm/lg breakpoints"

patterns-established:
  - "Interior page header: compact py-16 section with uppercase tracking-widest eyebrow, serif h1, warm subtitle"
  - "Pricing container pattern: three empty divs (pricing-values, pricing-examples, pricing-disclaimer) for pricing.js hydration"
  - "Vehicle detail grid: image + dl specs in lg:grid-cols-2 layout with blob decorations"

requirements-completed: [IMPL-03, IMPL-04, VIS-02, VIS-03]

duration: 3min
completed: 2026-03-09
---

# Phase 29 Plan 02: Preise + Fahrzeuge Pages Summary

**Pricing page with dynamic pricing.js containers and vehicles page with MapLibre map, dl/dt/dd specs, and cross-network Quernutzung section**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-09T10:01:37Z
- **Completed:** 2026-03-09T10:04:50Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Built preise.html (261 lines) with dynamic pricing.js integration targeting three container divs
- Built fahrzeuge.html (359 lines) with MapLibre 5.17.0 map, vehicle specs via dl/dt/dd, and Quernutzung section
- Both pages maintain Design C visual identity with organic blob decorations and consistent nav/footer/mobile bar

## Task Commits

Each task was committed atomically:

1. **Task 1: Build preise.html with pricing.js integration** - `c3ef52d` (feat)
2. **Task 2: Build fahrzeuge.html with MapLibre map integration** - `9d1e678` (feat)

## Files Created/Modified
- `site/epic/c/preise.html` - Pricing page with compact header, pricing.js containers, membership reminder, CTA
- `site/epic/c/fahrzeuge.html` - Vehicles page with Mokka/Adam specs, MapLibre map, Quernutzung, CTA

## Decisions Made
- Used compact page headers (not full heroes) for interior pages, consistent with subpage pattern from other designs
- Vehicle specs rendered as dl/dt/dd definition lists (same semantic pattern as Design A, framed with warm community copy)
- Responsive map heights set at 420px mobile, 480px sm, 520px lg via CSS media queries in style block

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Preise and Fahrzeuge pages complete, ready for remaining interior pages (fuer-firmen, ueber-uns, mitglied-werden)
- Pricing.js and fleet-map.js integration paths established and verified
- Interior page template pattern (compact header + organic blobs) established for reuse

## Self-Check: PASSED
