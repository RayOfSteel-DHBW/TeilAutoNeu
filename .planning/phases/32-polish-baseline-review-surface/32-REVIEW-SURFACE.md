# Shared Comparison Surface Contract

Updated: 2026-03-09

## Canonical Model

- One branch contains all comparison-ready versions.
- `site/epic/a/`, `site/epic/b/`, and `site/epic/c/` remain the canonical implementation directories.
- The shared start page/version picker is the canonical human entry point for comparison.
- Stable local comparison paths should lead from the shared picker into the skin homepages, not through ad hoc branch switching or alternate staging directories.

## Phase Ownership

- Phase 32 owns the baseline contract, inventory, and active-doc alignment.
- Phases 33, 34, and 35 own only directory-local polish work inside their respective skin directories.
- Phases 33, 34, and 35 must not create or repurpose competing shared pickers or alternate comparison entry points.
- Phase 36 owns implementation and browser verification of the shared start page/version picker.

## Browser Constraint

- Any plan that uses Playwright, browser verification, screenshots, or browser state must run serially.
- Only one browser-using agent may be active at a time in this milestone.
- Planning must compensate for `parallelization=true`; browser-bearing plans are not eligible for parallel grouping.

## Forward Boundary

- Do not route backward to Phase 30 during the v1.4 polish milestone.
- If structured review-capture is still needed after Phase 36, propose a new forward phase number instead of reopening the old v1.3 review placeholder.
- Owner-facing comparison instructions belong to Phase 36 closeout, alongside the shared picker.
