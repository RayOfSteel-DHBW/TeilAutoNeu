# Technical Concerns

## Summary

The `site/` codebase is a small static website built with the Tera templating engine and a custom PowerShell build script. The overall structure is clean and simple, but there are significant gaps in accessibility, SEO, security headers, and browser compatibility. Two legally required pages (Impressum, Datenschutz) are empty shells. The contact form is non-functional. Several modern CSS features limit the site to cutting-edge browsers only. No production optimizations (minification, image compression, caching) are in place.

## Technical Debt

| Issue | Location | Severity | Notes |
|-------|----------|----------|-------|
| Contact form is fake | `src/mitglied-werden.html` L16 | **High** | `onsubmit="alert('Ihre nachricht wurde versendet')"` — no backend, no `action`, no `method`. Misleads users. |
| Impressum page is empty | `src/impressum.html` | **High** | Legally required in Germany (§5 TMG). Body block is empty. |
| Datenschutz page is empty | `src/datenschutz.html` | **High** | Legally required (DSGVO/GDPR). Body block is empty. |
| Chilanka font loaded but never used | `templates/base.html` L46 | **Low** | Google Fonts loads `Chilanka` family on every page; no CSS rule references it. Wasted bandwidth. |
| Bare text node in main | `src/geschaeftskunden.html` L47–50 | **Low** | Paragraph text sits directly inside `<main>` without a `<p>` wrapper — invalid HTML semantics. |
| Case-sensitive link mismatch | `templates/accordion.html` L39 | **Medium** | Links to `Preise.html` (capital P) but file is `preise.html`. Will 404 on case-sensitive servers (Linux/GitHub Pages). |
| Unscoped CSS selectors in page stylesheet | `src/nachhaltig.css` | **Low** | Selectors like `article`, `h1`, `h2`, `h3`, `p` are globally scoped. Works only because each page is separate, but fragile if composition changes. |
| No CSS/JS minification or bundling | `scripts/build-site.ps1` | **Medium** | Build copies files as-is through Tera. No optimization pipeline for production. |
| No favicon | `templates/base.html` | **Low** | No `<link rel="icon">` defined; browsers will 404 on `/favicon.ico`. |
| MapLibre loaded from CDN without version pin | `templates/map-parking.html` L2–3 | **Medium** | `https://unpkg.com/maplibre-gl/dist/maplibre-gl.js` resolves to `latest` — could break without warning on any upstream release. |
| All source files piped through Tera including CSS | `scripts/build-site.ps1` L57–60 | **Low** | CSS files are template-rendered unnecessarily. Any `{{` or `{%` sequence in CSS would cause build failures. |
| `<br>` used for spacing | `templates/accordion.html`, `src/mitglied-werden.html` | **Low** | Semantic spacing done with `<br>` tags instead of CSS margin/padding or separate elements. |
| Typo in alt text | `src/index.html` L56, L67 | **Low** | Car image and coins image both use alt text "Telefon abbildung" (copy-paste error). |
| Inconsistent price formatting | `src/preise.html` | **Low** | Some prices use `490,-` format, others use `2,05` decimals. Minor but affects professionalism. |
| `defer` on module script is redundant | `templates/map-parking.html` L3 | **Trivial** | `<script type="module">` is deferred by default; explicit `defer` has no effect. |

## Security

| Concern | Location | Severity |
|---------|----------|----------|
| No Content-Security-Policy | `templates/base.html` | **Medium** | No CSP meta tag or header. Inline scripts and `eval()` are unrestricted. |
| No Subresource Integrity (SRI) on CDN resources | `templates/map-parking.html` L2–3, `templates/base.html` L44–50 | **Medium** | MapLibre JS/CSS from unpkg.com and Google Fonts loaded without `integrity` attributes. CDN compromise would inject arbitrary code. |
| Inline event handler | `src/mitglied-werden.html` L16 | **Low** | `onsubmit="alert(…)"` is an inline JS handler. A CSP that blocks `unsafe-inline` would break this. |
| Inline `onclick` on hamburger | `templates/base.html` L13 | **Low** | `onclick="document.querySelector('nav').toggleAttribute('open')"` — same inline handler concern. |
| Form has no CSRF protection | `src/mitglied-werden.html` | **Low** | Moot until a backend exists, but worth noting for when form submission is wired up. |

## Performance

| Issue | Location | Impact |
|-------|----------|--------|
| Unused font family loaded | `templates/base.html` L46 | ~20–50 KB wasted per page load (Chilanka). |
| No responsive images | `src/index.html`, `src/fahrzeuge.html` | PNG images served at full resolution regardless of viewport. No `srcset`, no WebP/AVIF. |
| Parallax background image not optimized | `src/index.css` L3–10 | `bergrutsch.jpg` loaded at full resolution with `background-size: cover` on a viewport-sized element. No responsive breakpoints. |
| CSS `@import` causes sequential loading | `src/index.css` L1 | `@import url('accordion.css')` blocks rendering until the imported file loads. A `<link>` in HTML would be parallel. |
| No `<link rel="preload">` for critical resources | `templates/base.html` | Fonts and hero image discovered late in the render waterfall. |
| No caching headers guidance | General | No `Cache-Control` or asset fingerprinting strategy documented. Every deploy invalidates all caches. |
| MapLibre GL JS loaded on map page | `templates/map-parking.html` | ~200 KB library. Appropriate since only included on `fahrzeuge.html`, but no lazy-loading strategy. |
| Material Symbols font loaded on every page | `templates/base.html` L50 | Icon font (~30 KB) loaded globally but only used for hamburger menu icon and flow arrows (could be inline SVG). |

## Accessibility

| Gap | Location | WCAG | Notes |
|-----|----------|------|-------|
| Hamburger menu not keyboard-accessible | `templates/base.html` L12–14 | 2.1.1 (A) | `<div id="hamburger" onclick="…">` — not focusable, no `role="button"`, no `aria-label`, no `aria-expanded`, no keyboard event. |
| No skip-navigation link | `templates/base.html` | 2.4.1 (A) | No mechanism to skip past the nav to main content. |
| Accordion missing ARIA attributes | `templates/accordion.html` | 4.1.2 (A) | Buttons lack `aria-expanded`, `aria-controls`. Content panels lack `role="region"`, `aria-labelledby`. |
| Map has no accessible fallback | `templates/map-parking.html` | 1.1.1 (A) | `<div id="map-parking"></div>` has no `role`, `aria-label`, or text fallback for screen readers. |
| Incorrect alt text (copy-paste) | `src/index.html` L56, L67 | 1.1.1 (A) | Car and coins images both say "Telefon abbildung". |
| Phone numbers not linked | `templates/accordion.html` L23, `src/mitglied-werden.html` L38 | 2.1.1 (A) | Phone numbers are plain text, not `<a href="tel:…">`. Not actionable on mobile. |
| Color contrast concerns | `src/base.css` L1–2, `src/nachhaltig.css` L5, `src/accordion.css` L32 | 1.4.3 (AA) | `--accent: hsl(195, 53%, 79%)` as background with dark text may pass, but `#557755` heading on white and `#a0d0ff` active state need verification. |
| No focus styles beyond browser defaults | `src/base.css` | 2.4.7 (AA) | No custom `:focus-visible` styles defined. The `all: unset` on `.accordion-header` strips native focus ring. |
| Form lacks validation feedback | `src/mitglied-werden.html` | 3.3.1 (A) | HTML5 `required` used but no visible error messages or `aria-describedby` for assistive tech. |
| `<hgroup>` usage | `src/index.html` L53, L63, L73 | — | `<hgroup>` is valid HTML5 again, but older screen readers may not convey the grouping semantics. |

## SEO

| Issue | Location | Impact |
|-------|----------|--------|
| No `<meta name="description">` | All pages via `templates/base.html` | **High** | Search engines will auto-generate snippets. Critical for click-through rate. |
| No Open Graph / Twitter Card tags | `templates/base.html` | **Medium** | Social media shares will show generic previews. |
| No structured data | All pages | **Medium** | No Schema.org JSON-LD for LocalBusiness, Organization, or FAQPage (FAQ exists on index). |
| No `robots.txt` | `public/` | **Low** | No crawling directives. Not blocking, but missing standard. |
| No `sitemap.xml` | `public/` | **Medium** | Small site, but helps search engines discover all pages. |
| No canonical URLs | All pages | **Low** | Risk of duplicate content if served under multiple URLs. |
| Index page has no `<h1>` | `src/index.html` | **Medium** | Hero section uses `<img>` + `<p>` for branding. No `<h1>` for search engines to parse. Missing heading hierarchy. |
| Page titles inconsistent | `src/index.html` vs others | **Low** | Index uses raw `<title>teilAuto Mössingen</title>` while others use `create_title` macro producing "Page \| teilAuto Mössingen". |

## Browser Compatibility

| Feature | Location | Support Concern |
|---------|----------|-----------------|
| `border-radius: calc(infinity * 1px)` | `src/index.css` L31 | `infinity` in CSS `calc()` only supported in Chrome 109+, Safari 15.4+, Firefox 113+. Older browsers get square corners or ignore the rule. |
| `clip-path: xywh(…)` | `src/base.css` L74, L82 | `xywh()` shape function has limited support (Chrome 116+, no Firefox as of early 2025). Mobile menu will be permanently visible or broken on unsupported browsers. |
| `:has()` pseudo-class | `src/base.css` L63, L164; `src/index.css` L215 | Chrome 105+, Safari 15.4+, Firefox 121+. Layout breaks on older browsers. |
| `text-wrap: balance` | `src/index.css` L62 | Chrome 114+, Safari 17.5+, Firefox 121+. Graceful degradation (no visual breakage, just unbalanced text). |
| `contain: size` | `src/base.css` L63 | Relatively well-supported but Edge cases with intrinsic sizing. |
| Custom `open` attribute on `<nav>` | `templates/base.html` L12 | Non-standard attribute. Works functionally but could conflict with future HTML specs. Using `data-open` would be safer. |
| `backdrop-filter: blur(10px)` | `src/index.css` L20 | Requires `-webkit-backdrop-filter` prefix for older Safari. No prefix provided. |

## Fragile Areas

| Area | Risk | Mitigation |
|------|------|------------|
| **Tera processing CSS files** | Any CSS file containing `{{`, `{%`, or `{#` sequences will cause a Tera parse error and fail the build silently for that file. | Add a file-extension filter in `build-site.ps1` to only template HTML files; copy CSS/assets directly. |
| **Accordion DOM coupling** | `templates/accordion.html` JS uses `header.nextElementSibling` to find content panels. Inserting any element between header and content breaks the accordion. | Use explicit `aria-controls` / `id` pairs instead of positional DOM traversal. |
| **Hardcoded map markers** | `templates/map-parking.html` has vehicle locations and names hardcoded as JS literals. Adding, removing, or renaming vehicles requires editing template HTML. | Extract marker data to a JSON file or Tera context variable. |
| **Mobile nav relies on `clip-path: xywh`** | If `xywh()` is unsupported, `#nav-items` has `clip-path` fail and the menu is either always visible or always hidden depending on fallback. Core navigation breaks. | Provide a fallback using `display: none`/`block` or `max-height` transition instead. |
| **Global CSS selectors in page stylesheets** | `nachhaltig.css` styles `article`, `h1`, `h2`, `h3`, `p` without any scoping class. Safe today because pages are independent, but breaks if any component is reused cross-page (e.g., a shared sidebar partial). | Scope styles with a page-specific class (e.g., `.page-nachhaltig article`). |
| **Watch-mode global variable debounce** | `scripts/build-site.ps1` L84 uses `$global:rebuildRequested` for debouncing. Multiple rapid file changes could trigger overlapping builds if the 250ms polling window is hit during a build. | Add a build-in-progress lock or use a proper debounce timer. |
| **Case-sensitive file reference** | `Preise.html` (capital P) in accordion template will 404 on Linux-based hosting (GitHub Pages, most web servers). Works on Windows dev machines only. | Rename to `preise.html` in the accordion template. |
