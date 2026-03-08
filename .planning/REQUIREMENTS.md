# Requirements: teilAuto Mössingen Website

**Defined:** 2026-03-08
**Core Value:** Attract suitable new members without overwhelming the owners' limited phone capacity.

## v1.3 Requirements

Requirements for milestone v1.3 Epic Skins. Structurally distinct design explorations + synthesis — 3 "epic skin" designs that differ in page skeleton, hero composition, nav pattern, content flow, and visual signature, then synthesized into Design D.

### Structural Identity

- [ ] **STRUCT-01**: Each design direction specifies a unique page skeleton (section ordering, hero type, nav pattern)
- [ ] **STRUCT-02**: No two designs share the same hero composition type
- [ ] **STRUCT-03**: Each design has a unique visual signature element that appears consistently across pages
- [ ] **STRUCT-04**: Copy strategy varies per design (same facts, different emphasis and emotional arc)
- [ ] **STRUCT-05**: Differentiation matrix proves at least 3 structural differences between each design pair

### Design Implementation

- [ ] **IMPL-01**: Three structurally distinct ("epic skin") designs implemented as complete sites
- [ ] **IMPL-02**: Each design lives on a dedicated git branch (`design/a`, `design/b`, `design/c`)
- [ ] **IMPL-03**: Each design covers all 8 pages (home, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz)
- [ ] **IMPL-04**: Each design is production-ready quality (shippable as-is)
- [ ] **IMPL-05**: Each design refined through Playwright screenshot-evaluate loops
- [ ] **IMPL-06**: Frontend Design Plugin used for implementation

### Visual Identity

- [ ] **VIS-01**: Each design has a cohesive type + color system
- [ ] **VIS-02**: Modern, professional aesthetic — not artsy or experimental
- [ ] **VIS-03**: Mobile-first responsive at all standard breakpoints (375px, 768px, 1280px+)
- [ ] **VIS-04**: Consistent component language per design (cards, buttons, nav, footer)

### Conversion

- [ ] **CONV-01**: Homepage hero optimized for Zweitwagen persona (Simone)
- [ ] **CONV-02**: Membership requirement clearly communicated to prevent false positive calls
- [ ] **CONV-03**: Phone CTA (07473-922202) prominently placed in conversion context
- [ ] **CONV-04**: Copy is snappier than v1.1 but based on existing verified content (no invented claims)

### Review & Synthesis

- [ ] **SYNTH-01**: Epic review captures per-design feedback (what works, what doesn't, what to keep)
- [ ] **SYNTH-02**: Design D brief incorporates specific review feedback before implementation
- [ ] **SYNTH-03**: Design D's structural choices are traceable to review feedback

## v1.2 Requirements (Archived)

See `.planning/milestones/v1.2-REQUIREMENTS.md` (if archived) or previous REQUIREMENTS.md version in git history.

## Future Requirements

Deferred to post-v1.3:

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
| STRUCT-01 | Phase 26 | Pending |
| STRUCT-02 | Phase 26 | Pending |
| STRUCT-03 | Phase 26 | Pending |
| STRUCT-04 | Phase 26 | Pending |
| STRUCT-05 | Phase 26 | Pending |
| IMPL-01 | Phase 27, 28, 29 | Pending |
| IMPL-02 | Phase 27, 28, 29 | Pending |
| IMPL-03 | Phase 27, 28, 29 | Pending |
| IMPL-04 | Phase 27, 28, 29 | Pending |
| IMPL-05 | Phase 27, 28, 29 | Pending |
| IMPL-06 | Phase 27, 28, 29 | Pending |
| VIS-01 | Phase 27, 28, 29 | Pending |
| VIS-02 | Phase 27, 28, 29 | Pending |
| VIS-03 | Phase 27, 28, 29 | Pending |
| VIS-04 | Phase 27, 28, 29 | Pending |
| CONV-01 | Phase 27, 28, 29 | Pending |
| CONV-02 | Phase 27, 28, 29 | Pending |
| CONV-03 | Phase 27, 28, 29 | Pending |
| CONV-04 | Phase 27, 28, 29 | Pending |
| SYNTH-01 | Phase 30 | Pending |
| SYNTH-02 | Phase 30 | Pending |
| SYNTH-03 | Phase 31 | Pending |

**Coverage:**
- v1.3 requirements: 22 total
- Mapped to phases: 22
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-08*
*Last updated: 2026-03-08 after initial definition*
