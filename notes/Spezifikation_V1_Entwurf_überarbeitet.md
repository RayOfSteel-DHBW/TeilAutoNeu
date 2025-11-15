# Spezifikation Website V1 – Überarbeiteter Entwurf

## 1. Ziele

- Passende Neumitglieder gewinnen (Privatpersonen, Haushalte mit Zweitwagen sowie Firmen/Behörden), ohne die begrenzte Telefonkapazität zu überlasten.
- Standardfragen zu Funktionsweise, Tarifen und Standorten so beantworten, dass weniger Rückfragen per Telefon/E-Mail entstehen.
- teilAuto Mössingen als lokale, verlässliche, bodenständige Carsharing-Alternative zum eigenen (Zweit-)Auto positionieren.
- Transparente, aber abstrahierte Darstellung von Kosten, Abläufen und Regeln auf Basis des Nutzungshandbuchs (Stand 02/2022) -> Nicht zu detailliert, Nutzer erhalten das Handbuch sowie eine Einführung später persönlich.
- Abmahnsichere Website (Impressum, DSGVO, konsistentes Tracking-Konzept).

## 2. Zielgruppen & Ton

- Zielgruppen:
  - Privatpersonen ohne eigenes Auto.
  - Haushalte, die ihr Zweitauto ersetzen oder vermeiden wollen.
  - Carsharing-erfahrene Quernutzer*innen.
  - Firmen und Behörden (auch kleinere Betriebe, soziale Einrichtungen).
- Ton:
  - Sachlich, freundlich, vertrauensbildend, „Sie“-Ansprache.
  - Keine moralisierende „kein Auto“-Rhetorik, keine Armutssignale („für Leute, die sich kein Auto leisten“).
- Positionierung:
  - Lokal verankertes, familiengeführtes Carsharing in Mössingen/Steinlachtal.
  - Persönliche, telefonische Betreuung statt anonymer Plattform.
  - Nachhaltig und vernünftig – ohne erhobenen Zeigefinger.

## 3. Informationsarchitektur (V1 – überarbeitet)

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

### Grundprinzip

- **Mobile First:** Navigation reduziert, klare Titel, Inhalte gut scroll- und lesbar auf kleinen Bildschirmen.
- **Startseite als Einstiegs-Hub:**
  - Dynamischer, neutraler Hero-Claim.
  - Kurze Erklärung „Was ist teilAuto Mössingen?".
  - Selbst-Segmentierung über Persona-Kacheln („Ich habe kein Auto“, „Wir wollen unser Zweitauto sparen“, „Ich kenne Carsharing schon“, „Für Firmen & Behörden“).
- **Detailseiten:**
  - Fokussiert je Thema (Ablauf, Kostenprinzip, Standorte/Fahrzeuge, Vorteile/Nachhaltigkeit, Firmen).
  - Am unteren Ende jeder Seite ein softer Hinweis auf „Nächster sinnvoller Schritt“ (z.B. „So werden Sie Mitglied“), aber kein aggressiver Direktkonverter.

## 4. Startseite

### Zweck

- Erster Eindruck, der seriös, lokal und bodenständig wirkt.
- Kernnutzen und Funktionsweise kurz erklären, ohne zu überfordern.
- Nutzer*innen schnell zu den für sie relevanten Detailseiten leiten (Self-Segmentation).
- Vertrauen aufbauen; eher informieren als hart „verkaufen“.

### MUSS-Inhalte (V1)

- **Hero-Bereich:**
  - Logo, Navigation (mobil als Burger).
  - Claim mit dynamischem, neutralem Text, z.B. Basis:
    - „Carsharing in Mössingen – [flexibel | vernünftig | praktisch | regional | gemeinsam genutzt].“
  - Unterzeile, die neugierig macht, ohne alles zu verraten, z.B.: „Erfahren Sie, wie teilAuto Ihren Alltag erleichtern kann.“
  - Ein Hauptlink im Hero, der zu Information führt, z.B. „So funktioniert’s ansehen“.
    - **Wichtig:** Dieser Link führt zunächst zu einem Abschnitt weiter unten auf der **Startseite** (Anker „So funktioniert’s in 3 Schritten“), nicht direkt auf die Unterseite „So funktioniert’s“, um Scrollen zu fördern.
- **Kurze Einordnung „Was ist teilAuto Mössingen?“ (2–3 Sätze):**
  - Stationsbasiertes Carsharing mit festen Stellplätzen.
  - Zugang per Tresorschlüssel, Buchung telefonisch, Abrechnung monatlich.
  - Lokal geführt, seit vielen Jahren in Mössingen/Region aktiv.
- **Persona-Kacheln (Self-Segmentation, mobil stapelbar):**
  - Positionierung nicht direkt im Hero, sondern als eigener Abschnitt **nach** einem kurzen Ablauf-Block (siehe unten), damit Nutzer zuerst das Grundprinzip sehen.
  - „Ich habe kein eigenes Auto“ → Anker auf Startseiten-Abschnitt „Ohne eigenes Auto mobil“.
  - „Wir überlegen, unser Zweitauto zu ersetzen“ → Anker auf Startseiten-Abschnitt mit Vorteilen/Zweitwagen-Beispiel und Hinweis auf „Tarife & Mitgliedschaft“.
  - „Ich nutze schon Carsharing“ → Anker auf Startseiten-Abschnitt „Standorte & Fahrzeuge im Überblick“ + Hinweis auf Quernutzung.
  - „Für Firmen & Behörden“ → Link zur Seite „Für Firmen & Behörden“ (visuell etwas zurückhaltender gestaltet).
- **Teaser-Blocks zu den wichtigsten Detailseiten:**
  - „So funktioniert’s in 3 Schritten“ – sehr kompakter Ablauf-Block direkt unter dem Hero (Mitglied werden, telefonisch buchen, Auto am Stellplatz abholen).
    - Dieser Block bildet zugleich das Ankerziel für den Hero-Link „So funktioniert’s ansehen“ und motiviert weiter zu scrollen.
  - „Für wen teilAuto passt“ – Persona-Kacheln als eigener Abschnitt im mittleren Seitenbereich.
  - „Vorteile & Nachhaltigkeit“ – 3–4 Stichworte (Kosten, Platz, Umwelt, Flexibilität) mit Link auf den ausführlicheren Abschnitt weiter unten bzw. auf die gleichnamige Seite.
  - „Standorte & Fahrzeuge im Überblick“ – kurzer Hinweis auf mehrere Stellplätze und unterschiedliche Fahrzeuge inkl. E-Autos, mit Anker auf einen Startseiten-Teaser bzw. Link auf die Detailseite.
- **Erwartungsmanagement:**
  - Hinweis „Buchung telefonisch“ (nicht App/Online), um Erwartungen zu steuern.

### KANN-Inhalte (V1/V1.5)

- 2–3 Top-FAQ im Akkordeon direkt auf der Startseite (z.B. „Was kostet mich das ungefähr?“, „Wie buche ich ein Auto?“, „Was ist, wenn ich später zurückkomme?“).
- Kleiner Firmen-Teaser im unteren Bereich:
  - z.B. „Für Ihre Firma oder Behörde: Dienstfahrten ohne eigenen Fuhrpark.“ → Link zu „Für Firmen & Behörden“.
- „Longscroller“-Ansatz in kompakter Form:
  - Klar strukturierte Reihenfolge der Startseiten-Abschnitte, z.B.:
    1. Hero (Claim, Unterzeile, Link zu „So funktioniert’s in 3 Schritten“ + visueller Scroll-Hinweis, z.B. Pfeil nach unten).
    2. Kurzablauf „So funktioniert’s in 3 Schritten“ (als kompakter Block direkt unter dem Hero).
    3. Persona-Kacheln „Für wen passt teilAuto?“ (Self-Segmentation, verlinkt hauptsächlich auf Startseiten-Abschnitte).
    4. „Warum teilAuto für viele passt“ (Vorteile, inkl. Zweitwagen-Fokus).
    5. „Unsere Standorte & Autos im Überblick“ (Teaser mit Karte/Bild, Link auf Detailseite).
    6. Optional: Top-FAQ-Auszug.
- Dezenter Textlink im Verlauf („Interesse? So werden Sie Mitglied“) statt großer Button, um false positives niedrig zu halten.

## 5. So funktioniert’s

### Zweck

- Ablauf verständlich erklären, Hemmschwellen abbauen.
- Klar machen, dass alles strukturiert und zuverlässig geregelt ist (Telefonbuchung, Tresor, Fahrtenbuch, Abrechnung).

### MUSS-Inhalte (V1)

- **Kurzdefinition Carsharing/teilAuto:**
  - „Carsharing mit festen Stellplätzen in Mössingen und Umgebung.“
  - „Sie werden Mitglied, buchen telefonisch, holen das Auto am Stellplatz ab und zahlen bequem per monatlicher Abrechnung.“
- **Schritt-für-Schritt-Ablauf:**
  1. Mitglied werden (Vertrag, Sicherungseinlage, Schlüssel, Einweisung).
  2. Buchen (telefonisch, Buchungszeiten, Angaben: Datum, Uhrzeit, Fahrzeug).
  3. Fahrzeug abholen (Stellplatz finden, Tresor, Schlüssel entnehmen, Fahrtenbuch-Eintrag).
  4. Fahren & Tanken/Pflegen (Grundregeln, Tanken bei <1/4, sauber zurückgeben).
  5. Rückgabe & Abrechnung (Rückgabe zum Stellplatz, Fahrtenbuch, monatliche Rechnung per Post/Lastschrift).
- **Klare Hinweise:**
  - Nur Mitglieder fahren die Autos (keine Einmal-Vermietung ohne Vertrag).
  - Buchung ausschließlich telefonisch, zu bestimmten Zeiten (aus Handbuch, ggf. leicht vereinfacht).

### KANN-Inhalte

- Icons/Illustrationen zu jedem Schritt (angelehnt an Schüler-Projekt).
- Separate Kurzabschnitte:
  - „Wenn Sie bisher ein eigenes Auto haben …“ (Betonung, dass Abläufe alltagstauglich und verlässlich sind).
  - „Wenn Sie kein eigenes Auto haben …“ (Betonung, dass man trotzdem flexibel unterwegs sein kann).
- Kurze Beispiele:
  - Spontane Buchung vs. frühzeitige Buchung.
  - Umgang mit Stornierungen (kulante Regel, in vereinfachter Sprache).
- Verweis auf Quernutzung (eigener Abschnitt „Fahren in anderen Städten“, kurz und verständlich).

## 6. Tarife & Mitgliedschaft

### Zweck

- Grundprinzip und Größenordnung der Kosten erklären.
- Zeigen, wie die Mitgliedschaft funktioniert, ohne in eine starre, pflegeintensive Preisliste zu laufen.

### MUSS-Inhalte (V1)

- **Kostenprinzip:**
  - Einmalige Sicherungseinlage (Privat-/Firmenkunden, Erst-/Zweitnutzer*innen in groben Kategorien).
  - Jährliche Grundgebühr.
  - Fahrtkosten: Buchungsgebühr + Zeitpreis + km-Preis, inkl. Betriebsstoffe und Versicherung.
  - Erklärung, dass es verschiedene Fahrzeugklassen mit unterschiedlichen Zeit- und km-Preisen gibt.
- **Abstrakte Darstellung:**
  - Eher textlich erklären („im höheren dreistelligen Bereich“, „geringe jährliche Grundgebühr“, „faire km-Preise“), genaue Eurobeträge nur, wenn explizit freigegeben.
  - Deutlicher Hinweis: „Genaue, aktuelle Preise erhalten Sie im persönlichen Gespräch und in den Unterlagen.“
- **Mitglied werden:**
  - Voraussetzungen (Führerschein, Einzugsermächtigung, ggf. Wohnortbezug).
  - Schritte:
    1. Kontaktaufnahme (Telefon/E-Mail).
    2. Informationsgespräch, Unterlagen erhalten.
    3. Vertrag unterschreiben, Sicherungseinlage leisten.
    4. Schlüssel/Tresor-Einweisung und Start.
- Kein Online-Abschluss, kein „Jetzt anmelden“-Formular – nächster Schritt ist immer Kontaktaufnahme.

### KANN-Inhalte

- Sehr einfache, textliche Beispielrechnungen:
  - „Ein typischer Wochenendeinkauf“ (z.B. 2 Stunden + 15 km) – nur mit grob gerundeten Kosten, falls abgesprochen.
  - „Tagesausflug“ (z.B. 8 Stunden + 150 km).
- Infografik zum Aufbau des Fahrpreises (Buchungsgebühr + Zeit + km).
- Hinweis auf unterschiedliche Konditionen für Firmen/Juristische Personen (Verlinkung zu „Für Firmen & Behörden“).
- Optionaler Hinweis auf zukünftigen, einfachen Kostenrechner (als Perspektive V2/V1.5, nicht als Versprechen).

## 7. Standorte & Fahrzeuge

### Zweck

- Transparenz schaffen: Wo stehen die Autos, welche Fahrzeuge gibt es?
- Zeigen, dass teilAuto sowohl Alltags- als auch besondere Fahrten abdecken kann (inkl. E-Auto).

### MUSS-Inhalte (V1)

- **Stellplätze:**
  - Liste aller Stellplätze mit Name, Adresse, Kurzbeschreibung der Lage („neben …“, „gegenüber …“).
  - Hinweis auf E-Auto-Stellplätze.
- **Fahrzeuge:**
  - Beschreibung von Fahrzeugklassen (z.B. Kleinwagen, Kompaktwagen, E-Auto).
  - Typische Modelle (Opel Adam, Opel Mokka-e etc.).
  - Kurz zu Ausstattung, soweit relevant (z.B. 5 Sitze, Kofferraumgröße).
- **Klarstellung:**
  - Alle Fahrzeuge sind Nichtraucherfahrzeuge.
  - Kindertransport, Haustiere nur in Transportbox gemäß Handbuch (kurz und verständlich).

### KANN-Inhalte

- Einfache Karte (z.B. mit Markern) oder statische Grafik zum Überblick der Stellplätze.
- Fotos der Fahrzeuge und Stellplätze.
- Optional: ausklappbare Detailinfos je Stellplatz (z.B. Besonderheiten beim Parken, Tresorart).

## 8. Vorteile & Nachhaltigkeit

### Zweck

- Nutzenargumente bündeln, ohne moralischen Druck.
- Vor allem Zweitwagen-Haushalte und pragmatische Nutzer*innen abholen.

### MUSS-Inhalte (V1)

- **Kosten/Nutzen:**
  - Kein (Zweit-)Auto kaufen, versichern, warten, betanken müssen.
  - Kosten nur, wenn wirklich gefahren wird.
- **Alltag/Komfort:**
  - Feste Stellplätze → klarer Rückgabeort.
  - Unterschiedliche Fahrzeuge für unterschiedliche Zwecke.
  - Telefonische Erreichbarkeit bei Problemen.
- **Nachhaltigkeit:**
  - Weniger Autos im Straßenraum, weniger Fläche.
  - Mehr Motivation, kurze Wege zu Fuß, per Rad oder ÖPNV zu erledigen.
  - teilAuto als langfristiges, lokales Projekt statt kurzfristiger Trend.
- **Zweitwagen-Fokus:**
  - Kurzer Abschnitt „TeilAuto als Zweitwagen-Ersatz“ mit sachlichen Vorteilen (Kosten, Platz, weniger Aufwand).

### KANN-Inhalte

- Einfache Kennzahlen (z.B. aus Carsharing-Verbandsinfos), wenn abgesichert.
- Kurze Beispielgeschichten (an Personas angelehnt), z.B. Familie, die ihr Zweitauto abgeschafft hat.
- Kleine Grafik oder Illustration („Ein Carsharing-Auto ersetzt mehrere private Autos“).

## 9. Für Firmen & Behörden

### Zweck

- Informationen für Geschäftskunden kompakt bündeln.
- Firmen zeigen, dass sie mit teilAuto ihre Mobilität pragmatisch und kosteneffizient organisieren können.

### MUSS-Inhalte (V1)

- **Nutzenargumente:**
  - Dienstfahrten ohne eigenen Fuhrpark.
  - Kosten nur für tatsächlich genutzte Fahrten.
  - Weniger Verwaltungsaufwand als bei eigenen Autos (Werkstatt, Versicherung, Reifenwechsel etc. entfallen).
- **Konditionen (in groben Zügen):**
  - Sicherungseinlage und Grundgebühr für juristische Personen.
  - Namentlich angemeldete Fahrer*innen, geregelte Haftung, klare Abrechnung.
- **Typische Einsatzfälle:**
  - Außentermine in der Region.
  - Fahrten zu Behörden, Kund*innen, sozialen Einrichtungen.
- **Nächster Schritt:**
  - Aufforderung zur Kontaktaufnahme (Telefon/E-Mail), ggf. mit Hinweis auf „Wir beraten Sie persönlich zu den passenden Konditionen.“

### KANN-Inhalte

- Kurz-FAQ speziell für Firmen (z.B. „Wie viele Personen dürfen fahren?“, „Wie läuft die Abrechnung?“).
- Neutrale Referenzbeispiele („Ein regionales Unternehmen nutzt teilAuto für …“), sobald vorhanden.
- Verweis auf Download von Vertragsmustern oder AGB, sobald das rechtlich sauber geklärt ist.

## 10. FAQ

### Zweck

- Häufige Fragen abfangen, um Telefon/E-Mail zu entlasten.
- Sicherheit geben, dass Sonderfälle geregelt sind, ohne das Handbuch komplett ins Web zu kippen.

### MUSS-Inhalte (V1)

- 8–15 Fragen, geclustert nach Themen:
  - Einstieg & Mitgliedschaft (Voraussetzungen, Dauer des Aufnahmeprozesses).
  - Buchung & Stornierung (Buchungszeiten, spontane Buchungen, Storno-Regeln in Kurzform).
  - Nutzung & Rückgabe (Tresor, Fahrtenbuch, Tanken, Sauberkeit).
  - Kosten & Abrechnung (Rechnungsversand, Lastschrift, Reklamationsfrist).
  - Schäden, Pannen, Unfälle (Wer anrufen? Was tun? Kurzfassung).
  - Quernutzung (Wie nutze ich Fahrzeuge in anderen Städten?).
- Antworten basieren auf Handbuch 02/2022, aber vereinfacht und entjurifiziert.

### KANN-Inhalte

- Verlinkungen auf:
  - „So funktioniert’s“, „Tarife & Mitgliedschaft“, „Standorte & Fahrzeuge“.
  - PDF-Merkblätter (z.B. Unfallmerkblatt), sobald vorhanden.
- Top-3-FAQ-Auszug auf der Startseite, verlinkt auf ausführliche FAQ.

## 11. Über uns

### Zweck

- Vertrauen schaffen, Menschen und Geschichte hinter teilAuto zeigen.
- Lokalen Charakter hervorheben.

### MUSS-Inhalte (V1)

- **Kurzgeschichte:**
  - Gründung, Motivation, Entwicklung, Einbindung in Carsharing-Verbund.
- **Betreiber-Familie:**
  - Vorstellung in 1–2 Absätzen (wer macht was).
- **Betonung:**
  - Langjährige Erfahrung, persönliche Erreichbarkeit, kurze Wege.

### KANN-Inhalte

- Fotos (Personen, Büro, Fahrzeuge an typischen Orten).
- Erwähnung von Kooperationen (z.B. Stadt, Verbund, andere Initiativen).
- Verlinkung von Presseberichten, sofern vorhanden.

## 12. Rechtliches

### Zweck

- Rechtliche Anforderungen abdecken (Impressum, Datenschutz).
- Transparenz über Datennutzung (inkl. Analytics).

### MUSS-Inhalte (V1)

- **Impressum:**
  - Vollständige Pflichtangaben (Name, Anschrift, Vertretungsberechtigte, Kontakt, ggf. Register).
- **Datenschutzerklärung:**
  - Beschreibung der Datenverarbeitung auf der Website (Server-Logs, Kontaktformular, ggf. Analytics).
  - Hinweis darauf, dass keine Online-Buchung/App genutzt wird (entsprechend der Realität).
- Ggf. Basis-Haftungshinweise (in Abstimmung mit rechtlicher Beratung).

### KANN-Inhalte

- Downloadbereich für:
  - AGB/Nutzungsvertrag, Zusatzvereinbarungen, Merkblätter (z.B. „Verhalten bei Unfall/Havarie“).
- Kurzfassung wichtiger Regelungen in einfacher Sprache, verlinkt von „So funktioniert’s“/FAQ.

## 13. Pflege & Technik (V1-Stand)

### Zweck

- Klarstellen, welche Inhalte sich häufig ändern und wie sie im Web abstrahiert werden.
- Eltern/Betreiber nicht mit laufender Detailpflege überfordern.

### MUSS-Inhalte (V1)

- **Tarife:**
  - Fachlich gepflegt in `Tarife.xml`/Handbuch.
  - Website zeigt nur Prinzipien und ggf. grobe Größenordnungen, keine komplette Preisliste.
- **Inhalte mit Änderungsbedarf:**
  - Stellplätze & Fahrzeuge (bei neuen Standorten, Fahrzeugwechseln).
  - FAQ (bei neuen Regeln oder erweiterten Leistungen).
  - Kontaktinformationen (Telefon, E-Mail, Bürozeiten).
- **Rollen:**
  - Du als initialer Texter.
  - Eltern als spätere Pflegende für wenige, klar abgegrenzte Textblöcke (z.B. Stellplatz-Beschreibungen).

### KANN-Inhalte

- Späterer Ausbau:
  - Einfache Kostenbeispiele oder sehr reduzierter Rechner (auf Basis abstrahierter Tarife).
- Hinweistexte im Backend/Kommentaren, was bei Änderungen zu beachten ist (nicht im Frontend sichtbar).

## 14. Analytics & Weiterentwicklung

### Zweck

- Lernschleifen ermöglichen, ohne die Nutzer zu tracken wie in einem Großkonzern.
- Hypothesen prüfen: Welche Personas dominieren? Welche Info-Blöcke werden genutzt?

### MUSS-Inhalte (V1)

- **Geplante Messpunkte (als Konzept):**
  - Klicks auf Persona-Kacheln auf der Startseite („kein Auto“, „Zweitauto“, „Carsharing-Erfahrung“, „Firma/Behörde“).
  - Scrolltiefe auf der Startseite (z.B. 25/50/75/100 %).
  - Klicks auf wichtige Einstiegslinks:
    - „So funktioniert’s“ (auch speziell aus dem Hero).
    - „Tarife & Mitgliedschaft“.
    - „Standorte & Fahrzeuge“.
  - Öffnen von FAQ-Einträgen (insb. zu Kosten, Buchung, Mitgliedschaft).
  - Interaktion mit Kosten-Elementen:
    - Klick auf „Kostenprinzip verstehen“ / „Kostenbeispiele“.
  - Klicks auf Kontaktmöglichkeiten:
    - `tel:`-Links (Telefon), `mailto:`-Links (E-Mail), nach Seite differenziert (z.B. „von Tarife-Seite“, „von Firmen-Seite“).
- **Datenschutz-Hinweis:**
  - Analytics nur in datensparsamem, DSGVO-konformen Rahmen.
  - Details in der Datenschutzerklärung ausgestaltet.

### KANN-Inhalte

- Periodische Auswertung (z.B. jährlich) zur Anpassung von:
  - Reihenfolge von Startseiten-Blöcken.
  - Auswahl und Positionierung der Persona-Kacheln.
  - Priorisierung von FAQ-Themen.
- Dokumentation von Hypothesen (intern), z.B.:
  - „Zweitwagen-Kachel wird häufiger geklickt als ‚kein Auto‘.“
  - „Viele springen direkt zu ‚Standorte & Fahrzeuge‘ – Karten/Übersicht weiter nach oben ziehen.“
