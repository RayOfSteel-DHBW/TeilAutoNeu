# Spezifikation Website V1 – Problem- & Entscheidungsentwurf

> Ziel dieses Dokuments: dieselbe Struktur wie `Spezifikation_V1_Entwurf_überarbeitet.md`, aber mit Fokus auf Problemstellungen, Spannungsfelder und Gestaltungsüberlegungen statt auf konkrete Textvorschläge. Dient als Grundlage, um später unterschiedliche Varianten (Texte/Layouts) zu testen, ohne die Grundlogik neu aufzuschreiben.

## 1. Ziele – Probleme & Abwägungen

- **Neukundengewinnung vs. Kapazität**
  - Wunsch: ca. 20 neue passende Kund*innen.
  - Problem: Telefon- und Supportkapazität ist begrenzt; zu viele "falsche" Anfragen (z.B. Einmalmieter, Leute, die Online-App erwarten) sind belastend.
  - Konsequenz: Website muss filtern und qualifizieren, nicht maximal konvertieren.

- **Informationshub vs. Werbefläche**
  - Nutzer*innen sollen Antworten auf Standardfragen finden (Tarife, Funktionsweise, Stellplätze), ohne sofort zum Hörer zu greifen.
  - Gleichzeitig soll ein sympathisches Bild von teilAuto entstehen.
  - Spannung: Wie viel Detail ist nötig, ohne die Seite zu überfrachten oder juristisch zum zweiten Handbuch zu machen?

- **Transparenz vs. Pflegeaufwand**
  - Tarife und Regeln sind komplex und ändern sich gelegentlich.
  - Vollständige Preistabellen und Detailregeln erhöhen Pflegeaufwand und Fehlergefahr.
  - Frage: Wie weit kann man abstrahieren, damit Nutzer*innen das Modell verstehen, ohne ständig Preise nachziehen zu müssen?

- **Lokale Authentizität vs. moderne Optik**
  - teilAuto ist bewusst pragmatisch und nicht hyper-digital (Telefonbuchung, Tresor, Fahrtenbuch).
  - Website soll trotzdem zeitgemäß aussehen und Vertrauen wecken.
  - Abwägung: Wie zeigt man "unkompliziert & analog" ohne altbacken zu wirken?

## 2. Zielgruppen & Ton – Probleme & Spannungen

- **Mehrere Privat-Personas mit unterschiedlichen Motiven**
  - Zweitwagen-Haushalte (Simone, Brigitte): Fokus Kostenersparnis, Vernunft, aber nicht "für Arme".
  - Personen ohne Auto (Johannes): Umweltbewusstsein, praktische Verfügbarkeit.
  - Quernutzer (Günther): Bedürfnis nach Klarheit zu Standorten & Quernutzung, weniger Interesse an Grundprinzipien.
  - Besucher, die Mössingen nur gelegentlich brauchen: Pragmatismus, wenig Bindung.
  - Problem: Eine Startseite muss funktionieren, obwohl Motive sehr unterschiedlich sind.

- **Firmen & Behörden vs. Privatkunden**
  - Firmen sind wichtig, lesen eher gründlich, kommen eher über gezielte Navigation/Empfehlung.
  - Privatkunden sind heterogener und evtl. skeptischer.
  - Frage: Wie prominent dürfen Firmen im Konzept sein, ohne Privatkunden abzuschrecken oder zu verwirren?

- **Ton und Bild: Vernünftig, aber nicht belehrend**
  - Carsharing hat Nachhaltigkeits- und Vernunftkomponente.
  - Bisherige Versuche wie "kein Auto haben" können auf dem Land Abwehr auslösen.
  - Herausforderung: Formulierungen finden, die Vorteile klar benennen, ohne zu moralisieren oder zu stigmatisieren.

## 3. Informationsarchitektur – Problemfelder

### Hauptnavigation

1. Startseite
2. So funktioniert’s
3. Tarife & Mitgliedschaft
4. Standorte & Fahrzeuge
5. Vorteile & Nachhaltigkeit
6. Für Firmen & Behörden
7. FAQ
8. Über uns
9. Rechtliches

### Zentrale Fragen

- **Tiefe vs. Breite**
  - Lieber wenige, tiefere Seiten (Longscroller) oder viele kurze?
  - Aktuelle Tendenz: Longscroller-Charakter auf Startseite, thematische Einzelseiten für Details.

- **Self-Segmentation vs. Überforderung**
  - Persona-Kacheln helfen, sich selbst wiederzufinden.
  - Zu viele Optionen auf kleinem Screen können aber abschrecken.
  - Offene Frage: Wieviele Kacheln sind auf Mobil sinnvoll, bevor es unübersichtlich wird?

- **Anker vs. Unterseiten**
  - Anker auf der gleichen Seite fördern Scrollen und Kontext.
  - Direkte Unterseitenlinks bringen schneller zum Ziel, aber umgehen die Erzählung der Startseite.
  - Gestaltungsfrage: Wo lohnt sich ein Anker (Hero → Kurzablauf) und wo eine eigene Seite (z.B. Firmeninfos)?

## 4. Startseite – zentrale Problemstellungen

### Kernprobleme

- **Scrolllust erzeugen**
  - Viele Nutzer sehen nur den ersten Screen. Wie wird klar, dass darunter noch wichtige Infos kommen?
  - Gefahr: Wenn Hero sofort auf Unterseiten schickt, bleiben große Teile der Startseite ungelesen.

- **Hero-Claim ohne falsche Signale**
  - Claim soll Vorteile andeuten (Kosten, Flexibilität, Nachhaltigkeit), aber keine Armut oder Verzicht betonen.
  - Dynamischer Text (wechselnde Adjektive) kann mehrere Aspekte abdecken, birgt aber Risiko von Effekthascherei.

- **Rolle der Persona-Kacheln**
  - Kacheln sind nützlich, um "Zweitwagen vs. kein Auto vs. Carsharing-Profi" zu differenzieren.
  - Wenn sie zu früh und zu dominant kommen, wirken sie wie ein Fragebogen und überfordern.

### Offene Gestaltungsfragen

- Position/Timing der Persona-Kacheln
  - Variante A: Direkt im Hero (maximal sichtbar, aber evtl. verwirrend).
  - Variante B: Nach einem kurzen "So funktioniert’s in 3 Schritten"-Block (erst Verständnis, dann Selbst-Einordnung).
  - Spezifikation tendiert zu B, aber die Wirkung muss später getestet werden.

- Art der CTAs im Hero
  - Bedarf: Link, der Neugier weckt und Orientierung bietet.
  - Optionen:
    - CTA auf Startseiten-Anker (z.B. Kurzablauf) vs. CTA direkt auf Unterseite „So funktioniert’s“.
    - Textvarianten wie „So funktioniert’s ansehen“, „Wie teilAuto funktioniert“ etc.
  - Entscheidungsfrage: Wie viel Direktheit verträgt der CTA, ohne wie ein harter Verkaufsaufruf zu wirken?

- Micro-Teaser unter dem Hero
  - Kleine Bausteine („Warum teilAuto?“, „Unsere Autos & Stellplätze“) können scrollen motivieren.
  - Offene Frage: Sollen sie eher visuell (Karten, Icons) oder textbasiert sein – abhängig von späterer Designrichtung.

## 5. So funktioniert’s – Problemfokus

### Spannungsfelder

- **Vollständigkeit vs. Verständlichkeit**
  - Handbuch enthält viele Detailregeln (Storno, Pannen, Strafen, Formulare).
  - Website soll Prinzipien erklären, ohne juristische Feinheiten im Detail auszurollen.

- **Analoges System vs. moderne Erwartung**
  - Prozess ist analog (Telefon, Tresor, Fahrtenbuch), Nutzer*innen gewöhnt an Apps.
  - Aufgabe: Den Ablauf so darstellen, dass er organisiert und verlässlich wirkt, nicht altmodisch.

### Offene Fragen

- Wie viele Schritte sind ideal?
  - 3 („Mitglied werden – Buchen – Fahren & zurückgeben") oder mehr (inkl. Tanken, Abrechnung, Quernutzung)?
  - Ziel: Spätere Variation möglich halten.

- Wie prominent sind Sonderregeln?
  - Pannen-/Unfall-Regeln sind wichtig, aber schwergewichtig.
  - Spezifikationsfrage: Gehören sie auf diese Seite oder eher in FAQ/Downloads?

## 6. Tarife & Mitgliedschaft – Problemfokus

### Kernprobleme

- **Kein Live-Preisrechner, aber trotzdem Transparenz**
  - Ziel: Nutzer*innen sollen ein Gefühl für Kosten bekommen, ohne einen komplexen Rechner oder volle Tabellen.

- **Preisänderungen & Wartung**
  - Tarife ändern sich, `Tarife.xml` und Handbuch sind führend.
  - Wiederkehrendes Problem: Wie verhindert man, dass Website-Preise veralten?

### Überlegungen

- Welche Art von "Größenordnung" ist genug?
  - Textliche Beschreibungen ("höherer dreistelliger Bereich" etc.) vs. konkrete Beispielbeträge.
  - Potenzial für spätere A/B-Tests: Mehr oder weniger Konkretion.

- Wie klar muss das Mitgliedschaftsmodell sein?
  - Erstnutzer, Zweitnutzer, juristische Person – strukturell wichtig, aber in der ersten Info evtl. zu komplex.
  - Spezifikationsziel: Struktur so anlegen, dass man später leicht tiefer gehen kann.

## 7. Standorte & Fahrzeuge – Problemfokus

### Herausforderungen

- **Orientierung im Raum**
  - Stellplätze sind lokal, mit teils umständlichen Wegbeschreibungen.
  - Frage: Reicht eine Liste mit Adressen + Kurzbeschreibung oder ist eine Karte nötig, um Hürden abzubauen?

- **Fahrzeugvielfalt vs. Übersichtlichkeit**
  - Unterschiedliche Klassen und Modelle, E-Auto vs. Verbrenner.
  - Problem: Wie viel Details brauchen Interessierte, bevor sie überhaupt Mitglied werden?

## 8. Vorteile & Nachhaltigkeit – Problemfokus

### Spannungen

- **Nachhaltigkeit als Motiv, aber nicht als Moralkeule**
  - Viele Interessierte (v.a. auf dem Land) sind preis- oder bequemlichkeitsgetrieben, nicht primär "Öko".
  - Texte dürfen Umweltvorteile nicht als moralische Pflicht formulieren.

- **Zweitwagen-Thema sensibel behandeln**
  - Haushalte mit hohem Einkommen (Brigitte) wollen nicht, dass Carsharing wie ein "Notbehelf" wirkt.
  - Aufgabe: Vorteile von weniger Autos betonen, ohne Verzichtsrhetorik.

## 9. Für Firmen & Behörden – Problemfokus

### Kernfragen

- Wie viel Detail brauchen Firmen auf der Website?
  - Viele Details werden ohnehin im Gespräch geklärt.
  - Herausforderung: genug Infos, um seriös zu wirken, aber nicht so viel, dass es abschreckt.

- Rolle von Referenzen
  - Referenzen können Vertrauen aufbauen, erfordern aber Pflege.
  - Entscheidungen für später: Anonymisierte Beispiele vs. vollständige Cases.

## 10. FAQ – Problemfokus

### Herausforderungen

- **Auswahl der Fragen**
  - FAQ soll Standardanfragen abfangen – welche Fragen kommen tatsächlich häufig?
  - Spannungsfeld: Eigene Wahrnehmung vs. echte Support-Historie.

- **Tiefe der Antworten**
  - Zu knappe Antworten bringen Rückfragen, zu ausführliche wirken erschlagend.
  - Spezifikationsziel: Struktur so anlegen, dass man später Antworten ausbauen oder kürzen kann.

## 11. Über uns – Problemfokus

### Spannungen

- Persönliche Nähe vs. Privatsphäre
  - Lokale, persönliche Geschichte ist ein Plus.
  - Gleichzeitig sollen Betreiber*innen nicht zu sehr "im Schaufenster" stehen.

- Seriosität vs. "Nachbarschaftsprojekt"
  - teilAuto ist ein Kleinstunternehmen mit Familiensetting.
  - Frage: Wie wirkt man professionell, ohne das Projekt aufzublasen oder zu klein erscheinen zu lassen?

## 12. Rechtliches – Problemfokus

### Herausforderungen

- Rechtssicherheit vs. Lesbarkeit
  - Impressum/Datenschutzerklärung müssen juristisch korrekt sein.
  - Gleichzeitig sollen sie Laien nicht komplett ausschließen.

- Analytics & Tracking
  - Wunsch nach einfachen Analytics-Messpunkten.
  - Problem: Wie konkret darf das im Frontend dokumentiert werden, ohne die Datenschutzerklärung zu sprengen?

## 13. Pflege & Technik – Problemfokus

### Wiederkehrende Probleme

- Wer pflegt was und wie oft?
  - Eltern wollen nur wenige Inhalte realistisch pflegen.
  - Gefahr: Website veraltet, wenn Pflegerollen unklar sind.

- Abhängigkeit von technischen Helfer*innen
  - Je mehr Automatisierung (z.B. Import aus `Tarife.xml`), desto stärker die Abhängigkeit von Entwicklern.
  - Spezifikationsfrage: Wo lohnt sich Technik, wo ist manuelle Pflege die robustere Variante?

## 14. Analytics & Weiterentwicklung – Problemfokus

### Offene Fragen

- Welche Kennzahlen sind wirklich entscheidend?
  - Klicks auf Persona-Kacheln, Scrolltiefe, FAQ-Nutzung, Kontakt-Klicks – alle interessant.
  - Herausforderung: Nicht in Kleinst-Metriken verlieren, sondern 2–3 Kernfragen beantworten:
    - Wer nutzt die Seite (welche Persona-Segmente)?
    - Wo steigen Nutzer*innen aus?
    - Welche Infos fehlen offenbar noch?

- Datenschutz und Akzeptanz
  - Analytics darf Nutzer*innen nicht ausspioniert wirken lassen.
  - Spezifikationsziel: Messung so anlegen, dass sie eher grobe Tendenzen als individuelle Profile liefert.
