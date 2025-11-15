Für den Agent, kompakt und ohne Erklärtext:

---

### 1. Gesamt-Idee

* **Single Source of Truth**: ein Git-Repo mit CouchCMS-Templates (PHP).
* **Prod** auf STRATO: PHP + CouchCMS (dynamisch).
* **Preview/Backup** (z. B. GitHub Pages): automatisiert generierte **statische Kopie** der von Couch gerenderten Seiten.

---

### 2. Stack

* Backend/Hosting:

  * PHP 8.x (STRATO Webhosting)
  * CouchCMS + MySQL/MariaDB
* Frontend:

  * TailwindCSS (lokaler Build → `main.css`)
  * Alpine.js (UI-Interaktionen)
  * Leaflet + OpenStreetMap (Karte)
* Tools:

  * Node + npm (Tailwind)
  * Git + GitHub
  * beliebige Sprache für Export-Script (Node oder Python ok)

---

### 3. Verzeichnisstruktur (Vorschlag)

```text
projekt-root/
  package.json
  tailwind.config.cjs
  src/
    input.css                     # Tailwind Input

  # dynamische, couch-basierte Seite (Strato)
  public/
    layout.php
    index.php
    faq.php
    standorte.php
    partials/
      nav.php
      footer.php
    assets/
      css/
        main.css
      js/
        app.js
      img/
        ...
    couch/                        # CouchCMS Core

  # statischer Export (Output des Scripts)
  dist/                           # generierte HTMLs für GitHub Pages o.Ä.
    index.html
    faq/index.html
    standorte/index.html
    assets/                       # Kopie aus public/assets
      css/
      js/
      img/
```

---

### 4. Tailwind-Konfiguration

* Ein Tailwind-Projekt, ein Build, der `public/assets/css/main.css` schreibt.

`package.json` (Beispiel):

```json
{
  "scripts": {
    "build:css": "tailwindcss -i ./src/input.css -o ./public/assets/css/main.css --minify",
    "watch:css": "tailwindcss -i ./src/input.css -o ./public/assets/css/main.css --watch"
  }
}
```

`tailwind.config.cjs`:

```js
module.exports = {
  content: [
    "./public/**/*.php"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
```

---

### 5. Workflow-Stufen

#### Stage 1 – Lokale Entwicklung (VS Code)

* Arbeiten in `public/` mit PHP + CouchCMS (lokaler PHP-Server) oder Dev-Instanz auf STRATO.
* Tailwind:

  * `npm run watch:css` → schreibt `public/assets/css/main.css`.
* Live Preview:

  * Lokale PHP-Ausführung (z. B. `php -S localhost:8000 -t public`) oder Dev-URL bei STRATO.
* JS (Alpine, Leaflet) direkt in `public/layout.php` (inkl. `<script src="...alpine...">` etc.).

#### Stage 2 – Statischer Export (z. B. für GitHub Pages)

* Export-Script (Node/Python) erzeugt aus Couch-basierten Seiten statische HTMLs in `dist/`.

Pseudo-Konfiguration (z. B. `routes.json`):

```json
[
  { "path": "/", "file": "index.html" },
  { "path": "/faq", "file": "faq/index.html" },
  { "path": "/standorte", "file": "standorte/index.html" }
]
```

Pseudo-Algorithmus (Node/Python egal):

1. `routes.json` laden.
2. Für jede Route:

   * URL = `https://dev-domain.example.com` + `path`.
   * HTTP GET → `html`.
   * `html` in `dist/<file>` speichern (inkl. Zwischenordner anlegen).
3. `public/assets` nach `dist/assets` kopieren (CSS/JS/Bilder).

* `dist/` kann direkt von GitHub Pages oder jedem beliebigen Static Host ausgeliefert werden.

#### Stage 3 – Final Deployment zu STRATO

* Deploy-Ziel: Inhalt von `public/` inkl. `couch/` via sFTP zu STRATO hochladen.
* Vor Deployment:

  * `npm run build:css`
  * sicherstellen, dass CouchCMS richtig konfiguriert (`config.php`, DB-Zugang).
* STRATO:

  * PHP-Version auf 8.x im Panel.
  * Domain auf `public/`-Root zeigen lassen (oder entsprechendes Webroot).

---

### 6. Wichtigste Punkte

* **Nur ein Templatesatz** in `public/` (PHP + Couch).
* **Export-Script** generiert daraus `dist/` als rein statisches HTML-Output.
* **Git-Repo** bleibt alleinige Wahrheit (Templates, Tailwind-Konfiguration, Script).
* GitHub Pages nutzt `dist/`, STRATO nutzt `public/`.
