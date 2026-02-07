# Consolidated Source Analysis

**Generated:** 2026-02-07

**Sources analyzed:**

| Label | Type | Precedence | Location |
|-------|------|------------|----------|
| (primary) | codebase | Baseline | .gsd/codebase/ + .gsd/sources/primary/ |
| notes | planning docs | Authoritative | .gsd/sources/notes/ |
| references | company docs | Baseline | .gsd/sources/references/ |
| student-project | prior implementation | Ideas-only | .gsd/sources/student-project/ |
| old-site | original website | Baseline | .gsd/sources/old-site/ |

**Precedence order:** Authoritative > Baseline > Ideas-only

---

## 1. Project Goal & Vision

**Synthesized from authoritative source** (notes — Spezifikation_V1_Entwurf_überarbeitet.md):

> Redesign the website of **teilAuto Mössingen e.K.**, a family-run station-based carsharing cooperative in Mössingen (Baden-Württemberg), serving 60+ members with 2 vehicles.

**Primary goals (authoritative — locked):**

1. **Acquire suitable new members** (private households, businesses, government) **without overwhelming limited phone capacity** — the business is run part-time/volunteer by a married couple (Ralf & Ursula Stahl)
2. **Answer standard questions** (pricing, how it works, locations) so fewer calls/emails are needed — the website as a "self-service information hub"
3. **Position teilAuto** as a local, reliable, down-to-earth carsharing alternative to owning a (second) car — no moralizing, no poverty signals
4. **Present costs, processes, and rules transparently but abstractly** based on the 02/2022 usage handbook — users get the detailed handbook in person later
5. **Legal compliance** — Impressum (§5 TMG), Datenschutzerklärung (DSGVO), consistent tracking concept

**Secondary goals (from multiple sources):**

- ~20 additional customers would be a good outcome — *notes/Erstgespraech.txt*
- Avoid "false positives" (people who call but aren't a good fit) — *notes/Erstgespraech.txt*
- Modern, trustworthy look replacing the outdated frame-based site from ~2000 — *old-site, notes*
- Grow customer base to support fleet/location expansion — *notes, references*

**Sources:** notes/Spezifikation_V1_Entwurf_überarbeitet.md (primary), notes/Erstgespraech.txt, notes/Gespräch_Eltern_Anforderungen.md, references/InputStartseite.md

---

## 2. Current State (What Exists Today)

### Architecture

Static multi-page website built with **Tera** templating engine (Rust-based Jinja2 variant). HTML source files extend a shared `base.html` layout and are compiled at build time via PowerShell + `tera-cli` into flat HTML/CSS in `build/dist/`. No JavaScript framework, no bundler, no server-side runtime. Only inline JS for accordion, hamburger nav, and MapLibre map.

**Pattern:** Source-template compilation → static file output
**Build:** `npm run build` → PowerShell `build-site.ps1` → tera CLI per file → copy assets
**Deploy:** GitHub Pages (via GitHub Actions on `dhbw/publish` branch)

### Technology Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Templating | Tera (chevdor/tera-cli) | Compiled from Rust source |
| Build | PowerShell 7 + npm scripts | Zero npm runtime dependencies |
| Styling | Vanilla CSS | Custom properties, responsive via orientation media queries |
| Maps | MapLibre GL JS (CDN) | OpenFreeMap tiles, no API key |
| Fonts | Google Fonts (CDN) | Montserrat, Material Symbols |
| CI/CD | GitHub Actions | Windows runner → GitHub Pages |

### Pages & Content

**9 pages** (2 are empty stubs):

| Page | Status | Key Content |
|------|--------|-------------|
| Home (index.html) | Complete | Hero + tagline, 3 benefit teasers, 3-step how-to, FAQ accordion (5 Q&As), user types (private/business) |
| Preise | Complete | Deposit, annual fee, vehicle class, time/km tariff tables |
| Nachhaltigkeit | Complete | 3-section sustainability messaging |
| Fahrzeuge | Complete | 2 vehicle cards (Mokka E, Adam) + MapLibre parking map with 4 markers |
| Für Firmen | Complete | Business customer pitch with 4 benefits |
| Über uns | Complete | Founders, history, 60+ members, operations model |
| Mitglied werden | Partial | Contact form (non-functional `alert()`) + phone instructions |
| Datenschutz | **EMPTY** | Legally required — body block has no content |
| Impressum | **EMPTY** | Legally required — body block has no content |

**7 images** in `public/img/`, all with copyright concerns (see §5).

### Known Issues

**Critical:**
- Impressum page empty (legally required, §5 TMG)
- Datenschutz page empty (legally required, DSGVO)
- Contact form is fake (`onsubmit="alert(...)"` — no backend)

**High:**
- 3 HIGH-risk copyright images (vehicle photos, hero background) — must be replaced
- 3 MEDIUM-risk copyright images (how-to illustrations) — source unverifiable
- Case-sensitive link bug: `Preise.html` (capital P) in accordion → 404 on Linux/GitHub Pages
- Homepage references "interaktiven Rechner" (calculator) that doesn't exist

**Medium:**
- No meta descriptions, Open Graph, structured data (SEO)
- No Content-Security-Policy
- MapLibre loaded without version pin (unpng latest)
- Unused Google Font (Chilanka) loaded on every page
- CSS `clip-path: xywh()` for mobile nav has limited browser support — core nav breaks on older browsers
- No minification, image optimization, or asset fingerprinting
- Multiple typos in German text (gegegeben, Moblitätskonzept, Ihrer→Ihre)
- Inconsistent brand casing (teilAuto vs Teilauto)
- Inconsistent phone number format (07473/92202 vs 07473-922202)

**No testing of any kind** — no test framework, no linting, no accessibility auditing, no CI test step.

**Sources:** .gsd/codebase/*, .gsd/sources/primary/

---

## 3. Design Inputs & Reusable Ideas

### From Authoritative Sources (notes)

| Input | Source | Detail |
|-------|--------|--------|
| Tone: "Sachlich, freundlich, vertrauensbildend, Sie-Ansprache" | notes/überarbeitet | No moralizing, no poverty signals, no "kein Auto" rhetoric |
| Hero with dynamic claim | notes/überarbeitet + Gespräch | Typing effect cycling words: "flexibel, vernünftig, praktisch, regional" |
| Persona self-segmentation tiles | notes/überarbeitet | Self-segmentation section after intro, not in hero |
| Dezente CTAs (subtle text links) | notes/überarbeitet | Avoid flashy buttons to minimize false positives |
| Mobile-first responsive | notes/überarbeitet | Clear titles, scrollable, readable on small screens |
| Content from handbook abstracted | notes/AuswertungHandbuch | Do/Don't list for web copy: don't claim 24/7 support, don't promise online booking, etc. |
| 6 user personas defined | notes/Personas.txt | Simone (young mother), Johannes (eco), Günther (cross-use), Brigitte (frugal), Mirjam (business), Michael (motorcycle) |
| Marketing copy blocks ready | notes/WerbeIdeenHandbuch | Claims, text blocks, section drafts, microcopy ideas |
| Local photography requested | notes/WerbeIdeenHandbuch | People at landmarks, detail shots of Tresor/Schlüssel/Fahrtenbuch |

### From Ideas-Only Source (student-project)

| Idea | Source | Usable? | Notes |
|------|--------|---------|-------|
| Parallax hero with full-viewport background | student-project | ⚠️ | Good concept, but `bergrutsch.jpg` is HIGH copyright risk — keep pattern, REPLACE image |
| 3-step "So geht's" visual flow | student-project | ⚠️ | Good UX pattern. Icon images (car.png, phone.png, coins.png) are MEDIUM copyright risk — REPLACE assets |
| FAQ accordion on homepage | student-project | ✓ | Clean inline JS implementation, reusable pattern |
| MapLibre + OpenFreeMap for parking map | student-project | ✓ | Free, no API key, good for small-scale use. Missing OSM attribution. |
| Tera template composition pattern | student-project | ✓ | Clean extends/includes/macros pattern. UNLICENSED code — treat as inspiration |
| `.simple-list-layout` responsive component | student-project | ✓ | Reusable responsive column/row pattern |
| Orientation-based media queries | student-project | ✓ | Interesting alternative to width breakpoints — good for this audience |
| Vehicle cards with expandable specs (`<details>`) | student-project | ✓ | Native HTML disclosure — accessible, no JS needed |
| Two-column membership page (form + instructions) | student-project | ⚠️ | Layout idea is good, form needs real backend |

### From Baseline Source (old-site)

| Idea | Source | Usable? | Notes |
|------|--------|---------|-------|
| Cost comparison page (Preisvergleich) | old-site | ✓ | Detailed comparison vs private car (401€/month savings). Good concept for building trust. Numbers need updating. |
| Expansion plans (Talheim, Öschingen) | old-site/stellpl.htm | ✓ | Shows growth ambition — verify still current |
| European cross-use network description | old-site/info.htm | ✓ | Detailed ECS/BCS partnership info — content still relevant if verified |
| Deposit interest policy | old-site/kosten.htm | ✓ | "Kautionen werden mit 1% über Sparbuchzins verzinst" — nice trust detail, verify if still active |

⚠️ **Copyright-restricted items excluded.** See .gsd/sources/student-project/COPYRIGHT-FLAGS.md for full audit (3 HIGH, 3 MEDIUM risk items).

---

## 4. Requirements (Extracted & Merged)

### From Authoritative Sources (locked — treat as committed)

**Must-have (V1):**
- Presentation website only — no app, no online booking — *notes/Erstgespraech*
- "Kein Online-Abschluss" — next step is always phone contact, never an online signup form — *notes/überarbeitet*
- Avoid claiming capabilities the business doesn't have (24/7 support, app, spontaneous booking, free-floating, paperless) — *notes/AuswertungHandbuch*
- Empty Impressum and Datenschutz must be filled — legally required — *notes/überarbeitet*
- Persona self-segmentation tiles on startpage — *notes/überarbeitet*
- Analytics tracking concept (persona clicks, scroll depth, FAQ opens, contact clicks) — *notes/überarbeitet*
- Abstract tariff presentation (no exact prices unless explicitly approved) — *notes/überarbeitet*
- „Genaue, aktuelle Preise erhalten Sie im persönlichen Gespräch und in den Unterlagen" disclaimer — *notes/überarbeitet*
- Owner must be able to maintain limited content (e.g., Tarife.xml swap, parking descriptions) — *notes/Gespräch_Eltern*
- German DSGVO-compliant tracking — *notes/überarbeitet*

**Can-have (V1 / V1.5):**
- Dynamic claim typing effect on hero — *notes/Gespräch_Eltern*
- Top-FAQ accordion on startpage (2–3 questions) — *notes/überarbeitet*
- Map integration for parking locations — *notes/Erstgespraech (KANN)*

**Deferred (V2/future):**
- JavaScript cost calculator (Tarifrechner) — *notes/Gespräch_Eltern explicitly defers*
- Detailed price tables from Tarife.xml — *notes/überarbeitet*
- Example calculations with actual numbers — *notes, references*
- Downloadable contracts/AGB (blocked on legal review) — *notes/Erstgespraech*
- Possible online booking system — *references/Über uns.docx*

### From Baseline (confirmed by current implementation)

- 9-page site structure (home, pricing, sustainability, vehicles, business, about, membership, privacy, imprint) — *primary codebase*
- Template-based static site with build pipeline — *primary codebase*
- Interactive parking map with vehicle markers — *primary codebase*
- FAQ accordion with 5 Q&As — *primary codebase*
- Responsive design with mobile hamburger nav — *primary codebase*
- GitHub Pages deployment — *primary codebase*
- Vehicle fleet: Opel Mokka E (M, electric), Opel Adam (XS, blue) — *primary, old-site, references*
- 2 active + 1 vacant + 2 planned parking locations — *primary, old-site, references*
- Phone-only booking (07473-922202) — *all sources consistently*
- Membership-based model, no one-time rentals — *all sources consistently*
- 3-month minimum membership, monthly cancellation after — *references/InputStartseite*
- Cross-use (Quernutzung) via BCS/DACHverband network — *all sources*
- Family operation: Ralf Stahl (owner) + Ursula Stahl (bookings/admin) — *all sources*

### From Ideas-Only (needs owner confirmation before committing)

- Large hero with nature/landscape background image and scroll-to-content pattern — *student-project, references/email*
- Design references: visiticeland.com, nike.com aesthetic — *references/email*
- Study-backed savings claims (1000€/year at 8000km) — *old-site/info.htm — numbers need verification*
- Cost comparison page (teilAuto vs private car) — *old-site/preisver.htm — update needed*
- Expansion roadmap mention (Talheim, Öschingen) — *old-site/stellpl.htm — verify current*

---

## 5. Hard Constraints

- **Copyright:** No reuse of flagged assets from student-project or old-site. Only owner-supplied or properly licensed assets permitted. Specifically: vehicle photos (adam.png, mokka.png), hero background (bergrutsch.jpg), how-to illustrations (car.png, phone.png, coins.png) must all be REPLACED.
- **No online signup/application form** — next step is always phone contact — *notes/überarbeitet*
- **No capabilities the business doesn't have** — no 24/7 chat, no app, no free-floating, no spontaneous returns, no "completely paperless" — *notes/AuswertungHandbuch*
- **Pricing caution** — all price data from 02/2022 handbook; must be verified before publishing exact numbers. If unverified, use abstract language only. — *notes/überarbeitet, AuswertungHandbuch*
- **Legal compliance** — Impressum (§5 TMG) and Datenschutzerklärung (DSGVO) are legally mandatory for German commercial websites — *notes/überarbeitet*
- **Maintenance simplicity** — the parents (non-technical) must be able to update tariffs and basic text. This constrains CMS/architecture choices. — *notes/Gespräch_Eltern*
- **Student-project code is UNLICENSED** — `package.json` declares UNLICENSED. Any code reuse must be treated as inspiration, not copy. — *student-project/COPYRIGHT-FLAGS.md*
- **MapLibre/OpenFreeMap require OSM attribution** — ODbL compliance gap in current implementation — *student-project/COPYRIGHT-FLAGS.md*
- **Minimum age 22** for business customer authorized drivers — *references/Zusatz juristische Personen*
- **Minimum booking duration: 30 minutes**, in half-hour increments — *references/Nutzungshandbuch*

---

## 6. Conflicts Found & Resolved

| # | Topic | Source A | Source A Says | Source B | Source B Says | Resolution | Rule Applied |
|---|-------|---------|--------------|---------|--------------|------------|-------------|
| 1 | **Tech stack** | notes/TechStack.md (Auth) | CouchCMS + PHP on STRATO, Tailwind, Alpine.js, Leaflet | primary codebase (Base) | Tera + PowerShell, vanilla CSS, MapLibre, GitHub Pages | **OPEN QUESTION** — TechStack.md was written as a "final tech decision" but was never implemented. The codebase went a different direction. Owner must decide: keep current Tera stack or pivot to CouchCMS+PHP. | Rule 3 (multiple auth-level sources conflict with reality) |
| 2 | **Pricing display** | notes/überarbeitet (Auth) | Abstract only — "eher textlich erklären", no exact € | primary codebase (Base) | Exact prices in HTML tables (490€, 34€, 2.05€/h, etc.) | **Authoritative wins:** prices should be abstract per spec. Current exact prices contradict the spec. Needs reconciliation — either owner approves exact prices or they must be removed/softened. | Rule 1 (Auth states explicit position) |
| 3 | **Homepage "Rechner" reference** | primary codebase (Base) | Homepage says "interaktiven Rechner" linking to preise.html | notes (Auth) | Calculator explicitly deferred to V2 | **Authoritative wins:** Remove or replace the "Rechner" reference from homepage. No calculator in V1. | Rule 1 |
| 4 | **Information Architecture** | notes/überarbeitet (Auth) | 9 pages with "So funktioniert's" as separate page | primary codebase (Base) | 9 pages but different structure (how-to is on homepage, separate mitglied-werden page) | **Authoritative takes priority** for planning. The spec's IA should guide the redesign. Current codebase structure is informational only. | Rule 1 |
| 5 | **CSS framework** | notes/TechStack.md (Auth) | TailwindCSS | primary codebase (Base) | Vanilla CSS with custom properties | Subsumed by Conflict #1 (tech stack). Decided together. | Rule 3 |
| 6 | **Map library** | notes/TechStack.md (Auth) | Leaflet + OpenStreetMap | primary codebase (Base) | MapLibre GL JS + OpenFreeMap | Subsumed by Conflict #1. MapLibre is functionally similar to Leaflet; either works. | Rule 3 |
| 7 | **Annual fee** | old-site + primary codebase (Base) | 34€ | references/Nutzungshandbuch + notes/überarbeitet (Base+Auth) | 35€ | **OPEN QUESTION** — contradictory data across multiple sources. Owner must confirm current annual fee. | Rule 3 |
| 8 | **Booking fee** | references/InputStartseite (Base) | 0,75€ | references/Nutzungshandbuch (Base) | 0,77€ | **OPEN QUESTION** — two baseline sources disagree. Owner must confirm. | Rule 3 |
| 9 | **Firmen Grundgebühr** | primary + old-site (Base) | 34€ | references/Nutzungshandbuch (Base) | 40€ | **OPEN QUESTION** — baseline sources disagree. Owner must confirm. | Rule 3 |
| 10 | **Night hours** | references/email (Base) | 0:00–6:00 | references/InputStartseite (Base) | 0:00–7:00 | **OPEN QUESTION** — multiple definitions (0–6, 0–7, 0–8). Owner must confirm. | Rule 3 |
| 11 | **Contact form vs no online signup** | notes/überarbeitet (Auth) | "Kein Online-Abschluss, kein Jetzt-anmelden-Formular" | primary codebase (Base) | Has contact form on mitglied-werden page | **Resolved:** The spec forbids an *application/signup* form but allows contact/inquiry forms. A "send us a message" form is fine; it just can't be a membership signup form. The current form's intent (Name, Email, Betreff, Nachricht) is an inquiry form, not a signup form — consistent with the spec. BUT the form is non-functional and needs a real backend. | Rule 1 (clarified scope) |
| 12 | **Phone numbers** | references/InputStartseite (Base) | Contact: 07473-25517, Booking: 07473-922202 | primary codebase + kont.htm (Base) | Only 07473-922202 | **OPEN QUESTION** — is 07473-25517 still active? Which number(s) to publish? | Rule 3 |

---

## 7. Open Questions (Need Owner Decision)

| # | Question | Why It Matters | Conflicting Sources | Default If No Answer |
|---|----------|---------------|--------------------|--------------------|
| 1 | **Keep current Tera/static stack or move to CouchCMS+PHP+Tailwind as planned in TechStack.md?** | Defines entire architecture, hosting (GitHub Pages vs STRATO), maintenance model (code edits vs CMS admin panel), and development approach. Massive scope difference. | notes/TechStack.md vs primary codebase | Keep Tera stack (it works, it's deployed, lower complexity) |
| 2 | **Exact prices on website or abstract ranges only?** | Spec says abstract; codebase has exact prices; old site has exact prices. Users expect price info. Owner worried about outdated data. | notes/überarbeitet vs primary + old-site | Abstract with "Preise erhalten Sie im Gespräch" disclaimer |
| 3 | **Is the cost calculator V1 or V2?** | Homepage already references it. Notes defer to V2. Significant dev effort for complex billing logic (time tiers, km tiers, night rates). | notes/Erstgespraech vs notes/Gespräch_Eltern | V2 (deferred — remove homepage reference) |
| 4 | **Are current pricing numbers accurate (last verified 02/2022)?** | If publishing any prices, they must be correct. Deposit: 490/200/740€. Annual: 34€ or 35€? Booking: 0.75€ or 0.77€? Firmen: 34€ or 40€? | references (multiple conflicting), old-site | Do not publish exact prices until owner confirms |
| 5 | **Which phone number(s) to publish?** | 07473-25517 (contact) vs 07473-922202 (booking). Are both active? One number simplifies UX. | references/InputStartseite, primary codebase | Use 07473-922202 only (booking line, appears in most sources) |
| 6 | **Night hour definition?** | Billing calculation depends on this. 0:00–6:00, 0:00–7:00, or 0:00–8:00? | references (3 different values) | Don't publish exact hours; say "Nachtstunden" generically |
| 7 | **Active tariff classes?** | Current fleet uses only XS and M. Tarife.xml has XXS–XXL including L/XL/XXL. Are the larger classes for Quernutzung display or legacy? | references/Tarife.xml vs primary codebase | Show only XS and M (current fleet) |
| 8 | **Is Belsen parking location returning?** | Currently vacant ("zur Zeit nicht belegt"). Show on map/site or omit? | references/Ergänzung Handbuch, old-site/stellpl.htm | Show as "geplant" (planned) alongside Don Bosco and Kino |
| 9 | **Color scheme / branding?** | No design mockup or brand guide exists. "Wie TA Neckaralb wär OK, muss aber net." Current codebase uses `hsl(195, 53%, 79%)` light blue. | notes/Erstgespraech (vague) | Keep current light blue accent; refine during design phase |
| 10 | **Photography / image assets?** | All current images have copyright issues. Owner needs to supply or commission photos. Suggestion: local photos at recognizable landmarks, detail shots of Tresor/Schlüssel/Fahrtenbuch. | notes/Spezifikation, WerbeIdeenHandbuch | Block on owner providing photos before launch |
| 11 | **How personal can website texts be?** | Notes ask: "Wie persönlich dürfen die Texte sein?" — affects tone of Über uns, testimonials, storytelling. | notes/Spezifikation_V1_Entwurf | Moderately personal (founders named, origin story told — as in current Über uns) |
| 12 | **Quernutzung still active and current details?** | Handbook 2022 describes it in detail. Important selling point. But partner details (27 vehicles in Tübingen) may be outdated. | references/Nutzungshandbuch, old-site | Include but with generic "200+ Partner" — verify specifics |
| 13 | **Number of vehicles/members still accurate?** | "60+ Fahrtberechtigte" and "2 Fahrzeuge" stated for 2025. Is this still correct in 2026? | notes/Texte/Über uns.docx | Use current numbers but verify before launch |
| 14 | **Tiered km pricing still in use?** | Calculator supports 3-tier km pricing (base/100+/500+). Website drafts show single rate. | references/Calculator_Notes vs InputStartseite | Assume single rate unless owner says otherwise |
| 15 | **What should happen with the contact form?** | Currently a fake `alert()`. Options: (a) real email-sending form, (b) remove form and keep phone-only CTA, (c) mailto: link. Backend needed for (a). | primary codebase, notes/überarbeitet | Phone-only CTA with optional mailto: link (simplest, matches "kein Online-Abschluss" spirit) |

**These questions should be answered during `gsd:new-project` questioning phase.**

---

_Consolidated: 2026-02-07_
_Precedence: Authoritative > Baseline > Ideas-only_
_Run `gsd:new-project` next — point it at this file during questioning._
