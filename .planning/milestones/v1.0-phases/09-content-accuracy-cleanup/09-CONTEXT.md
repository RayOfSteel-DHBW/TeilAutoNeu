# Phase 9: Content Accuracy & Dead Code Cleanup - Context

**Gathered:** 2026-02-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Fix content accuracy issues across the site: scope phone CTAs to membership context only, verify factual claims, remove orphaned files, fix OG tag duplication, fix broken links. No new content creation — this is correction and cleanup work.

</domain>

<decisions>
## Implementation Decisions

### Phone CTA Scoping
- Remove phone number (07473-922202) from all pages except Impressum and the current membership/info section
- Clean removal — no replacement CTAs, no "Mehr erfahren" links where phone was removed
- Phone number on the info/membership section stays at the bottom so users read relevant content before seeing it
- Impressum keeps phone number (legally required)

### Sustainability Messaging
- Claude's discretion, less is more — only touch where it fits naturally into existing copy
- Slightly stronger sustainability angle on Firmenkunden page (businesses appreciate green positioning)
- Do not write new sustainability paragraphs that Phase 10 will rewrite — this is a light touch
- Quernutzung framing on Fahrzeuge page is already good — verify it's correctly positioned, don't rewrite

### OG Tag Deduplication
- Fix duplicate og:image tags: base.html defines default og:image, some pages also define their own — remove page-level duplicates that match the base default
- Do NOT rewrite existing meta description text — it's fine as-is
- Mechanical fix only

### Factual Claims & Links
- Scan for known false-claim patterns (24/7 support, app, free-floating, spontaneous returns, "completely paperless") and verify none remain
- This is a verification step — earlier phases likely already addressed these, but confirm
- Fix any broken links (QUAL-05) — case-sensitivity issues, dead hrefs

### Claude's Discretion
- Dead file identification and removal (orphaned HTML, CSS, JS files not referenced anywhere)
- Exact sustainability wording where it's touched
- Whether any factual claims need correction (flag if found, likely none)
- Link fix approach (mechanical)

</decisions>

<specifics>
## Specific Ideas

- User's homepage vision (minimal hero, dual CTA, "So funktioniert's" page) was captured separately in Phase 10 context draft — Phase 9 works with the current page structure as-is
- "Less is more" on sustainability — user explicitly does not want preachy or dedicated green messaging
- Firmenkunden page can lean slightly harder into sustainability because business customers value that positioning

</specifics>

<deferred>
## Deferred Ideas

- Homepage restructuring (minimal hero, dual CTA, "So funktioniert's" page) — Phase 10 (captured in 10-CONTEXT-DRAFT.md)
- Sustainability as a permanent review principle for future content passes — note for v2 requirements
- Meta description text review for accuracy against content changes — revisit after Phase 10 content rewrites

</deferred>

---

*Phase: 09-content-accuracy-cleanup*
*Context gathered: 2026-02-25*
