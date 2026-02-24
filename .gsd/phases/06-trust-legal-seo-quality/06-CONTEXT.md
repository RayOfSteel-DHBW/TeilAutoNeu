# Phase 6: Trust, Legal, SEO & Quality - Context

**Gathered:** 2026-02-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver the trust-building content pages (About, Business, Quernutzung), legally required pages (Impressum, Datenschutzerklaerung), SEO optimization (meta descriptions, Open Graph, semantic HTML), and quality polish for launch. Sustainability becomes distributed content, not a standalone page. No new interactive features or page types.

</domain>

<decisions>
## Implementation Decisions

### Trust content pages

- **Ueber uns**: Lean heavily on student-project content which was co-written with the owners. Named founders (Ralf & Ursula Stahl), origin story, personal tone. Rewrite for our Tailwind/template system but keep the substance.
- **Nachhaltigkeit page removed**: No standalone sustainability page. Sustainability messaging woven naturally into About (operations model, history), Fahrzeuge (electric vehicle), and Homepage (environmental benefits). Matches the "no moralizing" constraint.
- **Navigation change**: Remove Nachhaltigkeit from nav. Final nav: Preise | Fahrzeuge | Fuer Firmen | Ueber uns. Footer: Impressum | Datenschutz. Simpler, cleaner.
- **Fuer Firmen**: Similar scope to student version — headline, intro paragraph, 3-4 benefits (Kosteneinsparungen, Flexibilitaet, Nachhaltigkeit, Einfache Verwaltung), phone CTA. Short pitch page, not extensive.
- **Quernutzung**: Dedicated section on the Fahrzeuge page, not scattered mentions. This is strategic — the 2-vehicle fleet isn't impressive alone, but the cross-use network (200+ partner vehicles) transforms the offering. Quernutzung on Fahrzeuge compensates for the small local fleet by showing regional access.

### Legal pages

- **Impressum**: Use known data (teilAuto Moessingen e.K., Ralf Stahl, 07473-922202) plus placeholders marked "noch offen" for missing details (address, Handelsregister number, etc.). Owner completes before launch.
- **Datenschutzerklaerung**: Minimal but DSGVO-compliant. Cover: responsible party, data subject rights (Art. 13-15), server logs from hosting, MapLibre/OpenFreeMap tile loading (external service). Short, honest, matching the simple site.

### Analytics & tracking

- **V1: No tracking code shipped.** Design pages with future tracking in mind — semantic IDs, data attributes on CTAs, FAQ toggles, scroll milestone markers.
- **Future approach: Cookie-based analytics with consent banner.** The Datenschutzerklaerung should include a forward-looking section covering planned cookie-based analytics so the privacy policy is ready when tracking goes live.
- **Consent banner**: Not implemented in V1, but the privacy policy text should already describe the consent mechanism planned for later.

### SEO & local search

- **Local targeting**: Primary keyword "Carsharing Moessingen." Secondary: Teilorte (Oeschingen, Talheim, Baestenhardt, Belsen, possibly Ofterdingen). Most Teilorte feel addressed when "Moessingen" is mentioned — only distinguish where relevant (e.g., vehicle locations: "Moessinger Kernstadt" vs "Teilorte").
- **Meta descriptions**: Sachlich + local keywords. Professional German, informative tone. E.g., "Carsharing in Moessingen — flexibel, guenstig, nachhaltig. teilAuto: Ihr Carsharing vor Ort."
- **Open Graph**: Use existing teilAuto logo (vectorized) for OG image. Keep the established logo from the student version.
- **Semantic HTML**: Fix as we go on Phase 6 pages. ARIA labels are HIGH PRIORITY — a team member (Ursula Stahl, bookings/admin) has a visual impairment and uses the site. Screen-reader support is a genuine usability need, not just a checkbox. Full accessibility sweep deferred to a later roadmap item but ARIA labels on key interactions should be thorough now.

### Claude's Discretion

- OG image design approach (generic brand card vs per-page)
- Exact meta description wording per page
- Heading hierarchy and landmark structure
- How sustainability messaging integrates into existing pages (which paragraphs, which sections)
- Datenschutzerklaerung template structure and exact legal wording

</decisions>

<specifics>
## Specific Ideas

- Student-project Ueber uns content was written with the owners — use it as the primary content source, rewrite for our system
- Student-project Fuer Firmen content (4 benefits structure) as starting point
- Quernutzung should make the Fahrzeuge page feel bigger than "just 2 cars" — frame it as local fleet + regional network access
- The logo from the student version (talogo.svg) should be preserved and used in OG images
- Sustainability messaging example: on Fahrzeuge, the Mokka E is electric — that's a natural green touchpoint without preaching

</specifics>

<deferred>
## Deferred Ideas

- Full site accessibility audit (beyond ARIA labels on Phase 6 pages) — future roadmap item
- Actual analytics implementation (Matomo, Google Analytics, etc.) — V2
- Cookie consent banner UI — V2 (when analytics goes live)
- Structured data / JSON-LD for local business — could improve Google Maps/search presence, consider for V2

</deferred>

---

*Phase: 06-trust-legal-seo-quality*
*Context gathered: 2026-02-24*
