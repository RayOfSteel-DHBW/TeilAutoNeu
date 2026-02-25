# Phase 9: Content Accuracy & Dead Code Cleanup - Research

**Researched:** 2026-02-25
**Domain:** Static HTML content editing, Jinja2/Tera template system, OG meta tags
**Confidence:** HIGH — all findings derived from direct codebase inspection

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Phone CTA Scoping**
- Remove phone number (07473-922202) from all pages except Impressum and the current membership/info section
- Clean removal — no replacement CTAs, no "Mehr erfahren" links where phone was removed
- Phone number on the info/membership section stays at the bottom so users read relevant content before seeing it
- Impressum keeps phone number (legally required)

**Sustainability Messaging**
- Claude's discretion, less is more — only touch where it fits naturally into existing copy
- Slightly stronger sustainability angle on Firmenkunden page (businesses appreciate green positioning)
- Do not write new sustainability paragraphs that Phase 10 will rewrite — this is a light touch
- Quernutzung framing on Fahrzeuge page is already good — verify it's correctly positioned, don't rewrite

**OG Tag Deduplication**
- Fix duplicate og:image tags: base.html defines default og:image, some pages also define their own — remove page-level duplicates that match the base default
- Do NOT rewrite existing meta description text — it's fine as-is
- Mechanical fix only

**Factual Claims & Links**
- Scan for known false-claim patterns (24/7 support, app, free-floating, spontaneous returns, "completely paperless") and verify none remain
- This is a verification step — earlier phases likely already addressed these, but confirm
- Fix any broken links (QUAL-05) — case-sensitivity issues, dead hrefs

### Claude's Discretion

- Dead file identification and removal (orphaned HTML, CSS, JS files not referenced anywhere)
- Exact sustainability wording where it's touched
- Whether any factual claims need correction (flag if found, likely none)
- Link fix approach (mechanical)

### Deferred Ideas (OUT OF SCOPE)

- Homepage restructuring (minimal hero, dual CTA, "So funktioniert's" page) — Phase 10
- Sustainability as a permanent review principle for future content passes — note for v2 requirements
- Meta description text review for accuracy against content changes — revisit after Phase 10 content rewrites
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| CONT-10 | Phone number (07473-922202) placed only in membership/how-to-join context — NOT on every page | Direct inspection confirms phone appears on ueber-uns.html and geschaeftskunden.html outside membership context. These CTAs must be removed. |
| CONT-09 | Quernutzung (cross-use network) mentioned as notable benefit, not headline feature | Direct inspection confirms Quernutzung is correctly framed as a secondary benefit on fahrzeuge.html and ueber-uns.html. Verification confirms no changes needed. |
| CONT-03 | Sustainability communicated through storytelling, not a dedicated "green" page | nachhaltig.html is an orphaned stub with no content and no inbound links. It must be removed. Sustainability storytelling is distributed across pages — light-touch enhancement on geschaeftskunden.html is the only action. |
| QUAL-03 | No claims about capabilities business doesn't have (24/7 support, app, free-floating, spontaneous returns, "completely paperless") | Direct scan found zero matches for these patterns. One reference to "keine App" (explicitly denying the app claim) — this is correct and keeps. QUAL-03 is satisfied; phase is a verification step only. |
| QUAL-05 | All links functional (no case-sensitive link bugs) | Direct scan found no capitalized page name links (e.g. "Preise.html"). All hrefs use lowercase filenames. No broken internal links detected. QUAL-05 appears already satisfied; phase is a verification step only. |
| SEO-01 | Meta descriptions on all pages | Direct inspection: all 9 source HTML pages have `<meta name="description">`. SEO-01 is satisfied. Verification only. |
| SEO-02 | Open Graph tags for social sharing | Direct inspection: all pages have og:title, og:description, og:url. The duplication issue (4 pages repeat og:image, og:type, og:locale that base.html already defines) is the only open item. After dedup, SEO-02 will be fully clean. |
</phase_requirements>

---

## Summary

Phase 9 is a cleanup and correction phase on a known, fully-inspected codebase. The stack is static HTML built via a PowerShell script that runs the Tera templating engine (Jinja2-compatible syntax) plus Tailwind CSS. Pages are in `site/src/*.html`, templates in `site/templates/`, and static assets in `site/public/`. The build outputs to `site/build/dist/`.

All work is mechanical content editing — no new code, no library changes, no build system changes. The five tasks are: (1) remove phone CTAs from two non-membership pages, (2) fix OG tag duplication across four pages, (3) remove the orphaned `nachhaltig.html` file, (4) verify no false claims remain (confirmed: none found), and (5) verify link integrity (confirmed: all internal links are lowercase and valid). The sustainability light-touch on geschaeftskunden.html is discretionary copy polish.

**Primary recommendation:** All changes are direct edits to `site/src/*.html` source files. Run `npm run build` once after all changes to verify the Tera build completes without error.

---

## Standard Stack

### Core

| Component | Version | Purpose | Notes |
|-----------|---------|---------|-------|
| Tera templates | via CLI | HTML templating (Jinja2-compatible) | `{% extends %}`, `{% block %}`, `{% include %}` syntax |
| Tailwind CSS | ^4.1.18 | Utility CSS | Build via `@tailwindcss/cli` |
| PowerShell build script | `scripts/build-site.ps1` | Orchestrates Tera + Tailwind + asset copy | Run with `npm run build` |

### File Locations

| Path | Purpose |
|------|---------|
| `site/src/*.html` | Page source files (edited in this phase) |
| `site/templates/base.html` | Global `<head>` defaults (og:type, og:locale, og:image, og:site_name) |
| `site/templates/partials/header.html` | Navigation |
| `site/templates/partials/footer.html` | Footer (Impressum + Datenschutz links) |
| `site/public/` | Static assets copied to dist as-is |
| `site/build/dist/` | Build output — DO NOT edit directly |

### Build Command

```bash
cd site && npm run build
```

(Requires PowerShell on path: `pwsh`)

---

## Architecture Patterns

### Template Inheritance

Every page in `site/src/` uses:

```jinja2
{% extends "base.html" %}

{% block title %}Page Title | teilAuto Mössingen{% endblock title %}

{% block head %}
  <!-- Page-specific <head> additions here -->
  <meta name="description" content="...">
  <meta property="og:title" content="...">
  <meta property="og:description" content="...">
  <meta property="og:url" content="...">
  <!-- Do NOT repeat: og:image, og:type, og:locale — base.html provides these -->
{% endblock head %}

{% block main %}
  <!-- Page body here -->
{% endblock main %}
```

### What base.html Already Provides (Never Repeat in Page `{% block head %}`)

```html
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="teilAuto Mössingen">
<meta property="og:image" content="/img/og-image.png">
```

These four tags appear in the `<head>` before `{% block head %}` is injected. Any page that also defines them creates duplicate `<meta>` tags in the rendered HTML.

### Phone CTA Pattern (To Be Removed)

Both `ueber-uns.html` and `geschaeftskunden.html` have a full CTA section at page bottom:

```html
<div class="rounded-3xl border-2 border-brand-primary bg-brand-primary/5 p-6 text-center shadow-sm sm:p-8">
  <p class="text-lg font-display text-brand-ink">Überzeugt? Melden Sie sich bei uns:</p>
  <p class="mt-3 text-3xl font-display text-brand-primary sm:text-4xl">
    <a href="tel:+497473922202" class="hover:underline" data-track="phone-cta" ...>07473-922202</a>
  </p>
  <p class="mt-2 text-sm text-brand-ink/70">Mo–Fr 09:00–12:00 Uhr</p>
  <p class="mt-4">
    <a href="mitglied-werden.html" ...>Wie die Mitgliedschaft funktioniert</a>
  </p>
</div>
```

Decision: Remove the entire `<div>` block (both the phone number and the "Wie die Mitgliedschaft funktioniert" link). Clean removal, no replacement.

### Phone CTA — Where It Stays

The phone CTA stays in `mitglied-werden.html` (membership context — appropriate). It stays in `impressum.html` and `datenschutz.html` (legal requirement — contact information, not a promotional CTA). Datenschutz phone is inside an `<address>` block — this is legal contact info, not a phone CTA.

---

## Detailed Findings: Current State

### Phone Number Locations

| File | Location | Action |
|------|----------|--------|
| `site/src/impressum.html` | `<address>` block (legal contact) | Keep — legally required |
| `site/src/datenschutz.html` | `<address>` block (DSGVO Verantwortlicher) | Keep — legally required |
| `site/src/mitglied-werden.html` | Bottom CTA section (membership page) | Keep — correct context |
| `site/src/ueber-uns.html` | Bottom CTA section (lines ~92–117) | REMOVE entire `<div>` block |
| `site/src/geschaeftskunden.html` | Bottom CTA section (lines ~109–134) | REMOVE entire `<div>` block |

### OG Tag Duplication

`base.html` defines 4 OG tags globally. The following pages duplicate them unnecessarily:

| File | Duplicate tags to remove |
|------|--------------------------|
| `site/src/datenschutz.html` | `og:image`, `og:type`, `og:locale` |
| `site/src/geschaeftskunden.html` | `og:image`, `og:type`, `og:locale` |
| `site/src/impressum.html` | `og:image`, `og:type`, `og:locale` |
| `site/src/ueber-uns.html` | `og:image`, `og:type`, `og:locale` |

Pages with correct (non-duplicated) OG heads: `index.html`, `mitglied-werden.html`, `preise.html`, `fahrzeuge.html` — these only define the page-specific tags (og:title, og:description, og:url).

### Orphaned Files

| File | Status | Action |
|------|--------|--------|
| `site/src/nachhaltig.html` | Stub page (7 lines, `<h1>Nachhaltig</h1>` only). No inbound links from any nav, page, or template. ASCII digraph in title ("Moessingen" not "Mössingen"). | DELETE |

No other orphaned HTML files. `mitglied-werden.html` is not in the primary nav but is reachable from: `index.html` (hero CTA + "So funktioniert" section), `ueber-uns.html` (after phone CTA removal, a secondary link stays), `geschaeftskunden.html` (after phone CTA removal, link also removed), and `templates/accordion.html`.

### Unreferenced Images in `public/img/`

The following image files exist in `site/public/img/` but are not referenced by any current source HTML, template, CSS, or JS file:

| File | Status |
|------|--------|
| `bergrutsch.jpg` | No reference found anywhere |
| `car.png` | No reference found anywhere |
| `coins.png` | No reference found anywhere |
| `phone.png` | No reference found anywhere |
| `adam.png` | No reference (CSS placeholder cards replaced these per STATE.md) |
| `mokka.png` | No reference (CSS placeholder cards replaced these per STATE.md) |
| `talogo.svg` | No reference found anywhere |

These are static assets in `public/` — the build copies them to `build/dist/img/` even if unused. They add build noise but do not break functionality.

**Recommendation:** Remove unreferenced images as dead code. Note: `adam.png` and `mokka.png` are placeholder files per STATE.md — owner will supply rights-clear photos later. Keep a note but remove from public for now to avoid confusion? The user decision delegates this to Claude's discretion. Given the STATE.md note that "owner must supply rights-clear photos," the safest call is to leave `adam.png` and `mokka.png` in place (they serve as documented placeholders) but remove clearly abandoned files (`bergrutsch.jpg`, `car.png`, `coins.png`, `phone.png`, `talogo.svg`) that have no context in the codebase.

### Factual Claims Audit (QUAL-03)

Scanned all `site/src/*.html` for: `24/7`, `App`, `spontan`, `papierlos`, `free-floating`, `freifloating`.

**Result: No violations found.** The one relevant hit is `ueber-uns.html` line 21: "kein Großanbieter und keine App" — this correctly *denies* having an app, matching QUAL-03. QUAL-03 is verified satisfied.

### Link Integrity Audit (QUAL-05)

Scanned all `site/src/*.html` and `site/templates/**/*.html` for capitalized filenames in `href=""` attributes.

**Result: No violations found.** All internal links use lowercase filenames: `preise.html`, `fahrzeuge.html`, `geschaeftskunden.html`, `ueber-uns.html`, `mitglied-werden.html`, `impressum.html`, `datenschutz.html`, `index.html`. QUAL-05 is verified satisfied. No broken links.

### Sustainability (CONT-03)

Current state of sustainability storytelling:
- `ueber-uns.html`: "Gemeinsam genutzte Fahrzeuge, die gut ausgelastet sind, ersetzen viele Privatautos. Das ist keine Ideologie — das ist der praktische Kern dessen, was wir seit Jahrzehnten tun." — Strong, well-placed.
- `geschaeftskunden.html`: Has a "Nachhaltigkeit" benefit card. Content: "Ein geteiltes Fahrzeug mit guter Auslastung erzeugt weniger CO2 pro gefahrenem Kilometer als ein eigener Fuhrpark, der die meiste Zeit auf dem Parkplatz steht. Für Unternehmen mit Nachhaltigkeitszielen ein praktisches Argument." — Already good, could be marginally strengthened per context.
- `fahrzeuge.html`: Mokka E card has "Vollelektrisch unterwegs – gut für die Umwelt und günstig im Betrieb." — Correctly positioned, no changes needed.
- `nachhaltig.html`: Stub — to be deleted.

**Action:** The geschaeftskunden.html Nachhaltigkeit card is the one candidate for a light-touch wording improvement. A single concise sentence addition can strengthen the business sustainability angle without adding a new paragraph. Everything else is already well-positioned.

### SEO-01 (Meta Descriptions)

All 9 source pages have `<meta name="description">`. SEO-01 verified satisfied.

### SEO-02 (Open Graph Tags)

All pages have `og:title`, `og:description`, `og:url`. The duplication of `og:image`, `og:type`, `og:locale` in 4 pages is the only issue. After removing duplicates, SEO-02 is fully clean.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead |
|---------|-------------|-------------|
| OG deduplication | Custom script | Direct edit: remove 3 lines per page in `{% block head %}` |
| Dead file detection | Custom scanner | Manual review already complete — findings listed above |
| Link checker | Custom tool | Manual grep already complete — no broken links found |

**Key insight:** This phase is entirely mechanical content editing. No tooling needed.

---

## Common Pitfalls

### Pitfall 1: Removing the Wrong Phone CTA Block
**What goes wrong:** Removing only the `<a>` tag and leaving the surrounding CTA div/paragraph structure in place — leaving a broken "Überzeugt? Melden Sie sich bei uns:" heading with no phone number.
**How to avoid:** Remove the entire outer `<div>` container with `class="rounded-3xl border-2 border-brand-primary..."` — not just the phone anchor tag.

### Pitfall 2: Deleting mitglied-werden Link Along With Phone CTA
**What goes wrong:** In `geschaeftskunden.html`, the phone CTA block includes a secondary link to `mitglied-werden.html`. The context decision says clean removal with no replacements — but this means the entire block including the secondary link goes away. That is correct per the user decision.
**How to avoid:** Confirm with user context: "Clean removal — no replacement CTAs." The "Wie die Mitgliedschaft funktioniert" link is inside the CTA block and goes with it.

### Pitfall 3: OG Tag Order Matters
**What goes wrong:** The Tera template injects `{% block head %}` content *after* the base.html OG tags. If a page defines `og:image` again in `{% block head %}`, browsers/scrapers will see two `og:image` tags. The fix is to remove the page-level duplicate, not to move it.
**How to avoid:** Remove the 3 duplicate lines from the 4 affected pages' `{% block head %}` block. Do not touch `base.html`.

### Pitfall 4: Editing Build Output Instead of Source
**What goes wrong:** Editing `site/build/dist/*.html` — changes are overwritten on the next `npm run build`.
**How to avoid:** All edits go to `site/src/*.html` only. Build output is ephemeral.

### Pitfall 5: Deleting nachhaltig.html from build/dist But Not src
**What goes wrong:** Deleting `site/build/dist/nachhaltig.html` but leaving `site/src/nachhaltig.html` — file reappears on next build.
**How to avoid:** Delete from `site/src/nachhaltig.html`. The build output regenerates correctly without it.

---

## Execution Plan (Single Plan: 09-01)

All changes fit in one plan because they are all mechanical content edits to source HTML files with no interdependencies.

**Recommended task order within 09-01:**

1. **Remove phone CTA from `ueber-uns.html`** — delete lines 92–117 (entire border-brand-primary div)
2. **Remove phone CTA from `geschaeftskunden.html`** — delete lines 109–134 (entire border-brand-primary div)
3. **Fix OG duplicates in 4 files** — remove `og:image`, `og:type`, `og:locale` from datenschutz.html, geschaeftskunden.html, impressum.html, ueber-uns.html
4. **Delete `site/src/nachhaltig.html`** — orphaned file
5. **Remove unreferenced images from `site/public/img/`** — bergrutsch.jpg, car.png, coins.png, phone.png, talogo.svg (keep adam.png and mokka.png as documented placeholders)
6. **Light-touch sustainability tweak on geschaeftskunden.html** — one sentence in the Nachhaltigkeit benefit card
7. **Verify factual claims** — already confirmed clean (no changes needed)
8. **Verify link integrity** — already confirmed clean (no changes needed)
9. **Run `npm run build`** — confirm Tera build completes without error

---

## Open Questions

1. **adam.png and mokka.png in public/img/**
   - What we know: STATE.md says "owner must supply rights-clear photos." The files currently serve as documented placeholder slots.
   - What's unclear: Whether removing them might confuse the owner during handoff.
   - Recommendation: Keep them in place. They are an intentional pending placeholder, not dead code in the same sense as the other unreferenced images.

2. **nachhaltig.html: Was it ever intentionally linked?**
   - What we know: Confirmed no inbound links from any page, nav, or template. The nav was restructured in Phase 2 (removed Nachhaltigkeit from primary nav).
   - Recommendation: Safe to delete. Sustainability content is distributed per design.

---

## Sources

### Primary (HIGH confidence — direct codebase inspection)

All findings from direct file reading and grep of the live codebase:

- `site/src/*.html` — 9 source pages read in full
- `site/templates/base.html` — base template inspected
- `site/templates/partials/header.html` — nav links verified
- `site/templates/partials/footer.html` — footer links verified
- `site/public/` — asset inventory complete
- `site/scripts/build-site.ps1` — build system understood
- `.planning/STATE.md` — project decisions cross-referenced
- `.planning/REQUIREMENTS.md` — requirement definitions read

### No external sources required
This phase involves no new libraries, frameworks, or external APIs. All research is codebase investigation.

---

## Metadata

**Confidence breakdown:**
- Current state of phone CTAs: HIGH — direct file inspection, line numbers identified
- OG duplication: HIGH — direct comparison of base.html vs page heads
- Dead files: HIGH — grep across all file types found no inbound references
- False claims audit: HIGH — grep confirms zero violations
- Link integrity audit: HIGH — grep confirms all lowercase filenames in hrefs
- Sustainability current state: HIGH — all pages read

**Research date:** 2026-02-25
**Valid until:** Stable — no external dependencies; only invalidated if pages are modified before planning
