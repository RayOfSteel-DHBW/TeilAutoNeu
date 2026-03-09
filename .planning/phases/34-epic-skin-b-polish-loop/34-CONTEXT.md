# Phase 34: Epic Skin B Polish Loop - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning
**Source:** User instructions for the sequential v1.4 polish milestone plus active v1.4 docs

<domain>
## Phase Boundary

- Polish only `site/epic/b/`.
- Review all 8 Design B pages at `375px`, `768px`, and `1280px` with Playwright.
- Check both visual execution and adherence to the v1.0 requirements floor in `.planning/milestones/v1.0-REQUIREMENTS.md`.
- Before each fix pass, write a TODO list with page, location, and issue.
- Fix everything found in that pass in one batch.
- Repeat `review -> TODO -> fix -> verify` until the pass is clean or 5 iterations have run.
- If 5 iterations are reached and non-nitpick issues remain, stop and wait for user input before another loop block.
- Stay out of shared picker/review-surface work. Shared comparison surface ownership belongs to Phases 32 and 36.
- If a blocker is truly shared, report it as a blocker instead of silently fixing it from this phase.

</domain>

<decisions>
## Locked Decisions

### Execution Model

- This is sequential shared-browser work. Do not parallelize with Phases 33 or 35.
- Do not start if any other browser-driven phase is active.
- If the phase finishes clean and no blocker remains, mark it ready for Phase 35.
- Stop only on a hard blocker, missing implementation, or the 5-iteration cap with unresolved non-nitpick issues.

### Scope Guardrails

- Only edit files inside `site/epic/b/` plus phase-local notes/logs under `.planning/phases/34-epic-skin-b-polish-loop/`.
- Do not redesign Design B. Keep its structural identity intact.
- Do not create, repurpose, or patch the shared start page/version picker from this phase.

</decisions>

<specifics>
## Specific References

- `.planning/v1.4-MILESTONE-BRIEF.md`
- `.planning/v1.4-REQUIREMENTS-DRAFT.md`
- `.planning/v1.4-ROADMAP-DRAFT.md`
- `.planning/v1.4-EXECUTION-PROMPTS.md`
- `.planning/milestones/v1.0-REQUIREMENTS.md`
- `.planning/milestones/v1.0-ROADMAP.md`
- `.planning/phases/28-epic-skin-b/28-RESEARCH.md`
- `.planning/phases/28-epic-skin-b/28-05-SUMMARY.md`

## Page Inventory

1. `site/epic/b/index.html`
2. `site/epic/b/preise.html`
3. `site/epic/b/fahrzeuge.html`
4. `site/epic/b/geschaeftskunden.html`
5. `site/epic/b/ueber-uns.html`
6. `site/epic/b/mitglied-werden.html`
7. `site/epic/b/impressum.html`
8. `site/epic/b/datenschutz.html`

</specifics>

<deferred>
## Deferred / Out Of Scope

- Shared baseline ownership from Phase 32
- Phase 33 and Phase 35 polish work
- Shared comparison publish work from Phase 36

</deferred>

---

*Phase: 34-epic-skin-b-polish-loop*
*Context gathered: 2026-03-09 from user instructions and active v1.4 docs*
