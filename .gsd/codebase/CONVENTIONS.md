# Coding Conventions

## HTML Conventions

### Template Inheritance
- All pages extend `base.html` using Tera's `{% extends "base.html" %}` syntax
- Three required blocks per page: `head`, `nav`, `body`
- `head` block adds page-specific CSS and `<title>` via `create_title` macro
- `nav` block invokes `create_nav(page="PageName")` for active-state highlighting
- Pages without nav highlighting pass no `page` arg: `create_nav()`

### Semantic HTML
- `<main>` wraps all page content; one `<main>` per page
- `<article>` used for self-contained content units (benefits, vehicle cards, user types)
- `<section>` groups thematic content within `<main>` (FAQ, how-to, user types, parking)
- `<hgroup>` used for heading + paragraph pairings (how-to items)
- `<details>/<summary>` for native disclosure (vehicle specs on fahrzeuge.html)
- `<figure>` for images with semantic meaning (how-to illustrations)
- `<footer>` in base template with Impressum/Datenschutz links
- `<nav>` with `<ul>/<li>` list structure for navigation

### Attribute Ordering
- No enforced attribute ordering; generally: structural attrs first (`id`, `class`), then `href`/`src`, then `alt`
- Boolean attributes used as custom state: `nav[open]` toggled via JS `toggleAttribute`

### ID Naming
- Kebab-case for IDs: `#main-content`, `#map-parking`, `#price-tables`, `#howto-items`, `#nav-items`, `#nav-logo`, `#nav-spacer`, `#contact-form`
- IDs used for both styling hooks and JS targeting

### Class Naming
- Kebab-case: `.accordion-header`, `.accordion-content`, `.accordion-item`, `.simple-list-layout`, `.howto-flow-arrow`, `.howto-item-spacer`, `.parallax-bg`
- BEM-like but not formal BEM: parent-child naming (`.accordion-header`, `.accordion-content`) without `__` or `--` modifiers
- Utility-style classes for layout: `.button`, `.spacer`, `.description-aligner`, `.users-button-aligner`
- State class via JS: `.active` on accordion headers
- Navigation state: `.nav-current` set by Tera macro conditional

### Link Conventions
- Internal links use relative paths: `preise.html`, `fahrzeuge.html`, `mitglied-werden.html`
- Inconsistent casing in one instance: `Preise.html` (capital P) in accordion template vs `preise.html` elsewhere
- External links open in same tab (no `target="_blank"`)

### Content Structure
- `<h1>` once per page as page title
- Heading hierarchy generally respected: `h1 > h2 > h3 > h4`
- `index.html` uses `h4` directly under `<article>` (benefits) — skips h2/h3
- `<br>` used for line breaks within paragraphs (German text flow)
- `&shy;` soft hyphens used for word-break hints in German text
- `&#8209;` non-breaking hyphen used in compound words

## CSS Conventions

### Architecture
- **One base stylesheet** (`base.css`) loaded on every page via `base.html` template
- **Per-page stylesheets** loaded in the page's `head` block: `index.css`, `preise.css`, `fahrzeuge.css`, `nachhaltig.css`, `mitglied-werden.css`
- **Component stylesheets** imported via `@import`: `index.css` imports `accordion.css`
- CSS-only approach: no preprocessors (Sass/Less), no PostCSS, no CSS-in-JS
- All CSS files processed through Tera alongside HTML (though no Tera syntax is used in CSS files)

### Custom Properties
- Global custom properties defined in `:root` in `base.css`:
  - `--accent: hsl(195, 53%, 79%)` — primary brand color (light blue)
  - `--accent-hover: hsl(195, 53%, 72%)` — hover state variant
- Local custom properties scoped to elements: `--shadow-color`, `--shadow-size`, `--shadow` in `#hero`
- No design-token system; only two global variables

### Naming
- Selectors primarily use IDs and element types rather than classes
- Classes follow kebab-case when used
- No namespacing or BEM methodology in CSS selectors

### Responsive Patterns
- **Orientation-based breakpoints** preferred over width-based:
  - `@media (orientation: portrait)` and `@media (orientation: landscape)` used throughout
- **One width breakpoint**: `@media screen and (width < 800px)` / `(width >= 800px)` for nav hamburger toggle
- Mobile-first implicit: portrait styles are typically the base, landscape adds columns
- Responsive font sizing via `min()`: `font-size: min(1rem, 4vw)`, `font-size: min(1rem, 1.1vw)`
- Layout shifts between portrait (column) and landscape (row) using `flex-direction` and `grid-template-*`

### Layout Patterns
- **Flexbox** for 1D layouts: nav, footer, article stacks, how-to flow
- **CSS Grid** for 2D layouts: benefits section, how-to alternating layout, contact form
- Grid areas used for form layout: named areas (`form-name`, `form-mail`, etc.)
- `.simple-list-layout` reusable pattern: vertical on portrait, horizontal on landscape with decorative separators
- `contain: size` used on nav logo and figure elements for sizing containment

### Visual Patterns
- Decorative separators via `::before` pseudo-elements with `transform: scaleX()` / `scaleY()`
- Parallax effect via `position: fixed` background with `backdrop-filter: blur()`
- Pill-shaped buttons: `border-radius: calc(infinity * 1px)`
- Navigation current-page indicator: `clip-path: polygon(...)` for triangle notch
- Clip-path animations: mobile nav uses `clip-path: xywh()` with `transition`
- Consistent gray: `#eeeeee` for subtle backgrounds, `lightgray` for separators
- Accent color (#a0d0ff) for active accordion state — differs from `--accent` (inconsistency)

### Units
- `rem` for spacing and sizing
- `vh`/`vw` for viewport-relative sizing
- `%` for widths and responsive calculations
- No `px` for typography; `px` only for borders and specific pixel details

## JavaScript Conventions

### Scope
- Minimal JavaScript — only two scripts in the entire site, both inline in templates

### Accordion Script (`accordion.html`)
- Vanilla JS, no framework
- `document.querySelectorAll` + `forEach` pattern
- DOM manipulation via `classList.toggle`, `nextElementSibling`
- Inline `<script>` at bottom of template partial
- Max-height animation pattern for expand/collapse

### Map Script (`map-parking.html`)
- MapLibre GL JS loaded from CDN (`unpkg.com`) with `defer`
- `<script type="module">` for map initialization
- `const` for all declarations
- Marker data hardcoded as array of `new maplibregl.Marker()` calls
- Mouse events via direct property assignment: `.onmouseenter`, `.onmouseleave`

### Navigation Hamburger (`base.html`)
- Inline `onclick` handler on hamburger div
- Single-line arrow-function-style inline: `document.querySelector('nav').toggleAttribute('open')`

### General JS Patterns
- No module bundler, no import/export between files
- No error handling in client-side JS
- No TypeScript
- CDN dependencies loaded directly (MapLibre GL)

## Template Conventions

### Engine
- **Tera** templating engine (Jinja2/Django-like syntax)
- CLI tool: `chevdor/tera-cli` with `--include-path`, `--env-only` flags

### Inheritance
- Single base template: `templates/base.html`
- All pages in `src/` extend base via `{% extends "base.html" %}`
- Three blocks defined in base: `head`, `nav`, `body`
- `nav` block has a `throw()` fallback if not overridden (enforces nav presence)
- `body` block has "NO BODY CONTENT" fallback text

### Macros
- `create_nav(page)` — generates full navigation with active-page highlighting
- `create_nav_link(name, page, current)` — helper macro for individual nav links
- `create_title(page)` — generates `<title>` with pattern: `{page} | teilAuto Mössingen`
- Macros defined in `base.html` and called via `self::` prefix

### Includes
- `{% include "accordion.html" %}` — FAQ accordion partial included in index.html
- `{% include "map-parking.html" %}` — map partial included in fahrzeuge.html
- Include files are self-contained with their own `<script>` and `<link>` tags

### File Organization
- `templates/` — base template + reusable partials (3 files)
- `src/` — page-level HTML and CSS (16 files)
- All source files pass through Tera processing, including CSS (though CSS files contain no Tera syntax)

## Content Patterns

### Language
- All user-facing content in **German** (de)
- `<html lang="de">` set in base template
- German typographic conventions: soft hyphens (`&shy;`), non-breaking hyphens (`&#8209;`), `&nbsp;` via `\u00a0`
- Currency formatting: `490,-` (German comma-dash style)
- Phone number format: `07473/92202` and `07473-922202` (inconsistent separator)

### Brand Naming
- **teilAuto** — camelCase with lowercase "teil" (consistent in body text)
- **Teilauto** — appears in some contexts (e.g., "Teilauto Mössingen" in `geschaeftskunden.html`, `nachhaltig.html`)
- **teilAuto Mössingen** — used in `<title>` tags and hero
- Logo: `talogo.svg` referenced in nav and hero

### Tone
- Formal German address: "Sie" (formal you) used consistently
- Professional but approachable tone
- Direct calls to action: "Rufen Sie uns an", "Werden Sie jetzt Mitglied"

### Page Structure Pattern
- Each content page follows: `h1` title → introductory paragraph → structured content → CTA
- `index.html` is the outlier with hero section, parallax background, multi-section layout
- Legal pages (`datenschutz.html`, `impressum.html`) are empty stubs — `body` block present but no content

### Known Content Issues
- Typo: "gegegeben" in index.html howto section (should be "gegeben")
- Typo: "Moblitätskonzept" in nachhaltig.html (should be "Mobilitätskonzept")
- Inconsistent phone numbers: `07473/92202` vs `07473-922202`
- Inconsistent brand casing: "teilAuto" vs "Teilauto"
- Link casing inconsistency: `Preise.html` (accordion) vs `preise.html` (elsewhere)
- Empty pages: datenschutz.html and impressum.html have no body content
- Form `onsubmit` is a placeholder `alert()` — no actual submission logic
