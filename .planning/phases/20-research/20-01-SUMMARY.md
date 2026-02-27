---
phase: 20-research
plan: "01"
subsystem: planning-docs
tags: [research, design-inspiration, content-audit, v1.2]
dependency_graph:
  requires: []
  provides: [20-INSPIRATION-NOTES.md]
  affects: [20-02-PLAN.md, phases/21, phases/22, phases/23]
tech_stack:
  added: []
  patterns: [inspiration-catalogue, content-audit-with-verification-status]
key_files:
  created:
    - .planning/phases/20-research/20-INSPIRATION-NOTES.md
  modified: []
decisions:
  - "Student UI Patterns sourced from references/old/student-project/ via dev/studi-version-updated branch (named student branches do not exist in repo)"
  - "Copyright status explicitly documented per pattern: SAFE (technique) vs RISKY (specific assets)"
  - "Content opportunities given three-tier verification: VERIFIED / PLAUSIBLE / UNVERIFIED"
  - "v1.1 contrast baseline documented with exact hex values to enable clear differentiation"
metrics:
  duration_minutes: 4
  tasks_completed: 2
  files_created: 1
  files_modified: 0
  completed_date: "2026-02-27"
---

# Phase 20 Plan 01: Inspiration Notes Catalogue Summary

**One-liner:** Curated 8 student UI patterns and 10 content opportunities from old site into a single structured reference document with copyright status and verification flags.

## What Was Built

Created `.planning/phases/20-research/20-INSPIRATION-NOTES.md` — a complete inspiration catalogue with 5 sections:

1. **Student UI Patterns (8 patterns):** Steel-blue accent palette, Montserrat single-font system, fixed parallax hero with frosted glass, orientation-based responsive breakpoints, full-viewport mobile nav overlay, separator-line section layout (no cards), CSS accordion, and flex/orientation vehicle display. Each pattern documents exact CSS values, distinction from v1.1, copyright status, and Tailwind adaptation notes.

2. **Content Enhancement Opportunities (10 items):** Taglines and content angles from old site and owner documents — "Das Auto auf Abruf," "Anrufen, fahren und sparen," membership framing, cost comparison structural angle, EV talking points, Fuhrpark-Outsourcing business angle, expansion plans, and statistical claims. Each item has VERIFIED / PLAUSIBLE / UNVERIFIED status with source attribution.

3. **Owner Design Preferences:** Four preference signals from owner email — large hero with background or pattern, scroll-reveal content structure, visiticeland.com/nike.com as visual references, and human contact as a feature.

4. **v1.1 Contrast Baseline:** Complete visual identity documentation — exact hex values for all 5 color tokens, font system (Source Sans 3 + Space Grotesk), layout pattern (rounded-3xl cards on pale-green surface), hero approach (no image, centered), and overall character assessment. Documented to enable clear differentiation.

5. **Shared Constraints (15 items):** All constraints from PROJECT.md that bind all three v1.2 design directions — tech stack, Tailwind v4 syntax, fonts, 8-page structure, phone CTA, membership gate, content accuracy, persona, responsive breakpoints, copyright, language, legal pages, pricing.json, MapLibre map.

## Key Decisions Made

- Named student branches (`Rainer-4-V2`, `Rainer3-akkordeon`) confirmed absent from repo; used `references/old/student-project/TA/TA_Website/` via `dev/studi-version-updated` as the authoritative student source — equivalent inspiration value.
- Pattern documentation intentionally excludes exact CSS code blocks (copyright safety); documents technique + values as inspiration reference instead.
- Three-tier content verification system (VERIFIED/PLAUSIBLE/UNVERIFIED) ensures Plan 02 authors don't inadvertently promote unconfirmed statistics as facts.
- The 401,49 EUR/month savings figure from `preisver.htm` is flagged UNVERIFIED — methodology explained but specific number should not be cited in v1.2 without owner validation of current figures.

## Deviations from Plan

None — plan executed exactly as written. Both tasks combined into one file creation operation since both tasks write to the same file (`20-INSPIRATION-NOTES.md`). Committed atomically after both sections were complete.

## Self-Check

### Created files exist:

`.planning/phases/20-research/20-INSPIRATION-NOTES.md` — FOUND (381 lines, committed as cd9747f)

### Commits exist:

`cd9747f` — feat(20-01): create inspiration notes catalogue for v1.2 design directions — FOUND

### Section counts (from verification):

- "Student UI Patterns" section: 1 occurrence (present)
- "Content Enhancement Opportunities" + "Owner Design Preferences" + "v1.1 Contrast Baseline" + "Shared Constraints": 4 occurrences (all 4 present)
- Patterns: 8 (requirement: 6+) — PASS
- Opportunities: 10 (requirement: 8+) — PASS
- Constraints: 15 numbered items (requirement: 15) — PASS
- UNVERIFIED flags: 4 occurrences across document — PASS
- No raw CSS code blocks from student project — PASS (inspected during authoring)

## Self-Check: PASSED
