---
phase: 23-design-c
plan: 02
subsystem: ui
tags: [homepage, mitglied-werden, hero, conversion-funnel, cards, terracotta]

requires:
  - phase: 23-design-c
    provides: Direction C design system foundation (theme tokens, typography, base template)
provides:
  - Direction C homepage with 70vh warm hero, sand card sections, terracotta CTA
  - Direction C mitglied-werden with 3-step personal conversion flow
affects: [23-05]

tech-stack:
  added: []
  patterns: [70vh-hero, organic-shapes, membership-gate-card, sand-card-grid]

key-files:
  created: []
  modified:
    - site/src/index.html
    - site/src/mitglied-werden.html

key-decisions:
  - "Homepage hero uses inline style for complex gradient (Tailwind lacks multi-stop gradient utility)"
  - "Removed accordion include from homepage -- card-based aesthetic replaces FAQ widget"
  - "3-month minimum stated positively as 'ab drei Monaten, danach monatlich kündbar'"

patterns-established:
  - "Direction C hero: 70vh, centered, gradient bg, organic shapes, two pill CTAs"
  - "Direction C content sections: sand cards in grid, py-14 spacing"
  - "Direction C CTA section: bg-brand-primary py-16, white text, phone number"

requirements-completed: [IMPL-03, CONV-01, CONV-02, CONV-03, CONV-04]

duration: 6min
completed: 2026-03-01
---

# Phase 23 Plan 02: Homepage + Mitglied-werden Summary

**Direction C homepage with 70vh warm hero, "Ihr Zweitwagen wartet schon" headline, two pill CTAs, sand card sections; mitglied-werden with personal 3-step flow and terracotta phone CTA**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-01T00:00:00Z
- **Completed:** 2026-03-01T00:06:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Homepage with 70vh warm hero, organic gradient shapes, and two pill CTA buttons
- Warm membership gate card after hero ("So einfach geht's")
- Seven sand card benefit sections across two grids
- Mitglied-werden with 3-step process (Anrufen, Kennenlernen, Losfahren) in sand cards
- Both pages have terracotta CTA sections with phone number

## Task Commits

1. **Task 1: Restyle homepage** - `fffaa18` (feat)
2. **Task 2: Restyle mitglied-werden** - `68aa040` (feat)

## Files Created/Modified
- `site/src/index.html` - Direction C homepage with warm hero, sand cards, terracotta CTA
- `site/src/mitglied-werden.html` - Direction C membership page with 3-step flow

## Decisions Made
- Homepage hero uses inline style for complex gradient
- Removed accordion include from homepage (card-based aesthetic)
- 3-month minimum stated positively

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None

## Next Phase Readiness
- Homepage and mitglied-werden complete with Direction C styling
- Ready for Plan 23-05 (visual audit)

---
*Phase: 23-design-c*
*Completed: 2026-03-01*
