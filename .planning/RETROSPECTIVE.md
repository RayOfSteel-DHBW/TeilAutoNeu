# Project Retrospective

*A living document updated after each milestone. Lessons feed forward into future planning.*

## Milestone: v1.0 — MVP

**Shipped:** 2026-02-26
**Phases:** 11 | **Plans:** 25 | **Timeline:** 17 days

### What Was Built
- Complete 9-page static website for teilAuto Mössingen carsharing cooperative
- JSON-driven pricing page with value-first framing and "noch offen" badges
- Interactive MapLibre GL JS parking map with 2 active + 1 planned location
- Mobile-first responsive design with slide-down hamburger nav and fluid headings
- §5 DDG Impressum and Art. 13 DSGVO Datenschutzerklärung (simplified, no-tracking)
- Phone-only membership funnel scoped to a single page (mitglied-werden.html)

### What Worked
- **Phases 1-5 velocity was excellent** — 15 plans in 2 days. Build pipeline, UX, content, pricing, and fleet map all shipped rapidly
- **Gap closure pattern** — milestone audit at Phase 6 caught 22 requirement gaps; phases 7-10 systematically closed them
- **CSS-first approach for nav** — using `peer-aria-[expanded=true]` instead of JS class toggle produced more resilient, accessible navigation
- **JSON data separation** — pricing.json as single source of truth made the pricing page maintainable without HTML edits
- **Tera templates** — base.html extends pattern kept all pages consistent with minimal duplication

### What Was Inefficient
- **Umlaut omission** — all German text was authored with ASCII digraphs (ue/ae/oe) through Phases 1-6, requiring a dedicated Phase 7 to fix ~280 substitutions across 15 files. Should have used UTF-8 from the start
- **Phone CTA scope creep** — Phase 6 added phone CTAs to pages that shouldn't have them (ueber-uns, geschaeftskunden), violating CONT-10. Required Phase 9 to remove them
- **Missing verification on early phases** — Phases 1, 2, 5 had no VERIFICATION.md, allowing issues to accumulate until the milestone audit
- **Owner review checkpoint not conducted** — 06-04 prepared a review checklist but the actual owner review never happened. Several "noch offen" values remain unconfirmed
- **OG tag duplication** — base.html default OG tags conflicted with per-page overrides on 4 pages; required Phase 9 cleanup

### Patterns Established
- UTF-8 umlauts in all German text; ASCII digraphs only in URLs, filenames, and CSS identifiers
- Phone CTA scoped exclusively to mitglied-werden.html (not sprinkled across content pages)
- "noch offen" amber badge pattern for unconfirmed owner-supplied values
- CSS placeholder cards for copyright-flagged images pending owner replacement
- DOM-only rendering (createElement/textContent) for dynamic content — no innerHTML
- Sustainability content distributed naturally across relevant pages, not a standalone page
- data-track attributes on interactive elements as V2-ready analytics hooks

### Key Lessons
1. **Author content correctly from day one** — fixing systematic text encoding issues (umlauts) across a full site is costly. Better to set encoding conventions before Phase 1
2. **Run milestone audits earlier** — the v1.0 audit at Phase 6 found 22 gaps. Running it after Phase 3 or 4 would have caught issues sooner
3. **Verify each phase** — missing VERIFICATION.md files allowed silent regressions. Every phase should verify its own requirements
4. **Scope CTA placement as a cross-cutting concern** — phone number placement should be a project-level constraint, not left to individual phase decisions
5. **Owner-in-the-loop items need explicit tracking** — "noch offen" values, vehicle photos, Impressum fields should be tracked as blocking items for production launch

### Cost Observations
- Model mix: primarily opus for planning/execution, balanced profile
- Execution time: ~2 hours total plan execution across 25 plans
- Notable: gap closure phases (7-10) were very fast — mechanical corrections averaging 2-14 minutes per plan

---

## Milestone: v1.4 — Epic Skin Polish

**Shipped:** 2026-03-11
**Phases:** 5 | **Plans:** 5 | **Timeline:** 3 days

### What Was Built
- Shared comparison entry page at `site/epic/index.html`
- Serial polish loop closeout for Designs A, B, and C at 375px, 768px, and 1280px
- Owner-facing comparison instructions for the shared A/B/C picker flow
- Milestone audit documenting one accepted blocker-grade gap in Design B CTA wiring

### What Worked
- **Shared-contract split was effective** — Phase 32 owned comparison-surface rules, letting 33-35 stay directory-local
- **Serial browser discipline held** — the polish loops and shared comparison verification did not trample each other
- **Short polish loops were efficient** — each design phase closed in one bounded pass instead of dragging across many micro-fixes
- **Comparison surface stayed truthful** — one branch, stable A/B/C paths, and explicit owner instructions all lined up cleanly

### What Was Inefficient
- **Phase 34 over-claimed readiness** — Design B shipped with a still-broken `tel:` target even though the loop declared a clean pass
- **Summary/traceability consistency drifted** — some summaries lacked `requirements-completed`, making milestone aggregation noisier than it should be
- **Roadmap checkbox drift survived phase completion** — archived milestone bookkeeping still needed manual cleanup after execution

### Patterns Established
- Shared review infrastructure belongs in dedicated shared phases, not skin-local polish phases
- Browser-driven polish work must stay serialized when one local browser session is shared
- Milestone audits are valuable even after all phase verifications pass; they catch cross-phase contradictions

### Key Lessons
1. **A clean pass claim is not enough** — critical CTA paths need explicit wiring checks, not just visible-copy checks
2. **Shared-resource bottlenecks are manageable when named early** — the serial-browser rule prevented execution chaos
3. **Archive automation still needs human correction in mixed-history repos** — milestone tools over-counted this repo because older milestone structure remains irregular

### Cost Observations
- Model mix: planning/execution primarily on sonnet-level workflows with local manual verification
- Timeline: fast finish once Phase 32 locked scope; most work compressed into 2026-03-09 through 2026-03-11
- Notable: the final milestone audit was the step that surfaced the only blocker-grade shipped gap

---

## Cross-Milestone Trends

### Process Evolution

| Milestone | Timeline | Phases | Key Change |
|-----------|----------|--------|------------|
| v1.0      | 17 days  | 11     | Initial milestone — established gap closure pattern via audit |
| v1.4      | 3 days   | 5      | Shared comparison contract + serial polish loops + milestone audit caught cross-phase CTA mismatch |

### Top Lessons (Verified Across Milestones)

1. Author content with correct encoding from day one
2. Run milestone audits at mid-milestone, not just at the end
3. Every phase needs verification — missing VERIFICATION.md allows silent regressions
4. Cross-phase milestone audits catch real bugs even when individual phases all report passed
