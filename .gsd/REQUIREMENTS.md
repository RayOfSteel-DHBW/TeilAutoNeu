# Requirements: teilAuto Mössingen Website

**Defined:** 2026-02-08  
**Core Value:** Attract suitable new members without overwhelming the owners' limited phone capacity

## v1 Requirements

Requirements for initial launch. Site acts as self-service information hub and member filter.

### Foundation

- [ ] **FOUND-01**: Static HTML + Tailwind CSS site (no SPA, no CMS, no server runtime)
- [ ] **FOUND-02**: Build pipeline using npm scripts
- [ ] **FOUND-03**: PowerShell SFTP upload script for owner-managed deployment to STRATO hosting
- [ ] **FOUND-04**: Development preview deployable to GitHub Pages
- [ ] **FOUND-05**: Pricing data sourced from a JSON file separate from HTML
- [ ] **FOUND-06**: Owners can update pricing JSON and deploy via simple PowerShell command

### Legal Compliance

- [ ] **LEGAL-01**: Impressum page with required §5 TMG content (name, address, contact, register info)
- [ ] **LEGAL-02**: Datenschutzerklärung page with DSGVO-compliant privacy policy
- [ ] **LEGAL-03**: DSGVO-compliant analytics implementation (no tracking without consent mechanism)
- [ ] **LEGAL-04**: OSM attribution on map (ODbL license compliance)

### Content Pages

- [ ] **CONT-01**: Homepage — hero, value prop, 3-step "how it works," top FAQ accordion, persona-inclusive messaging
- [ ] **CONT-02**: Preise (Pricing) — key tariff values, sample calculations, abstract presentation, disclaimer
- [ ] **CONT-03**: Sustainability communicated through storytelling, not a dedicated "green" page — readers who care will see it; others won't feel lectured
- [ ] **CONT-04**: Fahrzeuge (Vehicles) — fleet display (Opel Mokka E, Opel Adam) with specs, parking map
- [ ] **CONT-05**: Für Firmen (Business) — business customer pitch with 4 benefits
- [ ] **CONT-06**: Über uns (About) — founders, history, 60+ members, operations model
- [ ] **CONT-07**: Membership info (how to join, expectations, phone number) — may be separate page or baked into homepage "how it works" flow
- [ ] **CONT-08**: Only publish tariff classes XS and M (current fleet); larger classes mentioned via Quernutzung
- [ ] **CONT-09**: Quernutzung (cross-use network) mentioned as notable benefit, not headline feature
- [ ] **CONT-10**: Phone number (07473-922202) placed only in membership/how-to-join context — NOT on every page; avoid pushing unqualified callers
- [ ] **CONT-11**: No contact forms, no email addresses, no online signup (phone-only by design)

### Interactive Features

- [ ] **FEAT-01**: Hero section with dynamic typing effect cycling words ("flexibel, vernünftig, praktisch, regional")
- [ ] **FEAT-02**: FAQ accordion on homepage (5 most common questions)
- [ ] **FEAT-03**: Interactive parking map using MapLibre GL JS + OpenFreeMap
- [ ] **FEAT-04**: Map shows 2 active parking locations
- [ ] **FEAT-05**: Map shows Don Bosco as "Geplant" (planned location for local SEO)
- [ ] **FEAT-06**: Responsive mobile hamburger navigation
- [ ] **FEAT-07**: Local village names (Mössingen, Belsen, Talheim, Öschingen) woven into copy for local search discoverability

### Pricing Display

- [ ] **PRICE-01**: Pricing page shows key values and sample calculations (deposit, annual fee, time/km rates)
- [ ] **PRICE-02**: Pricing data rendered from pricing JSON file
- [ ] **PRICE-03**: Abstract pricing presentation — no full tariff detail, no deep billing mechanics
- [ ] **PRICE-04**: Disclaimer present: "Genaue, aktuelle Preise erhalten Sie im persönlichen Gespräch und in den Unterlagen"
- [ ] **PRICE-05**: Price is presented as a selling point but not the lead message

### Design & UX

- [ ] **UX-01**: Mobile-first responsive design
- [ ] **UX-02**: White/green color palette (clean, nature-forward, trustworthy)
- [ ] **UX-03**: All images copyright-clear (owner-supplied photos + AI-generated)
- [ ] **UX-04**: Consistent brand casing: "teilAuto" (not "Teilauto" or "TeilAuto")
- [ ] **UX-05**: Consistent phone number format: 07473-922202 (no private numbers)
- [ ] **UX-06**: German copy with Sie-Ansprache, sachlich/freundlich tone
- [ ] **UX-07**: No moralizing, no "you shouldn't own a car" rhetoric, no poverty signals
- [ ] **UX-08**: Homepage "works" for all 6 personas without explicit self-segmentation tiles

### SEO & Analytics

- [ ] **SEO-01**: Meta descriptions on all pages
- [ ] **SEO-02**: Open Graph tags for social sharing
- [ ] **SEO-03**: Local search optimization (Mössingen, Baden-Württemberg, Carsharing)
- [ ] **SEO-04**: Semantic HTML (proper heading hierarchy, landmarks)
- [ ] **TRACK-01**: Analytics tracking concept (persona behavior, scroll depth, FAQ opens, contact clicks)

### Quality

- [ ] **QUAL-01**: Correct German spelling and grammar throughout
- [ ] **QUAL-02**: No typos (fix issues like "gegegeben," "Moblitätskonzept," "Ihrer→Ihre")
- [ ] **QUAL-03**: No claims about capabilities business doesn't have (24/7 support, app, free-floating, spontaneous returns, "completely paperless")
- [ ] **QUAL-04**: Content validated against 02/2022 usage handbook (abstracted for web)
- [ ] **QUAL-05**: All links functional (no case-sensitive link bugs like "Preise.html")

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

| Feature | Reason |
|---------|--------|
| Email contact/inquiry forms | Phone handler is near-blind; phone-only by design constraint |
| Online membership signup ("Jetzt anmelden") | Business policy: next step is always a phone call ("kein Online-Abschluss") |
| CMS (WordPress, CouchCMS, etc.) | Owners deploy via SFTP; static site meets needs and reduces complexity |
| JavaScript SPA (React, Vue, etc.) | Unnecessary for informational site; static HTML sufficient |
| 24/7 support claims | Business doesn't offer this — part-time/volunteer operation although for profit |
| Mobile app | Business doesn't have one; won't claim it does |
| Free-floating carsharing | Station-based model only |
| Spontaneous returns | Booking required, no spontaneous availability |
| "Completely paperless" claims | Some paper processes remain |
| Detailed billing rules on website | Night-hour definitions, deep tariff mechanics too granular for web |
| Private phone numbers | Only publish booking line: 07473-922202 |
| Exact unverified pricing | 2022 handbook numbers not trusted; owner must supply fresh price JSON |
| Student project code reuse | UNLICENSED code — inspiration only |
| Copyright-flagged images | Must be replaced with owner-supplied or AI-generated assets |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| *(To be populated during roadmap creation)* | | |

**Coverage:**
- v1 requirements: 43 total
- Mapped to phases: 0 (pending roadmap)
- Unmapped: 43 ⚠️

---

_Requirements defined: 2026-02-08_  
_Last updated: 2026-02-08 after initialization_
