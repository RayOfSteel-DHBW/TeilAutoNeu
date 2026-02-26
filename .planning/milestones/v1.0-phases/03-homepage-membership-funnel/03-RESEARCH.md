# Phase 3: Homepage & Membership Funnel - Research

**Researched:** 2026-02-08
**Domain:** Static site content and layout for homepage + membership funnel (Tera + Tailwind)
**Confidence:** MEDIUM

## Summary

This phase is a content-and-layout update inside a static Tera + Tailwind site. Pages in site/src are rendered by the Tera CLI, which pulls shared layout and partials from site/templates. Styling is produced by Tailwind CLI into build/dist/tailwind.css, while base styles live in site/src/base.css and are rendered into build/dist/base.css.

The plan should focus on implementing the homepage hero, value proposition, FAQ accordion, and local-area copy on the homepage, while placing the 3-step membership flow and phone-only CTA only on the Mitglied-werden page. The navigation JS already exists in public/js/nav.js. The FAQ accordion can follow the existing single-open pattern in templates/accordion.html, but should be updated to match the new content and reduce to 2-4 questions.

**Primary recommendation:** Implement all homepage/membership funnel content as Tera page templates in site/src, reuse partials in site/templates, and keep interactivity limited to the simple accordion behavior (single-open) and existing navigation toggle.

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard | Confidence |
| --- | --- | --- | --- | --- |
| Tera CLI (system binary) | unknown | Render page templates in site/src using shared layout/partials | Build script uses tera to render templates to build/dist | HIGH |
| Tailwind CSS (CLI) | ^4.1.18 | Utility-first styling and layout | Already configured and used by build | HIGH |
| PostCSS + Autoprefixer | ^8.5.6 / ^10.4.24 | CSS processing for Tailwind output | Already configured in postcss.config.js | HIGH |
| Vanilla JS | n/a | Small interactions (nav toggle, accordion) | Existing nav.js; keeps scope minimal | HIGH |

## Architecture Patterns

- Page templates live in site/src and use `{% extends "base.html" %}` to pick up the layout in site/templates/base.html. Confidence: HIGH.
- Shared UI chunks belong in site/templates/partials and are included via `{% include "partials/..." %}`. Confidence: HIGH.
- The build pipeline renders each file in site/src with Tera, then outputs Tailwind CSS to build/dist/tailwind.css, and copies site/public into build/dist. Confidence: HIGH.
- JavaScript should be shipped from site/public/js and included with a `<script src="js/..." defer></script>` tag. Confidence: HIGH.
- Interactive FAQ should remain a single-open accordion (close any previously open item on new open). Confidence: HIGH.

## Don't Hand-Roll

- Do not add a new build system or JS framework; use the existing Tera + Tailwind + vanilla JS toolchain. Confidence: HIGH.
- Do not add typing/rotating hero text or dynamic persona targeting in V1. Confidence: HIGH.
- Do not place phone CTA on the homepage; restrict phone-only CTA to Mitglied-werden (and Impressum if needed). Confidence: HIGH.
- Do not add contact forms or email links. Confidence: HIGH.

## Common Pitfalls

- Accidentally placing the 3-step flow on the homepage instead of only on Mitglied-werden. Confidence: HIGH.
- Including the phone number on multiple pages (violates phone-only CTA constraint). Confidence: HIGH.
- Leaving the FAQ accordion in multi-open mode or not wiring up the JS on the homepage. Confidence: MEDIUM.
- Forgetting to include local place names (Moessingen, Belsen, Talheim, Oeschingen) in visible copy. Confidence: HIGH.
- Pushing full-bleed sections inside the base layout container without deliberate spacing (causes cramped hero). Confidence: MEDIUM.

## Code Examples

### Homepage template structure (hero + value prop + FAQ)

```django-html
{% extends "base.html" %}

{% block title %}Startseite | teilAuto Moessingen{% endblock title %}

{% block main %}
  <section class="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
    <div class="space-y-4">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">teilAuto Moessingen</p>
      <h1 class="text-3xl font-display md:text-5xl">Die sparsame Art (k)ein Auto zu haben</h1>
      <p class="text-base text-slate-700">Carsharing fuer Moessingen, Belsen, Talheim und Oeschingen.</p>
      <a class="inline-flex w-fit items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white" href="mitglied-werden.html">Mehr erfahren</a>
    </div>
    <div class="rounded-3xl bg-white p-6 shadow-sm">Hero-Visual / Logo-Block</div>
  </section>

  <section class="mt-12 grid gap-6 md:grid-cols-3">
    <div class="rounded-2xl bg-white p-5 shadow-sm">Wertversprechen 1</div>
    <div class="rounded-2xl bg-white p-5 shadow-sm">Wertversprechen 2</div>
    <div class="rounded-2xl bg-white p-5 shadow-sm">Wertversprechen 3</div>
  </section>

  <section class="mt-12">
    {% include "partials/faq-accordion.html" %}
  </section>
{% endblock main %}
```

### Mitglied-werden template structure (3-step flow + phone-only CTA)

```django-html
{% extends "base.html" %}

{% block title %}Mitglied werden | teilAuto Moessingen{% endblock title %}

{% block main %}
  <section class="space-y-6">
    <h1 class="text-3xl font-display md:text-4xl">Mitglied werden</h1>
    <ol class="grid gap-4 md:grid-cols-3">
      <li class="rounded-2xl bg-white p-5 shadow-sm">1. Anrufen und Termin vereinbaren</li>
      <li class="rounded-2xl bg-white p-5 shadow-sm">2. Kurz kennenlernen und Fragen klaeren</li>
      <li class="rounded-2xl bg-white p-5 shadow-sm">3. Mitgliedschaft starten</li>
    </ol>
    <div class="rounded-2xl bg-brand-muted p-5">
      <p class="text-sm font-semibold">Jetzt anrufen</p>
      <p class="text-xl font-display">07473-922202</p>
      <p class="text-sm text-slate-700">Mo-Fr 09:00-12:00 Uhr</p>
    </div>
  </section>
{% endblock main %}
```

### Single-open accordion JS pattern

```html
<script>
  document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
      const active = document.querySelector('.accordion-header.active');
      if (active && active !== header) {
        active.classList.remove('active');
        active.nextElementSibling.style.maxHeight = null;
      }
      header.classList.toggle('active');
      const content = header.nextElementSibling;
      content.style.maxHeight = header.classList.contains('active') ? content.scrollHeight + 'px' : null;
    });
  });
</script>
```

```
Notes:
- This mirrors the current pattern in templates/accordion.html.
- Reduce FAQ items to 2-4 questions and keep the answers short.
```