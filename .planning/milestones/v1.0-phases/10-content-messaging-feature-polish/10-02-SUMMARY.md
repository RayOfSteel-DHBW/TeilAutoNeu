---
phase: 10-content-messaging-feature-polish
plan: 02
subsystem: ui
tags: [javascript, css, json, pricing, faq, map, quernutzung]

requires:
  - phase: 04-pricing-value-system
    provides: Pricing page structure and pricing.js renderer
  - phase: 05-fleet-locations
    provides: Fleet map with Leaflet/MapLibre markers and popup
provides:
  - Labeled line-by-line pricing breakdowns in example calculations
  - Kaution demoted to footnote with refund reassurance
  - 5th FAQ item about Quernutzung cross-use
  - Structured map popup with title, location, features hierarchy
  - Corrected Quernutzung factual claims across site
affects: [pricing, faq, fleet-map, fahrzeuge, ueber-uns]

tech-stack:
  added: []
  patterns: [labeled pricing breakdown with dl/dt/dd, structured popup with BEM classes]

key-files:
  created: []
  modified:
    - site/public/data/pricing.json
    - site/public/js/pricing.js
    - site/public/js/fleet-map.js
    - site/templates/accordion.html
    - site/src/base.css
    - site/src/fahrzeuge.html
    - site/src/ueber-uns.html

key-decisions:
  - "labeled_lines added alongside existing calculation field for backwards compatibility"
  - "Kaution footnote preserves amber 'noch offen' badge via valueOrBadge() helper"
  - "Map popup features rendered as plain list items, not middot-separated string"

patterns-established:
  - "Labeled breakdown: dl with flex justify-between rows for label-value pairs"
  - "Popup hierarchy: fleet-popup__title (bold) > fleet-popup__location > fleet-popup__features"

duration: 6min
completed: 2026-02-25
---

# Plan 10-02: Pricing, FAQ, Map Popup & Quernutzung Corrections Summary

**Labeled pricing breakdowns, Kaution footnote, 5th FAQ about Quernutzung, structured map popup, and factual text corrections across 4 locations**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-25
- **Completed:** 2026-02-25
- **Tasks:** 2
- **Files modified:** 7

## Accomplishments

- Pricing example calculations show labeled line-by-line breakdowns instead of raw formulas
- Kaution demoted from prominent card to small footnote with refund reassurance
- FAQ accordion now has exactly 5 items (5th: Quernutzung cross-use question)
- Map popup restructured with bold title, location line, and features list
- All 4 instances of "Partnerfahrzeuge" corrected to "Fahrzeuge von über 200 Partnern"

## Task Commits

Each task was committed atomically:

1. **Task 1: Pricing labeled breakdown and Kaution demotion** - `c6df92f` (feat)
2. **Task 2: FAQ 5th item, map popup hierarchy, Quernutzung corrections** - `744558c` (feat)

## Files Created/Modified

- `site/public/data/pricing.json` - Added labeled_lines arrays to example calculations
- `site/public/js/pricing.js` - Labeled breakdown rendering, Kaution demotion to footnote
- `site/public/js/fleet-map.js` - Structured popup with location and features array
- `site/templates/accordion.html` - 5th FAQ item about Quernutzung
- `site/src/base.css` - CSS for fleet-popup__location and fleet-popup__features
- `site/src/fahrzeuge.html` - Corrected meta description, OG description, and body Quernutzung text
- `site/src/ueber-uns.html` - Corrected BCS network section Quernutzung text

## Decisions Made

- labeled_lines field added alongside existing calculation field (backwards compatibility)
- Kaution footnote preserves the amber "noch offen" badge via existing valueOrBadge() helper
- Map popup features rendered as individual list items for cleaner visual hierarchy

## Deviations from Plan

None - plan executed exactly as written

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All pricing, FAQ, map, and text corrections complete
- Ready for verification

---

_Phase: 10-content-messaging-feature-polish_
_Completed: 2026-02-25_
