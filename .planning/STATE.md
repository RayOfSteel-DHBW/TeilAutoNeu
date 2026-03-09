---
gsd_state_version: 1.0
milestone: v1.4
milestone_name: Epic Skin Polish
status: in_progress
stopped_at: Phase 33 complete; paused before Phase 34
last_updated: "2026-03-09T17:40:14.246Z"
last_activity: 2026-03-09 -- Phase 33 closed clean on Iteration 1; paused before the serial Design B loop
progress:
  total_phases: 5
  completed_phases: 2
  total_plans: 5
  completed_plans: 2
  percent: 40
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-03-09)

**Core value:** Attract suitable new members without overwhelming the owners' limited phone capacity.
**Current focus:** v1.4 Epic Skin Polish -- Phase 34: Epic Skin B Polish Loop

## Current Position

Phase: 34 of v1.4 (Epic Skin B Polish Loop)
Plan: Not started
Status: Phase 33 complete; paused before the serial browser-driven Design B polish loop
Last activity: 2026-03-09 -- Phase 33 closed clean on Iteration 1; paused before the serial Design B loop

Progress: v1.4 [████░░░░░░] 40%

## Performance Metrics

**Velocity (prior milestones):**
- v1.0: 25 plans, ~17 days
- v1.1: 7 plans, 2 days
- v1.2: 17 plans, 9 days
- Trend: Stable

## Accumulated Context

### Decisions

All v1.0, v1.1, v1.2 decisions logged in PROJECT.md Key Decisions table with outcomes.

Key current context:
- v1.2 verdict: all 3 designs are chromas — same skeleton, different paint. Structural distinctness insufficient.
- Root cause: Phase 20 directions specified colors/fonts/containers but never varied the page skeleton.
- v1.3 fix: Phase 26 specs must include "Structural Signature" — section ordering, hero type, nav pattern, visual signature, copy strategy.
- Phases 27, 28, 29 depend ONLY on Phase 26. Their source directories are isolated, but browser-driven audit work must serialize when agents share one local browser session.
- Comparison stays on one branch: `site/epic/{a,b,c}/` are the implementations, and a shared start page/version picker is the intended human entry point.
- The active forward path is Phase 32 -> 33 -> 34 -> 35 -> 36. Do not route back to Phase 30 during this milestone.
- If structured review-capture is still needed after Phase 36, propose a new forward phase number instead of reopening v1.3 placeholders.
- [Phase 32]: Active planning docs now treat v1.4 as the current milestone and define serial browser execution for Phases 33-36.
- [Phase 32]: A/B/C inventory captured in `.planning/phases/32-polish-baseline-review-surface/32-INVENTORY.md`.
- [Phase 32]: Shared comparison-surface ownership locked to Phases 32 and 36 in `.planning/phases/32-polish-baseline-review-surface/32-REVIEW-SURFACE.md`.
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
- [Phase 29]: Custom nav.js for minimal header pattern (not sticky, not floating pill) with full-screen overlay
- [Phase 29]: Light hero background (bg-brand-surface) distinguishes Design C from A and B dark heroes
- [Phase 29]: Community-first section ordering: social proof -> membership gate -> how-it-works -> benefits -> CTA
- [Phase 29]: Compact page headers (not full heroes) for interior pages with organic blob decoration
- [Phase 29]: Vehicle specs use dl/dt/dd definition lists with warm community framing
- [Phase 29]: Responsive fleet-map heights (420/480/520px) at mobile/sm/lg breakpoints
- [Phase 29]: All 8 Design C pages passed Playwright audit at 375px, 768px, and 1280px after correcting stale `fuer-firmen.html` links on 4 pages
- [Process]: Future browser-driven polish work must run sequentially because A/B/C share one local browser session

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

- Shared start page/version picker work belongs to shared review phases, not skin-specific implementation or polish phases.
- Browser-driven audit work is a shared-resource bottleneck in this repo.
- Phase 35 must confirm all 8 Design C pages still exist before starting the loop.

## Session Continuity

Last session: 2026-03-09T17:40:14.246Z
Stopped at: Phase 33 complete; paused before Phase 34
Next step: $gsd-resume-work
Resume file: .planning/phases/33-epic-skin-a-polish-loop/.continue-here.md
