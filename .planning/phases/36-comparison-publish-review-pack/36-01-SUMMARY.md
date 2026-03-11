---
phase: 36-comparison-publish-review-pack
plan: 01
subsystem: ui
tags: [comparison-surface, review-pack, static-html, playwright, epic-skins]

requires:
  - phase: 32-polish-baseline-review-surface
    provides: Shared comparison-surface contract and one-branch ownership
  - phase: 35-epic-skin-c-polish-loop
    provides: Final skin polish completion and serial browser handoff
provides:
  - Shared comparison entry page at site/epic/index.html for Designs A, B, and C
  - Browser-verified picker flow from the shared entry page into the canonical skin homepages
  - Owner-facing comparison instructions with stable local paths
affects: [37-structured-review-capture, owner-review, publish-handoff]

tech-stack:
  added: []
  patterns: [shared-comparison-entry, serial-browser-verification]

key-files:
  created:
    - .planning/phases/36-comparison-publish-review-pack/36-OWNER-INSTRUCTIONS.md
    - .planning/phases/36-comparison-publish-review-pack/36-01-SUMMARY.md
  modified:
    - site/epic/index.html

key-decisions:
  - "The shared comparison entry lives at site/epic/index.html and links directly to the canonical A, B, and C homepages."
  - "If structured review capture is still wanted after Phase 36, propose it as new Phase 37 rather than routing back to Phase 30."

patterns-established:
  - "Comparison flow stays on one branch: shared picker first, then canonical skin homepage."
  - "Browser verification for the comparison surface runs serially after the skin polish loops."

requirements-completed: [COMP-01, COMP-02]

duration: 6min
completed: 2026-03-11
---

# Phase 36 Plan 01: Comparison Publish & Review Pack Summary

**Shared A/B/C comparison entry page with browser-verified picker flow and owner handoff instructions for the next review step**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-11T10:04:21Z
- **Completed:** 2026-03-11T10:10:19Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments

- Added `site/epic/index.html` as the single shared comparison start page for Designs A, B, and C
- Verified in browser that the picker page loads first and each link reaches its intended canonical homepage
- Wrote brief owner-facing instructions with stable local paths and comparison focus points

## Task Commits

Each task was committed atomically:

1. **Task 1: Build the shared comparison start page and version picker** - `22d28fa` (feat)
2. **Task 2: Verify the shared comparison surface in browser** - `d2b0ef9` (test)
3. **Task 3: Write owner-facing instructions and forward-boundary closeout** - (this commit, docs)

## Files Created/Modified

- `site/epic/index.html` - Shared comparison entry page with direct picker links to A, B, and C
- `.planning/phases/36-comparison-publish-review-pack/36-OWNER-INSTRUCTIONS.md` - Brief owner review flow and stable local paths
- `.planning/phases/36-comparison-publish-review-pack/36-01-SUMMARY.md` - Phase closeout, verification result, and forward-boundary note

## Decisions Made

- Kept the comparison surface simple and static so it stays truthful to the one-branch model and does not interfere with the skin directories
- Used the shared entry page as the browser verification start point instead of verifying skins from ad hoc direct URLs
- Proposed **Phase 37: Structured Review Capture & Publish Decision** as the forward path if formal owner feedback capture is still needed

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- A detached `python -m http.server` process returned empty responses in this shell environment, so browser verification used a detached Node static server instead. No repo files changed and the verification result was unaffected.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- The current branch now has a single comparison entry point that reaches all three polished skins by stable local paths
- Owner instructions live at `.planning/phases/36-comparison-publish-review-pack/36-OWNER-INSTRUCTIONS.md`
- If the owner wants structured feedback capture before any publish decision, open a new **Phase 37: Structured Review Capture & Publish Decision** rather than reviving Phase 30

---
*Phase: 36-comparison-publish-review-pack*
*Completed: 2026-03-11*
