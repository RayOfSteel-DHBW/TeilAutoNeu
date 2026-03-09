---
phase: 28-epic-skin-b
plan: 01
subsystem: ui
tags: [tailwind-v4, html, css, carsharing, design-system, floating-nav, split-hero]

# Dependency graph
requires:
  - phase: 26-epic-directions
    provides: structural signature specs for Design B
provides:
  - Design B @theme tokens (forest green / electric lime palette)
  - Base CSS with fleet-map, heading clamps, focus-visible
  - Floating pill nav JS toggle with scroll lock
  - Adapted pricing.js with correct relative path
  - Homepage with asymmetric split hero and cost-forward content flow
affects: [28-epic-skin-b (remaining pages), 30-review, 31-design-d]

# Tech tracking
tech-stack:
  added: [Plus Jakarta Sans (Google Fonts CDN), Inter (Google Fonts CDN)]
  patterns: [standalone HTML in site/epic/b/, Tailwind v4 @theme block, diagonal accent lines CSS, floating pill nav]

key-files:
  created:
    - site/epic/b/style.css
    - site/epic/b/base.css
    - site/epic/b/js/nav.js
    - site/epic/b/js/pricing.js
    - site/epic/b/js/accordion.js
    - site/epic/b/index.html
    - site/epic/b/tailwind-out.css
  modified: []

key-decisions:
  - "Custom nav.js written for floating pill pattern (not adapted from public/js/nav.js which targets #primary-nav)"
  - "pricing.js PRICING_URL set to ../../public/data/pricing.json for correct relative path from epic/b/"
  - "Diagonal accent lines implemented as CSS transforms (rotate-45, skewX) rather than SVG files"

patterns-established:
  - "Design B page template: standalone HTML with tailwind-out.css + base.css, floating pill nav, mobile bottom phone bar"
  - "Diagonal accent lines as visual signature: thin rotated divs with bg-brand-accent opacity"
  - "Cost-forward section ordering: hero -> savings -> gate -> how-it-works -> fleet -> CTA"

requirements-completed: [IMPL-01, IMPL-02, IMPL-03, VIS-01, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04]

# Metrics
duration: 4min
completed: 2026-03-09
---

# Phase 28 Plan 01: Design B Foundation + Homepage Summary

**Tailwind v4 theme tokens (electric lime on forest green), floating pill nav, and 438-line homepage with asymmetric 60/40 split hero and cost-forward 6-section content flow**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-09T08:00:50Z
- **Completed:** 2026-03-09T08:04:30Z
- **Tasks:** 2
- **Files modified:** 7

## Accomplishments
- Design B foundation: @theme block with 6 color tokens + 2 font tokens, base.css with fleet-map/heading clamps/focus-visible, diagonal-rule utility class
- Custom floating pill nav JS with body scroll lock, Escape key handler, and active page indicator
- Homepage with structurally distinct asymmetric split hero (60/40), cost-forward section ordering, phone CTA in 3 locations, diagonal accent lines throughout

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Design B foundation files** - `8a17c5f` (feat)
2. **Task 2: Build homepage with asymmetric split hero and cost-forward flow** - `392a15f` (feat)

## Files Created/Modified
- `site/epic/b/style.css` - Tailwind v4 entry with @theme block and diagonal-rule utility
- `site/epic/b/base.css` - Base styles with fleet-map container, heading clamps, focus-visible
- `site/epic/b/js/nav.js` - Floating pill nav toggle with scroll lock and Escape handler
- `site/epic/b/js/pricing.js` - Adapted pricing.js with PRICING_URL for epic/b/ path
- `site/epic/b/js/accordion.js` - Direct copy of public accordion.js
- `site/epic/b/index.html` - 438-line homepage with 6 cost-forward sections
- `site/epic/b/tailwind-out.css` - Compiled Tailwind output

## Decisions Made
- Wrote custom nav.js for floating pill pattern rather than adapting public/js/nav.js (different DOM targets: #mobile-nav vs #primary-nav)
- Set pricing.js PRICING_URL to "../../public/data/pricing.json" for correct relative path from epic/b/ directory
- Used CSS transforms (rotate-45, skewX) for diagonal accent lines rather than SVG files -- simpler, no external dependencies

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Design B foundation and homepage complete, ready for remaining 7 pages (preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz)
- All shared assets (style.css, base.css, nav.js, pricing.js, accordion.js) ready for reuse across pages
- Page template pattern established for consistent page creation

## Self-Check: PASSED

All 7 created files verified on disk. Both task commits (8a17c5f, 392a15f) verified in git log.

---
*Phase: 28-epic-skin-b*
*Completed: 2026-03-09*
