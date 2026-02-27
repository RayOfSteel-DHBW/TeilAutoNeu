---
phase: 20-research
plan: "02"
subsystem: planning-docs
tags: [research, design-directions, visual-design, v1.2, css-spec]
dependency_graph:
  requires:
    - phase: 20-research-01
      provides: 20-INSPIRATION-NOTES.md (pattern catalogue and content opportunities)
  provides:
    - 20-DESIGN-DIRECTIONS.md (three CSS-ready design direction rationales)
  affects: [phases/21-design-a, phases/22-design-b, phases/23-design-c]
tech_stack:
  added: []
  patterns: [design-direction-rationale-framework, theme-block-specification]
key_files:
  created:
    - .planning/phases/20-research/20-DESIGN-DIRECTIONS.md
  modified: []
key-decisions:
  - "Direction A 'Editorial Broadsheet': Playfair Display serif + Inter sans, navy/amber palette, no-card separator-line layout"
  - "Direction B 'Nordic Signal': Outfit single-font system, teal on near-white, full-width alternating color bands"
  - "Direction C 'Nachbarschaftlich': Nunito + DM Sans, terracotta/cream palette, rounded warm-shadow cards"
  - "No direction uses green as primary — all three occupy distinct non-green color families"
  - "Differentiation matrix confirms all 4 rows (v1.1 + 3 directions) distinct across 6 attributes"
patterns-established:
  - "Design direction rationale framework: 8-item spec (brief, fonts, palette, hero, cards, nav, conversion, differentiation)"
  - "@theme block specification: each direction provides a complete copy-paste-ready Tailwind v4 @theme block"
requirements-completed: [RES-03]
metrics:
  duration_minutes: 4
  tasks_completed: 2
  files_created: 1
  files_modified: 0
  completed_date: "2026-02-27"
---

# Phase 20 Plan 02: Design Direction Rationales Summary

**Three distinct CSS-ready design directions (Editorial Broadsheet, Nordic Signal, Nachbarschaftlich) with complete @theme blocks, named Google Fonts, hero concepts, and differentiation matrix — ready for Phases 21-23 implementation.**

## Performance

- **Duration:** 4 min
- **Started:** 2026-02-27T14:05:25Z
- **Completed:** 2026-02-27T14:09:33Z
- **Tasks:** 2 (1 auto + 1 checkpoint auto-approved)
- **Files created:** 1

## Accomplishments

- Created 20-DESIGN-DIRECTIONS.md with three fully specified design directions, each containing all 8 rationale framework items
- Each direction includes a complete Tailwind v4 `@theme` block with 5-6 hex color values ready to paste into tailwind.css
- Each direction names specific Google Fonts with weights, CDN link code, and confirmed German character support
- Differentiation matrix shows all 4 rows (v1.1 + 3 directions) are distinct across 6 attributes (color, typography, layout, cards, hero, personality)
- 15 shared constraints documented as binding rules for all three direction implementations
- v1.1 contrast baseline documented with specific "forbidden" patterns

## Task Commits

Each task was committed atomically:

1. **Task 1: Write three design direction rationales** - `7c0fd3b` (feat)
2. **Task 2: User reviews and approves directions** - Auto-approved (auto_advance mode)

## Files Created/Modified

- `.planning/phases/20-research/20-DESIGN-DIRECTIONS.md` - Three complete design direction rationales with CSS-level specificity, shared constraints, v1.1 baseline, and differentiation matrix

## Decisions Made

- **Direction A "Editorial Broadsheet":** Serif/sans contrast (Playfair Display + Inter) chosen to create maximum typographic distance from v1.1 and the other two directions. Navy + warm amber palette chosen as authoritative and warm without being green. No-card separator-line layout inspired by student project Pattern 6.

- **Direction B "Nordic Signal":** Single-font system (Outfit) inspired by student project Pattern 2 (Montserrat single-font approach). Teal accent chosen as a cool, non-green single-signal color. Near-white palette with extreme whitespace channels visiticeland.com reference from owner preferences.

- **Direction C "Nachbarschaftlich":** Terracotta/cream palette chosen to be warm and earthy — the furthest possible from v1.1's cool green. Nunito's rounded terminals create a friendly, approachable feel. Retains cards but transforms them (sand-on-cream, warm shadows, no borders) to differentiate from v1.1's white-on-green-bordered pattern.

- **No green primary for any direction:** Explicit constraint since v1.1 already occupies the green design space.

- **All copy examples grounded in verified source material:** "Das Auto auf Abruf," "Anrufen, fahren und sparen," and "Schneller Einstieg und Ausstieg moglich" all sourced from old-site verified content (INSPIRATION-NOTES Opportunities 1, 2, 3, 5).

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- **Phase 21 (Design A):** Can begin immediately. Read Direction A section + Shared Constraints from 20-DESIGN-DIRECTIONS.md. Create `design/a` branch, replace @theme block, add Playfair Display + Inter fonts, implement editorial broadsheet layout.
- **Phase 22 (Design B):** Can begin after Phase 21. Read Direction B section + Shared Constraints. Create `design/b` branch, replace @theme block, add Outfit font, implement Nordic Signal layout.
- **Phase 23 (Design C):** Can begin after Phase 22. Read Direction C section + Shared Constraints. Create `design/c` branch, replace @theme block, add Nunito + DM Sans fonts, implement Nachbarschaftlich layout.
- No blockers. All design specifications are complete and CSS-ready.

## Self-Check

### Created files exist:
- `.planning/phases/20-research/20-DESIGN-DIRECTIONS.md` -- FOUND

### Commits exist:
- `7c0fd3b` -- feat(20-02): write three design direction rationales with CSS-level specificity -- FOUND

## Self-Check: PASSED

---
*Phase: 20-research*
*Completed: 2026-02-27*
