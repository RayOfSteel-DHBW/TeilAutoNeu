# Phase 28: Epic Skin B - Research

**Researched:** 2026-03-08
**Domain:** Static HTML + Tailwind CSS v4 — structurally distinct design implementation for `site/epic/b/`
**Confidence:** HIGH

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| IMPL-01 | Three structurally distinct ("epic skin") designs implemented as complete sites | Phase 28 implements Design B — structurally distinct via asymmetric split hero, floating nav pill, and cost-forward content flow. Differs from A (editorial broadsheet) and C (Nachbarschaftlich) in at least 3 structural dimensions. |
| IMPL-02 | Each design lives on a dedicated directory (`site/epic/b/`) | Files live in `site/epic/b/` — same git branch (`design/b`), parallel-safe directory structure per v1.3 brief. NOT the Tera build output in `site/build/dist/`. |
| IMPL-03 | Each design covers all 8 pages | index, preise, fahrzeuge, geschaeftskunden, ueber-uns, mitglied-werden, impressum, datenschutz — all 8 as standalone HTML files in `site/epic/b/`. |
| IMPL-04 | Each design is production-ready quality | Playwright visual audit loop at 375px/768px/1280px across all 8 pages before phase complete. |
| IMPL-05 | Each design refined through Playwright screenshot-evaluate loops | Screenshot-fix-rebuild loops; Playwright/Puppeteer MCP tools serve as the Frontend Design Plugin. |
| IMPL-06 | Frontend Design Plugin used for implementation | Playwright screenshots used for visual evaluation and iteration. |
| VIS-01 | Each design has a cohesive type + color system | Design B: Plus Jakarta Sans (headings) + Inter (body) + deep forest green / warm white / electric lime accent. Own `@theme` block. |
| VIS-02 | Modern, professional aesthetic — not artsy or experimental | Asymmetric split hero is a well-established professional layout pattern (used by many SaaS, fintech sites). Geometric visual signature stays clean. |
| VIS-03 | Mobile-first responsive at all standard breakpoints | Tailwind mobile-first. Split hero collapses to stacked at 768px. Floating nav pill remains visible at all breakpoints. |
| VIS-04 | Consistent component language per design | Design B component system: data-forward cards with large typographic numbers, asymmetric hero, floating nav, diagonal accent lines. |
| CONV-01 | Homepage hero optimized for Zweitwagen persona (Simone) | Asymmetric split hero: left side "Kein eigenes Auto nötig" with cost-savings emphasis, right side visual element showing a cost calculation or lifestyle visual. |
| CONV-02 | Membership requirement clearly communicated | Cost-forward section ordering: membership gate and pricing tease appear in the FIRST scroll section, not after benefits. |
| CONV-03 | Phone CTA prominently placed in conversion context | Floating nav pill always visible; phone number in hero section, in sticky bottom floating bar on mobile. |
| CONV-04 | Copy is snappier than v1.1 but based on existing verified content | Cost-forward emotional arc: lead with savings, then convenience, then community. Same verified facts, different emphasis order. |
| STRUCT-01 | Each design direction specifies a unique page skeleton | Section ordering, hero type, nav pattern all differ from Designs A and C. Homepage: hero → cost gate → savings proof → benefits → CTA. |
| STRUCT-02 | No two designs share the same hero composition type | Design B uses asymmetric split (60/40). No other design may use this type. |
| STRUCT-03 | Each design has a unique visual signature element | Design B visual signature: diagonal accent lines (thin, 45-degree CSS borders). Appears in hero, section dividers, cards. |
| STRUCT-04 | Copy strategy varies per design | Design B copy arc: cost savings FIRST, convenience second, community third. Opposite of v1.2 designs which led with convenience. |
| STRUCT-05 | Differentiation matrix proves at least 3 structural differences from each pair | See Architecture Patterns section — 5+ structural differences documented vs. A and C. |
</phase_requirements>

---

## Summary

Phase 28 implements Epic Skin B — a complete 8-page static HTML + Tailwind CSS v4 site in `site/epic/b/`. Unlike the v1.2 chromas (all centered hero, sticky top bar, same section ordering), Epic Skin B achieves structural distinctness through three fundamental skeleton changes: (1) an asymmetric 60/40 split hero that breaks the centered content convention, (2) a floating pill navigation that replaces the sticky top bar, and (3) a cost-forward homepage content flow that leads with savings before benefits.

The v1.2 "Nordic Signal" (Direction B) was the inspiration baseline but was identified as a chroma — same skeleton, different paint. Epic Skin B takes the minimal/clean aesthetic ethos and pushes it into genuinely different structural territory. The visual signature — thin diagonal accent lines at 45 degrees — appears in section dividers and card corners, giving the design a distinctive geometric personality that neither A nor C uses.

Files live in `site/epic/b/` as standalone HTML files (no Tera template inheritance). Each HTML file is self-contained: full `<head>`, inline or `<link>`-referenced CSS from a shared `style.css` in the same directory, and references to shared JS/data from `site/public/` via relative paths.

**Primary recommendation:** Build Design B as standalone HTML files in `site/epic/b/`. Copy `site/public/` asset references using relative paths (`../public/`). Use a single `site/epic/b/style.css` with the `@import "tailwindcss";` + `@theme {}` block. Run Tailwind CLI against this file to produce a compiled CSS output.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Tailwind CSS v4 | ^4.1.18 (already installed) | Utility-first CSS, `@theme` block for Design B tokens | Project-wide constraint. v4 CSS-native theming via `@theme`. |
| Plus Jakarta Sans | Google Fonts CDN | Display / heading font | Modern geometric humanist, strong at large sizes, excellent German support, SIL OFL. Distinct from all v1.2 and v1.3 Design C fonts. |
| Inter | Google Fonts CDN | Body font | Gold-standard legible sans-serif, 400/500/600 weights. German support confirmed. SIL OFL. Distinct from Design C (DM Sans) and Design A (Inter + Playfair). |
| MapLibre GL JS | 5.17.0 (CDN) | Interactive parking map on fahrzeuge.html | Established project pattern. Must preserve. |
| pricing.js | `site/public/js/pricing.js` | Data-driven pricing display | Owner maintains JSON. Relative path: `../public/js/pricing.js`. |
| pricing.json | `site/public/data/pricing.json` | Pricing data source | Relative path from JS: `./data/pricing.json` → will need `../public/data/pricing.json`. |
| fleet-map.js | `site/public/js/fleet-map.js` | Map markers and popups | Relative path: `../public/js/fleet-map.js`. |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| accordion.js | `site/public/js/accordion.js` | FAQ expand/collapse | ueber-uns.html FAQ section |
| nav.js | Site JS (inline or adapted) | Mobile nav toggle | Floating pill nav requires custom JS toggle pattern |
| MapLibre GL CSS | 5.17.0 (CDN) | Map styles | fahrzeuge.html only |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Plus Jakarta Sans | Outfit (v1.2 B) | Outfit is too associated with v1.2 Nordic Signal chroma. Plus Jakarta Sans is fresh. |
| Inter body | DM Sans (v1.3 C) | DM Sans is assigned to Design C. Using it in B would reduce distinctness. |
| Diagonal accent CSS lines | SVG patterns | CSS `transform: rotate(45deg)` borders are simpler, no external files |
| Floating pill nav | Bottom tab bar | Floating pill is more distinctive for desktop; bottom tabs are mobile-native but complicate desktop |

### Installation / Build

Design B does NOT use the Tera template pipeline. Files are standalone HTML in `site/epic/b/`.

**Tailwind CLI for epic skin:**
```bash
cd site
npx @tailwindcss/cli -i epic/b/style.css -o epic/b/tailwind-out.css
```

Or, to watch for changes:
```bash
cd site
npx @tailwindcss/cli -i epic/b/style.css -o epic/b/tailwind-out.css --watch
```

**Fonts CDN link (Design B):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
```

---

## Architecture Patterns

### File Structure

```
site/epic/b/
├── style.css          # @import "tailwindcss" + @theme block + custom CSS
├── tailwind-out.css   # Compiled Tailwind output (generated, not committed)
├── base.css           # Fleet map styles, global base (adapted from site/src/base.css)
├── index.html         # Homepage — asymmetric split hero
├── preise.html        # Pricing — leads with cost comparison table
├── fahrzeuge.html     # Fleet + map
├── geschaeftskunden.html
├── ueber-uns.html
├── mitglied-werden.html
├── impressum.html
└── datenschutz.html
```

Note: `pricing.js` and `fleet-map.js` are referenced from `site/public/js/` via relative path `../public/js/`. The `pricing.json` path inside `pricing.js` is hardcoded as `./data/pricing.json` — which means `data/pricing.json` must be relative to the HTML page. Solution: reference `../public/data/pricing.json` from a local `data/` symlink OR copy the relevant JS call to point at the correct relative path. Best approach: copy `pricing.js` into `site/epic/b/js/pricing.js` with `PRICING_URL` updated to `"../public/data/pricing.json"`.

### HTML Page Template (self-contained, no Tera)

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] | teilAuto Mössingen</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="tailwind-out.css">
  <link rel="stylesheet" href="base.css">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="de_DE">
</head>
<body class="min-h-screen bg-brand-surface text-brand-ink font-sans">
  <a class="sr-only focus:not-sr-only" href="#main-content">Zum Inhalt springen</a>
  <!-- Floating nav pill (replaces sticky top bar) -->
  <!-- [nav markup] -->
  <main id="main-content">
    <!-- Page content -->
  </main>
  <footer class="bg-brand-primary text-white">
    <!-- Footer -->
  </footer>
  <!-- Mobile bottom phone bar -->
  <div class="fixed inset-x-0 bottom-0 z-40 p-3 lg:hidden">
    <a href="tel:+4974739222020"
       class="flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg">
      Jetzt anrufen: 07473-922202
    </a>
  </div>
  <script src="js/nav.js" defer></script>
</body>
</html>
```

### Design B @theme Block

```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #1b4332;
  --color-brand-accent: #a3e635;
  --color-brand-surface: #f8faf8;
  --color-brand-ink: #0f1f17;
  --color-brand-muted: #e8f0eb;
  --color-brand-highlight: #d9f99d;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
}
```

Token rationale:
- `brand-primary` `#1b4332` — deep forest green. Not the monochromatic green of v1.1 (#0f5f3c) — darker and more premium. Creates contrast against the near-white surface.
- `brand-accent` `#a3e635` — electric lime. The single "signal" color — bold, modern, unexpected. Buttons, active states, the diagonal signature lines. Very different from v1.2 Design B's teal or Design C's terracotta.
- `brand-surface` `#f8faf8` — near-white with a greenish tint (not pure white, not cream). Clean but not sterile.
- `brand-ink` `#0f1f17` — very dark green-black. Body text. High contrast.
- `brand-muted` `#e8f0eb` — light sage for subtle section backgrounds, card surfaces.
- `brand-highlight` `#d9f99d` — pale lime for highlighted stat backgrounds.
- Fonts: Plus Jakarta Sans (headings, 500–800) + Inter (body, 400–600). Two-font system with clear role distinction.

**Why this palette is structurally distinct:**
- Not green-monochrome like v1.1 (uses a single electric lime accent on dark green, very different visual weight)
- Not teal/near-white (v1.2 B)
- Not terracotta/cream (v1.2 C / v1.3 C)
- Not navy/amber (v1.2 A / v1.3 A)
- The electric lime accent is the most distinctive single color choice across all designs

### Pattern 1: Asymmetric Split Hero (Design B's unique hero type)

**What:** 60/40 left/right split at desktop. Left: large heading + cost-savings hook + CTA. Right: visual element (geometric abstract or large typographic stat). At mobile (< 768px): stacked, left content above right visual.

**When to use:** Homepage hero only. This is the unique hero composition for Design B.

```html
<!-- Asymmetric split hero -->
<section class="relative min-h-[calc(90vh-0px)] overflow-hidden bg-brand-primary">
  <!-- Diagonal accent line (visual signature) -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 right-[38%] h-full w-0.5 bg-brand-accent/30 -skew-x-3"></div>
  </div>

  <div class="mx-auto flex min-h-[calc(90vh-0px)] max-w-7xl items-center">
    <!-- Left: 60% — content column -->
    <div class="flex w-full flex-col justify-center px-6 py-20 sm:px-12 lg:w-3/5 lg:py-32">
      <!-- Eyebrow tag -->
      <span class="inline-flex w-fit items-center rounded-full border border-brand-accent/40 px-3 py-1 text-xs font-semibold text-brand-accent">
        Carsharing in M&ouml;ssingen
      </span>
      <!-- Main heading -->
      <h1 class="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        Kein eigenes Auto &mdash;<br>
        <span class="text-brand-accent">trotzdem mobil.</span>
      </h1>
      <p class="mt-6 max-w-md text-lg text-white/70">
        Nur zahlen, wenn Sie fahren. Versicherung, Wartung und Stellplatz inklusive &mdash; alles geteilt, nichts vermisst.
      </p>
      <!-- CTAs -->
      <div class="mt-10 flex flex-wrap gap-4">
        <a href="mitglied-werden.html"
           class="inline-flex items-center rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-brand-primary shadow-lg transition hover:brightness-110">
          Mitglied werden &rarr;
        </a>
        <a href="preise.html"
           class="inline-flex items-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/60">
          Preise ansehen
        </a>
      </div>
    </div>

    <!-- Right: 40% — visual element (desktop only) -->
    <div class="hidden lg:flex lg:w-2/5 lg:flex-col lg:items-center lg:justify-center lg:px-12">
      <!-- Large typographic stat block — Design B's distinctive visual element -->
      <div class="relative rounded-2xl border border-brand-accent/20 bg-brand-surface/8 p-8 backdrop-blur-sm">
        <p class="font-display text-7xl font-extrabold text-brand-accent">~60</p>
        <p class="mt-1 text-sm font-medium text-white/60">Mitglieder teilen</p>
        <p class="font-display text-7xl font-extrabold text-white">2</p>
        <p class="mt-1 text-sm font-medium text-white/60">Fahrzeuge in M&ouml;ssingen</p>
        <!-- Diagonal accent line detail -->
        <div class="absolute -bottom-2 -right-2 h-16 w-16 overflow-hidden">
          <div class="h-0.5 w-24 origin-left rotate-45 bg-brand-accent"></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

Key properties:
- Dark background (`bg-brand-primary` deep forest green) — ONLY design with a dark-background hero
- Asymmetric split `lg:w-3/5` / `lg:w-2/5` — NOT centered, NOT full-bleed image
- Electric lime accent (`text-brand-accent`) on select words — the signal color
- Right column: typographic stat block showing ~60 members / 2 vehicles (verified data)
- Diagonal line element in hero (visual signature preview)

### Pattern 2: Floating Pill Navigation (Design B's unique nav pattern)

**What:** Navigation lives in a floating pill container that scrolls with the page (fixed position) rather than being a sticky header. At desktop, it floats in the top-center. At mobile, it's hidden and replaced by a hamburger trigger in the hero area.

**Why:** Breaks the universal "sticky top bar" convention used in ALL v1.2 designs and in most websites. Creates a visually distinctive frame for the content.

```html
<!-- Floating nav pill — unique to Design B -->
<nav class="fixed top-4 left-1/2 z-50 -translate-x-1/2"
     aria-label="Hauptnavigation"
     id="floating-nav">
  <div class="flex items-center gap-1 rounded-full border border-brand-ink/10 bg-brand-surface/95 px-3 py-2 shadow-xl backdrop-blur-md">
    <!-- Logo (compact) -->
    <a href="index.html"
       class="mr-2 font-display text-sm font-bold text-brand-primary">
      teilAuto
    </a>
    <!-- Desktop links (hidden below lg) -->
    <div class="hidden items-center gap-1 lg:flex">
      <a href="preise.html"
         class="rounded-full px-3 py-1.5 text-xs font-medium text-brand-ink transition hover:bg-brand-muted hover:text-brand-primary aria-[current=page]:bg-brand-primary aria-[current=page]:text-white">
        Preise
      </a>
      <a href="fahrzeuge.html"
         class="rounded-full px-3 py-1.5 text-xs font-medium text-brand-ink transition hover:bg-brand-muted hover:text-brand-primary aria-[current=page]:bg-brand-primary aria-[current=page]:text-white">
        Fahrzeuge
      </a>
      <a href="geschaeftskunden.html"
         class="rounded-full px-3 py-1.5 text-xs font-medium text-brand-ink transition hover:bg-brand-muted hover:text-brand-primary aria-[current=page]:bg-brand-primary aria-[current=page]:text-white">
        F&uuml;r Firmen
      </a>
      <a href="ueber-uns.html"
         class="rounded-full px-3 py-1.5 text-xs font-medium text-brand-ink transition hover:bg-brand-muted hover:text-brand-primary aria-[current=page]:bg-brand-primary aria-[current=page]:text-white">
        &Uuml;ber uns
      </a>
    </div>
    <!-- CTA pill always visible -->
    <a href="mitglied-werden.html"
       class="ml-2 rounded-full bg-brand-primary px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-primary/90">
      Mitglied werden
    </a>
    <!-- Mobile hamburger -->
    <button class="ml-1 rounded-full p-1.5 text-brand-ink transition hover:bg-brand-muted lg:hidden"
            type="button"
            aria-controls="mobile-nav"
            aria-expanded="false"
            aria-label="Navigationsmenü öffnen">
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
</nav>

<!-- Mobile nav overlay -->
<div id="mobile-nav"
     class="fixed inset-0 z-[60] hidden flex-col items-center justify-center bg-brand-primary"
     aria-label="Mobile Navigation">
  <!-- Close button -->
  <button class="absolute right-4 top-4 rounded-full bg-brand-surface/20 p-2 text-white"
          type="button"
          aria-label="Menü schließen"
          onclick="document.getElementById('mobile-nav').classList.add('hidden');document.getElementById('mobile-nav').classList.remove('flex');document.querySelector('[aria-controls=mobile-nav]').setAttribute('aria-expanded','false')">
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
  <!-- Mobile nav links — large, centered -->
  <div class="flex flex-col items-center gap-6">
    <a href="index.html" class="font-display text-2xl font-bold text-white transition hover:text-brand-accent">Startseite</a>
    <a href="preise.html" class="font-display text-2xl font-bold text-white transition hover:text-brand-accent">Preise</a>
    <a href="fahrzeuge.html" class="font-display text-2xl font-bold text-white transition hover:text-brand-accent">Fahrzeuge</a>
    <a href="geschaeftskunden.html" class="font-display text-2xl font-bold text-white transition hover:text-brand-accent">F&uuml;r Firmen</a>
    <a href="ueber-uns.html" class="font-display text-2xl font-bold text-white transition hover:text-brand-accent">&Uuml;ber uns</a>
    <a href="mitglied-werden.html" class="mt-4 rounded-full bg-brand-accent px-8 py-3 font-display text-lg font-bold text-brand-primary">Mitglied werden</a>
    <a href="tel:+4974739222020" class="text-lg font-semibold text-white/80 hover:text-white">07473-922202</a>
  </div>
  <!-- Diagonal lines decoration (visual signature in mobile nav) -->
  <div class="pointer-events-none absolute bottom-0 right-0 h-32 w-32 overflow-hidden opacity-20">
    <div class="h-0.5 w-48 origin-right -rotate-45 bg-brand-accent"></div>
    <div class="mt-8 h-0.5 w-48 origin-right -rotate-45 bg-brand-accent"></div>
  </div>
</div>
```

**Critical nav implementation note:** The floating pill nav requires the page body NOT to have a top-padding reserved for a header. Content starts from `pt-0` and the floating nav overlaps the content. The dark hero background behind the floating nav still reads well because the nav uses `bg-brand-surface/95` (light) with `shadow-xl` for contrast against any background. For light-background inner pages, the nav still works.

### Pattern 3: Homepage Section Ordering (Design B's unique content flow)

**Design B leads with cost savings, NOT convenience or community.**

```
HOMEPAGE SECTION ORDER:
1. Asymmetric split hero (dark, 90vh) — "Kein eigenes Auto — trotzdem mobil"
2. Savings hook (full-width, brand-surface) — "Was kostet ein Zweitwagen wirklich?" cost comparison
3. Membership gate (brand-muted band) — "Mitglied werden: So einfach wie eine Bibliothek"
4. How it works (brand-surface, 3-step horizontal) — schnell, persönlich, günstig
5. Fleet preview (brand-primary dark) — 2 Fahrzeuge, Quernutzung
6. Final CTA (brand-accent lime) — phone number prominent
```

This differs from ALL v1.2 designs (hero → gate → 2col benefits → 3col secondary → CTA) and from what Designs A and C are expected to use.

### Pattern 4: Visual Signature — Diagonal Accent Lines

**What:** Thin (1-2px) diagonal lines at 45 degrees in `brand-accent` (electric lime) color. Appear as: section dividers, card corner decorations, hero background element. CSS-only, no SVG files needed.

```css
/* In style.css or base.css — diagonal line utility */
.diagonal-rule {
  position: relative;
}
.diagonal-rule::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--color-brand-accent), transparent);
  transform: skewX(-3deg);
}
```

For card corner accents (inline HTML approach):
```html
<div class="relative overflow-hidden rounded-xl bg-brand-muted p-6">
  <!-- Content -->
  <div class="pointer-events-none absolute -right-4 -bottom-4 h-12 w-12 overflow-hidden opacity-50">
    <div class="h-0.5 w-16 origin-left rotate-45 bg-brand-accent translate-x-4 translate-y-2"></div>
  </div>
</div>
```

### Pattern 5: Cost-Forward Savings Section (new layout not in v1.2)

This is the "at least one page demonstrates a layout pattern not used in any v1.2 chroma" requirement.

```html
<!-- Section 2: Savings comparison — unique to Design B -->
<section class="py-20 bg-brand-surface">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="mb-12 text-center">
      <p class="font-display text-xs font-semibold uppercase tracking-widest text-brand-accent">Warum teilAuto?</p>
      <h2 class="mt-2 font-display text-3xl font-bold text-brand-ink sm:text-4xl">
        Was kostet ein Zweitwagen wirklich?
      </h2>
    </div>

    <!-- Two-column comparison: Own car vs. teilAuto -->
    <div class="grid gap-4 md:grid-cols-2">
      <!-- Own car costs (illustrative) -->
      <div class="rounded-2xl border border-brand-muted bg-brand-surface p-8">
        <h3 class="font-display text-lg font-semibold text-brand-ink/60">Eigenes Zweitauto</h3>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between border-b border-brand-muted pb-3">
            <span class="text-sm text-brand-ink/70">Versicherung</span>
            <span class="font-semibold text-brand-ink">ab ~600 EUR/Jahr</span>
          </div>
          <div class="flex items-center justify-between border-b border-brand-muted pb-3">
            <span class="text-sm text-brand-ink/70">Kfz-Steuer</span>
            <span class="font-semibold text-brand-ink">ab ~100 EUR/Jahr</span>
          </div>
          <div class="flex items-center justify-between border-b border-brand-muted pb-3">
            <span class="text-sm text-brand-ink/70">Wartung &amp; TÜV</span>
            <span class="font-semibold text-brand-ink">ab ~300 EUR/Jahr</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-brand-ink/70">Stellplatz</span>
            <span class="font-semibold text-brand-ink">je nach Lage</span>
          </div>
        </div>
        <p class="mt-4 text-xs text-brand-ink/40">Ohne Kraftstoff und Abschreibung.</p>
      </div>

      <!-- teilAuto costs (from pricing.json, verified) -->
      <div class="rounded-2xl border-2 border-brand-accent bg-brand-highlight/30 p-8">
        <h3 class="font-display text-lg font-semibold text-brand-primary">teilAuto Mitglied</h3>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between border-b border-brand-accent/20 pb-3">
            <span class="text-sm text-brand-ink/70">Jahresbeitrag</span>
            <span class="font-semibold text-brand-primary" id="pricing-join-fee">wird geladen…</span>
          </div>
          <div class="flex items-center justify-between border-b border-brand-accent/20 pb-3">
            <span class="text-sm text-brand-ink/70">Versicherung inklusive</span>
            <span class="font-semibold text-brand-primary">&#10003;</span>
          </div>
          <div class="flex items-center justify-between border-b border-brand-accent/20 pb-3">
            <span class="text-sm text-brand-ink/70">Kraftstoff inklusive</span>
            <span class="font-semibold text-brand-primary">&#10003;</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-brand-ink/70">Nur zahlen, wenn Sie fahren</span>
            <span class="font-semibold text-brand-primary">&#10003;</span>
          </div>
        </div>
        <p class="mt-4 text-xs text-brand-ink/40">Ab 3 Monaten, danach monatlich k&uuml;ndbar.</p>
      </div>
    </div>

    <p class="mt-6 text-center text-sm text-brand-ink/50">
      Alle Vergleichswerte zur Orientierung. Genaue Konditionen im pers&ouml;nlichen Gespr&auml;ch.
    </p>
  </div>
</section>
```

Note: The "Eigenes Zweitauto" column uses approximate illustrative figures. These MUST be framed as guidance estimates, not hard claims. The copy "ab ~600 EUR/Jahr" with "Alle Vergleichswerte zur Orientierung" disclaimer is verified-content-safe.

### Pattern 6: Standalone HTML (no Tera)

Each page in `site/epic/b/` is a self-contained HTML file. No template inheritance. Navigation, header, footer must be duplicated across all 8 files. This is a tradeoff accepted for parallel-safe directory isolation.

```
Implication: Changes to nav or footer must be applied to all 8 files.
Mitigation: Write nav/footer once in index.html, copy-paste to all others in one plan step.
```

### Pattern 7: Accessing Shared Assets (pricing.js, fleet-map.js)

The existing JS files in `site/public/js/` reference data at relative paths:

`pricing.js` has `var PRICING_URL = "./data/pricing.json";` — relative to where the HTML page is served.

Since `site/epic/b/` pages are served from `/epic/b/`, the path `./data/pricing.json` would look for `/epic/b/data/pricing.json` which doesn't exist. Two solutions:

**Option A (recommended):** Copy `pricing.js` to `site/epic/b/js/pricing.js` and update `PRICING_URL` to `"../../public/data/pricing.json"`. This is a 1-line change and keeps the file self-contained.

**Option B:** Symlink or copy `pricing.json` to `site/epic/b/data/pricing.json`. Adds file duplication, harder to maintain.

Use Option A for both `pricing.js` and `fleet-map.js` (fleet-map.js references icon URLs starting with `/img/` which are absolute paths and will work correctly from any subdirectory).

### Anti-Patterns to Avoid

- **Using sticky header:** Design B MUST use the floating pill nav. A sticky top bar makes it look like all the v1.2 chromas.
- **Centering the hero:** The asymmetric split is non-negotiable for this design's structural identity. Never `text-center` or `items-center justify-center` for the main hero layout at desktop.
- **Starting homepage with gate/benefits:** Design B leads with cost comparison. Moving the savings section to after benefits loses the structural identity.
- **Light hero background:** Design B uses dark background (`bg-brand-primary`) in the hero — the only design with a dark-background hero. Do not change to light/cream.
- **Using terracotta or teal accents:** Those are Design C and v1.2 B respectively. Electric lime (`#a3e635`) is the Design B signal color.
- **Using DM Sans or Nunito:** Those fonts are assigned to Design C. Design B uses Plus Jakarta Sans + Inter.
- **Hardcoding prices:** All pricing must come from `pricing.json`. Copy comparison section uses "ab ~" with disclaimer.
- **Adding padding-top for nav:** The floating nav overlaps content. Body starts at `pt-0` or `pt-[5rem]` only if the floating nav height requires it for content below the hero.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Pricing display | Custom price tables | Adapt `pricing.js` from `site/public/js/` | Already handles TODO badges, German formatting, fetch/error. Copy with `PRICING_URL` updated. |
| Interactive map | New map implementation | `fleet-map.js` + MapLibre GL JS 5.17.0 from CDN | Complex marker/popup/accessibility logic already written. CSS classes for map container must match `.fleet-map`. |
| Color tokens | `tailwind.config.js` extension | `@theme {}` block in `style.css` | Tailwind v4 CSS-native theming. `tailwind.config.js` token extension is v3 pattern. |
| Diagonal lines | SVG file | CSS `transform: rotate(45deg)` + `border-top` or inline `div` | No external files needed. Pure CSS. |
| Mobile nav | Custom state library | Inline `onclick` toggling `hidden`/`flex` + `aria-expanded` | Pattern proven across all v1.2 designs. Accessible. No JS framework needed. |
| Font loading | Self-hosted fonts or @font-face | Google Fonts CDN | German character support confirmed. SIL OFL. No hosting needed. |
| Accordion | Custom JS | `site/public/js/accordion.js` (copy to `site/epic/b/js/`) | Already implemented with proper `max-height` transition and accessibility. |

**Key insight:** The most complex pieces (map, pricing, accordion, nav toggle) are already solved. Epic Skin B's value is in structural layout innovation, not infrastructure. Every hour spent rebuilding a custom map is an hour not spent on the asymmetric hero or floating nav.

---

## Common Pitfalls

### Pitfall 1: Floating Nav Overlapping Hero Content

**What goes wrong:** The floating nav (position: fixed, centered top) overlaps the top of the dark hero section. On small screens the nav pill may clip the hero headline.

**Why it happens:** The hero section starts at `pt-0` since there's no sticky header taking space. The nav floats over the hero at z-index 50.

**How to avoid:** Add `pt-20` to the hero's inner content div (not the section itself) so the headline starts below the floating nav pill height. The dark background still fills edge-to-edge.

**Warning signs:** In Playwright screenshot at 375px, the "teilAuto" logo in the floating nav overlaps with the hero h1.

### Pitfall 2: Pricing.js PRICING_URL Path Mismatch

**What goes wrong:** The copied `pricing.js` still has `var PRICING_URL = "./data/pricing.json"` pointing to a non-existent path relative to `site/epic/b/`.

**Why it happens:** Copy-paste without updating the URL.

**How to avoid:** After copying `pricing.js` to `site/epic/b/js/pricing.js`, immediately change `PRICING_URL` to `"../../public/data/pricing.json"`. Verify in browser that pricing data loads (no "Preisinformationen konnten nicht geladen werden" error).

**Warning signs:** Preise page shows fallback error text instead of pricing data.

### Pitfall 3: Asymmetric Split Breaks at 768px

**What goes wrong:** The `lg:w-3/5` / `lg:w-2/5` split is correct at 1280px but between 768px and 1024px the layout may partially split (if using `md:` breakpoint by mistake).

**Why it happens:** Using `md:flex-row` instead of `lg:flex-row` for the split direction.

**How to avoid:** The split ONLY activates at `lg:` (1024px+). Below that, the hero stacks vertically: headline first, visual stat block hidden on mobile (`hidden lg:flex`).

**Warning signs:** Playwright screenshot at 768px shows a broken partial split.

### Pitfall 4: Long German Text Overflows in Split Layout

**What goes wrong:** Long German compound words like "Datenschutzerklärung" or "Quernutzung" overflow the 60% left column on mobile.

**Why it happens:** The narrow column (at intermediate sizes) doesn't accommodate German word lengths.

**How to avoid:** Use `break-words` or `overflow-wrap: break-word` on headings. For legal pages, use full-width layout (not split). `hyphens: auto` CSS property helps in paragraphs.

**Warning signs:** Horizontal scroll in Playwright screenshots at 375px.

### Pitfall 5: Floating Nav Content Positioning Issues on Interior Pages

**What goes wrong:** On interior pages (not the dark hero), the floating pill nav (light-colored) blends into light page backgrounds, losing visibility.

**Why it happens:** The nav uses `bg-brand-surface/95` (near-white) which on light-background pages has insufficient contrast with the page.

**How to avoid:** Add `shadow-xl` and `border border-brand-muted` to the floating pill. The border and shadow create separation from any background. If still an issue, use `bg-white/95` instead of `bg-brand-surface/95` for more contrast. Test on fahrzeuge and preise pages specifically.

**Warning signs:** The floating nav disappears into the background in Playwright screenshots of inner pages.

### Pitfall 6: Tailwind CLI for epic/b vs. Build Pipeline Confusion

**What goes wrong:** Running `npm run build` regenerates `site/build/dist/` from `site/src/` templates, overwriting nothing in `site/epic/b/` — but the agent thinks the build failed because the output isn't in the expected dist folder.

**Why it happens:** The existing build script uses `site/src/` as input. `site/epic/b/` is NOT processed by the existing build script.

**How to avoid:** Run Tailwind CLI directly against `site/epic/b/style.css`:
```bash
cd /c/Dev/Repos/TeilAuto/site
npx @tailwindcss/cli -i epic/b/style.css -o epic/b/tailwind-out.css
```
This is separate from `npm run build`.

**Warning signs:** Thinking the design needs Tera templates. It does not.

### Pitfall 7: Electric Lime Fails WCAG Contrast on White

**What goes wrong:** `#a3e635` (electric lime) on white text fails contrast. If white text is used over the lime accent color (e.g., on a lime CTA button with white text), contrast ratio is ~3.5:1 — below the 4.5:1 requirement for small text.

**Why it happens:** Lime yellows are notoriously bad for contrast against white.

**How to avoid:** CTA buttons using `bg-brand-accent` (#a3e635 lime) MUST use dark text: `text-brand-primary` (#1b4332 dark green) or `text-brand-ink` (#0f1f17). NOT `text-white`. This is the brand pattern: lime button with dark green text.

**Warning signs:** White text on lime button backgrounds — always wrong in this design.

### Pitfall 8: Mobile nav overlay needs body scroll lock

**What goes wrong:** When mobile nav overlay is open (`flex`), the background page scrolls behind the overlay.

**Why it happens:** `position: fixed; inset: 0` overlay doesn't prevent body scroll by default.

**How to avoid:** In the nav toggle JS, add `document.body.style.overflow = 'hidden'` when opening, `document.body.style.overflow = ''` when closing. The v1.2 nav.js pattern doesn't include this — add it to the inline onclick or adapt the nav.js copy.

---

## Code Examples

Verified patterns from the project codebase and confirmed Tailwind v4 approaches:

### @theme Block (Design B)

```css
/* site/epic/b/style.css */
@import "tailwindcss";

@theme {
  --color-brand-primary: #1b4332;
  --color-brand-accent: #a3e635;
  --color-brand-surface: #f8faf8;
  --color-brand-ink: #0f1f17;
  --color-brand-muted: #e8f0eb;
  --color-brand-highlight: #d9f99d;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
}
```

### fleet-map.js Reference (confirmed working from site/public/js/fleet-map.js)

```html
<!-- fahrzeuge.html in site/epic/b/ -->
<link href="https://unpkg.com/maplibre-gl@5.17.0/dist/maplibre-gl.css" rel="stylesheet" />
<script src="https://unpkg.com/maplibre-gl@5.17.0/dist/maplibre-gl.js" defer></script>
<script src="../public/js/fleet-map.js" defer></script>
<!-- Map container — must have id="fleet-map" and class="fleet-map" -->
<div id="fleet-map" class="fleet-map"></div>
```

fleet-map.js uses `/img/cars/mokka-icon.svg` etc. as absolute paths — these will resolve correctly from any subdirectory since they're root-relative. However, the `.fleet-map` CSS class with `height: 420px` is defined in `site/src/base.css` — this must be copied into `site/epic/b/base.css`.

### Adapted pricing.js (PRICING_URL updated)

```javascript
// site/epic/b/js/pricing.js — copy of site/public/js/pricing.js with one change:
var PRICING_URL = "../../public/data/pricing.json";
// (rest of pricing.js unchanged)
```

### Footer Pattern (Design B — dark green with lime accent)

```html
<footer class="bg-brand-primary text-white">
  <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6">
    <div class="grid gap-8 md:grid-cols-3">
      <div>
        <p class="font-display text-lg font-bold text-brand-accent">teilAuto M&ouml;ssingen</p>
        <p class="mt-2 text-sm text-white/60">Carsharing f&uuml;r M&ouml;ssingen und Umgebung.</p>
      </div>
      <div>
        <p class="font-display text-xs font-semibold uppercase tracking-wide text-white/50">Seiten</p>
        <div class="mt-3 flex flex-col gap-2">
          <a href="preise.html" class="text-sm text-white/70 hover:text-brand-accent">Preise</a>
          <a href="fahrzeuge.html" class="text-sm text-white/70 hover:text-brand-accent">Fahrzeuge</a>
          <a href="mitglied-werden.html" class="text-sm text-white/70 hover:text-brand-accent">Mitglied werden</a>
          <a href="ueber-uns.html" class="text-sm text-white/70 hover:text-brand-accent">&Uuml;ber uns</a>
          <a href="impressum.html" class="text-sm text-white/70 hover:text-brand-accent">Impressum</a>
          <a href="datenschutz.html" class="text-sm text-white/70 hover:text-brand-accent">Datenschutz</a>
        </div>
      </div>
      <div>
        <p class="font-display text-xs font-semibold uppercase tracking-wide text-white/50">Kontakt</p>
        <a href="tel:+4974739222020"
           class="mt-3 inline-block font-display text-2xl font-bold text-brand-accent hover:text-brand-accent/80">
          07473-922202
        </a>
        <p class="mt-2 text-sm text-white/60">Pers&ouml;nlich &mdash; kein Callcenter.</p>
      </div>
    </div>
    <div class="mt-8 border-t border-white/10 pt-6 text-xs text-white/40">
      <!-- Diagonal accent line (visual signature in footer) -->
      <div class="relative mb-4 h-0.5 overflow-hidden">
        <div class="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-30 -skew-x-3"></div>
      </div>
      &copy; 2026 teilAuto M&ouml;ssingen e.K. &middot;
      <a href="impressum.html" class="underline hover:text-white/60">Impressum</a> &middot;
      <a href="datenschutz.html" class="underline hover:text-white/60">Datenschutz</a>
    </div>
  </div>
</footer>
```

### Clamp-based Fluid Type (base.css pattern from v1.2, adapted)

```css
/* site/epic/b/base.css */
@layer base {
  :root {
    color-scheme: light;
  }
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: "Inter", system-ui, sans-serif;
    line-height: 1.6;
    background-color: #f8faf8;
    color: #0f1f17;
  }
  h1, h2, h3, h4 {
    font-family: "Plus Jakarta Sans", system-ui, sans-serif;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: #0f1f17;
  }
  h1 { font-size: clamp(2rem, calc(1.5rem + 2vw), 3.5rem); }
  h2 { font-size: clamp(1.5rem, calc(1.25rem + 1.25vw), 2.25rem); }
  h3 { font-size: clamp(1.125rem, calc(1rem + 0.625vw), 1.5rem); }
  a { color: #1b4332; text-decoration: none; }
  :focus-visible { outline: 2px solid #a3e635; outline-offset: 2px; }
  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
}

/* Fleet map container (must match fleet-map.js expectations) */
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
  border: 2px solid #1b4332;
  background: #ffffff;
  cursor: pointer;
  display: grid;
  place-items: center;
}
.fleet-marker::before {
  content: "";
  width: 12px; height: 12px;
  border-radius: 9999px;
  background: #1b4332;
}
.fleet-marker--planned { background: #f8faf8; border-style: dashed; }
.fleet-marker--planned::before { background: transparent; border: 2px solid #1b4332; }
.fleet-popup { display: flex; gap: 12px; align-items: flex-start; max-width: 280px; }
.maplibregl-popup-content { border-radius: 16px; font-family: inherit; }
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Tailwind v4 `tailwind.config.js` tokens | `@theme {}` in `.css` file | v4.0 (2024) | No config.js needed; CSS-native. Already used in this project. |
| Sticky top navigation bar (universal) | Floating pill nav (Design B) | Design choice | Distinctive; requires content not to reserve header height |
| Tera template inheritance | Standalone HTML per page | Design B choice | Parallel-safe; copy-paste chrome; no build pipeline dependency |
| All designs centered | Asymmetric split | v1.3 requirement | True structural differentiation |
| Google Fonts `font-display=block` | `display=swap` | Best practice | Reduces CLS; already used in this project |
| Diagonal lines via SVG | CSS transform/skew | Modern CSS | Zero external dependencies |

**Deprecated in this phase:**
- Tera template inheritance (`{% extends "base.html" %}`): Design B uses standalone HTML. Do NOT use Tera extends.
- v1.2 branching strategy (separate git branch): v1.3 uses parallel directories on the same branch. Do NOT create a `design/b` branch.

---

## Design B Structural Differentiation Matrix

| Structural Dimension | Design A (expected) | Design B (this phase) | Design C (expected) |
|---------------------|--------------------|-----------------------|---------------------|
| Hero composition | Asymmetric editorial left-aligned, light bg | Asymmetric 60/40 split, dark bg | Centered, warm gradient, 70vh |
| Nav pattern | Sticky dark bar (full width) | Floating pill (centered top) | Sticky warm cream bar |
| Homepage section order | Hero → gate → benefits → fleet → CTA | Hero → cost comparison → gate → how-it-works → fleet → CTA | Hero → gate → benefits → community → CTA |
| Information density | Medium (editorial text blocks) | Dense (data table, stat blocks) | Warm (card layout, community feel) |
| Visual signature | Horizontal separator rules | Diagonal accent lines (45°) | Organic rounded blob shapes |
| Copy emotional arc | Authoritative/factual | Savings-first/practical | Community/personal |
| Hero background | Light (warm off-white or cream) | Dark (deep forest green) | Light (cream gradient) |
| Card style | No cards (separator lines) | Comparison tables + stat cards | Rounded sand cards |
| Button style | `rounded-md` (square-ish) | `rounded-full` on CTAs | `rounded-full` (pill) |
| Font pair | Serif + sans (Playfair + Inter) | Humanist sans pair (Plus Jakarta Sans + Inter) | Rounded display + geometric sans |
| Section dividers | 1px horizontal rules | Diagonal lime lines | None (background changes) |

Structural differences from Design A: hero bg (dark vs light), nav (floating vs sticky), section order (cost-first vs gate-first), signature (diagonal vs rules), density (data tables vs text blocks). **5+ differences.**

Structural differences from Design C: nav (floating pill vs sticky bar), hero composition (split/dark vs centered/light), signature (diagonal lines vs organic blobs), copy arc (savings-first vs community-first), density (tables vs cards). **5+ differences.**

---

## Open Questions

1. **Phase 26 Epic Directions specification**
   - What we know: Phase 26 defines the exact structural specifications for each design. The specifications above are based on research and the v1.3 brief requirements — they're well-grounded but Phase 26's output may adjust specifics.
   - What's unclear: Whether Phase 26 assigns a different hero type or nav pattern to Design B than what this research recommends.
   - Recommendation: If Phase 26's `26-EPIC-DIRECTIONS.md` exists when planning begins, read it first and override any conflicting specifics in this research. If Phase 26 is running in parallel, proceed with the structural choices here (asymmetric split hero, floating pill nav, cost-forward flow) — they satisfy the epic skin standard.

2. **Tailwind CLI standalone output vs. build pipeline**
   - What we know: `npm run build` uses `site/src/tailwind.css` as input and outputs to `site/build/dist/`. Epic skin B files are in `site/epic/b/` — outside the build pipeline.
   - What's unclear: Whether Tailwind CLI invoked directly against `site/epic/b/style.css` will correctly scan all HTML files in `site/epic/b/` for class detection.
   - Recommendation: Add a content glob to `style.css` or run with `--content` flag: `npx @tailwindcss/cli -i epic/b/style.css -o epic/b/tailwind-out.css`. Tailwind v4 uses automatic content detection by default (scans all HTML/JS in the project tree), so this likely works without additional config.

3. **Electric lime (`#a3e635`) on dark vs. light backgrounds**
   - What we know: On dark green (`#1b4332`), the lime has high contrast (ratio ~8.5:1). On white, lime text fails contrast. The design consistently uses lime as an accent/decoration on dark backgrounds or as CTA button bg with dark text.
   - What's unclear: Whether any section needs lime text on a light background.
   - Recommendation: Never use `text-brand-accent` on a `bg-brand-surface` light background. Only use lime as: (a) button background with dark text, (b) accent text on dark (`bg-brand-primary`) backgrounds, (c) decorative lines/dividers. If light-bg sections need accent color, use `text-brand-primary` (dark green) instead.

---

## Sources

### Primary (HIGH confidence — direct file reads)

- `site/src/tailwind.css` — confirms v4 `@theme` block syntax in use
- `site/src/base.css` — confirms base CSS patterns: clamp fluid type, fleet-map CSS classes, focus styles
- `site/templates/base.html` — confirms page structure: sticky header, main, footer, fixed bottom bar pattern
- `site/templates/partials/header.html` — confirms nav toggle pattern: aria-expanded, mobile overlay, lg breakpoint
- `site/public/js/pricing.js` — confirms pricing.js structure; `PRICING_URL` variable identified
- `site/public/data/pricing.json` — confirms available pricing data: `membership.annual_fee: "TODO"`, verified rates
- `site/public/js/fleet-map.js` — confirms MapLibre usage, icon paths are absolute `/img/cars/*.svg`
- `.planning/phases/20-research/20-DESIGN-DIRECTIONS.md` — v1.2 direction B ("Nordic Signal") as contrast baseline
- `.planning/phases/23-design-c/23-RESEARCH.md` — lessons learned, proven 5-plan structure, pitfall list
- `.planning/v1.3-MILESTONE-BRIEF.md` — epic skin standard, structural requirements, v1.3 constraints
- `.planning/REQUIREMENTS.md` — STRUCT-01 through STRUCT-05 requirements
- `.planning/PROJECT.md` — personas, constraints, business context

### Secondary (MEDIUM confidence — design rationale based on brief + project history)

- Epic skin standard analysis (from v1.3-MILESTONE-BRIEF.md): asymmetric split, floating nav, cost-forward section ordering are all listed as valid structural differentiation approaches
- German font support verification: Plus Jakarta Sans and Inter confirmed as SIL OFL with Latin Extended in Google Fonts documentation (consistent with project's established font selection criteria)
- Electric lime (#a3e635) contrast on dark green: contrast ratio ~8.5:1 against #1b4332 (calculated from WCAG formula, meets AAA)

### Tertiary (LOW confidence — pending Phase 26 output)

- The exact hero composition, nav pattern, and section ordering assigned to Design B by Phase 26's `26-EPIC-DIRECTIONS.md`. This research assumes asymmetric split / floating pill / cost-forward but Phase 26 may specify differently. Override this research with Phase 26 output if available.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — identical tech stack to all prior phases. No new dependencies.
- Architecture patterns: HIGH — standalone HTML pattern is simpler than Tera; floating pill nav and asymmetric split are well-understood CSS/HTML patterns.
- Pitfalls: HIGH — derived from 5 prior design phases (21–23) plus project-specific constraints (pricing.js path, Tailwind v4 CLI, contrast requirements).
- Design B structural direction: MEDIUM — grounded in v1.3 epic skin requirements but pending Phase 26 confirmation.

**Research date:** 2026-03-08
**Valid until:** 2026-04-07 (30 days — stable tech stack, design choices pending Phase 26)

**Key caveat:** If Phase 26 `26-EPIC-DIRECTIONS.md` is available when planning begins, it supersedes the Design B direction specifics (hero type, nav pattern, section ordering, visual signature, palette) in this document. The constraints (8 pages, Tailwind v4, standalone HTML in `site/epic/b/`, pricing.js integration, MapLibre, phone CTA) remain constant regardless of Phase 26 output.
