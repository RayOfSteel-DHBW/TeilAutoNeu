---
phase: 36-comparison-publish-review-pack
plan: 01
subsystem: ui
tags: [static-site, comparison, review-handoff, playwright]
requires:
  - phase: 35-01
    provides: Design C polish-ready homepage and the completed A/B/C review-ready set
provides:
  - Shared comparison start page at `site/epic/index.html`
  - Browser-verified A/B/C entry links from one shared review surface
  - Brief owner-facing comparison instructions for the shared picker flow
affects: [phase-37-proposal, owner-review, epic-comparison]
tech-stack:
  added: []
  patterns: [single shared comparison entry point, serial browser verification for shared review surface]
key-files:
  created:
    - .planning/phases/36-comparison-publish-review-pack/36-OWNER-INSTRUCTIONS.md
    - .planning/phases/36-comparison-publish-review-pack/36-01-SUMMARY.md
  modified:
    - site/epic/index.html
key-decisions:
  - "Kept `site/epic/index.html` as the single human entry point and preserved canonical `site/epic/a/`, `site/epic/b/`, and `site/epic/c/` directories."
  - "Proposed a new forward Phase 37 for structured review capture if needed, instead of routing back to historical Phase 30."
patterns-established:
  - "Shared comparison work lives in Phase 36 rather than skin-local polish phases."
  - "Comparison verification is done from the shared picker into each skin homepage, serially, with one browser session."
requirements-completed: [COMP-01, COMP-02]
duration: 6 min
completed: 2026-03-11
---

# Phase 36 Plan 01: Comparison Publish & Review Pack Summary

**Shared comparison picker with verified A/B/C homepage entry paths and owner handoff instructions for review-first comparison**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-11T10:09:53Z
- **Completed:** 2026-03-11T10:12:11Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments

- Delivered a single shared comparison start page at `site/epic/index.html` for Design A, B, and C.
- Verified in browser that the shared picker exposes all three choices first and each link reaches the intended skin homepage.
- Wrote concise owner-facing instructions for how to compare the skins without branch switching or directory archaeology.

## Task Commits

Each task was committed atomically:

1. **Task 1: Build the shared comparison start page and version picker** - `22d28fa` (feat)
2. **Task 2: Verify the shared comparison surface in browser** - `c6dfa84` (docs)
3. **Task 3: Write owner-facing instructions and forward-boundary closeout** - `dd03968` (docs)

**Plan metadata:** `f5b9ac2` (docs: complete plan)

## Files Created/Modified

- `site/epic/index.html` - Shared comparison entry page linking to the stable A/B/C homepages
- `.planning/phases/36-comparison-publish-review-pack/36-OWNER-INSTRUCTIONS.md` - Brief owner handoff for the pick-a-version-first review flow
- `.planning/phases/36-comparison-publish-review-pack/36-01-SUMMARY.md` - Phase closeout with verification results and forward-phase proposal

## Decisions Made

- Kept the comparison flow centered on `site/epic/index.html` and left `site/epic/a/`, `site/epic/b/`, and `site/epic/c/` untouched as canonical implementation directories.
- Treated structured review capture as potential future work and proposed a new forward Phase 37 if needed, rather than reopening historical Phase 30.

## Browser Verification Result

- Served `site/` locally at `http://127.0.0.1:4180/`.
- Opened `http://127.0.0.1:4180/epic/index.html`.
- Confirmed Design A, Design B, and Design C were all visible from the shared start page before entering any skin.
- Followed each picker link once and confirmed it reached:
  - `http://127.0.0.1:4180/epic/a/index.html`
  - `http://127.0.0.1:4180/epic/b/index.html`
  - `http://127.0.0.1:4180/epic/c/index.html`
- Observed one non-blocking console error from the static server for `/favicon.ico`; it did not affect picker behavior or skin navigation.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Moved the local static server to an open port**
- **Found during:** Task 2 (Verify the shared comparison surface in browser)
- **Issue:** Port `4173` was already in use, so the local verification server could not start there.
- **Fix:** Served `site/` on port `4180` instead and re-ran the verification flow.
- **Files modified:** None
- **Verification:** `http://127.0.0.1:4180/epic/index.html` returned HTTP 200 and the full browser flow passed.
- **Committed in:** `c6dfa84` (part of Task 2 commit)

**2. [Rule 3 - Blocking] Cleared a stale Playwright MCP Chrome session**
- **Found during:** Task 2 (Verify the shared comparison surface in browser)
- **Issue:** Playwright could not launch because an existing MCP Chrome profile lock was still active.
- **Fix:** Stopped only the stale automation-owned Chrome processes using the MCP profile and retried the browser session.
- **Files modified:** None
- **Verification:** Playwright launched successfully and completed the shared picker navigation checks.
- **Committed in:** `c6dfa84` (part of Task 2 commit)

---

**Total deviations:** 2 auto-fixed (2 blocking)
**Impact on plan:** Both fixes were execution-environment only. No product scope changed, and the planned comparison flow remained intact.

## Issues Encountered

None. The only browser console noise was a static `/favicon.ico` 404, which did not affect the comparison surface or the target homepages.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 36 now provides a usable shared comparison surface and owner instructions on the current branch.
- If the owners still want structured comparison feedback captured after reviewing A, B, and C, propose **Phase 37: Structured Comparison Review Capture** as a new forward phase.
- No backward routing to Phase 30 is needed for this milestone path.

## Self-Check: PASSED

- Verified required artifacts exist: `site/epic/index.html`, `.planning/phases/36-comparison-publish-review-pack/36-OWNER-INSTRUCTIONS.md`, `.planning/phases/36-comparison-publish-review-pack/36-01-SUMMARY.md`
- Verified task commits exist in git history: `22d28fa`, `c6dfa84`, `dd03968`
