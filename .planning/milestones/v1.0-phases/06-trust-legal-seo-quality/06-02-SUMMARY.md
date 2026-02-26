---
phase: 06-trust-legal-seo-quality
plan: 06-02
subsystem: legal-pages
tags: [impressum, datenschutz, dsgvo, ddg, legal-compliance, german-law]
dependency_graph:
  requires: [05-03]
  provides: [impressum-page, datenschutz-page, legal-compliance]
  affects: [site/src/impressum.html, site/src/datenschutz.html]
tech_stack:
  added: []
  patterns: [tera-template, tailwind-max-w-2xl, amber-placeholder-badge]
key_files:
  created: []
  modified:
    - site/src/impressum.html
    - site/src/datenschutz.html
decisions:
  - "DDG not TMG: Impressum cites §5 DDG (Digitale-Dienste-Gesetz), not the repealed §5 TMG"
  - "No ODR link: EU ODR platform shut down permanently July 20, 2025 — link omitted"
  - "Amber badge placeholders: Handelsregister number and USt-IdNr marked with amber inline badges for owner visibility"
  - "OpenFreeMap disclosure: IP transfer to tile servers disclosed per Art. 13 DSGVO despite OpenFreeMap not logging IPs"
  - "Forward-looking GA section: Datenschutz includes planned V2 Google Analytics as consent-gated future feature"
  - "STRATO retention: No specific log retention duration stated; deferred to STRATO's own data processing terms"
metrics:
  duration: "2 minutes"
  completed: "2026-02-24"
  tasks_completed: 2
  files_modified: 2
---

# Phase 6 Plan 02: Legal Pages (Impressum & Datenschutz) Summary

**One-liner:** §5 DDG Impressum with amber placeholders and Art. 13 DSGVO Datenschutzerklaerung covering STRATO logs, OpenFreeMap tiles, and forward-looking Google Analytics consent disclosure.

## What Was Built

Two legally compliant pages replacing bare stubs:

**Impressum (`site/src/impressum.html`):**
- Full Tera template extending base.html
- References §5 DDG (Digitale-Dienste-Gesetz) — NOT the repealed §5 TMG
- Known data filled in: teilAuto Moessingen e.K., Ralf Stahl, Dreifuerstensteinstrasse 8/1, 72116 Moessingen, 07473-922202
- Handelsregister and USt-IdNr marked with amber badge-style inline spans (`bg-amber-100 text-amber-600`)
- No ODR platform link (platform shut down July 2025)
- Includes Verantwortlich fuer den Inhalt section (§18 Abs. 2 MStV)
- OG meta tags and meta description

**Datenschutzerklaerung (`site/src/datenschutz.html`):**
- Full Tera template extending base.html
- Art. 13 DSGVO compliant, site-specific (not a generic template)
- Covers: responsible party, server logs (STRATO AG + Art. 6 Abs. 1 lit. f), OpenFreeMap map tiles (connection data + Art. 6 Abs. 1 lit. f), data subject rights (Art. 15-21), complaint right (LfDI Baden-Wuerttemberg)
- Forward-looking section: planned Google Analytics for V2, consent-gated via cookie banner (Art. 6 Abs. 1 lit. a)
- Does NOT mention: Facebook, contact forms, social media embeds, or any service not used
- External links to OpenFreeMap and LfDI have aria-label and rel="noopener noreferrer"
- OG meta tags and meta description

**Footer verification:** `site/templates/partials/footer.html` already contained both `href="impressum.html"` and `href="datenschutz.html"` — no changes needed.

## Commits

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Create Impressum page with § 5 DDG compliance | 85a8c0f | site/src/impressum.html |
| 2 | Create Datenschutzerklaerung page with Art. 13 DSGVO compliance | 2f7e684 | site/src/datenschutz.html |

## Verification Results

All automated checks passed:
- `grep "DDG" build/dist/impressum.html` — PASS (§5 DDG cited in meta description and page text)
- `grep -c "TMG" build/dist/impressum.html` returns `0` — PASS (no TMG references)
- `grep "noch offen" build/dist/impressum.html` — PASS (3 amber placeholders present)
- `grep -c "ODR" build/dist/impressum.html` returns `0` — PASS (no ODR link)
- `grep "Art. 6" build/dist/datenschutz.html` — PASS (3 legal basis references)
- `grep "OpenFreeMap" build/dist/datenschutz.html` — PASS (4 mentions in dedicated section)
- `grep "Geplante Webanalyse" build/dist/datenschutz.html` — PASS (forward-looking section present)
- `grep -c "Facebook" build/dist/datenschutz.html` returns `0` — PASS (no unused service mentioned)
- Footer links confirmed in `build/dist/index.html`

## Deviations from Plan

None — plan executed exactly as written. The address (Dreifuerstensteinstrasse 8/1) was known from references/EXTRACTED.md as stated in the plan. Footer links were already present and correct.

## Requirements Fulfilled

- LEGAL-01: Impressum page with §5 DDG content (name, address, contact, register info with placeholders)
- LEGAL-02: Datenschutzerklaerung with DSGVO-compliant privacy policy (server logs, OpenFreeMap tiles)
- LEGAL-03: DSGVO-compliant analytics concept — forward-looking V2 GA section in Datenschutz, no tracking code in V1

## Self-Check

Files exist:
- `site/src/impressum.html` — FOUND
- `site/src/datenschutz.html` — FOUND
- `site/build/dist/impressum.html` — FOUND (after build)
- `site/build/dist/datenschutz.html` — FOUND (after build)

Commits exist:
- `85a8c0f` — FOUND (feat(06-02): create Impressum page)
- `2f7e684` — FOUND (feat(06-02): create Datenschutzerklaerung page)

## Self-Check: PASSED
