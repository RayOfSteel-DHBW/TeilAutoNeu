---
phase: 27-epic-skin-a
plan: 03
subsystem: ui
tags: [tailwind-v4, html, css, editorial-layout, playfair-display, inter, carsharing, accordion]

# Dependency graph
requires:
  - phase: 27-epic-skin-a plan 01
    provides: "Design A theme tokens, base styles, JS files, and homepage template pattern"
provides:
  - "Geschaeftskunden page with business benefits in editorial two-column grid"
  - "Ueber-uns page with founders story, history, BCS network, and FAQ accordion"
  - "Mitglied-werden conversion page with 3-step join process and phone CTA"
affects: [27-04]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "FAQ accordion using .accordion-header class with aria-expanded/aria-controls and max-height animation"
    - "Membership gate section clearly communicating member-only service before CTA"

key-files:
  created:
    - site/epic/a/geschaeftskunden.html
    - site/epic/a/ueber-uns.html
    - site/epic/a/mitglied-werden.html
  modified:
    - site/epic/a/tailwind-out.css

key-decisions:
  - "Created FAQ content from scratch since v1.2 had no FAQ section; sourced questions from common visitor concerns across all pages"
  - "Membership gate on mitglied-werden uses editorial prose section rather than styled callout box to maintain no-card identity"

patterns-established:
  - "FAQ accordion pattern: divide-y container with .accordion-header buttons and max-height panels"
  - "Subpage header pattern: left-aligned h1 + subline + amber accent rule before content sections"

requirements-completed: [IMPL-03, IMPL-04, VIS-02, VIS-03, VIS-04, CONV-02, CONV-03, CONV-04, STRUCT-04]

# Metrics
duration: 3min
completed: 2026-03-09
---

# Phase 27 Plan 03: Content Pages (Geschaeftskunden, Ueber-uns, Mitglied-werden) Summary

**Three editorial content pages completing the conversion funnel: business benefits grid, founders story with FAQ accordion, and membership conversion page with prominent phone CTA**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-09T08:21:09Z
- **Completed:** 2026-03-09T08:24:09Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Geschaeftskunden page with editorial two-column benefits grid (Kosteneffizienz, Flexibilitaet, Nachhaltigkeit, Einfache Verwaltung)
- Ueber-uns page with founders story, history, BCS network section, and 5-item FAQ accordion with proper aria attributes
- Mitglied-werden conversion page with practical how-to, 3-step join process, membership gate clarity, and prominent phone CTA
- All 3 pages maintain editorial broadsheet identity: horizontal rule separators, left-aligned reading flow, no card containers

## Task Commits

Each task was committed atomically:

1. **Task 1: Build Geschaeftskunden and Ueber-uns pages** - `f3e0c76` (feat)
2. **Task 2: Build Mitglied-werden membership conversion page** - `6f3af0b` (feat)

## Files Created/Modified
- `site/epic/a/geschaeftskunden.html` - Business customers page with editorial benefit grid and phone CTA
- `site/epic/a/ueber-uns.html` - About page with founders story, history, BCS network, 5-item FAQ accordion
- `site/epic/a/mitglied-werden.html` - Membership conversion page with 3-step process and prominent phone CTA
- `site/epic/a/tailwind-out.css` - Rebuilt Tailwind output with new utility classes

## Decisions Made
- Created FAQ content from scratch since v1.2 codebase had no FAQ section; questions derived from common visitor concerns (booking, cost, cross-use, minimum term, business membership)
- Membership gate uses editorial prose rather than a styled callout, maintaining the no-card design identity
- Phone CTA on mitglied-werden uses font-display (Playfair Display) for the number to add editorial weight

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- 6 of 8 Design A pages now complete (index, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden)
- Plan 27-04 can build the remaining 2 legal pages (impressum, datenschutz)
- All pages share consistent nav, footer, mobile bottom bar, and editorial layout patterns

## Self-Check: PASSED

All 3 created files verified on disk. Both task commits (f3e0c76, 6f3af0b) verified in git log.

---
*Phase: 27-epic-skin-a*
*Completed: 2026-03-09*
