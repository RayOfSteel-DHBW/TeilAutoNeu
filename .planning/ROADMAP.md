# Roadmap: teilAuto Mössingen Website

## Milestones

- ✅ **v1.0 MVP** — Phases 1-11 (shipped 2026-02-26)
- 🚧 **v1.1 Visual Fixes** — Phases 12-19 (in progress)

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

### 🚧 v1.1 Visual Fixes (In Progress)

**Milestone Goal:** Eliminate all observable layout and rendering bugs across all 8 pages at desktop (1280px) and mobile (375px) widths, so the site renders as intended before production handoff to the owner.

**Site served at:** `http://127.0.0.1:5500/site/build/dist/`

**Pages in scope:** index.html, fahrzeuge.html, preise.html, geschaeftskunden.html, ueber-uns.html, mitglied-werden.html, datenschutz.html, impressum.html

- [x] **Phase 12: Visual Audit** — Autonomous Puppeteer audit of all 8 pages at desktop and mobile widths; all issues documented — completed 2026-02-26
- [x] **Phase 13: Auto-Fix** — All audit findings fixed per page via iterative Puppeteer fix-verify loop until each page is clean — completed 2026-02-26
- [x] **Phase 14: Joint Review** — Collaborative owner review of all pages at both widths; 31 issues catalogued — completed 2026-02-27
- [x] **Phase 15: Site-Wide Fixes** — Card borders, TODO standardization, nav fix (R2, R23, R28) (completed 2026-02-27)
- [x] **Phase 16: Homepage Content Rewrite** — Hero logo + value card rewrites (R1, R3-R8) (completed 2026-02-27)
- [x] **Phase 17: Fahrzeuge Page Overhaul** — Copy, cards, map, BCS naming (R9-R16) (completed 2026-02-27)
- [ ] **Phase 18: Preise Page Restructure** — Remove sections, fix references (R17-R21)
- [ ] **Phase 19: Secondary Pages** — geschaeftskunden, ueber-uns, mitglied-werden (R24-R27, R29-R31)

## Phase Details

### Phase 12: Visual Audit
**Goal**: All 8 pages are systematically screenshotted at desktop (1280px) and mobile (375px) widths, and every layout/rendering issue is documented with page, location, and description.
**Depends on**: Phase 11 (v1.0 complete)
**Requirements**: AUDIT-01, AUDIT-02, AUDIT-03
**Success Criteria** (what must be TRUE):
  1. Puppeteer has captured screenshots of all 8 pages at 1280px width
  2. Puppeteer has captured screenshots of all 8 pages at 375px width
  3. A written issue log exists naming each page, the affected area, and the observed defect for every problem found
  4. No page is skipped — coverage is 8/8 at both widths
**Plans**: 1/1 complete

### Phase 13: Auto-Fix
**Goal**: Every layout/rendering issue found in the audit is fixed, with Puppeteer re-screenshot verification confirming each page is clean before moving on.
**Depends on**: Phase 12
**Requirements**: AFIX-01, AFIX-02, AFIX-03, AFIX-04, AFIX-05, AFIX-06, AFIX-07, AFIX-08
**Execution model — ITERATIVE PER PAGE:**
  For each page (index → fahrzeuge → preise → geschaeftskunden → ueber-uns → mitglied-werden → datenschutz → impressum):
  1. Screenshot page at 1280px and 375px
  2. Identify issues from audit log for this page
  3. Fix issues in source files
  4. Rebuild (`npm run build`)
  5. Re-screenshot and verify page is clean at both widths
  6. If new issues found, loop back to step 3
  7. Only proceed to next page when current page is verified clean
  Note: Global issues (e.g. nav, footer, build config) should be fixed first since they affect all pages — then verify per-page.
**Success Criteria** (what must be TRUE):
  1. index.html renders without layout defects at both widths (Puppeteer verified)
  2. fahrzeuge.html, preise.html, geschaeftskunden.html, ueber-uns.html, mitglied-werden.html each render without layout defects at both widths (Puppeteer verified)
  3. datenschutz.html and impressum.html render without layout defects at both widths (Puppeteer verified)
  4. Each page's fix cycle runs until screenshots are clean — no page is left with known defects from the audit log
**Plans**: 1/1 complete

### Phase 14: Joint Review
**Goal**: Owner and Claude review every page side by side at desktop and mobile widths; any issues invisible to automated checks are identified and logged for fixing.
**Depends on**: Phase 13
**Requirements**: JREV-01
**Success Criteria** (what must be TRUE):
  1. All 8 pages are reviewed with the owner at 1280px width
  2. All 8 pages are reviewed with the owner at 375px width
  3. Every issue the owner flags is recorded with page, location, and description
  4. Owner explicitly confirms no further issues on each page before the review is closed
**Plans**: 1/1 complete (interactive review session)
**Review log**: `.planning/phases/14-joint-review/REVIEW-LOG.md`

### Phase 15: Site-Wide Fixes
**Goal**: Fix global visual/content issues that affect multiple pages — card borders, placeholder standardization, and navigation completeness.
**Depends on**: Phase 14
**Requirements**: RFIX-01
**Issues**: R2 (card borders/shadows), R23 ("noch offen" → TODO), R28 (mitglied-werden missing from nav)
**Success Criteria** (what must be TRUE):
  1. Card borders and shadows are visible and consistent across all pages
  2. All "noch offen" placeholders replaced with standardized `TODO` markers
  3. mitglied-werden.html appears in navigation as a prominent CTA
  4. Puppeteer screenshots confirm changes at both widths
**Plans**: 1 plan
Plans:
- [ ] 15-01-PLAN.md — Card borders, placeholder standardization, and nav CTA

### Phase 16: Homepage Content Rewrite
**Goal**: Replace hero placeholder and rewrite all value cards with messaging aligned to the Zweitwagen persona and owner's framing from the joint review.
**Depends on**: Phase 15
**Requirements**: RFIX-02
**Issues**: R1 (hero logo), R3-R8 (value cards reframe + no artificial card minimum)
**Success Criteria** (what must be TRUE):
  1. Hero section displays TeilAuto car icon (not placeholder)
  2. Value cards rewritten per owner guidance — "Sie fahren, wir kümmern uns", "Sie zahlen nur wenn Sie fahren", "Merklich günstiger", Quernutzung framing
  3. Card count reflects actual strong propositions (no padding)
  4. Puppeteer screenshots confirm homepage clean at both widths
**Plans**: 1 plan
Plans:
- [ ] 16-01-PLAN.md &mdash; Hero logo swap + value card rewrites (R1, R3-R8)

### Phase 17: Fahrzeuge Page Overhaul
**Goal**: Fix copy errors, correct vehicle data, align card layout, replace standalone Standorte section with map, and fix BCS naming across the site.
**Depends on**: Phase 15
**Requirements**: RFIX-03
**Issues**: R9-R16 (copy, vehicle data, card alignment, map, BCS naming)
**Success Criteria** (what must be TRUE):
  1. Redundant/double-word copy errors fixed (R9, R10)
  2. Vehicle placeholders use PNG format (R11)
  3. Mokka → "Mössingen, Nähe Bahnhof", Adam → "Mössingen, Nähe Stadtmitte" (R12, R13)
  4. Vehicle cards aligned horizontally via flex/grid (R14)
  5. "Weitere Standorte" section replaced with map showing planned Teilorte markers (R15)
  6. BCS naming corrected to "Bundesverband Carsharing (BCS)" on all pages (R16)
  7. Puppeteer screenshots confirm fahrzeuge page clean at both widths
**Plans**: 1 plan
Plans:
- [ ] 17-01-PLAN.md &mdash; Copy fixes, card alignment, map markers, BCS naming (R9-R16)

### Phase 18: Preise Page Restructure
**Goal**: Simplify pricing page by removing redundant sections and fixing references, so it centers on example calculations rather than detailed rate tables.
**Depends on**: Phase 15
**Requirements**: RFIX-04
**Issues**: R17-R21 (reference fix, Kaution rephrase, remove rate tables + Größere Fahrzeuge, shrink disclaimer)
**Success Criteria** (what must be TRUE):
  1. "siehe unten" reference removed (auto-resolved by R19 rate table deletion)
  2. Kaution rephrased with soft description, no specific amount (R18)
  3. "Unsere Fahrzeugklassen" rate tables removed (R19)
  4. "Größere Fahrzeuge" section removed (R20)
  5. Disclaimer shortened and less prominent (R21)
  6. Puppeteer screenshots confirm preise page clean at both widths
**Plans**: 1 plan
Plans:
- [ ] 18-01-PLAN.md &mdash; Remove rate tables + Quernutzung, rephrase Kaution, shorten disclaimer

### Phase 19: Secondary Pages
**Goal**: Fix content framing on geschaeftskunden, replace ueber-uns with owner's text, and resolve mitglied-werden identity/structure issues.
**Depends on**: Phase 15
**Requirements**: RFIX-05
**Issues**: R24-R27 (geschaeftskunden reframe + ueber-uns replace), R29-R31 (mitglied-werden identity + structure)
**Success Criteria** (what must be TRUE):
  1. geschaeftskunden: "Kosteneinsparungen" reframed around "Günstig" (R24)
  2. geschaeftskunden: insurance framed as organizational relief (R25)
  3. geschaeftskunden: personal CTA with phone number added (R26)
  4. ueber-uns: replaced with student version text, BCS/Quernutzung section kept (R27)
  5. mitglied-werden: clear identity decision resolved (R29)
  6. mitglied-werden: two step sequences visually differentiated (R30)
  7. mitglied-werden: content ordering addresses how-it-works before sign-up (R31)
  8. Puppeteer screenshots confirm all three pages clean at both widths
**Plans**: 1 plan
Plans:
- [ ] 19-01-PLAN.md &mdash; Reframe geschaeftskunden, replace ueber-uns text, fix mitglied-werden identity

## Progress

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Foundation & Deployment | v1.0 | 3/3 | Complete | 2026-02-08 |
| 2. Core UX & Navigation | v1.0 | 3/3 | Complete | 2026-02-08 |
| 3. Homepage & Membership Funnel | v1.0 | 3/3 | Complete | 2026-02-08 |
| 4. Pricing & Value System | v1.0 | 3/3 | Complete | 2026-02-08 |
| 5. Fleet & Locations | v1.0 | 3/3 | Complete | 2026-02-10 |
| 6. Trust, Legal, SEO & Quality | v1.0 | 4/4 | Complete | 2026-02-24 |
| 7. German Text Correction | v1.0 | 1/1 | Complete | 2026-02-24 |
| 8. Mobile Navigation & Responsive Layout | v1.0 | 1/1 | Complete | 2026-02-25 |
| 9. Content Accuracy & Dead Code Cleanup | v1.0 | 1/1 | Complete | 2026-02-25 |
| 10. Content Messaging & Feature Polish | v1.0 | 2/2 | Complete | 2026-02-25 |
| 11. Simplified Datenschutzerklärung | v1.0 | 1/1 | Complete | 2026-02-25 |
| 12. Visual Audit | v1.1 | 1/1 | Complete | 2026-02-26 |
| 13. Auto-Fix | v1.1 | 1/1 | Complete | 2026-02-26 |
| 14. Joint Review | v1.1 | 1/1 | Complete | 2026-02-27 |
| 15. Site-Wide Fixes | 1/1 | Complete    | 2026-02-27 | - |
| 16. Homepage Content Rewrite | 1/1 | Complete    | 2026-02-27 | - |
| 17. Fahrzeuge Page Overhaul | 1/1 | Complete   | 2026-02-27 | - |
| 18. Preise Page Restructure | v1.1 | 0/1 | Planned | - |
| 19. Secondary Pages | v1.1 | 0/1 | Planned | - |
