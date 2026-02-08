```prompt
---
name: "gsd:onboard-investigate"
description: "Investigate multiple sources (live codebase, reference repos, planning docs) for multi-source project onboarding"
tools:
  [
    "readFile",
    "runInTerminal",
    "editFiles",
    "createFile",
    "createDirectory",
    "listDirectory",
    "fileSearch",
    "textSearch",
    "runSubagent",
  ]
---

<objective>

Investigate all inputs for a project onboarding when multiple conflicting or overlapping sources exist (e.g., current live site + student draft + owner planning docs).

Combines:

- **Standard codebase mapping** (`.gsd/codebase/`) for the primary codebase via `gsd-codebase-mapper`
- **Content inventory** for code sources (pages, routes, assets, components)
- **Copyright/licensing scan** for reference sources with reuse restrictions
- **Document extraction** for planning docs, notes, specs

Each source gets dedicated investigation agent(s) who write documents directly. The orchestrator collects confirmations only.

**Creates:**

- `.gsd/codebase/` — 7 standard GSD codebase docs from the primary source
- `.gsd/sources/{label}/` — investigation docs per additional source

**After this command:** Run `/onboard-consolidate.md` to merge findings.

</objective>

<execution_context>

../skills/map-codebase/SKILL.md
../instructions/ui-brand.instructions.md

</execution_context>

<context>

$ARGUMENTS — optional source paths in format: `label=path label=path`

Example: `draft=../student-site notes=./docs/planning`

If not provided, the orchestrator will ask interactively.

**The current working directory is always treated as the primary codebase source.**

</context>

<process>

## Phase 1: Setup

**Check for existing investigation:**

```bash
ls .gsd/sources/ 2>/dev/null && echo "SOURCES_EXIST" || echo "NO_SOURCES"
ls .gsd/codebase/ 2>/dev/null && echo "CODEBASE_EXIST" || echo "NO_CODEBASE"
```

**If `.gsd/sources/` exists:** Offer: Refresh (delete and re-investigate) / Skip (keep existing) / Update specific sources.

**If `.gsd/codebase/` exists:** Offer: Refresh / Skip (reuse existing map).

**Initialize git if needed:**

```bash
if [ -d .git ] || [ -f .git ]; then
    echo "Git repo exists"
else
    git init
fi
```

**Create base directory:**

```bash
mkdir -p .gsd/sources
```

**Resolve model profile:**

```bash
MODEL_PROFILE=$(cat .gsd/config.json 2>/dev/null | grep -o '"model_profile"[[:space:]]*:[[:space:]]*"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"' || echo "balanced")
```

Default to "balanced" if not set.

**Model lookup table:**

| Agent               | quality | balanced | budget |
| ------------------- | ------- | -------- | ------ |
| gsd-codebase-mapper | sonnet  | haiku    | haiku  |
| content-investigator| sonnet  | sonnet   | haiku  |
| copyright-auditor   | sonnet  | sonnet   | haiku  |
| docs-extractor      | opus    | sonnet   | sonnet |

## Phase 2: Map Primary Codebase

**If `.gsd/codebase/` does not exist (or user chose Refresh):**

Display stage banner:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► MAPPING PRIMARY CODEBASE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Follow the **map-codebase** skill (`../skills/map-codebase/SKILL.md`):

1. Create `.gsd/codebase/` directory
2. Spawn 4 parallel `gsd-codebase-mapper` agents (tech, arch, quality, concerns)
3. Collect confirmations (file + line count only)
4. Verify all 7 documents exist

**Additionally**, spawn 1 general-purpose agent for primary codebase content inventory:

```
Task(prompt="
<role>
You are a content investigator. You examine a website codebase and produce a structured content inventory.
</role>

<source>
Path: . (current directory — the primary codebase)
Label: primary
</source>

<task>
Examine the codebase. Produce a structured inventory covering:

1. **Pages/Routes**: Every page with URL path, title/heading, purpose, key content blocks
2. **Assets**: Every image, font, video, PDF — filename, location, dimensions/size where detectable, which page uses it
3. **Text Content**: Significant real text blocks (not lorem ipsum) with location and brief excerpt
4. **Navigation**: Site navigation structure (menus, footer links, cross-page links)
5. **Components**: Reusable UI components/partials with purpose

Write to: .gsd/sources/primary/CONTENT-INVENTORY.md

Format:

# Content Inventory: Primary Codebase

**Scanned:** [date]
**Source:** . (current directory)
**Files examined:** [count]

## Pages/Routes

| Path | Title | Purpose | Key Content |
|------|-------|---------|-------------|

## Assets

| File | Location | Used On | Type | Notes |
|------|----------|---------|------|-------|

## Text Content

| Location | Excerpt | Context |
|----------|---------|---------|

## Navigation Structure

[describe menu hierarchy, footer, cross-links]

## Reusable Components

| Component | Location | Purpose |
|-----------|----------|---------|

Return confirmation only (files written + line counts).
</task>
", description="Inventory primary content")
```

**If `.gsd/codebase/` already exists and user chose Skip:** Continue to Phase 3.

## Phase 3: Identify Additional Sources

**Display stage banner:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► IDENTIFYING SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**If $ARGUMENTS provided:** Parse `label=path` pairs. Validate each path exists. For each source, proceed to classification below.

**If $ARGUMENTS not provided:** Ask interactively (freeform, NOT HumanAgent MCP):

"Besides the code in this directory, what other inputs should I investigate? These could be:
- **Reference codebases** — a draft someone built, an open-source template, a competitor
- **Planning documents** — notes, PRDs, specs, design briefs, meeting notes, requirements docs
- **Design assets** — Figma exports, wireframes, screenshots, brand guides

Point me at each one with a short label and the folder path."

Wait for response. Parse into source list.

**For each source, classify using HumanAgent MCP (HumanAgent_Chat):**

Question 1 — Type:

- header: "{label}"
- question: "What kind of source is `{path}`?"
- options:
  - "Code/website" — Will analyze architecture, structure, stack, content
  - "Documents/notes" — Will extract goals, requirements, decisions, constraints
  - "Mixed" — Both code and planning docs

Question 2 — Precedence:

- header: "Authority"
- question: "How authoritative is `{label}`?"
- options:
  - "Authoritative" — Owner-approved decisions, treat as ground truth
  - "Baseline" — Factual reference for what currently exists
  - "Ideas-only" — Inspiration only, nothing is binding

Question 3 — Copyright (only for code/mixed sources):

- header: "Copyright"
- question: "Any copyright or licensing concerns with `{label}`?"
- options:
  - "Yes — scan for restricted assets" — Will flag images, fonts, code that can't be reused
  - "No — everything is freely usable"

Store per source: `{ label, path, type, precedence, copyright_scan }`

## Phase 4: Investigate Each Additional Source

**Display stage banner:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► INVESTIGATING SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

◆ Spawning investigation agents...
```

For each source, create directory:

```bash
mkdir -p ".gsd/sources/{label}"
```

**Spawn agents per source in parallel. Agent selection by source type:**

---

### For type = "code" or "mixed" (code part):

**Agent A: Architecture mapper** (`gsd-codebase-mapper`, arch focus)

```
Task(prompt="First, read .github/agents/gsd-codebase-mapper.agent.md for your role and instructions.

Focus: arch

Analyze the codebase at {path} for architecture and directory structure.

Write these documents to .gsd/sources/{label}/:
- ARCHITECTURE.md — Pattern, layers, data flow, abstractions, entry points
- STRUCTURE.md — Directory layout, key locations, naming conventions

IMPORTANT: The output path is .gsd/sources/{label}/, NOT .gsd/codebase/.

Explore thoroughly. Write documents directly using templates from your agent instructions. Return confirmation only.
", subagent_type="gsd-codebase-mapper", model="{mapper_model}", description="Map {label} architecture")
```

**Agent B: Content inventory** (general-purpose)

```
Task(prompt="
<role>
You are a content investigator. You examine a website codebase and produce a structured content inventory.
</role>

<source>
Path: {path}
Label: {label}
</source>

<task>
Examine every relevant file in {path}. Produce a structured inventory:

1. **Pages/Routes**: Every page with URL path, title/heading, purpose, key content blocks
2. **Assets**: Every image, font, video, PDF — filename, location, dimensions/size where detectable, which page uses it
3. **Text Content**: Significant real text blocks (not lorem) with location and brief excerpt
4. **Navigation**: Site navigation structure
5. **Components**: Reusable UI components/partials with purpose

Write to: .gsd/sources/{label}/CONTENT-INVENTORY.md

Return confirmation only (files written + line counts).
</task>
", model="{content_model}", description="Inventory {label} content")
```

---

### For copyright_scan = true, additionally spawn:

**Agent C: Copyright auditor** (general-purpose)

```
Task(prompt="
<role>
You are a copyright and licensing auditor for a website project.
</role>

<source>
Path: {path}
Label: {label}
</source>

<task>
Scan {path} for copyright and licensing concerns:

1. **Images**: Check every image file. Flag any that:
   - Have metadata suggesting a commercial source (stock photo watermarks, EXIF copyright fields)
   - Have filenames suggesting stock sources (shutterstock_, istockphoto_, getty_, unsplash_, pexels_)
   - Are not clearly original, owner-provided, or CC0
   - Cannot be verified as properly licensed

2. **Fonts**: Check for commercial font files (.woff, .woff2, .ttf, .otf). Flag any requiring licenses.

3. **Code/Libraries**: Check vendored code for restrictive licenses (not MIT/Apache/BSD).

4. **Text/Copy**: Flag text blocks that appear copied from identifiable external sources.

For each flagged item record:
- File path
- Why it's flagged
- Risk level: HIGH (clearly restricted), MEDIUM (uncertain), LOW (probably fine)
- Recommendation: REPLACE / VERIFY LICENSE / SAFE

Write to: .gsd/sources/{label}/COPYRIGHT-FLAGS.md

Format:

# Copyright & Licensing Flags: {label}

**Scanned:** [date]
**Source:** {path}

## Summary

- Total items scanned: [N]
- HIGH risk: [N]
- MEDIUM risk: [N]
- LOW risk: [N]

## HIGH Risk

| File | Reason | Recommendation |
|------|--------|----------------|

## MEDIUM Risk

| File | Reason | Recommendation |
|------|--------|----------------|

## LOW Risk

| File | Reason | Recommendation |
|------|--------|----------------|

## Confirmed Safe

[List items/patterns confirmed safe to reuse]

Return confirmation only (files written + line counts).
</task>
", model="{content_model}", description="Copyright scan {label}")
```

---

### For type = "docs" or "mixed" (docs part):

**Agent D: Document extractor** (general-purpose)

```
Task(prompt="
<role>
You are a requirements and planning document analyst for software project onboarding.
</role>

<source>
Path: {path}
Label: {label}
Precedence: {precedence}
</source>

<task>
Read every document file in {path} — markdown, text, docx, pdf, html, or any readable format.

For each file, extract and categorize ALL relevant information into:

1. **Goals & Vision**: What the project/product should achieve. QUOTE exact passages.
2. **Hard Constraints**: Non-negotiable requirements (budget, timeline, tech, regulatory). QUOTE exact passages.
3. **Design Preferences**: UI/UX preferences, brand guidelines, aesthetic direction. QUOTE and describe.
4. **Content Decisions**: What content exists, what's changing, what's new. Be specific.
5. **Feature Requests**: Specific functionality mentioned. QUOTE and categorize.
6. **Open Questions**: Ambiguities, contradictions within these docs, things needing clarification.
7. **Stakeholder Context**: Who's involved, who decides what, target audience info.

**CRITICAL:** Quote exact passages from source documents with the source filename. Do not paraphrase — the user must be able to verify against the original.

**CRITICAL:** If documents contradict each other, flag it explicitly in Open Questions.

Write to: .gsd/sources/{label}/EXTRACTED.md

Format:

# Extracted Planning Context: {label}

**Scanned:** [date]
**Source:** {path}
**Precedence:** {precedence}
**Documents read:**
- [list each file with brief description]

## Goals & Vision

> [exact quote] — *filename*

## Hard Constraints

> [exact quote] — *filename*

## Design Preferences

> [exact quote] — *filename*

## Content Decisions

[structured list]

## Feature Requests

| Feature | Source | Quote | Priority (if stated) |
|---------|--------|-------|---------------------|

## Open Questions

| Question | Why It's Unclear | Source Files |
|----------|-----------------|-------------|

## Stakeholder Context

[structured info]

Return confirmation only (files written + line counts).
</task>
", model="{docs_model}", description="Extract {label} planning context")
```

---

**Parallelization:** All agents for all sources run in parallel. Wait for all to complete.

## Phase 5: Verify & Commit

**Verify output:**

```bash
echo "=== Primary Codebase ==="
wc -l .gsd/codebase/*.md 2>/dev/null

echo "=== Primary Content ==="
wc -l .gsd/sources/primary/*.md 2>/dev/null

echo "=== Additional Sources ==="
for dir in .gsd/sources/*/; do
  [ "$dir" = ".gsd/sources/primary/" ] && continue
  echo "--- $(basename $dir) ---"
  wc -l "$dir"*.md 2>/dev/null
done
```

Check for empty or missing expected documents. Note any agent failures.

**Commit:**

```bash
git add .gsd/codebase/ .gsd/sources/
git commit -m "$(cat <<'EOF'
docs: investigate onboarding sources

Primary codebase: .gsd/codebase/ (7 docs) + .gsd/sources/primary/
Additional sources: [list each label]
EOF
)"
```

**Present summary:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► SOURCE INVESTIGATION COMPLETE ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Primary codebase** (.gsd/codebase/)
[list 7 docs + line counts]

**Primary content** (.gsd/sources/primary/)
[CONTENT-INVENTORY.md + line count]

**Additional sources:**
[per source: label (precedence) — docs written + line counts]

[If any copyright flags found:]
⚠️ COPYRIGHT FLAGS FOUND — review:
  .gsd/sources/{label}/COPYRIGHT-FLAGS.md

───────────────────────────────────────────────────────

## ▶ Next Up

/onboard-consolidate.md — merge findings and resolve conflicts

<sub>/clear first → fresh context window</sub>

───────────────────────────────────────────────────────
```

</process>

<success_criteria>

- [ ] Primary codebase mapped to `.gsd/codebase/` (7 documents)
- [ ] Primary content inventory in `.gsd/sources/primary/`
- [ ] Each additional source investigated in `.gsd/sources/{label}/`
- [ ] Code sources have: ARCHITECTURE.md, STRUCTURE.md, CONTENT-INVENTORY.md
- [ ] Doc sources have: EXTRACTED.md
- [ ] Copyright-flagged sources have: COPYRIGHT-FLAGS.md
- [ ] All agents completed successfully
- [ ] Output committed to git
- [ ] User knows to run `/onboard-consolidate.md` next

</success_criteria>
```
