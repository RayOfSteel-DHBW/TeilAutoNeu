---
phase: 03-homepage-membership-funnel
plan: 01
subsystem:
  content
tags: [homepage, hero, value-prop, local-seo, tera-templates]

# Dependency graph
requires:
  - Phase 2: Core UX & Navigation (base templates, brand styling)
provides:
  - Complete homepage with hero, value narrative, and local-area messaging
  - CTA funnel pointing to membership page
affects:
  - Phase 3 Plan 03: FAQ accordion content update (homepage includes accordion)
  - Phase 6: SEO & Quality (local search copy established)

# Tech tracking
tech-stack:
  added: []
  patterns: [Tera template extends base.html with block main content]

key-files:
  created: []
  modified: [site/src/index.html]

key-decisions:
  - "Intro copy made persona-inclusive rather than savings-only focused"
  - "Fixed brand casing from Teilauto to teilAuto in intro paragraph"

patterns-established:
  - "Homepage sections: hero, value cards, teaser, FAQ include"

# Metrics
duration: 5min
completed: 2026-02-08
---

# Phase 03 Plan 01: Homepage Content and Persona-Inclusive Narrative Summary

**Homepage hero, value cards, local-area SEO copy, and membership CTA — persona-inclusive messaging without phone number.**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-08T17:25:00Z
- **Completed:** 2026-02-08T17:30:00Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- Finalized homepage hero with static headline and persona-inclusive intro copy
- Ensured local place names (Moessingen, Belsen, Talheim, Oeschingen) for SEO
- CTA "Mehr erfahren" links to mitglied-werden.html with no phone number
- 3 value highlight cards covering savings, flexibility, and local community
- "So funktioniert teilAuto" teaser paragraph pointing to membership page
- FAQ accordion partial included at page end

## Task Commits

Each task was committed atomically:

1. **Task 1+2: Build homepage hero and narrative sections + verify build** - `8791f48` (feat)

**Plan metadata:** (committed with plan completion)

## Files Created/Modified

- `site/src/index.html` - Full homepage layout with hero, value cards, teaser, FAQ include

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Persona-inclusive intro copy | Original stub was savings-only; broadened to appeal to all 6 personas |
| Brand casing fix | Changed "Teilauto" to "teilAuto" per UX-04 brand casing rule |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed brand casing "Teilauto" to "teilAuto"**
- **Found during:** Task 1
- **Issue:** Phase 2 stub used incorrect casing "Teilauto" in intro text
- **Fix:** Changed to "teilAuto" per brand casing guardrail UX-04
- **Files modified:** site/src/index.html
- **Commit:** 8791f48

## Next Phase Readiness

No blockers. Homepage structure ready for FAQ content update (03-03) and provides the anchor for membership page CTA flow (03-02).
