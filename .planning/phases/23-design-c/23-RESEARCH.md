# Phase 23: Design C ("Nachbarschaftlich") - Research

**Researched:** 2026-02-28
**Domain:** Visual design implementation -- Direction C "Nachbarschaftlich" complete 8-page site on `design/c` branch
**Confidence:** HIGH

---

## Summary

Phase 23 implements Direction C "Nachbarschaftlich" (Neighborly) as a complete, production-ready 8-page site on the `design/c` branch. The design specification is fully defined in `20-DESIGN-DIRECTIONS.md` -- a warm, approachable design built on earthy natural tones and friendly rounded typography that foregrounds the personal, local, human character of a family-run carsharing cooperative.

The implementation pattern is well-established from Phases 21 (Design A) and 22 (Design B). Both used a 5-plan structure: (1) branch + design system foundation, (2) conversion-critical pages (homepage + mitglied-werden), (3) data-driven pages (preise + fahrzeuge), (4) secondary + legal pages, (5) Playwright visual audit. This same structure maps cleanly to Phase 23 with Direction C's distinct visual tokens, layout patterns, and conversion hooks substituted.

The critical differences between Direction B and Direction C implementation are: (1) Direction C uses a **two-font system** (Nunito for display + DM Sans for body) vs. B's single-font Outfit -- this changes all heading/body styling; (2) Direction C uses **sand-colored rounded-2xl cards** on warm cream background (warm-on-warm, no visible border) vs. B's full-width alternating color bands; (3) Direction C has a **70vh hero** with gradient + organic shapes and TWO pill-shaped CTA buttons vs. B's 100vh minimal hero with one button; (4) Direction C **shows the phone number in the nav** as a small pill button vs. B hiding it entirely; (5) Direction C's membership gate is a warm standalone card, not a high-contrast band; (6) Direction C uses `rounded-full` pill-shaped buttons and `rounded-2xl` cards vs. B's `rounded-lg` buttons and no cards; (7) Direction C uses `max-w-5xl` content width (same as B, different from A's max-w-6xl).

**Primary recommendation:** Follow the proven 5-plan structure. Branch from `gsd/v1.0-claudesdesigns` (same base as Designs A and B). Replace the `@theme` block, base.css, base.html, header, and footer in Plan 01. Then restyle pages in Plans 02-04, and run Playwright visual audit in Plan 05.

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| IMPL-01 | Three visually distinct design approaches implemented as complete sites | Phase 23 implements design #3 of 3 (Direction C "Nachbarschaftlich"). Direction C is architecturally distinct from both A (editorial/serif/dark) and B (minimal/teal/bands) -- rounded warm cards, terracotta/cream palette, two-font Nunito+DM Sans system. |
| IMPL-02 | Each design lives on a dedicated git branch | Branch `design/c` will be created from `gsd/v1.0-claudesdesigns`. Same branching pattern as Phases 21 and 22. |
| IMPL-03 | Each design covers all 8 current pages | All 8 pages must be restyled. Same page set, same Tera template inheritance pattern. |
| IMPL-04 | Each design is production-ready quality | Plan 05 (Playwright visual audit at 375px/768px/1280px) serves as the production-readiness gate. |
| IMPL-05 | Each design refined through Playwright screenshot-evaluate loops until visually polished | Plan 05 implements the screenshot-fix-rebuild loop at all 3 breakpoints across all 8 pages (24 total checks). |
| IMPL-06 | Frontend Design Plugin used for implementation | Playwright/Puppeteer MCP tools are the Frontend Design Plugin. Used in Plan 05 for visual audit. |
| VIS-01 | Each design has a cohesive type + color system | Direction C: Nunito (display, 600-800) + DM Sans (body, 400-600) + terracotta #b5541a / cream #fdf6ee / dark brown #33261a. |
| VIS-02 | Modern, professional aesthetic -- not artsy or overly decorative | Direction C "Nachbarschaftlich" is warm and approachable but professional. Cards with warm shadows, pill buttons, friendly typography. Not childish or overly decorative. |
| VIS-03 | Mobile-first responsive at all standard breakpoints | Tailwind mobile-first approach. Plan 05 audits at 375px, 768px, 1280px. |
| VIS-04 | Consistent component language per design | Direction C component system: `rounded-2xl` sand cards on cream surface, `rounded-full` pill buttons, `shadow-md` at rest with warm shadow tint, Nunito headings + DM Sans body. |
| CONV-01 | Homepage hero optimized for Zweitwagen persona (Simone) | Direction C hero: 70vh, centered, Nunito 800 at ~3.5rem, "Ihr Zweitwagen wartet schon" -- addresses Simone directly. Two pill CTA buttons. |
| CONV-02 | Membership requirement clearly communicated | Direction C uses a warm standalone card after hero with "So einfach geht's" heading and verified membership framing. |
| CONV-03 | Phone CTA prominently placed in conversion context | Direction C: IN the nav as a pill button, in hero area, in mid-page CTA band, in footer. Also fixed bottom bar on mobile. "Kein Callcenter -- Sie sprechen direkt mit uns." |
| CONV-04 | Copy is snappier than v1.1 but based on existing verified content | Same verified copy pool. Direction C tone: "Warm, inviting, personal. Uses informal-within-formal register." |
</phase_requirements>

---

## Standard Stack

### Core (same as Phases 21/22 -- no new dependencies)
| Item | Version/Source | Purpose | Why Standard |
|------|---------------|---------|--------------|
| Tailwind CSS v4 | ^4.1.18 | Styling -- `@theme` block for Design C tokens | Already installed, v4 syntax established |
| Nunito | Google Fonts CDN | Display/heading font (600, 700, 800 weights) | SIL OFL, German character support confirmed, specified in Direction C |
| DM Sans | Google Fonts CDN | Body font (400, 500, 600 weights) | SIL OFL, German character support confirmed, specified in Direction C |
| Tera templates | existing | HTML template engine | Build pipeline uses PowerShell + Tera |
| MapLibre GL JS | existing (fleet-map.js) | Interactive parking map on fahrzeuge.html | v1.0 established pattern, must preserve |
| pricing.js + pricing.json | existing | Data-driven pricing display | Owner updates JSON; must preserve |
| nav.js | existing | Mobile nav toggle (aria-expanded) | CSS-only peer pattern, reusable across designs |
| accordion.js | existing | FAQ accordion expand/collapse | max-height transition pattern |

### No New Dependencies
Direction C requires zero new npm packages. Only the Google Fonts CDN link changes.

**Google Fonts CDN link (Direction C):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet">
```

**Build command (unchanged):**
```bash
cd site && npm run build
```

---

## Architecture Patterns

### Branch Strategy
Create `design/c` from `gsd/v1.0-claudesdesigns` -- the same pre-design base that Designs A and B branched from. Do NOT branch from `design/a` or `design/b`.

```bash
git checkout gsd/v1.0-claudesdesigns
git checkout -b design/c
```

### Recommended Plan Structure (proven from Phases 21 and 22)
```
Plan 01: Branch creation + design system foundation
         - @theme block, base.css, base.html, header.html, footer.html
         - Output: buildable branch with correct chrome on all 8 pages

Plan 02: Conversion-critical pages
         - index.html (homepage with 70vh hero + warm membership card)
         - mitglied-werden.html (personal 3-step flow)
         - Output: primary conversion funnel restyled

Plan 03: Data-driven pages
         - preise.html (preserve pricing.js integration)
         - fahrzeuge.html (preserve MapLibre map + fleet-map.js)
         - Output: data pages restyled with JS integrations working

Plan 04: Secondary + legal pages
         - geschaeftskunden.html, ueber-uns.html
         - impressum.html, datenschutz.html (legal text preserved)
         - Output: complete 8-page site

Plan 05: Playwright visual audit
         - Screenshots at 375px, 768px, 1280px for all 8 pages
         - Fix-rebuild-verify loops
         - User review checkpoint
         - Output: production-ready, visually polished
```

### Direction C @theme Block
```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #b5541a;
  --color-brand-accent: #d4853a;
  --color-brand-surface: #fdf6ee;
  --color-brand-ink: #33261a;
  --color-brand-muted: #f0e6d6;
  --font-sans: "DM Sans", system-ui, sans-serif;
  --font-display: "Nunito", "DM Sans", system-ui, sans-serif;
}
```

**Key differences from Direction B:** Two-font system (Nunito display + DM Sans body) vs. single Outfit. Warm terracotta/cream palette vs. cool teal/near-white. Cards with warm shadows vs. no cards. No `--color-brand-cta` token (same as B) -- use `brand-accent` for hover.

### Direction C base.css Adaptations
```css
@layer base {
  body {
    font-family: "DM Sans", system-ui, sans-serif;
    background-color: #fdf6ee;
    color: #33261a;
  }

  h1, h2, h3, h4 {
    font-family: "Nunito", "DM Sans", system-ui, sans-serif;
    color: #33261a;  /* dark warm brown */
  }

  a {
    color: #b5541a;  /* terracotta primary */
  }
}

/* Fleet map: update border/background colors to match Direction C */
.fleet-marker {
  border: 2px solid #b5541a;  /* terracotta border */
}
.fleet-marker::before {
  background: #b5541a;  /* terracotta fill */
}
.fleet-marker--planned {
  background: #fdf6ee;
}
```

### Pattern: Warm Nav with Phone Pill (Direction C -- differs from B)

Direction C uses a **warm cream navigation bar** with the phone number visible as a pill button:

| Aspect | Direction B (light/clean) | Direction C (warm/personal) |
|--------|--------------------------|----------------------------|
| Background | `bg-brand-surface` (#fafafa near-white) border-b | `bg-brand-surface` (#fdf6ee warm cream) -- seamless with page |
| Logo color | `text-brand-primary` (teal) | `text-brand-primary` (terracotta) in Nunito 700 |
| Link color | `text-brand-ink` (near-black) | `text-brand-ink` (dark brown) in DM Sans 500 |
| Active indicator | Teal text + 4px dot | `bg-brand-muted` rounded pill behind text |
| Phone in nav | **No** | **Yes** -- small pill: `07473-922202` in `brand-primary` |
| CTA button | Teal `rounded-lg` | Terracotta `rounded-full` (pill) |
| Mobile overlay bg | Near-white (`bg-brand-surface`) | Warm cream (`bg-brand-surface`) |
| Mobile link style | Plain text links | Each link in `rounded-full bg-brand-muted` pill |
| Mobile accent | 4px teal top bar | Warm organic shape (radial gradient blob) |

### Pattern: Rounded Card Layout (Direction C section layout)

Direction C uses **sand-colored rounded-2xl cards** on warm cream background -- fundamentally different from both B's alternating bands and A's separator lines:

```html
<!-- Card section example -->
<section class="py-14">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-2xl bg-brand-muted p-8 shadow-md shadow-brand-primary/8">
        <h3 class="font-display text-xl font-bold text-brand-ink">Heading</h3>
        <p class="mt-3 text-brand-ink/80">Body text</p>
      </div>
      <!-- more cards -->
    </div>
  </div>
</section>
```

Key properties:
- `rounded-2xl` (16px) -- NOT v1.1's `rounded-3xl` (24px)
- `bg-brand-muted` (#f0e6d6 sand) on `bg-brand-surface` (#fdf6ee cream) background
- NO visible border -- separation through background color difference only
- `shadow-md` at rest, `shadow-lg` on hover
- `shadow-brand-primary/8` for warm terracotta-tinted shadow
- `p-8` inner padding, `gap-6` between cards

### Pattern: 70vh Hero with Organic Shapes

```html
<section class="relative flex min-h-[70vh] flex-col items-center justify-center px-4 text-center"
         style="background: linear-gradient(160deg, #fdf6ee 0%, #f0e6d6 40%, #fdf6ee 100%);">
  <!-- Soft organic accent shapes at low opacity -->
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-primary/8"></div>
    <div class="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-primary/6"></div>
  </div>

  <h1 class="relative font-display text-4xl font-extrabold leading-tight text-brand-ink sm:text-5xl">
    Ihr Zweitwagen wartet schon
  </h1>
  <p class="relative mt-4 max-w-lg text-lg text-brand-ink/70">
    Das Auto auf Abruf &mdash; anrufen, einsteigen, losfahren.
  </p>
  <div class="relative mt-8 flex flex-wrap items-center justify-center gap-4">
    <a href="mitglied-werden.html"
       class="inline-flex items-center rounded-full bg-brand-primary px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-brand-accent">
      Mitglied werden &rarr;
    </a>
    <a href="#vorteile"
       class="inline-flex items-center rounded-full bg-brand-muted px-8 py-3 text-base font-semibold text-brand-ink transition hover:bg-brand-muted/80">
      Mehr erfahren
    </a>
  </div>
</section>
```

Key differences from Direction B hero:
- **70vh** (not 100vh) -- compact, welcoming, content peeks below
- **Two CTA buttons** (not one) -- both `rounded-full` pill shape
- **Gradient background** with radial-gradient organic shapes (not subtle diagonal gradient with SVG)
- **Warm tones** (cream to sand gradient, terracotta accent shapes)
- **Headline addresses Simone directly** ("Ihr Zweitwagen") vs. B's declarative "Das Auto auf Abruf."
- **Wave/curved divider** possible via CSS `clip-path` between hero and content

### Pattern: Warm Membership Gate Card

```html
<section class="py-14">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div class="rounded-2xl bg-brand-muted p-8 shadow-md shadow-brand-primary/8 text-center">
      <h2 class="font-display text-2xl font-bold text-brand-ink">So einfach geht's</h2>
      <p class="mt-4 text-lg text-brand-ink/80">
        Machen Sie mit &mdash; werden Sie Mitglied! Schneller Einstieg und Ausstieg m&ouml;glich.
      </p>
    </div>
  </div>
</section>
```

This is a friendly invitation card -- NOT a high-contrast band like Direction B.

### Pattern: Mobile Phone Bar

Direction C uses a fixed bottom bar on mobile AND a nav pill:

```html
<!-- Fixed bottom bar on mobile -->
<div class="fixed inset-x-0 bottom-0 z-40 bg-brand-surface/95 p-3 backdrop-blur-sm border-t border-brand-muted lg:hidden">
  <a href="tel:+4974739222020"
     class="flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-md">
    Jetzt anrufen: 07473-922202
  </a>
</div>
```

### Pattern: Table Styling (Direction C)

Direction C tables use the same card treatment but at `rounded-xl` with a thin border:

```html
<div class="overflow-hidden rounded-xl border border-brand-primary/15">
  <table class="w-full">
    <thead class="bg-brand-muted">
      <tr>
        <th class="px-4 py-3 text-left text-sm font-semibold text-brand-ink">...</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-brand-primary/10">
      <tr class="text-sm text-brand-ink/80">
        <td class="px-4 py-3">...</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Anti-Patterns to Avoid

- **Using v1.1's `rounded-3xl` cards:** Direction C cards are `rounded-2xl` (16px, NOT 24px). Sand-on-cream, NOT white-on-green.
- **Using cool tones:** Direction C is warm-toned. Terracotta (#b5541a), amber-ochre (#d4853a), cream (#fdf6ee), sand (#f0e6d6). No teal, no navy, no green.
- **Hiding phone from nav:** Direction C shows 07473-922202 in nav as a pill button. This is the most phone-prominent design of all three.
- **Using separator lines or bare text blocks:** Direction C uses cards. Content sits inside `rounded-2xl bg-brand-muted` cards with warm shadows.
- **Using a single-font system:** Direction C uses TWO fonts: Nunito (display/headings) and DM Sans (body). Both must be loaded.
- **100vh hero:** Direction C hero is 70vh -- compact and welcoming, not imposing. Content peeks below.
- **Using `max-w-6xl`:** Direction C uses `max-w-5xl` for content width.
- **Using `rounded-lg` on buttons:** Direction C buttons are `rounded-full` (pill shape).

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font loading | Custom @font-face | Google Fonts CDN (Nunito + DM Sans) | SIL OFL, German support confirmed |
| Color theming | tailwind.config.js colors | `@theme` block in tailwind.css | Tailwind v4 CSS-native theming |
| Map component | New map implementation | Existing fleet-map.js + MapLibre GL JS | Complex, already works |
| Pricing display | New pricing UI | Existing pricing.js + pricing.json | Owner maintains JSON; pattern established |
| Mobile nav toggle | New JS | Existing nav.js + CSS peer/aria pattern | Works with keyboard a11y |
| Build pipeline | New tooling | Existing `npm run build` (PowerShell + Tailwind CLI) | Zero runtime deps |
| Organic shapes | External SVG files | CSS radial-gradient + border-radius | Pure CSS, no assets needed |

---

## Common Pitfalls

### Pitfall 1: Branching from design/a or design/b instead of gsd/v1.0-claudesdesigns
**What goes wrong:** Design C inherits another direction's fonts, colors, and layout decisions.
**How to avoid:** Explicitly branch from `gsd/v1.0-claudesdesigns`.
**Warning signs:** Seeing Outfit, Playfair Display, teal colors, or navy colors in Design C files.

### Pitfall 2: Using v1.1's rounded-3xl card radius
**What goes wrong:** Cards look identical to v1.1 with just a palette swap.
**How to avoid:** Direction C cards are `rounded-2xl` (16px), NOT `rounded-3xl` (24px). Different radius + different colors + different shadow = different feel.
**Warning signs:** `rounded-3xl` appearing in page templates.

### Pitfall 3: Making the hero too tall (100vh)
**What goes wrong:** All content pushed below fold. Direction C spec says 70vh for a welcoming, compact hero.
**How to avoid:** Use `min-h-[70vh]` NOT `min-h-screen`. The compactness is deliberate -- content peeks below.
**Warning signs:** Full-viewport hero in screenshots with no content visible.

### Pitfall 4: Missing the warm shadow tint
**What goes wrong:** Cards use default gray Tailwind shadows, losing the warm terracotta-tinted shadow that's part of the design spec.
**How to avoid:** Use `shadow-brand-primary/8` (Tailwind v4 shadow color support) for a terracotta-tinted shadow.
**Warning signs:** Cool gray shadows on warm cream cards.

### Pitfall 5: Nav breakpoint issue (7 items crowded at 768px)
**What goes wrong:** Navigation links overflow or wrap at tablet width.
**How to avoid:** Use `lg:flex` (1024px+) for desktop nav, hamburger below lg. Same fix as Phases 21 and 22.
**Warning signs:** Navigation wrapping to two lines at 768px in screenshots.

### Pitfall 6: Long German compound words overflow on mobile
**What goes wrong:** "Datenschutzerklarung" as h1 at text-4xl overflows at 375px.
**How to avoid:** Use `text-3xl sm:text-4xl lg:text-5xl` for legal page headings.

### Pitfall 7: Forgetting phone in nav (Direction C-specific)
**What goes wrong:** Phone number missing from nav, making Direction C look like Direction B.
**How to avoid:** Direction C MUST show phone as a pill button right-aligned in nav. This is a key differentiator.
**Warning signs:** No phone number visible in nav bar.

### Pitfall 8: Warm shadow via shadow-color may not work
**What goes wrong:** `shadow-brand-primary/8` syntax may or may not be supported in the project's Tailwind v4 version.
**How to avoid:** If shadow-color doesn't work, use a custom CSS property or inline arbitrary value: `shadow-[0_4px_6px_-1px_rgba(181,84,26,0.08)]`. Test during build.

---

## Key Differences: All Three Designs

| File/Component | Direction A (Phase 21) | Direction B (Phase 22) | Direction C (Phase 23) |
|----------------|----------------------|----------------------|----------------------|
| `tailwind.css` @theme | Navy/amber, 6 tokens, Playfair+Inter | Teal/near-white, 5 tokens, Outfit | Terracotta/cream, 5 tokens, Nunito+DM Sans |
| `base.css` headings | Playfair Display (serif) | Outfit (geometric sans) | Nunito (rounded sans) |
| `base.css` body | Inter | Outfit | DM Sans |
| `base.css` links | Amber #c2703e | Teal #0d7377 | Terracotta #b5541a |
| `base.html` header bg | Dark navy `bg-brand-primary` | Near-white `bg-brand-surface` | Warm cream `bg-brand-surface` (seamless) |
| Phone in nav | Yes (amber) | No (ultra-clean) | Yes (terracotta pill) |
| Hero height | 85vh | 100vh | 70vh |
| Hero CTAs | Two (filled + outline) | One (filled) | Two (filled + muted pill) |
| Hero headline | "Das Auto auf Abruf" | "Das Auto auf Abruf." (with period) | "Ihr Zweitwagen wartet schon" |
| Membership gate | Subtle italic text | Full-width teal band | Warm standalone card |
| Section layout | Separator lines | Alternating color bands | Rounded cards |
| Card style | No cards | No cards | `rounded-2xl bg-brand-muted shadow-md` |
| Button style | `rounded-md` | `rounded-lg` | `rounded-full` (pill) |
| Content max-width | `max-w-6xl` | `max-w-5xl` | `max-w-5xl` |
| Mobile phone access | Nav phone | Floating circle button | Fixed bottom bar |
| Footer bg | Navy `bg-brand-primary` | Teal `bg-brand-primary` | Terracotta `bg-brand-primary` |

---

## Lessons Learned from Phases 21 and 22

1. **Nav breakpoint: Use lg, not md** -- 7 items too crowded at 768px
2. **Long German compound words overflow on mobile** -- use `text-3xl` on mobile for legal headings
3. **Hero height: use `min-h-[calc(Xvh-4rem)]` pattern** -- accounts for sticky nav
4. **Tera template year must be hardcoded as `2026`** -- no date filter
5. **Mobile overlay close button: inline onclick resets aria-expanded** -- same pattern works
6. **Build verification after every task** -- catch failures early
7. **Alternating band contrast can be subtle** (B lesson) -- C uses cards with shadows instead, giving stronger visual separation

---

## Sources

### Primary (HIGH confidence -- direct file reads)
- `.planning/phases/20-research/20-DESIGN-DIRECTIONS.md` -- Direction C full specification
- `.planning/phases/20-research/20-INSPIRATION-NOTES.md` -- verified content angles, student UI patterns
- `.planning/phases/22-design-b/22-01-PLAN.md` through `22-05-PLAN.md` -- proven plan structure
- `.planning/phases/22-design-b/22-RESEARCH.md` -- lessons learned, implementation patterns
- `.planning/PROJECT.md` -- constraints, personas, key decisions
- `.planning/REQUIREMENTS.md` -- v1.2 requirements with traceability
- `.planning/ROADMAP.md` -- Phase 23 success criteria
- `.planning/STATE.md` -- current project state

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- identical to Phases 21/22, no new dependencies
- Architecture patterns: HIGH -- Direction C spec is fully defined; two prior phases established pattern
- Pitfalls: HIGH -- directly observed from Phase 21/22 execution plus Direction C-specific risks

**Research date:** 2026-02-28
**Valid until:** 2026-03-28 (30 days)
