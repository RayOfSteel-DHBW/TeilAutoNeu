# Phase 4: Pricing & Value System - Research

**Researched:** 2026-02-08
**Domain:** Static pricing content, JSON-driven rendering, and update workflow
**Confidence:** MEDIUM

## Summary

This phase is about rendering an abstract pricing overview from a JSON source on the Preise page while keeping copy compliant (no exact pricing claims, clear disclaimer, and pricing is not the lead). The current site is a static Tera + Tailwind build; templates are compiled by `tera` with `--env-only`, and `public/` is copied verbatim to `build/dist`. That means JSON should live in `site/public/` and be rendered at runtime with a small, page-scoped JavaScript module.

Pricing content must align with the 02/2022 handbook but remain abstracted for V1. The notes explicitly caution against publishing exact prices without verification; the Copy Guardrails reinforce this. Only classes XS and M should be shown, with larger classes referenced via Quernutzung. Sample calculations are allowed but must use abstracted values or ranges and include a disclaimer that exact tariffs are confirmed in personal contact and current documents.

**Primary recommendation:** Store pricing data in `site/public/data/pricing.json` and render it via a small `public/js/pricing.js` script on [site/src/preise.html](site/src/preise.html), keeping all numeric outputs abstracted and gated by a clear disclaimer.

## Standard Stack

### Core

| Library                       | Version | Purpose                     | Why Standard                                               |
| ----------------------------- | ------- | --------------------------- | ---------------------------------------------------------- |
| Tera CLI (`chevdor/tera-cli`) | current | Static template compilation | Required by build script and used across all pages. (HIGH) |
| Tailwind CSS CLI              | current | Styling                     | Standard styling pipeline for this site. (HIGH)            |
| Vanilla JS (ES2018+)          | n/a     | JSON fetch + DOM render     | No framework in use; fits static site. (HIGH)              |

### Data

| Source                     | Format | Purpose                     | Why Standard                                                                              |
| -------------------------- | ------ | --------------------------- | ----------------------------------------------------------------------------------------- |
| `public/data/pricing.json` | JSON   | Owner-editable pricing data | `public/` is copied to `build/dist` and can be updated without touching templates. (HIGH) |

## Architecture Patterns

- **Static shell + runtime render:** Keep the Preise page markup static in [site/src/preise.html](site/src/preise.html) with placeholder containers; render pricing content via a small JS module that fetches JSON and injects HTML. (HIGH)
- **Data-driven sections:** Model JSON with `membership`, `usage`, `classes`, `examples`, and `disclaimer` blocks so the page can be updated without editing HTML. (MEDIUM)
- **Abstract values only:** Use ranges or qualitative labels (e.g., "gering", "moderat", "hoher dreistelliger Bereich") instead of precise EUR values, unless explicitly approved. (HIGH)
- **Scope to XS and M:** JSON should include only XS and M for class rows; add a separate text block referencing Quernutzung for larger classes. (HIGH)
- **Disclaimer not leading:** Render the disclaimer visibly near pricing content but not as the first element or headline; the page should open with a short intro and context. (MEDIUM)

## Don't Hand-Roll

- **Do not parse `Tarife.xml` on the client.** The XML is complex, includes exact values, and would violate the V1 abstraction requirement. (HIGH)
- **Do not build a live price calculator.** V1 explicitly avoids full calculators; example calculations must stay abstract. (HIGH)
- **Do not change the Tera build to load JSON** unless required; current build uses `--env-only`, so `load_data` patterns will fail without build changes. (HIGH)
- **Do not publish exact tariffs** unless owners confirm and the 02/2022 values are validated. (HIGH)

## Common Pitfalls

- **Accidentally showing exact prices** by copying values from the handbook or `Tarife.xml`. (HIGH)
- **Forgetting the disclaimer** or placing it as the lead block (disclaimer must be present but not the lead). (MEDIUM)
- **Including classes beyond XS and M** in tables or examples, contrary to CONT-08/PRICE-05. (HIGH)
- **Using absolute paths in `fetch()`** that break GitHub Pages subpaths; use relative URLs like `./data/pricing.json`. (MEDIUM)
- **Assuming Tera can read JSON** without build changes; the current CLI is `--env-only`. (HIGH)

## Code Examples

### Example JSON shape (abstracted)

```json
{
  "updated": "2026-02-08",
  "disclaimer": "Genaue, aktuelle Preise erhalten Sie im persoenlichen Gespraech und in den Unterlagen.",
  "membership": {
    "deposit": "im hoeheren dreistelligen Bereich",
    "annual_fee": "geringe Jahresgebuehr"
  },
  "usage": {
    "booking_fee": "kleine Buchungsgebuehr pro Fahrt",
    "time_rate": "zeitabhaengiger Tarif mit Nacht- und Folgestunden",
    "km_rate": "km-Preis je nach Fahrzeugklasse",
    "includes": ["Kraftstoff", "Betriebsstoffe", "Versicherung"]
  },
  "classes": [
    { "id": "XS", "label": "Kleinwagen", "notes": "guenstigste Klasse" },
    {
      "id": "M",
      "label": "Kompaktklasse",
      "notes": "mehr Platz, etwas hoeherer Tarif"
    }
  ],
  "examples": [
    {
      "title": "Wochenendeinkauf",
      "inputs": "ca. 2 Stunden + 15 km",
      "output": "Gesamtbetrag im unteren zweistelligen Bereich"
    },
    {
      "title": "Tagesausflug",
      "inputs": "ca. 8 Stunden + 150 km",
      "output": "Gesamtbetrag im mittleren zweistelligen Bereich"
    }
  ],
  "quernutzung": "Groessere Klassen nutzen Sie ueber Quernutzung bei Partnerorganisationen."
}
```

### Minimal JS render pattern (page-scoped)

```html
<section id="pricing-values" class="space-y-6"></section>
<script src="js/pricing.js" defer></script>
```

```javascript
const target = document.getElementById("pricing-values");

if (target) {
  fetch("./data/pricing.json")
    .then((response) => response.json())
    .then((data) => {
      target.innerHTML = `
        <div class="rounded-3xl border border-brand-muted bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-display">Kostenprinzip</h2>
          <p class="mt-3 text-brand-ink/80">
            ${data.usage.booking_fee}, ${data.usage.time_rate}, ${data.usage.km_rate}.
          </p>
          <p class="mt-2 text-sm text-brand-ink/70">${data.disclaimer}</p>
        </div>
      `;
    })
    .catch(() => {
      target.innerHTML =
        "<p>Preisinformationen sind derzeit nicht verfuegbar.</p>";
    });
}
```

## Source Notes

- Pricing must stay abstract and include a disclaimer; exact values from 02/2022 need verification before publishing. (HIGH)
- V1 explicitly avoids full price tables and calculators; abstract principles only. (HIGH)
- The build uses Tera `--env-only`, and `public/` is copied to `build/dist`, so runtime JSON fetch is the safest approach without build changes. (HIGH)
