# V2 Draft: Datenschutz Tracking/Analytics Sections

**Source:** Removed from datenschutz.html during Phase 11 simplification (2026-02-25)
**Purpose:** Ready-made German DSGVO wording for reintroducing analytics/tracking in V2
**Related todo:** `2026-02-24-v2-readd-full-datenschutz-consent-analytics-sections.md`

---

## Geplante Webanalyse Section

```html
<div class="space-y-3">
  <h2 class="text-xl font-semibold">Geplante Webanalyse (künftig)</h2>
  <p class="text-brand-ink/80 leading-relaxed">
    Für eine zukünftige Version dieser Website ist der Einsatz von Google Analytics geplant,
    um das Nutzerverhalten anonymisiert zu analysieren und das Angebot zu verbessern.
    Der Einsatz erfolgt ausschließlich nach Ihrer ausdrücklichen Einwilligung über
    ein Cookie-Banner vor dem Laden des Analyse-Skripts.
  </p>
  <p class="text-brand-ink/80 leading-relaxed">
    Derzeit werden keine Analyse-Cookies gesetzt und kein Nutzerverhalten aufgezeichnet.
    Rechtsgrundlage (künftig): Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
  </p>
</div>
```

## Consent Withdrawal Paragraph (from "Ihre Rechte")

```html
<p class="mt-3 text-brand-ink/80 leading-relaxed">
  Soweit die Verarbeitung auf Ihrer Einwilligung beruht (künftig: Google Analytics),
  können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
</p>
```

## Datenübertragbarkeit Right (Art. 20)

```html
<li class="flex items-start gap-3">
  <span class="mt-0.5 text-brand-primary font-semibold shrink-0" aria-hidden="true">&#10003;</span>
  <span><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können Ihre Daten in einem gängigen Format erhalten.</span>
</li>
```

---

## Notes for V2 Implementation

- Update "Geplante Webanalyse" heading — remove "künftig" / "geplant" when actually implementing
- Consent withdrawal paragraph should reference the actual tool (Google Analytics, Plausible, etc.)
- Datenübertragbarkeit right becomes applicable again if consent-based processing is added
- Consider whether V2 uses Google Analytics or a privacy-friendly alternative (Plausible, Fathom)
- Cookie banner implementation needed before analytics script loads
