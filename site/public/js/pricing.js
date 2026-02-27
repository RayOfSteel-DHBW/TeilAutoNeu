/**
 * pricing.js – Fetches pricing.json and populates the Preise page sections.
 *
 * Rendering rules:
 *   - DOM APIs only (createElement / textContent / appendChild)
 *   - NO innerHTML, NO insertAdjacentHTML
 *   - "TODO" values get an amber badge so placeholders are visible
 */
(function () {
  "use strict";

  var PRICING_URL = "./data/pricing.json";

  // ---- helpers ----

  /** Create an element with optional attributes and children/text. */
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

  /** Remove all children from a container. */
  function clear(container) {
    while (container.firstChild) container.removeChild(container.firstChild);
  }

  /** True when a value is the placeholder string "TODO". */
  function isTodo(val) {
    return typeof val === "string" && val.toLowerCase().trim() === "todo";
  }

  /**
   * Return either a plain text node or an amber "TODO" badge,
   * depending on the value.
   */
  function valueOrBadge(val, prefix) {
    if (isTodo(val)) {
      var badge = el(
        "span",
        { className: "inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800" },
        "TODO"
      );
      if (prefix) {
        var wrapper = el("span", { className: "inline-flex items-center gap-2" });
        wrapper.appendChild(document.createTextNode(prefix + " "));
        wrapper.appendChild(badge);
        return wrapper;
      }
      return badge;
    }
    return document.createTextNode(prefix ? prefix + " " + val : val);
  }

  /** Format a number as EUR with German comma (e.g. 2.05 → "2,05 EUR"). */
  function eur(n) {
    return String(n).replace(".", ",") + "\u00a0EUR";
  }

  // ---- section renderers ----

  /** #pricing-values — membership fees + usage overview */
  function renderValues(container, data) {
    clear(container);

    container.appendChild(
      el("h2", { className: "text-2xl font-display" }, "Mitgliedschaft & Nutzung")
    );

    // Membership row (Kaution demoted to footnote below)
    var memberGrid = el("div", { className: "mt-4 grid gap-4 sm:grid-cols-2" });

    var feeCard = el("div", { className: "rounded-2xl bg-brand-surface p-4" });
    feeCard.appendChild(el("p", { className: "text-sm font-semibold text-brand-ink" }, "Jahresbeitrag"));
    feeCard.appendChild(el("p", { className: "mt-1 text-lg font-display" }));
    feeCard.lastChild.appendChild(valueOrBadge(data.membership.annual_fee));
    memberGrid.appendChild(feeCard);

    container.appendChild(memberGrid);

    // Usage overview
    container.appendChild(
      el("h3", { className: "mt-6 text-xl font-display" }, "Pro Fahrt")
    );

    var usageItems = [
      { label: "Buchungsgebühr", value: data.usage.booking_fee },
      { label: "Zeittarif", value: data.usage.time_rate_example },
      { label: "Kilometertarif", value: data.usage.km_rate_example }
    ];

    var ul = el("ul", { className: "mt-3 space-y-2" });
    usageItems.forEach(function (item) {
      var li = el("li", { className: "flex items-start gap-3 text-brand-ink/80" });
      li.appendChild(el("span", { className: "mt-0.5 text-brand-primary", "aria-hidden": "true" }, "\u2713"));
      var content = el("span");
      content.appendChild(el("span", { className: "font-semibold" }, item.label + ": "));
      content.appendChild(valueOrBadge(item.value));
      li.appendChild(content);
      ul.appendChild(li);
    });
    container.appendChild(ul);

    // Includes
    container.appendChild(
      el("p", { className: "mt-4 text-sm font-semibold text-brand-ink" }, "Im Preis enthalten:")
    );
    container.appendChild(
      el("p", { className: "text-sm text-brand-ink/70" }, data.usage.includes.join(", "))
    );

    // Kaution footnote (demoted from prominent card)
    var kautionNote = el("p", {
      className: "mt-4 text-xs text-brand-ink/50 border-t border-brand-primary/20 pt-4"
    });
    kautionNote.appendChild(document.createTextNode("Kaution: "));
    kautionNote.appendChild(valueOrBadge(data.membership.deposit));
    kautionNote.appendChild(document.createTextNode(" \u2014 wird bei Austritt verzinst zur\u00fcckgezahlt."));
    container.appendChild(kautionNote);
  }

  /** #pricing-classes — vehicle class cards with rate tables */
  function renderClasses(container, data) {
    clear(container);

    container.appendChild(
      el("h2", { className: "text-2xl font-display" }, "Unsere Fahrzeugklassen")
    );
    container.appendChild(
      el("p", { className: "mt-2 text-brand-ink/80" },
        "Aktuell bieten wir zwei Klassen an. Größere Fahrzeuge sind über Quernutzung verfügbar (siehe unten)."
      )
    );

    var grid = el("div", { className: "mt-4 grid gap-6 sm:grid-cols-2" });

    data.classes.forEach(function (cls) {
      var card = el("div", { className: "rounded-2xl bg-brand-surface p-5" });

      // Title
      card.appendChild(
        el("p", { className: "text-lg font-display" }, "Klasse " + cls.id + " \u2013 " + cls.label)
      );
      card.appendChild(
        el("p", { className: "mt-1 text-sm text-brand-ink/70" }, cls.notes)
      );

      // Rate table
      var rates = [
        ["1. Stunde", eur(cls.stunde_eur) + "/Std."],
        ["Folgestunde", eur(cls.folgestunde_eur) + "/Std."],
        ["Nachtstunde", eur(cls.nachtstunde_eur) + "/Std."],
        ["Kilometer", eur(cls.km_eur) + "/km"]
      ];

      var table = el("dl", { className: "mt-3 space-y-1 text-sm" });
      rates.forEach(function (pair) {
        var row = el("div", { className: "flex justify-between" });
        row.appendChild(el("dt", { className: "text-brand-ink/70" }, pair[0]));
        row.appendChild(el("dd", { className: "font-semibold text-brand-ink" }, pair[1]));
        table.appendChild(row);
      });

      card.appendChild(table);
      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  /** #pricing-examples — sample trip calculations */
  function renderExamples(container, data) {
    clear(container);

    container.appendChild(
      el("h2", { className: "text-2xl font-display" }, "Beispielrechnungen")
    );
    container.appendChild(
      el("p", { className: "mt-2 text-brand-ink/80" },
        "Wie viel kostet eine typische Fahrt ungefähr? Zwei Beispiele zur Orientierung."
      )
    );

    var grid = el("div", { className: "mt-4 grid gap-6 sm:grid-cols-2" });

    data.examples.forEach(function (ex) {
      var card = el("div", { className: "rounded-2xl bg-brand-surface p-5" });

      card.appendChild(
        el("p", { className: "font-semibold text-brand-ink" }, ex.title)
      );
      card.appendChild(
        el("p", { className: "mt-1 text-sm text-brand-ink/70" }, ex.inputs)
      );

      // Labeled breakdown (or fallback to raw formula)
      if (ex.labeled_lines && ex.labeled_lines.length > 0) {
        var breakdown = el("dl", { className: "mt-2 space-y-1 text-sm" });
        ex.labeled_lines.forEach(function (line) {
          var row = el("div", { className: "flex justify-between gap-4" });
          row.appendChild(el("dt", { className: "text-brand-ink/70" }, line.label));
          row.appendChild(el("dd", { className: "font-semibold text-brand-ink" }, line.value));
          breakdown.appendChild(row);
        });
        card.appendChild(breakdown);
      } else {
        card.appendChild(
          el("p", { className: "mt-2 text-xs font-mono text-brand-ink/50" }, ex.calculation)
        );
      }

      // Result
      card.appendChild(
        el("p", { className: "mt-2 text-lg font-display text-brand-primary" }, ex.output)
      );

      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  /** #pricing-quernutzung — larger vehicles via partner network */
  function renderQuernutzung(container, data) {
    clear(container);

    container.appendChild(
      el("h2", { className: "text-2xl font-display" }, "Größere Fahrzeuge")
    );
    container.appendChild(
      el("p", { className: "mt-3 text-brand-ink/80" }, data.quernutzung)
    );
  }

  /** #pricing-disclaimer — legal notice, rendered last */
  function renderDisclaimer(container, data) {
    clear(container);

    var heading = el("p", { className: "flex items-center gap-2 font-semibold text-brand-ink" });
    heading.appendChild(el("span", { className: "text-brand-primary", "aria-hidden": "true" }, "\u24D8"));
    heading.appendChild(el("span", null, "Hinweis"));
    container.appendChild(heading);

    container.appendChild(
      el("p", { className: "mt-2 text-sm text-brand-ink/70" }, data.disclaimer)
    );
    container.appendChild(
      el("p", { className: "mt-2 text-xs text-brand-ink/50 italic" }, data.source_note)
    );
    container.appendChild(
      el("p", { className: "mt-1 text-xs text-brand-ink/50" }, "Stand: " + data.updated)
    );
  }

  /** Show a fallback message when fetch fails. */
  function showError(container, message) {
    clear(container);
    container.appendChild(el("p", { className: "text-brand-ink/60" }, message));
  }

  // ---- main ----

  var sections = {
    values: document.getElementById("pricing-values"),
    classes: document.getElementById("pricing-classes"),
    examples: document.getElementById("pricing-examples"),
    quernutzung: document.getElementById("pricing-quernutzung"),
    disclaimer: document.getElementById("pricing-disclaimer")
  };

  // Only run on the Preise page (guard for other pages that also load this script)
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
      var fallback =
        "Preisinformationen konnten nicht geladen werden. " +
        "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.";
      Object.keys(sections).forEach(function (key) {
        if (sections[key]) showError(sections[key], fallback);
      });
    });
})();
