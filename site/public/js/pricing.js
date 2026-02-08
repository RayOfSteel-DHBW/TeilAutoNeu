/**
 * pricing.js – Fetches pricing.json and populates the Preise page sections.
 * Uses DOM APIs (createElement / textContent) to avoid injecting raw HTML.
 */
(function () {
  "use strict";

  var PRICING_URL = "./data/pricing.json";

  // ---- helpers ----

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "className") {
          node.className = attrs[k];
        } else {
          node.setAttribute(k, attrs[k]);
        }
      });
    }
    if (typeof children === "string") {
      node.textContent = children;
    } else if (Array.isArray(children)) {
      children.forEach(function (c) {
        if (c) node.appendChild(c);
      });
    }
    return node;
  }

  function clear(container) {
    while (container.firstChild) container.removeChild(container.firstChild);
  }

  // ---- renderers ----

  function renderValues(container, data) {
    clear(container);

    var heading = el("h2", { className: "text-2xl font-display" }, "Kostenprinzip");
    var desc = el("p", { className: "mt-3 text-brand-ink/80" },
      "Bei teilAuto zahlen Sie eine " + data.membership.annual_fee +
      " sowie eine Kaution " + data.membership.deposit +
      ". Jede Fahrt setzt sich zusammen aus:"
    );

    var listItems = [
      data.usage.booking_fee,
      data.usage.time_rate,
      data.usage.km_rate
    ];

    var ul = el("ul", { className: "mt-4 space-y-2" });
    listItems.forEach(function (text) {
      var li = el("li", { className: "flex items-start gap-3 text-brand-ink/80" });
      var bullet = el("span", { className: "mt-1 text-brand-primary", "aria-hidden": "true" }, "\u2713");
      var span = el("span", null, text);
      li.appendChild(bullet);
      li.appendChild(span);
      ul.appendChild(li);
    });

    var includesHeading = el("p", { className: "mt-4 text-sm font-semibold text-brand-ink" }, "Im Preis enthalten:");
    var includesList = el("p", { className: "text-sm text-brand-ink/70" }, data.usage.includes.join(", "));

    container.appendChild(heading);
    container.appendChild(desc);
    container.appendChild(ul);
    container.appendChild(includesHeading);
    container.appendChild(includesList);
  }

  function renderClasses(container, data) {
    clear(container);

    var heading = el("h2", { className: "text-2xl font-display" }, "Unsere Fahrzeugklassen");

    var grid = el("div", { className: "mt-4 grid gap-4 sm:grid-cols-2" });

    data.classes.forEach(function (cls) {
      var card = el("div", { className: "rounded-2xl bg-brand-surface p-4" });
      var title = el("p", { className: "text-lg font-display" }, cls.id + " \u2013 " + cls.label);
      var note = el("p", { className: "mt-1 text-sm text-brand-ink/70" }, cls.notes);
      card.appendChild(title);
      card.appendChild(note);
      grid.appendChild(card);
    });

    container.appendChild(heading);
    container.appendChild(grid);
  }

  function renderExamples(container, data) {
    clear(container);

    var heading = el("h2", { className: "text-2xl font-display" }, "Beispielrechnungen");
    var intro = el("p", { className: "mt-3 text-brand-ink/80" },
      "Wie viel eine typische Fahrt ungefaehr kostet? Hier zwei Beispiele zur Orientierung."
    );

    container.appendChild(heading);
    container.appendChild(intro);

    var grid = el("div", { className: "mt-4 grid gap-4 sm:grid-cols-2" });

    data.examples.forEach(function (ex) {
      var card = el("div", { className: "rounded-2xl bg-brand-surface p-4" });
      var title = el("p", { className: "font-semibold text-brand-ink" }, ex.title);
      var inputs = el("p", { className: "mt-1 text-sm text-brand-ink/70" }, ex.inputs);
      var output = el("p", { className: "mt-2 text-sm font-semibold text-brand-primary" }, ex.output);
      card.appendChild(title);
      card.appendChild(inputs);
      card.appendChild(output);
      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  function renderQuernutzung(container, data) {
    clear(container);

    var heading = el("h2", { className: "text-2xl font-display" }, "Groessere Fahrzeuge");
    var text = el("p", { className: "mt-3 text-brand-ink/80" }, data.quernutzung);
    container.appendChild(heading);
    container.appendChild(text);
  }

  function renderDisclaimer(container, data) {
    clear(container);

    var icon = el("span", { className: "text-brand-primary", "aria-hidden": "true" }, "\u2139\uFE0F");
    var heading = el("p", { className: "flex items-center gap-2 font-semibold text-brand-ink" });
    heading.appendChild(icon);
    heading.appendChild(el("span", null, "Hinweis"));

    var text = el("p", { className: "mt-2 text-sm text-brand-ink/70" }, data.disclaimer);
    var updated = el("p", { className: "mt-1 text-xs text-brand-ink/50" }, "Stand: " + data.updated);

    container.appendChild(heading);
    container.appendChild(text);
    container.appendChild(updated);
  }

  function showError(container, message) {
    clear(container);
    var p = el("p", { className: "text-brand-ink/60" }, message);
    container.appendChild(p);
  }

  // ---- main ----

  var sections = {
    values: document.getElementById("pricing-values"),
    classes: document.getElementById("pricing-classes"),
    examples: document.getElementById("pricing-examples"),
    quernutzung: document.getElementById("pricing-quernutzung"),
    disclaimer: document.getElementById("pricing-disclaimer")
  };

  // Only run on the Preise page
  if (!sections.values) return;

  fetch(PRICING_URL)
    .then(function (response) {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    })
    .then(function (data) {
      renderValues(sections.values, data);
      renderClasses(sections.classes, data);
      renderExamples(sections.examples, data);
      renderQuernutzung(sections.quernutzung, data);
      renderDisclaimer(sections.disclaimer, data);
    })
    .catch(function () {
      var fallback = "Preisinformationen sind derzeit nicht verfuegbar. Bitte kontaktieren Sie uns telefonisch.";
      Object.keys(sections).forEach(function (key) {
        if (sections[key]) showError(sections[key], fallback);
      });
    });
})();
