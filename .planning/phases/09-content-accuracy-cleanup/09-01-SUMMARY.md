---
phase: 09-content-accuracy-cleanup
plan: 09-01
subsystem: ui

tags: [html, seo, og-tags, content-cleanup, carsharing]

# Dependency graph
requires:
  - phase: 06-trust-legal-seo-quality
    provides: legal pages (impressum.html, datenschutz.html) with phone numbers in correct legal context
  - phase: 03-homepage-membership-funnel
    provides: mitglied-werden.html as the correct home for phone CTAs
provides:
  - Phone CTA blocks removed from ueber-uns.html and geschaeftskunden.html
  - OG tag deduplication across datenschutz.html, geschaeftskunden.html, impressum.html, ueber-uns.html
  - nachhaltig.html orphaned stub deleted
  - 5 unreferenced images removed (bergrutsch.jpg, car.png, coins.png, phone.png, talogo.svg)
  - Sustainability CO2-Reduktion sentence added to geschaeftskunden.html Nachhaltigkeit card
affects: [10-launch-prep, SEO audits, OG tag validation]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "OG image/type/locale provided globally by base.html; page head blocks only contain og:title, og:description, og:url"
    - "Phone number (07473-922202) appears only in membership/legal context: mitglied-werden.html, impressum.html, datenschutz.html"

key-files:
  created: []
  modified:
    - site/src/ueber-uns.html
    - site/src/geschaeftskunden.html
    - site/src/datenschutz.html
    - site/src/impressum.html
  deleted:
    - site/src/nachhaltig.html
    - site/public/img/bergrutsch.jpg
    - site/public/img/car.png
    - site/public/img/coins.png
    - site/public/img/phone.png
    - site/public/img/talogo.svg

key-decisions:
  - "Phone CTA blocks removed cleanly from ueber-uns.html and geschaeftskunden.html — no replacement CTAs added (CONT-10)"
  - "og:image, og:type, og:locale removed from 4 page head blocks — base.html provides these globally (SEO-01/SEO-02)"
  - "nachhaltig.html deleted (7-line stub, ASCII digraph title, no inbound links)"
  - "CO2-Reduktion sentence appended to Nachhaltigkeit card on geschaeftskunden.html (slightly stronger sustainability angle for Firmenkunden)"

patterns-established:
  - "OG global pattern: base.html owns og:image/type/locale; pages own og:title/description/url"
  - "Phone number scope: restrict to membership-conversion and legal-contact contexts only"

requirements-completed: [CONT-10, CONT-09, CONT-03, QUAL-03, QUAL-05, SEO-01, SEO-02]

# Metrics
duration: 2min
completed: 2026-02-25
---

# Phase 9 Plan 1: Content Accuracy Cleanup Summary

**Removed misplaced phone CTAs from ueber-uns and geschaeftskunden, deduplicated OG tags across 4 pages, deleted nachhaltig.html stub and 5 orphan images — closing 7 v1.0 audit requirement gaps with zero false capability claims confirmed**

## Performance

- **Duration:** 2 min
- **Started:** 2026-02-25T18:59:59Z
- **Completed:** 2026-02-25T19:01:30Z
- **Tasks:** 3
- **Files modified:** 4 modified, 6 deleted

## Accomplishments

- Phone CTA blocks (border-brand-primary divs with 07473-922202) removed from ueber-uns.html and geschaeftskunden.html; phone now appears only in mitglied-werden.html, impressum.html, datenschutz.html
- OG tag deduplication: og:image, og:type, og:locale removed from head blocks of datenschutz.html, geschaeftskunden.html, impressum.html, ueber-uns.html (base.html provides these globally)
- nachhaltig.html (7-line stub with ASCII digraph "Moessingen" title) deleted; 5 unreferenced images removed
- Sustainability sentence "Dokumentieren Sie Ihren Beitrag zur CO2-Reduktion — ohne eigenen Fuhrpark." added to geschaeftskunden.html Nachhaltigkeit card
- All 8 remaining pages verified: meta descriptions present, OG tags clean, no false capability claims, all links lowercase, build passes

## Task Commits

Each task was committed atomically:

1. **Task 1: Remove phone CTA blocks from ueber-uns.html and geschaeftskunden.html** - `0373b29` (fix)
2. **Task 2: Deduplicate OG tags and delete orphaned files** - `cbc92f3` (fix)
3. **Task 3: Verify factual claims, link integrity, and build** - verification-only, no file changes

**Plan metadata:** (docs commit — see final commit hash after state updates)

## Files Created/Modified

- `site/src/ueber-uns.html` — Phone CTA block removed; og:image/type/locale removed from head block
- `site/src/geschaeftskunden.html` — Phone CTA block removed; CO2-Reduktion sentence added to Nachhaltigkeit card; og:image/type/locale removed from head block
- `site/src/datenschutz.html` — og:image/type/locale removed from head block
- `site/src/impressum.html` — og:image/type/locale removed from head block
- `site/src/nachhaltig.html` — DELETED (orphaned stub, no inbound links)
- `site/public/img/bergrutsch.jpg` — DELETED (no references in codebase)
- `site/public/img/car.png` — DELETED (no references in codebase)
- `site/public/img/coins.png` — DELETED (no references in codebase)
- `site/public/img/phone.png` — DELETED (no references in codebase)
- `site/public/img/talogo.svg` — DELETED (no references in codebase)

## Decisions Made

- Phone CTA blocks removed cleanly — no replacement CTAs, no "Mehr erfahren" links added per locked decision
- OG global/page split confirmed: base.html owns og:image/type/locale; pages keep og:title/description/url
- CO2-Reduktion sentence uses "&ndash;" HTML entity per project HTML conventions

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 9 Plan 1 complete; 7 requirement gaps closed (CONT-10, CONT-09, CONT-03, QUAL-03, QUAL-05, SEO-01, SEO-02)
- Site builds cleanly with 8 pages (nachhaltig.html removed from source count)
- Phase 10 (Launch Prep) can proceed; adam.png and mokka.png still awaiting owner-supplied rights-clear photos

---
*Phase: 09-content-accuracy-cleanup*
*Completed: 2026-02-25*
