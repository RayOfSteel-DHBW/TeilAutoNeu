/**
 * pricing.js – Fetches pricing.json and populates the Preise page sections.
 *
 * Rendering rules:
 *   - DOM APIs only (createElement / textContent / appendChild)
 *   - NO innerHTML, NO insertAdjacentHTML
 *   - Unknown shared pricing placeholders render as truthful fallback copy
 */
(function () {
  "use strict";

  var PRICING_URL = "../../public/data/pricing.json";

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
   * Return either a plain text node or a truthful fallback string,
   * depending on whether the shared data still carries a placeholder.
   */
  function valueOrBadge(val, prefix, fallback) {
    if (isTodo(val)) {
      return document.createTextNode(prefix ? prefix + " " + fallback : fallback);
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
    feeCard.lastChild.appendChild(valueOrBadge(data.membership.annual_fee, "", "im pers\u00f6nlichen Gespr\u00e4ch"));
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
      var fallback = item.label === "Buchungsgeb\u00fchr"
        ? "im pers\u00f6nlichen Gespr\u00e4ch"
        : "auf Anfrage";
      content.appendChild(valueOrBadge(item.value, "", fallback));
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

    // Kaution footnote — soft description, no specific amount
    container.appendChild(
      el("p", {
        className: "mt-4 text-xs text-brand-ink/50 border-t border-brand-muted pt-4"
      }, "Zus\u00e4tzlich wird bei Abschluss einer Mitgliedschaft eine kleine Kaution f\u00e4llig. Diese wird bei Austritt inkl. Zinsen zur\u00fcckgezahlt.")
    );
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
    if (data.source_note) {
      container.appendChild(
        el("p", { className: "mt-2 text-xs text-brand-ink/50 italic" }, data.source_note)
      );
    }
    if (data.updated) {
      container.appendChild(
        el("p", { className: "mt-1 text-xs text-brand-ink/50" }, "Stand: " + data.updated)
      );
    }
  }

  /** Show a fallback message when fetch fails. */
  function showError(container, message) {
    clear(container);
    container.appendChild(el("p", { className: "text-brand-ink/60" }, message));
  }

  // ---- main ----

  var sections = {
    values: document.getElementById("pricing-values"),
    examples: document.getElementById("pricing-examples"),
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
      renderExamples(sections.examples, data);
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
