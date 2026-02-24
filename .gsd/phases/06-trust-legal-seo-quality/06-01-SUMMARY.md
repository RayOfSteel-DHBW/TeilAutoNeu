---
phase: 06-trust-legal-seo-quality
plan: 06-01
subsystem: ui
tags: [tera, tailwind, content, navigation, carsharing, seo, aria]

# Dependency graph
requires:
  - phase: 05-fleet-locations
    provides: fahrzeuge.html with Quernutzung placeholder and map section
provides:
  - Full Ueber uns page with founders (Ralf & Ursula Stahl), history, operations model, BCS community
  - Full Fuer Firmen (geschaeftskunden.html) page with 4 benefit cards and business-specific terms
  - Expanded Quernutzung section on Fahrzeuge page framing 2-vehicle fleet as 200+ regional network
  - Restructured primary nav (4 items: Preise | Fahrzeuge | Fuer Firmen | Ueber uns)
  - Sustainability messaging distributed naturally (not standalone page)
affects: [06-02-legal-pages, 06-03-seo, 06-04-quality-sweep]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Phone CTA block: rounded-3xl border-2 border-brand-primary bg-brand-primary/5 p-6 text-center — reused from mitglied-werden.html"
    - "Benefit card grid: grid gap-6 md:grid-cols-2 with rounded-2xl border border-brand-muted bg-brand-surface p-5 children"
    - "data-track / data-track-page / data-track-label attributes on all CTAs for future analytics (TRACK-01)"
    - "SEO block head per page: meta description + 6 OG tags in {% block head %}"

key-files:
  created: []
  modified:
    - site/src/ueber-uns.html
    - site/src/geschaeftskunden.html
    - site/src/fahrzeuge.html
    - site/templates/partials/header.html

key-decisions:
  - "Nav reduced to 4 items (Preise | Fahrzeuge | Fuer Firmen | Ueber uns); Nachhaltigkeit, Startseite, Mitglied werden removed from primary nav"
  - "Fuer Firmen Kaution amount marked noch offen (amber badge) — owner to confirm before launch"
  - "Mitgliederzahl stated as 'ueber 60 Mitglieder' with editorial note for owner verification"
  - "Sustainability distributed: About (operations model), Fahrzeuge (Mokka E note), Fuer Firmen (Nachhaltigkeit as practical benefit) — no standalone page"

patterns-established:
  - "Phone CTA block pattern: border-2 border-brand-primary bg-brand-primary/5 centered block — use on all content pages"
  - "Noch offen amber badge: inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700"
  - "data-track on every CTA link for future analytics hookup"

requirements-completed: [CONT-03, CONT-05, CONT-06, CONT-09]

# Metrics
duration: 3min
completed: 2026-02-24
---

# Phase 06 Plan 01: Trust Content Pages and Navigation Summary

**Trust content pages (Ueber uns, Fuer Firmen) built from stubs with founder story, 4-benefit business pitch, expanded Quernutzung network framing, and nav restructured to 4 items removing Nachhaltigkeit**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-24T13:17:55Z
- **Completed:** 2026-02-24T13:20:53Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments

- Ueber uns page: full origin story with Ralf and Ursula Stahl, history section (Oekostadt Tuebingen roots), operations model (60+ members, part-time/personal), BCS/DACHverband community membership
- Fuer Firmen page: 4 benefit cards in responsive md:grid-cols-2 grid (Kosteneinsparungen, Flexibilitaet, Nachhaltigkeit framed practically, Einfache Verwaltung), business-specific terms section with noch-offen kaution badge, phone CTA
- Fahrzeuge page: Quernutzung section expanded from 2-line placeholder to full section with BCS network framing (200+ partner vehicles), practical Transporter example, billing note; Mokka E sustainability note added; vehicle alt text improved for screen reader users
- Navigation restructured: Preise | Fahrzeuge | Fuer Firmen | Ueber uns — exactly 4 items, no Nachhaltigkeit, Startseite, or Mitglied werden in primary nav

## Task Commits

1. **Task 1: Build Ueber uns, Fuer Firmen pages and update navigation** - `1654f81` (feat)
2. **Task 2: Expand Quernutzung section and add sustainability note to Fahrzeuge** - `4a4117d` (feat)

## Files Created/Modified

- `site/src/ueber-uns.html` - Full content page: founders, history, operations, BCS community, phone CTA, SEO/OG tags
- `site/src/geschaeftskunden.html` - Full content page: 4 benefit cards, business-specific section, phone CTA, SEO/OG tags
- `site/src/fahrzeuge.html` - Expanded Quernutzung section (BCS/200+ vehicles), Mokka E electric note, improved alt text
- `site/templates/partials/header.html` - Nav reduced to 4 items; Geschaeftskunden renamed to Fuer Firmen; aria-label added to hamburger button

## Decisions Made

- Kaution amount for legal entities (GmbH, UG, e.K.) marked "noch offen" with amber badge — owner must confirm exact figure before launch
- Mitgliederzahl written as "aktuell ueber 60 Mitglieder" with an editorial note ("Hinweis: Die genaue Mitgliederzahl wird vor dem Launch durch den Inhaber bestaetigt") — matches must_haves spec
- Sustainability content is distributed across pages naturally: About (operations model framing), Fahrzeuge (Mokka E electric note), Fuer Firmen (practical CO2 benefit) — no standalone Nachhaltigkeit page created

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Trust content pages complete and ready for SEO additions (06-03) and quality sweep (06-04)
- Legal pages (Impressum, Datenschutz) still stubs — ready for 06-02
- nachhaltig.html still exists as a file (no nav link) — can stay as is to prevent 404 for anyone with a bookmark
- Owner actions needed before launch: confirm member count (60+), confirm kaution amount for business members, confirm Handelsregister number for Impressum

## Self-Check: PASSED

- FOUND: site/src/ueber-uns.html
- FOUND: site/src/geschaeftskunden.html
- FOUND: site/src/fahrzeuge.html
- FOUND: site/templates/partials/header.html
- FOUND: .gsd/phases/06-trust-legal-seo-quality/06-01-SUMMARY.md
- FOUND: commit 1654f81
- FOUND: commit 4a4117d

---
*Phase: 06-trust-legal-seo-quality*
*Completed: 2026-02-24*
