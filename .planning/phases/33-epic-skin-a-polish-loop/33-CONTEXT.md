# Phase 33: Epic Skin A Polish Loop - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning
**Source:** User instructions for `/gsd:plan-phase 33 --auto` plus prepared v1.4 milestone docs

<domain>
## Phase Boundary

- Polish only `site/epic/a/`.
- Review all 8 Design A pages at `375px`, `768px`, and `1280px` with Playwright.
- Check both visual execution and adherence to the v1.0 requirements floor in `.planning/milestones/v1.0-REQUIREMENTS.md`.
- Before each fix pass, write a TODO list with page, location, and issue.
- Fix everything found in that pass in one batch.
- Repeat `review -> TODO -> fix -> verify` until the pass is clean or 5 iterations have run.
- If 5 iterations are reached and non-nitpick issues remain, stop and wait for user input before another loop block.
- Stay out of shared picker/review-surface work. Shared comparison surface ownership belongs to Phases 32 and 36.
- If a blocker is truly shared (repo drift, shared asset break, planning drift), report it as a blocker instead of silently fixing it from this phase.

</domain>

<decisions>
## Locked Decisions

### Execution Model

- This is sequential shared-browser work. Do not parallelize with Phases 34 or 35.
- Do not start if any other browser-driven phase is active.
- Do not progress into Phase 34 or any later phase in auto-advance mode from this phase.
- Treat the current `.planning/STATE.md` note (`Phase 29` in progress) as a warning that auto-start is unsafe until preflight confirms the browser is free.

### Scope Guardrails

- Only edit files inside `site/epic/a/` plus phase-local notes/logs under `.planning/phases/33-epic-skin-a-polish-loop/`.
- Do not redesign Design A. Keep its structural identity intact: full-bleed hero, editorial rule separators, left-aligned reading flow, dark sticky nav, local JS copies.
- Do not create, repurpose, or patch the shared start page/version picker from this phase.

### Review Standard

- Use Playwright for screenshot and interaction review.
- Audit every page at all three breakpoints on every executed iteration.
- Check visual quality and page-owned v1.0 compliance together, not as separate phases.
- Treat requirement misses, runtime failures, visible layout defects, broken links, and confusing conversion copy as non-nitpick issues.

### Codex Discretion

- Choose the exact TODO log format as long as each pass clearly records page, location, and issue before any fixes begin.
- Choose the local static server implementation as long as it preserves direct `.html` paths.
- Batch fixes by iteration, not by individual issue.

</decisions>

<specifics>
## Specific References

- Shared milestone brief: `.planning/v1.4-MILESTONE-BRIEF.md`
- Draft requirements: `.planning/v1.4-REQUIREMENTS-DRAFT.md`
- Draft roadmap: `.planning/v1.4-ROADMAP-DRAFT.md`
- Prompt scaffold: `.planning/v1.4-EXECUTION-PROMPTS.md`
- v1.0 requirements floor: `.planning/milestones/v1.0-REQUIREMENTS.md`
- v1.0 roadmap context: `.planning/milestones/v1.0-ROADMAP.md`
- Design A research baseline: `.planning/phases/27-epic-skin-a/27-RESEARCH.md`
- Prior Design A audit evidence: `.planning/phases/27-epic-skin-a/27-05-SUMMARY.md`, `.planning/phases/27-epic-skin-a/27-07-SUMMARY.md`

## Page Inventory

1. `site/epic/a/index.html`
2. `site/epic/a/preise.html`
3. `site/epic/a/fahrzeuge.html`
4. `site/epic/a/geschaeftskunden.html`
5. `site/epic/a/ueber-uns.html`
6. `site/epic/a/mitglied-werden.html`
7. `site/epic/a/impressum.html`
8. `site/epic/a/datenschutz.html`

## Current Planning Caveats

- `.planning/ROADMAP.md` lists Phase 33 in the v1.4 summary but does not yet contain a detailed `### Phase 33:` section, so the GSD roadmap parser cannot validate or auto-route this phase reliably.
- `.planning/STATE.md` still marks Phase 29 as in progress, so Phase 33 may be planned now but must not assume it can start executing immediately.

</specifics>

<deferred>
## Deferred / Out Of Scope

- Phase 32 shared baseline and review-surface ownership work
- Phase 34 and Phase 35 polish loops
- Phase 36 comparison publish and owner review pack
- Any shared repo or planning repair that is not required to review `site/epic/a/`

</deferred>

---

*Phase: 33-epic-skin-a-polish-loop*
*Context gathered: 2026-03-09 from direct user instructions and prepared v1.4 docs*
