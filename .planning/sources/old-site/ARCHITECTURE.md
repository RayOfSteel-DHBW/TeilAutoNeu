# Architecture Analysis: old-site

**Analyzed:** 2026-02-07
**Source:** `references/old/website_alt/`
**Total files:** 74

## Site Structure: Frame-Based Multi-Page

The old website uses **HTML framesets** as its primary layout mechanism — a pattern typical of late-1990s/early-2000s web design.

### Entry Flow

```
index.htm (splash page)
  └─ click logo → start.htm (frameset)
                    ├─ LEFT frame (200px): menue.htm
                    └─ RIGHT frame (81%):  vorteil.html (default)
```

1. **`index.htm`** — Splash/landing page. Displays the teilAuto logo centered on a tiled background. Clicking the logo navigates to `start.htm`. Shows tagline "Das Auto auf Abruf" and pricing teaser.
2. **`start.htm`** — The main frameset container. Two columns: left menu (200px), right content (81%). Default right-frame content is `vorteil.html`.
3. **`startaktuell.htm`** — Alternate frameset entry point. Same structure as `start.htm` but loads `aktuell.html` instead of `vorteil.html` in the content frame.

### Navigation Architecture

**`menue.htm`** serves as the persistent left-side navigation. It contains **image-based rollover buttons** that target the right frame (`name="info"`):

| Menu Button | Target File | Frame Target |
|---|---|---|
| Vorteile | `vorteil.html` | `info` |
| Allgemeine Infos | `info.htm` | `info` |
| So funktioniert's | `funktion.htm` | `info` |
| Kosten | `kosten.htm` | `info` |
| Preisvergleich | *(button present but link removed)* | — |
| Stellplätze | `stellpl.htm` | `info` |
| Fuhrpark | `auto.htm` | `info` |
| Links | `link.htm` | `info` |
| Kontakt | `kont.htm` | **popup window** (280×300) |
| Aktuelles | `aktuell.html` | `info` |
| Impressum | `Impressum.html` | `info` |

**Key quirk:** The Kontakt button opens `kont.htm` in a **JavaScript popup window** (280×300px, resizable, scrollable) rather than loading in the frame.

### Orphan/Legacy Pages

| File | Status | Notes |
|---|---|---|
| `topallgem.htm` | Orphan | Header frame titled "Allgemeine Informationen" — not referenced by any frameset |
| `topfukt.htm` | Orphan | Header frame titled "So einfach ist Carsharing" — not referenced |
| `kostenalt.htm` | Legacy | Old pricing in DM (Deutsche Mark), pre-Euro. 522 lines. Replaced by `kosten.htm` |
| `preisver.htm` | Semi-orphan | Cost comparison page. Menu button exists but link appears stripped |
| `startaktuell.htm` | Alternate entry | Loads `aktuell.html` as default content instead of `vorteil.html` |
| `Daten.htm` | Orphan | Simple page with a download link to `Test.txt` (file not present) |

The existence of `topallgem.htm` and `topfukt.htm` suggests an **earlier three-row frameset design** (top header + left menu + content) that was simplified to a two-column layout.

## Technology Stack

### Generation Tool
- **Adobe GoLive 4 and 5** — indicated by `<meta name="generator">` tags and proprietary `<csobj>`, `<csactions>`, `<csactiondict>`, `<csscriptdict>` elements

### HTML/CSS
- **Plain HTML 4.01 Transitional / XHTML 1.0 Transitional** (varies by page)
- **Encoding:** Mix of `windows-1252` and `iso-8859-1` (German umlauts throughout)
- **One shared CSS file:** `format.css` — minimal, only defines `h1`, `h2`, and `p` styles (3 rules total)
- **Table-based layouts** everywhere — complex nested tables with `<spacer>` elements (Netscape-era)
- **Inline styling** with `<font>` tags, `bgcolor` attributes, `align` attributes

### JavaScript
- **Adobe GoLive CSAction framework** — proprietary JS for:
  - Image rollovers (`CSIShow`, `CSILoad`) on menu buttons
  - Status bar text on hover
  - Popup window opening (`CSOpenWindow` for contact page)
  - Link navigation (`CSGotoLink`)
- **No modern JS** — no DOM manipulation, no AJAX, no frameworks
- All JS is inline in `<script>` blocks within `<csscriptdict>` and `<csactiondict>` tags

### Dynamic Elements
- **None server-side** — purely static HTML files
- **Client-side only:**
  - Image swap rollovers on menu (normal/hover GIF pairs)
  - Popup window for contact information
  - Status bar text updates on hover
- **No forms, no search, no database interaction**

### Assets
- **Background:** `grafik/hint.jpg` — tiled background texture used on almost every page
- **Logo:** `grafik/talogo.gif` — used in index.htm, menue.htm, topallgem.htm, topfukt.htm, info.htm
- **Menu buttons:** 14 GIF pairs in `grafik/menue/` (normal `*ot.gif` + hover `*ov.gif`)
- **Vehicle photos:** Various JPGs (`Agila.jpg`, `Twingo.jpeg`, `Astra_19_car.jpg`, `15_ia.jpg`, `15_id.jpg`)
- **Gallery:** `Bild1.jpg` through `Bild8.jpg` with `_gross` (large) variants
- **Misc:** `email6.gif` (email icon), `infoSommer.gif`, `SommerAnz.gif` (seasonal promotions)

## Page Linking Map

```
index.htm ──→ start.htm (frameset)
               ├── menue.htm (persistent nav)
               │    ├──→ vorteil.html     [frame: info]
               │    ├──→ info.htm         [frame: info]
               │    ├──→ funktion.htm     [frame: info]
               │    ├──→ kosten.htm       [frame: info]
               │    ├──→ stellpl.htm      [frame: info]
               │    ├──→ auto.htm         [frame: info]
               │    ├──→ link.htm         [frame: info]
               │    ├──→ aktuell.html     [frame: info]
               │    ├──→ Impressum.html   [frame: info]
               │    └──→ kont.htm         [popup window]
               └── vorteil.html (default content)

External links (from link.htm):
  → www.carsharing.de
  → www.teilAuto-tuebingen.de
```

## Design Characteristics

- **Visual style:** Light/white background texture, blue (#336699) accent tables, Verdana/Arial fonts
- **Layout width:** Optimized for **1024×768** (stated on index.htm)
- **Browser target:** "Netscape 4.0" (stated on index.htm)
- **No responsive design** — fixed-pixel table layouts
- **No accessibility features** — no alt text on most images, no semantic HTML
- **German-language only** — no i18n support
