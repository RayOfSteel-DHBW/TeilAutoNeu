---
phase: 07-german-text-umlaut-fix
plan: 07-01
subsystem: ui
tags: [utf-8, umlauts, i18n, german, text-quality]

# Dependency graph
requires:
  - phase: 06-trust-legal-seo-quality
    provides: All HTML/JS source files with German text content
provides:
  - Correct UTF-8 umlauts in all visible German text across 13+ files
  - Pricing JSON with correct German characters
affects: [08-mobile-nav, 09-content-cleanup, 10-content-polish]

# Tech tracking
tech-stack:
  added: []
  patterns: [UTF-8 umlauts in all German text, ASCII digraphs only in URLs/filenames/identifiers]

key-files:
  created: []
  modified:
    - site/src/index.html
    - site/src/fahrzeuge.html
    - site/src/datenschutz.html
    - site/src/ueber-uns.html
    - site/src/geschaeftskunden.html
    - site/src/preise.html
    - site/src/mitglied-werden.html
    - site/src/impressum.html
    - site/public/js/pricing.js
    - site/public/js/fleet-map.js
    - site/public/data/pricing.json
    - site/templates/base.html
    - site/templates/accordion.html
    - site/templates/partials/header.html
    - site/templates/partials/footer.html

key-decisions:
  - "Only visible text content, meta descriptions, OG tags, aria-labels, and JS string literals corrected; filenames, URLs, hrefs, CSS classes, element IDs, data attributes, and JS identifiers left unchanged."
  - "nachhaltig.html excluded as dead stub (being removed in Phase 9)."
  - "pricing.json also corrected as its string values render as visible text via pricing.js."
  - "Place name Oeschingen corrected to Oeschingen in visible text only (file references stay)."

patterns-established:
  - "UTF-8 umlauts: All German text must use proper umlauts (ae->ae, oe->oe, ue->ue). Only code identifiers and URLs may use ASCII digraphs."

requirements-completed: [UX-06, QUAL-01, QUAL-02]

# Metrics
duration: 14min
completed: 2026-02-24
---

# Phase 7 Plan 01: Replace ASCII Digraphs with UTF-8 Umlauts Summary

**Replaced ~280 ASCII digraph substitutions with proper UTF-8 umlauts across 15 files (8 HTML pages, 2 JS files, 1 JSON data file, 4 templates) while preserving all URLs, filenames, and code identifiers.**

## Performance

- **Duration:** 14 min
- **Started:** 2026-02-24T16:48:02Z
- **Completed:** 2026-02-24T17:02:51Z
- **Tasks:** 4
- **Files modified:** 15

## Accomplishments
- All 8 HTML source pages corrected: index, fahrzeuge, datenschutz, ueber-uns, geschaeftskunden, preise, mitglied-werden, impressum
- All shared templates corrected: base.html, accordion.html, header partial, footer partial
- JS files corrected: pricing.js (German string literals), fleet-map.js (location names, aria-labels)
- pricing.json data file corrected (disclaimer, class notes, example outputs, quernutzung text)
- Build verified successful after all corrections

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix umlauts in HTML and template files** - `b738351` (feat)
2. **Task 2: Fix umlauts in JS files** - `fcd9c4c` (feat)
3. **Task 3: Fix remaining digraphs found in verification sweep** - `1c7e20e` (fix)

## Files Created/Modified
- `site/src/index.html` - Homepage text, meta tags, hero content
- `site/src/fahrzeuge.html` - Vehicle descriptions, location names, aria-labels
- `site/src/datenschutz.html` - Legal text (privacy policy), rights section
- `site/src/ueber-uns.html` - About page text, history, community section
- `site/src/geschaeftskunden.html` - Business customer page, benefits, conditions
- `site/src/preise.html` - Pricing page intro text, meta tags
- `site/src/mitglied-werden.html` - Membership page, steps, CTA
- `site/src/impressum.html` - Legal imprint, address, responsible person
- `site/public/js/pricing.js` - German string literals (labels, error messages)
- `site/public/js/fleet-map.js` - Location names, descriptions, aria-labels
- `site/public/data/pricing.json` - Disclaimer, class notes, example outputs
- `site/templates/base.html` - Default title, og:site_name
- `site/templates/accordion.html` - FAQ heading, answer text
- `site/templates/partials/header.html` - Site name, nav labels (Menue->Menu, Fuer->Fur, Ueber->Uber)
- `site/templates/partials/footer.html` - Footer site name and city

## Decisions Made
- Only corrected visible text content, meta descriptions, OG tags, aria-labels, and JS/JSON string literals
- Preserved all file names (ueber-uns.html), hrefs, og:url values, mailto addresses, data-track-* attributes, CSS classes, HTML IDs, and JS variable/function names
- nachhaltig.html excluded (dead stub, being removed in Phase 9)
- pricing.json included despite not being in original plan scope (Rule 2: its values render as visible text)
- "Quernutzung" left as-is everywhere (compound word Quer+nutzung, not an umlaut digraph)
- "Umsatzsteuer" left as-is (compound word Umsatz+steuer, not an umlaut digraph)
- www.baden-wuerttemberg.datenschutz.de visible link text left as-is (it is a URL reference)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Fixed pricing.json ASCII digraphs**
- **Found during:** Task 4 (verification sweep)
- **Issue:** pricing.json contains German text rendered as visible content via pricing.js, but was not in plan scope
- **Fix:** Corrected all digraphs in disclaimer, class notes, example outputs, and quernutzung text
- **Files modified:** site/public/data/pricing.json
- **Verification:** Build passes, grep confirms no remaining digraphs in built output
- **Committed in:** 1c7e20e (Task 3 commit)

---

**Total deviations:** 1 auto-fixed (1 missing critical functionality)
**Impact on plan:** Essential for correctness - pricing.json text renders directly to users. No scope creep.

## Issues Encountered
- Initial pass missed 5 instances across preise.html, mitglied-werden.html, datenschutz.html, and fahrzeuge.html. Caught by comprehensive grep verification sweep and fixed in Task 3 commit.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All German text now uses proper UTF-8 umlauts
- Phase 8 (Mobile Navigation & Responsive Layout) can proceed
- Phase 9 (Content Accuracy & Dead Code Cleanup) can proceed in parallel

## Self-Check: PASSED

- All 15 modified files verified present on disk
- All 3 task commits verified in git history (b738351, fcd9c4c, 1c7e20e)
- Build verified successful after all changes

---
*Phase: 07-german-text-umlaut-fix*
*Completed: 2026-02-24*
