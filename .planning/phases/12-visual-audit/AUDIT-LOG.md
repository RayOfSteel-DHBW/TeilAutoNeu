# Visual Audit Log — Phase 12

**Date:** 2026-02-26
**Audited by:** Claude (Puppeteer MCP)
**Widths:** Desktop 1280px, Mobile 375px
**Pages:** 8/8 (full coverage)

## Previous Fixes Verified

The previous agent's Tailwind v4 migration (commit `7d30192`) successfully resolved:
- ✓ G1 (old): Nav vertical on desktop → now horizontal
- ✓ G2 (old): Hamburger visible on desktop → now hidden
- ✓ G3 (old): Nav links always visible on mobile → now behind hamburger, toggle works
- ✓ P1 (old): Broken logo image → resolved (text-based heading)
- ✓ G4 (old): Visible cell borders → proper card styling with rounded corners

## Current Issues Found

### I1: FAQ accordion leaks answer text when collapsed

- **Page:** index.html
- **Location:** "Häufige Fragen" section — all 5 accordion items
- **Width:** Both (desktop and mobile)
- **Severity:** Medium — visually distracting, reveals answers that should be hidden
- **Description:** Each FAQ item shows ~1 line of answer text below the question even when collapsed (showing "+" icon). The `.accordion-content` panels use `pb-4` (padding-bottom: 16px) which creates visible space even when `max-height: 0px; overflow: hidden` is applied. The 16px of padding is enough to display one line of `text-sm` text.
- **Root cause:** `padding-bottom` on `.accordion-content` is not zeroed when collapsed. `max-height: 0` hides the content area but padding remains visible.
- **Secondary issue:** The "+" icon does not change to "−" when the accordion is expanded (`aria-expanded="true"`). The toggle state works (content expands) but the icon provides no visual feedback.
- **Fix approach:** Zero the padding when collapsed (transition padding alongside max-height), OR wrap the content text in an inner `<div>` and move the padding there.

### I2: Hero section full-viewport whitespace

- **Page:** index.html
- **Location:** Hero section (between nav and first feature card)
- **Width:** Both (desktop and mobile)
- **Severity:** Low — may be intentional design
- **Description:** The hero section takes full viewport height (`min-h-[calc(100vh-4rem)]`) with minimal content (heading + subtitle + 2 buttons), creating large empty areas above and below. On desktop this means ~200px of whitespace above and ~200px below the content.
- **Note:** This may be an intentional "splash page" design. Flagged for owner review during Phase 14.

## Pages Without Issues

| Page | Desktop 1280px | Mobile 375px | Notes |
|------|:---:|:---:|-------|
| index.html | I1, I2 | I1, I2 | FAQ leak + hero whitespace |
| fahrzeuge.html | ✓ | ✓ | Vehicle cards, map, all clean |
| preise.html | ✓ | ✓ | Pricing tables align well at both widths |
| geschaeftskunden.html | ✓ | ✓ | Benefit cards stack properly on mobile |
| ueber-uns.html | ✓ | ✓ | Text sections, CTA link, all clean |
| mitglied-werden.html | ✓ | ✓ | Step cards, phone CTA, all clean |
| datenschutz.html | ✓ | ✓ | Legal text page, no layout issues |
| impressum.html | ✓ | ✓ | Legal text page, no layout issues |

## Summary

| # | Issue | Page | Severity | Fix |
|---|-------|------|----------|-----|
| I1 | FAQ accordion leaks text when collapsed | index.html | Medium | Zero padding when collapsed; fix icon toggle |
| I2 | Hero full-viewport whitespace | index.html | Low | Defer to owner review (Phase 14) |

**Overall state:** The Tailwind v4 migration resolved all critical layout bugs. The site renders well across all 8 pages at both widths. Only index.html has remaining issues — a medium-severity FAQ accordion bug and a low-severity whitespace concern (likely intentional).
