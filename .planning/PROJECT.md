# teilAuto Mössingen Website

## What This Is

A redesigned website for **teilAuto Mössingen e.K.**, a family-run station-based carsharing cooperative in Mössingen (Baden-Württemberg) with 60+ members and 2 vehicles. The site replaces an outdated ~2000-era frameset website with a modern, mobile-friendly static site that acts as a self-service information hub — answering common questions, presenting carsharing as a practical alternative to owning a second car, and filtering prospective members so only genuinely interested people call.

## Core Value

**Attract suitable new members without overwhelming the owners' limited phone capacity.** The site must inform so thoroughly that callers are pre-qualified — "false positives" (people who call but aren't a good fit) are the primary failure mode to prevent.

## Requirements

### Validated

- ✓ 9-page site structure (home, pricing, sustainability, vehicles, business, about, membership, privacy, imprint) — validated concept from reference prototype (must be reauthored)
- ✓ Interactive parking map with MapLibre GL JS + OpenFreeMap — validated concept from reference prototype (must be reimplemented)
- ✓ FAQ accordion component — validated concept from reference prototype (must be reimplemented)
- ✓ Responsive mobile layout with hamburger nav — validated concept from reference prototype (must be reimplemented)
- ✓ Template-based static build pipeline — validated concept from reference prototype (must be reimplemented)

### Active

- [ ] Static HTML + Tailwind CSS site (no SPA, no CMS, no server runtime)
- [ ] Pricing data sourced from a JSON file, maintainable by non-technical owners
- [ ] PowerShell SFTP upload script for owner-managed deployment
- [ ] Phone-only CTA (07473-922202) — no email, no contact forms, no online signup
- [ ] Impressum page with legally required content (§5 TMG)
- [ ] Datenschutzerklärung page with legally required content (DSGVO)
- [ ] Hero section with dynamic typing effect ("flexibel, vernünftig, praktisch, regional")
- [ ] Persona-aware homepage that "works" for all 6 defined personas without explicit self-segmentation tiles
- [ ] Vehicle fleet display (Opel Mokka E, Opel Adam) with specs
- [ ] Parking locations map — 2 active locations + Don Bosco as "Geplant" for local SEO
- [ ] Pricing page with key values and sample calculations (abstract, not full tariff detail)
- [ ] "Genaue, aktuelle Preise erhalten Sie im persönlichen Gespräch" disclaimer on pricing
- [ ] Only show XS and M tariff classes (current fleet); larger classes via Quernutzung only
- [ ] Sustainability / environmental messaging page (no moralizing)
- [ ] Business customers page (Für Firmen)
- [ ] About us page — founders, history, operations model
- [ ] Membership info page — how to join, what to expect (phone CTA, no form)
- [ ] Quernutzung (cross-use network) mentioned as a notable benefit, not a headline feature
- [ ] Correct, consistent German copy — Sie-Ansprache, sachlich/freundlich tone, no poverty signals
- [ ] DSGVO-compliant analytics/tracking concept (persona clicks, scroll depth, FAQ opens, contact clicks)
- [ ] Mobile-first responsive design
- [ ] SEO basics — meta descriptions, Open Graph, local search optimization
- [ ] OSM attribution on map (ODbL compliance)
- [ ] All images copyright-clear (owner-supplied photos + AI-generated)
- [ ] Consistent brand casing (teilAuto) and phone number format (07473-922202)
- [ ] White/green color palette — clean, nature-forward, trustworthy

### Out of Scope

- Online booking system — business doesn't have one, won't claim it does
- Email contact or inquiry forms — phone handler is near-blind; phone-only by design
- Online membership signup ("kein Online-Abschluss") — next step is always a phone call
- JavaScript cost calculator (Tarifrechner) — deferred to V2; placeholder mention acceptable
- Downloadable contracts/AGB — blocked on legal review
- 24/7 support claims, app, free-floating, spontaneous booking, "completely paperless" — capabilities the business doesn't have
- Detailed billing rules (night-hour definitions, deep tariff mechanics) — too granular for web
- CMS or dynamic server — owners deploy via SFTP, update JSON for prices
- Exact unverified pricing — 2022 handbook numbers not trusted; abstract until fresh price set confirmed

## Context

**The business:** teilAuto Mössingen is run part-time/volunteer by Ralf Stahl (owner) and Ursula Stahl (bookings/admin). They serve ~60 members ("Fahrtberechtigte") with 2 vehicles from 2 active parking locations in Mössingen. Membership-based, no one-time rentals. 3-month minimum, monthly cancellation after. Phone-only booking. Part of the BCS/DACHverband cross-use network giving access to 200+ partner vehicles regionally.

**The problem:** The current website is a frameset-based site from ~2000 that looks outdated and fails to answer basic questions, forcing unnecessary phone calls. A student project attempted a redesign (Tera-based static build) but produced UNLICENSED code with copyright-problematic images. That codebase currently lives in `site/` only as a temporary build fixture and must be removed before Phase 2 content work begins; patterns can be used as inspiration but code cannot be copied directly.

**Current state warning:** `site/src/` currently contains the student-project HTML/CSS/JS used to test Phase 1 build tooling. Phase 2 must delete and reauthor these files from scratch. Do not modify or extend student-project code.

**Target outcome:** ~20 additional suitable members. The site should reduce "tire-kicker" calls while increasing calls from genuinely interested prospects.

**6 defined personas:**
1. Simone — young mother, practical need for occasional second car
2. Johannes — eco-conscious, values sustainability
3. Günther — cross-use traveler, values network access
4. Brigitte — frugal retiree, values cost savings
5. Mirjam — business user, needs fleet flexibility
6. Michael — motorcycle owner, needs car occasionally

**Parking locations:**
- 2 active (current fleet)
- Belsen — vacant, most likely next location (after reaching +20 members)
- Don Bosco — planned (show on map as "Geplant")

**Content sources:**
- `.planning/sources/CONSOLIDATED.md` — master synthesis of all inputs
- `.planning/sources/notes/` — authoritative planning docs and specs
- `.planning/sources/references/` — company documents, handbook excerpts
- `.planning/sources/student-project/` — ideas-only, UNLICENSED code
- `.planning/sources/old-site/` — original frameset website content

**Pricing data:** 02/2022 usage handbook. Numbers must be reverified before publishing exact values. Use abstract language if unverified. Owner will supply a fresh price JSON for V1 launch.

## Constraints

- **Tech stack**: Static HTML + Tailwind CSS. No SPA, no CMS, no server-side runtime. Build tooling with npm scripts is fine.
- **Deployment**: PowerShell SFTP script to STRATO hosting. GitHub Pages acceptable for staging/preview.
- **Maintainability**: Non-technical owners must be able to update pricing via a JSON file and deploy via a simple PowerShell command.
- **Copyright**: No reuse of flagged student-project assets. All images must be owner-supplied or AI-generated. See `.planning/sources/student-project/COPYRIGHT-FLAGS.md`.
- **Legal**: German commercial website — Impressum (§5 TMG) and Datenschutzerklärung (DSGVO) are legally mandatory.
- **Tone**: Sachlich, freundlich, vertrauensbildend, Sie-Ansprache. No moralizing, no "you shouldn't own a car" rhetoric, no poverty signals.
- **Privacy**: Only publish booking phone number 07473-922202. Never publish private phone numbers.
- **Content accuracy**: Do not claim capabilities the business doesn't have. When in doubt, understate.
- **Student code**: UNLICENSED — treat as inspiration only, not copy source.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static HTML + Tailwind, no CMS | Owners deploy via SFTP; simplicity over features. Low-tech V1 to ship fast. | — Pending |
| V1 deployment via GitHub Pages; STRATO deferred | Fast reviewable site with minimal owner setup; STRATO planned as final V1 step. | Approved 2026-02-08 |
| Phone-only CTA, no email/forms | Phone handler is near-blind; email would create unmanageable workload | — Pending |
| Pricing from JSON file | Owners can update tariffs without touching HTML; single source of truth | — Pending |
| White/green color palette | Nature-forward, matches competition/partners, fits Mössingen's landscape imagery | — Pending |
| Quernutzung as notable benefit, not headline | Owners say it rarely drives new members; useful for informed interest, not acquisition | — Pending |
| Don Bosco on map as "Geplant" | Subtle local SEO for expansion area; vague enough to be correct without commitment | — Pending |
| Abstract pricing (no exact unverified numbers) | 2022 handbook data not trusted; fresh price set needed before exact figures | Revised 2026-02-09: 1–2 exact sample values OK as demo; no full tariff table or billing formula. All content is first-draft for customer review. |
| Build fresh, student project as reference only | UNLICENSED code, copyright-flagged assets; patterns reusable, code is not | — Pending |
| 100vh hero with dual CTAs, no typing effect | Full-viewport hero with "Mehr erfahren" → membership and "Noch unsicher?" → smooth scroll. Persona-inclusive messaging without segmentation tiles. | Shipped Phase 10 |
| mitglied-werden.html as hybrid "So funktioniert's" + join page | Practical carsharing how-to section before 3-step join flow. Corrected transactional framing. URL unchanged. | Shipped Phase 10 |
| Labeled pricing breakdowns | Line-by-line label+value pairs in example calculations. Kaution demoted to footnote with refund reassurance. | Shipped Phase 10 |
| Quernutzung text: "Fahrzeuge von über 200 Partnern" | Corrected from "über 200 Partnerfahrzeuge" — factual accuracy (partners, not vehicles). | Shipped Phase 10 |

---

_Last updated: 2026-02-25 after Phase 10 (Content Messaging & Feature Polish)_
