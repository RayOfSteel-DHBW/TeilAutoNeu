```prompt
---
name: "gsd:onboard-consolidate"
description: "Merge multi-source investigation into CONSOLIDATED.md for project initialization"
tools:
  [
    "readFile",
    "runInTerminal",
    "editFiles",
    "createFile",
    "listDirectory",
    "textSearch",
  ]
---

<objective>

Merge investigation outputs from `/onboard-investigate.md` into a single truth document that feeds into `gsd:new-project`.

Reads `.planning/codebase/` and `.planning/sources/*/`, applies precedence rules, resolves conflicts, flags copyright issues, and produces a consolidated analysis.

**Creates:**

- `.planning/sources/CONSOLIDATED.md` — single truth document with resolved conflicts and clear open questions

**After this command:** Run `gsd:new-project`. During questioning, point the agent at `.planning/sources/CONSOLIDATED.md` and tell it to focus questions on the Open Questions section.

</objective>

<execution_context>

../instructions/ui-brand.instructions.md

</execution_context>

<context>

@.planning/codebase/ARCHITECTURE.md
@.planning/codebase/STRUCTURE.md
@.planning/codebase/STACK.md

**Additional source docs loaded dynamically from `.planning/sources/*/`**

</context>

<process>

## Phase 1: Discover Investigation Output

```bash
echo "=== Codebase Docs ==="
ls .planning/codebase/*.md 2>/dev/null

echo "=== Source Directories ==="
ls -d .planning/sources/*/ 2>/dev/null

echo "=== All Source Docs ==="
find .planning/sources/ -name "*.md" -not -name "CONSOLIDATED.md" | sort
```

**If `.planning/codebase/` is empty or missing:** Error — run `/onboard-investigate.md` first.

**If `.planning/sources/` has no subdirectories:** Warning — no additional sources found. CONSOLIDATED.md will reflect primary codebase only. Continue anyway.

## Phase 2: Load All Investigation Documents

Read every `.md` file discovered in Phase 1.

Build a structured understanding of:

- **Primary codebase** (from `.planning/codebase/`): what the code currently IS — architecture, stack, structure, conventions, integrations, testing, concerns
- **Primary content** (from `.planning/sources/primary/`): what pages, assets, text, components exist
- **Each additional source** (from `.planning/sources/{label}/`): what it contributes, at what precedence level

**Precedence loading:** Each `EXTRACTED.md` has a `**Precedence:**` field set during investigation. Use this to rank sources:

| Precedence      | Meaning                                          | Conflict behavior            |
| --------------- | ------------------------------------------------ | ---------------------------- |
| **Authoritative** | Owner-approved decisions, ground truth           | Wins over baseline and ideas |
| **Baseline**      | Factual reference for what currently exists      | Wins over ideas              |
| **Ideas-only**    | Inspiration, nothing binding                     | Always yields to others      |

The **primary codebase** is always treated as **Baseline** precedence (it represents current reality).

## Phase 3: Synthesize & Resolve Conflicts

Work through every topic that appears across multiple sources. Apply these rules strictly:

**Rule 1 — Authoritative source states something explicitly:**
That's the answer. Record it with source attribution.

**Rule 2 — No authoritative source weighs in, baseline and ideas-only disagree:**
Go with baseline (it reflects reality). Note the ideas-only alternative as a consideration.

**Rule 3 — Multiple authoritative sources disagree:**
FLAG AS OPEN QUESTION. Do not resolve — the owner must decide.

**Rule 4 — Copyright flag on any item:**
Mark with ⚠️. If an ideas-only source uses a flagged asset in a layout/design idea, keep the idea but tag ALL referenced assets as "REPLACE: needs licensed alternative."

**Rule 5 — Something appears ONLY in one source:**
Include it, tagged with source label and precedence level.

**Rule 6 — Open questions from individual source extractions:**
Carry forward into the consolidated Open Questions section. Deduplicate across sources.

## Phase 4: Write CONSOLIDATED.md

Write `.planning/sources/CONSOLIDATED.md`:

```markdown
# Consolidated Source Analysis

**Generated:** [date]

**Sources analyzed:**

| Label | Type | Precedence | Location |
|-------|------|------------|----------|
| (primary) | codebase | baseline | .planning/codebase/ + .planning/sources/primary/ |
| {label} | {type} | {precedence} | .planning/sources/{label}/ |
| ... | ... | ... | ... |

**Precedence order:** Authoritative > Baseline > Ideas-only

---

## 1. Project Goal & Vision

[Synthesized from authoritative sources. If no authoritative source states a clear goal, synthesize from all sources and flag for confirmation in Open Questions.]

**Sources:** [which docs contributed to this section]

## 2. Current State (What Exists Today)

### Architecture
[Summary from .planning/codebase/ARCHITECTURE.md — key patterns, layers, entry points]

### Technology Stack
[Summary from .planning/codebase/STACK.md — languages, frameworks, key dependencies]

### Pages & Content
[From primary CONTENT-INVENTORY.md — page count, key pages, content volume]

### Known Issues
[From .planning/codebase/CONCERNS.md — major tech debt, fragile areas]

**Sources:** .planning/codebase/*, .planning/sources/primary/

## 3. Design Inputs & Reusable Ideas

[From ideas-only and reference sources. Include ONLY patterns, layouts, concepts — never copyright-flagged assets.]

| Idea | Source | Usable? | Notes |
|------|--------|---------|-------|
| [layout pattern] | {label} | ✓ | [why it's useful] |
| [component idea] | {label} | ⚠️ | Uses flagged assets — keep concept, replace assets |
| ... | ... | ... | ... |

⚠️ **Copyright-restricted items excluded.** See per-source COPYRIGHT-FLAGS.md for full audit.

## 4. Requirements (Extracted & Merged)

[Merged from all EXTRACTED.md files, deduplicated, grouped by confidence level]

### From Authoritative Sources (locked — treat as committed)

- [requirement] — *{source label}*
- ...

### From Baseline (confirmed by current implementation)

- [requirement] — *{source label}*
- ...

### From Ideas-Only (needs owner confirmation before committing)

- [requirement] — *{source label}*
- ...

## 5. Hard Constraints

[All constraints from all sources, deduplicated. Copyright policy is always included.]

- **Copyright:** No reuse of flagged assets from reference sources. Only owner-supplied or properly licensed assets permitted.
- [constraint] — *{source label}*
- ...

## 6. Conflicts Found & Resolved

| # | Topic | Source A | Source A Says | Source B | Source B Says | Resolution | Rule Applied |
|---|-------|---------|--------------|---------|--------------|------------|-------------|
| 1 | ... | ... | ... | ... | ... | ... | Rule [N] |
| ... | | | | | | | |

[If no conflicts found: "No direct conflicts detected between sources."]

## 7. Open Questions (Need Owner Decision)

| # | Question | Why It Matters | Conflicting Sources | Default If No Answer |
|---|----------|---------------|--------------------|--------------------|
| 1 | ... | ... | ... | ... |
| ... | | | | |

**These questions should be answered during `gsd:new-project` questioning phase.**

---

_Consolidated: [date]_
_Precedence: Authoritative > Baseline > Ideas-only_
_Run `gsd:new-project` next — point it at this file during questioning._
```

## Phase 5: Commit & Present

**Commit:**

```bash
git add .planning/sources/CONSOLIDATED.md
git commit -m "$(cat <<'EOF'
docs: consolidate onboarding sources

Sources: [list each label with precedence]
Conflicts resolved: [N]
Open questions: [N]
EOF
)"
```

**Present summary:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► SOURCES CONSOLIDATED ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Sources merged:** [N]
**Conflicts resolved:** [N]
**Open questions for owner:** [N]
```

[If copyright flags exist:]

```
⚠️ [N] copyright-restricted items excluded from reusable ideas
   Review: .planning/sources/{label}/COPYRIGHT-FLAGS.md
```

[If open questions > 0:]

```
📋 [N] questions need your input during project initialization
   Preview: .planning/sources/CONSOLIDATED.md § Open Questions
```

```
───────────────────────────────────────────────────────

## ▶ Next Up

Run `gsd:new-project` to initialize the project.

During questioning, tell the agent:

  "Read .planning/sources/CONSOLIDATED.md — it has the full context
   from all sources already analyzed and merged.
   Focus your questions on the Open Questions section
   (§7 in CONSOLIDATED.md) — those are what still need my input."

<sub>/clear first → fresh context window</sub>

───────────────────────────────────────────────────────

**Also available:**
- Review sources: cat .planning/sources/CONSOLIDATED.md
- Re-investigate: /onboard-investigate.md
- Edit CONSOLIDATED.md manually before proceeding

───────────────────────────────────────────────────────
```

</process>

<success_criteria>

- [ ] All investigation docs from `.planning/codebase/` and `.planning/sources/*/` read
- [ ] Precedence rules applied: Authoritative > Baseline > Ideas-only
- [ ] Every conflict between sources explicitly resolved or flagged as open question
- [ ] Copyright-restricted items excluded from reusable ideas section
- [ ] CONSOLIDATED.md written with all 7 sections
- [ ] Output committed to git
- [ ] User knows to run `gsd:new-project` next with CONSOLIDATED.md as context

</success_criteria>
```
