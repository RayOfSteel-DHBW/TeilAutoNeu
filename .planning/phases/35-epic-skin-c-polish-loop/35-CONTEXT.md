# Phase 35: Epic Skin C Polish Loop - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning
**Source:** User instructions for the sequential v1.4 polish milestone plus active v1.4 docs

<domain>
## Phase Boundary

- Polish only `site/epic/c/`.
- First confirm all 8 Design C pages still exist. If implementation is incomplete, stop immediately and report that blocker.
- If implementation is complete, review all 8 Design C pages at `375px`, `768px`, and `1280px` with Playwright.
- Check both visual execution and adherence to the v1.0 requirements floor in `.planning/milestones/v1.0-REQUIREMENTS.md`.
- Before each fix pass, write a TODO list with page, location, and issue.
- Fix everything found in that pass in one batch.
- Repeat `review -> TODO -> fix -> verify` until the pass is clean or 5 iterations have run.
- If 5 iterations are reached and non-nitpick issues remain, stop and wait for user input before another loop block.
- Stay out of shared picker/review-surface work. Shared comparison surface ownership belongs to Phases 32 and 36.

</domain>

<decisions>
## Locked Decisions

### Execution Model

- This is sequential shared-browser work. Do not parallelize with Phases 33 or 34.
- Do not start if any other browser-driven phase is active.
- If the phase finishes clean and no blocker remains, mark it ready for Phase 36.
- Stop only on a hard blocker, missing implementation, or the 5-iteration cap with unresolved non-nitpick issues.

### Scope Guardrails

- Only edit files inside `site/epic/c/` plus phase-local notes/logs under `.planning/phases/35-epic-skin-c-polish-loop/`.
- Do not redesign Design C. Keep its structural identity intact.
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
- `.planning/phases/29-epic-skin-c/29-RESEARCH.md`
- `.planning/phases/29-epic-skin-c/29-05-SUMMARY.md`

## Page Inventory

1. `site/epic/c/index.html`
2. `site/epic/c/preise.html`
3. `site/epic/c/fahrzeuge.html`
4. `site/epic/c/geschaeftskunden.html`
5. `site/epic/c/ueber-uns.html`
6. `site/epic/c/mitglied-werden.html`
7. `site/epic/c/impressum.html`
8. `site/epic/c/datenschutz.html`

</specifics>

<deferred>
## Deferred / Out Of Scope

- Shared baseline ownership from Phase 32
- Phase 33 and Phase 34 polish work
- Shared comparison publish work from Phase 36

</deferred>

---

*Phase: 35-epic-skin-c-polish-loop*
*Context gathered: 2026-03-09 from user instructions and active v1.4 docs*
