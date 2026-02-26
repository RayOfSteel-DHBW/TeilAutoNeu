# Extracted Planning Context: references

**Scanned:** 2026-02-07
**Source:** references/old/markdown/ + references/old/dokumente_alt/
**Precedence:** Baseline (factual reference for what currently exists)
**Documents read:**
- **AW_Teilauto_Website.md** — Email exchange between Rainer & Ralf Stahl about tariff calculator, with link to teilAuto Neckar-Alb calculator as reference
- **Calculator_Notes.md** — Detailed breakdown of VBA/Access fare calculator logic (time-based, km-based, night rates, tiered km pricing)
- **ChatGPTPlan.md** — ChatGPT-generated website structure plan with nav, design tips, marketing elements
- **Checkliste nach Verkehrsunfall.md** — Accident checklist for members (existing printed document)
- **Das E-Auto im Carsharing-Betrieb.md** — E-vehicle (Opel Mokka E) usage instructions for members
- **Datenschutz-Merkblatt.md** — DSGVO-compliant privacy data sheet (existing company document)
- **Ergänzung Handbuch Stellplatz.md** — Parking supplement: Belsen location + current vehicle assignments
- **InputStartseite.md** — Homepage content draft: carsharing explanation, membership, pricing, vehicles, advantages, business customers, cross-use, contact
- **Nutzungshandbuch_2022_A5.md** — Full 2022 printed usage handbook (booking, driving, fueling, accidents, billing, fees, parking instructions)
- **Website teilAuto neu zweite Version - Inhalt.md** — Second version of website content plan (largely overlaps with InputStartseite.md)
- **Zusatz zum Nutzungsvetrag für juristische Personen.md** — Contract supplement for business/legal entity customers
- **Tarife.xml** — Excel XML export of all tariff data from the Access billing system (52 rows, tariff classes XXS–XXL with time/km/night rates, penalty fees, discounted km tiers)
- **oustanding/AW_ Teilauto Website .eml** — Raw email source (base64) of AW_Teilauto_Website.md
- **oustanding/Calculator Notes.txt** — Raw VBA source code of the Access fare calculator
- **oustanding/ChatGPTPlan.txt** — Raw text version of the ChatGPT website plan

---

## Goals & Vision

> „Ziel der Website ist eine freundliche, übersichtliche und funktionale Präsentation von teilAuto Mössingen. Besucher*innen sollen schnell verstehen: Wie das Angebot funktioniert, welche Kosten entstehen, wie sie Mitglied werden können." — *ChatGPTPlan.md*

> „Durch klare Struktur, verständliche Texte, FAQ und visuelle Hilfen lassen sich viele Standardfragen vorwegnehmen – und damit Anrufe und Rückfragen deutlich reduzieren." — *ChatGPTPlan.md*

> „Um unnötige Anrufe zu vermeiden, sollten alle wichtigen Informationen (z. B. Mitgliedschaftsbedingungen, Ablauf der Buchung) leicht auffindbar sein und klar kommuniziert werden." — *ChatGPTPlan.txt*

> „Das Design bleibt dabei bewusst schlank und konzentriert sich auf das Wesentliche, mit gezielten Call-To-Actions, die Interessierte durch den Informations- und Anmeldeprozess führen." — *ChatGPTPlan.md*

> „Kurz zusammengefasst: In der Antwort wird vorgeschlagen, das Thema ‚Tarifrechner / Kostenberechnung' zunächst grob zu umreißen und später – wenn nötig – in einer zweiten Ausbaustufe die detaillierte, relativ komplexe Berechnungslogik schrittweise in die Website zu integrieren." — *AW_Teilauto_Website.md*

**Core goals inferred from all documents:**
1. Replace outdated website with modern, responsive, informative site
2. Reduce phone calls / manual inquiries by putting all key info online
3. Make membership signup process clear and attractive
4. Present pricing transparently (with eventual tariff calculator)
5. Serve both private members and business customers (Firmen/Behörden)

---

## Hard Constraints

### Business rules (from existing operations)

> „Im Gegensatz zu einer Autovermietung ist Carsharing **mitgliedschaftlich** organisiert." — *InputStartseite.md*

> „**Einmal-Nutzungen** von Nichtmitgliedern [...] sind deshalb **ausgeschlossen**. Aus demselben Grund beträgt die **Mindestdauer der Mitgliedschaft 3 Monate.** Danach ist eine monatliche Kündigung möglich." — *InputStartseite.md*

> „**Keine Mindestabnahme für Mitglieder:** Das bedeutet selbstverständlich nicht, dass die Mitglieder zwangsläufig häufig nutzen müssen" — *InputStartseite.md*

> „Pro Buchung wird eine Buchungsgebühr berechnet mit 0,75 Cent" — *AW_Teilauto_Website.md*

> „Je Fahrt werden bis maximal 8 Tagesstunden berechnet. Ab der 9. Stunde gelten dann die Folgestunden (auch, wenn die Fahrt länger als 24 Stunden dauert!). Zwischen 24 und 7 Uhr gelten jedoch sowieso immer die Nachtstunden." — *Nutzungshandbuch_2022_A5.md*

> „Mindestbuchungsdauer ist eine halbe Stunde. Als Fahrtbeginn bzw. -ende gelten nur volle oder halbe Stunden" — *Nutzungshandbuch_2022_A5.md*

> „Die Berechnung der Fahrtkosten sind etwas komplizierter" — *AW_Teilauto_Website.md*

### Pricing hard data (from InputStartseite.md + Nutzungshandbuch + Tarife.xml)

> „**Sicherungseinlage** (wird bei Beendigung der Mitgliedschaft wieder ausbezahlt) **490 €**" — *InputStartseite.md*

> „**Eintrittsgebühr/Jahresgebühr: 35,00 € für private Nutzer**" — *InputStartseite.md*

> „Buchungsgebühr: 0,75 € pro Buchung" — *InputStartseite.md*

Pricing table (from Nutzungshandbuch):
| Sicherungseinlage | Erstnutzer 490€, Zweitnutzer 200€, Juristische Person 740€ |
| Grundgebühr (jährlich) | Erstnutzer 35€, Zweitnutzer 0€, Juristische Person 40€ |
| Buchungsgebühr | 0,77€/Fahrt (handbook) vs 0,75€ (website draft — see Open Questions) |

Tariff rates (from InputStartseite.md, valid from 01.02.2023 incl. 19% USt):

| Klasse | Tag €/h | Folge €/h | Nacht €/h | km €/km |
|--------|---------|-----------|-----------|---------|
| XXS    | 1,80    | 0,85      | 0,55      | 0,31    |
| XS     | 2,05    | 1,00      | 0,65      | 0,32    |
| S      | 2,10    | 1,10      | 0,70      | 0,35    |
| M      | 2,46    | 1,25      | 0,75      | 0,36    |

Extended rates from Tarife.xml also include: L (2.70/1.30/0.85/0.39), XL (2.90/1.40/0.95/0.46), XXL (3.70/1.50/1.00/0.55)

### Legal/privacy constraints

> „Die Verarbeitung Ihrer personenbezogenen Daten erfolgt gemäß den Bestimmungen der europäischen Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG)" — *Datenschutz-Merkblatt.md*

> „Wir nutzen keine vollautomatisierte Entscheidungsfindung gemäß Art. 22 DSGVO." — *Datenschutz-Merkblatt.md*

> „Eine automatisierte Bewertung der von unseren Kunden erhobenen Daten findet nicht statt." — *Datenschutz-Merkblatt.md*

### Vehicles and locations (current state)

> „Stellplatz Dreifürstensteinstraße: Opel Mokka E (M)" — *Ergänzung Handbuch Stellplatz.md*

> „Stellplatz Johannes-Kepler-Str.: Opel Adam (XS)" — *Ergänzung Handbuch Stellplatz.md*

> „Stellplatz Belsen: zur Zeit nicht belegt" — *Ergänzung Handbuch Stellplatz.md*

### Business customer constraints

> „Die VertragspartnerIn ist verpflichtet, teilAuto Mössingen die Namen der Fahrtberechtigten schriftlich mitzuteilen." — *Zusatz zum Nutzungsvetrag für juristische Personen.md*

> „Die Berechtigten müssen ein Mindestalter von 22 Jahren haben." — *Zusatz zum Nutzungsvetrag für juristische Personen.md*

---

## Design Preferences

> „Tendenz bisher zu ner großen Startseite mit Hintergrundbild (entweder irgendwas stilvolles/minimalistisches Muster was man umsonst kriegt oder n Naturbild von der Gegend/Bild von der Olgahöhe runter, sowas in die Richtung). Prinzipiell wär sogar reinweiss wie bisher möglich nur dann müssen wir uns mehr anstrengen dass man nachher nen Unterschied zu vorher erkennt 🤣" — *AW_ Teilauto Website .eml (decoded base64)*

> „Über den Start kann man dann rausscrollemen woraufhin einzelne Content Boxen kommen die ‚Lust' auf den Content der einzelnen Unterseiten machen sollen und dorthin weiterleiten." — *AW_ Teilauto Website .eml (decoded base64)*

> „Kannst dir vllt mal visiticeland.com zum Vergleich anschauen, so in die Richtung mein ich. Oder vllt nike.com" — *AW_ Teilauto Website .eml (decoded base64)*

> „Die Seite muss auf Smartphones, Tablets und Desktop gut funktionieren. Bilder, Texte und Navigation passen sich unterschiedlichen Bildschirmgrößen an." — *ChatGPTPlan.md*

> „**Hero-Bereich**: Großes, ansprechendes Bild (Fahrzeug oder Menschen) plus kurzer Slogan" — *ChatGPTPlan.md*

> „**Schnelle Ladezeiten**: komprimierte Bilder, wenig Ballast im Layout." — *ChatGPTPlan.md*

> „**Responsives Webdesign** (z. B. auf Basis von Bootstrap oder einem leichten CSS-Framework)." — *ChatGPTPlan.md*

**Design reference sites mentioned:** visiticeland.com, nike.com — suggesting large hero imagery, scroll-based content reveal, modern/minimal aesthetic.

---

## Content Decisions

### Content that EXISTS (in printed/current form, to be adapted for web):
1. **Nutzungshandbuch (Usage Handbook)** — Full operational handbook covering booking, driving, fueling, late returns, defect reports, accidents, cross-use, billing, fees, vehicle inventory, parking locations. *Stand February 2022.*
2. **Datenschutz-Merkblatt (Privacy Sheet)** — Complete DSGVO-compliant privacy policy ready for web use.
3. **Checkliste nach Verkehrsunfall** — Accident checklist (member reference document).
4. **Das E-Auto im Carsharing-Betrieb** — E-vehicle instructions for the Opel Mokka E.
5. **Zusatz für juristische Personen** — Business contract supplement (4 clauses).
6. **Tarif data** — Complete tariff structure in XML export from Access billing system.
7. **Stellplatz descriptions** — Parking location descriptions with directions.

### Content DRAFTED for the new website (InputStartseite.md / Website v2):
1. "Wie funktioniert Carsharing?" explanation
2. "Wer kann die Fahrzeuge mieten?" — membership model explanation
3. "Wie wird man Mitglied?" — signup process
4. "Was kostet Carsharing?" — pricing overview with examples
5. Vehicle fleet descriptions (Opel Adam XS, Opel Mokka E M)
6. "Vorteile von Carsharing" — savings, environment, comfort
7. "Firmen und Behörden" — business customer section
8. "Quernutzung" — cross-use with other carsharing organizations (esp. Tübingen)
9. "So funktioniert's" — booking/driving/refueling/billing flow
10. Pricing tables
11. Contact info
12. Pricing examples (incomplete — values left as placeholders "x")

### Content PLANNED but not yet written:
1. FAQ section
2. Tarifrechner (fare calculator) — logic documented but web implementation deferred to v2
3. "Über uns" / team section
4. Testimonials / user quotes
5. Blog / news / "Aktuelles"
6. Environmental impact statistics (referenced but no data provided)
7. Impressum (mentioned but content not provided in drafts)
8. Online registration form

### Content that's CHANGING:
- Booking is currently phone-only (07473-922202, 6:30–23:00). Website may eventually offer online booking, but current content still describes phone booking.
- Paper-based Fahrtenbuch (trip log) system — no digitization mentioned.
- Tariff structure may need updates (Tarife.xml last modified 2025-01-15).

---

## Feature Requests

| Feature | Source | Quote | Priority (if stated) |
|---------|--------|-------|---------------------|
| Tariff calculator (Tarifrechner) | AW_Teilauto_Website.md | „das Thema ‚Tarifrechner / Kostenberechnung' zunächst grob zu umreißen und später – wenn nötig – in einer zweiten Ausbaustufe die detaillierte, relativ komplexe Berechnungslogik schrittweise in die Website zu integrieren" | Phase 2 (deferred) |
| Responsive/mobile design | ChatGPTPlan.md | „Die Seite muss auf Smartphones, Tablets und Desktop gut funktionieren" | High |
| Hero section with scroll-to-content | AW_ Teilauto Website .eml | „große Startseite mit Hintergrundbild [...] Über den Start kann man dann rausscrollemen woraufhin einzelne Content Boxen kommen" | High |
| Interactive parking map | ChatGPTPlan.md / InputStartseite.md | „Übersichtskarte mit Stellplätzen" / „s. Karte, so wie ihr es habt" | Medium |
| FAQ section | ChatGPTPlan.md | „Häufige Fragen thematisch sortiert" | Medium |
| Contact form | ChatGPTPlan.md | „Kontaktformular mit wenigen Pflichtfeldern (Name, E-Mail, Nachricht)" | Medium |
| Online membership signup | ChatGPTPlan.md | „Online-Formular oder Download-Link als PDF" | Medium |
| Search functionality | ChatGPTPlan.md | „Eine einfache Suche (‚Wie kann ich …?') hilft, Informationen ohne Umweg zu finden" | Low |
| Web analytics (DSGVO-konform) | ChatGPTPlan.md | „Webanalyse (z. B. Matomo, ggf. Google Analytics DSGVO-konform)" | Low |
| Cookie consent | ChatGPTPlan.md | „Klar geregelte Cookie-Einwilligung" | Required by law |
| Social media links | ChatGPTPlan.md | „Links zu vorhandenen Profilen (Facebook, Instagram, lokale Netzwerke)" | Low |
| Testimonials | ChatGPTPlan.md | „Kurze Zitate zufriedener Nutzer*innen, ggf. mit Foto" | Low |
| Pricing examples with actual numbers | InputStartseite.md | Examples drafted but values are placeholders (e.g. „2 x ...", „4 x ...") | Medium |
| Vehicle detail pages | ChatGPTPlan.md | „Auflistung der Fahrzeugtypen [...] Wichtige Eckdaten wie Sitzplätze, Kofferraum, Antrieb" | Medium |
| Business customer page | InputStartseite.md | „Firmen und Behörden" section with distinct benefits and pricing | Medium |
| Quernutzung explanation | InputStartseite.md / Nutzungshandbuch | Cross-use with teilAuto Neckar-Alb in Tübingen | Medium |

---

## Open Questions

| Question | Why It's Unclear | Source Files |
|----------|-----------------|-------------|
| Booking fee: 0,75€ or 0,77€? | InputStartseite.md says 0,75€, Nutzungshandbuch says 0,77€ | InputStartseite.md, Nutzungshandbuch_2022_A5.md |
| Annual fee: 34€ or 35€? | Preisliste says 34€, narrative text says 35€ | InputStartseite.md (both values in same doc) |
| Grundgebühr for Firmen: 34€ or 40€? | InputStartseite.md Preisliste says 34€, Nutzungshandbuch says 40€ | InputStartseite.md, Nutzungshandbuch_2022_A5.md |
| Night hours: 0:00–7:00 or 0:00–6:00 or 24:00–8:00? | AW email says „Nachtstunden ab 0:00 Uhr bis 6:00 Uhr"; InputStartseite says 0:00–7:00; Calculator code uses 0:00–8:00 | AW_Teilauto_Website.md, InputStartseite.md, Calculator_Notes.md |
| How many tariff classes are active? | Website drafts show XXS/XS/S/M only. Tarife.xml includes L/XL/XXL as well. Are L/XL/XXL for Quernutzung vehicles only? | Tarife.xml, InputStartseite.md |
| Are daily tariffs (Tagestarif 1.Tag / ab 2.Tag) still used? | Columns exist in pricing tables but values are empty | InputStartseite.md, Website teilAuto neu zweite Version |
| Tiered km pricing — still active? | Calculator logic supports 3-tier km pricing (base/100+/500+). Tarife.xml has „ermäßigt" km rates. Website drafts only show single km rate | Calculator_Notes.md, Tarife.xml, InputStartseite.md |
| Phone number discrepancy | Contact: 07473-25517 vs Booking/Hotline: 07473-922202 — are both active? | InputStartseite.md, Nutzungshandbuch_2022_A5.md |
| Is there an existing website domain? | http://www.teilAutoMoessingen.de mentioned but no content provided | Nutzungshandbuch_2022_A5.md |
| Will online booking be implemented? | All current docs describe phone-only booking. ChatGPT plan mentions „App, Website oder Telefon" but this may be aspirational | ChatGPTPlan.md, Nutzungshandbuch_2022_A5.md |
| Pricing examples never completed | Both InputStartseite.md and Website v2 have example calculations with placeholder values (2 x ..., 4 x ...) | InputStartseite.md, Website teilAuto v2 |
| Is Belsen station returning? | „Stellplatz Belsen: zur Zeit nicht belegt" — should it still appear on website? | Ergänzung Handbuch Stellplatz.md |
| Student/Studierenden-Tarif? | ChatGPTPlan mentions „Sonderkonditionen für Studierende" but no existing tariff data supports this | ChatGPTPlan.md |
| Self-beteiligung amounts differ | Handbook says 750€ (1000€ for repeat), no mention in website drafts | Nutzungshandbuch_2022_A5.md |
| Schutzbrief provider? | DAS (Deutsche Assistance) Tel: 0721-660 33 33 mentioned in accident checklist — should this be on website? | Checkliste nach Verkehrsunfall.md |
| Langzeittarif status | Tarife.xml explicitly marks: „Langzeittarif (z.Zt. Nicht gültig!!!)" | Tarife.xml |

---

## Stakeholder Context

### Organization
- **Company:** teilAuto Mössingen e.K. (eingetragener Kaufmann = sole proprietorship)
- **Owner/Geschäftsführer:** Ralf Stahl
- **Address:** Dreifürstensteinstraße 8/1, 72116 Mössingen
- **Phone (contact):** 07473-25517
- **Phone (booking hotline):** 07473-922202 (daily 6:30–23:00)
- **Email:** info@teilautomoessingen.de
- **Also runs:** DV-Dienstleistungen (IT services, Finanzsoftware) at same address under ralfstahl@stahlnet.de

### Website Project Participants
- **Rainer Stahl** (rainer.stahl42@gmail.com) — Son of Ralf, initiating the website redesign as a university project (Projektarbeit)
- **Ralf Stahl** — Business owner, provides domain knowledge, tariff data, existing documents
- **University professor** — Approved the project; deadline was mid-to-end February 2025

> „also ich hab jetzt ne Antwort von der Professorin, die findet das Thema gut und damit isses dann ‚offiziell' dass unsere Projektarbeit deine Website wird." — *AW_ Teilauto Website .eml (decoded)*

> „Das muss allerdings alles einigermaßen Zeitnah passieren, Frist ist glaub Mitte-Ende Februar oder so" — *AW_ Teilauto Website .eml (decoded)*

### Target Audiences (from document analysis)
1. **Private individuals in Mössingen area** — primary audience, potential new members
2. **Firmen und Behörden (businesses & public agencies)** — secondary audience, higher deposit, named drivers
3. **Existing members** — need reference info (handbook content, accident checklist, E-car instructions)
4. **Cross-use visitors** — members of partner organizations (esp. teilAuto Neckar-Alb e.G., Tübingen)

### Partner Organizations
- **teilAuto Neckar-Alb e.G.** (Tübingen) — primary Quernutzung partner, reference tariff calculator at https://www.teilauto-neckar-alb.de/tarife#tarifrechner
- **DAS (Deutsche Assistance)** — roadside assistance provider (Tel: 0721-660 33 33)
- **EnBW mobility+** — EV charging card/app for the Opel Mokka E

### Current Fleet
| Vehicle | Class | Location | Notes |
|---------|-------|----------|-------|
| Opel Adam | XS (blue) | Johannes-Kepler-Str. 12 | Navi 4.0, automatic parking assistant |
| Opel Mokka E | M (black) | Dreifürstensteinstr. 8/1 | Electric, 100kW, WLTP 325km, automatic, many ADAS features |
| (Belsen slot) | — | Federstraße (Bahnhof Belsen) | Currently unoccupied |

### Billing System
- Access/VBA application maintained by Ralf Stahl
- Tarife.xml is an Excel XML export from this system
- Calculator logic documented in Calculator Notes.txt / Calculator_Notes.md
- Monthly billing cycle, ~6 weeks after month end, via Lastschrift (direct debit)
