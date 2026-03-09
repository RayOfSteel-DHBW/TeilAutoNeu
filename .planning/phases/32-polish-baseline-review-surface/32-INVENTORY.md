# Phase 32 Inventory

Updated: 2026-03-09

## Design A

Directory: `site/epic/a/`
Local review base path: `/site/epic/a/`

HTML pages:
- `index.html`
- `preise.html`
- `fahrzeuge.html`
- `geschaeftskunden.html`
- `ueber-uns.html`
- `mitglied-werden.html`
- `impressum.html`
- `datenschutz.html`

Support files:
- `style.css`
- `base.css`
- `tailwind-out.css`
- `js/nav.js`
- `js/pricing.js`
- `js/fleet-map.js`
- `js/accordion.js`

Inventory status: complete. No expected file gaps found.

## Design B

Directory: `site/epic/b/`
Local review base path: `/site/epic/b/`

HTML pages:
- `index.html`
- `preise.html`
- `fahrzeuge.html`
- `geschaeftskunden.html`
- `ueber-uns.html`
- `mitglied-werden.html`
- `impressum.html`
- `datenschutz.html`

Support files:
- `style.css`
- `base.css`
- `tailwind-out.css`
- `js/nav.js`
- `js/pricing.js`
- `js/accordion.js`

Inventory status: complete. No expected page gaps found. Design B does not currently carry a local `fleet-map.js` copy, so map behavior stays tied to the existing page wiring and must be validated in the polish loop rather than assumed from directory symmetry.

## Design C

Directory: `site/epic/c/`
Local review base path: `/site/epic/c/`

HTML pages:
- `index.html`
- `preise.html`
- `fahrzeuge.html`
- `geschaeftskunden.html`
- `ueber-uns.html`
- `mitglied-werden.html`
- `impressum.html`
- `datenschutz.html`

Support files:
- `js/nav.js`
- `js/pricing.js`
- `js/fleet-map.js`
- `js/accordion.js`

Inventory status: complete for expected HTML pages. Design C remains the CDN/Tailwind-inline variant with no local `style.css`, `base.css`, or `tailwind-out.css`, which Phase 35 should treat as a known implementation pattern rather than a missing-file defect.

## Shared Notes

- All three skins have the full 8-page HTML inventory required for the v1.4 polish loops.
- Browser-bearing review work must stay serial because all three skins share one local browser resource.
- The canonical comparison surface still needs to be implemented separately from the skin directories.
