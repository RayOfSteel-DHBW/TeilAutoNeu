---
phase: 27-epic-skin-a
plan: 01
subsystem: ui
tags: [tailwind-v4, html, css, editorial-layout, playfair-display, inter, carsharing]

# Dependency graph
requires: []
provides:
  - "Design A theme tokens (navy/amber palette) in site/epic/a/style.css"
  - "Design A base styles with fleet-map, marker, popup CSS in site/epic/a/base.css"
  - "Adapted JS files (pricing.js, fleet-map.js, nav.js, accordion.js) in site/epic/a/js/"
  - "Homepage with full-bleed immersive hero and editorial broadsheet layout"
affects: [27-02, 27-03, 27-04]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Tailwind v4 @theme block with @source directive for epic skin directories"
    - "Standalone HTML pages with no template inheritance"
    - "Editorial broadsheet layout with horizontal rule separators instead of cards"
    - "Full-bleed immersive hero with content layered at bottom-left"

key-files:
  created:
    - site/epic/a/style.css
    - site/epic/a/base.css
    - site/epic/a/js/nav.js
    - site/epic/a/js/pricing.js
    - site/epic/a/js/fleet-map.js
    - site/epic/a/js/accordion.js
    - site/epic/a/index.html
    - site/epic/a/tailwind-out.css
  modified: []

key-decisions:
  - "Used HTML entities for all German umlauts rather than raw UTF-8 characters"
  - "Added hover:no-underline to navigation and CTA links to prevent base.css underline on hover"

patterns-established:
  - "Design A page template: standalone HTML with Google Fonts, tailwind-out.css, sticky dark nav, footer, mobile fixed bottom bar"
  - "Editorial section pattern: border-b border-brand-muted py-16 with max-w-5xl container"
  - "Amber accent rule: hr with border-t-2 border-brand-accent at structural boundaries"

requirements-completed: [IMPL-01, IMPL-02, IMPL-03, VIS-01, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04]

# Metrics
duration: 3min
completed: 2026-03-09
---

# Phase 27 Plan 01: Design A Foundation + Homepage Summary

**Design A editorial broadsheet homepage with full-bleed 85vh immersive hero, navy/amber theme tokens, horizontal rule separators, and storytelling content arc (convenience -> trust -> cost -> action)**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-09T08:16:02Z
- **Completed:** 2026-03-09T08:19:12Z
- **Tasks:** 2
- **Files modified:** 8

## Accomplishments
- Tailwind v4 @theme block with Design A navy/amber palette and Playfair Display + Inter font system
- Full-bleed immersive hero (85vh dark navy gradient, left-aligned content, geometric overlay)
- Editorial broadsheet homepage with 9 sections in storytelling arc order
- All 4 JS files copied and adapted with corrected relative paths for pricing data and car icons
- Sticky dark nav bar with phone CTA, mobile hamburger, and fixed bottom phone bar

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Design A foundation -- style.css, base.css, JS copies** - `c95e903` (feat)
2. **Task 2: Build homepage with full-bleed immersive hero and editorial broadsheet layout** - `1bc158e` (feat)

## Files Created/Modified
- `site/epic/a/style.css` - Tailwind v4 entry point with @theme block (navy/amber tokens) and base.css import
- `site/epic/a/base.css` - Base styles with editorial typography, fleet-map container, marker/popup styles
- `site/epic/a/js/nav.js` - Mobile nav toggle (copied from public/js/)
- `site/epic/a/js/pricing.js` - Pricing renderer with corrected PRICING_URL to ../../public/data/pricing.json
- `site/epic/a/js/fleet-map.js` - Fleet map with corrected iconUrl paths to ../../public/img/cars/
- `site/epic/a/js/accordion.js` - FAQ accordion (copied from public/js/)
- `site/epic/a/index.html` - Homepage with full-bleed hero and editorial broadsheet layout
- `site/epic/a/tailwind-out.css` - Compiled Tailwind output

## Decisions Made
- Used HTML entities for German umlauts throughout (consistent with existing v1.2 codebase pattern)
- Added hover:no-underline on nav links and CTA buttons to override base.css `a:hover { text-decoration: underline }` rule

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Design A foundation complete with theme tokens, base styles, and all JS files
- Homepage establishes the editorial broadsheet template pattern for remaining 7 pages
- Plans 27-02 through 27-04 can build subpages using the established nav/footer/section patterns

## Self-Check: PASSED

All 8 created files verified on disk. Both task commits (c95e903, 1bc158e) verified in git log.

---
*Phase: 27-epic-skin-a*
*Completed: 2026-03-09*
