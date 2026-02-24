# Phase 6: Trust, Legal, SEO & Quality - Research

**Researched:** 2026-02-24
**Domain:** German legal compliance (DDG/DSGVO), SEO meta/OG tags, content pages (Über uns, Für Firmen, Quernutzung), ARIA accessibility, quality sweep
**Confidence:** HIGH (legal and SEO domains verified against official sources; content patterns from existing codebase)

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Trust content pages:**
- Ueber uns: Lean heavily on student-project content co-written with owners. Named founders (Ralf & Ursula Stahl), origin story, personal tone. Rewrite for our Tailwind/template system.
- Nachhaltigkeit page REMOVED: No standalone sustainability page. Sustainability woven naturally into About (operations model, history), Fahrzeuge (electric vehicle), and Homepage (environmental benefits).
- Navigation change: Remove Nachhaltigkeit from nav. Final nav: Preise | Fahrzeuge | Fuer Firmen | Ueber uns. Footer: Impressum | Datenschutz.
- Fuer Firmen: Headline, intro paragraph, 3-4 benefits (Kosteneinsparungen, Flexibilitaet, Nachhaltigkeit, Einfache Verwaltung), phone CTA. Short pitch page.
- Quernutzung: Dedicated section on Fahrzeuge page, not scattered mentions. Frames 2-vehicle fleet as local fleet + 200+ regional network access.

**Legal pages:**
- Impressum: Use known data (teilAuto Moessingen e.K., Ralf Stahl, 07473-922202) plus "noch offen" placeholders for missing details (address, Handelsregister number, etc.).
- Datenschutzerklaerung: Minimal but DSGVO-compliant. Cover: responsible party, data subject rights (Art. 13-15), server logs from hosting, MapLibre/OpenFreeMap tile loading. Short, honest.

**Analytics & tracking (LOCKED):**
- V1: No tracking script. Design pages with future tracking in mind — semantic IDs, data attributes on CTAs, FAQ toggles, scroll milestone markers. Zero analytics code ships.
- V2: Google Analytics with mandatory consent banner. Cookie-based. Consent banner MUST load before any GA script executes. No cookieless alternative — this is final.
- Datenschutzerklaerung must include forward-looking section describing planned cookie-based GA analytics and consent mechanism.

**SEO & local search:**
- Local targeting: Primary keyword "Carsharing Moessingen." Secondary: Oeschingen, Talheim, Baestenhardt, Belsen.
- Meta descriptions: Sachlich + local keywords. E.g., "Carsharing in Moessingen — flexibel, guenstig, nachhaltig. teilAuto: Ihr Carsharing vor Ort."
- Open Graph: Use existing teilAuto logo (talogo.svg) for OG image.
- Semantic HTML: Fix on Phase 6 pages. ARIA labels HIGH PRIORITY — Ursula Stahl has visual impairment, uses screen reader.

### Claude's Discretion

- OG image design approach (generic brand card vs per-page)
- Exact meta description wording per page
- Heading hierarchy and landmark structure
- How sustainability messaging integrates into existing pages (which paragraphs, which sections)
- Datenschutzerklaerung template structure and exact legal wording

### Deferred Ideas (OUT OF SCOPE)

- Full site accessibility audit (beyond ARIA labels on Phase 6 pages)
- Google Analytics implementation + cookie consent banner UI — V2
- Structured data / JSON-LD for local business — V2
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| CONT-03 | Sustainability communicated through storytelling, not a dedicated "green" page | Content pattern: distribute sustainability notes into About page operations section, Fahrzeuge Mokka E description, Homepage benefit cards. No standalone page. |
| CONT-05 | Für Firmen (Business) — business customer pitch with 4 benefits | Student-project has the 4-benefit structure (Kosteneinsparungen, Flexibilitaet, Nachhaltigkeit, Einfache Verwaltung); rewrite as Tera template extending base.html |
| CONT-06 | Über uns (About) — founders, history, 60+ members, operations model | Student-project Über uns content co-written with owners; Texte/Über uns.docx is the authoritative draft; rewrite for Tailwind template |
| CONT-09 | Quernutzung mentioned as notable benefit on Fahrzeuge page | Fahrzeuge page already has placeholder Quernutzung section; needs expansion: local fleet + 200+ partner vehicles via BCS/DACHverband |
| LEGAL-01 | Impressum page with §5 DDG content (name, address, contact, register info) | §5 DDG (replaced §5 TMG May 2024) — same required fields; specific fields documented in Architecture Patterns |
| LEGAL-02 | Datenschutzerklärung page with DSGVO-compliant privacy policy | Art. 13 DSGVO required fields; covers server logs, OpenFreeMap tile requests; minimal template approach validated |
| LEGAL-03 | DSGVO-compliant analytics concept (no tracking code in V1, but design for it) | Data attributes on CTAs/FAQ, semantic IDs on scroll sections; forward-looking privacy policy text for future cookie analytics |
| SEO-01 | Meta descriptions on all pages | `<meta name="description">` in `{% block head %}` per page; 150-160 chars, local keywords |
| SEO-02 | Open Graph tags for social sharing | og:title, og:description, og:image, og:url, og:type — in `{% block head %}` per page; static OG image from talogo.svg |
| SEO-03 | Local search optimization (Moessingen, Baden-Wuerttemberg, Carsharing) | Local keywords in headings, body copy, meta descriptions; Teilorte names in body text |
| SEO-04 | Semantic HTML (proper heading hierarchy, landmarks) | H1 on every page, H2/H3 hierarchy; nav/main/header/footer landmarks already present in base.html |
| TRACK-01 | Analytics tracking concept | data-track attributes on CTAs, data-milestone attributes on scroll sections, data-accordion on FAQ |
| UX-03 | Copyright-clear images | Current vehicle images (adam.png, mokka.png, bergrutsch.jpg) are copyright-flagged; Phase 6 must swap these or document placeholder status |
| QUAL-01 | Correct German spelling and grammar throughout | Manual review; known typos from CONSOLIDATED.md (gegegeben, Moblitaetskonzept, Ihrer→Ihre) |
| QUAL-02 | No typos | Sweep all Phase 6 new pages and check existing pages for documented typos |
| QUAL-03 | No false claims | Check against constraints: no 24/7 support, no app, no free-floating, no spontaneous returns, no "completely paperless" |
| QUAL-05 | All links functional | Check case-sensitive link bug "Preise.html" documented in CONSOLIDATED.md; verify all nav links point to existing pages |
</phase_requirements>

---

## Summary

Phase 6 is a content-and-compliance phase, not a technology phase. The stack is the same Tera + Tailwind build system already established. The primary complexity is in two areas: (1) German legal compliance, specifically that §5 TMG has been replaced by §5 DDG since May 2024 — a critical update that most cached knowledge gets wrong — and (2) the DSGVO privacy policy requirement to disclose the OpenFreeMap tile loading as a third-party service that processes connection data (IP addresses are sent to OpenFreeMap servers when tiles load, even though OpenFreeMap does not log them by default).

The content pages (Über uns, Für Firmen, Quernutzung expansion) require no new technology — they are Tera templates extending base.html, using the existing Tailwind design system. The student-project versions of these pages were co-written with the owners and are the primary content source. SEO is implemented via per-page `{% block head %}` additions to the existing base template, which already has a `{% block head %}` slot.

The biggest hidden risk is navigation restructuring: removing Nachhaltigkeit from the nav and adding Für Firmen requires updating both `site/templates/partials/header.html` and `site/src/nachhaltig.html` (which becomes a stub or is repurposed). The nachhaltig.html file currently contains only a stub; its navigation entry must be removed.

**Primary recommendation:** Implement in four focused tasks: (1) content pages — Über uns, Für Firmen, Quernutzung expansion, nav restructure, (2) legal pages — Impressum §5 DDG and Datenschutzerklärung, (3) SEO — meta/OG tags in base template blocks, local keywords in copy, (4) quality sweep — link audit, German copy check, ARIA labels, image copyright status.

---

## Standard Stack

### Core

| Library/Tool | Version | Purpose | Why Standard |
|---|---|---|---|
| Tera templating | Current (chevdor/tera-cli) | Same build system already in use | No change from established stack |
| Tailwind CSS | Current (already in use) | Same design system | No change |
| Static HTML | — | Legal and content pages are pure HTML via templates | Correct for this use case |

### Supporting

| Tool | Version | Purpose | When to Use |
|---|---|---|---|
| eRecht24 generator | Online (free) | Generates DSGVO-compliant Datenschutzerklärung text for German websites | Reference for required sections and German legal wording — do NOT copy verbatim, use as structural reference |
| datenschutz-generator.de | Online (free) | Alternative generator for Datenschutzerklärung | Cross-reference against eRecht24 structure |

### No New npm Packages Required

This phase adds zero npm dependencies. All implementation is HTML/Tera templates + Tailwind utility classes already in the build. OG images use the existing `talogo.svg` file as a static asset.

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|---|---|---|
| Static OG image (talogo.svg) | Dynamically generated OG card (Satori + Sharp) | Dynamic generation requires Node.js build step, adds dependencies. Static logo is simpler, sufficient for this site's scale. Use static. |
| Manual Datenschutzerklärung | Generator service (eRecht24) | Generator output requires review and adaptation for our specific services; use as structural reference, not copy-paste. Manual is fine for a minimal site. |

---

## Architecture Patterns

### Recommended Project Structure (additions only)

```
site/
├── src/
│   ├── ueber-uns.html          # REWRITE (stub → full content)
│   ├── geschaeftskunden.html   # REWRITE (stub → Für Firmen content)
│   ├── impressum.html          # REWRITE (stub → §5 DDG content)
│   ├── datenschutz.html        # REWRITE (stub → DSGVO content)
│   ├── nachhaltig.html         # KEEP as stub or 301-redirect note
│   └── fahrzeuge.html          # ADD Quernutzung section expansion
├── templates/
│   ├── base.html               # ADD {% block meta %}{% endblock meta %} or extend {% block head %}
│   └── partials/
│       └── header.html         # UPDATE nav links (remove Nachhaltigkeit, order: Preise | Fahrzeuge | Fuer Firmen | Ueber uns)
└── public/
    └── img/
        └── og-image.png        # ADD 1200x630 static OG image (generate from talogo.svg)
```

### Pattern 1: Per-Page SEO Meta Block

Use the existing `{% block head %}` in base.html. Each page adds its meta description and OG tags in its own `{% block head %}` override.

**base.html already provides:** `{% block head %}{% endblock head %}` in `<head>`.

**Pattern — every Phase 6 page:**
```html
{% block head %}
  <meta name="description" content="[Page-specific 150-160 char description with local keywords]">
  <meta property="og:title" content="[Page Title] | teilAuto Moessingen">
  <meta property="og:description" content="[Same as meta description or shorter variant]">
  <meta property="og:image" content="/img/og-image.png">
  <meta property="og:url" content="https://www.teilautomoessingen.de/[page].html">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="de_DE">
{% endblock head %}
```

**Note:** Existing pages (index.html, preise.html, fahrzeuge.html, mitglied-werden.html) already override `{% block head %}` for page-specific scripts. Add meta tags to those existing `{% block head %}` blocks as additions, not replacements.

### Pattern 2: §5 DDG Impressum Structure

The legal basis changed from §5 TMG to §5 DDG on May 14, 2024. Do NOT reference §5 TMG. Required structure:

```html
<h1>Impressum</h1>
<p>Angaben gemaess § 5 DDG (Digitale-Dienste-Gesetz)</p>

<h2>Anbieter</h2>
<p>
  teilAuto Moessingen e.K.<br>
  Inhaber: Ralf Stahl<br>
  [Strasse Hausnummer] <span class="placeholder">[noch offen]</span><br>
  72116 Moessingen<br>
  Baden-Wuerttemberg, Deutschland
</p>

<h2>Kontakt</h2>
<p>
  Telefon: <a href="tel:+497473922202">07473-922202</a><br>
  E-Mail: info@teilautomoessingen.de
</p>

<h2>Handelsregister</h2>
<p>
  Registergericht: Amtsgericht [noch offen]<br>
  Registernummer: [noch offen]
</p>

<h2>Umsatzsteuer-Identifikationsnummer</h2>
<p>[noch offen — sofern vorhanden]</p>
```

**Key rule:** Placeholders must be clearly marked as "noch offen" for owner to complete before launch. No fields should be silently omitted — mark them explicitly.

### Pattern 3: Datenschutzerklärung — Art. 13 DSGVO Checklist

For this static site with no forms, no analytics V1, only server logs + external map tiles.

**Art. 13 DSGVO mandatory disclosures (checklist):**

1. **Verantwortlicher + Kontaktdaten** — Name, address, phone, email of the controller (same as Impressum data)
2. **Zwecke und Rechtsgrundlage** — Purpose and legal basis for each processing activity:
   - Server-Logfiles: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Betrieb und Sicherheit)
   - OpenFreeMap tile loading: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kartendarstellung)
   - Future Google Analytics: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Cookie-Banner — V2)
3. **Empfaenger / Drittanbieter** — Recipients of personal data:
   - STRATO AG (hosting provider, server logs)
   - OpenFreeMap (tile server, connection data)
4. **Drittlandtransfer** — Whether data is transferred outside EU/EEA. OpenFreeMap servers: disclose server location if known, otherwise state that connection data may be processed outside the EEA and note applicable safeguards
5. **Speicherdauer** — Retention period per processing activity. Server logs: state hosting provider's retention policy. Do NOT speculate on exact durations without confirmed source — use "gemaess den Aufbewahrungsfristen des Hosting-Anbieters"
6. **Betroffenenrechte** — Data subject rights (Art. 15-22 DSGVO): Auskunft, Berichtigung, Loeschung, Einschraenkung, Widerspruch, Datenportabilitaet
7. **Widerruf der Einwilligung** — Right to withdraw consent (relevant for future GA cookie consent)
8. **Beschwerderecht** — Right to lodge complaint with supervisory authority (Landesbeauftragter fuer Datenschutz Baden-Wuerttemberg)
9. **Geplante Webanalyse** — Forward-looking section: Google Analytics planned for V2, cookie-based, consent banner mandatory before any GA script loads

**Site-specific disclosures:**

- **OpenFreeMap:** Does not log IP addresses by default (verified from their privacy policy), uses no cookies, no user database. However, tile requests still constitute a data transfer to a third-party server under DSGVO. Disclose as: Verbindungsdaten sent to OpenFreeMap servers when loading the interactive map; no cookies or tracking by OpenFreeMap.
- **STRATO server logs:** IP address, timestamp, referrer, browser. Retention period: defer to STRATO's own data processing terms — do not state a specific duration without STRATO source confirmation.

### Pattern 4: Tracking Data Attributes (LEGAL-03 / TRACK-01)

No JavaScript tracking code in V1. Add semantic data attributes to CTAs and key interactions so future analytics can attach without HTML changes:

```html
<!-- CTA click tracking -->
<a href="tel:+497473922202" data-track="cta-phone" data-track-page="firmen">
  07473-922202
</a>

<!-- FAQ accordion (already has aria-controls, add data-track) -->
<button class="accordion-header" aria-expanded="false"
        aria-controls="faq-1" data-track="faq-open" data-track-id="faq-1">

<!-- Scroll milestone markers (invisible, for IntersectionObserver later) -->
<div data-scroll-milestone="hero-bottom" aria-hidden="true"></div>
<div data-scroll-milestone="cta-visible" aria-hidden="true"></div>
```

### Pattern 5: ARIA Labels for Interactive Elements

Semantic HTML landmarks are already in base.html (header, main, footer, nav). Priority additions for Phase 6:

```html
<!-- Navigation: already has aria-label="Hauptnavigation" — keep it -->
<nav aria-label="Hauptnavigation" id="primary-nav">

<!-- Hamburger button: already has aria-controls and aria-expanded — verify these stay correct -->
<button aria-controls="primary-nav" aria-expanded="false" type="button">Menue</button>

<!-- Skip link: already present in base.html — verify it works -->
<a class="sr-only focus:not-sr-only ..." href="#main-content">Zum Inhalt springen</a>

<!-- Images: alt text on all vehicle images -->
<img src="/img/mokka.png" alt="Opel Mokka E, elektrisches Carsharing-Fahrzeug von teilAuto Moessingen">

<!-- External links -->
<a href="..." aria-label="Zur Webseite des BCS-Carsharing (oeffnet in neuem Tab)" target="_blank" rel="noopener">

<!-- Benefit list items: descriptive, no decoration-only content without aria-hidden -->
<span aria-hidden="true">✓</span>
<span>Mitgliedschaftsmodell...</span>
```

### Pattern 6: Über uns Page Content Structure

Based on student-project content (co-written with owners, safe to use as structural reference) and Texte/Über uns.docx:

```
H1: Über uns
  Intro paragraph: Ralf & Ursula Stahl, founded 2000, Mössingen

H2: Unsere Geschichte
  Origin: private initiative, formerly Ökostadt Tübingen members
  Growth: from 1 vehicle to current fleet

H2: Wie wir arbeiten
  Part-time/volunteer operation, phone booking, personal service
  60+ members (verify current number before launch)

H2: Mitglied einer grösseren Gemeinschaft
  BCS/DACHverband member, Quernutzung network (sustainability angle woven in)

[Phone CTA block — same pattern as other pages]
```

### Pattern 7: Für Firmen Page Content Structure

```
H1: Für Firmen
  Intro: replace pool cars, save costs, flexible

H2: Ihre Vorteile
  4 benefit cards (matching grid pattern from other pages):
  - Kosteneinsparungen: no purchase/maintenance/insurance of own fleet
  - Flexibilitaet: pay only for use
  - Nachhaltigkeit: shared fleet, lower footprint (natural mention, not preachy)
  - Einfache Verwaltung: phone-based booking, monthly billing (Lastschrift)

H2: Besonderes für Unternehmen
  Business-specific info: named authorized drivers required, minimum age 22
  Higher deposit for legal entities (mention abstractly — exact number marked noch offen)

[Phone CTA block]
```

### Pattern 8: Media Compliance Gate (UX-03)

Every image file shipped in the site MUST have an entry in an asset ledger. The quality sweep plan must produce or verify this ledger before Phase 6 is marked complete.

**Required asset ledger format** (can be a markdown table in the quality sweep SUMMARY or a standalone file):

| File | Source | License | Attribution | Proof |
|---|---|---|---|---|
| talogo.svg | Owner-supplied (student project, co-created with Ralf Stahl) | Owner permission | None required | Co-authored with business owner |
| og-image.png | Generated from talogo.svg | Derived from owner asset | None required | — |
| mokka.png | **COPYRIGHT-FLAGGED** | Unknown — HIGH risk | **Must replace or document** | See COPYRIGHT-FLAGS.md |
| adam.png | **COPYRIGHT-FLAGGED** | Unknown — HIGH risk | **Must replace or document** | See COPYRIGHT-FLAGS.md |
| bergrutsch.jpg | **COPYRIGHT-FLAGGED** | Unknown — HIGH risk | **Must replace or document** | See COPYRIGHT-FLAGS.md |

**Rule:** No image may ship without a ledger entry. Flagged images must be resolved as: (a) owner-supplied replacement, (b) AI-generated replacement, or (c) CSS placeholder card with the image removed. The plan must force this resolution — "address later" is not acceptable for UX-03.

### Anti-Patterns to Avoid

- **Referencing §5 TMG in Impressum:** The TMG was replaced by the DDG on 14 May 2024. Reference §5 DDG. Risk of Abmahnung. **NOTE: REQUIREMENTS.md (LEGAL-01) still says "§5 TMG" — this is outdated. Implementation MUST use §5 DDG regardless of what REQUIREMENTS.md says. This is a non-negotiable hard rule.**
- **ODR platform link:** The EU ODR platform was permanently shut down on 20 July 2025. Do NOT add an ODR link to the Impressum.
- **Copying generic Datenschutzerklärung templates verbatim:** Must be specific to this site's actual data processing (STRATO hosting, OpenFreeMap tiles). Generic templates mention services not used here.
- **Making Datenschutzerklärung unreachable:** Must be reachable within one click from every page — footer link already exists in base.html footer.
- **Using moralizing language on Für Firmen page:** Nachhaltigkeit as a benefit must be framed as a practical advantage ("weniger CO2 pro Kilometer als ein eigener Fuhrpark"), not environmental preaching.
- **Claiming capabilities not offered:** "Online-Buchung", "24/7 Erreichbarkeit", "App", "spontane Rückgabe" must not appear on any page.
- **Missing H1:** Every page must have exactly one H1. Current stub pages (ueber-uns.html, geschaeftskunden.html, impressum.html, datenschutz.html) have `<h1>Seite</h1>` — these are placeholders that must be replaced.
- **Broken navigation after removing Nachhaltigkeit:** The header.html currently links to `nachhaltig.html`. If removing from nav, the file can stay (reduces 404 risk if anyone has it bookmarked) but the nav link must be removed. The `geschaeftskunden.html` link currently in nav must be confirmed it matches the filename.
- **Case-sensitive link bug:** CONSOLIDATED.md documents "Preise.html" (capital P) in accordion → 404 on Linux/GitHub Pages. Fix to `preise.html`.
- **OG image as SVG:** Many social platforms do not properly render SVG as OG images. Convert talogo.svg to a 1200x630 PNG as a build step (or manually create a simple PNG brand card).

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---|---|---|---|
| DSGVO-compliant Datenschutzerklärung structure | Custom legal text from scratch | Use eRecht24 or datenschutz-generator.de as structural reference | German privacy law has specific required disclosures (Art. 13/14 DSGVO); missing one creates legal exposure |
| Impressum legal reference | Custom research of which law applies | §5 DDG (NOT §5 TMG) — verified against gesetze-im-internet.de | TMG replaced by DDG on May 14, 2024; referencing wrong law risks Abmahnung |
| OG image generation pipeline | Custom Node.js Satori/Sharp pipeline | Static 1200x630 PNG file from existing talogo.svg | No dynamic content needed; static is simpler, zero build dependencies |
| Cookie consent UI | Custom banner implementation | Nothing in V1 — design for it, don't build it | V2 feature; implementing without analytics wastes effort and adds complexity |
| ARIA roles on semantic elements | Adding `role="main"` to `<main>` etc. | Native HTML5 elements already carry implicit ARIA roles | Redundant ARIA on semantic HTML is harmless but unnecessary; use native elements |

**Key insight:** The legal domain (Impressum, Datenschutzerklärung) has enough edge cases (DDG vs TMG, TDDDG, specific platform disclosures) that custom legal writing without reference to established German-law generators creates risk. Use eRecht24/datenschutz-generator as structural reference, then adapt to this site's actual services.

---

## Common Pitfalls

### Pitfall 1: Referencing §5 TMG Instead of §5 DDG

**What goes wrong:** Impressum says "Angaben gemäß § 5 TMG" — this references a law that has been repealed.
**Why it happens:** §5 TMG was the standard for 20+ years; training data and old templates still reference it.
**How to avoid:** Write "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)". The DDG came into force May 14, 2024.
**Warning signs:** Any template or example that says "§ 5 TMG" is outdated.

### Pitfall 2: ODR Platform Link in Impressum

**What goes wrong:** Adding a link to the EU Online Dispute Resolution (ODR) platform as "required" for commercial websites.
**Why it happens:** Many older Impressum guides required it; it was removed from requirements.
**How to avoid:** The EU ODR platform shut down permanently on July 20, 2025. Do not add the ODR link.
**Warning signs:** Any guide mentioning "ODR link required" is outdated.

### Pitfall 3: Datenschutzerklärung Too Generic or Not Specific Enough

**What goes wrong:** Privacy policy doesn't mention OpenFreeMap tiles or STRATO hosting, or mentions services the site doesn't use.
**Why it happens:** Copy-pasting a template without customizing for actual services.
**How to avoid:** Audit: what third-party requests does the site make? Answer: STRATO hosting (server logs) + OpenFreeMap tile CDN (connection data). Cover these two; remove sections for Google Analytics, social media pixels, contact forms, etc.
**Warning signs:** Privacy policy mentions "Google Analytics", "Facebook Pixel", "contact forms" when the site has none.

### Pitfall 4: Navigation Inconsistency After Restructure

**What goes wrong:** Remove Nachhaltigkeit from nav in header.html but forget to remove it from mobile nav or vice versa; or Für Firmen nav link points to `geschaeftskunden.html` but the text says "Für Firmen".
**Why it happens:** The mobile nav and desktop nav are controlled by the same `#primary-nav` element but testing may only verify one.
**How to avoid:** Test nav on both mobile (hamburger) and desktop after any nav changes. Verify all nav hrefs match actual filenames.
**Warning signs:** Console 404 on any nav link.

### Pitfall 5: Missing alt Text or ARIA Labels on Images

**What goes wrong:** Vehicle images have `alt="Opel Mokka E"` — too brief, doesn't describe context. Or images have no alt at all.
**Why it happens:** Minimal alt text feels "correct" enough to ship.
**How to avoid:** Alt text for informational images should describe purpose and context: `alt="Opel Mokka E, das elektrische Carsharing-Fahrzeug von teilAuto Moessingen an der Dreifuerstensteinstrasse"`. Decorative images get `alt=""`.
**Warning signs:** Ursula Stahl (screen reader user) is the test case here — would the alt text convey the vehicle's role to someone who can't see the image?

### Pitfall 6: OG Image as SVG File

**What goes wrong:** Setting `og:image` to `/img/talogo.svg`. Facebook/Twitter/LinkedIn may not render SVG OG images; they will show no preview image.
**Why it happens:** The logo is SVG; it's the most available image asset.
**How to avoid:** Create a static 1200x630 PNG file (manually or via simple script). Can be a simple white/green brand card with "teilAuto Mössingen" text and the logo mark. Save as `/img/og-image.png`.
**Warning signs:** Social sharing preview shows broken image placeholder.

### Pitfall 7: Copyright-Flagged Images Left in Place

**What goes wrong:** Phase 6 completes without replacing `adam.png`, `mokka.png`, or `bergrutsch.jpg`, which are flagged as HIGH copyright risk in `COPYRIGHT-FLAGS.md`.
**Why it happens:** Image replacement requires owner-supplied photos or AI generation, which is a dependency outside the developer's control.
**How to avoid:** For V1 launch, document explicitly: if owner-supplied images are not available, the vehicle image slots should show styled placeholder cards (CSS-only, no image) rather than the flagged images. This is a decision the plan must force to a resolution.
**Warning signs:** UX-03 requirement ("all images copyright-clear") still shows copyright-flagged images at launch.

### Pitfall 8: Meta Description Exceeding Character Limits

**What goes wrong:** Meta description over 160 characters gets truncated in SERPs; under 50 characters is too thin.
**Why it happens:** German text is verbose — the same meaning in German takes more characters than English.
**How to avoid:** Target 140-155 characters (shorter than the 160 ceiling to allow for German umlauts and longer words). Count characters before writing.
**Warning signs:** Any meta description over 155 chars in the German context.

---

## Code Examples

### Meta Description + Open Graph Block (per page)

```html
{% block head %}
  <meta name="description" content="Carsharing in Moessingen fuer Unternehmen: Kosten sparen, flexibel bleiben, Fahrzeuge nur bei Bedarf nutzen. teilAuto bietet lokales Carsharing im Steinlachtal.">
  <meta property="og:title" content="Fuer Firmen | teilAuto Moessingen">
  <meta property="og:description" content="Carsharing fuer Unternehmen in Moessingen: flexibel, kosteneffizient, nachhaltig.">
  <meta property="og:image" content="/img/og-image.png">
  <meta property="og:url" content="https://www.teilautomoessingen.de/geschaeftskunden.html">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="de_DE">
{% endblock head %}
```

### Impressum §5 DDG Template

```html
{% extends "base.html" %}
{% block title %}Impressum | teilAuto Moessingen{% endblock title %}
{% block main %}
<section class="max-w-2xl space-y-8">
  <div>
    <h1 class="text-3xl font-display">Impressum</h1>
    <p class="mt-2 text-sm text-brand-ink/60">Angaben gemaess § 5 DDG (Digitale-Dienste-Gesetz)</p>
  </div>

  <div class="space-y-2">
    <h2 class="text-lg font-semibold">Anbieter</h2>
    <address class="not-italic text-brand-ink/80">
      teilAuto Moessingen e.K.<br>
      Inhaber: Ralf Stahl<br>
      <span class="text-amber-600 text-sm">[Adresse noch offen]</span><br>
      72116 Moessingen
    </address>
  </div>

  <div class="space-y-2">
    <h2 class="text-lg font-semibold">Kontakt</h2>
    <p class="text-brand-ink/80">
      Telefon: <a href="tel:+497473922202" class="text-brand-primary hover:underline">07473-922202</a><br>
      E-Mail: info@teilautomoessingen.de
    </p>
  </div>

  <div class="space-y-2">
    <h2 class="text-lg font-semibold">Handelsregister</h2>
    <p class="text-brand-ink/80">
      Registergericht: Amtsgericht <span class="text-amber-600 text-sm">[noch offen]</span><br>
      Registernummer: <span class="text-amber-600 text-sm">[noch offen]</span>
    </p>
  </div>
</section>
{% endblock main %}
```

### Datenschutzerklärung Structure (Art. 13 compliant)

```html
<!-- 1. Verantwortlicher + Kontakt -->
<h2>Verantwortlicher</h2>
<p>teilAuto Moessingen e.K., Inhaber Ralf Stahl, [Adresse], 72116 Moessingen</p>
<p>Kontakt: 07473-922202, info@teilautomoessingen.de</p>

<!-- 2. Zwecke + Rechtsgrundlage: Server-Logfiles -->
<h2>Server-Logfiles</h2>
<p>
  Beim Aufruf unserer Website werden durch den Hosting-Anbieter (STRATO AG)
  automatisch Informationen in Server-Logfiles gespeichert: IP-Adresse,
  Datum und Uhrzeit des Abrufs, aufgerufene Seite, Browser und Betriebssystem.
  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
  Betrieb und Sicherheit der Website).
  Speicherdauer: gemaess den Aufbewahrungsfristen des Hosting-Anbieters.
</p>

<!-- 3. Empfaenger: Kartenintegration (OpenFreeMap via MapLibre) -->
<h2>Interaktive Karte (OpenFreeMap)</h2>
<p>
  Auf der Seite "Fahrzeuge" verwenden wir die Open-Source-Bibliothek MapLibre GL JS
  mit Kartendaten von OpenFreeMap (openfreemap.org). Beim Laden der Karte wird
  eine Verbindung zu den Servern von OpenFreeMap hergestellt. OpenFreeMap verwendet
  keine Cookies und fuehrt kein Nutzer-Tracking durch. Ihre IP-Adresse wird nach
  Angaben von OpenFreeMap nicht in Protokolldateien gespeichert.
  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
</p>

<!-- 4. Betroffenenrechte -->
<h2>Ihre Rechte</h2>
<p>Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
  Loeschung (Art. 17), Einschraenkung der Verarbeitung (Art. 18),
  Datenuebertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO).</p>
<p>Soweit die Verarbeitung auf Ihrer Einwilligung beruht, koennen Sie
  diese jederzeit mit Wirkung fuer die Zukunft widerrufen.</p>

<!-- 5. Beschwerderecht -->
<h2>Beschwerderecht</h2>
<p>Sie haben das Recht, sich bei der zustaendigen Aufsichtsbehoerde zu beschweren:
  Landesbeauftragter fuer den Datenschutz und die Informationsfreiheit
  Baden-Wuerttemberg.</p>

<!-- 6. Geplante Webanalyse (V2) -->
<h2>Geplante Webanalyse (kuenftig)</h2>
<p>
  Fuer eine spaetere Version dieser Website ist der Einsatz von Google Analytics
  geplant. Die Nutzung erfolgt nur nach Ihrer ausdruecklichen Einwilligung
  ueber ein Cookie-Banner (Art. 6 Abs. 1 lit. a DSGVO).
  Derzeit werden keine Analyse-Cookies gesetzt und kein Nutzerverhalten aufgezeichnet.
</p>
```

### Quernutzung Section for Fahrzeuge Page (expanded)

```html
<section class="rounded-3xl border border-brand-muted bg-white p-6 shadow-sm sm:p-8">
  <h2 class="text-2xl font-display">Quernutzung: Mehr Fahrzeuge fuer besondere Faelle</h2>
  <p class="mt-3 text-brand-ink/80">
    Als Mitglied von teilAuto Moessingen sind Sie Teil des bundesweiten
    BCS/DACHverband-Netzwerks. Das bedeutet: Sie koennen bei Bedarf auch
    auf ueber 200 Partnerfahrzeuge in der Region und deutschlandweit
    zurueckgreifen &ndash; vom Kleinwagen bis zum Transporter.
  </p>
  <p class="mt-3 text-sm text-brand-ink/70">
    Typisches Beispiel: Sie benoetigen einmal im Jahr einen Transporter fuer
    einen Umzug oder groessere Anschaffung. Dafuer muss niemand ein eigenes
    Fahrzeug kaufen oder eine teure Autovermietung beauftragen.
  </p>
</section>
```

### Tracking Data Attributes Pattern (TRACK-01)

```html
<!-- Phone CTA with tracking hook -->
<a href="tel:+497473922202"
   data-track="phone-cta"
   data-track-page="{{ current_page }}"
   class="...">
  07473-922202
</a>

<!-- "Mehr erfahren" links -->
<a href="mitglied-werden.html"
   data-track="nav-cta"
   data-track-label="mehr-erfahren"
   class="...">
  Mehr erfahren
</a>

<!-- Scroll milestones (invisible sentinels) -->
<div data-scroll-milestone="benefits-section" aria-hidden="true" class="sr-only"></div>
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|---|---|---|---|
| §5 TMG Impressum reference | §5 DDG Impressum reference | May 14, 2024 | All Impressum pages referencing §5 TMG risk Abmahnung in 2026 |
| ODR link required in Impressum | ODR link NO LONGER required | July 20, 2025 (platform shutdown) | Remove any ODR links from Impressum templates |
| meta keywords tag (SEO) | Not used — ignored by Google since ~2009 | Long-ago deprecated | Do not add `<meta name="keywords">` — wasted markup |
| OG image recommended 1200x627 | OG image standard 1200x630 | Minor update, both work | Use 1200x630 |
| TTDSG replaced by TDDDG | Now called TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz) | December 2021 → December 2023 refinement | Relevant when adding cookie consent in V2; not needed for V1 since no cookies |

**Deprecated/outdated:**
- §5 TMG: repealed May 2024, replaced by §5 DDG
- ODR platform link: platform shut down July 2025, do not add
- `<meta name="keywords">`: ignored by major search engines, do not add
- SVG as og:image: not reliably supported by social platforms, use PNG

---

## Open Questions

1. **Owner-supplied or AI-generated images for vehicles**
   - What we know: adam.png and mokka.png are copyright-flagged (HIGH risk per COPYRIGHT-FLAGS.md)
   - What's unclear: Whether owners have supplied replacement photos
   - Resolution required: Phase 6 plan must force a resolution — either (a) owners supply photos before plan executes, (b) CSS placeholder cards replace image slots, or (c) AI-generated images are used. Plan should implement placeholder cards as fallback so UX-03 is satisfied regardless. See Pattern 8 (Media Compliance Gate).

2. **Exact Impressum address and Handelsregister number**
   - What we know: Address is Dreifuerstensteinstrasse 8/1, 72116 Moessingen (from references/EXTRACTED.md). Handelsregister number is unknown.
   - Resolution required: Use the known address from references. Mark Handelsregister number as "noch offen". Owner must complete before launch.

---

## Sources

### Primary (HIGH confidence)
- [§5 DDG — gesetze-im-internet.de](https://www.gesetze-im-internet.de/ddg/__5.html) — official German law text; confirmed required fields for Impressum
- [OpenFreeMap Privacy Policy](https://openfreemap.org/privacy/) — confirmed: no IP logging by default, no cookies, no user tracking, GDPR-compliant design
- [MDN ARIA Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) — confirmed: semantic HTML first, ARIA only for missing meaning
- [The Open Graph protocol — ogp.me](https://ogp.me/) — official OG spec; confirmed: og:title, og:type, og:image, og:url are minimum required

### Secondary (MEDIUM confidence)
- [IHK Chemnitz Impressumspflicht](https://www.ihk.de/chemnitz/recht-und-steuern/rechtsinformationen/internetrecht/pflichtangaben-im-internet-die-impressumspflicht-4401580) — confirmed DDG transition, required fields for e.K.
- [mth-partner.de DDG Impressum guide](https://www.mth-partner.de/en/internet-law-imprint-obligation-according-to-the-german-gadpr-create-a-legally-compliant-imprint/) — DDG transition and ODR shutdown dates
- [eRecht24 Datenschutzerklärung](https://www.e-recht24.de/muster-datenschutzerklaerung.html) — structural reference for privacy policy sections
- [eRecht24 OpenStreetMaps Datenschutzerklärung](https://www.e-recht24.de/dsg/12709-openstreetmaps.html) — reference for map tile disclosure requirements
- [Straight North meta description guide 2026](https://www.straightnorth.com/blog/title-tags-and-meta-descriptions-how-to-write-and-optimize-them-in-2026/) — confirmed 150-160 char recommendation
- [web.dev ARIA and HTML](https://web.dev/learn/accessibility/aria-html) — confirmed: prefer semantic HTML, ARIA supplements not replaces

### Tertiary (LOW confidence — flags for validation)
- [steuertipps.de DDG/TMG transition](https://www.steuertipps.de/selbststaendigkeit/vom-tmg-zum-ddg-diese-angabe-muss-auf-der-internetseite-geaendert-werden) — confirms TMG→DDG transition but is secondary legal source; validated by official law text

---

## Metadata

**Confidence breakdown:**
- Standard Stack: HIGH — no new libraries; existing Tera/Tailwind system confirmed
- Legal (§5 DDG): HIGH — verified against official gesetze-im-internet.de text; DDG transition confirmed by IHK and multiple legal sources
- Legal (DSGVO/Datenschutz): MEDIUM — Art. 13 requirements confirmed; site-specific OpenFreeMap disclosure verified against their privacy page; STRATO log retention deferred to hosting provider's own terms (no speculative duration)
- SEO (meta/OG): HIGH — OG spec from ogp.me; character limits from multiple 2026 sources
- ARIA/Accessibility: HIGH — MDN + web.dev as authoritative sources
- Content patterns: HIGH — directly from codebase analysis and CONTEXT.md decisions
- Pitfalls: HIGH (legal) / MEDIUM (content) — legal pitfalls verified; content pitfalls from codebase analysis

**Research date:** 2026-02-24
**Valid until:** Legal findings stable (DDG is current law); SEO best practices stable for 6 months; OpenFreeMap privacy policy subject to change if their service policy changes
