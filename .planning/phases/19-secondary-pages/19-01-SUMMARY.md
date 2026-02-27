---
phase: 19-secondary-pages
plan: 01
status: complete
started: 2026-02-27
completed: 2026-02-27
---

# Plan 19-01 Summary: Reframe geschaeftskunden, replace ueber-uns text, fix mitglied-werden identity

## What Was Built

Fixed content framing on three secondary pages per joint review issues R24-R27 and R29-R31:

1. **geschaeftskunden.html (R24, R25, R26):** "Kosteneinsparungen" renamed to "Günstig" with value-first messaging; "Nachhaltigkeit" card replaced with organizational relief ("Wir kümmern uns um alles rund ums Auto"); sustainability mention folded into "Einfache Verwaltung" card; personal phone CTA section added at page bottom with 07473-922202 and hours.

2. **ueber-uns.html (R27):** Intro paragraph uses owner's authentic voice ("teilAuto Mössingen, das sind wir..."); "Unsere Geschichte" section now contains owner's backstory (Ökostadt Tübingen, year 2000, 60+ Fahrtberechtigte); "Wie wir arbeiten" uses owner's operations text with corrected availability (Mo-Fr 09:00-12:00 instead of "rund um die Uhr"); BCS/Quernutzung section preserved verbatim; membership count disclaimer removed.

3. **mitglied-werden.html (R29, R30, R31):** Dual-purpose H1 ("So funktioniert teilAuto -- und so werden Sie Mitglied"); page title and og:title updated; H2 with id="so-funktionierts" added before how-it-works steps; H2 with id="mitglied-werden" anchors the join section; how-it-works steps keep filled green circles; join steps use outlined green circles; step card headings demoted from H2 to H3 for proper hierarchy.

## Self-Check: PASSED

All verification checks pass:
- geschaeftskunden: "Günstig" present, "kümmern uns" present, phone CTA present, "Kosteneinsparungen" removed
- ueber-uns: "Buchungszentrale" present, "rund um die Uhr" absent, BCS section preserved
- mitglied-werden: id="mitglied-werden" present, id="so-funktionierts" present, 3 outlined circles for join steps
- `npm run build` succeeds without errors
- Puppeteer screenshots confirm all three pages clean at 1280px and 375px

## Commits

1. `ac29851` — fix(19-01): reframe geschaeftskunden messaging and add phone CTA (R24, R25, R26)
2. `0b75a8f` — fix(19-01): replace ueber-uns with owner's authentic text (R27)
3. `ea86fbe` — fix(19-01): resolve mitglied-werden identity and visual differentiation (R29, R30, R31)

## Key Files

### key-files.created
- `.planning/phases/19-secondary-pages/19-01-SUMMARY.md`

### key-files.modified
- `site/src/geschaeftskunden.html`
- `site/src/ueber-uns.html`
- `site/src/mitglied-werden.html`

## Deviations

None. All changes followed the plan exactly.

## Issues Encountered

None.
