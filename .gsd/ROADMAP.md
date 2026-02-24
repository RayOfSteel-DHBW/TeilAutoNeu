# Roadmap: teilAuto Moessingen Website

## Overview

This roadmap delivers a launch-ready static site that pre-qualifies callers while keeping owner updates simple. Work moves from the foundation and navigation into the homepage funnel, pricing system, and fleet/location experience, then finishes with trust, compliance, and SEO polish. V2 expansions (CMS, calculator) are intentionally out of scope.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation & Deployment** - Static build pipeline and owner-friendly deployment.
- [x] **Phase 2: Core UX & Navigation** - Mobile-first layout, brand system, and navigation.
- [x] **Phase 3: Homepage & Membership Funnel** - Homepage messaging and phone-only join path.
- [x] **Phase 4: Pricing & Value System** - Demo-quality pricing page with 1–2 sample values and value-first framing.
- [x] **Phase 5: Fleet & Locations** - Vehicles and interactive map with locations.
- [x] **Phase 6: Trust, Legal, SEO & Quality** - Compliance, credibility pages, analytics, and polish.

## Phase Details

### Phase 1: Foundation & Deployment

**Goal**: Site builds as a static HTML/Tailwind project with preview and owner-run deployment.
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04
**Success Criteria** (what must be TRUE):

1. Site builds via npm scripts into static output without a server runtime.
2. Preview deploy to GitHub Pages is accessible for review.
3. Owners can run a PowerShell SFTP upload to STRATO hosting.

**Plans**: TBD

Plans:

- [ ] 01-01: Static build and Tailwind setup
- [ ] 01-02: GitHub Pages preview pipeline
- [ ] 01-03: STRATO SFTP deployment script

### Phase 2: Core UX & Navigation

**Goal**: Visitors can navigate the site comfortably on mobile and desktop with consistent brand styling.
**Depends on**: Phase 1
**Requirements**: FEAT-06, UX-01, UX-02, UX-04, UX-05, UX-06, UX-07
**Success Criteria** (what must be TRUE):

1. Site is mobile-first and includes a hamburger nav for small screens.
2. Base styling uses a white/green palette with consistent teilAuto casing and phone format.
3. Shared UI copy uses Sie-Ansprache and avoids moralizing or poverty signals.
4. Student-project HTML/CSS/JS is removed from `site/src/` and reauthored from scratch.

**Plans**: TBD

Plans:

- [ ] 02-01: Clean-slate base templates and page stubs (remove student code)
- [ ] 02-02: Base layout, responsive grid, and navigation shell
- [ ] 02-03: Brand styling and copy guardrails

### Phase 3: Homepage & Membership Funnel

**Goal**: Prospects can understand how it works and decide to call in the right context.
**Depends on**: Phase 2
**Requirements**: CONT-01, CONT-07, CONT-10, CONT-11, FEAT-01, FEAT-02, FEAT-07, UX-08
**Success Criteria** (what must be TRUE):

1. Homepage communicates the value prop and persona-inclusive messaging (no 3-step flow on the homepage).
2. Membership steps and the phone-only CTA appear only in the join context, with no forms or email links.
3. Hero is simplified (no typing effect) and the FAQ accordion functions on the homepage.
4. Local area names are woven into copy for local search.

**Plans**: TBD

Plans:

- [ ] 03-01: Homepage content and persona-inclusive narrative
- [ ] 03-02: Membership path and phone-only CTA placement
- [ ] 03-03: Homepage interactions (typing hero, FAQ, local names)

### Phase 4: Pricing & Value System

**Goal**: Visitors see a value-first pricing page with 1–2 sample values from JSON, as a demo-quality draft for customer review.
**Depends on**: Phase 3
**Requirements**: FOUND-05, FOUND-06, CONT-02, CONT-08, PRICE-01, PRICE-02, PRICE-03, PRICE-04, PRICE-05, PRICE-06, QUAL-04
**Success Criteria** (what must be TRUE):

1. Pricing page leads with value framing (neighbours sharing costs) before any numbers.
2. 1–2 exact sample values (e.g. hourly rate, km rate) are shown to demo JSON-driven rendering.
3. No full tariff table or billing formula is exposed; presentation stays light.
4. Owners can update the pricing JSON and redeploy without editing HTML.
5. Required disclaimer is present; missing/unconfirmed values are labelled "noch offen".
6. Larger vehicle classes are referenced via Quernutzung only.

**Plans**: TBD

Plans:

- [x] 04-01: Pricing JSON schema and update workflow
- [x] 04-02: Pricing page rendering (1–2 highlight values, no full tariff table)
- [x] 04-03: Pricing messaging, disclaimers, and value-first framing

### Phase 5: Fleet & Locations

**Goal**: Visitors can review vehicles and locations with an interactive map.
**Depends on**: Phase 4
**Requirements**: CONT-04, FEAT-03, FEAT-04, FEAT-05, LEGAL-04
**Success Criteria** (what must be TRUE):

1. Vehicles page presents the two current vehicles with specs.
2. Map shows two active locations and Don Bosco marked as planned.
3. Map includes required OSM attribution and interactive controls.
4. Map implementation is newly written, with no student-project code reuse.

**Plans**: TBD

Plans:

- [x] 05-01: Vehicles page with fleet specs
- [x] 05-02: MapLibre map with locations and planned marker
- [x] 05-03: OSM attribution and map polish

### Phase 6: Trust, Legal, SEO & Quality

**Goal**: Site is trustworthy, compliant, discoverable, and polished for launch.
**Depends on**: Phase 5
**Requirements**: CONT-03, CONT-05, CONT-06, CONT-09, LEGAL-01, LEGAL-02, LEGAL-03, SEO-01, SEO-02, SEO-03, SEO-04, TRACK-01, UX-03, QUAL-01, QUAL-02, QUAL-03, QUAL-05
**Success Criteria** (what must be TRUE):

1. Visitors can access Impressum and Datenschutzerklaerung pages; analytics respects consent rules.
2. About, business, and sustainability content builds trust without overpromising; Quernutzung appears as a secondary benefit.
3. All pages include meta descriptions, Open Graph tags, and semantic HTML with local SEO cues.
4. Content quality checks pass: correct German, no false capability claims, working links, and copyright-clear images.

**Plans**: 4 plans (Wave 1: 06-01 + 06-02 parallel, Wave 2: 06-03, Wave 3: 06-04 checkpoint)

Plans:

- [x] 06-01-PLAN.md — About, Fuer Firmen, Quernutzung expansion, nav restructure
- [x] 06-02-PLAN.md — Impressum (§5 DDG) and Datenschutzerklaerung (Art. 13 DSGVO)
- [x] 06-03-PLAN.md — SEO meta/OG tags, tracking attributes, semantic HTML, quality sweep
- [ ] 06-04-PLAN.md — Owner review checkpoint (content verification before launch) **⚠ PENDING: checklist prepared but owner review not yet conducted**

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 2.1 -> 2.2 -> 3 -> 3.1 -> 4

| Phase                           | Plans Complete | Status      | Completed  |
| ------------------------------- | -------------- | ----------- | ---------- |
| 1. Foundation & Deployment      | 3/3            | Complete    | 2026-02-08 |
| 2. Core UX & Navigation         | 3/3            | Complete    | 2026-02-08 |
| 3. Homepage & Membership Funnel | 3/3            | Complete    | 2026-02-08 |
| 4. Pricing & Value System       | 3/3            | Complete    | 2026-02-08 |
| 5. Fleet & Locations            | 3/3            | Complete    | 2026-02-10 |
| 6. Trust, Legal, SEO & Quality  | 3/4            | Complete    | 2026-02-24 |

**06-03 completed 2026-02-24**: OG image PNG, meta descriptions on all 8 pages, default OG fallbacks in base.html, data-track on all phone/nav CTAs and FAQ toggles, scroll milestone sentinels, CSS placeholder cards for copyright-flagged vehicle images, missing-images ledger.
