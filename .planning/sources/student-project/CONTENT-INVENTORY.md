# Content Inventory: student-project

**Source:** `references/old/student-project/TA/TA_Website/`
**Inventoried:** 2026-02-07

---

## Pages

### 1. Homepage (`index.html`)
| Field | Value |
|-------|-------|
| URL path | `/` or `/index.html` |
| Title | `teilAuto Mössingen` |
| Purpose | Landing page — introduce carsharing concept, drive conversions |
| CSS | `index.css` (imports `accordion.css`) |

**Content blocks:**
1. **Parallax hero** — Full-viewport background image (`bergrutsch.jpg`), inverted logo overlay, tagline "Die sparsame Art (k)ein Auto zu haben"
2. **Benefits trio** — Three columns: Preiswert / Nachhaltig / Regional und deutschlandweit; each with short description + CTA button
3. **"So geht's" (How it works)** — Three-step visual flow: Buchen → Fahren → Sparen; each with icon image (`phone.png`, `car.png`, `coins.png`) and description
4. **FAQ accordion** — 5 questions about carsharing (included from `accordion.html` template)
5. **"Wer kann teilAutos nutzen?"** — Two-column: Privatpersonen (→ mitglied-werden.html) / Geschäftskunden (→ geschaeftskunden.html)

**Key text excerpts:**
- *"Die sparsame Art (k)ein Auto zu haben"*
- *"Studien bestätigen es: Für einen Großteil der deutschen Haushalte ist Carsharing günstiger als ein eigenes Auto."*
- *"Jeder redet von Umweltschutz - wir engagieren uns seit über 20 Jahren dafür!"*

---

### 2. Preise (`preise.html`)
| Field | Value |
|-------|-------|
| URL path | `/preise.html` |
| Title | `Preise \| teilAuto Mössingen` |
| Purpose | Display pricing tables |
| CSS | `preise.css` |

**Content blocks:**
1. **Sicherungseinlage table** — Erstnutzer 490€, Zweitnutzer 200€, Firmen 740€; Grundgebühr (jährlich): 34€, 0€, 34€
2. **Fahrzeugklassen table** — B-Kleinwagen = XS (Opel Adam), C-Kleinwagen = M (Opel Mokka)
3. **Tariff table** — Time-based rates: Tag, Folge ab 9.h, Nacht, Normal; per XS/M class

**Key text excerpts:**
- Pricing data: 490€ deposit, 34€/year fee, 0.32–2.46€/hour, 0.32–0.36€/km

---

### 3. Nachhaltigkeit (`nachhaltig.html`)
| Field | Value |
|-------|-------|
| URL path | `/nachhaltig.html` |
| Title | `Nachhaltig \| teilAuto Mössingen` |
| Purpose | Sustainability messaging |
| CSS | `nachhaltig.css` |

**Content blocks:**
1. **Headline article** — *"Jeder redet von Umweltschutz - wir tun es seit über 20 Jahren"*
2. **Ressourcenschonung und Effizienz** — Avoiding unnecessary car purchases
3. **Moderne Technik für nachhaltige Mobilität** — Well-maintained, low-emission vehicles
4. **Nachhaltige Mobilitätskultur** — Behavioral shift away from car dependency

---

### 4. Fahrzeuge (`fahrzeuge.html`)
| Field | Value |
|-------|-------|
| URL path | `/fahrzeuge.html` |
| Title | `Fahrzeuge \| teilAuto Mössingen` |
| Purpose | Vehicle fleet listing + parking map |
| CSS | `fahrzeuge.css` |

**Content blocks:**
1. **Opel Mokka card** — Photo (`mokka.png`), Tarif M, electric specs (100kW, 325km WLTP), assist systems list
2. **Opel Adam card** — Photo (`adam.png`), Tarif XS, Navi 4.0, Parkassistent
3. **Cross-use note** — DACHverband Carsharing membership enables partner vehicle access
4. **Stellplätze map** — Interactive MapLibre map (included from `map-parking.html`); 4 markers:
   - Opel Mokka parking spot (red marker)
   - Opel Adam parking spot (blue marker)
   - Planned: Don Bosco (gray)
   - Planned: Kino (gray)

---

### 5. Für Firmen (`geschaeftskunden.html`)
| Field | Value |
|-------|-------|
| URL path | `/geschaeftskunden.html` |
| Title | `Für Firmen \| teilAuto Mössingen` |
| Purpose | Business customer pitch |
| CSS | none (uses base.css only) |

**Content blocks:**
1. **Headline** — *"Effiziente Mobilitätslösungen für Ihr Unternehmen"*
2. **Intro paragraph** — Replace pool cars with carsharing
3. **Vorteile list** — Kosteneinsparungen, Flexibilität, Nachhaltigkeit, Einfache Verwaltung
4. **Closing CTA text** — Encourages adoption

---

### 6. Über uns (`ueber-uns.html`)
| Field | Value |
|-------|-------|
| URL path | `/ueber-uns.html` |
| Title | `Über uns \| teilAuto Mössingen` |
| Purpose | Company history / about page |
| CSS | none (uses base.css only) |

**Content blocks:**
1. **Team intro** — Ralf Stahl (owner) and Ursula Stahl (bookings/office)
2. **Origin story** — Founded 2000 as private initiative; formerly members of Ökostadt Tübingen
3. **Growth** — 60+ registered users in 2025, mix of private/business/government
4. **Use cases** — ÖPNV alternative, second car, backup vehicle
5. **Operations** — Side business, phone-based booking, manual logbook, plans for online system

---

### 7. Mitglied werden (`mitglied-werden.html`)
| Field | Value |
|-------|-------|
| URL path | `/mitglied-werden.html` |
| Title | `Mitglied werden \| teilAuto Mössingen` |
| Purpose | Membership sign-up page |
| CSS | `mitglied-werden.css` |

**Content blocks:**
1. **Contact form** — Name, Email, Betreff, Nachricht fields; grid layout; `onsubmit=alert()` (non-functional)
2. **Phone instructions** — Call 07473-922202 to arrange appointment; bring ID + license + deposit

---

### 8. Impressum (`impressum.html`)
| Field | Value |
|-------|-------|
| URL path | `/impressum.html` |
| Title | `Impressum \| teilAuto Mössingen` |
| Purpose | Legal imprint (required by German law) |
| CSS | none |

**Content:** Empty — no body content implemented.

---

### 9. Datenschutz (`datenschutz.html`)
| Field | Value |
|-------|-------|
| URL path | `/datenschutz.html` |
| Title | `Datenschutz \| teilAuto Mössingen` |
| Purpose | Privacy policy (required by German law) |
| CSS | none |

**Content:** Empty — no body content implemented.

---

## Assets

### Images (`public/img/`)

| File | Size | Type | Used In | Description |
|------|------|------|---------|-------------|
| `talogo.svg` | 18 KB | SVG (Inkscape) | base.html (nav), index.html (hero) | TeilAuto wordmark logo, black vector paths |
| `bergrutsch.jpg` | 361 KB | JPEG | index.css (parallax background) | Landscape/nature photo for hero section |
| `adam.png` | 230 KB | PNG | fahrzeuge.html | Opel Adam vehicle photo |
| `mokka.png` | 240 KB | PNG | fahrzeuge.html | Opel Mokka vehicle photo |
| `car.png` | 125 KB | PNG | index.html (how-to step 2) | Car illustration |
| `phone.png` | 134 KB | PNG | index.html (how-to step 1) | Phone illustration |
| `coins.png` | 276 KB | PNG | index.html (how-to step 3) | Coins illustration |

### Fonts (CDN-loaded, no local files)

| Font | Source | Usage |
|------|--------|-------|
| Montserrat (100–900, italic) | Google Fonts | Primary body font |
| Chilanka | Google Fonts | Loaded but not visibly used in CSS |
| Material Symbols Outlined | Google Fonts | Icons: `menu`, `keyboard_arrow_down` |

### External Libraries (CDN-loaded)

| Library | Source | Usage |
|---------|--------|-------|
| MapLibre GL JS | `unpkg.com/maplibre-gl` | Interactive map on fahrzeuge.html |
| OpenFreeMap tiles | `tiles.openfreemap.org/styles/liberty` | Map tile layer |

---

## Navigation Structure

```
┌─ Logo (→ index.html) ─────────────────────────────────────────────┐
│  Preise │ Nachhaltigkeit │ Fahrzeuge │ Für Firmen │ Über uns      │
└───────────────────────────────────────────────────────────────────┘

Footer:
  Impressum │ Datenschutzerklärung
```

**Pages NOT in navigation:**
- `mitglied-werden.html` — linked from index.html body only
- `index.html` — accessible only via logo click

---

## Reusable Components

### 1. Navigation (`base.html` macros)
- `create_nav(page)` — Full navigation bar with hamburger mobile menu
- `create_nav_link(name, page, current)` — Individual nav item with active state
- Responsive: hamburger + slide-down on mobile (<800px), sticky bar on desktop

### 2. Accordion (`templates/accordion.html`)
- 5 FAQ items with expand/collapse behavior
- Inline `<script>` for toggle logic (vanilla JS)
- Paired with `accordion.css` for animation (max-height transition)
- Included via `{% include "accordion.html" %}` in index.html

### 3. Parking Map (`templates/map-parking.html`)
- Loads MapLibre GL JS/CSS from CDN
- 4 markers with popups (hover-triggered)
- Color-coded: red (Mokka), blue (Adam), gray (planned)
- Included via `{% include "map-parking.html" %}` in fahrzeuge.html

### 4. Simple List Layout (`base.css`)
- `.simple-list-layout` class — flex column (portrait) / row (landscape)
- Separator lines between items (CSS pseudo-elements)
- Used on: index.html (users section), fahrzeuge.html (vehicle cards), mitglied-werden.html

### 5. Button Style (`index.css`)
- `.button` class — accent-colored pill button
- Used on index.html for CTAs

### 6. Base Layout (`templates/base.html`)
- `{% block head %}` — page-specific head content
- `{% block nav %}` — navigation injection point
- `{% block body %}` — page content
- `create_title(page)` macro — generates `<title>Page | teilAuto Mössingen</title>`
