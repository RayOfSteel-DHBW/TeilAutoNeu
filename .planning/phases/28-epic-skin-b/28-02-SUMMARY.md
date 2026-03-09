---
phase: 28-epic-skin-b
plan: 02
subsystem: ui
tags: [html, tailwind-v4, pricing-js, maplibre, carsharing, data-driven-pages]

# Dependency graph
requires:
  - phase: 28-epic-skin-b
    provides: Design B foundation (style.css, base.css, nav.js, pricing.js, index.html template)
provides:
  - Pricing page with pricing.js integration (3 container IDs)
  - Fleet page with MapLibre GL JS 5.17.0 map
  - Consistent Design B page template for remaining pages
affects: [28-epic-skin-b (remaining pages), 30-review, 31-design-d]

# Tech tracking
tech-stack:
  added: [MapLibre GL JS 5.17.0 (CDN)]
  patterns: [compact dark hero (not split), data-forward vehicle cards with diagonal accents, pricing container IDs for JS rendering]

key-files:
  created:
    - site/epic/b/preise.html
    - site/epic/b/fahrzeuge.html
  modified:
    - site/epic/b/tailwind-out.css

key-decisions:
  - "Compact hero style for subpages (bg-brand-primary, centered text) distinct from homepage asymmetric split hero"
  - "Vehicle cards use large typographic letter (E/B) for fuel type instead of icons"
  - "Quernutzung partner cities shown as small pill cards rather than a list"

patterns-established:
  - "Design B subpage template: compact dark hero -> content sections -> CTA -> footer"
  - "Data-forward vehicle cards: large accent letter, spec definition list, diagonal corner accent"

requirements-completed: [IMPL-03, VIS-03, VIS-04, CONV-03]

# Metrics
duration: 3min
completed: 2026-03-09
---

# Phase 28 Plan 02: Design B Data-Driven Pages (Preise + Fahrzeuge) Summary

**Pricing page with pricing.js JSON integration and fleet page with MapLibre interactive map, both using Design B's compact hero and diagonal accent visual language**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-09T08:06:42Z
- **Completed:** 2026-03-09T08:09:30Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- Preise page with three pricing container divs (pricing-values, pricing-examples, pricing-disclaimer) populated by adapted pricing.js from JSON data
- Fahrzeuge page with Opel Mokka-e and VW up! vehicle cards, Quernutzung partner city section, and MapLibre GL JS 5.17.0 interactive map
- Both pages maintain Design B consistency: floating pill nav with aria-current, diagonal accent decorations, footer, mobile bottom phone bar

## Task Commits

Each task was committed atomically:

1. **Task 1: Build preise.html with pricing.js integration** - `4a5cd20` (feat)
2. **Task 2: Build fahrzeuge.html with MapLibre map** - `7cc5c18` (feat)

## Files Created/Modified
- `site/epic/b/preise.html` - Pricing page with compact hero, 3 pricing container divs, CTA section
- `site/epic/b/fahrzeuge.html` - Fleet page with vehicle cards, Quernutzung section, MapLibre map
- `site/epic/b/tailwind-out.css` - Recompiled Tailwind output including new page classes

## Decisions Made
- Used compact centered hero (bg-brand-primary, centered text) for subpages, reserving the asymmetric 60/40 split hero for the homepage only
- Vehicle cards use large typographic accent letters (E for Elektro, B for Benzin) as visual type indicators instead of icons
- Quernutzung partner cities displayed as small pill-style cards in a 3-column grid

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Design B now has 3 complete pages (index, preise, fahrzeuge) with consistent visual language
- Ready for remaining 5 pages (geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz)
- All shared assets and page template patterns established

## Self-Check: PASSED

All 2 created files verified on disk (preise.html: 238 lines, fahrzeuge.html: 312 lines). Both task commits (4a5cd20, 7cc5c18) verified in git log.

---
*Phase: 28-epic-skin-b*
*Completed: 2026-03-09*
