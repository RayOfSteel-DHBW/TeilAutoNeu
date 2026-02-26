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

## Cross-Milestone Trends

### Process Evolution

| Milestone | Timeline | Phases | Key Change |
|-----------|----------|--------|------------|
| v1.0      | 17 days  | 11     | Initial milestone — established gap closure pattern via audit |

### Top Lessons (Verified Across Milestones)

1. Author content with correct encoding from day one
2. Run milestone audits at mid-milestone, not just at the end
3. Every phase needs verification — missing VERIFICATION.md allows silent regressions
