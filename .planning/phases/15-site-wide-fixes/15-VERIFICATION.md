---
phase: 15-site-wide-fixes
status: passed
verified: 2026-02-27
verifier: orchestrator-inline
requirement_ids: [RFIX-01]
---

# Phase 15: Site-Wide Fixes — Verification

## Phase Goal
Fix global visual/content issues that affect multiple pages — card borders, placeholder standardization, and navigation completeness.

## Requirement Coverage

| Requirement | Description | Status |
|-------------|-------------|--------|
| RFIX-01 | Site-wide fixes: card borders/shadows visible, placeholders standardized, mitglied-werden in nav (R2, R23, R28) | PASS |

## Must-Have Verification

### Truths

| # | Truth | Verified | Evidence |
|---|-------|----------|----------|
| 1 | Card borders are visibly distinct from the background on all pages | PASS | 37 occurrences of border-brand-primary/20 across 6 HTML files; Puppeteer screenshots confirm visible borders at 1280px and 375px |
| 2 | No 'noch offen' text remains anywhere in source files — all replaced with 'TODO' | PASS | grep -r "noch offen" site/src/ site/public/ returns 0 matches |
| 3 | Mitglied werden link appears in navigation on every page as a styled CTA pill | PASS | header.html partial contains CTA; confirmed in built output on index.html (line 66), fahrzeuge.html (line 69), and all other pages |
| 4 | Navigation CTA appears in both desktop and mobile nav menus | PASS | Puppeteer screenshots: desktop shows pill in horizontal nav bar; mobile shows full-width pill in expanded hamburger menu |

### Artifacts

| # | Path | Provides | Contains | Verified |
|---|------|----------|----------|----------|
| 1 | site/src/index.html | Card borders using border-brand-primary/20 | border-brand-primary/20 | PASS (5 occurrences) |
| 2 | site/src/fahrzeuge.html | Card borders using border-brand-primary/20 | border-brand-primary/20 | PASS (10 occurrences) |
| 3 | site/src/geschaeftskunden.html | Card borders + TODO placeholders | border-brand-primary/20 | PASS (6 occurrences) |
| 4 | site/src/mitglied-werden.html | Card borders using border-brand-primary/20 | border-brand-primary/20 | PASS (8 occurrences) |
| 5 | site/src/ueber-uns.html | Card borders using border-brand-primary/20 | border-brand-primary/20 | PASS (3 occurrences) |
| 6 | site/src/preise.html | Card borders using border-brand-primary/20 | border-brand-primary/20 | PASS (5 occurrences) |
| 7 | site/src/impressum.html | TODO placeholders replacing noch offen | TODO | PASS (3 badges) |
| 8 | site/public/data/pricing.json | TODO placeholders replacing noch offen | TODO | PASS (3 values) |
| 9 | site/public/js/pricing.js | TODO detection and badge rendering | TODO | PASS (isTodo function, "TODO" badge text) |
| 10 | site/templates/partials/header.html | Mitglied werden CTA in desktop and mobile nav | mitglied-werden.html | PASS |

### Key Links

| # | From | To | Via | Pattern | Verified |
|---|------|----|-----|---------|----------|
| 1 | site/templates/partials/header.html | mitglied-werden.html | anchor href in nav | href="mitglied-werden.html" | PASS |
| 2 | site/public/js/pricing.js | site/public/data/pricing.json | fetch and placeholder detection | TODO | PASS |

## Success Criteria Check

| # | Criterion | Status |
|---|-----------|--------|
| 1 | Card borders and shadows are visible and consistent across all pages | PASS |
| 2 | All "noch offen" placeholders replaced with standardized TODO markers | PASS |
| 3 | mitglied-werden.html appears in navigation as a prominent CTA | PASS |
| 4 | Puppeteer screenshots confirm changes at both widths | PASS |

## Build Verification

- `npm run build` completes without errors
- Zero grep hits for "noch offen" in site/src/ and site/public/
- Zero grep hits for "border-brand-muted" in site/src/
- All 6 HTML files with cards contain border-brand-primary/20
- Built output contains mitglied-werden CTA on every page

## Visual Verification (Puppeteer)

Screenshots taken at:
- index.html at 1280px: Nav CTA visible, hero section clean
- index.html at 375px: Mobile nav with CTA pill, hero section clean
- index.html cards section: Card borders clearly visible with green tint
- preise.html at 1280px: TODO badges displayed for placeholder values, card borders visible
- impressum.html at 1280px: [TODO] badges for Handelsregister and USt-ID fields

## Result

**PASSED** — All 4 must-have truths verified, all 10 artifact checks pass, all 2 key links confirmed, all 4 success criteria met. Phase 15 goal achieved.

---
*Verified: 2026-02-27*
