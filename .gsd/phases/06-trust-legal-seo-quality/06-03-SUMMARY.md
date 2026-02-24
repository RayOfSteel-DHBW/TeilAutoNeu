---
phase: 06-trust-legal-seo-quality
plan: 06-03
subsystem: seo-quality
tags: [seo, open-graph, meta-description, tracking, copyright, accessibility, quality-sweep]

# Dependency graph
requires:
  - phase: 06-02
    provides: impressum.html and datenschutz.html with OG tags already added
  - phase: 06-01
    provides: ueber-uns.html and geschaeftskunden.html with OG tags already added
provides:
  - OG image PNG (1200x630) at site/public/img/og-image.png
  - Default OG fallback tags in base.html (og:type, og:locale, og:site_name, og:image)
  - Per-page meta description and OG tags on all 8 pages
  - data-track attributes on all phone CTAs and nav CTAs
  - data-scroll-milestone sentinels on index.html (hero-bottom, benefits-section, cta-visible)
  - FAQ accordion data-track/data-track-id on all 4 questions
  - CSS placeholder cards replacing copyright-flagged mokka.png and adam.png
  - Missing-images ledger at .gsd/phases/06-trust-legal-seo-quality/06-MISSING-IMAGES.md
affects: [06-04-quality-final]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "OG image: programmatically generated 1200x630 solid-green PNG via Node.js raw PNG writer (no dependencies)"
    - "CSS vehicle placeholder card: flex h-40 items-center justify-center bg-brand-primary/5 with role=img + aria-label"
    - "Scroll milestone sentinels: <div data-scroll-milestone='name' aria-hidden='true' class='sr-only'></div>"
    - "FAQ tracking: data-track='faq-open' data-track-id='faq-N' on accordion header buttons"
    - "Phone CTA tracking: data-track='phone-cta' data-track-page='[page]' on tel: links"
    - "Nav CTA tracking: data-track='nav-cta' data-track-label='[destination]' on page-to-page links"

key-files:
  created:
    - site/public/img/og-image.png
    - .gsd/phases/06-trust-legal-seo-quality/06-MISSING-IMAGES.md
  modified:
    - site/templates/base.html
    - site/templates/accordion.html
    - site/src/index.html
    - site/src/preise.html
    - site/src/fahrzeuge.html
    - site/src/mitglied-werden.html

key-decisions:
  - "OG image created programmatically as solid-green 1200x630 PNG — no external dependencies, meets PNG requirement"
  - "mokka.png and adam.png replaced with CSS placeholder cards using existing SVG icons — resolves UX-03 copyright risk"
  - "Vehicle placeholder cards use role=img + aria-label for screen reader parity — critical given Ursula Stahl's visual impairment"
  - "Legal page phone links (impressum, datenschutz) not given data-track — they are contact info, not promotional CTAs"
  - "06-01 and 06-02 already added OG tags to ueber-uns, geschaeftskunden, impressum, datenschutz — no duplication needed"

patterns-established:
  - "CSS vehicle placeholder: h-40 flex items-center justify-center bg-brand-primary/5 rounded-2xl with SVG icon + role=img"
  - "Scroll milestone sentinels: data-scroll-milestone attribute on sr-only div at section boundaries"

requirements-completed: [SEO-01, SEO-02, SEO-03, SEO-04, TRACK-01, UX-03, QUAL-01, QUAL-02, QUAL-03, QUAL-05]

# Metrics
duration: 5min
completed: 2026-02-24
---

# Phase 06 Plan 03: SEO, Open Graph, Tracking and Quality Sweep Summary

**Per-page meta descriptions and Open Graph tags on all 8 pages, 1200x630 PNG OG image, data-track analytics hooks on all CTAs and FAQ toggles, copyright-flagged vehicle images replaced with CSS placeholder cards, and full quality sweep confirming no false claims, no broken links, correct heading hierarchy.**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-24T13:24:25Z
- **Completed:** 2026-02-24T13:29:22Z
- **Tasks:** 2
- **Files modified:** 8 (6 src/template, 1 image, 1 ledger)

## Accomplishments

### Task 1: SEO Meta Descriptions, Open Graph Tags and OG Image

- Created `site/public/img/og-image.png` — 1200x630 solid brand-green (#16a34a) PNG generated programmatically with Node.js raw PNG encoder (no npm dependencies). Verified as `PNG image data, 1200 x 630, 8-bit/color RGB, non-interlaced`.
- Added 4 default OG fallback tags to `base.html` BEFORE the `{% block head %}` slot: `og:type`, `og:locale`, `og:site_name`, `og:image` — these appear on every page as fallback.
- Added per-page `{% block head %}` with `meta name="description"` + `og:title`, `og:description`, `og:url` to:
  - `index.html` (new block, no existing head block)
  - `preise.html` (added to existing block with `pricing.js` script tag)
  - `fahrzeuge.html` (added to existing block with maplibre CSS/JS tags)
  - `mitglied-werden.html` (new block)
- `ueber-uns.html`, `geschaeftskunden.html`, `impressum.html`, `datenschutz.html` already had full OG tags from 06-01 and 06-02 — no changes needed.

All 8 pages verified in built output: every page has `og:title` and `meta name="description"`.

### Task 2: Quality Sweep — Tracking, Copyright, Semantic HTML, Links, Copy

**TRACK-01 — Data-track attributes:**
- `index.html`: "Mehr erfahren" button → `data-track="nav-cta" data-track-label="mehr-erfahren"`, "Mehr zur Mitgliedschaft" link → `data-track="nav-cta" data-track-label="mehr-zur-mitgliedschaft"`
- `mitglied-werden.html`: phone CTA → `data-track="phone-cta" data-track-page="mitglied-werden"`
- `accordion.html`: all 4 FAQ buttons → `data-track="faq-open" data-track-id="faq-1"` through `faq-4`
- Scroll milestone sentinels on `index.html`: `data-scroll-milestone="hero-bottom"`, `"benefits-section"`, `"cta-visible"`
- `ueber-uns.html` and `geschaeftskunden.html` already had phone-cta and nav-cta tracking from 06-01

**UX-03 — Copyright resolution:**
- `mokka.png` and `adam.png` img tags replaced with CSS placeholder cards in `fahrzeuge.html`
- Placeholder cards: `flex h-40 items-center justify-center rounded-2xl border bg-brand-primary/5` with `role="img"` and `aria-label` for screen reader parity
- SVG icon sprites from `cars/mokka-icon.svg` and `cars/adam-icon.svg` used as decorative visual (aria-hidden)
- Created `06-MISSING-IMAGES.md` ledger: 11 image assets documented with source, license, status, and owner action instructions

**Quality sweeps (all passed — nothing to fix):**
- QUAL-01/QUAL-02: No typos found (gegegeben, Moblitaetskonzept searched — clean)
- QUAL-03: No false claims found (24/7, rund um die Uhr, Free-floating, Online-Buchung, Online-Abschluss searched — clean)
- QUAL-05: No "Preise.html" (capital P) link bug found; all footer links verified correct
- SEO-04: Every page has exactly 1 H1; heading hierarchy H1 > H2 > H3 verified; skip link and main landmarks confirmed in base.html

## Task Commits

1. **Task 1: Add SEO meta descriptions, Open Graph tags and OG image to all pages** — `7bb4e03` (feat)
2. **Task 2: Quality sweep — tracking attributes, CSS vehicle placeholders, image ledger** — `7e43a25` (feat)

## Files Created/Modified

- `site/public/img/og-image.png` — 1200x630 solid-green PNG OG image (3.1 KB)
- `site/templates/base.html` — Default OG fallback tags added before block head
- `site/templates/accordion.html` — FAQ buttons updated with data-track/data-track-id
- `site/src/index.html` — New block head with meta/OG, data-track on CTAs, scroll milestone sentinels
- `site/src/preise.html` — Meta/OG tags added to existing block head (pricing.js preserved)
- `site/src/fahrzeuge.html` — Meta/OG tags added to existing block head, vehicle img → CSS placeholder cards
- `site/src/mitglied-werden.html` — New block head with meta/OG, data-track on phone CTA
- `.gsd/phases/06-trust-legal-seo-quality/06-MISSING-IMAGES.md` — 11-asset copyright ledger

## Decisions Made

- OG image generated as solid-green (#16a34a) 1200x630 PNG — functional brand colour, meets PNG format requirement, owner may supply a designed version with logo/text if desired
- mokka.png and adam.png replaced with CSS placeholder cards instead of being removed — maintains the vehicle presentation structure while resolving copyright risk; owner restores with real photos pre-launch
- Legal page phone links (impressum.html, datenschutz.html) intentionally omitted from data-track — these are contact information in legal context, not promotional CTAs; tracking them would be misleading
- Scroll milestone sentinels placed at section entry points (hero-bottom, benefits-section, cta-visible) — IntersectionObserver in V2 can trigger analytics at these boundaries without HTML changes

## Deviations from Plan

None — plan executed exactly as written. The 4 pages (ueber-uns, geschaeftskunden, impressum, datenschutz) already had OG tags from 06-01 and 06-02, so those were skipped as specified. Quality sweep found no issues to fix.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Owner Actions Required Before Launch

1. **Vehicle photos**: Supply rights-clear photos of Opel Mokka E and Opel Adam. See `06-MISSING-IMAGES.md` for instructions on restoring `<img>` tags once photos are available.
2. **Impressum placeholders**: Complete Handelsregister and USt-IdNr fields (amber badges in impressum.html).
3. **Member count**: Confirm "ueber 60 Mitglieder" figure (editorial note in ueber-uns.html).

## Self-Check: PASSED

Files exist:
- `site/public/img/og-image.png` — FOUND (3161 bytes, 1200x630 PNG)
- `site/templates/base.html` — FOUND (og:type/locale/site_name/image defaults added)
- `site/templates/accordion.html` — FOUND (data-track on all 4 buttons)
- `site/src/index.html` — FOUND (head block + scroll sentinels + data-track)
- `site/src/preise.html` — FOUND (meta/OG in existing head block)
- `site/src/fahrzeuge.html` — FOUND (meta/OG + CSS placeholder cards)
- `site/src/mitglied-werden.html` — FOUND (head block + phone CTA tracking)
- `.gsd/phases/06-trust-legal-seo-quality/06-MISSING-IMAGES.md` — FOUND

Commits exist:
- `7bb4e03` — FOUND (feat(06-03): add SEO meta descriptions, Open Graph tags and OG image)
- `7e43a25` — FOUND (feat(06-03): quality sweep - tracking attributes, CSS vehicle placeholders)

Build: PASSED (npm run build succeeds, no errors)

All 8 pages in build/dist/ have og:title and meta description tags.

---
*Phase: 06-trust-legal-seo-quality*
*Completed: 2026-02-24*
