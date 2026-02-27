# teilAuto Mössingen Website

## What This Is

A modern, mobile-friendly static website for **teilAuto Mössingen e.K.**, a family-run station-based carsharing cooperative in Mössingen (Baden-Württemberg) with 60+ members and 2 vehicles. The site serves as a self-service information hub — answering common questions, presenting carsharing as a practical alternative to owning a second car, and filtering prospective members so only genuinely interested people call. Built with HTML + Tailwind CSS, deployed via GitHub Pages, with JSON-driven pricing and an interactive MapLibre parking map.

## Core Value

**Attract suitable new members without overwhelming the owners' limited phone capacity.** The site must inform so thoroughly that callers are pre-qualified — "false positives" (people who call but aren't a good fit) are the primary failure mode to prevent.

## Requirements

### Validated

- ✓ 9-page site structure (home, pricing, vehicles, business, about, membership, privacy, imprint + geschaeftskunden) — v1.0
- ✓ Interactive parking map with MapLibre GL JS + OpenFreeMap — v1.0
- ✓ FAQ accordion component (5 items) — v1.0
- ✓ Responsive mobile layout with slide-down hamburger nav — v1.0
- ✓ Template-based static build pipeline (Tera + Tailwind + npm scripts) — v1.0
- ✓ Static HTML + Tailwind CSS site (no SPA, no CMS, no server runtime) — v1.0
- ✓ Pricing data sourced from JSON file, maintainable by non-technical owners — v1.0
- ✓ Phone-only CTA (07473-922202) scoped to membership context — v1.0
- ✓ Impressum page with §5 DDG legally required content — v1.0
- ✓ Datenschutzerklärung page with Art. 13 DSGVO content (simplified, no-tracking angle) — v1.0
- ✓ 100vh hero with dual CTAs and persona-inclusive messaging — v1.0
- ✓ Persona-aware homepage for all 6 personas without segmentation tiles — v1.0
- ✓ Vehicle fleet display (Opel Mokka E, Opel Adam) with specs — v1.0
- ✓ Parking map — 2 active locations + Don Bosco "Geplant" — v1.0
- ✓ Pricing page with labeled breakdowns and value-first framing — v1.0
- ✓ Pricing disclaimer present — v1.0
- ✓ Only XS and M tariff classes; larger classes via Quernutzung — v1.0
- ✓ Sustainability distributed across About, Fahrzeuge, Für Firmen (no standalone page) — v1.0
- ✓ Business customers page (Für Firmen) with 4 benefit cards — v1.0
- ✓ About us page — founders, history, operations model — v1.0
- ✓ Membership info as hybrid "So funktioniert's" + join page — v1.0
- ✓ Quernutzung as notable benefit, not headline ("Fahrzeuge von über 200 Partnern") — v1.0
- ✓ Correct German copy with UTF-8 umlauts, Sie-Ansprache, no poverty signals — v1.0
- ✓ Mobile-first responsive design with fluid headings and intrinsic footer — v1.0
- ✓ SEO basics — meta descriptions, Open Graph, local search optimization — v1.0
- ✓ OSM attribution on map (ODbL compliance) — v1.0
- ✓ All images copyright-clear (placeholder cards for flagged images) — v1.0
- ✓ Consistent brand casing (teilAuto) and phone format (07473-922202) — v1.0
- ✓ White/green color palette — v1.0

### Deferred

- FOUND-03: PowerShell SFTP upload script — deferred, Pages-only V1
- TRACK-01: Analytics tracking implementation — deferred to V2 (data-track hooks placed, no consumer)
- FEAT-01: Typing effect in hero — overridden, hero simplified per design decision

### Active

<!-- Current milestone: v1.1 Visual Fixes -->

- [ ] Audit all pages visually via Puppeteer and identify layout/rendering bugs
- [ ] Fix all identified visual issues (spacing, flex direction, overflow, alignment)
- [ ] Joint page-by-page review with owner to catch remaining issues
- [ ] Fix all issues identified during joint review

### Out of Scope

- Online booking system — business doesn't have one, won't claim it does
- Email contact or inquiry forms — phone handler is near-blind; phone-only by design
- Online membership signup ("kein Online-Abschluss") — next step is always a phone call
- JavaScript cost calculator (Tarifrechner) — deferred to V2; placeholder mention acceptable
- Downloadable contracts/AGB — blocked on legal review
- 24/7 support claims, app, free-floating, spontaneous booking, "completely paperless" — capabilities the business doesn't have
- Detailed billing rules (night-hour definitions, deep tariff mechanics) — too granular for web
- CMS or dynamic server — owners deploy via SFTP, update JSON for prices

## Context

**The business:** teilAuto Mössingen is run part-time/volunteer by Ralf Stahl (owner) and Ursula Stahl (bookings/admin). They serve ~60 members ("Fahrtberechtigte") with 2 vehicles from 2 active parking locations in Mössingen. Membership-based, no one-time rentals. 3-month minimum, monthly cancellation after. Phone-only booking. Part of the BCS/DACHverband cross-use network giving access to vehicles from 200+ partners regionally.

**Current state (v1.0 shipped):** 1,031 LOC across 9 HTML pages, 4 JS files, 1 CSS file, and 1 JSON data file. Built with Tera templates + Tailwind CSS, deployed to GitHub Pages. Student-project code fully removed and reauthored from scratch. All content is first-draft for customer review — owner action items remain (vehicle photos, Impressum fields, member count verification, Kaution amount).

**Target outcome:** ~20 additional suitable members. The site should reduce "tire-kicker" calls while increasing calls from genuinely interested prospects.

**6 defined personas (weighted):**
1. Simone — young mother, practical need for occasional second car
2. Johannes — eco-conscious, values sustainability
3. Günther — cross-use traveler, values network access
4. Brigitte — frugal retiree, values cost savings
5. Mirjam — business user, needs fleet flexibility
6. Michael — motorcycle owner, needs car occasionally

**Persona weighting:** The dominant use case is carsharing as a Zweitwagen (second car). Out of 60+ customers, only ~2 do NOT fit the second-car pattern. When making content or design decisions, default to optimizing for the second-car persona. Simone is the most representative: one household car is at work, she needs wheels during the day for errands/kids.

**Parking locations:**
- 2 active (current fleet)
- Belsen — vacant, most likely next location (after reaching +20 members)
- Don Bosco — planned (shown on map as "Geplant")

**Content sources:**
- `.planning/sources/CONSOLIDATED.md` — master synthesis of all inputs
- `.planning/sources/notes/` — authoritative planning docs and specs
- `.planning/sources/references/` — company documents, handbook excerpts

**Pricing data:** 02/2022 usage handbook values shown as demo with "noch offen" badges. Owner to supply fresh price JSON before production launch.

## Constraints

- **Tech stack**: Static HTML + Tailwind CSS. No SPA, no CMS, no server-side runtime. Build tooling with npm scripts is fine.
- **Deployment**: PowerShell SFTP script to STRATO hosting. GitHub Pages acceptable for staging/preview.
- **Maintainability**: Non-technical owners must be able to update pricing via a JSON file and deploy via a simple PowerShell command.
- **Copyright**: No reuse of flagged student-project assets. All images must be owner-supplied or AI-generated. See `.planning/sources/student-project/COPYRIGHT-FLAGS.md`.
- **Legal**: German commercial website — Impressum (§5 DDG) and Datenschutzerklärung (DSGVO) are legally mandatory.
- **Tone**: Sachlich, freundlich, vertrauensbildend, Sie-Ansprache. No moralizing, no "you shouldn't own a car" rhetoric, no poverty signals.
- **Privacy**: Only publish booking phone number 07473-922202. Never publish private phone numbers.
- **Content accuracy**: Do not claim capabilities the business doesn't have. When in doubt, understate.
- **Student code**: UNLICENSED — treat as inspiration only, not copy source.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static HTML + Tailwind, no CMS | Owners deploy via SFTP; simplicity over features. Low-tech V1 to ship fast. | ✓ Good — shipped v1.0 with 1,031 LOC |
| V1 deployment via GitHub Pages; STRATO deferred | Fast reviewable site with minimal owner setup; STRATO planned as final V1 step. | ✓ Good — STRATO deferred to V2 |
| Phone-only CTA, no email/forms | Phone handler is near-blind; email would create unmanageable workload | ✓ Good — scoped to mitglied-werden.html |
| Pricing from JSON file | Owners can update tariffs without touching HTML; single source of truth | ✓ Good — pricing.json drives pricing.js |
| White/green color palette | Nature-forward, matches competition/partners, fits Mössingen's landscape imagery | ✓ Good — brand tokens in Tailwind config |
| Quernutzung as notable benefit, not headline | Owners say it rarely drives new members; useful for informed interest, not acquisition | ✓ Good — corrected to "Fahrzeuge von über 200 Partnern" |
| Don Bosco on map as "Geplant" | Subtle local SEO for expansion area; vague enough to be correct without commitment | ✓ Good — distinct planned marker style |
| Abstract pricing (no exact unverified numbers) | 2022 handbook data not trusted; fresh price set needed before exact figures | ✓ Good — 1–2 sample values as demo, "noch offen" badges for unconfirmed |
| Build fresh, student project as reference only | UNLICENSED code, copyright-flagged assets; patterns reusable, code is not | ✓ Good — all code reauthored from scratch |
| §5 DDG not §5 TMG for Impressum | TMG repealed; Digitale-Dienste-Gesetz is current law | ✓ Good — correctly cited in impressum.html |
| Sustainability distributed, no standalone page | Content woven into About, Fahrzeuge, Für Firmen; nachhaltig.html stub deleted | ✓ Good — natural integration |
| CSS peer-aria nav (not JS class toggle) | Slide-down animation via CSS transition; more resilient than JS toggle | ✓ Good — works with keyboard a11y |
| 100vh hero with dual CTAs, no typing effect | Full-viewport hero with "Mehr erfahren" → membership and "Noch unsicher?" → smooth scroll | ✓ Good — shipped Phase 10 |
| mitglied-werden.html as hybrid "So funktioniert's" + join page | Practical carsharing how-to section before 3-step join flow. Corrected transactional framing | ✓ Good — shipped Phase 10 |
| Labeled pricing breakdowns | Line-by-line label+value pairs in example calculations. Kaution demoted to footnote | ✓ Good — shipped Phase 10 |
| Simplified Datenschutzerklärung (no-tracking angle) | No tracking exists yet; removed forward-looking Google Analytics section, kept honest disclosure | ✓ Good — shipped Phase 11 |

---

## Current Milestone: v1.1 Visual Fixes

**Goal:** Eliminate obvious visual/layout bugs across all pages so the site renders as intended before owner review.

**Target features:**
- Autonomous visual audit of all 9 pages via Puppeteer
- Fix layout issues (spacing, flex direction, overflow, alignment, responsiveness)
- Joint page-by-page review with owner
- Fix all remaining issues from joint review

---
_Last updated: 2026-02-26 after v1.1 milestone start_
