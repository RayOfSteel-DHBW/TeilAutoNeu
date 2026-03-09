# Roadmap: teilAuto Mössingen Website

## Milestones

- ✅ **v1.0 MVP** — Phases 1-11 (shipped 2026-02-26)
- ✅ **v1.1 Visual Fixes** — Phases 12-19 (shipped 2026-02-27)
- ✅ **v1.2 ClaudesDesigns** — Phases 20-24 (shipped 2026-03-08, verdict: chromas)
- ⏸️ **v1.3 Epic Skins** — Phases 26-31 (historical milestone; Phases 30-31 remain placeholders)
- 🚧 **v1.4 Epic Skin Polish** — Phases 32-36 (active; sequential shared-browser execution)

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

<details>
<summary>✅ v1.2 ClaudesDesigns (Phases 20-24) — SHIPPED 2026-03-08</summary>

**Milestone Goal:** Produce three production-ready visual redesign directions for the 8-page site, refine each through screenshot loops, then select a winner in joint review.
**Outcome:** Three chromas produced and reviewed. Verdict: structural distinctness insufficient — designs differed in color/font/containers but shared identical page skeletons. Learning fed into v1.3 "Epic Skins" milestone.

- [x] **Phase 20: Research** — Study student branches and old content docs; document 3 design direction rationales (completed 2026-02-27)
- [x] **Phase 21: Design A** — Implement complete 8-page site on `design/a`, refined to production quality (completed 2026-02-28)
- [x] **Phase 22: Design B** — Implement complete 8-page site on `design/b`, refined to production quality (completed 2026-02-28)
- [x] **Phase 23: Design C** — Implement complete 8-page site on `design/c`, refined to production quality (completed 2026-03-01)
- [x] **Phase 24: Joint Review** — Side-by-side comparison of all 3 designs; verdict: chromas, not epic skins (completed 2026-03-08)

Full details: `.planning/milestones/v1.2-ROADMAP.md`

</details>

### v1.3 Epic Skins (In Progress)

**Milestone Goal:** Produce 3 structurally distinct ("epic skin") design explorations — each with a different page skeleton, hero composition, nav pattern, content flow, and visual signature — keep them on one branch in parallel directories, review them through a shared start page/version picker, then synthesize feedback into Design D (Claude's autonomous vision).

- [x] **Phase 26: Epic Directions** — Write 3 structurally distinct design direction specifications before any code is written (restored 2026-03-09)
- [x] **Phase 27: Epic Skin A** — Complete 8-page site in `site/epic/a/` per Epic Direction A (completed 2026-03-09)
- [x] **Phase 28: Epic Skin B** — Complete 8-page site in `site/epic/b/` per Epic Direction B (parallel to 27) (completed 2026-03-09)
- [x] **Phase 29: Epic Skin C** — Complete 8-page site in `site/epic/c/` per Epic Direction C (parallel to 27-28) (completed 2026-03-09)
- [ ] **Phase 30: Epic Review** — User reviews all 3 epic skins from a shared start page/version picker; structured feedback captured for Design D
- [ ] **Phase 31: Design D — Claude's Synthesis** — Claude's autonomous synthesis in `site/epic/d/` based on review feedback

Prepared follow-up milestone: `.planning/v1.4-ROADMAP-DRAFT.md`

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
**Goal**: A complete, production-ready 8-page site on `design/a` — visually distinct concept A, Zweitwagen-conversion-optimized, polished through Playwright screenshot loops
**Depends on**: Phase 20
**Requirements**: IMPL-01, IMPL-02, IMPL-03, IMPL-04, IMPL-05, IMPL-06, VIS-01, VIS-02, VIS-03, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04
**Success Criteria** (what must be TRUE):
  1. All 8 pages (home, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz) exist and render correctly on `design/a`
  2. Design A has a cohesive, distinct visual identity (type + color system) that differs clearly from v1.1 and the other two designs
  3. Homepage hero speaks directly to the Zweitwagen persona (Simone) without generic carsharing claims
  4. Membership gate is clearly communicated — visitor understands this is not a one-time rental service before reaching the phone CTA
  5. Playwright screenshots at 375px, 768px, and 1280px show no layout breaks, overflow, or visual regressions across all 8 pages
**Plans**: 5 plans (complete)
- [x] 21-01-PLAN.md -- Design system foundation (theme tokens, typography, base template, nav, footer)
- [x] 21-02-PLAN.md -- Homepage + mitglied-werden editorial restyle
- [x] 21-03-PLAN.md -- Preise + fahrzeuge data-driven pages
- [x] 21-04-PLAN.md -- Geschaeftskunden, ueber-uns, impressum, datenschutz
- [x] 21-05-PLAN.md -- Visual audit + fixes

### Phase 22: Design B
**Goal**: A complete, production-ready 8-page site on `design/b` — visually distinct concept B, Zweitwagen-conversion-optimized, polished through Playwright screenshot loops
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
**Goal**: A complete, production-ready 8-page site on `design/c` — visually distinct concept C, Zweitwagen-conversion-optimized, polished through Playwright screenshot loops
**Depends on**: Phase 22
**Requirements**: IMPL-01, IMPL-02, IMPL-03, IMPL-04, IMPL-05, IMPL-06, VIS-01, VIS-02, VIS-03, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04
**Success Criteria** (what must be TRUE):
  1. All 8 pages exist and render correctly on `design/c`
  2. Design C has a cohesive, distinct visual identity that differs clearly from v1.1, Design A, and Design B
  3. Homepage hero speaks directly to the Zweitwagen persona (Simone) without generic carsharing claims
  4. Membership gate is clearly communicated — visitor understands this is not a one-time rental service before reaching the phone CTA
  5. Playwright screenshots at 375px, 768px, and 1280px show no layout breaks, overflow, or visual regressions across all 8 pages
**Plans**: 5 plans (complete)
- [x] 23-01-PLAN.md -- Design system foundation (theme tokens, typography, base template, nav, footer)
- [x] 23-02-PLAN.md -- Homepage + mitglied-werden warm conversion funnel
- [x] 23-03-PLAN.md -- Preise + fahrzeuge warm card layout
- [x] 23-04-PLAN.md -- Geschaeftskunden, ueber-uns, impressum, datenschutz
- [x] 23-05-PLAN.md -- Visual audit summary

### Phase 24: Joint Review
**Goal**: User has reviewed all three designs side-by-side and evaluated distinctness
**Depends on**: Phase 23
**Requirements**: REV-01, REV-02
**Success Criteria** (what must be TRUE):
  1. All three designs can be viewed side-by-side (screenshots or live branches) for direct comparison
  2. User has evaluated each design against Zweitwagen conversion goal and aesthetic preference
  3. Review verdict documented with rationale
**Status**: Complete (2026-03-08)
**Verdict**: All three designs are chromas (recolors) — same page skeleton, different paint. Structural distinctness insufficient. New milestone v1.3 "Epic Skins" created. See `.planning/v1.3-MILESTONE-BRIEF.md`.
**Plans**: 0 plans (review conducted interactively)

### Phase 26: Epic Directions
**Goal**: Three structurally distinct design direction specifications written — each with a unique page skeleton, hero composition type, nav pattern, content flow, and visual signature. This is a specification document only; no code is written. Replaces Phase 20's directions with `26-EPIC-DIRECTIONS.md`.
**Depends on**: Nothing (first phase of v1.3; references v1.2 learnings)
**Requirements**: STRUCT-01, STRUCT-02, STRUCT-03, STRUCT-04, STRUCT-05
**Status**: Complete (2026-03-09)
**Success Criteria** (what must be TRUE):
  1. Three directions written, each with an explicit "Structural Signature" section covering: homepage section ordering, hero composition type, nav pattern, visual signature element, and copy strategy
  2. No two directions share the same hero composition type
  3. Each direction specifies a different homepage section ordering (not all hero -> gate -> benefits -> CTA)
  4. Differentiation matrix shows at least 3 structural differences between each design pair
  5. Each direction includes a copy strategy specifying what content is emphasized and what emotional arc it follows
  6. Document makes clear how each direction constitutes an "epic skin" not a "chroma" — structural skeleton varies, not just paint
**Plans**: 1 plan (complete)
- [x] 26-01-PLAN.md -- Canonicalize the shared epic direction spec from implemented A/B and active C direction

### Phase 27: Epic Skin A
**Goal**: A complete 8-page site in `site/epic/a/` built per Epic Direction A — with its own page skeleton, hero composition, nav pattern, content flow, and visual signature element. Refined through Playwright screenshot loops.
**Depends on**: Phase 26
**Parallel note**: Source directories are parallel-safe, but browser-driven audit work must serialize if all agents share one local browser.
**Requirements**: IMPL-01, IMPL-02, IMPL-03, IMPL-04, IMPL-05, IMPL-06, VIS-01, VIS-02, VIS-03, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04
**Success Criteria** (what must be TRUE):
  1. All 8 pages (home, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz) render correctly in `site/epic/a/`
  2. Homepage section ordering matches Epic Direction A specification and differs from Designs B and C
  3. Hero composition type is unique to Design A — not shared with Designs B or C
  4. At least one page demonstrates a layout pattern not used in any v1.2 chroma
  5. Visual signature element (the distinctive "this is Design A" element) appears consistently across pages
  6. Copy emphasis and ordering differ from Designs B and C — same facts, different storytelling arc
  7. Playwright screenshots at 375px, 768px, and 1280px show no layout breaks or overflow across all 8 pages
  8. Navigation pattern is functional and accessible on all breakpoints
**Plans**: 7 plans
- [x] 27-01-PLAN.md -- Foundation (theme, base CSS, JS copies) + Homepage with full-bleed immersive hero
- [x] 27-02-PLAN.md -- Preise + Fahrzeuge data-driven pages
- [x] 27-03-PLAN.md -- Geschaeftskunden, Ueber-uns, Mitglied-werden content pages
- [x] 27-04-PLAN.md -- Impressum + Datenschutz legal pages
- [x] 27-05-PLAN.md -- Playwright visual audit + fixes
- [x] 27-06-PLAN.md -- (gap closure) Fix impressum.html TODO placeholders
- [x] 27-07-PLAN.md -- (gap closure) Puppeteer visual audit + JS runtime verification

### Phase 28: Epic Skin B
**Goal**: A complete 8-page site in `site/epic/b/` built per Epic Direction B — with its own structurally distinct page skeleton, hero composition, nav pattern, content flow, and visual signature. Refined through Playwright screenshot loops.
**Depends on**: Phase 26
**Parallel note**: Source directories are parallel-safe, but browser-driven audit work must serialize if all agents share one local browser.
**Requirements**: IMPL-01, IMPL-02, IMPL-03, IMPL-04, IMPL-05, IMPL-06, VIS-01, VIS-02, VIS-03, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04
**Success Criteria** (what must be TRUE):
  1. All 8 pages render correctly in `site/epic/b/`
  2. Homepage section ordering matches Epic Direction B specification and differs from Designs A and C
  3. Hero composition type is unique to Design B — not shared with Designs A or C
  4. At least one page demonstrates a layout pattern not used in any v1.2 chroma
  5. Visual signature element (the distinctive "this is Design B" element) appears consistently across pages
  6. Copy emphasis and ordering differ from Designs A and C — same facts, different storytelling arc
  7. Playwright screenshots at 375px, 768px, and 1280px show no layout breaks or overflow across all 8 pages
  8. Navigation pattern is functional and accessible on all breakpoints
**Plans**: 5 plans (complete)
- [x] 28-01-PLAN.md -- Foundation (theme, base CSS, nav JS) + Homepage with asymmetric split hero
- [x] 28-02-PLAN.md -- Preise + Fahrzeuge data-driven pages
- [x] 28-03-PLAN.md -- Geschaeftskunden, Ueber-uns, Mitglied-werden content pages
- [x] 28-04-PLAN.md -- Impressum + Datenschutz legal pages
- [x] 28-05-PLAN.md -- Playwright visual audit + fixes

### Phase 29: Epic Skin C
**Goal**: A complete 8-page site in `site/epic/c/` built per Epic Direction C — with its own structurally distinct page skeleton, hero composition, nav pattern, content flow, and visual signature. Refined through Playwright screenshot loops.
**Depends on**: Phase 26
**Parallel note**: Source directories are parallel-safe, but browser-driven audit work must serialize if all agents share one local browser.
**Requirements**: IMPL-01, IMPL-02, IMPL-03, IMPL-04, IMPL-05, IMPL-06, VIS-01, VIS-02, VIS-03, VIS-04, CONV-01, CONV-02, CONV-03, CONV-04
**Success Criteria** (what must be TRUE):
  1. All 8 pages render correctly in `site/epic/c/`
  2. Homepage section ordering matches Epic Direction C specification and differs from Designs A and B
  3. Hero composition type is unique to Design C — not shared with Designs A or B
  4. At least one page demonstrates a layout pattern not used in any v1.2 chroma
  5. Visual signature element (the distinctive "this is Design C" element) appears consistently across pages
  6. Copy emphasis and ordering differ from Designs A and B — same facts, different storytelling arc
  7. Playwright screenshots at 375px, 768px, and 1280px show no layout breaks or overflow across all 8 pages
  8. Navigation pattern is functional and accessible on all breakpoints
**Plans**: 5 plans (complete)
- [x] 29-01-PLAN.md -- Foundation (JS files, nav) + Homepage with stacked editorial hero and community-first arc
- [x] 29-02-PLAN.md -- Preise + Fahrzeuge data-driven pages
- [x] 29-03-PLAN.md -- Geschaeftskunden, Ueber-uns, Mitglied-werden content pages
- [x] 29-04-PLAN.md -- Impressum + Datenschutz legal pages
- [x] 29-05-PLAN.md -- Puppeteer visual audit + fixes

### Phase 30: Epic Review
**Goal**: User reviews all 3 epic skins from a shared start page/version picker; structured feedback is captured per design and distilled into a Design D brief that feeds directly into Phase 31.
**Depends on**: Phases 27, 28, 29 (all three must be complete)
**Requirements**: SYNTH-01, SYNTH-02
**Success Criteria** (what must be TRUE):
  1. A shared start page/version picker on the current branch reaches all three epic skins by stable local or published paths
  2. User has evaluated structural distinctness, conversion effectiveness, and aesthetic preference for each design
  3. Specific feedback captured per design: what works, what doesn't, what elements to carry forward to Design D
  4. Design D brief written incorporating specific review feedback (not a generic "take the best parts")
  5. Review verdict documented: which structural elements from which designs are chosen and why
**Plans**: TBD

### Phase 31: Design D — Claude's Synthesis
**Goal**: Claude's autonomous design vision in `site/epic/d/` — a unified synthesis of the best structural elements from epic skins A, B, and C based on user review feedback from Phase 30. Must use the frontend-design skill. This is the intended winner.
**Depends on**: Phase 30
**Requirements**: SYNTH-03
**Success Criteria** (what must be TRUE):
  1. All 8 pages render correctly in `site/epic/d/`
  2. Design incorporates specific structural feedback from Phase 30 review (traceable choices, not generic "best of")
  3. Structural elements deliberately chosen from review (e.g., "A's hero + C's nav + B's content flow") with rationale documented
  4. Cohesive visual identity — unified synthesis, not a Frankenstein assembly of parts
  5. Frontend-design skill used for implementation
  6. Playwright screenshots clean at 375px, 768px, and 1280px across all 8 pages
**Plans**: TBD

### v1.4 Epic Skin Polish

**Milestone Goal:** Run bounded polish loops on epic skins A, B, and C after
v1.3 implementation completed, with shared housekeeping and the shared start
page/version picker handled separately from skin-specific review/fix work.

**Execution model:** Sequential only. The local browser is shared, so any plan
that uses Playwright, screenshots, browser verification, or browser state must
run serially and must not be grouped into the same browser wave.

- [x] **Phase 32: Polish Baseline & Review Surface** — shared housekeeping, (completed 2026-03-09)
  inventory checks, active-doc alignment, and locked comparison-surface
  contract
- [x] **Phase 33: Epic Skin A Polish Loop** — iterative visual + requirements (completed 2026-03-09)
  polish for `site/epic/a/`
- [ ] **Phase 34: Epic Skin B Polish Loop** — iterative visual + requirements
  polish for `site/epic/b/`
- [ ] **Phase 35: Epic Skin C Polish Loop** — iterative visual + requirements
  polish for `site/epic/c/`
- [ ] **Phase 36: Comparison Publish & Review Pack** — shared start
  page/version picker, comparison-ready paths, and owner-facing review
  instructions

### Phase 32: Polish Baseline & Review Surface
**Goal**: Remove shared repo/planning uncertainty before skin-specific polish
starts, verify the A/B/C inventory, and lock the one-branch comparison contract
that later phases must follow.
**Depends on**: Phases 27, 28, 29
**Requirements**: BASE-01, BASE-02, BASE-03, AUDIT-04, LOOP-03
**Success Criteria** (what must be TRUE):
  1. Active planning docs reflect v1.4 as the current polish milestone from
     Phase 32 onward.
  2. Directory and page inventories exist for `site/epic/a/`, `site/epic/b/`,
     and `site/epic/c/`.
  3. The canonical comparison model is documented: one branch, shared start
     page/version picker first, then stable A/B/C paths.
  4. Skin-specific phases are explicitly scoped away from shared comparison
     surface ownership.
  5. No backward routing into Phase 30 is introduced; if structured
     review-capture is still needed after Phase 36, it must be proposed as a
     new forward phase.
**Plans**: 1 plan
- [x] 32-01-PLAN.md -- Promote active polish docs, inventory A/B/C, and lock the shared comparison contract

### Phase 33: Epic Skin A Polish Loop
**Goal**: Bring `site/epic/a/` to review-ready quality through a bounded
iterative visual + requirements polish loop.
**Depends on**: Phase 32
**Parallel note**: Browser-driven execution is serial only. Phase 33 must not
overlap with Phases 34 or 35.
**Requirements**: AUDIT-01, AUDIT-02, AUDIT-03, LOOP-01, LOOP-02, LOOP-03, READY-A-01
**Success Criteria** (what must be TRUE):
  1. All 8 A pages are reviewed at 375px, 768px, and 1280px.
  2. Each iteration writes a TODO list before fixes begin.
  3. Each loop checks both visual execution and the v1.0 requirements floor.
  4. The loop stops only on a clean pass, a hard blocker, missing
     implementation, or the 5-iteration cap.
  5. A clean finish is explicitly marked ready for Phase 34.
**Plans**: 1 plan
- [x] 33-01-PLAN.md -- Run the bounded review -> TODO -> batch fix -> verify loop for Design A

### Phase 34: Epic Skin B Polish Loop
**Goal**: Bring `site/epic/b/` to review-ready quality through a bounded
iterative visual + requirements polish loop.
**Depends on**: Phase 33
**Parallel note**: Browser-driven execution is serial only. Phase 34 must not
overlap with Phases 33 or 35.
**Requirements**: AUDIT-01, AUDIT-02, AUDIT-03, LOOP-01, LOOP-02, LOOP-03, READY-B-01
**Success Criteria** (what must be TRUE):
  1. All 8 B pages are reviewed at 375px, 768px, and 1280px.
  2. Each iteration writes a TODO list before fixes begin.
  3. Each loop checks both visual execution and the v1.0 requirements floor.
  4. The loop stops only on a clean pass, a hard blocker, missing
     implementation, or the 5-iteration cap.
  5. A clean finish is explicitly marked ready for Phase 35.
**Plans**: 1 plan
- [ ] 34-01-PLAN.md -- Run the bounded review -> TODO -> batch fix -> verify loop for Design B

### Phase 35: Epic Skin C Polish Loop
**Goal**: Bring `site/epic/c/` to review-ready quality through a bounded
iterative visual + requirements polish loop.
**Depends on**: Phase 34
**Parallel note**: Browser-driven execution is serial only. Phase 35 must not
overlap with Phases 33 or 34.
**Requirements**: AUDIT-01, AUDIT-02, AUDIT-03, LOOP-01, LOOP-02, LOOP-03, READY-C-01
**Success Criteria** (what must be TRUE):
  1. All 8 C pages exist before the loop starts.
  2. All 8 C pages are reviewed at 375px, 768px, and 1280px.
  3. Each iteration writes a TODO list before fixes begin.
  4. Each loop checks both visual execution and the v1.0 requirements floor.
  5. The loop stops only on a clean pass, a hard blocker, missing
     implementation, or the 5-iteration cap.
  6. A clean finish is explicitly marked ready for Phase 36.
**Plans**: 1 plan
- [ ] 35-01-PLAN.md -- Run the bounded review -> TODO -> batch fix -> verify loop for Design C

### Phase 36: Comparison Publish & Review Pack
**Goal**: Deliver and verify the shared comparison surface so a reviewer can
choose a version first from one start page on the current branch, then hand off
brief owner-facing comparison instructions.
**Depends on**: Phase 35
**Requirements**: COMP-01, COMP-02
**Success Criteria** (what must be TRUE):
  1. A shared start page/version picker reaches all three polished skins by
     stable local paths on the current branch.
  2. The comparison surface is verified in browser from the shared entry point.
  3. Brief owner-facing review instructions explain the pick-a-version-first
     flow and stable paths.
  4. If a structured review-capture phase is still needed after this work, it
     is proposed as a new forward phase number rather than routed back to
     Phase 30.
**Plans**: 1 plan
- [ ] 36-01-PLAN.md -- Build and verify the shared comparison start page and owner review instructions

Full draft: `.planning/v1.4-ROADMAP-DRAFT.md`

## Progress

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1-11 | v1.0 | 25/25 | Complete | 2026-02-25 |
| 12-19 | v1.1 | 7/7 | Complete | 2026-02-27 |
| 20. Research | v1.2 | 2/2 | Complete | 2026-02-27 |
| 21. Design A | v1.2 | 5/5 | Complete | 2026-02-28 |
| 22. Design B | v1.2 | 5/5 | Complete | 2026-02-28 |
| 23. Design C | v1.2 | 5/5 | Complete | 2026-03-01 |
| 24. Joint Review | v1.2 | 0/0 | Complete | 2026-03-08 |
| 26. Epic Directions | v1.3 | 1/1 | Complete | 2026-03-09 |
| 27. Epic Skin A | v1.3 | 7/7 | Complete | 2026-03-09 |
| 28. Epic Skin B | v1.3 | 5/5 | Complete | 2026-03-09 |
| 29. Epic Skin C | v1.3 | 5/5 | Complete | 2026-03-09 |
| 30. Epic Review | v1.3 | 0/? | Not started | - |
| 31. Design D — Claude's Synthesis | v1.3 | 0/? | Not started | - |
| 32. Polish Baseline & Review Surface | v1.4 | 1/1 | Complete | 2026-03-09 |
| 33. Epic Skin A Polish Loop | v1.4 | 1/1 | Complete | 2026-03-09 |
| 34. Epic Skin B Polish Loop | v1.4 | 0/1 | Not started | - |
| 35. Epic Skin C Polish Loop | v1.4 | 0/1 | Not started | - |
| 36. Comparison Publish & Review Pack | v1.4 | 0/1 | Not started | - |

### ~~Phase 25: Design D — Claude's Own Vision~~ (Moved to v1.3 as Phase 31)

Design D concept moved to v1.3 "Epic Skins" milestone where it becomes the synthesis of epic skin review feedback. See `.planning/v1.3-MILESTONE-BRIEF.md`.
