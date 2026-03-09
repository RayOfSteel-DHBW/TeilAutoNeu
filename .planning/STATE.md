---
gsd_state_version: 1.0
milestone: v1.3
milestone_name: Epic Skins
status: completed
stopped_at: Completed 27-07-PLAN.md (gap closure visual audit)
last_updated: "2026-03-09T09:52:12Z"
last_activity: 2026-03-09 -- Completed 27-07 Playwright visual audit, all Design A pages verified with screenshots
progress:
  total_phases: 11
  completed_phases: 3
  total_plans: 28
  completed_plans: 19
  percent: 79
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-03-08)

**Core value:** Attract suitable new members without overwhelming the owners' limited phone capacity.
**Current focus:** v1.3 Epic Skins -- Phase 27: Epic Skin A (complete), Phase 28: Epic Skin B (complete)

## Current Position

Phase: 27 of 6 in v1.3 (Epic Skin A) -- parallel with 28, 29
Plan: 7 of 7 (Gap Closure Visual Audit) -- COMPLETE
Status: Phase 27 complete (incl. gap closure), Phase 28 complete
Last activity: 2026-03-09 -- Completed 27-07 Playwright visual audit with screenshot evidence

Progress: v1.3 [████████░░] 79%

## Performance Metrics

**Velocity (prior milestones):**
- v1.0: 25 plans, ~17 days
- v1.1: 7 plans, 2 days
- v1.2: 17 plans, 9 days
- Trend: Stable

## Accumulated Context

### Decisions

All v1.0, v1.1, v1.2 decisions logged in PROJECT.md Key Decisions table with outcomes.

Key v1.3 context:
- v1.2 verdict: all 3 designs are chromas — same skeleton, different paint. Structural distinctness insufficient.
- Root cause: Phase 20 directions specified colors/fonts/containers but never varied the page skeleton.
- v1.3 fix: Phase 26 specs must include "Structural Signature" — section ordering, hero type, nav pattern, visual signature, copy strategy.
- Phases 27, 28, 29 depend ONLY on Phase 26. They can run in parallel with each other.
- Phase 31 (Design D) is the intended winner — synthesis of review feedback, not a fourth exploration.
- [Phase 28]: Custom nav.js for floating pill pattern (not adapted from public nav.js)
- [Phase 28]: Legal pages use full-width max-w-3xl layout with hyphens:auto for German compound words
- [Phase 28]: Compact centered hero for subpages, asymmetric split reserved for homepage
- [Phase 28]: Interior pages use compact dark hero (not asymmetric split which is homepage-exclusive)
- [Phase 27]: Design A uses HTML entities for German umlauts; hover:no-underline on nav/CTA to override base.css
- [Phase 28]: All 8 Design B pages passed visual audit with no code changes needed at 375/768/1280px
- [Phase 27]: No active nav indicator on legal pages (footer-linked only)
- [Phase 27]: Accepted pricing.js card-like output as one exception to no-cards rule for structured tabular data
- [Phase 27]: Vehicle specs use definition lists (dl/dt/dd) for editorial consistency instead of table elements
- [Phase 27]: Created FAQ content from scratch for ueber-uns; sourced from common visitor concerns across pages
- [Phase 27]: Membership gate uses editorial prose not callout box to maintain no-card identity
- [Phase 27]: All 8 Design A pages passed visual audit with no code changes needed at 375/768/1280px
- [Phase 27]: Structural identity verified: full-bleed hero, editorial rules, left-aligned flow, dark sticky nav, no rounded-full, no cards
- [Phase 27]: Removed USt-ID section entirely from Design A impressum (matches Design B -- not publicly available)
- [Phase 27]: 27-07 gap closure verified all 8 pages via Playwright at 375/768/1280px with 24 screenshots + 14 runtime JS tests, zero issues

### Pending Todos

- PowerShell (pwsh) required to run npm build on Linux environments.
- V2: Village interest email signup for expansion areas (Belsen, Öschingen, Talheim)
- V2: Re-add full Datenschutzerklärung consent & analytics sections when tracking is implemented
- V2: STRATO SFTP deployment script (FOUND-03)
- V2: Analytics tracking implementation (TRACK-01)
- V2: Fahrzeuge page carousel
- V3: Preise page — example trip cost calculation + yearly cost comparison
- V2: Phone number bot protection

### Blockers/Concerns

- Site must be running at http://127.0.0.1:5500/site/build/dist/ for visual audit phases.
- Design phases (27, 28, 29, 31) require Frontend Design Plugin skill.
- Phase 26 is specification-only (no code). Plan-phase should produce a directions document, not HTML.

## Session Continuity

Last session: 2026-03-09T09:52:12Z
Stopped at: Completed 27-07-PLAN.md (gap closure visual audit)
Next step: /gsd:execute-plan 29-05 or /gsd:plan-phase 26
Resume file: None
