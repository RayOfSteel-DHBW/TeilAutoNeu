---
phase: 16-homepage-content-rewrite
plan: 01
subsystem: ui
tags: [html, svg, homepage, carsharing, content-rewrite, tailwind]

requires:
  - phase: 15-site-wide-fixes
    provides: "Card borders, placeholder standardization, nav CTA"
provides:
  - "TeilAuto car icon hero logo (talogo.svg)"
  - "Rewritten value cards aligned to Zweitwagen persona"
  - "X%/Y% cost comparison placeholders in Card 3"
affects: [preise, fahrzeuge, geschaeftskunden]

tech-stack:
  added: []
  patterns: []

key-files:
  created:
    - "site/public/img/talogo.svg"
  modified:
    - "site/src/index.html"

key-decisions:
  - "Used h-24 for car icon logo sizing (larger than h-16 text-only logo due to different proportions)"
  - "Card 5 uses 'Persoenlich statt anonym' phrasing — owner to confirm or drop"
  - "X%/Y% used as literal template placeholders in Card 3 per R5 guidance"

patterns-established:
  - "HTML comment above uncertain cards documenting alternatives considered"

requirements-completed: [RFIX-02]

duration: 5min
completed: 2026-02-27
---

# Plan 16-01: Hero Logo + Value Card Rewrites Summary

**TeilAuto car icon replaces text-only hero placeholder; all 5 value cards rewritten to Zweitwagen persona per owner guidance (R1, R3-R8)**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-27T10:55:00Z
- **Completed:** 2026-02-27T11:00:00Z
- **Tasks:** 1 (auto) + 1 (checkpoint, auto-approved)
- **Files modified:** 2

## Accomplishments
- Hero section now displays TeilAuto car icon SVG instead of text-only placeholder
- All 5 value cards rewritten with messaging aligned to joint review guidance (R3-R7)
- No fabricated cost numbers — Card 3 uses X%/Y% template placeholders
- Card 4 reframed around Quernutzung + local availability, no "Zwei Fahrzeuge" lead
- Card 5 uses strongest alternative "Persoenlich statt anonym" with HTML comment documenting alternatives

## Task Commits

Each task was committed atomically:

1. **Task 1: Replace hero logo and rewrite all value cards** - `d023152` (feat)

## Files Created/Modified
- `site/public/img/talogo.svg` - TeilAuto car icon SVG (18KB, copied from student project reference)
- `site/src/index.html` - Hero img src updated + all 5 value cards rewritten

## Decisions Made
- Used full talogo.svg as-is (car icon + text) since owner has not yet provided a cropped version
- Chose "Persoenlich statt anonym" as Card 5 phrasing (strongest differentiator vs. commercial carsharing)
- Used non-breaking spaces (X&nbsp;%) for clean rendering of percentage placeholders
- Kept 2+3 grid layout since all 5 cards retained per R8

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Homepage content rewritten and verified at build level
- Owner verification of Card 5 phrasing decision pending (alternatives documented in HTML comment)
- X%/Y% placeholders in Card 3 await real cost comparison data from owner

---
*Plan: 16-01-homepage-content-rewrite*
*Completed: 2026-02-27*
