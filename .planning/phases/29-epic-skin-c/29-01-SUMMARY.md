---
phase: 29-epic-skin-c
plan: 01
subsystem: ui
tags: [tailwind-cdn, html, carsharing, design-c, editorial-hero, organic-blobs]

requires:
  - phase: 26-epic-directions
    provides: Design C structural spec (minimal header, stacked editorial hero, organic blobs, community-first arc)
provides:
  - Design C homepage at site/epic/c/index.html with stacked editorial hero
  - Design C JS infrastructure (nav, pricing, fleet-map, accordion)
  - Organic blob visual signature pattern (c-blob CSS classes)
  - Community/trust-first section ordering template
affects: [29-02, 29-03, 29-04, 29-05]

tech-stack:
  added: [tailwindcss-browser-v4, dm-serif-display, figtree]
  patterns: [tailwind-cdn-theme-config, organic-blob-decorations, stacked-editorial-hero, minimal-header-nav]

key-files:
  created:
    - site/epic/c/index.html
    - site/epic/c/js/nav.js
    - site/epic/c/js/pricing.js
    - site/epic/c/js/fleet-map.js
    - site/epic/c/js/accordion.js
  modified: []

key-decisions:
  - "Design C nav.js written fresh (like B) rather than adapting public/nav.js - targets #mobile-nav with scroll lock"
  - "Hero uses light bg-brand-surface background (distinct from A and B which both use dark heroes)"
  - "Section ordering: social proof -> membership gate -> how-it-works -> benefits -> CTA (community-first, distinct from A and B)"

patterns-established:
  - "c-blob / c-blob--alt CSS classes for organic border-radius decoration across all sections"
  - "Tailwind CDN @theme config with brown/terracotta/sage palette and DM Serif Display + Figtree fonts"
  - "Minimal non-sticky header pattern with lg: breakpoint for desktop/mobile split"
  - "Floating stat badges via CSS Grid overlap in hero section"

requirements-completed: [IMPL-01, IMPL-02, IMPL-03, VIS-01, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04]

duration: 4min
completed: 2026-03-09
---

# Phase 29 Plan 01: Design C Foundation + Homepage Summary

**Stacked editorial homepage with organic blob visual signature, minimal non-sticky header, and community/trust-first storytelling arc using Tailwind CDN v4**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-09T09:54:12Z
- **Completed:** 2026-03-09T09:58:08Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- Created Design C JS infrastructure: custom nav.js for minimal header overlay, pricing.js/fleet-map.js with corrected asset paths, accordion.js copy
- Built 457-line homepage with stacked editorial hero using CSS Grid overlap for floating stat badges
- Established organic blob visual signature (19 c-blob instances across all sections)
- Implemented community/trust-first section ordering distinct from both Design A and Design B

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Design C JS files and directory structure** - `d65d80e` (feat)
2. **Task 2: Build homepage with stacked editorial hero, organic blobs, and community-first arc** - `983e47e` (feat)

## Files Created/Modified
- `site/epic/c/index.html` - Complete homepage with stacked editorial hero, 6 sections, footer, mobile phone bar
- `site/epic/c/js/nav.js` - Custom minimal header nav toggle with full-screen overlay, scroll lock, Escape handler
- `site/epic/c/js/pricing.js` - Pricing renderer with PRICING_URL corrected to ../../public/data/pricing.json
- `site/epic/c/js/fleet-map.js` - Fleet map with iconUrl paths corrected to ../../public/img/cars/
- `site/epic/c/js/accordion.js` - Direct copy of shared accordion functionality

## Decisions Made
- Wrote nav.js from scratch (like Design B) rather than adapting public/nav.js, since Design C uses a different nav pattern (minimal header vs sticky bar)
- Used light hero background (bg-brand-surface) to visually distinguish from both A and B which use dark heroes
- Placed social proof section immediately after hero (before membership gate) to establish community-first framing
- Used lg: breakpoint (not md:) for desktop/mobile split since 7 nav links are too many for 768px

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Homepage foundation complete, ready for inner pages (preise, fahrzeuge, fuer-firmen, ueber-uns, mitglied-werden)
- All JS dependencies in place for pages that need pricing, fleet-map, or accordion functionality
- Tailwind CDN @theme config and c-blob pattern established as templates for all subsequent pages

## Self-Check: PASSED

All 6 files verified present. Both task commits (d65d80e, 983e47e) confirmed in git log.

---
*Phase: 29-epic-skin-c*
*Completed: 2026-03-09*
