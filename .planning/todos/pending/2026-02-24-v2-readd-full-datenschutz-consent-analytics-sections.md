# V2: Re-add full Datenschutzerklaerung consent & analytics sections

**Created:** 2026-02-24
**Context:** Phase 11 simplifies the privacy page by removing the "Geplante Webanalyse" section since no tracking exists yet. When analytics (e.g. Google Analytics) are actually implemented in V2, the full GDPR-compliant sections need to be added back.

## What to re-add

Reference: `references/deep-research-report.md` (Analytics/Cookie Consent and Consent Management sections)

- Cookie consent banner (opt-in before any analytics scripts load)
- Google Analytics / chosen analytics tool disclosure section
- Consent legal basis (Art. 6 Abs. 1 lit. a DSGVO)
- Consent withdrawal mechanism (as easy to revoke as to give)
- Granular consent options (analytics vs marketing separated)
- Update "Ihre Rechte" section to reference consent withdrawal for analytics

## Key legal requirements (from deep-research report)

- Prior opt-in consent required for ALL non-essential cookies/tracking (TTDSG §25)
- Even "cookie-less" analytics that process IP addresses need consent
- Consent must be via clear affirmative action — no pre-checked boxes
- Block all analytics scripts by default, activate only after consent
