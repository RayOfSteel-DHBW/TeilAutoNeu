# Phase 8: Mobile Navigation & Responsive Layout - Context

**Gathered:** 2026-02-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Fix the hamburger nav toggle on mobile, add proper padding/spacing across the site, fix footer column layout, and fix heading alignment/line breaks. This phase addresses functional CSS issues — not a visual redesign. Closes FEAT-06 (responsive hamburger nav) and UX-01 (mobile-first responsive design).

</domain>

<decisions>
## Implementation Decisions

### Mobile navigation menu
- Slide-down panel that pushes content below when opened
- Fix accessibility: replace div+onclick with proper `<button>`, add `role`, `aria-label`, `aria-expanded`, keyboard support
- Close behavior and nav item styling (dividers, spacing) at Claude's discretion

### Spacing & padding
- Add professional padding/spacing throughout — currently zero padding everywhere
- Text content must always have side padding (but not excessive — site is compact)
- Background images/hero sections can bleed edge-to-edge
- Active nav item on desktop: bold text with background highlight (not just underline)
- Exact padding values at Claude's discretion — aim for "professional, not cramped"

### Heading treatment
- Use CSS `clamp()` for fluid heading sizes (no breakpoint-based scaling)
- Establish a unified heading hierarchy (H1, H2, H3) — consistent system, not ad-hoc per element
- Fix random line breaks at different viewport widths
- Skip adding H1 to index page (leave for content/SEO phase)
- Focus on functional fixes (line breaks, scaling), not visual styling choices

### Footer layout
- 2-column layout when space allows, single-column when not
- Use intrinsic CSS sizing (CSS Grid auto-fit/minmax or flexbox wrap) — no fixed breakpoints
- Sticky footer (always at viewport bottom, even on short pages)
- Keep current footer content as-is (legal, contact, copyright)
- Visual separator from main content at Claude's discretion

### Claude's Discretion
- Nav panel close behavior (toggle icon, tap outside, auto-close on link)
- Nav item visual treatment in mobile menu (dividers, spacing, style)
- All padding/margin exact values
- Footer visual separator approach
- Heading alignment choices (centered vs left per context)
- Sub-heading (H2/H3) alignment within the unified hierarchy

</decisions>

<specifics>
## Specific Ideas

- User dislikes CSS that triggers at specific screen widths — prefer intrinsic/fluid approaches (clamp, auto-fit, flex-wrap) over `@media (max-width: Xpx)` where possible
- "Zero padding looks unprofessional" — the baseline is just making it not look broken
- This is a functional fix phase, not a design pass — a unified visual styling milestone will come later
- "Mehr erfahren" / "Alle Details" buttons are glued together — fix spacing, but don't change button text (content is Phase 10)

</specifics>

<deferred>
## Deferred Ideas

- Rework "Mehr erfahren" / "Alle Details" button text and CTA flow — Phase 10 (content messaging)
- Add proper H1 to index page for SEO — future content/SEO work
- Unified visual styling pass (typography, color consistency, design system) — future milestone

</deferred>

---

*Phase: 08-mobile-nav-responsive-layout*
*Context gathered: 2026-02-24*
