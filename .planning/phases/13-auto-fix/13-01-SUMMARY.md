# Summary: Plan 13-01 — Fix Audit Issues

## What was built
Fixed the FAQ accordion text leak (I1 from audit) and verified all 8 pages are clean at both widths.

## Changes made
1. **accordion.html** — Moved `pb-4` padding from `.accordion-content` div to inner `<p>` elements. This ensures `overflow: hidden` with `max-height: 0` fully clips all content including padding when collapsed.
2. **accordion.js** — Added icon toggle: "+" when collapsed, "−" (minus sign) when expanded. Also resets icon on other items when closing them.

## Verification (iterative per-page)
- **index.html desktop** — FAQ fully collapsed, no text leak ✓. Expand works with "−" icon ✓
- **index.html mobile** — Same, verified clean ✓
- **preise.html desktop** — No regression ✓
- **mitglied-werden.html mobile** — No regression ✓
- Other pages unaffected (accordion template only included in index.html)

## Issue I2 (hero whitespace)
Deferred to Phase 14 (Joint Review) — this is a design decision for the owner, not a bug.

## Self-Check: PASSED
- [x] All audit issues addressed (I1 fixed, I2 deferred by design)
- [x] Fix committed atomically
- [x] index.html verified clean at both widths after fix
- [x] Regression check on other pages passed
