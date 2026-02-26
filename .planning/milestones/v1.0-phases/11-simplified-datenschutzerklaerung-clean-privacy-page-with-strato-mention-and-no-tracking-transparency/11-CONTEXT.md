# Phase 11: Simplified Datenschutzerklaerung - Context

**Gathered:** 2026-02-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Simplify the existing Datenschutzerklaerung page (datenschutz.html). Remove the "Geplante Webanalyse" section and all Google Analytics references since no tracking exists. Keep STRATO server logs and OpenFreeMap disclosures. Lean into the no-tracking angle as a factual statement, not a marketing highlight. Scope is limited to this single page.

</domain>

<decisions>
## Implementation Decisions

### No-tracking messaging
- Keep the no-tracking statement subtle and factual — stated once in the existing overview paragraph
- No standalone callout, no bold highlight, no differentiator language
- The overview paragraph already says "Es gibt kein Tracking, keine Analyse-Cookies und keine sozialen Netzwerk-Einbindungen" — this is sufficient
- Claude's discretion on whether to adjust overview wording for consistency after removing the Webanalyse section, and on optimal placement of the no-tracking statement
- Claude's discretion on whether to mention no-tracking in the meta description for SEO

### Cleanup scope
- Remove the entire "Geplante Webanalyse (künftig)" section (lines 84-96)
- Remove the consent withdrawal paragraph from "Ihre Rechte" ("Soweit die Verarbeitung auf Ihrer Einwilligung beruht (künftig: Google Analytics)...")
- Remove Datenübertragbarkeit (Art. 20) from the rights list — not applicable without consent/contract-based processing
- No other pages need cleanup — changes are confined to datenschutz.html
- All removed German DSGVO text preserved in `.planning/todos/pending/` as a CONTEXT-DRAFT for the future V2 tracking phase

### Claude's Discretion
- Overview paragraph wording adjustments for consistency
- Placement of no-tracking statement (keep in overview vs. move after data collection sections)
- Meta description wording (neutral vs. mentioning no-tracking)
- Any minor copy tightening after removals

</decisions>

<specifics>
## Specific Ideas

- Removed text (Webanalyse section, consent withdrawal, Datenübertragbarkeit) should be saved as a draft in `.planning/todos/pending/` alongside the existing V2 todo for reintroducing tracking — so the future phase has ready-made DSGVO wording
- Result should feel "clean and honest" — a short privacy page that says what data is collected and nothing more

</specifics>

<deferred>
## Deferred Ideas

- Reintroducing full consent/analytics/cookie sections — V2 milestone (existing todo: `2026-02-24-v2-readd-full-datenschutz-consent-analytics-sections.md`)

</deferred>

---

*Phase: 11-simplified-datenschutzerklaerung-clean-privacy-page-with-strato-mention-and-no-tracking-transparency*
*Context gathered: 2026-02-25*
