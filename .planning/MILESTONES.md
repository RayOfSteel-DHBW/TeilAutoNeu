# Milestones

## v1.4 Epic Skin Polish (Shipped: 2026-03-11)

**Phases:** 5 phases (32-36), 5 plans
**Timeline:** 3 days (2026-03-09 → 2026-03-11)
**Status:** Shipped with accepted known gaps

**Key accomplishments:**

1. Locked the v1.4 comparison contract and serial browser-execution rules before polish began
2. Brought Design A to a clean review-ready pass at 375px, 768px, and 1280px
3. Brought Design B to a near-clean review-ready pass and surfaced the shared fleet-map popup icon issue
4. Brought Design C to a clean review-ready pass at 375px, 768px, and 1280px
5. Added a shared comparison entry page at `site/epic/index.html` with stable links into Designs A, B, and C
6. Wrote owner-facing comparison instructions and verified the shared picker flow in browser

**Known gaps (accepted):**

- Phase 34 / Design B still contains miswired phone CTA targets (`tel:+4974739222020`) despite displaying `07473-922202`
- Shared `site/public/js/fleet-map.js` popup icon asset paths still 404 on Design B `fahrzeuge`
- Summary-frontmatter and roadmap-checkbox traceability drift remains in milestone bookkeeping

**Archives:**

- `.planning/milestones/v1.4-ROADMAP.md`
- `.planning/milestones/v1.4-REQUIREMENTS.md`
- `.planning/milestones/v1.4-MILESTONE-AUDIT.md`

---

## v1.0 MVP (Shipped: 2026-02-26)

**Phases:** 11 phases (1-11), 25 plans
**Timeline:** 17 days (2026-02-08 → 2026-02-25)
**Feature commits:** 42
**LOC:** 1,031 (HTML/JS/CSS/JSON)
**Git range:** `6a4d40a..efae342`

**Key accomplishments:**

1. Static HTML/Tailwind build pipeline with GitHub Pages deployment
2. Mobile-first 9-page architecture with responsive hamburger nav and white/green brand system
3. Homepage conversion funnel — 100vh hero, persona-inclusive messaging, phone-only CTA scoped to membership
4. JSON-driven pricing page with value-first framing, labeled breakdowns, and "noch offen" badges
5. Interactive MapLibre GL JS parking map with 2 active locations + Don Bosco planned marker
6. Full legal compliance — §5 DDG Impressum and Art. 13 DSGVO Datenschutzerklärung (simplified, no-tracking angle)

**Known gaps (accepted):**

- FOUND-03: STRATO SFTP script deferred — Pages-only V1
- TRACK-01: Analytics tracking deferred to V2 (data-track hooks placed, no consumer)
- FEAT-01: Typing effect overridden — hero simplified per design decision
- 06-04: Owner review checklist prepared but not yet conducted

**Archives:**

- `.planning/milestones/v1.0-ROADMAP.md`
- `.planning/milestones/v1.0-REQUIREMENTS.md`
- `.planning/milestones/v1.0-MILESTONE-AUDIT.md`

---


## v1.1 Visual Fixes (Shipped: 2026-02-27)

**Phases:** 8 phases (12-19), 7 plans
**Timeline:** 2 days (2026-02-26 → 2026-02-27)
**Commits:** 39
**Files changed:** 45 (3,154 insertions, 350 deletions)

**Key accomplishments:**

1. Autonomous Puppeteer visual audit of all 8 pages at desktop (1280px) and mobile (375px) widths
2. Joint owner review cataloguing 31 content/visual issues (R1-R31)
3. Site-wide card border contrast fix, placeholder standardization ("noch offen" → TODO), and nav CTA for mitglied-werden
4. Homepage hero logo (TeilAuto car icon) and 5 value cards rewritten to Zweitwagen persona per owner guidance
5. Fahrzeuge page overhaul — copy fixes, PNG images, location corrections, card alignment, planned Teilorte map markers, BCS naming normalization
6. Preise page simplified — rate tables and Quernutzung sections removed, Kaution rephrased, disclaimer shortened
7. Secondary pages reframed — geschaeftskunden "Günstig" messaging, ueber-uns owner's authentic text, mitglied-werden dual identity resolved

**Tech debt (accepted):**

- Card 3 has X%/Y% placeholder cost comparison variables awaiting real data from owner
- Card 5 "Persönlich statt anonym" phrasing pending owner confirmation
- pricing.js Kaution separator uses border-brand-muted (accepted deviation)

**Archives:**

- `.planning/milestones/v1.1-ROADMAP.md`
- `.planning/milestones/v1.1-REQUIREMENTS.md`
- `.planning/milestones/v1.1-MILESTONE-AUDIT.md`

---
