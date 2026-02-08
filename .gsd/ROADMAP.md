# Roadmap: teilAuto Moessingen Website

## Overview

This roadmap delivers a launch-ready static site that pre-qualifies callers while keeping owner updates simple. Work moves from the foundation and navigation into the homepage funnel, pricing system, and fleet/location experience, then finishes with trust, compliance, and SEO polish. V2 expansions (CMS, calculator) are intentionally out of scope.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation & Deployment** - Static build pipeline and owner-friendly deployment.
- [ ] **Phase 2: Core UX & Navigation** - Mobile-first layout, brand system, and navigation.
- [ ] **Phase 3: Homepage & Membership Funnel** - Homepage messaging and phone-only join path.
- [ ] **Phase 4: Pricing & Value System** - JSON-driven pricing page with abstracted value framing.
- [ ] **Phase 5: Fleet & Locations** - Vehicles and interactive map with locations.
- [ ] **Phase 6: Trust, Legal, SEO & Quality** - Compliance, credibility pages, analytics, and polish.

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

**Plans**: TBD

Plans:

- [ ] 02-01: Base layout, responsive grid, and navigation shell
- [ ] 02-02: Brand styling and copy guardrails

### Phase 3: Homepage & Membership Funnel

**Goal**: Prospects can understand how it works and decide to call in the right context.
**Depends on**: Phase 2
**Requirements**: CONT-01, CONT-07, CONT-10, CONT-11, FEAT-01, FEAT-02, FEAT-07, UX-08
**Success Criteria** (what must be TRUE):

1. Homepage communicates the value prop, the 3-step flow, and persona-inclusive messaging.
2. Membership steps and the phone-only CTA appear in the join context, with no forms or email links.
3. Hero typing effect and FAQ accordion function on the homepage.
4. Local area names are woven into copy for local search.

**Plans**: TBD

Plans:

- [ ] 03-01: Homepage content and persona-inclusive narrative
- [ ] 03-02: Membership path and phone-only CTA placement
- [ ] 03-03: Homepage interactions (typing hero, FAQ, local names)

### Phase 4: Pricing & Value System

**Goal**: Visitors can see pricing value from a JSON source without over-detailed tariff claims.
**Depends on**: Phase 3
**Requirements**: FOUND-05, FOUND-06, CONT-02, CONT-08, PRICE-01, PRICE-02, PRICE-03, PRICE-04, PRICE-05, QUAL-04
**Success Criteria** (what must be TRUE):

1. Pricing page renders key values and sample calculations from the pricing JSON.
2. Pricing presentation is abstract with the required disclaimer and does not lead the page.
3. Only XS and M classes are shown; larger classes are referenced via Quernutzung.
4. Owners can update the pricing JSON and redeploy without editing HTML.
5. Pricing content aligns with the 02/2022 handbook and is safely abstracted.

**Plans**: TBD

Plans:

- [ ] 04-01: Pricing JSON schema and update workflow
- [ ] 04-02: Pricing page rendering and sample calculations
- [ ] 04-03: Pricing messaging constraints and disclaimers

### Phase 5: Fleet & Locations

**Goal**: Visitors can review vehicles and locations with an interactive map.
**Depends on**: Phase 4
**Requirements**: CONT-04, FEAT-03, FEAT-04, FEAT-05, LEGAL-04
**Success Criteria** (what must be TRUE):

1. Vehicles page presents the two current vehicles with specs.
2. Map shows two active locations and Don Bosco marked as planned.
3. Map includes required OSM attribution and interactive controls.

**Plans**: TBD

Plans:

- [ ] 05-01: Vehicles page with fleet specs
- [ ] 05-02: MapLibre map with locations and planned marker
- [ ] 05-03: OSM attribution and map polish

### Phase 6: Trust, Legal, SEO & Quality

**Goal**: Site is trustworthy, compliant, discoverable, and polished for launch.
**Depends on**: Phase 5
**Requirements**: CONT-03, CONT-05, CONT-06, CONT-09, LEGAL-01, LEGAL-02, LEGAL-03, SEO-01, SEO-02, SEO-03, SEO-04, TRACK-01, UX-03, QUAL-01, QUAL-02, QUAL-03, QUAL-05
**Success Criteria** (what must be TRUE):

1. Visitors can access Impressum and Datenschutzerklaerung pages; analytics respects consent rules.
2. About, business, and sustainability content builds trust without overpromising; Quernutzung appears as a secondary benefit.
3. All pages include meta descriptions, Open Graph tags, and semantic HTML with local SEO cues.
4. Content quality checks pass: correct German, no false capability claims, working links, and copyright-clear images.

**Plans**: TBD

Plans:

- [ ] 06-01: About, business, sustainability, and Quernutzung content
- [ ] 06-02: Legal pages and analytics concept
- [ ] 06-03: SEO, semantic HTML, and quality sweep

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 2.1 -> 2.2 -> 3 -> 3.1 -> 4

| Phase | Plans Complete | Status | Completed |
| --- | --- | --- | --- |
| 1. Foundation & Deployment | 0/TBD | Not started | - |
| 2. Core UX & Navigation | 0/TBD | Not started | - |
| 3. Homepage & Membership Funnel | 0/TBD | Not started | - |
| 4. Pricing & Value System | 0/TBD | Not started | - |
| 5. Fleet & Locations | 0/TBD | Not started | - |
| 6. Trust, Legal, SEO & Quality | 0/TBD | Not started | - |
