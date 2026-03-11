---
gsd_state_version: 1.0
milestone: v1.5
milestone_name: Publish Readiness & Review Capture
status: roadmap_created
stopped_at: roadmap created; ready to plan phase 37
last_updated: "2026-03-11T16:46:50.2752439+01:00"
last_activity: 2026-03-11 -- roadmap created for milestone v1.5; Phase 37 ready for planning
progress:
  total_phases: 3
  completed_phases: 0
  total_plans: 0
  completed_plans: 0
  percent: 0
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-03-11)

**Core value:** Attract suitable new members without overwhelming the owners' limited phone capacity.
**Current focus:** Planning and executing Phase 37 to close publish-readiness blockers before the owner review brief

## Current Position

Milestone: v1.5 (Publish Readiness & Review Capture) -- ROADMAP CREATED
Phase: 37 -- Publish Readiness Blockers (next)
Plan: -
Status: Ready to plan Phase 37 from the approved milestone roadmap
Last activity: 2026-03-11 -- roadmap created for publish blockers, owner review capture, and direction recommendation

Progress: v1.5 [░░░░░░░░░░░░░░░░░░░░] 0%

## Performance Metrics

**Velocity (prior milestones):**
- v1.0: 25 plans, ~17 days
- v1.1: 7 plans, 2 days
- v1.2: 17 plans, 9 days
- Trend: Stable

**Recent execution:**
- 2026-03-11: v1.5 started to close publish blockers and capture structured owner review from the shared picker
- 2026-03-11: v1.5 roadmap created with three phases (37-39) and full requirement traceability

## Accumulated Context

### Decisions

All v1.0, v1.1, v1.2 decisions logged in PROJECT.md Key Decisions table with outcomes.

Key current context:
- v1.2 verdict: all 3 designs are chromas — same skeleton, different paint. Structural distinctness insufficient.
- Root cause: Phase 20 directions specified colors/fonts/containers but never varied the page skeleton.
- v1.3 fix: Phase 26 specs must include "Structural Signature" — section ordering, hero type, nav pattern, visual signature, copy strategy.
- Phases 27, 28, 29 depend ONLY on Phase 26. Their source directories are isolated, but browser-driven audit work must serialize when agents share one local browser session.
- Comparison stays on one branch: `site/epic/{a,b,c}/` are the implementations, and a shared start page/version picker is the intended human entry point.
- The v1.4 execution path was Phase 32 -> 33 -> 34 -> 35 -> 36. Do not route future work back to Phase 30 just because that historical path exists.
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
- [Phase 34]: Design B clean pass on Iteration 1 after copyright year fix (2025->2026)
- [Phase 34]: Shared fleet-map.js 404s for car icon SVGs reported as out-of-scope blocker, not fixed from Design B scope
- [Phase 34]: Milestone audit later found Design B phone CTA targets still dial the wrong number despite the clean-pass claim.
- [Phase 35]: Design C clean pass on Iteration 1 after copyright year and og:title fixes
- [Phase 36]: The shared comparison entry lives at site/epic/index.html and links directly to the canonical A, B, and C homepages.
- [Phase 36]: If structured review capture is still wanted after Phase 36, propose it as new Phase 37 rather than routing back to Phase 30.
- [Phase 37]: v1.5 phase structure is locked as publish blockers -> structured owner review capture -> direction recommendation.
- [Phase 37]: Requirement coverage is complete: GAP-01..03 -> Phase 37, REVIEW-01..03 -> Phase 38, DECIDE-01..03 -> Phase 39.

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

- Accepted shipped gap: Design B phone CTA links still need correction before a clean publish decision.
- Shared `site/public/js/fleet-map.js` popup icon asset paths still mismatch the actual `/public/img/cars/` location.
- If formal owner review capture is still needed, propose it as new forward work instead of routing back to Phase 30.

## Session Continuity

Last session: 2026-03-11T16:46:50.2752439+01:00
Stopped at: roadmap created for milestone v1.5; ready to plan Phase 37
Resume file: None
