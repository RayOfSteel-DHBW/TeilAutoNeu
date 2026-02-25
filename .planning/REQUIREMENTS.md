# Requirements: teilAuto Mössingen Website

**Defined:** 2026-02-08
**Core Value:** Attract suitable new members without overwhelming the owners' limited phone capacity

## v1 Requirements

Requirements for initial launch. Site acts as self-service information hub and member filter.

### Foundation

- [x] **FOUND-01**: Static HTML + Tailwind CSS site (no SPA, no CMS, no server runtime)
- [x] **FOUND-02**: Build pipeline using npm scripts
- [ ] **FOUND-03**: PowerShell SFTP upload script for owner-managed deployment to STRATO hosting *(Deferred: Pages-only V1)*
- [x] **FOUND-04**: Development preview deployable to GitHub Pages
- [x] **FOUND-05**: Pricing data sourced from a JSON file separate from HTML
- [x] **FOUND-06**: Owners can update pricing JSON and deploy via simple PowerShell command

### Legal Compliance

- [x] **LEGAL-01**: Impressum page with required §5 TMG content (name, address, contact, register info)
- [x] **LEGAL-02**: Datenschutzerklärung page with DSGVO-compliant privacy policy
- [x] **LEGAL-03**: DSGVO-compliant analytics implementation (no tracking without consent mechanism)
- [x] **LEGAL-04**: OSM attribution on map (ODbL license compliance)

### Content Pages

- [ ] **CONT-01**: Homepage — hero, value prop, 3-step "how it works," top FAQ accordion, persona-inclusive messaging
- [ ] **CONT-02**: Preise (Pricing) — key tariff values, sample calculations, abstract presentation, disclaimer
- [x] **CONT-03**: Sustainability communicated through storytelling, not a dedicated "green" page — readers who care will see it; others won't feel lectured
- [x] **CONT-04**: Fahrzeuge (Vehicles) — fleet display (Opel Mokka E, Opel Adam) with specs, parking map
- [x] **CONT-05**: Für Firmen (Business) — business customer pitch with 4 benefits
- [x] **CONT-06**: Über uns (About) — founders, history, 60+ members, operations model
- [ ] **CONT-07**: Membership info (how to join, expectations, phone number) — may be separate page or baked into homepage "how it works" flow
- [x] **CONT-08**: Only publish tariff classes XS and M (current fleet); larger classes mentioned via Quernutzung
- [x] **CONT-09**: Quernutzung (cross-use network) mentioned as notable benefit, not headline feature
- [x] **CONT-10**: Phone number (07473-922202) placed only in membership/how-to-join context — NOT on every page; avoid pushing unqualified callers
- [x] **CONT-11**: No contact forms, no email addresses, no online signup (phone-only by design)

### Interactive Features

- [ ] **FEAT-01**: Hero section with dynamic typing effect cycling words ("flexibel, vernünftig, praktisch, regional") *(Overridden: Hero simplified, no typing effect)*
- [ ] **FEAT-02**: FAQ accordion on homepage (5 most common questions)
- [ ] **FEAT-03**: Interactive parking map using MapLibre GL JS + OpenFreeMap
- [x] **FEAT-04**: Map shows 2 active parking locations
- [x] **FEAT-05**: Map shows Don Bosco as "Geplant" (planned location for local SEO)
- [x] **FEAT-06**: Responsive mobile hamburger navigation
- [x] **FEAT-07**: Local village names (Mössingen, Belsen, Talheim, Öschingen) woven into copy for local search discoverability

### Pricing Display

- [x] **PRICE-01**: Pricing page shows 1–2 highlight values (e.g. hourly rate, km price) to demo JSON-driven rendering
- [x] **PRICE-02**: Pricing data rendered from pricing JSON file
- [x] **PRICE-03**: Abstract pricing presentation — no full tariff detail, no deep billing mechanics
- [x] **PRICE-04**: Disclaimer present: "Genaue, aktuelle Preise erhalten Sie im persönlichen Gespräch und in den Unterlagen"
- [x] **PRICE-05**: Price is presented as a selling point but not the lead message
- [x] **PRICE-06**: Any missing or non-final pricing values must be explicitly labeled as "noch offen" or "Platzhalter" on the page

### Design & UX

- [x] **UX-01**: Mobile-first responsive design
- [x] **UX-02**: White/green color palette (clean, nature-forward, trustworthy)
- [x] **UX-03**: All images copyright-clear (owner-supplied photos + AI-generated)
- [x] **UX-04**: Consistent brand casing: "teilAuto" (not "Teilauto" or "TeilAuto")
- [x] **UX-05**: Consistent phone number format: 07473-922202 (no private numbers)
- [x] **UX-06**: German copy with Sie-Ansprache, sachlich/freundlich tone
- [x] **UX-07**: No moralizing, no "you shouldn't own a car" rhetoric, no poverty signals
- [ ] **UX-08**: Homepage "works" for all 6 personas without explicit self-segmentation tiles

### SEO & Analytics

- [x] **SEO-01**: Meta descriptions on all pages
- [x] **SEO-02**: Open Graph tags for social sharing
- [x] **SEO-03**: Local search optimization (Mössingen, Baden-Württemberg, Carsharing)
- [x] **SEO-04**: Semantic HTML (proper heading hierarchy, landmarks)
- [ ] **TRACK-01**: Analytics tracking concept (persona behavior, scroll depth, FAQ opens, contact clicks) *(Deferred to V2: hooks placed, no consumer)*

### Quality

- [x] **QUAL-01**: Correct German spelling and grammar throughout
- [x] **QUAL-02**: No typos (fix issues like "gegegeben," "Moblitätskonzept," "Ihrer→Ihre")
- [x] **QUAL-03**: No claims about capabilities business doesn't have (24/7 support, app, free-floating, spontaneous returns, "completely paperless")
- [x] **QUAL-04**: Content validated against 02/2022 usage handbook (abstracted for web)
- [x] **QUAL-05**: All links functional (no case-sensitive link bugs like "Preise.html")

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Calculator

- **CALC-01**: Interactive JavaScript cost calculator (Tarifrechner) with user inputs
- **CALC-02**: Detailed price tables from Tarife.xml

### Downloads

- **DL-01**: Downloadable contracts/AGB (blocked on legal review)
- **DL-02**: Downloadable usage handbook PDF

### Advanced

- **ADV-01**: Online booking system integration (future capability)
- **ADV-02**: Example calculations with actual member scenarios and real numbers

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature                                     | Reason                                                                          |
| ------------------------------------------- | ------------------------------------------------------------------------------- |
| Email contact/inquiry forms                 | Phone handler is near-blind; phone-only by design constraint                    |
| Online membership signup ("Jetzt anmelden") | Business policy: next step is always a phone call ("kein Online-Abschluss")     |
| CMS (WordPress, CouchCMS, etc.)             | Owners deploy via SFTP; static site meets needs and reduces complexity          |
| JavaScript SPA (React, Vue, etc.)           | Unnecessary for informational site; static HTML sufficient                      |
| 24/7 support claims                         | Business doesn't offer this — part-time/volunteer operation although for profit |
| Mobile app                                  | Business doesn't have one; won't claim it does                                  |
| Free-floating carsharing                    | Station-based model only                                                        |
| Spontaneous returns                         | Booking required, no spontaneous availability                                   |
| "Completely paperless" claims               | Some paper processes remain                                                     |
| Detailed billing rules on website           | Night-hour definitions, deep tariff mechanics too granular for web              |
| Private phone numbers                       | Only publish booking line: 07473-922202                                         |
| Exact unverified pricing                    | 2022 handbook numbers not trusted; owner must supply fresh price JSON           |
| Student project code reuse                  | UNLICENSED code — inspiration only                                              |
| Copyright-flagged images                    | Must be replaced with owner-supplied or AI-generated assets                     |

## Traceability

Which phases cover which requirements. Updated after v1.0 milestone audit (2026-02-24).

| Requirement | Phase    | Status   |
| ----------- | -------- | -------- |
| FOUND-01    | Phase 1  | Complete |
| FOUND-02    | Phase 1  | Complete |
| FOUND-03    | Phase 1  | Deferred |
| FOUND-04    | Phase 1  | Complete |
| FOUND-05    | Phase 4  | Complete |
| FOUND-06    | Phase 4  | Complete |
| LEGAL-01    | Phase 6  | Complete |
| LEGAL-02    | Phase 6  | Complete |
| LEGAL-03    | Phase 6  | Complete |
| LEGAL-04    | Phase 5  | Complete |
| CONT-01     | Phase 10 | Pending  |
| CONT-02     | Phase 10 | Pending  |
| CONT-03     | Phase 9  | Complete |
| CONT-04     | Phase 5  | Complete |
| CONT-05     | Phase 6  | Complete |
| CONT-06     | Phase 6  | Complete |
| CONT-07     | Phase 10 | Pending  |
| CONT-08     | Phase 4  | Complete |
| CONT-09     | Phase 9  | Complete |
| CONT-10     | Phase 9  | Complete |
| CONT-11     | Phase 3  | Complete |
| FEAT-01     | Phase 3  | Overridden |
| FEAT-02     | Phase 10 | Pending  |
| FEAT-03     | Phase 10 | Pending  |
| FEAT-04     | Phase 5  | Complete |
| FEAT-05     | Phase 5  | Complete |
| FEAT-06     | Phase 8  | Complete |
| FEAT-07     | Phase 3  | Complete |
| PRICE-01    | Phase 4  | Complete |
| PRICE-02    | Phase 4  | Complete |
| PRICE-03    | Phase 4  | Complete |
| PRICE-04    | Phase 4  | Complete |
| PRICE-05    | Phase 4  | Complete |
| PRICE-06    | Phase 4  | Complete |
| UX-01       | Phase 8  | Complete |
| UX-02       | Phase 2  | Complete |
| UX-03       | Phase 6  | Complete |
| UX-04       | Phase 2  | Complete |
| UX-05       | Phase 2  | Complete |
| UX-06       | Phase 7  | Complete |
| UX-07       | Phase 2  | Complete |
| UX-08       | Phase 10 | Pending  |
| SEO-01      | Phase 9  | Complete |
| SEO-02      | Phase 9  | Complete |
| SEO-03      | Phase 6  | Complete |
| SEO-04      | Phase 6  | Complete |
| TRACK-01    | Phase 6  | Deferred (V2) |
| QUAL-01     | Phase 7  | Complete |
| QUAL-02     | Phase 7  | Complete |
| QUAL-03     | Phase 9  | Complete |
| QUAL-04     | Phase 4  | Complete |
| QUAL-05     | Phase 9  | Complete |

**Coverage:**

- v1 requirements: 51 total
- Satisfied: 32 [x]
- Pending (gap closure): 15
- Deferred: 2 (FOUND-03, TRACK-01)
- Overridden: 1 (FEAT-01)
- Unmapped: 0

---

_Requirements defined: 2026-02-08_
_Last updated: 2026-02-24 after v1.0 milestone audit gap closure planning_
