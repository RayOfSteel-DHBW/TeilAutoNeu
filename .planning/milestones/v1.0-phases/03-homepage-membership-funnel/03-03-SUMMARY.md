---
phase: 03-homepage-membership-funnel
plan: 03
subsystem:
  content
tags: [faq, accordion, vanilla-js, tera-templates]

# Dependency graph
requires:
  - Phase 3 Plan 01: Homepage includes accordion partial
provides:
  - Working FAQ accordion with single-open behavior
  - Reusable accordion.js loaded from base template
affects:
  - Phase 6: Quality sweep (FAQ copy review)

# Tech tracking
tech-stack:
  added: []
  patterns: [External vanilla JS for accordion behavior loaded via defer]

key-files:
  created: [site/public/js/accordion.js]
  modified: [site/templates/accordion.html, site/templates/base.html]

key-decisions:
  - "4 FAQ items retained (within 2-4 range specified by plan)"

patterns-established:
  - "Accordion JS externalized and loaded via base template"
  - "Single-open behavior with aria-expanded toggle"

# Metrics
duration: 3min
completed: 2026-02-08
---

# Phase 03 Plan 03: Homepage FAQ Accordion and Interaction Wiring Summary

**FAQ accordion with 4 items, single-open behavior via external accordion.js, no inline scripts.**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-08T17:35:00Z
- **Completed:** 2026-02-08T17:38:00Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments

- FAQ accordion has 4 items covering how it works, membership, pricing, and regional availability
- All answers use Sie-Ansprache with no phone numbers or exact pricing
- Links to mitglied-werden.html and preise.html where helpful
- accordion.js implements single-open behavior with aria-expanded toggle
- Script loaded via defer in base.html (no inline scripts)
- Guard clause when no accordion headers exist on page

## Task Commits

Each task was committed atomically:

1. **Task 1-3: FAQ content, JS wiring, and build verification** - `245c5ea` (feat)

**Plan metadata:** (committed with plan completion)

## Files Created/Modified

- `site/templates/accordion.html` - 4 FAQ items with updated copy
- `site/public/js/accordion.js` - Single-open accordion behavior
- `site/templates/base.html` - accordion.js script tag added

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Keep 4 FAQ items | All 4 topics are distinct and useful; within plan's 2-4 range |

## Deviations from Plan

None - plan executed as written.

## Next Phase Readiness

No blockers. Phase 3 fully complete.
