# Extracted Planning Context: notes

**Scanned:** 2026-02-07
**Source:** notes/
**Precedence:** Authoritative (mixed maturity)
**Documents read:**

| File | Description | Maturity |
|------|-------------|----------|
| AuswertungHandbuch.md | Comprehensive analysis of the 02/2022 usage handbook; extracts operational rules, pricing structure, Do/Don't for web copy | Final reference doc |
| Erstgespraech.txt | First stakeholder conversation notes — target audience, goals, image, feature scope | Early draft / raw notes |
| Gespräch_Eltern_Anforderungen.md | Follow-up conversation with parents (operators) — goals, tonality, startpage, tariff maintenance | Structured meeting notes, newer |
| looseNotes.txt | Loose notes on advantages, goals, audience — overlaps heavily with Erstgespraech.txt | Early draft / duplicate content |
| Personas.txt | Six user personas with motivations and tone ideas | Early draft |
| Spezifikation_V1_Entwurf.md | First website V1 specification — IA, page-by-page content requirements, open questions | Draft v1 |
| Spezifikation_V1_Entwurf_probleme.md | Problem/tension analysis of same spec — flags design trade-offs and open decisions | Draft v1 companion |
| Spezifikation_V1_Entwurf_überarbeitet.md | **Revised** V1 specification — most current, refined content decisions, analytics plan | **Most current spec** |
| TechStack.md | Technical architecture: CouchCMS + PHP on STRATO, Tailwind, Alpine.js, Leaflet, static export | Final tech decision |
| WerbeIdeenHandbuch.md | Marketing copy ideas, claims, text blocks, microcopy, image direction based on handbook | Reference / working material |
| Texte/Über uns.docx | "About us" draft text for the website — company history, founders, current state | Final draft text |

**Document Progression Note:** The three Spezifikation files form a clear progression:
1. `Spezifikation_V1_Entwurf.md` — initial draft with content requirements
2. `Spezifikation_V1_Entwurf_probleme.md` — companion analysis of tensions/trade-offs
3. `Spezifikation_V1_Entwurf_überarbeitet.md` — **revised version, most authoritative** for content decisions

---

## Goals & Vision

> „Passende Neumitglieder gewinnen (Privatpersonen, Haushalte mit Zweitwagen sowie Firmen/Behörden), ohne die begrenzte Telefonkapazität zu überlasten." — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Standardfragen zu Funktionsweise, Tarifen und Standorten so beantworten, dass weniger Rückfragen per Telefon/E-Mail entstehen." — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „teilAuto Mössingen als lokale, verlässliche, bodenständige Carsharing-Alternative zum eigenen (Zweit-)Auto positionieren." — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Transparente, aber abstrahierte Darstellung von Kosten, Abläufen und Regeln auf Basis des Nutzungshandbuchs (Stand 02/2022) -> Nicht zu detailliert, Nutzer erhalten das Handbuch sowie eine Einführung später persönlich." — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Abmahnsichere Website (Impressum, DSGVO, konsistentes Tracking-Konzept)." — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Vergrößerung der Kundenbasis und damit Auto-/Stellplatz Auswahl" — *Erstgespraech.txt*

> „c.a. 20 Kunden mehr wär cool" — *Erstgespraech.txt*

> „Fokus auf Vermeidung von ‚False-Positives': (sprich wenig Support Kapazität)" — *Erstgespraech.txt*

> „Nachschlagewerk für Preise/Fahrzeuge/Standorte -> Karte?" — *Erstgespraech.txt*

> „Wunsch: Aufgeräumtere Startseite mit klarer Kernbotschaft und weniger Text auf den ersten Blick." — *Gespräch_Eltern_Anforderungen.md*

> „Moderner, vertrauenswürdiger Auftritt als lokale, nachhaltige Alternative zum eigenen Auto" — *Gespräch_Eltern_Anforderungen.md*

> „Bei weiterem Wachstum wird der Fuhrpark entsprechend vergrößert." — *Texte/Über uns.docx*

---

## Hard Constraints

### Technical

> „**Single Source of Truth**: ein Git-Repo mit CouchCMS-Templates (PHP). **Prod** auf STRATO: PHP + CouchCMS (dynamisch). **Preview/Backup** (z. B. GitHub Pages): automatisiert generierte statische Kopie der von Couch gerenderten Seiten." — *TechStack.md*

> „Backend/Hosting: PHP 8.x (STRATO Webhosting), CouchCMS + MySQL/MariaDB. Frontend: TailwindCSS (lokaler Build → main.css), Alpine.js (UI-Interaktionen), Leaflet + OpenStreetMap (Karte)" — *TechStack.md*

> „Reine Präsentationsseite reicht" — *Erstgespraech.txt*

### Operational/Business

> „Da wir das Unternehmen nebenberuflich und im Grunde ehrenamtlich führen, ist die Verwaltung sehr schlicht gehalten: das Buchen der Fahrzeuge erfolgt bis heute telefonisch" — *Texte/Über uns.docx*

> „Beim jetzigen Umfang des Betriebs ist das gut zu bewältigen, und auch Zuwachs ist ohne Probleme möglich. Sollte sich das ändern, kommt auch bei uns ein online-Buchungssystem und die Nutzung von Bordcomputern ins Spiel." — *Texte/Über uns.docx*

> „Keine App oder Online-Buchungsplattform versprechen." / „Kein 24/7-Support über moderne Kanäle (Chat, App-Push etc.) behaupten." / „Keine free-floating-Nutzung oder spontane Rückgabe irgendwo im Stadtgebiet suggerieren." / „Keine ‚komplett papierlose' Organisation darstellen" — *AuswertungHandbuch.md*

> „(- iwann in Zukunft: Formulare/AGBs auf Website. Muss erst anwaltlich gecheckt werden)" — *Erstgespraech.txt*

> „Kein Online-Abschluss, kein ‚Jetzt anmelden'-Formular – nächster Schritt ist immer Kontaktaufnahme." — *Spezifikation_V1_Entwurf_überarbeitet.md*

### Content/Pricing

> „Keine exakten aktuellen Preise kommunizieren, ohne Stand und Aktualität geprüft zu haben (Handbuchstand 02/2022)." — *AuswertungHandbuch.md*

> „Deutlicher Hinweis: ‚Genaue, aktuelle Preise erhalten Sie im persönlichen Gespräch und in den Unterlagen.'" — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Eher textlich erklären (‚im höheren dreistelligen Bereich', ‚geringe jährliche Grundgebühr', ‚faire km-Preise'), genaue Eurobeträge nur, wenn explizit freigegeben." — *Spezifikation_V1_Entwurf_überarbeitet.md*

### Maintenance

> „Pflegewunsch: Idealerweise kann der Vater jährlich die Tarife.xml selbst austauschen, um Preise zu aktualisieren." — *Gespräch_Eltern_Anforderungen.md*

> „Eltern als spätere Pflegende für wenige, klar abgegrenzte Textblöcke (z.B. Stellplatz-Beschreibungen)." — *Spezifikation_V1_Entwurf_überarbeitet.md*

---

## Design Preferences

### Tone & Voice

> „Sachlich, freundlich, vertrauensbildend, ‚Sie'-Ansprache." — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Keine moralisierende ‚kein Auto'-Rhetorik, keine Armutssignale (‚für Leute, die sich kein Auto leisten')." — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Lokal verankertes, familiengeführtes Carsharing in Mössingen/Steinlachtal. Persönliche, telefonische Betreuung statt anonymer Plattform. Nachhaltig und vernünftig – ohne erhobenen Zeigefinger." — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Carsharing hat Nachhaltigkeits- und Vernunftkomponente. Bisherige Versuche wie ‚kein Auto haben' können auf dem Land Abwehr auslösen. Herausforderung: Formulierungen finden, die Vorteile klar benennen, ohne zu moralisieren oder zu stigmatisieren." — *Spezifikation_V1_Entwurf_probleme.md*

### Visual / Branding

> „Fokus auf Nachhaltigkeit." — *Erstgespraech.txt*

> „National vernetzt" — *Erstgespraech.txt*

> „Bilder: Lokale Fotografie (erkennbare Landmarks)" — *Erstgespraech.txt*

> „Farbwahl: Wie TA Neckaralb wär OK, muss aber net" — *Erstgespraech.txt*

> „Mobile First: Navigation reduziert, klare Titel, Inhalte gut scroll- und lesbar auf kleinen Bildschirmen." — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Menschen aus Mössingen an bekannten Orten (Bahnhof, Wochenmarkt, Wohngebiete) beim Ein- und Aussteigen an den Stellplätzen." / „Detailfotos von Tresor, Schlüssel, Fahrtenbuch – um das Prinzip ‚einfach, aber verlässlich' zu illustrieren." — *WerbeIdeenHandbuch.md*

### Startpage Layout

> „Hero-Bereich: Logo, Navigation (mobil als Burger). Claim mit dynamischem, neutralem Text, z.B. Basis: ‚Carsharing in Mössingen – [flexibel | vernünftig | praktisch | regional | gemeinsam genutzt].'" — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Persona-Kacheln [...] Positionierung nicht direkt im Hero, sondern als eigener Abschnitt nach einem kurzen Ablauf-Block" — *Spezifikation_V1_Entwurf_überarbeitet.md*

> „Claim-Idee: ‚Die sparsame Art (k)ein Auto zu haben' o.ä." — *Gespräch_Eltern_Anforderungen.md*

> „Kreative Ergänzungsidee: Claim-Wort (z.B. ‚smart') dynamisch austauschen (JavaScript-Typing-Effekt) durch Varianten wie ‚sparsam', ‚umweltschonend' etc." — *Gespräch_Eltern_Anforderungen.md*

> „Dezenter Textlink im Verlauf (‚Interesse? So werden Sie Mitglied') statt großer Button, um false positives niedrig zu halten." — *Spezifikation_V1_Entwurf_überarbeitet.md*

---

## Content Decisions

### Information Architecture (9 pages, from überarbeitet spec)

1. **Startseite** — Hero with dynamic claim, "Was ist teilAuto" intro, Persona-Kacheln (self-segmentation), teaser blocks, longscroller approach
2. **So funktioniert's** — 5-step process (Mitglied werden → Buchen → Abholen → Fahren/Tanken → Rückgabe/Abrechnung)
3. **Tarife & Mitgliedschaft** — Cost principle (abstract, no exact prices in V1), membership steps, no online signup
4. **Standorte & Fahrzeuge** — Station list with addresses, vehicle classes, E-Auto mention
5. **Vorteile & Nachhaltigkeit** — Cost/comfort/environment arguments, Zweitwagen focus
6. **Für Firmen & Behörden** — Separate business page with use cases, conditions
7. **FAQ** — 8–15 questions clustered by topic
8. **Über uns** — Company history, family introduction, local character
9. **Rechtliches** — Impressum, Datenschutzerklärung

### Content that exists (ready or near-ready)

- "Über uns" text drafted in `Texte/Über uns.docx` — company founding story, current state (60+ members, 2 vehicles, side business)
- Claim variants and marketing copy in `WerbeIdeenHandbuch.md`
- Text blocks for Startseite, "So funktioniert's", Preise, Sicherheit sections in `WerbeIdeenHandbuch.md`
- Microcopy/UI texts in `WerbeIdeenHandbuch.md`
- Operational details comprehensively extracted in `AuswertungHandbuch.md`

### Content: V1 vs. V2 decisions

- **V1 (now):** Abstract tariff presentation, no calculator, no full price tables, no online forms
- **V2/later:** Detailed price tables from `Tarife.xml`, cost calculator/Rechner, example calculations, downloadable contracts/AGB (pending legal review), possible map integration

### Pricing data (from handbook 02/2022, must be verified before publishing)

- Sicherungseinlage: Erstnutzer 490€, Zweitnutzer 200€, Juristische Person 740€
- Grundgebühr: Erstnutzer 35€/Jahr, Zweitnutzer 0€/Jahr, Juristische Person 40€/Jahr
- Buchungsgebühr pro Fahrt: 0,77€
- km-Preis: 0,30–0,44€/km depending on tariff class
- Time tariffs: Tagesstunden, Folgestunden, Nachtstunden by class XXS–XL

---

## Feature Requests

| Feature | Source | Quote | Priority (if stated) |
|---------|--------|-------|---------------------|
| Presentation website (no app) | Erstgespraech.txt | „Reine Präsentationsseite reicht" | V1 MUSS |
| JavaScript cost calculator | Erstgespraech.txt | „JavaScript Rechner" | V1 nice-to-have / V2 |
| Map integration for stations | Erstgespraech.txt | „Nachschlagewerk für Preise/Fahrzeuge/Standorte -> Karte?" | KANN (V1) |
| Dynamic claim typing effect | Gespräch_Eltern_Anforderungen.md | „Claim-Wort (z.B. ‚smart') dynamisch austauschen (JavaScript-Typing-Effekt)" | KANN (V1/V1.5) |
| Persona self-segmentation tiles | Spezifikation_V1_Entwurf_überarbeitet.md | „Persona-Kacheln (Self-Segmentation, mobil stapelbar)" | MUSS (V1) |
| Top-FAQ accordion on startpage | Spezifikation_V1_Entwurf_überarbeitet.md | „2–3 Top-FAQ im Akkordeon direkt auf der Startseite" | KANN (V1/V1.5) |
| Tarife.xml self-service update | Gespräch_Eltern_Anforderungen.md | „Idealerweise kann der Vater jährlich die Tarife.xml selbst austauschen" | Infrastructure |
| Analytics tracking (persona clicks, scroll depth, FAQ opens, contact clicks) | Spezifikation_V1_Entwurf_überarbeitet.md | Section 14 – full list of messpunkte | MUSS (V1 concept) |
| Static export for GitHub Pages | TechStack.md | „Preview/Backup (z. B. GitHub Pages): automatisiert generierte statische Kopie" | Infrastructure |
| CouchCMS editable regions | TechStack.md | Stack decision implies CMS-managed content | Infrastructure |
| Study comparison with own numbers | Erstgespraech.txt | „Studie nachrechnen mit eigenen Zahlen (für faulen Nutzer der den Rechner nicht bedienen möchte)" | Nice-to-have |
| Forms/AGB on website | Erstgespraech.txt | „iwann in Zukunft: Formulare/AGBs auf Website. Muss erst anwaltlich gecheckt werden" | Future (blocked on legal) |

---

## Open Questions

| Question | Why It's Unclear | Source Files |
|----------|-----------------|-------------|
| Are exact prices to be published on the site, or only abstract ranges? | Erstgespraech.txt lists "Nachschlagewerk für Preise" as a goal, but überarbeitet spec says abstract only with „genaue Preise im persönlichen Gespräch". These contradict. | Erstgespraech.txt, Spezifikation_V1_Entwurf_überarbeitet.md |
| Is the JavaScript Rechner (calculator) V1 or V2? | Erstgespraech.txt lists it as V1 scope; Gespräch_Eltern_Anforderungen.md defers it: „Verbrauchsrechner und Beispielrechnungen sind als Option für eine spätere Version (V2) angedacht, nicht zwingend Teil von V1." | Erstgespraech.txt, Gespräch_Eltern_Anforderungen.md |
| Is map integration V1 or V2? | Erstgespraech.txt mentions it with a question mark; überarbeitet spec lists it as KANN. TechStack.md includes Leaflet + OSM in the stack. No clear V1/V2 decision. | Erstgespraech.txt, TechStack.md, Spezifikation_V1_Entwurf_überarbeitet.md |
| Color scheme / branding specifics? | „Farbwahl: Wie TA Neckaralb wär OK, muss aber net" — no firm decision. No design mockups or brand guide found. | Erstgespraech.txt |
| How much of the old student project to keep? | „Bisherige Startseite (Schulprojekt) wird als zu voll empfunden" but the student project HTML/CSS exists in the repo. No clear decision on what to preserve vs. rebuild. | Gespräch_Eltern_Anforderungen.md |
| Current pricing data accuracy? | All prices from handbook 02/2022. Repeatedly flagged: „müssen vor neuer Veröffentlichung geprüft/aktualisiert werden". No confirmed 2025/2026 prices. | AuswertungHandbuch.md |
| Photography / image assets? | „Gibt es Bildmaterial (Fahrzeuge, Stellplätze, Personen), das verwendet werden darf/soll?" listed as open question to parents. | Spezifikation_V1_Entwurf.md |
| How personal can texts be? | „Wie persönlich dürfen die Texte sein (z.B. kurze Geschichten/Beispiele)?" — open question for parents. | Spezifikation_V1_Entwurf.md |
| Personas on site — explicit or implicit? | „Sollen die Personas [...] explizit aufgegriffen werden (z.B. ‚TeilAuto als Zweitwagen')?" — originally open, überarbeitet spec seems to resolve this with persona tiles but leaves detail open. | Spezifikation_V1_Entwurf.md, Spezifikation_V1_Entwurf_überarbeitet.md |
| Number of vehicles and stations current? | Über uns.docx says „zwei Fahrzeuge" and „über 60 Fahrtberechtigte" (as of 2025). Handbook references multiple stellplätze. Need to verify current fleet. | Texte/Über uns.docx, AuswertungHandbuch.md |
| Quernutzung details — still active? | Handbook describes Quernutzung in detail but status may have changed since 2022. | AuswertungHandbuch.md |
| looseNotes.txt vs Erstgespraech.txt overlap | These two documents contain nearly identical content. looseNotes.txt appears to be a rougher version of the same notes. Neither should be treated as independent source. | looseNotes.txt, Erstgespraech.txt |

---

## Stakeholder Context

### Organization

- **teilAuto Mössingen** — station-based carsharing in Mössingen and Steinlachtal region
- Legal form: eingetragener Kaufmann (e.K.)
- Founded 2000, originally one vehicle
- Currently: 60+ authorized users, 2 vehicles (as of 2025 per Über uns.docx)
- Run part-time / essentially volunteer by married couple

### Key People

| Role | Person | Context |
|------|--------|---------|
| Geschäftsführer / Owner | Ralf Stahl | Named in handbook; operational decisions |
| Executive Assistant / Office Manager | Ursula Stahl | Booking center, administration; self-described as „Buchungszentrale und Mädchen für alles" |
| Developer (son) | Unnamed in notes | Building the website; authored specs and notes; refers to owners as „Eltern" / „Vater" |

### Decision Authority

- **Parents (Ralf & Ursula Stahl):** Final say on content accuracy, pricing, tone, what to publish. Must approve text before publication.
- **Developer (son):** Technical decisions, design proposals, specification drafting. Has latitude on architecture and UX recommendations.
- **Legal (external, unnamed):** Must review before any AGB/contracts go online. Blocking dependency for forms/downloads.

### Target Audiences (consolidated from all sources)

1. **Primary — Privatpersonen:**
   - Households wanting to replace/avoid a second car (Simone, Brigitte personas)
   - People without a car who occasionally need one (Johannes persona)
   - Visitors to the area who need occasional transport
2. **Secondary — Firmen & Behörden:**
   - Small businesses, social institutions, local government wanting pool car replacement (Mirjam persona)
3. **Tertiary — Quernutzer:**
   - Already carsharing members elsewhere, find teilAuto via partner networks (Günther persona)
   - Need minimal info: locations, that Quernutzung works
4. **Explicitly deprioritized:**
   - Students (only as Zweitnutzer under parents)
   - One-time renters (explicitly not wanted)

### Persona Details (from Personas.txt)

| Persona | Age | Motivation | Key Need |
|---------|-----|-----------|----------|
| Simone | 27 | New mother, husband uses car for work commute, needs daytime second car | Zweitwagen replacement |
| Johannes | 29 | Environmentally conscious, commutes by train, occasionally needs car | Flexibility without ownership |
| Günther | 52 | Already carsharing member elsewhere, visiting region | Quernutzung info, station locations |
| Brigitte | 49 | Well-off household, Swabian frugality, environmental conscience | Cost-conscious prestige, not "poverty signal" |
| Mirjam | 28 | Employee researching pool car replacement for company | Business case: cost + sustainability |
| Michael | 23 | Motorcycle owner, sometimes needs car for cargo/passengers | Supplementary vehicle |
