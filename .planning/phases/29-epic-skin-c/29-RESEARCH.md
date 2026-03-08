# Phase 29: Epic Skin C — Research

**Researched:** 2026-03-08
**Domain:** HTML + Tailwind CSS v4 CDN — structurally distinct epic skin C for teilAuto Mössingen
**Confidence:** HIGH

---

## Summary

Phase 29 implements the "Epic Skin C" design as a complete 8-page standalone HTML site in `site/epic/c/`. Unlike v1.2's "Nachbarschaftlich" chroma (which was the same skeleton as A and B with different paint), this must be a structurally distinct design — differing from Designs A and B in at least 3 structural dimensions: section ordering, hero composition, navigation pattern, and visual signature.

The critical architectural shift from v1.2 to v1.3 is the **output directory and toolchain**. v1.2 used the Tera template build pipeline (`site/src/` → `npm run build`). v1.3 epic skins live in `site/epic/c/` as **pure standalone HTML files** — no Tera templates, no build pipeline. Tailwind v4 is loaded via CDN (`@tailwindcss/browser@4`) with `<style type="text/tailwindcss">` blocks for `@theme` tokens. This is the single biggest implementation difference from all prior phases.

Phase 26 (Epic Directions) will define what Epic Direction C structurally is. Since Phase 26 hasn't been executed yet, this research anticipates the implementation patterns for whatever structural choices Phase 26 assigns to Direction C. Based on what's assigned to A and B (those RESEARCH.md files don't exist yet either), Direction C must be the third distinct structural option from the v1.3 milestone brief's "Epic Skin Standard": section ordering with social proof or cost-comparison lead, stacked editorial hero composition (large headline + layered visual elements, overlapping floating badges creating a "scene"), and a navigation pattern that breaks the sticky-top-bar convention (floating pill/FAB nav, bottom nav, or side nav). The visual signature must be CSS-only (no new image assets).

**Primary recommendation:** Read Phase 26's `26-EPIC-DIRECTIONS.md` (will exist by the time this plan executes) first. Then: build all 8 HTML files in `site/epic/c/` as standalone documents using the Tailwind CDN. Copy and adapt JavaScript from `site/public/js/` (fleet-map.js, pricing.js, nav.js) via relative paths. Reference images from `site/public/img/` via relative paths. Never touch `site/epic/a/`, `site/epic/b/`, or `site/src/`.

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| IMPL-01 | Three structurally distinct ("epic skin") designs implemented as complete sites | Phase 29 implements Epic Skin C — must differ from A and B in at least 3 structural dimensions as specified in Phase 26's epic directions |
| IMPL-03 | Each design covers all 8 pages | index.html, preise.html, fahrzeuge.html, geschaeftskunden.html, ueber-uns.html, mitglied-werden.html, impressum.html, datenschutz.html — all 8 in site/epic/c/ |
| IMPL-04 | Each design is production-ready quality | Playwright screenshot loops at 375px/768px/1280px across all 8 pages |
| IMPL-05 | Each design refined through Playwright screenshot-evaluate loops | Final plan is a visual audit plan using Playwright screenshots |
| VIS-01 | Each design has a cohesive type + color system | @theme block defines all tokens; Google Fonts CDN for font loading |
| VIS-02 | Modern, professional aesthetic | Not artsy or experimental — sachlich + freundlich tone maintained |
| VIS-03 | Mobile-first responsive at all standard breakpoints | Tailwind CDN mobile-first; tested at 375px/768px/1280px |
| VIS-04 | Consistent component language per design | Visual signature element appears on every page; nav/footer consistent |
| CONV-01 | Homepage hero optimized for Zweitwagen persona (Simone) | Hero composition and copy strategy address Simone's use case first |
| CONV-02 | Membership requirement clearly communicated | Membership gate section present early on homepage |
| CONV-03 | Phone CTA prominently placed in conversion context | 07473-922202 in nav, hero, mid-page CTA, and footer |
| CONV-04 | Copy is snappier than v1.1 but based on verified content | Copy reframed per Direction C's storytelling arc (from Phase 26); no invented facts |
| STRUCT-01 | Each design direction specifies unique page skeleton | Direction C's section ordering must differ from A and B (defined in Phase 26) |
| STRUCT-02 | No two designs share the same hero composition type | Direction C uses stacked editorial or full-bleed immersive (whichever A and B don't use) |
| STRUCT-03 | Each design has a unique visual signature element | CSS-only visual signature (clip-path diagonals, oversized numbers, pull quotes, or decorative shapes) |
| STRUCT-04 | Copy strategy varies per design | Same facts, different emphasis and ordering per Direction C's storytelling arc |
</phase_requirements>

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Tailwind CSS CDN | @4 (latest v4.x) | All styling — loaded via browser CDN script | No build tool needed for standalone HTML; @theme block for tokens |
| Google Fonts | CDN | Typography — direction-specific font pair | Must support German characters; SIL OFL fonts confirmed |
| MapLibre GL JS | 5.x (CDN) | Interactive parking map on fahrzeuge.html | Existing fleet-map.js uses this; reference via unpkg CDN |
| MapLibre GL CSS | 5.x (CDN) | Required companion CSS for MapLibre | Must be loaded before MapLibre JS |

### Supporting (referenced from site/public/, read-only)
| File | Location | Purpose | Relative Path from site/epic/c/ |
|------|----------|---------|--------------------------------|
| fleet-map.js | site/public/js/ | MapLibre map + marker setup | ../../public/js/fleet-map.js |
| pricing.js | site/public/js/ | Dynamic pricing display from JSON | ../../public/js/pricing.js |
| nav.js | site/public/js/ | Mobile nav toggle (aria-expanded) | ../../public/js/nav.js |
| accordion.js | site/public/js/ | FAQ accordion | ../../public/js/accordion.js |
| pricing.json | site/public/data/ | Pricing data source for pricing.js | ../../public/data/pricing.json |
| mokka.png / adam.png | site/public/img/ | Vehicle photos | ../../public/img/mokka.png |
| talogo.svg | site/public/img/ | teilAuto logo | ../../public/img/talogo.svg |
| cars/*.svg | site/public/img/cars/ | Map marker icons | ../../public/img/cars/mokka-icon.svg |

### No New npm Packages
Design C requires zero new npm packages. All assets reference existing files via relative paths.

**Tailwind v4 CDN HTML template (head block):**
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] | teilAuto Mössingen</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <style type="text/tailwindcss">
    @theme {
      --color-brand-primary: [direction-c-primary-hex];
      --color-brand-accent:  [direction-c-accent-hex];
      --color-brand-surface: [direction-c-surface-hex];
      --color-brand-ink:     [direction-c-ink-hex];
      --color-brand-muted:   [direction-c-muted-hex];
      --font-sans:    "[Body Font]", system-ui, sans-serif;
      --font-display: "[Display Font]", system-ui, sans-serif;
    }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=[Font+Spec]&display=swap" rel="stylesheet">
</head>
```

**Token placeholders** (`[...]` above) will be filled in from the Phase 26 `26-EPIC-DIRECTIONS.md` Direction C specification.

**German character-confirmed Google Fonts safe for v1.3 Direction C (different from v1.2's Nunito+DM Sans):**
| Font | Role | German Support | License |
|------|------|----------------|---------|
| DM Serif Display | Display headings | Confirmed — Latin Extended | SIL OFL |
| Plus Jakarta Sans | Body | Confirmed — includes German | SIL OFL |
| Sora | Display/headings | Latin Extended — German supported | SIL OFL |
| Figtree | Body | Latin Extended — German supported | SIL OFL |

The v1.2 Direction C used Nunito + DM Sans. Direction C for v1.3 must use a different font combination to establish a genuinely different aesthetic identity. DM Serif Display (high-contrast serif) paired with Plus Jakarta Sans (modern geometric) is recommended if Phase 26 assigns a "focused storytelling" or "stacked editorial" hero. This pairing is not used by any v1.2 direction.

---

## Architecture Patterns

### Directory Structure for site/epic/c/
```
site/epic/c/
├── index.html               # Homepage (epic skeleton, unique section ordering)
├── preise.html              # Pricing (loads ../../public/js/pricing.js)
├── fahrzeuge.html           # Vehicles + map (loads fleet-map.js)
├── geschaeftskunden.html    # Business customers
├── ueber-uns.html           # About us
├── mitglied-werden.html     # Membership funnel
├── impressum.html           # Legal (long-form text)
└── datenschutz.html         # Privacy (long-form text)
```

**No CSS or JS files in site/epic/c/ itself.** Styles go in `<style type="text/tailwindcss">` blocks in each HTML file. JS is referenced from `../../public/js/`. This keeps the directory clean and avoids duplication.

### The CDN vs. Build Tool Difference (CRITICAL)

Unlike v1.2 where all files used the Tera template build pipeline:
- v1.2 pattern: `site/src/*.html` (Tera templates) → `npm run build` → `site/build/dist/*.html`
- v1.3 pattern: `site/epic/c/*.html` (standalone HTML) → open directly in browser or Live Server

The Tailwind CDN (`@tailwindcss/browser@4`) processes classes at runtime in the browser. No build step is needed. **`@apply` is NOT available** with CDN — only utility classes in HTML attributes work. All custom CSS must use utility classes or inline styles.

### Standalone HTML Page Template Pattern
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Startseite | teilAuto Mössingen</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <style type="text/tailwindcss">
    @theme {
      --color-brand-primary: #[hex];
      --color-brand-accent:  #[hex];
      --color-brand-surface: #[hex];
      --color-brand-ink:     #[hex];
      --color-brand-muted:   #[hex];
      --font-sans: "[Body]", system-ui, sans-serif;
      --font-display: "[Display]", system-ui, sans-serif;
    }
    /* Visual signature element CSS goes here */
    .c-signature { /* Direction C's unique decorative element */ }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=[Spec]&display=swap" rel="stylesheet">
</head>
<body class="bg-brand-surface text-brand-ink font-sans min-h-screen">
  <!-- Skip link -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded-full">Zum Inhalt springen</a>

  <!-- Nav (Direction C's unique pattern — NOT sticky-top-bar) -->
  <header>...</header>

  <!-- Main content -->
  <main id="main-content">...</main>

  <!-- Footer -->
  <footer class="bg-brand-primary text-white">...</footer>

  <!-- Fixed mobile phone bar -->
  <div class="fixed inset-x-0 bottom-0 z-40 border-t border-brand-muted bg-brand-surface/95 p-3 backdrop-blur-sm lg:hidden">
    <a href="tel:+4974739222020" class="flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-md">
      Jetzt anrufen: 07473&#8209;922202
    </a>
  </div>

  <!-- Scripts: reference from shared public directory -->
  <script src="../../public/js/nav.js" defer></script>
  <script src="../../public/js/accordion.js" defer></script>
</body>
</html>
```

### Pattern 1: Stacked Editorial Hero (if Phase 26 assigns this to C)
**What:** Large headline dominates upper 2/3 of viewport; floating "badge" elements (oversized numbers, SVG shapes, pill tags) overlap or surround the headline, creating a layered "scene" rather than a centered h1 + subtitle + button stack.
**When to use:** When Direction C specifies "stacked editorial" hero composition.
**CSS approach:** CSS Grid named areas — headline, badge, and CTA all in the same grid cell, offset with `justify-self`/`align-self`:

```html
<!-- Source: moderncss.dev CSS Grid overlay pattern -->
<section style="display:grid; grid-template-areas:'hero'; min-height:90vh; align-items:center;">
  <!-- Headline: placed in grid area -->
  <div style="grid-area:hero; align-self:center; padding:2rem 4rem;">
    <p class="text-sm font-semibold uppercase tracking-widest text-brand-accent">Mössingen, seit 2000</p>
    <h1 class="font-display text-5xl font-bold leading-tight text-brand-ink sm:text-6xl lg:text-7xl">
      Statt zweitem<br>Auto:<br>teilAuto.
    </h1>
    <a href="mitglied-werden.html" class="mt-8 inline-block rounded-full bg-brand-primary px-8 py-4 text-base font-semibold text-white">
      Mitglied werden
    </a>
  </div>
  <!-- Floating badge (CSS only, no image) -->
  <div style="grid-area:hero; align-self:start; justify-self:end; padding:3rem 2rem; pointer-events:none;">
    <div class="rounded-2xl bg-brand-primary/10 px-6 py-4 text-center backdrop-blur-sm">
      <span class="font-display text-5xl font-bold text-brand-primary">60+</span>
      <p class="mt-1 text-xs font-medium text-brand-ink/70">Mitglieder</p>
    </div>
  </div>
</section>
```

### Pattern 2: Asymmetric 60/40 Split Hero (if Phase 26 assigns this to C)
**What:** Content takes 60% left column; a CSS/SVG visual composition takes 40% right column. No image required — use geometric CSS shapes, diagonal backgrounds, or SVG illustrations.
**When to use:** When Direction C specifies "asymmetric split" hero.

```html
<section class="min-h-[90vh] grid lg:grid-cols-[3fr_2fr] items-center">
  <!-- Content column (60%) -->
  <div class="px-6 py-16 lg:px-12 lg:py-0">
    <h1 class="font-display text-4xl font-bold text-brand-ink lg:text-5xl">
      Ihr Zweitwagen,<br>ohne Zweitauto.
    </h1>
    <p class="mt-4 max-w-md text-lg text-brand-ink/70">
      Einfach anrufen, einsteigen und losfahren.
    </p>
    <a href="mitglied-werden.html" class="mt-8 inline-block rounded-full bg-brand-primary px-8 py-4 font-semibold text-white">
      Mitglied werden
    </a>
  </div>
  <!-- Visual column (40%) — CSS shapes only, no images -->
  <div class="relative hidden overflow-hidden lg:block" style="min-height:90vh; background: var(--color-brand-muted);">
    <div style="position:absolute; bottom:-4rem; left:-4rem; width:16rem; height:16rem; border-radius:9999px; background:var(--color-brand-primary); opacity:0.15;"></div>
    <div style="position:absolute; top:4rem; right:2rem; width:8rem; height:8rem; border-radius:9999px; background:var(--color-brand-accent); opacity:0.2;"></div>
    <!-- Oversized number as visual element -->
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="font-display text-[12rem] font-bold leading-none text-brand-primary/10 select-none">C</span>
    </div>
  </div>
</section>
```

### Pattern 3: Floating Pill Navigation (if Phase 26 assigns this to C)
**What:** Nav is NOT sticky top bar. Instead it floats as a centered pill/capsule, detached from edges, with backdrop blur.
**When to use:** When Direction C specifies "floating pill" nav pattern — structurally distinct from both sticky-top-bar (Designs A and B in v1.2).

```html
<!-- Floating pill nav — positioned at top center, detached -->
<header class="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
  <nav class="flex items-center gap-4 rounded-full bg-brand-surface/90 px-6 py-3 shadow-lg backdrop-blur-md border border-brand-muted"
       aria-label="Hauptnavigation">
    <a href="index.html" class="font-display text-sm font-bold text-brand-primary">teilAuto</a>
    <!-- Desktop links (hidden below lg) -->
    <div class="hidden lg:flex items-center gap-4">
      <a href="preise.html" class="text-sm font-medium text-brand-ink hover:text-brand-primary">Preise</a>
      <a href="fahrzeuge.html" class="text-sm font-medium text-brand-ink hover:text-brand-primary">Fahrzeuge</a>
      <a href="ueber-uns.html" class="text-sm font-medium text-brand-ink hover:text-brand-primary">Über uns</a>
      <a href="mitglied-werden.html" class="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white">Mitglied werden</a>
    </div>
    <!-- Mobile hamburger -->
    <button class="lg:hidden text-brand-ink" type="button" aria-controls="primary-nav" aria-expanded="false" aria-label="Navigationsmenü öffnen">
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </nav>
</header>
<!-- Body needs padding-top when floating pill nav is used -->
<body class="pt-20 ...">
```

**Accessibility requirements for floating pill nav:**
- `role="navigation"` and `aria-label="Hauptnavigation"` on the `<nav>`
- `aria-current="page"` on active link
- `aria-controls` + `aria-expanded` on hamburger button
- Keyboard: Tab to navigate links, Enter/Space to activate, Escape to close mobile overlay
- Skip link must still be present and functional

### Pattern 4: CSS Diagonal Section Dividers (visual signature candidate)
**What:** Sections separated by diagonal `clip-path` cuts instead of horizontal lines or color bands. Creates visual dynamism without images.
**When to use:** When Direction C's visual signature includes diagonal cuts.

```html
<style type="text/tailwindcss">
  /* Diagonal lower-right cut on section bottom */
  .c-cut-bottom {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3rem), 0 100%);
    margin-bottom: -3rem;
    padding-bottom: calc(3rem + 2rem); /* compensate for clip */
  }
  /* Diagonal upper-right cut on section top */
  .c-cut-top {
    clip-path: polygon(0 3rem, 100% 0, 100% 100%, 0 100%);
    padding-top: calc(3rem + 2rem);
  }
</style>
```

**Pitfall:** clip-path cuts content. Ensure sufficient padding so no text is clipped. Test at mobile widths where `3rem` may be proportionally too large.

### Pattern 5: Homepage Section Ordering — Cost-First Arc (if Phase 26 assigns this to C)
**What:** Leading with concrete cost savings rather than abstract "what is carsharing" — targets Simone who already knows carsharing and wants to know if it's worth it financially.
**Section order:**
```
1. Hero (Statt zweitem Auto — direct cost message)
2. Membership gate (what it is, 3-month minimum)
3. Cost savings section (lead with money saved — verified numbers from pricing.json)
4. How it works (3-step process)
5. Fleet / vehicle overview (brief, link to fahrzeuge.html)
6. Quernutzung benefit (brief, link to fahrzeuge.html)
7. CTA block (phone number, personal framing)
```
This differs from v1.2's ordering: hero → gate → 2col benefits → 3col benefits → CTA.

### Pattern 6: Oversized Number Visual Signature (CSS-only)
**What:** Large number as decorative element — e.g., "60+" member count, "2" vehicles, "200+" partner network. Appears as a background/watermark element in section headers.
**How:** Using Tailwind arbitrary values and CSS variables:

```html
<section class="relative overflow-hidden py-16">
  <!-- Oversized decorative number (signature element) -->
  <div aria-hidden="true"
       class="pointer-events-none absolute right-0 top-0 select-none font-display font-bold leading-none text-brand-primary/6"
       style="font-size: clamp(6rem, 20vw, 14rem);">
    60+
  </div>
  <!-- Actual content -->
  <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <h2 class="font-display text-2xl font-bold text-brand-ink">Über 60 Mitglieder</h2>
    ...
  </div>
</section>
```

### Anti-Patterns to Avoid
- **Using Tera template syntax (`{% extends %}`, `{% block %}`)**: site/epic/c/ files are pure HTML. No template engine.
- **Using `@apply` in style blocks**: CDN does not support @apply. Use utility classes only.
- **Touching site/epic/a/, site/epic/b/, or site/src/**: Those are other teams' directories. Read-only.
- **Loading pricing.js without the correct relative path**: Path from `site/epic/c/preise.html` to `site/public/js/pricing.js` is `../../public/js/pricing.js`.
- **Hardcoding map in JS**: fleet-map.js uses `document.getElementById("fleet-map")` — the container must have exactly `id="fleet-map"` for the map to initialize.
- **Missing `pb-20 lg:pb-0` on pages**: The fixed mobile phone bar overlaps content at bottom. Pages need bottom padding or the last section's padding must account for the bar height.
- **Using same nav pattern as v1.2**: The sticky top bar with hamburger IS the old pattern. Direction C must use a different navigation pattern (floating pill, bottom nav, or side nav).
- **Reusing v1.2 fonts (Nunito + DM Sans)**: Direction C for v1.3 must use a different font pair to establish distinct identity.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Pricing display | New pricing UI | `../../public/js/pricing.js` + `pricing.json` | Owner maintains JSON; rendering logic tested |
| Map | New MapLibre setup | `../../public/js/fleet-map.js` | Location data, marker logic, popup HTML all in there |
| Mobile nav toggle | New JS toggle | `../../public/js/nav.js` | aria-expanded pattern, keyboard handling already done |
| Accordion | New expand/collapse | `../../public/js/accordion.js` | Already handles max-height animation |
| Font face definitions | @font-face in CSS | Google Fonts CDN link | Subsetting, WOFF2, display=swap handled by Google |
| Color tokens | tailwind.config.js | `@theme` block in `<style type="text/tailwindcss">` | v4 CSS-native; works with CDN approach |
| Organic shapes | External SVG files | CSS radial-gradient + border-radius on divs | Zero assets, pure CSS |
| Diagonal dividers | SVG wave files | CSS clip-path: polygon() | No external dependencies, fully responsive |
| Map marker styling | Modifying fleet-map.js | CSS classes `.fleet-marker` and `.fleet-marker--planned` | fleet-map.js reads these class names; define in `<style>` block |

**Key insight:** The `site/public/js/` scripts are designed to be portable — they use `document.getElementById` for DOM elements and relative paths for data. They will work from `site/epic/c/` with correct relative paths.

**pricing.js critical detail:** The script fetches from `./data/pricing.json` relative to itself. When loaded from `site/epic/c/preise.html`, the fetch URL resolves to `site/epic/c/data/pricing.json` — which doesn't exist. **This must be fixed:** copy pricing.json to `site/epic/c/data/pricing.json`, OR use a modified pricing.js script that references the correct path. The simplest fix is to copy `pricing.json` into `site/epic/c/data/pricing.json` as a read-only reference copy.

---

## Common Pitfalls

### Pitfall 1: pricing.js Path Resolution Failure
**What goes wrong:** Preise page shows error "Preisinformationen konnten nicht geladen werden." because `fetch('./data/pricing.json')` resolves relative to the page location, not the script location.
**Why it happens:** pricing.js hardcodes `var PRICING_URL = "./data/pricing.json";` as a relative path.
**How to avoid:** Create `site/epic/c/data/pricing.json` as a copy (or symlink) of `site/public/data/pricing.json`. Alternatively, duplicate the pricing.js file into `site/epic/c/js/pricing.js` with the path updated to `../../public/data/pricing.json`.
**Warning signs:** Empty pricing section on preise.html; browser console shows 404 for pricing.json.

### Pitfall 2: fleet-map.js Icon Path Resolution
**What goes wrong:** Map markers have broken icon images because `fleet-map.js` hardcodes `/img/cars/mokka-icon.svg` as an absolute path from site root.
**Why it happens:** The iconUrl values in fleet-map.js use absolute paths starting with `/img/...`. When the site is served from `site/epic/c/`, the absolute paths resolve from the server root correctly if served at `/`. But during local development with Live Server or file://, they may not.
**How to avoid:** Test by running a local server from the project root. If using Live Server in VS Code, ensure the root is set to `site/`. Alternatively, copy/adapt fleet-map.js with relative iconUrl paths.
**Warning signs:** Map renders but markers show broken image icons in popups.

### Pitfall 3: CDN Tailwind v4 and @apply
**What goes wrong:** `@apply rounded-full bg-brand-primary` in the `<style>` block throws an error or is silently ignored.
**Why it happens:** The Tailwind CDN (`@tailwindcss/browser@4`) does not support `@apply` — it requires PostCSS.
**How to avoid:** Use only utility classes in HTML attributes. For repeated patterns, use component classes defined with standard CSS properties (not `@apply`). Example: `.c-btn { background: var(--color-brand-primary); border-radius: 9999px; }`.
**Warning signs:** Styles defined with @apply don't appear in rendered page.

### Pitfall 4: Floating Nav Overlapping Content
**What goes wrong:** With `position:fixed` floating nav, the top of page content is hidden under the nav bar on page load.
**Why it happens:** Fixed positioning removes the nav from document flow; body content starts at position 0.
**How to avoid:** Add `padding-top` to the `<body>` or first `<main>` element equal to nav height + gap. For a pill nav ~48px tall with 16px top offset: `pt-20` (80px) on body is typically sufficient. Test at all breakpoints.
**Warning signs:** Hero heading partially cut off at top in screenshots.

### Pitfall 5: Nav breakpoint — 7 links crowded at 768px
**What goes wrong:** If a horizontal desktop nav is used, all 7 links (Startseite, Preise, Fahrzeuge, Für Firmen, Über uns, Mitglied werden, phone) overflow at 768px.
**Why it happens:** 768px is too narrow for 7 items at any reasonable font size.
**How to avoid:** Use `lg:` (1024px+) as the breakpoint for desktop nav display. Show hamburger below `lg:`. This is the same lesson from v1.2 Phases 21, 22, and 23.
**Warning signs:** Nav links wrapping to two rows at 768px in screenshots.

### Pitfall 6: Long German compound words overflow on mobile
**What goes wrong:** "Datenschutzerklärung" or "Geschäftskunden" as h1 at text-4xl/text-5xl overflows 375px viewport.
**Why it happens:** German compound words have no word-break points.
**How to avoid:** Use `text-3xl sm:text-4xl lg:text-5xl` for legal and secondary page headings. Also: `overflow-wrap: break-word` as inline style or `break-words` utility class on heading elements.
**Warning signs:** Horizontal scroll at 375px in Playwright screenshots.

### Pitfall 7: MapLibre CDN version mismatch
**What goes wrong:** Map fails to initialize if MapLibre version in HTML doesn't match what fleet-map.js was written for.
**Why it happens:** fleet-map.js uses `window.maplibregl.Map` API. Breaking API changes between versions can cause failures.
**How to avoid:** Use exactly `maplibre-gl@5.17.0` (same version as `site/src/fahrzeuge.html`). Don't upgrade without testing.
**Warning signs:** Console error "Cannot read property 'Map' of undefined" or map container stays blank.

### Pitfall 8: Visual signature element absent on some pages
**What goes wrong:** The design loses its "epic skin" identity on secondary or legal pages where the visual signature was forgotten.
**Why it happens:** When building page by page, the signature element gets added to index.html then overlooked on impressum.html, datenschutz.html, etc.
**How to avoid:** Define the signature element in a clear comment block at the start of each HTML file. The signature should appear in at least the page header or footer area on ALL 8 pages, even if scaled down. Legal pages only need a subtle presence (e.g., a small accent color in the header/footer).
**Warning signs:** Screenshots of legal pages look identical to v1.2 designs.

### Pitfall 9: Forgetting `aria-current="page"` on nav links
**What goes wrong:** Active page is not indicated to screen readers.
**Why it happens:** The Tera template system handled `aria-current="page"` via `{% if current_page == "..." %}` — standalone HTML files must do this manually per page.
**How to avoid:** On each HTML file, hardcode `aria-current="page"` on the correct nav link. This must be done per-file since there's no templating system.
**Warning signs:** No visual active-page indicator; screen reader doesn't announce current page.

### Pitfall 10: @theme token naming conflicts with Tailwind defaults
**What goes wrong:** Using `--color-brand-primary` in the `@theme` block generates utility `text-brand-primary`, `bg-brand-primary` etc. This is correct — but if you accidentally use `--color-primary` (without "brand"), Tailwind v4 generates different utility names.
**How to avoid:** Use the exact `--color-brand-*` naming from the @theme block. Verify token names match utility classes used in HTML.
**Warning signs:** `bg-brand-primary` not applying any background color in rendered page.

---

## Code Examples

Verified patterns from project source and official docs:

### MapLibre integration (fahrzeuge.html)
```html
<!-- In head — MUST load CSS before JS -->
<link href="https://unpkg.com/maplibre-gl@5.17.0/dist/maplibre-gl.css" rel="stylesheet" />
<script src="https://unpkg.com/maplibre-gl@5.17.0/dist/maplibre-gl.js" defer></script>
<script src="../../public/js/fleet-map.js" defer></script>

<!-- Map container — ID must be exactly "fleet-map" -->
<div id="fleet-map" class="fleet-map"></div>

<!-- fleet-map marker CSS (required — fleet-map.js assigns these classes) -->
<style type="text/tailwindcss">
  @theme { /* ... tokens ... */ }
  .fleet-map {
    width: 100%;
    height: 420px;
    border-radius: 1rem;
    overflow: hidden;
  }
  @media (min-width: 640px) { .fleet-map { height: 480px; } }
  @media (min-width: 1024px) { .fleet-map { height: 520px; } }
  .fleet-marker {
    width: 40px; height: 40px;
    border-radius: 9999px;
    border: 2px solid var(--color-brand-primary);
    background: #ffffff;
    cursor: pointer;
    display: grid;
    place-items: center;
  }
  .fleet-marker::before {
    content: "";
    width: 12px; height: 12px;
    border-radius: 9999px;
    background: var(--color-brand-primary);
  }
  .fleet-marker--planned {
    background: var(--color-brand-surface);
    border-style: dashed;
  }
  .fleet-marker--planned::before {
    background: transparent;
    border: 2px solid var(--color-brand-primary);
  }
  .maplibregl-popup-content {
    border-radius: 16px;
    font-family: inherit;
  }
</style>
```

### Pricing page setup (preise.html)
```html
<!-- pricing.js fetches from './data/pricing.json' relative to the page -->
<!-- Solution: copy pricing.json to site/epic/c/data/pricing.json -->
<script src="../../public/js/pricing.js" defer></script>

<!-- pricing.js targets these IDs -->
<div id="pricing-values"></div>      <!-- renders membership & usage section -->
<div id="pricing-examples"></div>    <!-- renders sample calculations -->
<div id="pricing-disclaimer"></div>  <!-- renders disclaimer text -->
```

### Mobile nav toggle (nav.js compatible)
```html
<!-- nav.js looks for: button[aria-controls="primary-nav"] and #primary-nav -->
<!-- For floating pill nav, the overlay ID must still be "primary-nav" -->
<button
  type="button"
  aria-controls="primary-nav"
  aria-expanded="false"
  aria-label="Navigationsmenü öffnen"
  class="...">
  <!-- hamburger icon -->
</button>

<div id="primary-nav" class="fixed inset-0 z-50 hidden flex-col items-center justify-center bg-brand-surface">
  <!-- Mobile nav links -->
  <button
    type="button"
    aria-label="Navigationsmenü schließen"
    onclick="document.getElementById('primary-nav').classList.add('hidden');document.getElementById('primary-nav').classList.remove('flex');document.querySelector('[aria-controls=primary-nav]').setAttribute('aria-expanded','false')"
    class="absolute right-4 top-4 ...">
    <!-- close icon -->
  </button>
  <nav class="flex flex-col items-center gap-4" aria-label="Hauptnavigation">
    <a href="index.html" aria-current="page" class="...">Startseite</a>
    <!-- ... other links ... -->
  </nav>
</div>
<script src="../../public/js/nav.js" defer></script>
```

### Responsive hero with padding for floating nav
```html
<!-- When floating pill nav is used (position:fixed), add top padding to body -->
<body class="bg-brand-surface text-brand-ink font-sans min-h-screen pt-20">
  <!-- pt-20 = 80px accounts for 48px pill nav + 16px top offset + 16px buffer -->
```

### @theme block in CDN context
```html
<!-- Source: Official Tailwind v4 Play CDN docs — tailwindcss.com/docs/installation/play-cdn -->
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<style type="text/tailwindcss">
  @theme {
    --color-brand-primary: #[hex]; /* generates bg-brand-primary, text-brand-primary, etc. */
    --color-brand-accent:  #[hex];
    --color-brand-surface: #[hex];
    --color-brand-ink:     #[hex];
    --color-brand-muted:   #[hex];
    --font-sans:    "[Body Font]", system-ui, sans-serif;
    --font-display: "[Display Font]", system-ui, sans-serif;
  }
  /* Non-Tailwind CSS (plain CSS properties, NOT @apply): */
  .fleet-map { width: 100%; height: 420px; border-radius: 1rem; overflow: hidden; }
</style>
```

### Diagonal section clip-path (visual signature candidate)
```html
<!-- Source: css-tricks.com/almanac/properties/c/clip-path/ -->
<style type="text/tailwindcss">
  @theme { /* ... */ }
  /* Bottom diagonal cut (section bleeds into next) */
  .c-diagonal-bottom {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 4rem), 0 100%);
    padding-bottom: calc(4rem + 3rem); /* extra padding to avoid clipping content */
    margin-bottom: -4rem;
  }
  /* Top diagonal cut (receiving end) */
  .c-diagonal-top {
    clip-path: polygon(0 4rem, 100% 0, 100% 100%, 0 100%);
    padding-top: calc(4rem + 3rem);
    margin-top: -4rem;
  }
</style>
```

---

## State of the Art

| Old Approach (v1.2) | Current Approach (v1.3 Epic C) | When Changed | Impact |
|---------------------|-------------------------------|--------------|--------|
| Tera templates + build pipeline | Standalone HTML + Tailwind CDN | v1.3 milestone start | No build step needed; @apply not available |
| site/src/ as output directory | site/epic/c/ as output directory | v1.3 milestone start | Parallel-safe; never touch site/src/ |
| tailwind.config.js + tailwind.css file | @theme block inside `<style type="text/tailwindcss">` | v1.3 CDN approach | Tokens inline in each HTML file |
| Tera `{% if current_page %}` for active nav | Manual `aria-current="page"` per HTML file | v1.3 no Tera | Each HTML page must hardcode its own active link |
| Single shared header.html partial | Repeated nav HTML in each file | v1.3 no templates | Copy/paste nav block across 8 files; edit all when changing |

**Deprecated/outdated for this phase:**
- `npm run build` commands: Not needed; CDN renders styles in browser
- Tera template syntax (`{% extends %}`, `{% include %}`, `{% block %}`): Not valid in standalone HTML
- `tailwind.config.js` modifications: Token configuration belongs in @theme block

---

## Open Questions

1. **Phase 26 Direction C specification — what structural choices?**
   - What we know: Phase 26 hasn't been executed yet. The directions document will specify Direction C's hero type, nav pattern, section ordering, and visual signature.
   - What's unclear: Which structural dimensions are assigned to C vs A and B.
   - Recommendation: Read `26-EPIC-DIRECTIONS.md` as the first action of Phase 29 execution. All technical patterns in this research are implementation-ready for any of the three "epic skin" hero/nav options.

2. **pricing.js path issue — copy vs. adapt?**
   - What we know: pricing.js fetches `./data/pricing.json` relative to the page URL.
   - What's unclear: Whether it's better to copy pricing.json into `site/epic/c/data/` or to create a modified pricing.js at `site/epic/c/js/pricing.js` with updated path.
   - Recommendation: Copy `pricing.json` to `site/epic/c/data/pricing.json`. Simpler than modifying the shared script. The file is small (64 lines) and doesn't require ongoing sync during the phase.

3. **fleet-map.js icon absolute paths — server context?**
   - What we know: Icons reference `/img/cars/mokka-icon.svg` (absolute from server root).
   - What's unclear: Whether the development server will be rooted at `site/` or `site/epic/c/`.
   - Recommendation: Assume Live Server / Playwright is run from the project root with site root at `/site/`. Absolute paths `/img/...` should resolve correctly. If not, copy icons to `site/epic/c/img/cars/` as a local copy.

---

## Validation Architecture

> nyquist_validation is explicitly set to false in .planning/config.json — skip this section.

---

## Sources

### Primary (HIGH confidence)
- `site/src/` — v1.2 Design C ("Nachbarschaftlich") codebase read in full: index.html, fahrzeuge.html, base.css, tailwind.css, header.html, footer.html, base.html
- `site/public/js/fleet-map.js` — MapLibre integration code, location data, icon paths verified
- `site/public/js/pricing.js` — fetch URL pattern `./data/pricing.json` verified at line 12
- `site/public/js/nav.js` — aria-controls pattern, mobile toggle logic verified
- `site/public/data/pricing.json` — pricing data structure verified
- `.planning/phases/20-research/20-DESIGN-DIRECTIONS.md` — v1.2 Direction C full specification; used to understand what v1.3 must NOT repeat
- `.planning/phases/23-design-c/23-RESEARCH.md` — Phase 23 implementation research; lessons learned transferred
- `.planning/v1.3-MILESTONE-BRIEF.md` — Epic Skin Standard, structural dimensions, parallel work rules
- [Tailwind CSS Play CDN docs](https://tailwindcss.com/docs/installation/play-cdn) — CDN script tag, `<style type="text/tailwindcss">`, @theme syntax
- [Tailwind CSS @theme docs](https://tailwindcss.com/docs/theme) — token namespaces, CSS variable generation

### Secondary (MEDIUM confidence)
- [Modern CSS Solutions — CSS Grid heroes](https://moderncss.dev/3-popular-website-heroes-created-with-css-grid-layout/) — grid-template-areas overlay technique for stacked hero
- [CSS-Tricks clip-path](https://css-tricks.com/almanac/properties/c/clip-path/) — diagonal section divider polygon pattern
- DM Serif Display on Google Fonts — Latin Extended support confirmed (German characters: ä, ö, ü, ß)
- Plus Jakarta Sans on Google Fonts — German language support confirmed per Google Fonts specimen page

### Tertiary (LOW — needs verification during execution)
- fleet-map.js icon absolute path resolution: assumed `/img/...` resolves from site root when serving site/; verify in execution
- pricing.js path: copy-to-data solution assumed; test during Plan 03 execution

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — CDN approach verified with official Tailwind docs; public/js/ scripts read directly from source
- Architecture patterns: HIGH — Standalone HTML pattern is simple; CDN usage confirmed; nav.js and fleet-map.js integrations verified from source
- Pitfalls: HIGH — pricing.js path issue directly identified from source code (line 12); nav breakpoint from v1.2 learnings; @apply CDN limitation from official docs
- Direction C content: MEDIUM — Phase 26 defines the actual structural choices; this research covers all likely implementation patterns

**Research date:** 2026-03-08
**Valid until:** 2026-04-08 (30 days — stable tech stack, Tailwind v4 CDN approach unlikely to change)

**Critical dependency:** This research is complete for implementation patterns. Actual design direction tokens, hero type, nav pattern, and section ordering MUST be read from `26-EPIC-DIRECTIONS.md` before writing any HTML.
