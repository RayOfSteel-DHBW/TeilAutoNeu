---
phase: 03-homepage-membership-funnel
plan: 02
subsystem:
  content
tags: [membership, phone-cta, funnel, tera-templates]

# Dependency graph
requires:
  - Phase 2: Core UX & Navigation (base templates, brand styling)
provides:
  - Membership page with 3-step join flow and phone-only CTA
  - Phone number placement restricted to membership context
affects:
  - Phase 6: Quality sweep (copy review, link checks)

# Tech tracking
tech-stack:
  added: []
  patterns: [Tera template extends base.html with block main content]

key-files:
  created: []
  modified: [site/src/mitglied-werden.html]

key-decisions:
  - "Generic CTA wording: Ueberzeugt? Melden Sie sich bei uns"
  - "Default call hours: Mo-Fr 09:00-12:00 Uhr"

patterns-established:
  - "Phone CTA appears only on membership page, never on homepage"

# Metrics
duration: 5min
completed: 2026-02-08
---

# Phase 03 Plan 02: Membership Path and Phone-Only CTA Summary

**Mitglied-werden page with 3-step join flow, expectations section, and phone-only CTA at 07473-922202.**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-08T17:30:00Z
- **Completed:** 2026-02-08T17:35:00Z
- **Tasks:** 3 (1 checkpoint + 2 auto)
- **Files modified:** 1

## Accomplishments

- Checkpoint decision: generic CTA wording with default Mo-Fr 09:00-12:00 hours
- 3-step flow: Anrufen, Kennenlernen, Losfahren with numbered cards
- Was Sie wissen sollten section with expectations (Mitgliedsmodell, Stationen, telefonische Buchung, Kostenstruktur)
- Phone CTA block with 07473-922202 and call hours
- No forms, no email addresses, no online signup

## Task Commits

Each task was committed atomically:

1. **Checkpoint: Phone CTA wording decision** - User selected generic wording
2. **Task 2+3: Rebuild membership page + verify build** - `d8f548e` (feat)

**Plan metadata:** (committed with plan completion)

## Files Created/Modified

- `site/src/mitglied-werden.html` - Full membership page with steps, expectations, and phone CTA

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Generic CTA wording | User preferred "Ueberzeugt? Melden Sie sich bei uns" over specific call-to-action |
| Default hours Mo-Fr 09:00-12:00 | Placeholder until owner confirms exact availability |

## Deviations from Plan

None - plan executed as written with user's CTA wording decision.

## Next Phase Readiness

No blockers. Membership page complete and phone CTA correctly scoped to this page only.
