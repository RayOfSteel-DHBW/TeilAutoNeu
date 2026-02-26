---
phase: 10-content-messaging-feature-polish
plan: 01
subsystem: ui
tags: [html, css, svg, hero, messaging, carsharing]

requires:
  - phase: 03-homepage-membership-funnel
    provides: Original homepage and mitglied-werden page structure
provides:
  - 100vh hero section with SVG logo, headline, and dual CTA buttons
  - Below-fold info cards with revised text
  - Hybrid 'So funktioniert's' + membership page (mitglied-werden.html)
  - Smooth scroll CSS with reduced-motion fallback
  - Brand logo SVG placeholder
affects: [homepage, mitglied-werden, navigation, seo]

tech-stack:
  added: []
  patterns: [100vh hero layout, smooth scroll with reduced-motion]

key-files:
  created:
    - site/public/img/logo.svg
  modified:
    - site/src/index.html
    - site/src/mitglied-werden.html
    - site/src/base.css

key-decisions:
  - "Logo SVG uses system-ui font (not Space Grotesk) since SVG loaded as <img> cannot access page fonts"
  - "Info cards moved to 2-column grid below hero anchor, value-prop cards stay in 3-column grid"
  - "'Gemeinschaft' messaging replaced with practical/transactional framing throughout"

patterns-established:
  - "100vh hero: min-h-[calc(100vh-4rem)] accounts for fixed header height"
  - "Anchor scroll: id='below-hero' with smooth scroll CSS and prefers-reduced-motion fallback"

duration: 8min
completed: 2026-02-25
---

# Plan 10-01: Homepage Hero & Messaging Redesign Summary

**100vh hero with SVG logo and dual CTAs, below-fold info cards with revised text, mitglied-werden expanded to hybrid 'So funktioniert's' + membership page**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-25
- **Completed:** 2026-02-25
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments

- Homepage hero fills viewport with centered logo, headline, and dual CTA buttons (Mehr erfahren / Noch unsicher?)
- Info cards moved below fold with revised text emphasizing practical benefits
- Value-prop cards revised for accuracy (insurance, workshop costs, 2-car flexibility)
- "So funktioniert teilAuto" section removed from homepage
- mitglied-werden.html expanded with 4-step day-to-day carsharing explanation before 3-step join flow
- "Gemeinschaft" messaging replaced with practical/transactional framing
- Smooth scroll CSS added with prefers-reduced-motion fallback

## Task Commits

Each task was committed atomically:

1. **Task 1: Homepage hero redesign and below-fold restructure** - `b4c18be` (feat)
2. **Task 2: Expand mitglied-werden.html to hybrid page** - `42aff09` (feat)

## Files Created/Modified

- `site/public/img/logo.svg` - Brand logo SVG placeholder (system-ui font, #0f5f3c fill)
- `site/src/index.html` - Redesigned homepage with 100vh hero, below-fold cards, removed So funktioniert section
- `site/src/mitglied-werden.html` - Hybrid 'So funktioniert's' + membership page with corrected messaging
- `site/src/base.css` - Smooth scroll CSS with reduced-motion fallback

## Decisions Made

- Logo SVG uses system-ui font family since SVG loaded as `<img>` cannot reference page web fonts
- Hero section uses no card styling (no rounded border, bg-white, shadow) — just centered content on page background
- "Teilen statt besitzen" replaces "Gemeinschaftlich statt privat" for more practical framing

## Deviations from Plan

None - plan executed exactly as written

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Homepage hero and mitglied-werden page redesigned and messaging corrected
- Ready for verification

---

_Phase: 10-content-messaging-feature-polish_
_Completed: 2026-02-25_
