# Fahrtkostenrechner – Notizen zur Berechnungslogik

Diese Datei fasst die Logik des in Access/VBA implementierten Fahrtkostenrechners in verständlicher Form zusammen. Die Originaldatei ist `Calculator Notes.txt`.

---

## 1. Grundgrößen und Konstanten

- `std = 4.16666666666667E-02`  → entspricht 1 Stunde / 24 (also ein Taganteil)
- `halbe_std = 2.08333333333333E-02` → entspricht 0,5 Stunden / 24

Die Berechnung verwendet intern Datum/Zeit-Werte als `Double` (Tagesanteile).

---

## 2. Eingaben und Gültigkeitsprüfungen

Erforderliche Eingaben für eine Berechnung:

- Startdatum `tagab`
- Enddatum `tagbis`
- Startzeit `Zeitab`
- Endzeit `zeitbis`
- gefahrene Kilometer `Kmab`

Vor der Berechnung wird geprüft:

1. Sind alle Felder gefüllt? Wenn nicht → Fehlermeldung.
2. Ist Ende vor Beginn (`y < 0`)? Wenn ja → Fehlermeldung.
3. Ist Ende gleich Beginn (`y = 0`)? → Hinweis, dass Fahrtende = Fahrtbeginn.

### 2.1 Datumseingabe (`tagab`, `tagbis`)

- Falls der Tag ohne Punkt eingegeben wird, wird automatisch Monat/Jahr ergänzt.
- Datum wird in ein internes numerisches Format umgewandelt und wieder als `dd.mm.yyyy` dargestellt.
- Schutz: Datum darf nicht älter als 365 Tage vor dem aktuellen Datum sein.

### 2.2 Zeiteingabe (`Zeitab`, `zeitbis`)

- Die Zeit wird auf ein hh:mm-Format gebracht.
- Komma am Ende wird als „:30“ interpretiert (also halbe Stunde).
- Bei `zeitbis = 24` wird das Enddatum automatisch um einen Tag erhöht und `zeitbis` auf 0 gesetzt.

---

## 3. Tarif- und Km-Logik

Die Tarife werden je nach Tarifgruppe und Tarifsystem aus Tabellen (`kategorien`, `Tarife` bzw. `Tarifgruppe`) per `DLookup` geladen.

### 3.1 Staffelung der Kilometer

Abhängig von den globalen Einstellungen `kmtarif2` und `kmtarif3` werden Kilometer in Stufen aufgeteilt:

- Grundstufe `kilometer` (z. B. bis 100 km)
- Zwischenstufe bis `kilometer3` (z. B. 100–500 km)
- darüber hinaus (`über500`)

Die Aufteilung:

- Wenn `gefahren > kilometer3`:
  - `über500 = gefahren - kilometer3`
  - `über100 = kilometer3 - kilometer`
  - `gefahren = kilometer`
- Wenn nur `gefahren > kilometer`:
  - `über100 = gefahren - kilometer`
  - `gefahren = kilometer`

Zu den Stufen gehören unterschiedliche Kilometerpreise (`Kilometertarif_neu`, `km100_neu`, `km500_neu`).

### 3.2 Grund-Kilometerkosten

- `kmgeld_neu = gefahren * Kilometertarif_neu`
- `km100geld_neu = über100 * km100_neu`
- `km500geld_neu = über500 * km500_neu`

---

## 4. Zeitbasierte Berechnung

Die Zeitkosten werden im 30-Minuten-Raster berechnet.

### 4.1 Zählweise

- `datab` = Start (Datum + Zeit) als `Double`
- `datbis` = Ende (Datum + Zeit) als `Double`
- Solange `datab` noch nicht das Ende erreicht, wird in Schritten von `halbe_std` (30 Minuten) erhöht.

Dabei werden drei Stundentypen gezählt:

1. **Nachtstunden** (`std_nacht`)
2. **Kurzzeitstunden** unter Langzeitschwelle (`std_unter`)
3. **Langzeitstunden** über Langzeitschwelle (`std_über`)

### 4.2 Nachtstunden

```text
Case 0 To 800, 2330
    std_nacht = std_nacht + 0.5
```

- Nachtzeit ist definiert über Uhrzeiten zwischen 00:00–08:00 und 23:30.

### 4.3 Tag- / Langzeitstunden

Alle anderen Zeiten werden als Tagstunden gezählt (`std_unter_über`).

- Solange `std_unter_über <= globlangtarif` → Zählung als `std_unter`
- Danach → Zählung als `std_über`

### 4.4 Zeitkostenberechnung

- `zeitgeld_unter8 = zeittarif_unter8 * std_unter`
- `zeitgeld_über8 = zeittarif_über8 * std_über`
- `zeitgeld_nacht = zeittarif_nacht * std_nacht`

---

## 5. Buchungsgebühr und Gesamtsumme

### 5.1 Buchungsgebühr

- Wenn `globgebühr = True`, wird eine feste Grundgebühr `globgebdm` zur Summe addiert.

### 5.2 Gesamtsumme

Die Gesamtkosten setzen sich zusammen aus:

```text
Summe = kmgeld_neu
      + km100geld_neu
      + km500geld_neu
      + zeitgeld_unter8
      + zeitgeld_über8
      + zeitgeld_nacht
      + gebühren
```

---

## 6. Plausibilitätsprüfungen (Warnungen)

Nach der Berechnung gibt es zwei wesentliche Plausibilitätschecks:

1. **Hohe Gesamtsumme**
   - Wenn `Summe >= 1000` → Hinweis: "Achtung: Fahrtsumme ok?"
2. **Ungewöhnlich hohe Durchschnittsgeschwindigkeit**
   - Durchschnittsgeschwindigkeit = `gefahren / (Dauer in Stunden)`
   - Wenn diese >= 50 km/h → Hinweis: „Achtung: Durchschnittliche km/h … Erfassungsfehler?“

---

## 7. Ausgabe / Druck

- Über die Schaltfläche `erg_druck` wird der Bericht "Abrechnung Info" in der Vorschau geöffnet.
- Dies dient vermutlich als Grundlage für die Abrechnung gegenüber den Nutzer*innen.

---

Diese Zusammenfassung soll helfen, die Logik später in einen Web-Tarifrechner oder eine andere Anwendung zu übertragen, ohne den gesamten VBA-Code lesen zu müssen.