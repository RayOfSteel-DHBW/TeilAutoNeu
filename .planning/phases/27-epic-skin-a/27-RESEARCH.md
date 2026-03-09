# Phase 27: Epic Skin A - Research

**Researched:** 2026-03-09
**Domain:** Static HTML + Tailwind CSS v4 -- structurally distinct design implementation for `site/epic/a/`
**Confidence:** HIGH

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| IMPL-01 | Three structurally distinct ("epic skin") designs implemented as complete sites | Phase 27 implements Design A -- structurally distinct via full-bleed immersive hero, editorial broadsheet layout (no cards, horizontal rule separators), and storytelling content flow. Differs from B (asymmetric split hero, floating pill nav, diagonal accents) and C (stacked editorial hero, non-sticky nav) in 3+ structural dimensions. |
| IMPL-02 | Each design lives on a dedicated directory (`site/epic/a/`) | Files live in `site/epic/a/` -- same branch, parallel-safe directory structure per v1.3 brief. |
| IMPL-03 | Each design covers all 8 pages | index, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz -- all 8 as standalone HTML files in `site/epic/a/`. |
| IMPL-04 | Each design is production-ready quality | Playwright visual audit loop at 375px/768px/1280px across all 8 pages before phase complete. |
| IMPL-05 | Each design refined through Playwright screenshot-evaluate loops | Screenshot-fix-rebuild loops using Playwright/Puppeteer MCP tools. |
| IMPL-06 | Frontend Design Plugin used for implementation | Playwright screenshots used for visual evaluation and iteration. |
| VIS-01 | Each design has a cohesive type + color system | Design A: Playfair Display (headings) + Inter (body) + deep navy / burnt amber / warm off-white. Own `@theme` block. |
| VIS-02 | Modern, professional aesthetic -- not artsy or experimental | Editorial broadsheet metaphor is a well-established professional layout pattern. |
| VIS-03 | Mobile-first responsive at all standard breakpoints | Tailwind mobile-first. Full-bleed hero scales naturally. Editorial columns collapse to single column on mobile. |
| VIS-04 | Consistent component language per design | Design A component system: horizontal rule separators (no cards), editorial text blocks, left-aligned reading flow, serif headings. |
| CONV-01 | Homepage hero optimized for Zweitwagen persona (Simone) | Full-bleed immersive hero with commanding Playfair Display headline speaking to Simone's practical daily need. |
| CONV-02 | Membership requirement clearly communicated | Editorial membership gate immediately after hero -- single-line italic statement in Inter 500, visually distinct from content sections. |
| CONV-03 | Phone CTA prominently placed in conversion context | Phone number in sticky dark nav bar (always visible). Fixed bottom bar on mobile with `tel:` link. Dedicated CTA block before footer. |
| CONV-04 | Copy is snappier than v1.1 but based on existing verified content | Storytelling emotional arc: convenience-first, then trust, then cost. Same verified facts, editorial authoritative voice. |
| STRUCT-01 | Each design direction specifies a unique page skeleton | Section ordering: hero -> editorial gate -> storytelling benefits (ruled sections) -> trust proof -> cost teaser -> CTA. Differs from B (cost-forward) and C. |
| STRUCT-02 | No two designs share the same hero composition type | Design A uses full-bleed immersive (background covers viewport, content layered). B uses asymmetric split. C uses stacked editorial. |
| STRUCT-03 | Each design has a unique visual signature element | Design A visual signature: horizontal typographic rules -- thin lines between sections creating the broadsheet newspaper feel. Decorative 2px amber accent lines at section boundaries. |
| STRUCT-04 | Copy strategy varies per design | Design A copy arc: convenience FIRST (practical daily use), then trust (personal/local), then cost (transparent pricing). Authoritative editorial voice. |
| STRUCT-05 | Differentiation matrix proves at least 3 structural differences from each pair | See Architecture Patterns section -- 5+ structural differences documented vs. B and C. |
</phase_requirements>

---

## Summary

Phase 27 implements Epic Skin A -- a complete 8-page static HTML + Tailwind CSS v4 site in `site/epic/a/`. The v1.2 "Editorial Broadsheet" (Direction A) established the aesthetic ethos (Playfair Display serif headings, navy+amber palette, no-card editorial layout) but was structurally identical to the other v1.2 chromas. The v1.3 epic skin takes this editorial broadsheet identity and pushes it into genuinely different structural territory.

The three key structural differentiators for Design A are: (1) a **full-bleed immersive hero** where background treatment covers the viewport with content layered on top -- distinct from B's asymmetric 60/40 split and C's stacked editorial composition; (2) a **cardless editorial layout** using horizontal rule separators between content sections, creating a newspaper broadsheet reading experience -- no rounded cards, no color-band alternation; (3) a **left-aligned reading flow** throughout the site, breaking the centered-column convention that all v1.2 chromas shared.

Files live in `site/epic/a/` as standalone HTML files -- no Tera template inheritance, no build pipeline dependency. Each HTML file is self-contained with a full `<head>` section. Tailwind v4 is compiled via the CLI (`@tailwindcss/cli`) from a `style.css` file containing the `@theme` block. JavaScript files (pricing.js, fleet-map.js, nav.js, accordion.js) are copied locally with modified relative paths pointing to `../../public/data/` for data files and `../../public/img/` for images.

**Primary recommendation:** Build Design A as standalone HTML files in `site/epic/a/`. Use a single `style.css` with `@import "tailwindcss"` + `@theme {}` block compiled via Tailwind CLI. Copy JS files locally with corrected relative paths. Reference images from `../../public/img/`. Maintain the editorial broadsheet visual identity (Playfair Display + Inter, navy/amber, horizontal rules) while implementing the distinct page skeleton (full-bleed hero, left-aligned flow, ruled sections).

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Tailwind CSS v4 | ^4.1.18 (already installed) | Utility-first CSS, `@theme` block for Design A tokens | Project-wide constraint. v4 CSS-native theming via `@theme`. |
| Playfair Display | Google Fonts CDN | Display / heading font -- high-contrast serif | Established in v1.2 Direction A. Authoritative, editorial character. SIL OFL. German characters confirmed. |
| Inter | Google Fonts CDN | Body font -- geometric sans-serif | Excellent legibility. 400/500/600 weights. German support confirmed. SIL OFL. |
| MapLibre GL JS | 5.17.0 (CDN via unpkg) | Interactive parking map on fahrzeuge.html | Established project pattern. |
| pricing.js | Local copy in `site/epic/a/js/` | Data-driven pricing display | Copied from `site/public/js/pricing.js` with corrected PRICING_URL path. |
| pricing.json | `site/public/data/pricing.json` | Pricing data source | Referenced via `../../public/data/pricing.json` from local pricing.js. |
| fleet-map.js | Local copy in `site/epic/a/js/` | Map markers and popups | Copied from `site/public/js/fleet-map.js` with corrected iconUrl paths. |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| accordion.js | Local copy in `site/epic/a/js/` | FAQ expand/collapse | ueber-uns.html FAQ section |
| nav.js | Local copy in `site/epic/a/js/` | Mobile nav toggle | All pages -- hamburger menu toggle |
| MapLibre GL CSS | 5.17.0 (CDN via unpkg) | Map styles | fahrzeuge.html only |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Tailwind CLI build | Tailwind CDN browser (@tailwindcss/browser@4) | CDN is simpler but adds runtime JS overhead and may flash unstyled content. CLI produces clean output. Design B uses CLI. |
| Local JS copies | Relative paths to site/public/js/ | Relative `<script src>` works but pricing.js internally fetches `./data/pricing.json` which resolves relative to the HTML file, not the script. Local copy with corrected path is the proven pattern (Design B does this). |
| Playfair Display | Another serif | Playfair is established for this direction. No reason to change. |

### Build Approach

Design A does NOT use the Tera template pipeline. Files are standalone HTML in `site/epic/a/`.

**Tailwind CLI for epic skin:**
```bash
cd site
npx @tailwindcss/cli -i epic/a/style.css -o epic/a/tailwind-out.css --content "epic/a/**/*.html"
```

Or watch mode:
```bash
cd site
npx @tailwindcss/cli -i epic/a/style.css -o epic/a/tailwind-out.css --content "epic/a/**/*.html" --watch
```

**Fonts CDN link (Design A):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;700;900&display=swap" rel="stylesheet">
```

---

## Architecture Patterns

### File Structure

```
site/epic/a/
+-- style.css          # @import "tailwindcss" + @theme block + custom CSS (base styles, fleet map, signature rules)
+-- tailwind-out.css   # Compiled Tailwind output (generated)
+-- js/
|   +-- pricing.js     # Copy with PRICING_URL = "../../public/data/pricing.json"
|   +-- fleet-map.js   # Copy with iconUrl paths corrected to "../../public/img/cars/"
|   +-- nav.js         # Copy (may need minor adaptation for editorial nav)
|   +-- accordion.js   # Copy (works as-is with correct aria attributes)
+-- index.html         # Homepage -- full-bleed immersive hero
+-- preise.html        # Pricing -- editorial layout with ruled tables
+-- fahrzeuge.html     # Fleet + MapLibre map
+-- geschaeftskunden.html
+-- ueber-uns.html
+-- mitglied-werden.html
+-- impressum.html     # Legal -- long-form text, max-w-3xl
+-- datenschutz.html   # Legal -- long-form text, max-w-3xl
```

### Pattern 1: Standalone HTML Page Template

Each page follows this structure -- no template inheritance, fully self-contained:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] | teilAuto Moessingen</title>
  <meta name="description" content="[page description]">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;700;900&display=swap" rel="stylesheet">

  <!-- Tailwind compiled output -->
  <link rel="stylesheet" href="tailwind-out.css">
</head>
<body class="bg-brand-surface text-brand-ink font-sans">
  <!-- Sticky dark nav bar -->
  <header>...</header>

  <main>
    <!-- Page content with horizontal rule separators between sections -->
  </main>

  <footer>...</footer>

  <!-- JS -->
  <script src="js/nav.js" defer></script>
  <!-- Page-specific JS added per page -->
</body>
</html>
```

### Pattern 2: Design A `@theme` Block

```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #1a1a2e;
  --color-brand-accent: #c2703e;
  --color-brand-surface: #faf8f5;
  --color-brand-ink: #2d2d3a;
  --color-brand-muted: #e8e4de;
  --color-brand-cta: #b85c2f;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Playfair Display", "Georgia", serif;
}
```

### Pattern 3: Full-Bleed Immersive Hero (Design A's Hero Composition)

The hero covers the full viewport with a CSS background treatment. Content is layered on top. This is structurally different from B's asymmetric 60/40 split and C's stacked editorial.

```html
<!-- Full-bleed immersive hero -->
<section class="relative flex min-h-[85vh] items-end pb-20 px-4 sm:px-8 lg:px-16"
         style="background: linear-gradient(135deg, #1a1a2e 0%, #2d2d3a 60%, #1a1a2e 100%);">
  <!-- Subtle geometric overlay -->
  <div class="pointer-events-none absolute inset-0 opacity-10"
       style="background-image: repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(194,112,62,0.3) 80px, rgba(194,112,62,0.3) 81px);"></div>

  <!-- Content: left-aligned, editorial reading flow -->
  <div class="relative max-w-3xl">
    <h1 class="font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
      Das Auto auf Abruf
    </h1>
    <p class="mt-4 max-w-xl text-lg text-white/80">
      Anrufen, fahren und sparen &mdash; Carsharing f&uuml;r M&ouml;ssingen und Umgebung.
    </p>
    <div class="mt-8 flex flex-wrap gap-4">
      <a href="mitglied-werden.html"
         class="inline-flex items-center rounded-md bg-brand-accent px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-cta">
        Mitglied werden
      </a>
      <a href="#inhalt"
         class="inline-flex items-center rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10">
        Mehr erfahren
      </a>
    </div>
  </div>
</section>
```

Key implementation notes:
- `items-end` positions content at the bottom of the viewport, not centered
- Left-aligned by default (no `text-center`, no `items-center`)
- Dark background with subtle geometric overlay lines (the "broadsheet" metaphor)
- `rounded-md` buttons (not pill, not square) -- editorial precision
- 85vh height: shows the beginning of content peeking below

### Pattern 4: Editorial Horizontal Rule Separator (Visual Signature)

Design A's visual signature is horizontal typographic rules -- thin lines between sections that create the newspaper broadsheet feel. No cards, no color bands.

```html
<!-- Section with bottom rule separator -->
<section class="border-b border-brand-muted py-16">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <!-- Content sits directly on brand-surface, no card container -->
    <h2 class="font-display text-2xl font-bold text-brand-ink sm:text-3xl">Section Title</h2>
    <p class="mt-4 max-w-2xl text-brand-ink/80">Content text...</p>
  </div>
</section>

<!-- Accent rule (amber) for emphasis sections -->
<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
  <hr class="border-t-2 border-brand-accent">
</div>
```

The accent rule (2px amber line) appears at key structural boundaries:
- Between hero and first content section
- Before the final CTA block
- Between major content groups on subpages

Standard rule (1px `brand-muted`) separates regular content sections.

### Pattern 5: Left-Aligned Editorial Two-Column Grid

For benefits and feature content, use a two-column grid that reads like newspaper columns -- no card containers.

```html
<section class="border-b border-brand-muted py-16">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <h2 class="font-display text-2xl font-bold sm:text-3xl">Benefits Heading</h2>
    <div class="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
      <div>
        <h3 class="font-display text-lg font-bold">Benefit Title</h3>
        <p class="mt-2 text-brand-ink/80">Benefit description text...</p>
      </div>
      <div>
        <h3 class="font-display text-lg font-bold">Benefit Title</h3>
        <p class="mt-2 text-brand-ink/80">Benefit description text...</p>
      </div>
    </div>
  </div>
</section>
```

### Pattern 6: Sticky Dark Nav Bar

```html
<header class="sticky top-0 z-50 bg-brand-primary shadow-md">
  <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
    <!-- Logo: Inter 600 weight, white -->
    <a href="index.html" class="text-lg font-semibold text-white">teilAuto</a>

    <!-- Desktop links -->
    <div class="hidden items-center gap-6 md:flex" id="primary-nav-desktop">
      <a href="index.html" class="text-sm font-medium text-white/80 transition hover:text-brand-accent"
         aria-current="page">Startseite</a>
      <a href="preise.html" class="text-sm font-medium text-white/80 transition hover:text-brand-accent">Preise</a>
      <a href="fahrzeuge.html" class="text-sm font-medium text-white/80 transition hover:text-brand-accent">Fahrzeuge</a>
      <a href="geschaeftskunden.html" class="text-sm font-medium text-white/80 transition hover:text-brand-accent">Fuer Firmen</a>
      <a href="ueber-uns.html" class="text-sm font-medium text-white/80 transition hover:text-brand-accent">Ueber uns</a>
      <a href="mitglied-werden.html" class="text-sm font-medium text-white/80 transition hover:text-brand-accent">Mitglied werden</a>
    </div>

    <!-- Phone number (desktop) -->
    <a href="tel:07473922202" class="hidden text-sm font-semibold text-brand-accent md:block">07473-922202</a>

    <!-- Mobile hamburger -->
    <button type="button" class="md:hidden text-white" aria-controls="primary-nav" aria-expanded="false"
            aria-label="Navigationsmenue oeffnen">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </nav>

  <!-- Mobile nav overlay -->
  <div id="primary-nav" class="hidden flex-col items-center gap-6 bg-brand-primary px-4 py-8 md:hidden">
    <a href="index.html" class="font-display text-lg text-white">Startseite</a>
    <a href="preise.html" class="font-display text-lg text-white">Preise</a>
    <a href="fahrzeuge.html" class="font-display text-lg text-white">Fahrzeuge</a>
    <a href="geschaeftskunden.html" class="font-display text-lg text-white">Fuer Firmen</a>
    <a href="ueber-uns.html" class="font-display text-lg text-white">Ueber uns</a>
    <a href="mitglied-werden.html" class="font-display text-lg text-white">Mitglied werden</a>
    <a href="tel:07473922202" class="mt-4 rounded-md bg-brand-accent px-6 py-3 text-center font-semibold text-white">
      Jetzt anrufen: 07473-922202
    </a>
  </div>
</header>
```

Active page indicator: `border-b-2 border-brand-accent` underline on the active link.

### Pattern 7: Homepage Section Ordering (Design A)

Design A's homepage follows this content flow -- structurally different from B (cost-forward) and C:

1. **Full-bleed immersive hero** -- dark navy background, left-aligned headline, 85vh
2. **Amber accent rule** -- 2px visual separator
3. **Membership gate** -- italic one-liner in Inter 500: "Machen Sie mit -- werden Sie Mitglied!"
4. **Convenience benefits** -- editorial two-column grid (no cards), ruled sections
5. **Trust proof** -- "Persoenlich statt anonym" section, family-run emphasis
6. **Cost teaser** -- brief pricing preview linking to preise.html
7. **How it works** -- 3-step process (Anrufen, Kennenlernen, Losfahren)
8. **Final CTA** -- phone number at 2rem, amber accent
9. **Footer** -- dark navy, links, legal

This is a **storytelling** arc: convenience -> trust -> cost -> action.
Design B leads with cost. Design C TBD from Phase 26 (likely community/personal).

### Pattern 8: MapLibre Integration on fahrzeuge.html

```html
<!-- In <head> -->
<link href="https://unpkg.com/maplibre-gl@5.17.0/dist/maplibre-gl.css" rel="stylesheet" />
<script src="https://unpkg.com/maplibre-gl@5.17.0/dist/maplibre-gl.js" defer></script>
<script src="js/fleet-map.js" defer></script>

<!-- In page body -->
<section class="border-b border-brand-muted py-16">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <h2 class="font-display text-2xl font-bold sm:text-3xl">Unsere Standorte</h2>
    <p class="mt-4 text-brand-ink/80">Finden Sie den naechsten Stellplatz.</p>
    <div id="fleet-map" class="fleet-map mt-8"></div>
  </div>
</section>
```

### Pattern 9: pricing.js Integration on preise.html

```html
<!-- In <head> -->
<script src="js/pricing.js" defer></script>

<!-- In page body -->
<section class="border-b border-brand-muted py-16">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div id="pricing-values"></div>
  </div>
</section>
<section class="border-b border-brand-muted py-16">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div id="pricing-examples"></div>
  </div>
</section>
<section class="py-16">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div id="pricing-disclaimer"></div>
  </div>
</section>
```

The pricing.js renders into these container divs using DOM APIs. It uses Tailwind classes like `text-2xl font-display`, `rounded-2xl bg-brand-surface` etc. The Design A editorial aesthetic can be achieved by:
- Adding `border-b border-brand-muted` to the section containers (consistent ruled layout)
- The JS-rendered content already uses the brand tokens, so it will pick up the `@theme` values

**Important:** The local copy of pricing.js must update the CSS class names if the editorial design uses different component patterns. The existing pricing.js uses `rounded-2xl bg-brand-surface p-4` which implies cards. For the editorial no-card design, adapt the pricing.js class names to remove rounded cards and use ruled layout instead.

### Structural Differentiation Matrix

| Dimension | Design A (This) | Design B | Design C |
|-----------|-----------------|----------|----------|
| **Hero composition** | Full-bleed immersive (dark bg, content layered) | Asymmetric split (60/40) | Stacked editorial / TBD from Phase 26 |
| **Nav pattern** | Sticky dark top bar (navy) | Floating pill navigation | Non-sticky / TBD from Phase 26 |
| **Content containers** | No cards -- horizontal rule separators | Data-forward cards with large numbers | Cards (likely rounded, warm) |
| **Visual signature** | Horizontal typographic rules (amber accent lines) | Diagonal accent lines (45-degree CSS) | TBD (clip-path, oversized numbers, etc.) |
| **Content flow** | Storytelling: convenience -> trust -> cost -> CTA | Cost-forward: savings -> convenience -> community | TBD from Phase 26 |
| **Reading flow** | Left-aligned editorial (not centered) | Asymmetric (content-left, visual-right) | TBD |
| **Typography** | Serif display (Playfair) + sans body (Inter) | Sans display (Plus Jakarta Sans) + sans body (Inter) | TBD |
| **Color family** | Dark navy + burnt amber on warm off-white | Deep forest green + electric lime on cool white | TBD |

**Structural differences vs Design B:** 5+ (hero, nav style, containers, visual signature, content flow, typography tradition)
**Structural differences vs Design C:** 3+ minimum guaranteed (hero, visual signature, nav; more once Phase 26 defines C)

### Anti-Patterns to Avoid

- **Card creep:** Do NOT add `rounded-*` card containers. The editorial identity depends on open content with ruled separators. If you add cards, it becomes another chroma.
- **Centered everything:** Do NOT center all content. Left-aligned reading flow is a structural differentiator. Hero content is left-aligned. Section headings are left-aligned. Only specific elements (3-step process, CTA blocks) may be centered.
- **Same section ordering:** Do NOT use hero -> gate -> benefits -> pricing -> CTA (the v1.2 universal ordering). Design A's storytelling arc must be: hero -> gate -> convenience -> trust -> cost teaser -> how-it-works -> CTA.
- **Light nav bar:** Do NOT use a white/light nav bar. The dark navy sticky bar is a Design A structural element.
- **Pill buttons:** Do NOT use `rounded-full` buttons. Design A uses `rounded-md` -- editorial precision, not friendly pills.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Pricing display | Custom pricing HTML | Existing `pricing.js` (local copy) | It handles TODO badges, EUR formatting, labeled breakdowns, and error states. Already built and tested. |
| Fleet map | Custom map integration | Existing `fleet-map.js` (local copy) | MapLibre markers, popups, scroll-zoom behavior, keyboard a11y already implemented. |
| Mobile nav toggle | CSS-only hamburger | Existing `nav.js` pattern (local copy) | Aria-expanded toggle, Escape key close, active page detection already implemented. |
| FAQ accordion | Custom expand/collapse | Existing `accordion.js` (local copy) | Handles single-open behavior, aria attributes, icon toggle. |
| Responsive typography | Manual font-size per breakpoint | Tailwind `text-*` utilities + `clamp()` in base.css | Fluid scaling is well-solved by Tailwind's responsive prefix system. |
| MapLibre popup styles | Custom popup CSS | Adapted `base.css` fleet-map styles | The `.fleet-marker`, `.fleet-popup` classes are already designed and tested. |

**Key insight:** The four JS files from `site/public/js/` solve all the interactive behavior needed. Copy them locally, adjust relative paths, and adapt CSS class names to match the editorial aesthetic. Do not rewrite the logic.

---

## Common Pitfalls

### Pitfall 1: pricing.js Relative Path Resolution
**What goes wrong:** `pricing.js` uses `var PRICING_URL = "./data/pricing.json"` which resolves relative to the HTML page (e.g., `site/epic/a/data/pricing.json`), not relative to the script file. Since there is no `data/` directory inside `site/epic/a/`, the fetch fails silently with a fallback error message.
**Why it happens:** JavaScript `fetch()` resolves relative URLs against the document base URL, not the script's location.
**How to avoid:** Copy `pricing.js` to `site/epic/a/js/pricing.js` and change `PRICING_URL` to `"../../public/data/pricing.json"`. This is exactly what Design B does.
**Warning signs:** Pricing section shows "Preisinformationen konnten nicht geladen werden" error message.

### Pitfall 2: fleet-map.js Icon Paths
**What goes wrong:** `fleet-map.js` uses absolute paths like `/img/cars/mokka-icon.svg` for marker icons. When serving from a local file or a subdirectory, these absolute paths don't resolve correctly.
**Why it happens:** The original fleet-map.js was designed for the build output at the site root.
**How to avoid:** Copy `fleet-map.js` to `site/epic/a/js/fleet-map.js` and change `iconUrl` values to `"../../public/img/cars/mokka-icon.svg"` etc.
**Warning signs:** Map renders but markers have no icons (broken image references in popups).

### Pitfall 3: Tailwind v4 Content Path Configuration
**What goes wrong:** Running `npx @tailwindcss/cli` without specifying `--content` causes Tailwind to scan the wrong files or miss the HTML entirely, producing a CSS output with no utility classes.
**Why it happens:** Tailwind v4 auto-detects content files but may not find HTML files in `epic/a/` unless told where to look.
**How to avoid:** Always specify `--content "epic/a/**/*.html"` in the CLI command. Alternatively, Tailwind v4 uses `@source` directives in the CSS file: add `@source "*.html";` to `style.css`.
**Warning signs:** Pages render with no styling (only browser defaults).

### Pitfall 4: Card Creep in Editorial Design
**What goes wrong:** While building pages, it's tempting to wrap content in `rounded-* bg-* p-* shadow-*` containers. This gradually turns the editorial broadsheet into another card-based chroma.
**Why it happens:** Cards are the default instinct for organizing content visually. The editorial design requires restraint.
**How to avoid:** Use `border-b border-brand-muted` between sections instead of card containers. Content sits directly on the `brand-surface` background. Only structured data (pricing tables, vehicle specs) gets border treatment.
**Warning signs:** If you see more than 2-3 elements with `rounded-*` + `bg-*` + `shadow-*` on a page, the editorial identity is being lost.

### Pitfall 5: Missing Umlaut Encoding
**What goes wrong:** German umlauts (ae, oe, ue, ss) break or display as mojibake.
**Why it happens:** Missing `<meta charset="UTF-8">` or inconsistent encoding in the HTML file.
**How to avoid:** Every HTML file must start with `<!DOCTYPE html>` and include `<meta charset="UTF-8">` in `<head>`. Use HTML entities (`&auml;`, `&ouml;`, `&uuml;`, `&szlig;`) as the existing codebase does, or ensure UTF-8 encoding throughout.
**Warning signs:** "M??ssingen" instead of "Moessingen" in rendered page.

### Pitfall 6: Dark Hero Text Contrast
**What goes wrong:** With the dark navy hero background, if text colors aren't explicitly set to white, they inherit `brand-ink` (dark) and become invisible.
**Why it happens:** Tailwind body defaults to `text-brand-ink`. Inside the dark hero, every text element needs explicit `text-white` or `text-white/80`.
**How to avoid:** Every text element inside the hero section must have an explicit white color class. Do not rely on inheritance from parent.
**Warning signs:** Hero appears as a dark rectangle with no visible text.

### Pitfall 7: Horizontal Rules Disappearing on Mobile
**What goes wrong:** Thin 1px borders between sections become invisible on small mobile screens, especially on lower-DPI devices.
**Why it happens:** 1px lines at low contrast can vanish depending on device rendering.
**How to avoid:** Use `border-brand-muted` (which has enough contrast against `brand-surface`). The accent rules use 2px width and amber color for guaranteed visibility.
**Warning signs:** Pages look like one continuous blob of text on mobile with no visual section separation.

---

## Code Examples

### Tailwind v4 @source Directive (Alternative to --content Flag)

```css
/* style.css */
@import "tailwindcss";
@source "*.html";

@theme {
  --color-brand-primary: #1a1a2e;
  --color-brand-accent: #c2703e;
  --color-brand-surface: #faf8f5;
  --color-brand-ink: #2d2d3a;
  --color-brand-muted: #e8e4de;
  --color-brand-cta: #b85c2f;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Playfair Display", "Georgia", serif;
}
```

The `@source "*.html"` directive tells Tailwind v4 to scan HTML files in the same directory for class usage. This is the v4-native approach -- no need for `--content` CLI flag.

### base.css for Design A (Fleet Map + Editorial Base Styles)

```css
@layer base {
  :root {
    color-scheme: light;
  }

  body {
    margin: 0;
    font-family: "Inter", system-ui, sans-serif;
    line-height: 1.6;
    background-color: #faf8f5;
    color: #2d2d3a;
  }

  h1, h2, h3, h4 {
    font-family: "Playfair Display", "Georgia", serif;
    letter-spacing: -0.02em;
    color: #2d2d3a;
  }

  h1 { font-size: clamp(2rem, calc(1.5rem + 2vw), 3.5rem); line-height: 1.1; }
  h2 { font-size: clamp(1.5rem, calc(1.25rem + 1.25vw), 2.25rem); line-height: 1.2; }
  h3 { font-size: clamp(1.125rem, calc(1rem + 0.625vw), 1.5rem); line-height: 1.3; }

  img, svg { display: block; max-width: 100%; }

  a { color: #c2703e; text-decoration: none; }
  a:hover { text-decoration: underline; }

  :focus-visible {
    outline: 2px solid #c2703e;
    outline-offset: 2px;
  }

  html { scroll-behavior: smooth; }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }
}

/* Fleet map styles -- adapted for Design A colors */
.fleet-map {
  width: 100%;
  height: 420px;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #e8e4de;
}

@media (min-width: 640px) { .fleet-map { height: 480px; } }
@media (min-width: 1024px) { .fleet-map { height: 520px; } }

.fleet-marker {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  border: 2px solid #c2703e;
  background: #faf8f5;
  cursor: pointer;
  display: grid;
  place-items: center;
}

.fleet-marker::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background: #c2703e;
}

.fleet-marker--planned {
  background: #faf8f5;
  border-style: dashed;
}

.fleet-marker--planned::before {
  background: transparent;
  border: 2px solid #c2703e;
}

.fleet-popup { display: flex; gap: 12px; align-items: flex-start; max-width: 280px; }
.fleet-popup__icon { width: 44px; height: 44px; flex: 0 0 auto; }
.fleet-popup__title { font-weight: 700; }
.fleet-popup__location { margin-top: 2px; font-size: 0.8rem; opacity: 0.7; }
.fleet-popup__features { margin-top: 6px; padding-left: 0; list-style: none; font-size: 0.8rem; opacity: 0.75; }
.fleet-popup__features li + li { margin-top: 2px; }
.maplibregl-popup-content { border-radius: 8px; font-family: inherit; }
.maplibregl-ctrl-attrib { font-size: 11px; line-height: 1.3; }
```

Note the differences from v1.2 base.css: `border-radius: 0.5rem` on the map (not 1rem), amber accent colors on markers, editorial line-height (1.6 vs 1.5).

### Legal Page Pattern (Impressum / Datenschutz)

Legal pages use a narrower max-width and standard prose typography:

```html
<main>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h1 class="font-display text-3xl font-bold sm:text-4xl">Impressum</h1>
      <p class="mt-2 text-sm text-brand-ink/60">Angaben gemaess &sect; 5 DDG</p>

      <div class="mt-10 space-y-8 text-brand-ink/80 leading-relaxed">
        <!-- Long-form legal text sections -->
        <div class="space-y-3">
          <h2 class="font-display text-xl font-bold text-brand-ink">Anbieter</h2>
          <address class="not-italic">
            teilAuto Moessingen e.K.<br>
            ...
          </address>
        </div>
        <!-- More sections... -->
      </div>
    </div>
  </section>
</main>
```

### Footer Pattern

```html
<footer class="bg-brand-primary py-12 text-white/80">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-8 md:grid-cols-3">
      <div>
        <p class="font-semibold text-white">teilAuto Moessingen</p>
        <p class="mt-2 text-sm">Carsharing fuer Moessingen und Umgebung.</p>
      </div>
      <div>
        <p class="font-semibold text-white">Navigation</p>
        <ul class="mt-2 space-y-1 text-sm">
          <li><a href="preise.html" class="hover:text-brand-accent">Preise</a></li>
          <li><a href="fahrzeuge.html" class="hover:text-brand-accent">Fahrzeuge</a></li>
          <li><a href="mitglied-werden.html" class="hover:text-brand-accent">Mitglied werden</a></li>
          <li><a href="ueber-uns.html" class="hover:text-brand-accent">Ueber uns</a></li>
        </ul>
      </div>
      <div>
        <p class="font-semibold text-white">Kontakt</p>
        <p class="mt-2 text-sm">
          <a href="tel:07473922202" class="text-brand-accent hover:underline">07473-922202</a>
        </p>
        <div class="mt-4 space-x-4 text-sm">
          <a href="impressum.html" class="hover:text-brand-accent">Impressum</a>
          <a href="datenschutz.html" class="hover:text-brand-accent">Datenschutz</a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Tera template build pipeline | Standalone HTML files per epic skin | v1.3 (March 2026) | No build dependency; each HTML file is fully self-contained |
| `tailwind.config.js` theming | Tailwind v4 `@theme` block in CSS | Tailwind v4 (2024) | Tokens defined in CSS, not JS config. Simpler, co-located. |
| v1.2 chromas (same skeleton) | v1.3 epic skins (different skeletons) | v1.3 (March 2026) | Each design has unique hero, nav, content flow, visual signature |
| Branch-per-design (`design/a`, etc.) | Directory-per-design (`site/epic/a/`) on same branch | v1.3 (March 2026) | Enables parallel agent work without branch conflicts |
| `@tailwindcss/browser` CDN | `@tailwindcss/cli` build | Both valid for v4 | CLI produces clean CSS output with no runtime overhead; CDN is simpler but heavier |

**v1.2 codebase salvageability:**
- **Copy/content:** HIGH value. The German text from `site/src/` pages is verified and can be reframed. Reuse meta descriptions, pricing section text, vehicle specs, legal page content.
- **Structure:** LOW value. The Tera template structure (`{% extends "base.html" %}`, `{% block %}`) cannot be used. All pages must be standalone HTML.
- **JS files:** HIGH value. All four JS files (pricing.js, fleet-map.js, nav.js, accordion.js) work with minor path corrections.
- **CSS:** MEDIUM value. The base.css patterns (fleet-map styles, focus-visible, responsive map heights) are directly reusable. The `@theme` block values are Design A's own.

---

## Open Questions

1. **Phase 26 Epic Directions document does not exist yet**
   - What we know: Phase 26 is supposed to produce `26-EPIC-DIRECTIONS.md` with structural signatures for A, B, and C before any skin implementation begins.
   - What's unclear: The exact specification for Direction A hasn't been written. This research uses the v1.2 Direction A "Editorial Broadsheet" as the aesthetic baseline and defines structural changes that make it an epic skin.
   - Recommendation: This research provides enough structural definition for the planner to proceed. If Phase 26 produces different structural choices for Direction A, the plan should adapt accordingly. The structural elements chosen here (full-bleed immersive hero, editorial rules, left-aligned flow) are consistent with the broadsheet identity and are distinct from B and C.

2. **pricing.js CSS class compatibility**
   - What we know: pricing.js renders DOM elements with hardcoded Tailwind classes like `rounded-2xl bg-brand-surface p-4` which imply card styling.
   - What's unclear: Whether to modify pricing.js class names to match the editorial no-card aesthetic, or accept card-like pricing rendering as the one exception.
   - Recommendation: Accept the pricing.js output as-is. The `bg-brand-surface` and `rounded-2xl` treatment on the pricing section is an acceptable exception since it's data-heavy structured content. The editorial identity is maintained through the page-level ruled layout.

3. **Tailwind CLI vs CDN for Design A**
   - What we know: Design B uses CLI build. Design C uses CDN browser runtime.
   - Recommendation: Use CLI build (consistent with Design B) for cleaner output. The `@source "*.html"` directive in `style.css` handles content detection.

---

## Sources

### Primary (HIGH confidence)
- `site/src/` -- v1.2 Design C codebase (Tera templates, CSS, content patterns)
- `site/public/js/` -- pricing.js, fleet-map.js, nav.js, accordion.js (established JS patterns)
- `site/public/data/pricing.json` -- pricing data structure and format
- `.planning/v1.3-MILESTONE-BRIEF.md` -- epic skin standard, shared constraints, phase structure
- `.planning/phases/20-research/20-DESIGN-DIRECTIONS.md` -- v1.2 Direction A specification (Editorial Broadsheet)
- `.planning/phases/28-epic-skin-b/28-RESEARCH.md` -- Design B structural claims (must not overlap)
- `.planning/phases/29-epic-skin-c/29-RESEARCH.md` -- Design C structural claims (must not overlap)
- `site/epic/b/style.css` -- Design B @theme block and visual signature CSS pattern
- `site/package.json` -- Tailwind v4.1.18 version confirmed

### Secondary (MEDIUM confidence)
- Tailwind CSS v4 `@theme` and `@source` directives -- based on v4 documentation and established project patterns
- Google Fonts CDN -- Playfair Display and Inter confirmed SIL OFL with German character support

### Tertiary (LOW confidence)
- None. All findings verified against project codebase.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- all libraries already in use in project, versions confirmed from package.json
- Architecture: HIGH -- standalone HTML pattern proven by Design B implementation, file structure validated
- Pitfalls: HIGH -- pricing.js and fleet-map.js path issues documented from direct code inspection
- Structural differentiation: MEDIUM -- depends on Phase 26 producing consistent direction specs; current choices are well-reasoned but may need adjustment

**Research date:** 2026-03-09
**Valid until:** 2026-04-09 (stable -- no fast-moving dependencies)
