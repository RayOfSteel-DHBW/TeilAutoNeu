# Phase 10: Content Messaging & Feature Polish - Research

**Researched:** 2026-02-25
**Domain:** Static HTML content editing, vanilla JS DOM manipulation, CSS layout
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Homepage (index.html) — CONT-01, FEAT-02, UX-08

**Hero section (full redesign):**
- Hero fills 100% viewport height (100vh) — nothing else visible on first screen
- Keep existing headline: "Die sparsame Art (k)ein Auto zu haben"
- SVG logo placed above the subtitle (like the student project reference)
- Dual CTA buttons:
  - "Noch unsicher?" → auto-scroll past hero to page content below
  - "Mehr erfahren" → links to the hybrid "So funktioniert's" / membership page
- Remove the two info cards from the hero area — move them below the fold (revised text)

**Below the fold:**
- Info cards (currently "Kurze Wege, klare Organisation" / "Gemeinschaftlich statt privat") move here with revised text
- Value-prop cards ("Sparsam bleiben" / "Flexibel unterwegs" / "Lokal verankert") stay — text revision deferred to implementation (audit flagged: "Sparsam" needs low monthly cost emphasis, "Flexibel" oversells for 2 cars)
- Remove "So funktioniert teilAuto" section entirely — that content moves to the hybrid page

**FAQ accordion:**
- Add 5th FAQ item about Quernutzung / cross-use: "Kann ich auch Fahrzeuge in anderen Städten nutzen?" (or similar)
- Existing 4 items stay

**Personas (UX-08):**
- No persona-specific tiles or segmentation — general messaging already covers all 6 personas

#### Preise (preise.html) — CONT-02

**Example calculations:**
- Replace raw formulas with labeled breakdowns per line item
- Each line shows what it represents: "1. Stunde: X EUR", "Folgestunde: X EUR", "15 km × 0,32 EUR"
- Keep the two scenarios (Wochenendeinkauf, Tagesausflug)

**Kaution (deposit):**
- Demote from prominent card at top to small mention at bottom of page
- Add note that Kaution is refundable with interest

**"noch offen" values:**
- Stay as placeholders (deposit, annual fee, booking fee) — owner hasn't confirmed yet

#### Fahrzeuge (fahrzeuge.html) — FEAT-03

**Map popup:**
- Restructure from flat string to visual hierarchy:
  - Car name bold at top
  - Location on second line
  - Features listed below with clear separation

**Quernutzung factual correction:**
- "über 200 Partnerfahrzeuge" → "Fahrzeuge von über 200 Partnern"
- Fix in: page body text, meta description, OG description
- Also fix on ueber-uns.html where the same claim appears

#### Mitglied werden → hybrid page — CONT-07

**Page transformation:**
- Rename and expand mitglied-werden.html into a hybrid "So funktioniert's" + membership page
- Homepage "Mehr erfahren" CTA links here
- URL may change (implementation decision — redirect old URL if needed)

**Content structure:**
- "So funktioniert's" section first — Claude's discretion on content (explaining carsharing day-to-day before the join flow)
- Then the existing 3-step join flow: Anrufen → Kennenlernen → Losfahren
- Phone CTA (07473-922202) stays at the bottom — user reads relevant info before seeing it

**Messaging correction:**
- Remove "Sie werden Teil einer Gemeinschaft" — wrong framing
- Replace with practical/transactional framing: "Mitgliedschaft heißt Zugang zu Fahrzeugen, klare Regeln, faire Kosten" (or similar)
- No community/social obligation angle

### Claude's Discretion
- Exact wording for revised info cards below the hero fold
- Value-prop card text revisions (within audit constraints)
- "So funktioniert's" section content for the hybrid page
- How to structure the FAQ 5th answer about Quernutzung
- Visual layout of the labeled pricing breakdown

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| CONT-01 | Homepage — hero, value prop, 3-step "how it works," top FAQ accordion, persona-inclusive messaging | Hero redesign (100vh, SVG logo, dual CTA), value-prop card text revision, 5th FAQ item — all covered by HTML edits in index.html and accordion.html |
| CONT-07 | Membership info (how to join, expectations, phone number) | mitglied-werden.html expanded to hybrid "So funktioniert's" + join flow; remove "Gemeinschaft" framing |
| CONT-02 | Preise (Pricing) — key tariff values, sample calculations, abstract presentation, disclaimer | renderExamples() in pricing.js: replace raw formula string with labeled breakdown structure; Kaution card demoted |
| FEAT-02 | FAQ accordion on homepage (5 most common questions) | accordion.html currently has 4 items — add 5th item following identical markup pattern |
| FEAT-03 | Interactive parking map using MapLibre GL JS + OpenFreeMap | fleet-map.js popup: restructure vehicle.description flat string into structured popup HTML with bold name, location line, feature list |
| UX-08 | Homepage "works" for all 6 personas without explicit self-segmentation tiles | General messaging revision; no persona tiles needed — confirmed by CONTEXT.md decision |
</phase_requirements>

---

## Summary

Phase 10 is a content and polish phase on an already-working static site. There are no new dependencies to install, no new pages to scaffold, and no architectural changes. Every task is an edit to an existing file: HTML template edits in `site/src/` or `site/templates/`, and JavaScript edits in `site/public/js/`. The build pipeline (PowerShell + Tera template engine + Tailwind CLI) remains unchanged.

The phase breaks naturally into two plans: (1) homepage hero redesign and mitglied-werden hybrid expansion — the structural/layout work; (2) pricing labeled breakdown, FAQ 5th item, map popup hierarchy, and Quernutzung factual correction — smaller targeted fixes across preise.html, accordion.html, fleet-map.js, fahrzeuge.html, and ueber-uns.html.

The most technically involved piece is the hero 100vh redesign: the current hero is a `<section>` card that participates in normal document flow. Making it 100vh requires setting up a full-viewport container that accounts for the fixed header height — achievable with `min-h-[calc(100vh-header-height)]` or CSS custom properties. The SVG logo for the hero does not currently exist as a separate brand asset; it will need to be created inline in the HTML or as a new SVG file in `site/public/img/`.

**Primary recommendation:** Execute sequentially in two plans — Plan 10-01 covers the homepage hero + mitglied-werden hybrid; Plan 10-02 covers pricing labels + FAQ 5th item + map popup + Quernutzung text corrections. This keeps each plan focused and independently verifiable.

---

## Standard Stack

### Core

| File/Technology | Version/Location | Purpose | Why Standard |
|----------------|-----------------|---------|--------------|
| Tera templates | CLI tool (installed) | HTML template engine; `{% extends %}` / `{% include %}` / `{% block %}` | Established build pipeline |
| Tailwind CSS | v4.1.18 | Utility classes for layout and style | Existing design system |
| Vanilla JS (ES5/IIFE) | Existing pattern | DOM manipulation in pricing.js, fleet-map.js, accordion.js | Project convention — no framework |
| pricing.json | `site/public/data/pricing.json` | Data source for rendered pricing sections | FOUND-05/06 requirement |
| MapLibre GL JS | v5.17.0 (CDN) | Interactive map | Already in use on fahrzeuge.html |

### Supporting

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `npm run build` (PowerShell) | Compiles Tera templates + Tailwind + copies public assets | After any src/ or templates/ change |
| `npm run watch` | Continuous rebuild on file change | During development |
| `site/build/dist/` | Output directory to verify rendered HTML | Cross-check that template changes compile correctly |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Inline SVG logo | External SVG file (`/img/logo.svg`) | External file is reusable; inline avoids an extra HTTP request. Either works — external preferred for cacheability |
| CSS `height: 100vh` | `min-height: 100vh` | `min-height` is safer — allows content overflow without clipping; use `min-h-screen` (Tailwind) for the hero wrapper |
| Smooth scroll via JS | CSS `scroll-behavior: smooth` | CSS approach is simpler, no JS needed, respects `prefers-reduced-motion` when combined with media query |

**Installation:** No new packages required. All dependencies already present.

---

## Architecture Patterns

### Recommended Project Structure

```
site/
├── src/                    # Tera source templates (HTML pages)
│   ├── index.html          # Homepage — hero + below-fold edits (Plan 10-01)
│   ├── mitglied-werden.html  # Hybrid "So funktioniert's" expansion (Plan 10-01)
│   ├── preise.html         # No changes needed (pricing.js handles layout)
│   ├── fahrzeuge.html      # Quernutzung text correction (Plan 10-02)
│   └── ueber-uns.html      # Quernutzung text correction (Plan 10-02)
├── templates/
│   └── accordion.html      # 5th FAQ item added here (Plan 10-02)
└── public/
    ├── js/
    │   ├── fleet-map.js    # Popup HTML restructure (Plan 10-02)
    │   └── pricing.js      # renderExamples() labeled breakdown (Plan 10-02)
    ├── data/
    │   └── pricing.json    # Add labeled_lines array for each example (Plan 10-02)
    └── img/
        └── logo.svg        # New brand logo SVG (Plan 10-01)
```

### Pattern 1: Hero 100vh Full-Viewport Layout

**What:** The current hero `<section>` is a normal document card. To fill the viewport, wrap it in a container that is at minimum the viewport height minus the header.

**When to use:** When a hero must occupy the entire first screen.

**How to implement:**

The site header is `<header class="border-b border-brand-muted bg-white">` in `base.html`. It is not `position: fixed` — it is part of normal flow. The main content area sits directly below it.

The cleanest approach: give the hero section `min-h-[calc(100vh-4rem)]` (or use a CSS custom property for the header height) and `flex items-center` to vertically center its content.

```html
<!-- index.html — hero section wrapper -->
<section
  class="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center
         rounded-3xl border border-brand-muted bg-white px-6 py-12 shadow-sm
         sm:px-10"
>
  <!-- SVG logo above headline -->
  <img src="/img/logo.svg" alt="teilAuto Mössingen" class="mb-6 h-16 w-auto" />

  <h1 class="text-center text-4xl font-display sm:text-5xl">
    Die sparsame Art (k)ein Auto zu haben
  </h1>

  <p class="mt-4 max-w-xl text-center text-lg text-brand-ink/80">
    Carsharing für Mössingen und die Umgebung — flexibel, lokal verankert, ohne eigenes Auto.
  </p>

  <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
    <a href="mitglied-werden.html"
       class="inline-flex items-center justify-center rounded-full bg-brand-primary
              px-6 py-3 text-base font-semibold text-white shadow-sm
              transition hover:bg-brand-accent"
       data-track="nav-cta" data-track-label="mehr-erfahren">
      Mehr erfahren
    </a>
    <a href="#below-hero"
       class="inline-flex items-center justify-center rounded-full border
              border-brand-primary px-6 py-3 text-base font-semibold
              text-brand-primary transition hover:bg-brand-muted"
       data-track="nav-cta" data-track-label="noch-unsicher">
      Noch unsicher?
    </a>
  </div>
</section>
```

The "Noch unsicher?" button uses `href="#below-hero"` where an anchor `id="below-hero"` is placed at the top of the below-fold content. CSS `scroll-behavior: smooth` on `html` (already common practice) handles the smooth scroll. Add `html { scroll-behavior: smooth; }` to `base.css` if not present. This respects `prefers-reduced-motion` if combined with:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

**Header height calculation:** The current header has `py-4` (1rem top + 1rem bottom = 2rem) plus the nav content height. On desktop, nav items are inline, making total header height approximately 64px (4rem). On mobile with hamburger, same 64px because the hamburger button and logo are the same height row. Using `calc(100vh - 4rem)` is a safe estimate. If exact matching is critical, a CSS custom property can be set via JS on load, but that is over-engineering for this phase — the simpler calc is sufficient.

### Pattern 2: SVG Brand Logo

**What:** A simple SVG that visually represents "teilAuto" — the existing hero uses `<span class="text-xl font-display text-brand-primary">ta</span>` as a text placeholder. The context says "SVG logo placed above subtitle like the student project reference."

**Approach:** Create a minimal inline or external SVG. Since no brand logo exists in `site/public/img/`, create `/img/logo.svg` as a new file. Keep it simple — the project is minimal and the owner hasn't supplied a logo. A typographic SVG rendering "teilAuto" in Space Grotesk style (or a geometric mark) is appropriate.

Example minimal typographic SVG:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48" role="img" aria-label="teilAuto Mössingen">
  <text x="0" y="36" font-family="'Space Grotesk', sans-serif" font-size="36"
        font-weight="600" fill="#0f5f3c" letter-spacing="-0.5">teilAuto</text>
</svg>
```

Note: SVG `<text>` elements referencing web fonts may not render correctly in all contexts (especially when SVG is loaded as `<img src>`). A safer approach is to use geometric paths or reference the SVG inline. The simplest reliable option is an `<img>` tag pointing to an SVG file that uses system fonts or embeds font data — OR, for a one-file hero, inline the SVG directly in index.html using a `<svg>` element.

**Recommendation:** Create `/img/logo.svg` as a simple geometric mark (circle + "ta" text in basic sans-serif) that renders without font loading dependency. The hero can include it as `<img src="/img/logo.svg" alt="teilAuto" class="h-12 w-auto mx-auto mb-6">`.

### Pattern 3: Pricing.js Labeled Breakdown

**What:** `renderExamples()` currently reads `ex.calculation` as a single string (e.g., `"1 × 2,05 + 1 × 1,00 + 15 × 0,32 = 7,85 EUR"`) and renders it as monospace text. The decision requires individual labeled lines.

**Approach:** Add a `labeled_lines` array to each example in `pricing.json`:

```json
{
  "title": "Wochenendeinkauf",
  "inputs": "ca. 2 Stunden, 15 km mit Klasse XS",
  "labeled_lines": [
    { "label": "1. Stunde", "value": "2,05 EUR" },
    { "label": "Folgestunde", "value": "1,00 EUR" },
    { "label": "15 km × 0,32 EUR", "value": "4,80 EUR" }
  ],
  "output": "ca. 7,85 EUR (zzgl. Buchungsgebühr)",
  "calculation": "1 × 2,05 + 1 × 1,00 + 15 × 0,32 = 7,85 EUR"
}
```

Keep `calculation` in JSON for backwards compatibility. `renderExamples()` checks `ex.labeled_lines` — if present, renders the labeled breakdown; if absent, falls back to the existing mono string. This is defensive and avoids breaking changes.

The render pattern uses the existing `el()` helper:
```javascript
if (ex.labeled_lines && ex.labeled_lines.length > 0) {
  var breakdown = el("dl", { className: "mt-2 space-y-1 text-sm" });
  ex.labeled_lines.forEach(function (line) {
    var row = el("div", { className: "flex justify-between gap-4" });
    row.appendChild(el("dt", { className: "text-brand-ink/70" }, line.label));
    row.appendChild(el("dd", { className: "font-semibold text-brand-ink" }, line.value));
    breakdown.appendChild(row);
  });
  card.appendChild(breakdown);
} else {
  card.appendChild(
    el("p", { className: "mt-2 text-xs font-mono text-brand-ink/50" }, ex.calculation)
  );
}
```

### Pattern 4: Map Popup Visual Hierarchy

**What:** Current popup uses `fleet-popup__meta` as a single flat string (e.g., `"Opel Mokka E · 5 Sitze · Kindersitz · Parkhilfe · Bahnhofstraße"`). The decision requires: bold car name at top, location on second line, features listed below.

**Approach:** The popup HTML is built in `fleet-map.js` via `escapeHtml()` and template literals. The `vehicle` object in `fleetLocations` needs restructuring. Separate the flat `description` into `location` and `features` array:

```javascript
const fleetLocations = [
  {
    id: "mokka",
    name: "Mössingen, Bahnhofstraße",
    coords: [9.0473, 48.4021],
    status: "active",
    vehicle: {
      title: "Opel Mokka E",
      location: "Bahnhofstraße, Mössingen",
      features: ["5 Sitze", "Kindersitz", "Parkhilfe"],
      iconUrl: "/img/cars/mokka-icon.svg",
    },
  },
  // ...
];
```

The popup HTML template literal becomes:
```javascript
const featuresHtml = location.vehicle.features
  .map(f => `<li>${escapeHtml(f)}</li>`)
  .join("");

const popupHtml = `
  <div class="fleet-popup">
    <img class="fleet-popup__icon" src="${escapeHtml(location.vehicle.iconUrl)}" alt="" />
    <div class="fleet-popup__body">
      <div class="fleet-popup__title">${escapeHtml(location.vehicle.title)}</div>
      <div class="fleet-popup__location">${escapeHtml(location.vehicle.location)}</div>
      <ul class="fleet-popup__features">${featuresHtml}</ul>
    </div>
  </div>
`;
```

Add supporting CSS classes to `base.css`:
```css
.fleet-popup__location {
  margin-top: 2px;
  font-size: 0.8rem;
  color: #0f2d1f;
  opacity: 0.7;
}

.fleet-popup__features {
  margin-top: 6px;
  padding-left: 0;
  list-style: none;
  font-size: 0.8rem;
  color: #0f2d1f;
  opacity: 0.75;
}

.fleet-popup__features li + li {
  margin-top: 2px;
}
```

Note: `escapeHtml()` is used for `title`, `location`, and `iconUrl` but NOT applied inside the `<li>` template loop since `escapeHtml(f)` is called per item. This is correct — each feature string is escaped independently.

### Pattern 5: FAQ 5th Item Addition

**What:** accordion.html currently has 4 items using ids `faq-item-1` through `faq-item-4`. The 5th item follows the exact same markup pattern.

```html
<div class="accordion-item rounded-2xl border border-brand-muted bg-brand-surface">
    <button class="accordion-header flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-brand-ink"
            type="button" aria-expanded="false" aria-controls="faq-item-5"
            data-track="faq-open" data-track-id="faq-5">
        Kann ich auch Fahrzeuge in anderen Städten nutzen?
        <span aria-hidden="true" class="text-brand-primary">+</span>
    </button>
    <div class="accordion-content px-5 pb-4 text-sm text-brand-ink/80"
         id="faq-item-5" style="max-height: 0px; overflow: hidden;">
        <p>Ja. Als Mitglied von teilAuto Mössingen haben Sie über die sogenannte Quernutzung Zugang zu Fahrzeugen von über 200 Partnerorganisationen in Deutschland. Das funktioniert ohne eigene Mitgliedschaft beim Partneranbieter — einfach telefonisch bei uns anfragen.</p>
    </div>
</div>
```

accordion.js uses `querySelectorAll(".accordion-header")` — the 5th item is picked up automatically with no JS changes.

### Pattern 6: Kaution Demotion on Preise Page

**What:** The deposit card is currently the first item in `#pricing-values`. The decision requires it moved to a small mention at the bottom of the page with a reassurance note.

**Approach:** Two changes in `pricing.js`:

1. In `renderValues()`: remove the `depositCard` from `memberGrid` — show only `feeCard` (annual fee) in the values section header area.
2. Add a new `renderKaution()` function that renders a small note at the bottom of `#pricing-values` or as a new `#pricing-kaution` section in preise.html.

The simplest approach that avoids HTML changes: append the Kaution note at the end of `renderValues()` after all existing content, as a small `<p>` below the divider:

```javascript
// At bottom of renderValues(), after includes:
var kautionNote = el("p", {
  className: "mt-4 text-xs text-brand-ink/50 border-t border-brand-muted pt-4"
});
kautionNote.appendChild(document.createTextNode("Kaution: "));
kautionNote.appendChild(valueOrBadge(data.membership.deposit));
kautionNote.appendChild(document.createTextNode(" — wird bei Austritt verzinst zurückgezahlt."));
container.appendChild(kautionNote);
```

This keeps Kaution visible but demoted — no longer a prominent card. When `data.membership.deposit` is "noch offen", it renders the amber badge inline.

### Anti-Patterns to Avoid

- **Using innerHTML for popup HTML without escaping:** The current `fleet-map.js` already uses `escapeHtml()` for all dynamic values in the popup template literal — maintain this pattern. Never insert unsanitized strings.
- **Hard-coding header height in calc():** The header height `4rem` is an approximation based on `py-4` padding on a single-line nav. If the nav wraps on small screens it could be taller. Use `min-h-screen` with `flex flex-col justify-center` on the hero as a more robust alternative to `calc(100vh - 4rem)`.
- **Removing the `calculation` field from pricing.json:** Keep it for backwards compatibility and as a fallback. Only add `labeled_lines` alongside it.
- **Changing the URL of mitglied-werden.html without a redirect:** The nav does not link to mitglied-werden.html (it was removed from primary nav in Phase 9), but the homepage CTA and footer may. Verify all internal links before renaming.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Smooth scroll | Custom JS scroll animation | `scroll-behavior: smooth` in CSS | One line, respects reduced-motion |
| Template includes | Duplicate HTML across pages | Tera `{% include %}` | Already in use; changes to accordion.html propagate everywhere accordion.html is included |
| Popup escaping | Custom sanitizer | Existing `escapeHtml()` in fleet-map.js | Already correct; just extend the data structure |

**Key insight:** This codebase uses a minimal, well-factored pattern. The right move is always to extend existing functions and data structures rather than build parallel systems.

---

## Common Pitfalls

### Pitfall 1: Hero Height on Mobile with Address Bar

**What goes wrong:** `100vh` on mobile browsers includes the browser chrome (address bar), so the hero may be taller than the visible viewport.

**Why it happens:** Mobile browsers report `100vh` as the height including the collapsible address bar, not the visible area.

**How to avoid:** Use `min-h-screen` (Tailwind's `100vh`) — this is already the established behavior. The hero content is centered so slight mismatch is not visible. The more robust CSS unit `100svh` (small viewport height) excludes the address bar; however, browser support was not universal as of 2023. Given the project's Tailwind version (4.x), `min-h-svh` is available if needed — but `min-h-screen` is acceptable for this audience (mostly desktop + modern mobile).

**Warning signs:** Hero content gets clipped below the fold even when hero appears to fill screen.

### Pitfall 2: Tera Build After Accordion Changes

**What goes wrong:** Editing `templates/accordion.html` requires `npm run build` (or `npm run watch`) to see changes — the build copies the processed template output, not the source file directly.

**Why it happens:** accordion.html is a Tera include. The build process processes all `src/*.html` files through Tera, which reads `templates/accordion.html`. The output goes to `site/build/dist/`.

**How to avoid:** Always verify the change in `site/build/dist/index.html` after build, not in `site/templates/accordion.html` directly.

**Warning signs:** Accordion change visible in source but not in browser — build not run.

### Pitfall 3: Pricing.js renderExamples() Accessing Missing Keys

**What goes wrong:** If `pricing.json` is updated with `labeled_lines` but `renderExamples()` is not updated to handle it (or vice versa), the page silently shows incorrect output or throws a JS error.

**Why it happens:** The IIFE wraps in `try/catch` at the fetch level, not at the render level. A runtime error in `renderExamples()` will surface as the fallback error message for all sections.

**How to avoid:** Always guard array access: `if (ex.labeled_lines && ex.labeled_lines.length > 0)`. Update both pricing.json and pricing.js in the same plan.

**Warning signs:** All pricing sections show "Preisinformationen konnten nicht geladen werden" after JSON changes.

### Pitfall 4: Quernutzung Text in Multiple Locations

**What goes wrong:** The text correction "über 200 Partnerfahrzeuge" → "Fahrzeuge von über 200 Partnern" appears in 4 locations: fahrzeuge.html body, fahrzeuge.html meta description, fahrzeuge.html OG description, ueber-uns.html body. Missing even one creates inconsistency.

**Why it happens:** The same claim was copy-pasted during authoring.

**How to avoid:** Search all HTML source files for the old string before marking the task complete. The exact occurrences to change are:

1. `site/src/fahrzeuge.html` line 11: `<meta name="description" ...>` contains "über 200 Partnerfahrzeuge"
2. `site/src/fahrzeuge.html` line 13: `<meta property="og:description" ...>` contains "200+ Partnerfahrzeuge"
3. `site/src/fahrzeuge.html` body: Quernutzung section paragraph
4. `site/src/ueber-uns.html` body: "Über 200 Partnerfahrzeuge" in BCS network section

**Warning signs:** Site search finds old string in build output after fix.

### Pitfall 5: SVG Logo Web Font Dependency

**What goes wrong:** An SVG file containing `<text>` elements that reference Google Fonts ("Space Grotesk") will render in the browser's default sans-serif when loaded as `<img src>` — because SVG files loaded as images don't inherit the page's font loading.

**Why it happens:** The browser isolates externally-loaded SVGs from the document's CSS context.

**How to avoid:** Either (a) inline the SVG in the HTML using a `<svg>` element (gets page CSS context), or (b) use system fonts in the SVG (`font-family="system-ui, sans-serif"`), or (c) create a purely geometric mark without text. Option (b) is the simplest — use `font-family="system-ui, -apple-system, sans-serif"` in the SVG `<text>` element. The brand identity doesn't require Space Grotesk in the logo SVG at this stage.

**Warning signs:** Logo renders in Times New Roman or system serif in the browser.

---

## Code Examples

### Smooth scroll anchor setup

```html
<!-- End of hero section in index.html -->
</section>

<!-- Anchor target immediately before below-fold content -->
<div id="below-hero" aria-hidden="true"></div>

<!-- Info cards section -->
<section class="mt-12 ...">
```

```css
/* base.css — add if not present */
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

### Quernutzung text search targets

Current incorrect strings to find and replace:

| File | Current text | Replacement |
|------|-------------|-------------|
| `site/src/fahrzeuge.html` meta description | `über 200 Partnerfahrzeuge` | `Fahrzeuge von über 200 Partnern` |
| `site/src/fahrzeuge.html` OG description | `200+ Partnerfahrzeuge` | `Fahrzeuge von über 200 Partnern` |
| `site/src/fahrzeuge.html` body | `auf über 200 Partnerfahrzeuge` | `auf Fahrzeuge von über 200 Partnern` |
| `site/src/ueber-uns.html` body | `auf über 200 Partnerfahrzeuge` | `auf Fahrzeuge von über 200 Partnern` |

Also in fleet-map.js the `description` flat string contains vehicle details, not a Quernutzung claim — no change needed there.

### Pricing.json labeled_lines structure

```json
"examples": [
  {
    "title": "Wochenendeinkauf",
    "inputs": "ca. 2 Stunden, 15 km mit Klasse XS",
    "labeled_lines": [
      { "label": "1. Stunde", "value": "2,05 EUR" },
      { "label": "Folgestunde", "value": "1,00 EUR" },
      { "label": "15 km × 0,32 EUR/km", "value": "4,80 EUR" }
    ],
    "output": "ca. 7,85 EUR (zzgl. Buchungsgebühr)",
    "calculation": "1 × 2,05 + 1 × 1,00 + 15 × 0,32 = 7,85 EUR"
  },
  {
    "title": "Tagesausflug",
    "inputs": "ca. 8 Stunden, 150 km mit Klasse M",
    "labeled_lines": [
      { "label": "1. Stunde", "value": "2,46 EUR" },
      { "label": "7 Folgestunden × 1,25 EUR", "value": "8,75 EUR" },
      { "label": "150 km × 0,36 EUR/km", "value": "54,00 EUR" }
    ],
    "output": "ca. 65,21 EUR (zzgl. Buchungsgebühr)",
    "calculation": "1 × 2,46 + 7 × 1,25 + 150 × 0,36 = 65,21 EUR"
  }
]
```

Note: 2,46 + 8,75 + 54,00 = 65,21 — verified correct. Wochenendeinkauf: 2,05 + 1,00 + 4,80 = 7,85 — verified correct.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Inline popup description string | Structured vehicle object with location + features array | Phase 10 | Enables visual hierarchy in popup |
| Raw formula string in examples | Labeled breakdown via `labeled_lines` array | Phase 10 | Makes pricing transparent at a glance |
| Hero as a document-flow card | 100vh full-viewport section | Phase 10 | "Landing page first screen" feel per owner feedback |
| mitglied-werden.html — join flow only | Hybrid "So funktioniert's" + join flow | Phase 10 | Answers "how does carsharing work?" before asking for commitment |

**No deprecated items:** The Tailwind 4.x utility classes used (`min-h-screen`, `flex`, `items-center`, `justify-center`) are stable. MapLibre 5.17 API is unchanged for popup creation. Tera template syntax is stable.

---

## Open Questions

1. **Logo SVG design**
   - What we know: No brand logo SVG exists. The hero needs "SVG logo placed above the subtitle like the student project reference." The student project is referenced as inspiration but its code is UNLICENSED and cannot be reused.
   - What's unclear: What exactly the student project logo looks like — the research cannot verify this.
   - Recommendation: Create a simple typographic/geometric SVG using the brand colors (#0f5f3c green). A circle with "ta" text or the word "teilAuto" in system-ui font will suffice for V1. The owner may supply a designed logo later.

2. **mitglied-werden.html URL change**
   - What we know: CONTEXT.md says "URL may change (implementation decision — redirect old URL if needed)." The current URL is `mitglied-werden.html`. The nav does not include this page (removed in Phase 9 nav restructure). The homepage CTA currently links to `mitglied-werden.html`.
   - What's unclear: Whether the renamed page should be `so-funktionierts.html` or keep `mitglied-werden.html`. The CONTEXT says to expand the page, not necessarily rename it.
   - Recommendation: Keep the filename `mitglied-werden.html` — it is less disruptive. The page title and H1 can change to "So funktioniert's · Mitglied werden" without renaming the file. No redirect needed.

3. **"So funktioniert's" section content scope**
   - What we know: CONTEXT says Claude has discretion over the content. It should explain carsharing day-to-day before the join flow.
   - What's unclear: How much detail — 2 paragraphs or a structured list?
   - Recommendation: 3–4 bullet points or a short list covering: how booking works (phone), how access works (key system or pickup), what is included in the price, and what happens if something goes wrong. Keep it to under 150 words — the goal is to answer "what is it like to actually use this?" before presenting the join steps.

---

## Sources

### Primary (HIGH confidence)

- Direct codebase inspection — `site/src/index.html`, `site/src/mitglied-werden.html`, `site/src/preise.html`, `site/src/fahrzeuge.html`, `site/src/ueber-uns.html`
- Direct codebase inspection — `site/public/js/fleet-map.js`, `site/public/js/pricing.js`, `site/public/js/accordion.js`
- Direct codebase inspection — `site/templates/accordion.html`, `site/templates/base.html`, `site/src/base.css`
- Direct codebase inspection — `site/public/data/pricing.json`
- `.planning/phases/10-content-messaging-feature-polish/10-CONTEXT.md` — locked decisions and discretion areas
- `.planning/REQUIREMENTS.md` — requirement definitions for CONT-01, CONT-02, CONT-07, FEAT-02, FEAT-03, UX-08
- `.planning/v1-MILESTONE-AUDIT.md` — gap evidence for each requirement

### Secondary (MEDIUM confidence)

- MDN Web Docs knowledge: `scroll-behavior: smooth`, `min-height: 100vh`, `prefers-reduced-motion` — standard CSS, well-established
- SVG `<text>` font inheritance behavior when loaded as `<img>` — well-documented browser security constraint

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all tools verified by direct codebase inspection
- Architecture: HIGH — all patterns reference existing code in the codebase
- Pitfalls: HIGH for browser/build behavior (verified); MEDIUM for SVG font (standard knowledge, not project-specific)

**Research date:** 2026-02-25
**Valid until:** 2026-04-25 (stable stack — Tera, Tailwind 4.x, MapLibre 5.17 all stable)
