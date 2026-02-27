# Visual Audit Log — Phase 12

**Date:** 2026-02-26
**Audited by:** Claude (Puppeteer MCP)
**Widths:** Desktop 1280px, Mobile 375px
**Pages:** 8/8 (full coverage)

## Root Cause: Broken Tailwind CSS Build

The site uses Tailwind CSS v4 (`@tailwindcss/cli@4.1.18`) but the source CSS (`src/tailwind.css`) still uses v3 directives (`@tailwind base/components/utilities`). This causes:

- **Zero `@media` queries** in the compiled CSS — no responsive breakpoints at all
- **Missing utility classes**: `max-h-0`, `max-h-none`, `max-h-64`, `peer-aria-*` variants not generated
- This single build issue is the root cause of issues G1–G3 below

### Fix Required

Update `src/tailwind.css` from v3 to v4 syntax:
- Replace `@tailwind base/components/utilities` with `@import "tailwindcss"`
- Add `@theme` block for custom brand colors and fonts (currently in `tailwind.config.js`)
- Rebuild CSS

## Global Issues (All 8 Pages)

### G1: Navigation links stacked vertically on desktop
- **Location:** Header nav
- **Width:** Desktop (1280px)
- **Description:** Nav items (Preise, Fahrzeuge, Für Firmen, Über uns) render as a vertical list at top-left instead of a horizontal row. Caused by missing `md:flex-row`, `md:items-center`, `md:gap-6` responsive utilities.

### G2: Hamburger "Menü" button visible on desktop
- **Location:** Header, top-right corner
- **Width:** Desktop (1280px)
- **Description:** The mobile menu toggle button shows at 1280px. Caused by missing `md:hidden` responsive utility.

### G3: Nav links always visible on mobile (should be behind hamburger)
- **Location:** Header nav
- **Width:** Mobile (375px)
- **Description:** Nav links always show below the header instead of being hidden behind the hamburger menu. Caused by missing `max-h-0` utility and `peer-aria-[expanded=true]:max-h-64` variant. Clicking "Menü" has no visual effect.

### G4: Content sections show visible cell borders
- **Location:** Main content area — feature cards, step sections, info blocks
- **Width:** Both
- **Pages:** index.html, fahrzeuge.html, preise.html, geschaeftskunden.html, mitglied-werden.html, ueber-uns.html
- **Description:** Thin border lines around content sections create a raw "table cell" appearance. These borders come from Tailwind utility classes (e.g. `border`, `divide-y`) that ARE being generated, but without proper card styling or responsive layout they look like raw borders.

## Page-Specific Issues

### P1: index.html — Broken logo image
- **Location:** Hero section, center
- **Width:** Both
- **Description:** Logo `<img>` shows broken image icon with alt text "teilAuto Mössingen". The `src="/img/logo.svg"` uses an absolute path that resolves to `http://127.0.0.1:5500/img/logo.svg` instead of `http://127.0.0.1:5500/site/build/dist/img/logo.svg`. File exists at correct location. Fix: change to relative path `img/logo.svg`.

### P2: index.html — Excessive whitespace in hero section
- **Location:** Hero section (between nav and first feature card)
- **Width:** Both
- **Description:** Large empty area above and below the hero content. The hero uses `min-h-[calc(100vh-4rem)]` which forces full viewport height, but the content is minimal (logo + heading + subtitle + 2 buttons). This creates disproportionate whitespace. May be acceptable if the hero is intentionally full-viewport — will revisit after Tailwind fix.

## Summary

| # | Issue | Root Cause | Fix |
|---|-------|-----------|-----|
| G1 | Nav vertical on desktop | Tailwind v3→v4 migration incomplete | Update source CSS to v4 syntax, rebuild |
| G2 | Hamburger on desktop | Same | Same |
| G3 | Nav always visible on mobile | Same + missing max-h/peer utilities | Same |
| G4 | Visible section borders | Intentional borders but look raw without proper layout | Review after Tailwind fix — responsive layout may resolve |
| P1 | Broken logo | Absolute path `/img/logo.svg` | Change to relative `img/logo.svg` |
| P2 | Hero whitespace | `min-h-[calc(100vh-4rem)]` + minimal content | Review after Tailwind fix |

**Primary fix:** Update `src/tailwind.css` to Tailwind v4 syntax, rebuild. This alone should resolve G1–G3 and may improve G4/P2.
