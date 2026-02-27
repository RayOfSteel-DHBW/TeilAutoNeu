---
phase: 15-site-wide-fixes
plan: 01
subsystem: ui
tags: [tailwind, css-borders, placeholder-standardization, navigation]

requires:
  - phase: 14-joint-review
    provides: "Review log with 31 issues catalogued (R1-R31)"
provides:
  - "Visible card borders using border-brand-primary/20 across all pages"
  - "Standardized TODO placeholders replacing all 'noch offen' text"
  - "Mitglied werden CTA in navigation header on every page"
affects: [16-homepage-content-rewrite, 17-fahrzeuge-page-overhaul, 18-preise-page-restructure, 19-secondary-pages]

tech-stack:
  added: []
  patterns:
    - "border-brand-primary/20 for card borders (replaces border-brand-muted)"
    - "TODO as standardized placeholder text for unconfirmed values"
    - "Nav CTA pill: rounded-full bg-brand-primary text-white"

key-files:
  created:
    - ".planning/phases/15-site-wide-fixes/15-01-SUMMARY.md"
  modified:
    - "site/src/index.html"
    - "site/src/fahrzeuge.html"
    - "site/src/geschaeftskunden.html"
    - "site/src/mitglied-werden.html"
    - "site/src/ueber-uns.html"
    - "site/src/preise.html"
    - "site/src/impressum.html"
    - "site/public/data/pricing.json"
    - "site/public/js/pricing.js"
    - "site/templates/partials/header.html"

key-decisions:
  - "Used border-brand-primary/20 (20% opacity green) for card borders — provides visible contrast against white bg without being harsh"
  - "Renamed isNochOffen to isTodo in pricing.js for consistency with new placeholder standard"
  - "Nav CTA uses bg-brand-primary text-white pill styling to differentiate from regular nav links"

patterns-established:
  - "Card borders: border-brand-primary/20 site-wide"
  - "Placeholder convention: TODO (not 'noch offen') for unconfirmed values"

requirements-completed: [RFIX-01]

duration: 8min
completed: 2026-02-27
---

# Plan 15-01: Site-Wide Fixes Summary

**Visible card borders via border-brand-primary/20, all placeholders standardized to TODO, and mitglied-werden CTA pill added to nav on every page**

## Performance

- **Duration:** 8 min
- **Tasks:** 2
- **Files modified:** 10

## Accomplishments
- Replaced border-brand-muted with border-brand-primary/20 on all card elements across 6 HTML pages and pricing.js Kaution footnote — card edges now clearly visible against the light background
- Standardized all "noch offen" placeholder text to "TODO" across impressum.html (3 badges), geschaeftskunden.html (1 badge), pricing.json (3 values), and pricing.js (function rename + detection + badge rendering)
- Added "Mitglied werden" as a green CTA pill in the shared header partial — visible on all pages in both desktop horizontal nav and mobile stacked nav

## Task Commits

Each task was committed atomically:

1. **Task 1: Replace card border classes and standardize placeholders** - `c4260a1` (fix)
2. **Task 2: Add mitglied-werden CTA to navigation** - `22f487c` (feat)

## Files Created/Modified
- `site/src/index.html` - 5 card border replacements
- `site/src/fahrzeuge.html` - 10 card border replacements
- `site/src/geschaeftskunden.html` - 6 card border replacements + 1 placeholder fix
- `site/src/mitglied-werden.html` - 8 card border replacements
- `site/src/ueber-uns.html` - 3 card border replacements
- `site/src/preise.html` - 5 card border replacements
- `site/src/impressum.html` - 3 placeholder badges updated to TODO
- `site/public/data/pricing.json` - 3 placeholder values updated to TODO
- `site/public/js/pricing.js` - isNochOffen renamed to isTodo, detection/badge text updated, Kaution border updated
- `site/templates/partials/header.html` - Mitglied werden CTA pill added to nav

## Decisions Made
- Used border-brand-primary/20 for card borders — the 20% opacity green provides subtle but visible contrast against the white card backgrounds, matching the brand palette
- Renamed isNochOffen to isTodo in pricing.js for consistency with the new TODO placeholder standard
- Nav CTA uses rounded-full bg-brand-primary text-white for pill styling that differentiates it from regular nav links

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Card borders, placeholders, and nav CTA are now consistent site-wide
- Phases 16-19 can proceed with page-specific fixes on a clean baseline
- All pages build and render correctly at both desktop and mobile widths

---
*Phase: 15-site-wide-fixes*
*Completed: 2026-02-27*
