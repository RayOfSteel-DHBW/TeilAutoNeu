---
description: "Model profile configuration for GSD agents - quality vs token spend balancing"
applyTo: "**/config.json"
---

# Model Profiles

Model profiles control which Copilot model each GSD agent uses. This allows balancing quality vs token spend.

## Profile Definitions

| Agent                    | `quality` | `balanced` | `budget` |
| ------------------------ | --------- | ---------- | -------- |
| gsd-planner              | Claude Opus 4.6 (copilot) | GPT-5.2 (copilot) | Claude Sonnet 4.5 (copilot) |
| gsd-roadmapper           | GPT-5.2 (copilot) | GPT-5.2 (copilot) | Claude Sonnet 4.5 (copilot) |
| gsd-executor             | GPT-5.2-Codex (copilot) | GPT-5.2-Codex (copilot) | Claude Sonnet 4.5 (copilot) |
| gsd-phase-researcher     | GPT-5.2-Codex (copilot) | GPT-5.2 (copilot) | Claude Haiku 4.5 (copilot) |
| gsd-project-researcher   | GPT-5.2-Codex (copilot) | GPT-5.2 (copilot) | Claude Haiku 4.5 (copilot) |
| gsd-research-synthesizer | GPT-5.2 (copilot) | GPT-5.2 (copilot) | Claude Haiku 4.5 (copilot) |
| gsd-debugger             | GPT-5.2-Codex (copilot) | GPT-5.2-Codex (copilot) | Claude Sonnet 4.5 (copilot) |
| gsd-codebase-mapper      | GPT-5.2-Codex (copilot) | Claude Haiku 4.5 (copilot) | Claude Haiku 4.5 (copilot) |
| gsd-verifier             | GPT-5.2 (copilot) | GPT-5.2 (copilot) | Claude Sonnet 4.5 (copilot) |
| gsd-plan-checker         | GPT-5.2 (copilot) | Claude Sonnet 4.5 (copilot) | Claude Haiku 4.5 (copilot) |
| gsd-integration-checker  | GPT-5.2-Codex (copilot) | GPT-5.2-Codex (copilot) | Claude Sonnet 4.5 (copilot) |

## Profile Philosophy

**quality** - Maximum reasoning power

- Prefer GPT-5.2-Codex (copilot) for long, protocol-heavy software engineering work (execution/debugging) and source-heavy repo investigation where memory matters
- Prefer GPT-5.2 (copilot) for methodology-heavy reasoning (planning, synthesis, verification)
- Use Claude Opus 4.6 (copilot) selectively for the hardest problems (but avoid it for large source-reading due to Copilot context limits + cost)
- Avoid relying on Gemini as a “high-context” model in Copilot (it does not get the full API context window)

**balanced** (default) - Smart allocation

- Default to GPT-5.2 (copilot) for planning/research synthesis when process design matters
- Use GPT-5.2-Codex (copilot) for agents that must follow long checklists and do precise tool calling (executor/debugger/integration)
- Use Claude Haiku 4.5 (copilot) for high-volume scanning/mapping where outputs are reviewed
- Use when: normal development, good balance of quality and cost

**budget** - Minimal Opus usage

- Prefer Claude Haiku 4.5 (copilot) for fast reading and first-pass synthesis (review outputs)
- Use Claude Sonnet 4.5 (copilot) when you still need reliable tool calling/coding on a budget
- Use when: conserving quota, high-volume work, less critical phases

## Resolution Logic

Orchestrators resolve model before spawning:

```
1. Read .gsd/config.json
2. Get model_profile (default: "balanced")
3. Look up agent in table above
4. Pass model parameter to Task call
```

## Switching Profiles

Runtime: `/set-profile.md <profile>`

Per-project default: Set in `.gsd/config.json`:

```json
{
  "model_profile": "balanced"
}
```

## Design Rationale

**Why Opus for gsd-planner?**
Planning involves architecture decisions, goal decomposition, and task design. This is where model quality has the highest impact.

**Why Sonnet for gsd-executor?**
Executors follow explicit PLAN.md instructions. The plan already contains the reasoning; execution is implementation.

**Why Sonnet (not Haiku) for verifiers in balanced?**
Verification requires goal-backward reasoning - checking if code _delivers_ what the phase promised, not just pattern matching. Sonnet handles this well; Haiku may miss subtle gaps.

**Why Haiku for gsd-codebase-mapper?**
Read-only exploration and pattern extraction. No reasoning required, just structured output from file contents.
