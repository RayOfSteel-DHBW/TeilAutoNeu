---
phase: 23-design-c
plan: 01
subsystem: ui
tags: [tailwind, css, typography, nunito, dm-sans, terracotta, design-system]

requires:
  - phase: 20-research
    provides: Direction C "Nachbarschaftlich" design specification with terracotta/cream palette and Nunito+DM Sans fonts
provides:
  - Direction C design system foundation on design/c branch
  - Tailwind @theme with terracotta/cream/brown tokens
  - Nunito (display) + DM Sans (body) two-font system via Google Fonts CDN
  - Warm cream sticky header with terracotta logo and phone pill button
  - Terracotta footer with white text
  - Fixed bottom phone bar for mobile
  - Updated nav.js for overlay mobile menu
affects: [23-02, 23-03, 23-04, 23-05]

tech-stack:
  added: [Nunito, DM Sans]
  patterns: [warm-cream-nav, terracotta-footer, pill-buttons, mobile-overlay-nav, fixed-bottom-phone-bar]

key-files:
  created: []
  modified:
    - site/src/tailwind.css
    - site/src/base.css
    - site/templates/base.html
    - site/templates/partials/header.html
    - site/templates/partials/footer.html
    - site/public/js/nav.js

key-decisions:
  - "Nav collapse at lg (1024px) per Direction C spec, not md (768px)"
  - "Mobile overlay uses fixed fullscreen with JS toggle instead of CSS-only peer expansion"
  - "Footer uses pb-32 lg:pb-12 to account for fixed bottom phone bar on mobile"

patterns-established:
  - "Direction C card styling: rounded-2xl bg-brand-muted p-8 shadow-md"
  - "Direction C CTA buttons: rounded-full bg-brand-primary hover:bg-brand-accent"
  - "Direction C section spacing: py-14"
  - "Direction C content width: max-w-5xl"

requirements-completed: [IMPL-02, IMPL-06, VIS-01, VIS-04]

duration: 8min
completed: 2026-02-28
---

# Phase 23 Plan 01: Design System Foundation Summary

**Direction C "Nachbarschaftlich" design system with terracotta/cream palette, Nunito+DM Sans two-font system, warm cream nav with phone pill, terracotta footer, and fixed mobile phone bar**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-28T19:30:00Z
- **Completed:** 2026-02-28T19:38:00Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments
- Created design/c branch from gsd/v1.0-claudesdesigns (clean v1.1 base)
- Applied complete Direction C @theme tokens: terracotta #b5541a, cream #fdf6ee, brown #33261a, sand #f0e6d6
- Established Nunito (display/headings) + DM Sans (body) two-font system via Google Fonts CDN
- Built warm cream sticky header with terracotta logo, phone pill button in nav, and lg-breakpoint collapse
- Built terracotta footer with white text, 3-column grid, and phone CTA
- Added fixed bottom phone bar for mobile (full-width pill, lg:hidden)
- Updated nav.js for overlay show/hide pattern with accessibility

## Task Commits

Each task was committed atomically:

1. **Task 1: Theme tokens + typography + base template** - `2f1359d` (feat)
2. **Task 2: Header and footer chrome** - `2a5a350` (feat)

## Files Created/Modified
- `site/src/tailwind.css` - Direction C @theme block with terracotta/cream/brown tokens
- `site/src/base.css` - Nunito headings, DM Sans body, terracotta links, fleet-marker colors
- `site/templates/base.html` - Google Fonts CDN, warm cream header, terracotta footer, fixed phone bar
- `site/templates/partials/header.html` - Warm cream nav, terracotta logo, phone pill, mobile overlay
- `site/templates/partials/footer.html` - Terracotta footer with white text, 3-column grid
- `site/public/js/nav.js` - Updated for overlay show/hide pattern

## Decisions Made
- Nav collapse at lg (1024px) per Direction C spec, not md (768px)
- Mobile overlay uses fixed fullscreen with JS toggle instead of CSS-only peer expansion
- Footer uses pb-32 lg:pb-12 to account for fixed bottom phone bar on mobile

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Updated nav.js for overlay pattern**
- **Found during:** Task 2 (header restyle)
- **Issue:** Old nav.js used CSS peer-aria-expanded pattern which doesn't work with fixed fullscreen overlay
- **Fix:** Updated nav.js to toggle hidden/flex classes on overlay, added active page detection for desktop nav
- **Files modified:** site/public/js/nav.js
- **Verification:** Build succeeds, overlay logic correct
- **Committed in:** 2a5a350 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Essential for mobile nav functionality. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Design system foundation complete on design/c branch
- All 8 pages inherit from base.html and will render with correct Direction C chrome
- Ready for Plans 23-02 (homepage + mitglied), 23-03 (preise + fahrzeuge), 23-04 (secondary + legal)

---
*Phase: 23-design-c*
*Completed: 2026-02-28*
