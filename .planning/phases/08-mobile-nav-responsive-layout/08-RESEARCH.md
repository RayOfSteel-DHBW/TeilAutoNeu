# Phase 8: Mobile Navigation & Responsive Layout — Research

**Researched:** 2026-02-25
**Domain:** Tailwind CSS v4, vanilla JS, mobile nav accessibility, fluid typography, intrinsic CSS layout
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Mobile navigation menu**
- Slide-down panel that pushes content below when opened
- Fix accessibility: replace div+onclick with proper `<button>`, add `role`, `aria-label`, `aria-expanded`, keyboard support
- Close behavior and nav item styling (dividers, spacing) at Claude's discretion

**Spacing & padding**
- Add professional padding/spacing throughout — currently zero padding everywhere
- Text content must always have side padding (but not excessive — site is compact)
- Background images/hero sections can bleed edge-to-edge
- Active nav item on desktop: bold text with background highlight (not just underline)
- Exact padding values at Claude's discretion — aim for "professional, not cramped"

**Heading treatment**
- Use CSS `clamp()` for fluid heading sizes (no breakpoint-based scaling)
- Establish a unified heading hierarchy (H1, H2, H3) — consistent system, not ad-hoc per element
- Fix random line breaks at different viewport widths
- Skip adding H1 to index page (leave for content/SEO phase)
- Focus on functional fixes (line breaks, scaling), not visual styling choices

**Footer layout**
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

### Deferred Ideas (OUT OF SCOPE)
- Rework "Mehr erfahren" / "Alle Details" button text and CTA flow — Phase 10
- Add proper H1 to index page for SEO — future content/SEO work
- Unified visual styling pass (typography, color consistency, design system) — future milestone
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| FEAT-06 | Responsive mobile hamburger navigation | Tailwind v4 `aria-expanded:` variant + vanilla JS toggle pattern |
| UX-01 | Mobile-first responsive design | base.html already uses flex-col + min-h-screen; `main` needs `flex-1`; footer uses `md:flex-row` already |
</phase_requirements>

---

## Summary

This phase fixes responsive layout issues on a static Tailwind CSS v4 site rendered by the Tera templating engine. The site already has a semantically correct `<button>` with `aria-controls` and `aria-expanded` in `templates/partials/header.html`, and a working `public/js/nav.js` that toggles `hidden` on the nav panel. However, the mobile menu simply shows/hides without a slide-down animation, and the header has no active-page indicator. The footer already uses `md:flex-row` intrinsic wrapping — the sticky footer is nearly complete (base layout wraps in `min-h-screen flex flex-col` + `main flex-1`).

The key gaps are: (1) the slide-down animation for the mobile nav panel needs `max-height` transition, (2) `aria-current="page"` needs to be set per-page via Tera conditional logic so the active nav link can be styled via Tailwind's `aria-[current=page]:` variant, (3) heading sizes in `base.css` are fixed pixel values — need CSS `clamp()` values, (4) fix button spacing on index.html hero where "Mehr erfahren" / "Alle Details" are adjacent with no gap, and (5) minor footer sticky fix to ensure `main` has `flex-1` (it already does in base.html).

**Primary recommendation:** Work entirely within the existing Tailwind v4 + vanilla JS + Tera stack. No new libraries. Use Tailwind's built-in `aria-expanded:` and `aria-[current=page]:` variants for state-driven styling. Use `max-height` transition in CSS (not JS) for slide-down. Use Tera `if` blocks to conditionally set `aria-current="page"` per nav link per page.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Tailwind CSS | v4.1.18 (already installed) | Utility-first CSS including aria-state variants | Already in project; v4 ships `aria-expanded:` and `aria-[attr=val]:` variants built-in |
| Vanilla JS | ES2020 (no transpiler) | Nav toggle, keyboard support | No bundler in project; inline or `public/js/nav.js` pattern already established |
| Tera templating | chevdor fork (already installed) | Conditional `aria-current` per page | Already used for all page rendering |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| CSS `clamp()` | Native (no library) | Fluid heading sizes | All heading sizes in `base.css` |
| CSS Grid `repeat(auto-fit, minmax())` | Native | Intrinsic 2→1 col footer | Already partially used in footer; refine min-width |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CSS max-height transition | JS-set inline height | JS approach is pixel-perfect but adds complexity; max-height is simpler and acceptable for a nav panel of fixed content |
| Tera conditional aria-current | JS that detects current URL | JS approach avoids template changes but runs client-side and flickers; Tera is the established templating layer |
| CSS clamp() in base.css | Tailwind plugin/theme font sizes | Custom CSS is simpler since there are only 3–4 heading levels to define |

**Installation:**
```bash
# No new installs needed — Tailwind v4.1.18 already handles all required features
```

---

## Architecture Patterns

### Recommended Project Structure

No structural changes needed. All work is within:
```
site/
├── src/
│   └── base.css               # Add clamp() heading rules here
├── templates/
│   ├── base.html              # Fix: main flex-1 already correct; nav JS reference already correct
│   └── partials/
│       ├── header.html        # Fix: aria-current per link via Tera if; slide-down CSS classes
│       └── footer.html        # Fix: sticky footer final check
├── public/
│   └── js/
│       └── nav.js             # Fix: add keyboard support (Escape key), auto-close on link click
```

### Pattern 1: Tailwind v4 ARIA-Driven State Toggle

**What:** Use Tailwind's `aria-expanded:` and `aria-[current=page]:` variants to apply visual styles based on ARIA attribute values. JavaScript only manages the attribute value; Tailwind CSS handles the visual response.

**When to use:** Any interactive element where visual state maps to an ARIA attribute (nav toggle, accordion, current page).

**Example — mobile nav slide-down:**
```html
<!-- header.html -->
<button
  type="button"
  aria-controls="primary-nav"
  aria-expanded="false"
  aria-label="Navigationsmenü öffnen"
  class="... md:hidden aria-expanded:aria-label-close"
>
  Menü
</button>

<nav
  id="primary-nav"
  class="
    overflow-hidden
    max-h-0 aria-expanded:max-h-96
    transition-[max-height] duration-300 ease-in-out
    w-full flex-col gap-3 pt-4 text-sm font-semibold
    md:flex md:max-h-none md:flex-row md:items-center
  "
  aria-label="Hauptnavigation"
>
  <!-- nav links -->
</nav>
```

**Note on the `aria-expanded:` target:** Tailwind's `aria-expanded:` variant applies when the *element itself* has `aria-expanded="true"`. To apply styles to the `<nav>` based on the *button's* aria-expanded, use the `peer` pattern:

```html
<button class="peer md:hidden" aria-expanded="false" ...>Menü</button>
<nav class="max-h-0 peer-aria-expanded:max-h-96 transition-[max-height] duration-300 ...">
```

Source: Tailwind CSS official docs — hover-focus-and-other-states#aria-states

### Pattern 2: Tera Conditional aria-current

**What:** Each page template passes its page name to the nav partial. Tera conditional adds `aria-current="page"` to the matching nav link. Tailwind's `aria-[current=page]:` variant styles it.

**When to use:** Static multi-page sites where active nav state is known at build time.

**Example — header.html partial:**
```html
<!-- header.html receives a 'current_page' variable from each page -->
<a
  href="preise.html"
  aria-current="{% if current_page == 'preise' %}page{% endif %}"
  class="transition hover:text-brand-primary aria-[current=page]:font-bold aria-[current=page]:bg-brand-muted aria-[current=page]:px-3 aria-[current=page]:py-1 aria-[current=page]:rounded-full"
>Preise</a>
```

**Example — page template passing the variable:**
```html
<!-- preise.html — in the head block or via a block override -->
{% set current_page = "preise" %}
{% block header %}
  {% include "partials/header.html" %}
{% endblock header %}
```

**Tera note:** Tera's `{% include %}` inherits the calling template's context, so variables set with `{% set %}` before the include are accessible in the partial. This is the standard Tera pattern — no macro needed.

Source: Tera official docs — https://tera.netlify.app/docs/#include

### Pattern 3: CSS clamp() Fluid Heading Scale

**What:** Replace fixed `rem` values in `base.css` with `clamp(min, fluid, max)` expressions scaling from 320px to 1200px viewport.

**When to use:** All heading sizes in `base.css`. Body text stays fixed.

**Example — base.css heading hierarchy:**
```css
/* Source: Formula from CSS-Tricks + Smashing Magazine clamp guides */
/* Scale: 320px viewport → 1200px viewport */
h1 {
  font-size: clamp(1.75rem, calc(1.5rem + 1.25vw), 2.5rem);
  line-height: 1.1;
}

h2 {
  font-size: clamp(1.375rem, calc(1.2rem + 0.875vw), 1.875rem);
  line-height: 1.2;
}

h3 {
  font-size: clamp(1.125rem, calc(1rem + 0.625vw), 1.5rem);
  line-height: 1.3;
}
```

**Important:** Use `rem` not `px` for WCAG 1.4.4 compliance — clamp values must scale with browser zoom.

### Pattern 4: Intrinsic Sticky Footer

**What:** The `base.html` already implements the correct sticky footer pattern: `<div class="min-h-screen flex flex-col">` with `<main class="flex-1">`. The `flex-1` on main pushes the footer to the bottom on short pages.

**When to use:** Already implemented. Verify `main` has `flex-1` not `flex-auto` (both work; `flex-1` is more explicit).

**Current state (base.html line 21):**
```html
<main id="main-content" class="flex-1">
```
This is already correct. The sticky footer pattern is complete.

### Pattern 5: Keyboard Support for Nav Toggle

**What:** Extend `nav.js` to close the mobile menu on Escape key press and optionally auto-close when a nav link is clicked (since nav links navigate to other pages, auto-close is not strictly needed, but Escape should close).

**Example — public/js/nav.js:**
```javascript
const toggleButton = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.getElementById('primary-nav');

if (toggleButton && primaryNav) {
  function closeNav() {
    toggleButton.setAttribute('aria-expanded', 'false');
    // If using class-based approach: primaryNav.classList.add('hidden');
  }

  toggleButton.addEventListener('click', () => {
    const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleButton.getAttribute('aria-expanded') === 'true') {
      closeNav();
      toggleButton.focus();
    }
  });
}
```

### Anti-Patterns to Avoid

- **Using `display: none` for slide-down animation:** `display` is not animatable. Use `max-height` transition + `overflow: hidden` instead.
- **Setting `max-height` to exact content height in JS:** Brittle — breaks when content changes. Use a generous fixed `max-height` (e.g. `24rem`) since nav content is always small.
- **`aria-[current=page]:` without the quotes:** Arbitrary value selectors in Tailwind require the exact attribute value in brackets: `aria-[current=page]:font-bold` (not `aria-current:font-bold` which targets `aria-current="true"`).
- **Mixing `hidden` class with max-height transition:** The current `nav.js` toggles `hidden` via `classList.toggle('hidden', isOpen)`. Switching to `aria-expanded`-driven `max-height` means removing the `hidden` class logic from JS — it must be consistent. Choose one approach.
- **Setting `aria-current=""` (empty string):** Invalid. Use either `aria-current="page"` or omit the attribute entirely. Tera `{% if %}` should output `aria-current="page"` or nothing.
- **`@media (max-width: Xpx)` for footer columns:** The footer already uses `md:flex-row` which is a Tailwind breakpoint, but the user preference is for intrinsic sizing. Replace with CSS Grid `repeat(auto-fit, minmax(12rem, 1fr))` for true breakpoint-free behavior.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| State-driven CSS from ARIA attributes | Custom CSS attribute selectors manually | Tailwind `aria-expanded:`, `aria-[current=page]:` variants | Already in project; single source of truth for state + visual |
| Keyboard trap / focus management | Custom focus loop JS | Native browser behavior + Escape key close | Nav is a simple toggle, not a modal — browser handles tab naturally |
| Smooth slide-down animation | JS that calculates exact pixel height and sets `style.height` | CSS `max-height` transition with `overflow: hidden` | Less brittle for a nav panel with stable content size |
| Fluid typography formulas | Manual calc() derivation | Standard formula: `clamp(min-rem, calc(base-rem + scale-vw), max-rem)` | Well-established formula from CSS-Tricks and Smashing Magazine |

**Key insight:** The project already has the right primitives. The work is refinement, not rebuilding.

---

## Common Pitfalls

### Pitfall 1: `peer-aria-expanded` vs `aria-expanded` — which element gets the class

**What goes wrong:** Developer puts `aria-expanded:max-h-96` on the nav element, but `aria-expanded` is on the button, not the nav. The nav never gets styled.

**Why it happens:** Tailwind's `aria-expanded:` variant applies styles when the *element itself* has `aria-expanded="true"`. To style a sibling based on another element's aria state, use the `peer`/`peer-aria-expanded:` pattern.

**How to avoid:** The button gets `class="peer ..."` and `aria-expanded`. The nav gets `class="max-h-0 peer-aria-expanded:max-h-96 ..."`. The `peer` class must be on the element that HAS the ARIA attribute.

**Warning signs:** Nav never changes height despite JS running; inspect shows `aria-expanded` is `true` on button but nav has no matching styles.

### Pitfall 2: `hidden` class conflicts with `max-height` transition

**What goes wrong:** Current `nav.js` toggles `classList.toggle('hidden', isOpen)`. If you add `max-height` transitions, the `hidden` class (which sets `display: none`) defeats the transition entirely — elements with `display: none` skip transitions.

**Why it happens:** Combining two visibility strategies: JS-toggled `hidden` AND CSS `max-height`.

**How to avoid:** Remove the `hidden` class toggle from `nav.js` when switching to `max-height` CSS transitions. The nav should start with `max-h-0 overflow-hidden` and never use `display: none` for the slide animation. On desktop, `md:max-h-none` restores normal behavior.

**Warning signs:** Menu appears/disappears instantly with no animation despite transition classes being present.

### Pitfall 3: Tera `{% include %}` variable scope

**What goes wrong:** A `{% set current_page = "preise" %}` defined in `preise.html` is not visible in `header.html` when `header.html` is included via `{% include %}` inside a parent block in `base.html`.

**Why it happens:** Tera `{% include %}` inherits the calling template's full context. However, if the variable is set in a child template (e.g., `preise.html`) but the include is in a parent template (`base.html`), Tera's template inheritance means the variable must be set at the top level of the child template, before `{% extends %}` takes effect.

**How to avoid:** Two reliable approaches:
1. Override the `header` block in each page template and include the partial there with the variable in context.
2. Use a Tera macro in `base.html` that accepts a `page` parameter, called from each child page via `{{ self::create_header(page="preise") }}`. This is already the pattern used by `create_nav(page="...")` in the original architecture — check if it still exists.

**Warning signs:** `aria-current` never appears on any nav link at build time; all links render without the attribute.

### Pitfall 4: `clamp()` min value in `px` instead of `rem`

**What goes wrong:** `font-size: clamp(24px, ...)` — the minimum value uses `px`, which does not scale with user browser zoom settings.

**Why it happens:** Confusing viewport-unit syntax (can use `px` for breakpoint math) with WCAG zoom compliance.

**How to avoid:** Always use `rem` for min and max in `clamp()`. The fluid `calc()` part can use `vw`. Example: `clamp(1.75rem, calc(1.5rem + 1.25vw), 2.5rem)`.

**Warning signs:** WCAG 1.4.4 audit fails; headings don't scale when user sets 150% browser zoom.

### Pitfall 5: `aria-current=""` (empty string attribute)

**What goes wrong:** Tera template generates `aria-current=""` for non-current pages. The `aria-[current=page]:` selector does not match empty string, so it looks fine, but screen readers may announce "current" for elements with any `aria-current` value.

**Why it happens:** `{% if current_page == 'preise' %}page{% endif %}` evaluates to an empty string when the condition is false, producing `aria-current=""`.

**How to avoid:** Use Tera's conditional to output the entire attribute or nothing:
```html
{% if current_page == "preise" %}aria-current="page"{% endif %}
```
Insert this inside the opening `<a>` tag directly. Empty `aria-current` is worse than absent.

### Pitfall 6: Mobile nav button label not updating on toggle

**What goes wrong:** Button says "Menü" when open. User has no visual cue it's open (beyond seeing the menu). Screen readers hear "Menü" regardless of state.

**Why it happens:** Static button text with no `aria-expanded` feedback to user.

**How to avoid:** The `aria-expanded` attribute already communicates state to screen readers. For visual users, consider changing the button text or icon via CSS content based on `aria-expanded`. Minimum: `aria-label` should change when expanded — update it in `nav.js`.

---

## Code Examples

Verified patterns from official and authoritative sources:

### Complete nav.js with keyboard support
```javascript
// Source: ARIA authoring practices + existing nav.js pattern
const toggleButton = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.getElementById('primary-nav');

if (toggleButton && primaryNav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
    const willOpen = !isOpen;
    toggleButton.setAttribute('aria-expanded', String(willOpen));
    toggleButton.setAttribute(
      'aria-label',
      willOpen ? 'Navigationsmenü schließen' : 'Navigationsmenü öffnen'
    );
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleButton.getAttribute('aria-expanded') === 'true') {
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.setAttribute('aria-label', 'Navigationsmenü öffnen');
      toggleButton.focus();
    }
  });
}
```

### header.html nav with peer-aria-expanded slide-down
```html
<!-- Source: Tailwind docs aria-states + peer variant -->
<div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
  <div class="flex items-center justify-between py-4">
    <a class="text-xl font-display tracking-wide text-brand-ink" href="index.html">teilAuto Mössingen</a>
    <button
      class="peer inline-flex items-center justify-center rounded-full border border-brand-primary px-3 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-muted md:hidden"
      type="button"
      aria-controls="primary-nav"
      aria-expanded="false"
      aria-label="Navigationsmenü öffnen"
    >Menü</button>
  </div>
  <nav
    id="primary-nav"
    class="overflow-hidden max-h-0 peer-aria-expanded:max-h-64 transition-[max-height] duration-300 ease-in-out flex flex-col gap-3 pb-4 text-sm font-semibold text-brand-ink md:flex md:max-h-none md:flex-row md:items-center md:gap-6 md:pb-0 md:transition-none"
    aria-label="Hauptnavigation"
  >
    <a href="preise.html" {% if current_page == "preise" %}aria-current="page"{% endif %}
       class="hover:text-brand-primary aria-[current=page]:font-bold aria-[current=page]:text-brand-primary">Preise</a>
    <!-- repeat for all nav items -->
  </nav>
</div>
```

### base.css fluid heading scale
```css
/* Source: clamp() formula from CSS-Tricks.com fluid typography guide */
/* Scales from 320px viewport (min) to 1200px viewport (max) */

h1 {
  font-size: clamp(1.75rem, calc(1.5rem + 1.25vw), 2.5rem);
  line-height: 1.1;
}

h2 {
  font-size: clamp(1.375rem, calc(1.2rem + 0.875vw), 1.875rem);
  line-height: 1.2;
}

h3 {
  font-size: clamp(1.125rem, calc(1rem + 0.625vw), 1.5rem);
  line-height: 1.3;
}

h4 {
  font-size: clamp(1rem, calc(0.95rem + 0.25vw), 1.125rem);
  line-height: 1.4;
}
```

### Tera current_page pattern — per-page variable
```html
<!-- In each page template, e.g. preise.html, before {% block main %} -->
{% block header %}
  {% set current_page = "preise" %}
  {% include "partials/header.html" %}
{% endblock header %}
```
Note: If Tera `{% include %}` inside `{% block %}` does not see variables set via `{% set %}` in the same block (version-dependent), fall back to the macro approach already used in the codebase:
```html
<!-- In base.html, define a macro: -->
{% macro render_header(page="") %}
  <!-- include header partial with page variable available -->
{% endmacro render_header %}

<!-- In each page template: -->
{% block header %}{{ self::render_header(page="preise") }}{% endblock header %}
```

### Footer intrinsic 2→1 column (no fixed breakpoints)
```html
<!-- Source: CSS Grid auto-fit/minmax pattern — web.dev/learn/css/grid -->
<!-- In footer.html — replace md:flex-row with CSS Grid -->
<div class="grid gap-6" style="grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));">
  <div><!-- contact column --></div>
  <div><!-- legal links column --></div>
</div>
```
Or via Tailwind arbitrary value: `class="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))]"`

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `display: none` toggle for mobile nav | `max-height` transition + `overflow: hidden` | 2018–2020 (industry settled) | Animatable slide-down without JS height calculation |
| JS className manipulation for ARIA state | Tailwind `aria-*:` variant classes | Tailwind v3.2 (2022), extended v4 | CSS responds to ARIA state; JS only manages attribute |
| Fixed px font sizes + media query steps | `clamp()` fluid scale | CSS clamp widely available ~2021 | No layout jumps at breakpoints; WCAG zoom compliant |
| `@media (max-width: Xpx)` for layout columns | CSS Grid `auto-fit/minmax` | 2017 (CSS Grid), adopted mainstream ~2019 | True intrinsic layouts; no arbitrary breakpoints |
| `tailwind.config.js` for theme | `@theme {}` directive in CSS | Tailwind v4.0 (2025) | This project still uses `tailwind.config.js` — valid for v4 with compatibility mode |

**Deprecated/outdated:**
- `clip-path: xywh()` for hiding nav: CONCERNS.md flags this as fragile (no Firefox support as of early 2025). The current codebase has already moved to Tailwind `hidden` class. The old approach is gone.
- Inline `onclick` for nav toggle: CONCERNS.md documented this. Current `header.html` already uses a clean `<button>` with `nav.js` — already fixed in a prior phase.

---

## Critical Codebase Discovery

The ARCHITECTURE.md in `.planning/codebase/ARCHITECTURE.md` describes the **old** codebase (before the Tailwind migration). The **actual current state** is significantly different:

| What ARCHITECTURE.md says | What is actually true |
|---------------------------|----------------------|
| "No CSS frameworks" | Tailwind CSS v4.1.18 is installed and active |
| "Inline onclick for hamburger" | `header.html` has proper `<button>` with `aria-expanded` and `aria-controls` |
| "clip-path: xywh() for mobile nav" | `nav.js` uses `classList.toggle('hidden')` — clean JS approach |
| "orientation-based media queries" | Tailwind responsive prefixes (`md:`, `sm:`) throughout |
| "base.css has nav styles" | `base.css` now only has font imports, heading rules, image reset, map styles |
| "create_nav() macro in base.html" | `base.html` uses `{% include "partials/header.html" %}` — no macro |

**Implication for planning:** Do NOT plan tasks based on the old architecture description. Plan based on the actual files verified above.

---

## Open Questions

1. **Tera `{% set %}` inside `{% block %}` scope**
   - What we know: Tera includes inherit the caller's context. Variables set in a child template's `{% block %}` body should be visible to `{% include %}` within that same block.
   - What's unclear: Whether the chevdor fork of `tera-cli` matches standard Tera scoping behavior exactly.
   - Recommendation: Test with a simple `{% set current_page = "test" %}` + `{{ current_page }}` in the included partial during the first task. If it fails, use the macro approach.

2. **`peer` variant + `aria-expanded` — element must be immediately adjacent sibling**
   - What we know: Tailwind's `peer` variant requires the peer element to be a *subsequent sibling* in the DOM. The button and nav are siblings inside the same `<div>` — this should work.
   - What's unclear: The current `header.html` structure has the button and nav inside a flex div but the button precedes the nav, so `peer` should work. However if the header is restructured (e.g., button inside a nested div), the peer chain breaks.
   - Recommendation: Keep button and nav as direct siblings inside the same parent `<div>`.

3. **`max-h-0 peer-aria-expanded:max-h-64` on desktop**
   - What we know: On desktop (`md:` breakpoint), the nav should ignore the `max-h-0` and always show.
   - What's unclear: Does `md:max-h-none` override `max-h-0` and `peer-aria-expanded:max-h-64` at the `md:` breakpoint?
   - Recommendation: Use `md:overflow-visible md:max-h-none md:transition-none` to fully reset desktop nav behavior. Test at exactly the `md` breakpoint (768px by default in Tailwind v4).

---

## Sources

### Primary (HIGH confidence)
- Tailwind CSS official docs (tailwindcss.com/docs/hover-focus-and-other-states) — aria-expanded variant, peer variant, aria-[current=page] syntax verified
- Tera official docs (tera.netlify.app/docs) — include scope behavior
- MDN Web Docs — `clamp()` function, `max-height` transition, CSS Grid `auto-fit`
- Actual codebase files read directly: `site/templates/base.html`, `site/templates/partials/header.html`, `site/templates/partials/footer.html`, `site/public/js/nav.js`, `site/src/base.css`, `site/tailwind.config.js`, `site/package.json`

### Secondary (MEDIUM confidence)
- CSS-Tricks — fluid typography clamp formula (cross-verified with MDN clamp docs)
- Smashing Magazine — modern fluid typography CSS clamp (2022, principles still current)
- DEV Community — "Using Aria States To Toggle Tailwind Classes" — verified pattern matches Tailwind docs
- web.dev/patterns/layout — RAM (repeat auto-fit minmax) pattern

### Tertiary (LOW confidence)
- WebSearch result on Tailwind v4 config differences — unverified claim that `tailwind.config.js` is fully replaced; actual project still uses it without issue.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — verified from actual package.json and source files
- Architecture: HIGH — read actual template files, not documentation
- Pitfalls: HIGH for pitfall 1-3 (verified against actual code); MEDIUM for pitfall 4-6 (established patterns, not project-specific)
- Code examples: MEDIUM — patterns verified against Tailwind docs and Tera docs; not run through actual build

**Research date:** 2026-02-25
**Valid until:** 2026-08-25 (Tailwind v4 is stable; CSS native features are long-lived)
