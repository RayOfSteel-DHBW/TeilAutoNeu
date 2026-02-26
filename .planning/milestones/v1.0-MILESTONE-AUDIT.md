---
milestone: v1.0
audited: 2026-02-24T15:00:00Z
status: gaps_found
scores:
  requirements: 29/51
  phases: 3/6
  integration: 14/18
  flows: 5/9
gaps:
  requirements:
    - id: "FEAT-06"
      status: "unsatisfied"
      phase: "Phase 2"
      claimed_by_plans: ["02-02-PLAN.md"]
      completed_by_plans: ["02-02-SUMMARY.md"]
      verification_status: "missing"
      evidence: "UAT: Hamburger icon never appears, always shows 'Menue' text at all widths. Integration: JS wiring correct but visual failure — CSS/Tailwind compilation issue."
    - id: "UX-06"
      status: "unsatisfied"
      phase: "Phase 2"
      claimed_by_plans: ["02-03-PLAN.md"]
      completed_by_plans: ["02-03-SUMMARY.md"]
      verification_status: "missing"
      evidence: "UAT: Umlaute wrong everywhere (ue instead of ü). Integration: Files authored with ASCII substitutes, not an encoding issue — every ue/ae/oe in source is rendered literally in browser."
    - id: "QUAL-01"
      status: "unsatisfied"
      phase: "Phase 6"
      claimed_by_plans: ["06-03-PLAN.md"]
      completed_by_plans: ["06-03-SUMMARY.md"]
      verification_status: "human_needed"
      evidence: "Integration: Systematic umlaut substitution throughout all HTML pages and JS files makes all German text visibly incorrect. Phase 6 VERIFICATION searched for specific typos but missed the global ASCII-substitution pattern."
    - id: "QUAL-02"
      status: "unsatisfied"
      phase: "Phase 6"
      claimed_by_plans: ["06-03-PLAN.md"]
      completed_by_plans: ["06-03-SUMMARY.md"]
      verification_status: "human_needed"
      evidence: "Every ue/ae/oe substitution is a visible spelling error in German. Hundreds of instances across all pages."
    - id: "UX-01"
      status: "partial"
      phase: "Phase 2"
      claimed_by_plans: ["02-02-PLAN.md"]
      completed_by_plans: ["02-02-SUMMARY.md"]
      verification_status: "missing"
      evidence: "UAT: Zero padding throughout site including navbar items. Footer layout broken on wide screens. H1 left-bound with random line breaks."
    - id: "CONT-10"
      status: "unsatisfied"
      phase: "Phase 3"
      claimed_by_plans: ["03-02-PLAN.md"]
      completed_by_plans: ["03-02-SUMMARY.md"]
      verification_status: "passed"
      evidence: "Phase 3 verification passed (phone only on mitglied-werden). Phase 6 then added phone CTAs to ueber-uns.html and geschaeftskunden.html, violating CONT-10. Integration confirms: 3 pages have prominent phone CTA blocks."
    - id: "CONT-09"
      status: "unsatisfied"
      phase: "Phase 6"
      claimed_by_plans: ["06-01-PLAN.md"]
      completed_by_plans: ["06-01-SUMMARY.md"]
      verification_status: "human_needed"
      evidence: "UAT: '200 Partnerfahrzeuge' is factually wrong — should be 'Fahrzeuge von ueber 200 Partnern'. Integration: claim appears in fahrzeuge.html body, meta description, OG description, and ueber-uns.html."
    - id: "CONT-01"
      status: "partial"
      phase: "Phase 3"
      claimed_by_plans: ["03-01-PLAN.md"]
      completed_by_plans: ["03-01-SUMMARY.md"]
      verification_status: "passed"
      evidence: "UAT: 'Sparsam bleiben' card should emphasize low monthly costs. 'Flexibel unterwegs' oversells with only 2 cars. Page structure needs rethinking. Content exists but messaging needs owner-guided revision."
    - id: "CONT-07"
      status: "partial"
      phase: "Phase 3"
      claimed_by_plans: ["03-02-PLAN.md"]
      completed_by_plans: ["03-02-SUMMARY.md"]
      verification_status: "passed"
      evidence: "UAT: 'Sie werden Teil einer Gemeinschaft' wrong — membership doesn't require meeting people. Integration confirms text at mitglied-werden.html line 68."
  integration:
    - from: "Phase 2 (base.html)"
      to: "Phase 6 (content pages)"
      issue: "OG meta tags duplicated on 4 pages — base.html provides defaults, page blocks re-declare them"
      affected: ["SEO-02"]
    - from: "Phase 2 (nachhaltig.html)"
      to: "Phase 6 (CONT-03)"
      issue: "nachhaltig.html stub in dist contradicts 'no dedicated green page' requirement"
      affected: ["CONT-03", "SEO-01"]
    - from: "Phase 5 (fleet-map.js)"
      to: "MapLibre CDN"
      issue: "Dual-defer script loading pattern is fragile for map initialization timing"
      affected: ["FEAT-03"]
    - from: "Phase 2 (map-parking.html)"
      to: "None"
      issue: "Orphaned template from pre-Phase-5 map implementation — dead code"
      affected: []
  flows:
    - flow: "Mobile navigation"
      breaks_at: "Hamburger nav button visible but toggle does not show/hide nav properly"
      affected: ["FEAT-06", "UX-01"]
    - flow: "Homepage to membership conversion"
      breaks_at: "Phone CTA appears on multiple pages instead of being funneled through membership page"
      affected: ["CONT-10"]
    - flow: "German language readability"
      breaks_at: "All pages — umlauts display as ASCII digraphs (ue/ae/oe)"
      affected: ["UX-06", "QUAL-01", "QUAL-02"]
    - flow: "Pricing page comprehension"
      breaks_at: "Example calculations lack labels — raw numbers without explanation"
      affected: ["CONT-02"]
tech_debt:
  - phase: 01-foundation-deployment
    items:
      - "FOUND-03: STRATO SFTP deferred — Pages-only V1 per 01-03 decision"
      - "No VERIFICATION.md for phase 1"
  - phase: 02-core-ux-navigation
    items:
      - "No VERIFICATION.md for phase 2"
      - "Footer layout appears designed for 2 columns but renders stacked"
  - phase: 03-homepage-membership-funnel
    items:
      - "FEAT-01 typing effect listed in REQUIREMENTS.md but ROADMAP overrides with 'Hero is simplified (no typing effect)' — documentation staleness"
      - "FEAT-02: 4 FAQ items instead of required 5"
  - phase: 05-fleet-locations
    items:
      - "No VERIFICATION.md for phase 5"
      - "CSS vehicle placeholder cards not visible (minor)"
      - "Map popup lacks visual hierarchy for car name / location / features"
  - phase: 06-trust-legal-seo-quality
    items:
      - "06-04 owner review checkpoint NOT conducted — checklist prepared only"
      - "OG image absolute path /img/og-image.png breaks on GitHub Pages subpath deployments"
      - "Duplicate OG meta tags on 4 pages (base.html default + page block)"
      - "LEGAL-01 text in REQUIREMENTS.md references repealed §5 TMG — implementation correctly uses §5 DDG"
      - "'noch offen' badges are plain colored text — not accessible for colorblind users"
  - phase: cross-cutting
    items:
      - "nachhaltig.html stub in dist — remove or redirect"
      - "map-parking.html orphaned template — remove"
      - "REQUIREMENTS.md checkbox states inconsistent (12 [x] vs 39 [ ]) while traceability shows all 'Complete'"
---

# v1.0 Milestone Audit: teilAuto Moessingen Website

**Audited:** 2026-02-24
**Status:** GAPS FOUND
**Score:** 29/51 requirements satisfied

## Audit Sources

| Source | Coverage |
|--------|----------|
| VERIFICATION.md files | 3/6 phases (01, 02, 05 missing) |
| SUMMARY.md frontmatter | 14 requirements tracked in 06-01, 06-03 |
| REQUIREMENTS.md traceability | 51/51 marked "Complete" (inaccurate) |
| UAT session (user testing) | 18 tests, 12 issues found |
| Integration checker | 15 findings, 4 broken flows |

## Phase Verification Status

| Phase | VERIFICATION.md | Status | UAT Issues |
|-------|----------------|--------|------------|
| 01 Foundation & Deployment | MISSING | Functionally working (build, GH Pages) | Not tested |
| 02 Core UX & Navigation | MISSING | Major gaps: nav, padding, umlauts, footer | 3 issues |
| 03 Homepage & Membership Funnel | passed | Content messaging concerns | 2 issues |
| 04 Pricing & Value System | human_needed (auto pass) | Calc labels, badge accessibility | 3 issues |
| 05 Fleet & Locations | MISSING | Map works, content issues | 3 issues |
| 06 Trust, Legal, SEO & Quality | human_needed (auto pass) | Phone CTA placement, 06-04 not conducted | 1 issue |

## Requirements Coverage (3-Source Cross-Reference)

### Satisfied (29/51)

| Req | Description | Evidence |
|-----|-------------|----------|
| FOUND-01 | Static HTML + Tailwind | Build pipeline functional |
| FOUND-02 | npm scripts build | npm run build succeeds |
| FOUND-04 | GitHub Pages preview | GH Actions pipeline works (OG image path issue is minor) |
| FOUND-05 | Pricing from JSON | pricing.json -> pricing.js verified |
| FOUND-06 | Owner can update pricing | README documents workflow |
| LEGAL-01 | Impressum (§5 DDG) | Page complete, amber placeholders for owner fields |
| LEGAL-02 | Datenschutz (DSGVO) | Art. 13 compliant, site-specific |
| LEGAL-03 | DSGVO analytics | No tracking in V1, consent concept for V2 |
| LEGAL-04 | OSM attribution | MapLibre AttributionControl renders OSM credit |
| CONT-04 | Fahrzeuge page | Vehicle cards with specs present |
| CONT-05 | Fuer Firmen page | 4 benefit cards in grid |
| CONT-06 | Ueber uns page | Founders, history, operations model |
| CONT-08 | Only XS and M classes | pricing.json has only XS, M |
| CONT-11 | No forms/email | Phone-only confirmed |
| FEAT-04 | 2 active map markers | Mokka and Adam markers work |
| FEAT-05 | Don Bosco planned marker | Planned marker with distinct style |
| FEAT-07 | Village names in copy | Moessingen, Belsen, Talheim, Oeschingen present |
| PRICE-01 | Highlight values | Rendered from JSON |
| PRICE-02 | JSON-driven rendering | pricing.js fetches pricing.json |
| PRICE-03 | Abstract presentation | No full tariff table |
| PRICE-04 | Disclaimer present | At bottom of preise.html |
| PRICE-05 | Price not lead message | Value-first intro before numbers |
| PRICE-06 | noch offen labels | Amber text on unconfirmed values |
| UX-02 | White/green palette | Brand tokens in Tailwind config, colors render |
| UX-03 | Copyright-clear images | Placeholders replace flagged images |
| UX-04 | teilAuto casing | Consistent across all pages |
| UX-05 | Phone format 07473-922202 | Consistent everywhere |
| UX-07 | No moralizing | No poverty signals or lecturing found |
| SEO-04 | Semantic HTML | Correct H1/H2 hierarchy, landmarks, skip link |

### Partial (13/51)

| Req | Description | Issue | Source |
|-----|-------------|-------|--------|
| CONT-01 | Homepage messaging | Card messaging disputed by owner — needs rework | UAT |
| CONT-02 | Preise page content | Example calculation labels missing | UAT |
| CONT-03 | Sustainability storytelling | Content distributed correctly BUT nachhaltig.html stub exists in dist | Integration |
| CONT-07 | Membership info | "Teil einer Gemeinschaft" messaging wrong per owner | UAT |
| FEAT-02 | FAQ accordion (5 items) | Only 4 FAQ items present, requirement says 5 | Integration |
| FEAT-03 | Interactive map | Works but popup hierarchy poor, defer timing fragile | UAT + Integration |
| UX-01 | Mobile-first responsive | Zero padding throughout, H1 line breaks, footer broken | UAT |
| UX-08 | Homepage for all personas | Structurally OK but messaging concerns | UAT |
| SEO-01 | Meta descriptions all pages | nachhaltig.html has none | Integration |
| SEO-02 | OG tags all pages | Duplicate tags on 4 pages, GH Pages path issue | Integration |
| TRACK-01 | Analytics concept | data-track hooks placed, no consumer (intentional V1) | Integration |
| QUAL-03 | No false claims | "200 Partnerfahrzeuge" unverified | UAT + Integration |
| QUAL-05 | All links functional | nachhaltig.html dead stub, map-parking.html orphaned | Integration |

### Unsatisfied (7/51)

| Req | Description | Root Cause | Severity |
|-----|-------------|------------|----------|
| **FEAT-06** | Hamburger navigation | JS wired correctly but visual toggle broken — CSS/Tailwind issue | blocker |
| **UX-06** | German copy (Sie, umlauts) | All files authored with ASCII digraphs (ue/ae/oe) instead of UTF-8 umlauts | blocker |
| **QUAL-01** | Correct German spelling | Consequence of UX-06 — every page has visible umlaut errors | blocker |
| **QUAL-02** | No typos | Every ue/ae/oe is a visible spelling error | blocker |
| **CONT-10** | Phone only in membership context | Phase 6 added phone CTAs to ueber-uns and geschaeftskunden | major |
| **CONT-09** | Quernutzung accurate | "200 Partnerfahrzeuge" factually wrong — should be "Fahrzeuge von ueber 200 Partnern" | major |
| **CONT-03** | No dedicated green page | nachhaltig.html stub exists in dist output | minor |

### Deferred / Overridden (2/51)

| Req | Description | Status | Reason |
|-----|-------------|--------|--------|
| FOUND-03 | STRATO SFTP script | Deferred | 01-03 decision: Pages-only V1, STRATO deferred |
| FEAT-01 | Typing effect in hero | Overridden | ROADMAP Phase 3 success criteria: "Hero is simplified (no typing effect)" |

## Cross-Phase Integration

### Wiring Status

| Connection | Status |
|------------|--------|
| Build pipeline -> all pages | Connected |
| base.html -> all 9 pages extend | Connected |
| Header nav -> correct filenames | Connected |
| Footer -> impressum, datenschutz | Connected |
| pricing.json -> pricing.js -> preise.html | Connected |
| MapLibre CDN -> fleet-map.js -> fahrzeuge.html | Connected (timing concern) |
| accordion.js -> accordion.html -> index.html | Connected |
| JS files (4) -> no conflicts | Clean separation |
| OG image -> all pages | Connected (path issue on GH Pages) |
| Phone CTA scoping | **VIOLATED** (3 pages instead of 1) |
| nachhaltig.html -> nothing | **Orphaned stub** |
| map-parking.html -> nothing | **Orphaned template** |

### Broken E2E Flows

1. **Mobile navigation flow** — Hamburger visible but nav toggle fails visually (FEAT-06)
2. **Phone CTA funnel** — Phone appears on 3 pages instead of being funneled through membership (CONT-10)
3. **German language readability** — Every page has ASCII umlaut substitutions (UX-06, QUAL-01)
4. **Pricing comprehension** — Example calculations lack explanatory labels (CONT-02)

## Traceability Integrity Issues

The REQUIREMENTS.md traceability table marks all 51 requirements as "Complete" — this is **inaccurate**. At least 7 requirements are unsatisfied and 13 are partial. The checkbox column is also inconsistent: only 12/51 are checked `[x]` despite all being "Complete" in the status column.

**REQUIREMENTS.md needs a full update** to reflect actual state after this audit.

## Tech Debt Summary

| Category | Count |
|----------|-------|
| Missing VERIFICATION.md files | 3 (phases 01, 02, 05) |
| Orphaned files to clean up | 2 (nachhaltig.html, map-parking.html) |
| Documentation staleness | 3 (FEAT-01 override, LEGAL-01 TMG->DDG, checkbox states) |
| Owner action items pending | 5 (vehicle photos, Impressum fields, member count, Kaution amount, content review) |
| Accessibility concerns | 2 (noch offen badges colorblind, general padding/layout) |

---

_Audited: 2026-02-24_
_Sources: UAT session (18 tests), Integration checker, 3 VERIFICATION.md files, 16 SUMMARY.md files, REQUIREMENTS.md traceability_
