# Roadmap: teilAuto Mössingen Website

## Milestones

- ✅ **v1.0 MVP** — Phases 1-11 (shipped 2026-02-26)
- ✅ **v1.1 Visual Fixes** — Phases 12-19 (shipped 2026-02-27)
- 🚧 **v1.2 ClaudesDesigns** — Phases 20-24 (in progress)

## Phases

<details>
<summary>✅ v1.0 MVP (Phases 1-11) — SHIPPED 2026-02-26</summary>

- [x] Phase 1: Foundation & Deployment (3/3 plans) — completed 2026-02-08
- [x] Phase 2: Core UX & Navigation (3/3 plans) — completed 2026-02-08
- [x] Phase 3: Homepage & Membership Funnel (3/3 plans) — completed 2026-02-08
- [x] Phase 4: Pricing & Value System (3/3 plans) — completed 2026-02-08
- [x] Phase 5: Fleet & Locations (3/3 plans) — completed 2026-02-10
- [x] Phase 6: Trust, Legal, SEO & Quality (4/4 plans) — completed 2026-02-24
- [x] Phase 7: German Text Correction (1/1 plan) — completed 2026-02-24
- [x] Phase 8: Mobile Navigation & Responsive Layout (1/1 plan) — completed 2026-02-25
- [x] Phase 9: Content Accuracy & Dead Code Cleanup (1/1 plan) — completed 2026-02-25
- [x] Phase 10: Content Messaging & Feature Polish (2/2 plans) — completed 2026-02-25
- [x] Phase 11: Simplified Datenschutzerklärung (1/1 plan) — completed 2026-02-25

Full details: `.planning/milestones/v1.0-ROADMAP.md`

</details>

<details>
<summary>✅ v1.1 Visual Fixes (Phases 12-19) — SHIPPED 2026-02-27</summary>

- [x] Phase 12: Visual Audit (1/1 plan) — completed 2026-02-26
- [x] Phase 13: Auto-Fix (1/1 plan) — completed 2026-02-26
- [x] Phase 14: Joint Review (1/1 plan) — completed 2026-02-27
- [x] Phase 15: Site-Wide Fixes (1/1 plan) — completed 2026-02-27
- [x] Phase 16: Homepage Content Rewrite (1/1 plan) — completed 2026-02-27
- [x] Phase 17: Fahrzeuge Page Overhaul (1/1 plan) — completed 2026-02-27
- [x] Phase 18: Preise Page Restructure (1/1 plan) — completed 2026-02-27
- [x] Phase 19: Secondary Pages (1/1 plan) — completed 2026-02-27

Full details: `.planning/milestones/v1.1-ROADMAP.md`

</details>

### 🚧 v1.2 ClaudesDesigns (In Progress)

**Milestone Goal:** Produce three production-ready visual redesign directions for the 8-page site, refine each through screenshot loops, then select a winner in joint review.

- [x] **Phase 20: Research** — Study student branches and old content docs; document 3 design direction rationales (completed 2026-02-27)
- [ ] **Phase 21: Design A** — Implement complete 8-page site on `design/a` branch, refined to production quality
- [x] **Phase 22: Design B** — Implement complete 8-page site on `design/b` branch, refined to production quality (completed 2026-02-28)
- [x] **Phase 23: Design C** — Implement complete 8-page site on `design/c` branch, refined to production quality (completed 2026-03-01)
- [ ] **Phase 24: Joint Review** — Side-by-side comparison of all 3 designs; select winning direction

## Phase Details

### Phase 20: Research
**Goal**: Design direction rationales documented from real source material — student branches and old content docs studied, 3 distinct concepts defined before a line of code is written
**Depends on**: Nothing (first phase of milestone)
**Requirements**: RES-01, RES-02, RES-03
**Success Criteria** (what must be TRUE):
  1. Student branches reviewed (priority: Rainer-4-V2, Rainer3-akkordeon) and UI patterns catalogued as inspiration notes
  2. Old site and owner content documents reviewed; content enhancement opportunities noted (without inventing facts)
  3. Three distinct design direction rationales written — each covering visual concept, type/color approach, and layout philosophy
  4. Rationale document makes clear how each direction differs from the others and from v1.1
**Plans**: 2 plans
- [x] 20-01-PLAN.md -- Study student branches and old content docs; catalogue UI patterns and content opportunities
- [x] 20-02-PLAN.md -- Synthesize research into 3 distinct design direction rationales

### Phase 21: Design A
**Goal**: A complete, production-ready 8-page site on `design/a` branch — visually distinct concept A, Zweitwagen-conversion-optimized, polished through Playwright screenshot loops
**Depends on**: Phase 20
**Requirements**: IMPL-01, IMPL-02, IMPL-03, IMPL-04, IMPL-05, IMPL-06, VIS-01, VIS-02, VIS-03, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04
**Success Criteria** (what must be TRUE):
  1. All 8 pages (home, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz) exist and render correctly on `design/a`
  2. Design A has a cohesive, distinct visual identity (type + color system) that differs clearly from v1.1 and the other two designs
  3. Homepage hero speaks directly to the Zweitwagen persona (Simone) without generic carsharing claims
  4. Membership gate is clearly communicated — visitor understands this is not a one-time rental service before reaching the phone CTA
  5. Playwright screenshots at 375px, 768px, and 1280px show no layout breaks, overflow, or visual regressions across all 8 pages
**Plans**: TBD

### Phase 22: Design B
**Goal**: A complete, production-ready 8-page site on `design/b` branch — visually distinct concept B, Zweitwagen-conversion-optimized, polished through Playwright screenshot loops
**Depends on**: Phase 21
**Requirements**: IMPL-01, IMPL-02, IMPL-03, IMPL-04, IMPL-05, IMPL-06, VIS-01, VIS-02, VIS-03, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04
**Success Criteria** (what must be TRUE):
  1. All 8 pages exist and render correctly on `design/b`
  2. Design B has a cohesive, distinct visual identity that differs clearly from v1.1, Design A, and Design C
  3. Homepage hero speaks directly to the Zweitwagen persona (Simone) without generic carsharing claims
  4. Membership gate is clearly communicated — visitor understands this is not a one-time rental service before reaching the phone CTA
  5. Playwright screenshots at 375px, 768px, and 1280px show no layout breaks, overflow, or visual regressions across all 8 pages
**Plans**: 5 plans (complete)
- [x] 22-01-PLAN.md -- Design system foundation (theme tokens, typography, base template, nav, footer)
- [x] 22-02-PLAN.md -- Homepage + mitglied-werden
- [x] 22-03-PLAN.md -- Preise + fahrzeuge
- [x] 22-04-PLAN.md -- Geschaeftskunden, ueber-uns, impressum, datenschutz
- [x] 22-05-PLAN.md -- Playwright visual audit + user review

### Phase 23: Design C
**Goal**: A complete, production-ready 8-page site on `design/c` branch — visually distinct concept C, Zweitwagen-conversion-optimized, polished through Playwright screenshot loops
**Depends on**: Phase 22
**Requirements**: IMPL-01, IMPL-02, IMPL-03, IMPL-04, IMPL-05, IMPL-06, VIS-01, VIS-02, VIS-03, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04
**Success Criteria** (what must be TRUE):
  1. All 8 pages exist and render correctly on `design/c`
  2. Design C has a cohesive, distinct visual identity that differs clearly from v1.1, Design A, and Design B
  3. Homepage hero speaks directly to the Zweitwagen persona (Simone) without generic carsharing claims
  4. Membership gate is clearly communicated — visitor understands this is not a one-time rental service before reaching the phone CTA
  5. Playwright screenshots at 375px, 768px, and 1280px show no layout breaks, overflow, or visual regressions across all 8 pages
**Plans**: TBD

### Phase 24: Joint Review
**Goal**: User has reviewed all three designs side-by-side and selected one direction as the go-forward basis for production
**Depends on**: Phase 23
**Requirements**: REV-01, REV-02
**Success Criteria** (what must be TRUE):
  1. All three designs can be viewed side-by-side (screenshots or live branches) for direct comparison
  2. User has evaluated each design against Zweitwagen conversion goal and aesthetic preference
  3. One design is selected and documented as the winning direction with rationale recorded in PROJECT.md
**Plans**: TBD

## Progress

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1-11 | v1.0 | 25/25 | Complete | 2026-02-25 |
| 12-19 | v1.1 | 7/7 | Complete | 2026-02-27 |
| 20. Research | 2/2 | Complete    | 2026-02-27 | - |
| 21. Design A | v1.2 | 0/TBD | Not started | - |
| 22. Design B | v1.2 | 5/5 | Complete | 2026-02-28 |
| 23. Design C | 5/5 | Complete   | 2026-03-01 | - |
| 24. Joint Review | v1.2 | 0/TBD | Not started | - |
| 25. Design D — Claude's Own Vision | v1.2 | 0/TBD | Not started | - |

### Phase 25: Design D — Claude's Own Vision

**Goal:** A complete, production-ready 8-page site on `design/d` branch — Claude's autonomous design vision, unconstrained by Phase 20 rationales. May refine the best ideas from Designs A-C or create an entirely new strategy. Must use the frontend-design skill. Same conversion requirements as Phases 21-23 but design approach is entirely Claude's choice.
**Requirements**: IMPL-01, IMPL-02, IMPL-03, IMPL-04, IMPL-05, IMPL-06, VIS-01, VIS-02, VIS-03, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04
**Depends on:** Phase 23
**Success Criteria** (what must be TRUE):
  1. All 8 pages (home, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz) exist and render correctly on `design/d`
  2. Design D has a cohesive, distinct visual identity that differs clearly from v1.1, Design A, Design B, and Design C
  3. Homepage hero speaks directly to the Zweitwagen persona (Simone) without generic carsharing claims
  4. Membership gate is clearly communicated — visitor understands this is not a one-time rental service before reaching the phone CTA
  5. Playwright screenshots at 375px, 768px, and 1280px show no layout breaks, overflow, or visual regressions across all 8 pages
  6. Frontend-design skill was used for implementation
**Plans:** 5/5 plans complete

Plans:
- [ ] TBD (run /gsd:plan-phase 25 to break down)
