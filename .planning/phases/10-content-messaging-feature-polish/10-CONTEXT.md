# Phase 10: Content Messaging & Feature Polish - Context

**Gathered:** 2026-02-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Revise homepage messaging per owner feedback, correct membership text, add pricing labels, complete FAQ to 5 items, and improve map popup visual hierarchy. Closes 6 partial gaps from the v1.0 audit: CONT-01, CONT-07, CONT-02, FEAT-02, FEAT-03, UX-08. Also fixes the "Pricing comprehension" E2E flow.

No new pages are created (mitglied-werden is renamed/expanded, not added). No new features beyond what the roadmap specifies.

</domain>

<decisions>
## Implementation Decisions

### Homepage (index.html) — CONT-01, FEAT-02, UX-08

**Hero section (full redesign):**
- Hero fills 100% viewport height (100vh) — nothing else visible on first screen
- Keep existing headline: "Die sparsame Art (k)ein Auto zu haben"
- SVG logo placed above the subtitle (like the student project reference)
- Dual CTA buttons:
  - "Noch unsicher?" → auto-scroll past hero to page content below
  - "Mehr erfahren" → links to the hybrid "So funktioniert's" / membership page
- Remove the two info cards from the hero area — move them below the fold (revised text)

**Below the fold:**
- Info cards (currently "Kurze Wege, klare Organisation" / "Gemeinschaftlich statt privat") move here with revised text
- Value-prop cards ("Sparsam bleiben" / "Flexibel unterwegs" / "Lokal verankert") stay — text revision deferred to implementation (audit flagged: "Sparsam" needs low monthly cost emphasis, "Flexibel" oversells for 2 cars)
- Remove "So funktioniert teilAuto" section entirely — that content moves to the hybrid page

**FAQ accordion:**
- Add 5th FAQ item about Quernutzung / cross-use: "Kann ich auch Fahrzeuge in anderen Städten nutzen?" (or similar)
- Existing 4 items stay

**Personas (UX-08):**
- No persona-specific tiles or segmentation — general messaging already covers all 6 personas

### Preise (preise.html) — CONT-02

**Example calculations:**
- Replace raw formulas with labeled breakdowns per line item
- Each line shows what it represents: "1. Stunde: X EUR", "Folgestunde: X EUR", "15 km × 0,32 EUR"
- Keep the two scenarios (Wochenendeinkauf, Tagesausflug)

**Kaution (deposit):**
- Demote from prominent card at top to small mention at bottom of page
- Add note that Kaution is refundable with interest

**"noch offen" values:**
- Stay as placeholders (deposit, annual fee, booking fee) — owner hasn't confirmed yet

### Fahrzeuge (fahrzeuge.html) — FEAT-03

**Map popup:**
- Restructure from flat string to visual hierarchy:
  - Car name bold at top
  - Location on second line
  - Features listed below with clear separation

**Quernutzung factual correction:**
- "über 200 Partnerfahrzeuge" → "Fahrzeuge von über 200 Partnern"
- Fix in: page body text, meta description, OG description
- Also fix on ueber-uns.html where the same claim appears

### Mitglied werden → hybrid page — CONT-07

**Page transformation:**
- Rename and expand mitglied-werden.html into a hybrid "So funktioniert's" + membership page
- Homepage "Mehr erfahren" CTA links here
- URL may change (implementation decision — redirect old URL if needed)

**Content structure:**
- "So funktioniert's" section first — Claude's discretion on content (explaining carsharing day-to-day before the join flow)
- Then the existing 3-step join flow: Anrufen → Kennenlernen → Losfahren
- Phone CTA (07473-922202) stays at the bottom — user reads relevant info before seeing it

**Messaging correction:**
- Remove "Sie werden Teil einer Gemeinschaft" — wrong framing
- Replace with practical/transactional framing: "Mitgliedschaft heißt Zugang zu Fahrzeugen, klare Regeln, faire Kosten" (or similar)
- No community/social obligation angle

### Claude's Discretion
- Exact wording for revised info cards below the hero fold
- Value-prop card text revisions (within audit constraints)
- "So funktioniert's" section content for the hybrid page
- How to structure the FAQ 5th answer about Quernutzung
- Visual layout of the labeled pricing breakdown

</decisions>

<specifics>
## Specific Ideas

- Hero should feel like a "landing page first screen" — minimal, clean, just the pitch and two choices
- SVG logo placement above subtitle mirrors the student project's hero design
- "Noch unsicher?" CTA scrolls smoothly to content below (not a hard jump)
- Pricing labeled breakdown should make the cost transparent at a glance — no mental math required
- Kaution mention at bottom should reassure, not alarm ("wird bei Austritt verzinst zurückgezahlt" or similar)

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 10-content-messaging-feature-polish*
*Context gathered: 2026-02-25*
