# Requirements: teilAuto Mössingen Website

**Defined:** 2026-03-08
**Core Value:** Attract suitable new members without overwhelming the owners' limited phone capacity.

## v1.4 Requirements

Requirements for milestone v1.4 Epic Skin Polish. This milestone keeps the
one-branch comparison model intact, runs the skin polish loops sequentially
because one browser is shared, and reserves the shared start page/version
picker for the shared phases rather than the skin-local phases.

### Baseline

- [x] **BASE-01**: Shared planning artifacts and review paths match repo
  reality before skin-specific polish begins.
- [x] **BASE-02**: A, B, and C directory inventories are documented so missing
  or incomplete versions are caught before a polish phase starts.
- [x] **BASE-03**: Comparison and publish expectations are documented before
  skin-specific loops begin, including the shared start page/version picker
  model.

### Audit Loop

- [x] **AUDIT-01**: Each skin is visually reviewed across all 8 pages at
  `375px`, `768px`, and `1280px`.
- [x] **AUDIT-02**: Each audit pass produces a written TODO list with page,
  location, and issue description before fixes start.
- [x] **AUDIT-03**: Each audit checks both visual quality and adherence to
  `.planning/milestones/v1.0-REQUIREMENTS.md`.
- [x] **AUDIT-04**: Browser-driven audit work is executed sequentially because
  all polish phases share one local browser resource.

### Loop Control

- [x] **LOOP-01**: Each skin repeats `review -> TODO -> fix -> verify` until a
  clean pass finds no further obvious issues.
- [x] **LOOP-02**: Each skin stops after 5 iterations if issues remain and then
  waits for explicit user approval before another loop block.
- [x] **LOOP-03**: Shared repo or planning problems found during a skin phase
  are reported as blockers instead of being silently absorbed into skin-specific
  work.

### Skin Outcomes

- [x] **READY-A-01**: Design A reaches review-ready state or an explicit
  user-approved hold after the iteration cap.
- [x] **READY-B-01**: Design B reaches review-ready state or an explicit
  user-approved hold after the iteration cap.
- [x] **READY-C-01**: Design C reaches review-ready state or an explicit
  user-approved hold after the iteration cap.

### Comparison Readiness

- [ ] **COMP-01**: All three skins can be reached from a shared start
  page/version picker on the same branch, backed by stable local or published
  paths.
- [ ] **COMP-02**: Review and publish instructions are documented so the owner
  can compare the skins through that shared picker without repo archaeology.

## v1.3 Requirements (Archived)

Requirements for milestone v1.3 Epic Skins. Structurally distinct design explorations + synthesis — 3 "epic skin" designs that differ in page skeleton, hero composition, nav pattern, content flow, and visual signature, are compared from one shared start page/version picker, then synthesized into Design D.

### Structural Identity

- [x] **STRUCT-01**: Each design direction specifies a unique page skeleton (section ordering, hero type, nav pattern)
- [x] **STRUCT-02**: No two designs share the same hero composition type
- [x] **STRUCT-03**: Each design has a unique visual signature element that appears consistently across pages
- [x] **STRUCT-04**: Copy strategy varies per design (same facts, different emphasis and emotional arc)
- [x] **STRUCT-05**: Differentiation matrix proves at least 3 structural differences between each design pair

### Design Implementation

- [x] **IMPL-01**: Three structurally distinct ("epic skin") designs implemented as complete sites
- [x] **IMPL-02**: Each design lives in a dedicated parallel-safe implementation directory (`site/epic/a`, `site/epic/b`, `site/epic/c`)
- [x] **IMPL-03**: Each design covers all 8 pages (home, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz)
- [x] **IMPL-04**: Each design is production-ready quality (shippable as-is)
- [x] **IMPL-05**: Each design refined through Playwright screenshot-evaluate loops
- [x] **IMPL-06**: Frontend Design Plugin used for implementation

### Visual Identity

- [x] **VIS-01**: Each design has a cohesive type + color system
- [x] **VIS-02**: Modern, professional aesthetic — not artsy or experimental
- [x] **VIS-03**: Mobile-first responsive at all standard breakpoints (375px, 768px, 1280px+)
- [x] **VIS-04**: Consistent component language per design (cards, buttons, nav, footer)

### Conversion

- [x] **CONV-01**: Homepage hero optimized for Zweitwagen persona (Simone)
- [x] **CONV-02**: Membership requirement clearly communicated to prevent false positive calls
- [x] **CONV-03**: Phone CTA (07473-922202) prominently placed in conversion context
- [x] **CONV-04**: Copy is snappier than v1.1 but based on existing verified content (no invented claims)

### Review & Synthesis

- [ ] **SYNTH-01**: Epic review captures per-design feedback (what works, what doesn't, what to keep) through a shared one-branch comparison surface with a start page/version picker
- [ ] **SYNTH-02**: Design D brief incorporates specific review feedback before implementation
- [ ] **SYNTH-03**: Design D's structural choices are traceable to review feedback

## v1.2 Requirements (Archived)

See `.planning/milestones/v1.2-REQUIREMENTS.md` (if archived) or previous REQUIREMENTS.md version in git history.

## Future Requirements

Deferred to post-v1.4:

- Apply winning design to production branch
- Fahrzeuge page carousel integration
- Preise page cost calculator
- Analytics tracking
- STRATO SFTP deployment
- Phone number bot protection

## Out of Scope

| Feature | Reason |
|---------|--------|
| New page structure (adding/removing pages) | Same 8 pages, structural variation only |
| New functionality (calculator, forms, booking) | Design exploration, not feature development |
| Owner-supplied photos | Still pending from owner |
| Real pricing data | Pending from owner; use existing placeholders |
| Content invention (new claims, statistics) | Copy can be reframed but must use verified existing content |
| Experimental/artsy designs | Must remain professional and conversion-effective |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| BASE-01 | Phase 32 | Complete |
| BASE-02 | Phase 32 | Complete |
| BASE-03 | Phase 32 | Complete |
| AUDIT-01 | Phases 33, 34, 35 | Complete |
| AUDIT-02 | Phases 33, 34, 35 | Complete |
| AUDIT-03 | Phases 33, 34, 35 | Complete |
| AUDIT-04 | Phase 32 | Complete |
| LOOP-01 | Phases 33, 34, 35 | Complete |
| LOOP-02 | Phases 33, 34, 35 | Complete |
| LOOP-03 | Phases 32, 33, 34, 35 | Complete |
| READY-A-01 | Phase 33 | Complete |
| READY-B-01 | Phase 34 | Complete |
| READY-C-01 | Phase 35 | Complete |
| COMP-01 | Phase 36 | Pending |
| COMP-02 | Phase 36 | Pending |
| STRUCT-01 | Phase 26 | Complete |
| STRUCT-02 | Phase 26 | Complete |
| STRUCT-03 | Phase 26 | Complete |
| STRUCT-04 | Phase 26 | Complete |
| STRUCT-05 | Phase 26 | Complete |
| IMPL-01 | Phases 27, 28, 29 | Complete |
| IMPL-02 | Phases 27, 28, 29 | Complete |
| IMPL-03 | Phases 27, 28, 29 | Complete |
| IMPL-04 | Phases 27, 28, 29 | Complete |
| IMPL-05 | Phases 27, 28, 29 | Complete |
| IMPL-06 | Phases 27, 28, 29 | Complete |
| VIS-01 | Phases 27, 28, 29 | Complete |
| VIS-02 | Phases 27, 28, 29 | Complete |
| VIS-03 | Phases 27, 28, 29 | Complete |
| VIS-04 | Phases 27, 28, 29 | Complete |
| CONV-01 | Phases 27, 28, 29 | Complete |
| CONV-02 | Phases 27, 28, 29 | Complete |
| CONV-03 | Phases 27, 28, 29 | Complete |
| CONV-04 | Phases 27, 28, 29 | Complete |
| SYNTH-01 | Phase 30 | Pending |
| SYNTH-02 | Phase 30 | Pending |
| SYNTH-03 | Phase 31 | Pending |

**Coverage:**
- v1.4 active requirements: 15 total
- v1.4 mapped to phases: 15
- v1.3 archived requirements: 22 total
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-08*
*Last updated: 2026-03-09 — v1.4 polish requirements promoted to active status with serial browser-execution constraints*
