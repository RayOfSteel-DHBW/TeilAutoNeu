# Roadmap: teilAuto Mössingen Website

## Milestones

- ✅ **v1.0 MVP** — Phases 1-11 (shipped 2026-02-26)
- 🚧 **v1.1 Visual Fixes** — Phases 12-15 (in progress)

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
- [ ] **Phase 13: Auto-Fix** — All audit findings fixed per page via iterative Puppeteer fix-verify loop until each page is clean
- [ ] **Phase 14: Joint Review** — Collaborative owner review of all pages at both widths; remaining issues catalogued
- [ ] **Phase 15: Review Fix** — All joint review findings fixed and Puppeteer-verified clean

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
**Plans**: 0/1

### Phase 14: Joint Review
**Goal**: Owner and Claude review every page side by side at desktop and mobile widths; any issues invisible to automated checks are identified and logged for fixing.
**Depends on**: Phase 13
**Requirements**: JREV-01
**Success Criteria** (what must be TRUE):
  1. All 8 pages are reviewed with the owner at 1280px width
  2. All 8 pages are reviewed with the owner at 375px width
  3. Every issue the owner flags is recorded with page, location, and description
  4. Owner explicitly confirms no further issues on each page before the review is closed
**Plans**: TBD

### Phase 15: Review Fix
**Goal**: Every issue identified during the joint review is fixed and Puppeteer-verified clean, leaving the site ready for production handoff.
**Depends on**: Phase 14
**Requirements**: RFIX-01
**Success Criteria** (what must be TRUE):
  1. All issues from the joint review issue log are resolved
  2. Puppeteer screenshots confirm each affected page is clean at both widths after fixes
  3. No known visual defects remain on any of the 8 pages
**Plans**: TBD

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
| 13. Auto-Fix | v1.1 | 0/1 | Not started | - |
| 14. Joint Review | v1.1 | 0/1 | Not started | - |
| 15. Review Fix | v1.1 | 0/? | Not started | - |
