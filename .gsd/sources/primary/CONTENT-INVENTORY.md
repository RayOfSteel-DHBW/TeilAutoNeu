# Content Inventory: Primary Codebase

**Scanned:** 2026-02-07
**Source:** site/
**Files examined:** 30 (9 HTML pages, 7 CSS, 3 templates, 7 images, 4 config/build)

---

## Pages/Routes

| Path | Title | Purpose | Key Content |
|------|-------|---------|-------------|
| `index.html` → `/` | teilAuto Mössingen | Homepage / landing page | Hero with logo + tagline, 3 benefit teasers (Preiswert, Nachhaltig, Regional), "So geht's" 3-step how-to (Buchen→Fahren→Sparen), FAQ accordion (5 questions), "Wer kann teilAutos nutzen?" (Privatpersonen / Geschäftskunden) |
| `preise.html` → `/preise.html` | Preise \| teilAuto Mössingen | Pricing tables | 3 tables: Sicherungseinlage & Grundgebühr, Fahrzeugklassen (XS/M), Stunden-/Nacht-/Folge-/Kilometerpreise |
| `nachhaltig.html` → `/nachhaltig.html` | Nachhaltig \| teilAuto Mössingen | Sustainability page | Intro paragraph, 3 subsections: Ressourcenschonung und Effizienz, Moderne Technik, Nachhaltige Mobilitätskultur |
| `fahrzeuge.html` → `/fahrzeuge.html` | Fahrzeuge \| teilAuto Mössingen | Vehicle fleet & parking map | 2 vehicle cards (Opel Mokka, Opel Adam) with expandable Ausstattung/Assistenzsysteme details, DACHverband cross-use note, MapLibre parking map with 4 markers |
| `geschaeftskunden.html` → `/geschaeftskunden.html` | Für Firmen \| teilAuto Mössingen | Business customers pitch | Intro paragraph, 4-item benefit list (Kosteneinsparungen, Flexibilität, Nachhaltigkeit, Einfache Verwaltung), closing CTA paragraph |
| `ueber-uns.html` → `/ueber-uns.html` | Über uns \| teilAuto Mössingen | About us / company history | 5 paragraphs: founders Ralf & Ursula Stahl, founding in 2000 from Ökostadt Tübingen, 60+ members in 2025, use cases, nebenberuflich/ehrenamtlich operation model |
| `mitglied-werden.html` → `/mitglied-werden.html` | Mitglied werden \| teilAuto Mössingen | Membership signup | 2-column: contact form (Name, Email, Betreff, Nachricht) + phone instructions (07473-922202), what to bring (Personalausweis, Führerschein, Sicherungseinlage) |
| `datenschutz.html` → `/datenschutz.html` | Datenschutz \| teilAuto Mössingen | Privacy policy | **EMPTY** — extends base.html but body block has no content |
| `impressum.html` → `/impressum.html` | Impressum \| teilAuto Mössingen | Legal notice / imprint | **EMPTY** — extends base.html but body block has no content |

---

## Assets

| File | Location | Used On | Type | Notes |
|------|----------|---------|------|-------|
| `talogo.svg` | `public/img/` | index.html (hero + nav), all pages (nav logo) | SVG logo | 18 KB; teilAuto logo; displayed inverted (white) in hero |
| `bergrutsch.jpg` | `public/img/` | index.html | JPEG photo | 361 KB; parallax background image on homepage |
| `phone.png` | `public/img/` | index.html | PNG illustration | 134 KB; "Buchen" how-to step icon |
| `car.png` | `public/img/` | index.html | PNG illustration | 125 KB; "Fahren" how-to step icon |
| `coins.png` | `public/img/` | index.html | PNG illustration | 276 KB; "Sparen" how-to step icon |
| `mokka.png` | `public/img/` | fahrzeuge.html | PNG photo | 240 KB; Opel Mokka vehicle image |
| `adam.png` | `public/img/` | fahrzeuge.html | PNG photo | 230 KB; Opel Adam vehicle image |

**External assets (CDN):**

| Resource | Used On | Type | Notes |
|----------|---------|------|-------|
| Google Fonts: Montserrat | All pages (base.html) | Font | Primary body font, weights 100–900 |
| Google Fonts: Chilanka | All pages (base.html) | Font | Loaded but **not visibly used** in CSS |
| Material Symbols Outlined | All pages (base.html) | Icon font | `keyboard_arrow_down` + `menu` icons only |
| MapLibre GL JS + CSS | fahrzeuge.html (via map-parking.html) | JS/CSS lib | OpenFreeMap tiles, loaded via unpkg CDN |

---

## Text Content

### Homepage (index.html)

| Location | Excerpt | Context |
|----------|---------|---------|
| Hero tagline | „Die sparsame Art (k)ein Auto zu haben" | Brand slogan under logo |
| Benefits: Preiswert | „Studien bestätigen es: Für einen Großteil der deutschen Haushalte ist Carsharing günstiger als ein eigenes Auto. Wie viel das sein kann erfahren Sie in unserem interaktiven Rechner." | CTA → preise.html |
| Benefits: Nachhaltig | „Jeder redet von Umweltschutz - wir engagieren uns seit über 20 Jahren dafür! Erfahren Sie jetzt wie auch Sie mit Carsharing einen kleinen Beitrag zur Rettung des Planeten leisten können." | CTA → nachhaltig.html |
| Benefits: Regional | „Ob Sie nur zum Einkaufen wollen oder einen Umzug planen - mit teilAuto sind Sie flexibel und unabhängig. Welche Fahrzeuge Ihnen als Mitglied zur Verfügung stehen lesen Sie hier." | CTA → fahrzeuge.html |
| So geht's intro | „Beim Carsharing nutzen mehrere Personen gemeinsam ein oder mehrere Fahrzeuge, wobei eine Carsharing‑Organisation die Verwaltung, Vermietung und Abrechnung übernimmt." | Section intro |
| Buchen step | „Sie telefonieren mit der Buchungszentrale und lassen sich das teilAuto reservieren. Auch die Möglichkeit der Quernutzung bei anderen Carsharing-Organisationen ist gegegeben, wodurch Sie Zugriff auf viele weitere Fahrzeuge haben." | Note: typo "gegegeben" |
| Fahren step | „Das teilAuto wird am Stellplatz abgeholt. Sie tragen die Abfahrtszeit und den Kilometerstand ins Fahrtenbuch ein. Danach stellen Sie das teilAuto wieder am Stellplatz ab und tragen die km und das Fahrzeitende wieder ins Fahrtenbuch ein" | Manual logbook process |
| Sparen step | „Nach jedem Monat erhalten Sie eine Rechnung, die etwa 10 Tage nach Erhalt von Ihrem Konto abgebucht wird. Die Summe liegt für Nutzer, die etwa 14.000 km im Jahr fahren, in der Regel deutlich unter dem, was sie für ein eigenes Auto bezahlen würden." | Monthly billing |
| Privatpersonen | „Nur Mitglieder dürfen unsere teilAutos fahren. Bei der Anmeldung werden Personalien und Führerschein überprüft. Ab dann genügt ein Anruf, bei dem das gewünschte Auto für den benötigten Zeitraum reserviert wird" | CTA → mitglied-werden.html |
| Geschäftskunden | „Auch Sie können von teilAutos profitieren. Das spart Ihnen Kosten und Verwaltungsaufwand, oder kann zeitweilige Engpässe überbrücken" | CTA → geschaeftskunden.html |

### FAQ Accordion (templates/accordion.html, included on index.html)

| Location | Excerpt | Context |
|----------|---------|---------|
| Q1 | „Wie funktioniert Carsharing?" → „Beim Carsharing nutzen mehrere Personen gemeinsam ein oder mehrere Fahrzeuge… Bezahlt wird dabei nur der Verbrauch und der nutzungsbasierte Anteil an den Fixkosten des Autos. Kurz: Perfekt für alle die ihr Auto nicht täglich brauchen." | |
| Q2 | „Kann ich auch nur einmalig ein Auto mieten?" → „Kurz gesagt - nein. Um ein Auto bei uns zu mieten müssen Sie Mitglied werden - nur so können wir den Verwaltungsaufwand bei der Buchung gering halten und die Verteilung der Nebenkosten fair gestalten." | |
| Q3 | „Wie wird man Mitglied?" → „Rufen Sie uns an und vereinbaren Sie einen Termin. Alles weitere erklären wir Ihnen telefonisch. Tel: 07473/92202" | Phone number |
| Q4 | „Was kostet Carsharing?" → „Einmalige Sicherungseinlage: 490€ (wird wieder ausbezahlt), Eintritts-/Jahresgebühr: 35€, Stundenpreis: 0,34€ - 2,00€ / Stunde, Kilometerpreis: 0,26 - 0,30€ / KM" | Links to Preise page |
| Q5 | „Wie viele Fahrzeuge hat Teilauto Mössingen?" → „Momentan stellen wir in Mössingen 2 Fahrzeuge (Klassen XS und M) bereit… Zusätzlich sind wir Mitglied im Bundesverband Carsharing: Dadurch können Sie deutschlandweit Autos bei einem unserer über 200 Partner quernutzen - ohne Aufpreis!" | Links to carsharing.de |

### Preise (preise.html)

| Location | Excerpt | Context |
|----------|---------|---------|
| Sicherungseinlage table | Erstnutzer 490,- / Zweitnutzer 200,- / Firmen 740,- | One-time deposit |
| Grundgebühr table | Erstnutzer 34,- / Zweitnutzer 0,- / Firmen 34,- (jährlich) | Annual fee |
| Fahrzeugklassen | B-Kleinwagen → XS (Opel Adam), C-Kleinwagen → M (Opel Mokka) | |
| Zeitpreise XS | Tag 2,05 / Folge ab 9.h 1,00 / Nacht 0,65 / Normal 0,32 | Hourly rates |
| Zeitpreise M | Tag 2,46 / Folge ab 9.h 1,25 / Nacht 0,75 / Normal 0,36 | Hourly rates |

### Nachhaltig (nachhaltig.html)

| Location | Excerpt | Context |
|----------|---------|---------|
| Heading | „Jeder redet von Umweltschutz - wir tun es seit über 20 Jahren" | |
| Intro | „Mit Carsharing haben wir bei Teilauto Mössingen schon früh auf ein zukunftsweisendes Moblitätskonzept gesetzt…" | Note: typo "Moblitätskonzept" |
| Ressourcenschonung | „Wir bieten eine kostengünstige und einfache Lösung für Menschen die nur selten einen (Zweit)-wagen benötigen. Damit verhindern wir unnötige Anschaffungen von Autos und die damit verbundene Energie-, CO2- und Ressourcenverschwendung in der Produktion." | |
| Moderne Technik | „Unsere Teilautos sind technisch auf dem neuesten Stand und werden regelmäßig gewartet - so garantieren wir nicht nur höchste Sicherheitsstandards, sondern auch einen minimalen CO₂-Ausstoß." | |
| Mobilitätskultur | „Carsharing fördert eine Mobilitätskultur, die Verantwortung und Freiheit verbindet. Viele unserer Kunden berichten, dass die Hemmschwelle das Fahrrad oder den Bus zu nehmen gesunken ist, seit sie nicht mehr das Gefühl haben dass sich ihr Auto ‚rentieren' muss." | |

### Fahrzeuge (fahrzeuge.html)

| Location | Excerpt | Context |
|----------|---------|---------|
| Opel Mokka card | „Tarif M, Farbe Schwarz" — Antrieb: Elektromotor, Getriebe: Automatik, Max. Leistung: 100 kW, WLTP 325 km. Assistenz: Park & Go, Toter-Winkel-Warner, Spurhalte, Geschwindigkeit, Rückfahrkamera, LED | Vehicle details |
| Opel Adam card | „Tarif XS, Farbe blau" — Navi 4.0, Automatischer Parkassistent | Vehicle details |
| Cross-use note | „Nicht genug? Da wir Mitglied im DACHverband Carsharing sind ist es für sie jederzeit Möglich auf die Fahrzeuge unserer vielen Partner zurückzugreifen um z.B. einen Sprinter für Ihren nächsten Umzug zu mieten - ohne zusätzlichen Gebühren." | Note: typo "Möglich" lowercase needed |
| Parking markers | Opel Mokka [48.4021, 9.0473], Opel Adam [48.4040, 9.0594], Geplant: Don Bosco [48.4030, 9.0311], Geplant: Kino [48.4103, 9.0631] | MapLibre map |

### Geschäftskunden (geschaeftskunden.html)

| Location | Excerpt | Context |
|----------|---------|---------|
| Heading | „Effiziente Mobilitäts-lösungen für Ihr Unternehmen" | Note: hyphenated "Mobilitäts-lösungen" |
| Intro | „Mit Teilauto Mössingen bieten wir Firmenkunden ein innovatives Mobilitätskonzept, das nicht nur Kosten senkt, sondern auch Ihre betriebliche Flexibilität steigert. Statt in teure Poolwagen zu investieren, profitieren Sie von unserem Fahrzeugsharing-Modell - einfach, effizient und wirtschaftlich." | |
| Benefits list | Kosteneinsparungen, Flexibilität, Nachhaltigkeit, Einfache Verwaltung — each with descriptive paragraph | |
| Closing | „Entscheiden Sie sich für Teilauto Mössingen und erleben Sie, wie Sie durch intelligente Mobilitätskonzepte nicht nur Geld sparen, sondern auch einen wichtigen Beitrag zur nachhaltigen Unternehmensentwicklung leisten." | |

### Über uns (ueber-uns.html)

| Location | Excerpt | Context |
|----------|---------|---------|
| Para 1 | „teilAuto Mössingen, das sind wir: Firmeninhaber Ralf Stahl und Ursula Stahl (Buchungszentrale / ‚Office-Managerin')." | Team |
| Para 2 | „Das Unternehmen entstand auf private Initiative im Jahr 2000. Wir waren zuvor Mitglied beim Projekt teilAuto des damaligen Vereins Ökostadt Tübingen." | Origin story |
| Para 3 | „Im Jahr 2025 sind über 60 Fahrtberechtigte angemeldet. Darunter befinden sich sowohl Privatpersonen als auch Firmen und Behörden." | Current scale |
| Para 4 | „Für die einen ist es die Ausweichmöglichkeit zu Fahrrad und ÖPNV, für die anderen das hin und wieder benötigte Zweitauto, wieder andere möchten nur ein ‚backup', falls das eigene Fahrzeug einmal ausfällt." | Use cases |
| Para 5 | „Da wir das Unternehmen nebenberuflich und im Grunde ehrenamtlich führen, ist die Verwaltung sehr schlicht gehalten: das Buchen der Fahrzeuge erfolgt bis heute telefonisch…" | Operations model |

### Mitglied werden (mitglied-werden.html)

| Location | Excerpt | Context |
|----------|---------|---------|
| Heading | „Werden Sie jetzt Mitglied bei uns!" | |
| Phone section | „Termin vereinbaren unter der Telefonnummer 07473-922202 können Sie einen Termin mit uns vereinbaren, auch abends und samstags" | Phone number |
| What to bring | „Personalausweis/Reisepass, Führerschein und Sicherungseinlage mitbringen; wir nehmen dann Ihrer Personalien auf, erklären Ihnen die Einzelheiten über Ausleihe, Fahrzeuge etc., und im Gegenzug erhalten Sie den Tresorschlüssel, mit dem Sie Zugang zu den Fahrzeugen haben." | Note: typo "Ihrer" should be "Ihre" |

---

## Navigation Structure

### Primary Navigation (sticky top bar, all pages via `base.html`)

```
[teilAuto Logo → ./]  [spacer]  Preise  Nachhaltigkeit  Fahrzeuge  Für Firmen  Über uns
```

- Logo links to `./` (homepage)
- 5 main nav items, each highlights with `.nav-current` class when active
- Mobile: hamburger menu (Material Symbols `menu` icon), slides down full-width overlay
- Desktop (≥800px): horizontal sticky bar with accent background

### Footer (all pages via `base.html`)

```
Impressum  |  Datenschutzerklärung
```

- Links to `impressum.html` and `datenschutz.html`
- Horizontal layout on landscape, stacked on portrait

### Cross-Page Links (within content)

| From | Link Text | To |
|------|-----------|----|
| index.html (Preiswert) | „Zum Rechner" | preise.html |
| index.html (Nachhaltig) | „Weiterlesen" | nachhaltig.html |
| index.html (Regional) | „Zu den Fahrzeugen" | fahrzeuge.html |
| index.html (Privatpersonen) | „Mitglied werden" | mitglied-werden.html |
| index.html (Geschäftskunden) | „Mehr erfahren" | geschaeftskunden.html |
| accordion.html (FAQ Q4) | „Preise" | Preise.html (note: capitalized P — potential 404 on case-sensitive servers) |
| accordion.html (FAQ Q5) | „Bundesverband Carsharing" | https://www.carsharing.de (external) |

### Orphan Pages (not linked from nav or content)

- None — all pages reachable, though `datenschutz.html` and `impressum.html` are only linked from footer.

---

## Reusable Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `base.html` | `templates/` | Master layout: HTML shell, meta tags, Google Fonts, Material Symbols, nav macro system, footer with Impressum/Datenschutz links. Defines blocks: `head`, `nav`, `body`. Contains macros: `create_nav()`, `create_nav_link()`, `create_title()`. |
| `accordion.html` | `templates/` | FAQ accordion with 5 Q&A items + inline `<script>` for expand/collapse toggle. Included on index.html via `{% include %}`. |
| `map-parking.html` | `templates/` | MapLibre GL interactive parking map. 4 markers (2 active vehicles, 2 planned spots) centered on Mössingen. Included on fahrzeuge.html via `{% include %}`. |

### CSS Architecture

| File | Scope | Notes |
|------|-------|-------|
| `base.css` | Global | CSS custom properties (`--accent`, `--accent-hover`), body/main layout, nav (mobile hamburger + desktop sticky), footer, `.simple-list-layout` utility |
| `index.css` | Homepage only | Imports `accordion.css`. Parallax bg, hero, benefits grid, howto steps, users section, `.button` class |
| `accordion.css` | FAQ component | Accordion expand/collapse styles |
| `fahrzeuge.css` | Vehicles page | Map container height, vehicle card image sizing |
| `preise.css` | Pricing page | Table styling, responsive column layout |
| `mitglied-werden.css` | Signup page | Contact form grid layout |
| `nachhaltig.css` | Sustainability page | Article spacing, green h1 color (`#557755`) |

### Build System

| File | Purpose |
|------|---------|
| `scripts/build-site.ps1` | PowerShell build script: clean, build (tera templating), watch mode. Compiles `src/*.html` through tera with `templates/` include path, copies `public/` to `build/dist/`. |
| `package.json` | npm wrapper: `clean`, `build`, `watch`, `dev` scripts all delegate to PowerShell build script. No JS runtime dependencies. |

---

## Notable Issues Found

| Issue | Location | Detail |
|-------|----------|--------|
| Empty pages | `datenschutz.html`, `impressum.html` | Body blocks contain no content — pages render with only nav + footer |
| Typo | `index.html` line ~50 | "gegegeben" → "gegeben" |
| Typo | `nachhaltig.html` line ~14 | "Moblitätskonzept" → "Mobilitätskonzept" |
| Typo | `mitglied-werden.html` line ~38 | "Ihrer Personalien" → "Ihre Personalien" |
| Case mismatch | `accordion.html` FAQ Q4 | Links to `Preise.html` (capital P) instead of `preise.html` |
| Unused font | `base.html` | Google Font "Chilanka" loaded but never referenced in any CSS |
| Heading hyphenation | `geschaeftskunden.html` | "Mobilitäts-lösungen" — intentional soft-hyphen or accidental? |
| No km prices in table | `preise.html` | Table shows only time-based prices; km prices mentioned in FAQ (0,26–0,30€/km) but not in the pricing table |
| Form non-functional | `mitglied-werden.html` | Form `onsubmit` only shows `alert()` — no actual email sending |
| Benefits note | index.html | References "interaktiven Rechner" (interactive calculator) but preise.html has only static tables |
