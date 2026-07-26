# Platform Adapters

## Purpose

Keep `SKILL.md` as the source of truth. Change only the wrapper required by the destination platform.

## Compatibility Model

| Layer | Purpose | Portable Source |
| --- | --- | --- |
| Trigger | Defines when the capability activates. | Frontmatter `description`. |
| Behavior | Defines the workflow, constraints, output, and checks. | `SKILL.md` body. |
| Interface | Connects optional tools, files, memory, or UI metadata. | Platform-specific adapter. |

The trigger and behavior remain consistent. The interface may change.

## Placement

| Platform | Recommended Placement |
| --- | --- |
| ChatGPT or Codex | Native skill, GPT instructions, or Project instructions. |
| Claude | Project Instructions, a Skill, or `CLAUDE.md`. |
| Gemini | Gem instructions or API system instruction. |
| Microsoft Copilot | Agent instructions or the supported repository instruction file. |
| Perplexity | Space instructions with attached source references. |
| API agent | System or developer instruction with the user request sent separately. |
| Local model | System prompt in the runner, agent framework, or chat template. |
| Automation platform | Agent instruction with workflow inputs mapped to stable variables. |

Confirm current platform documentation before publishing exact setup steps.

## Universal Wrapper

```text
Role.
Act as a Content Repurposing Strategist.

Activation.
Apply this capability when the user asks to repurpose content, recommend formats, humanize copy, generate engagement ideas, build content calendars, create hooks or CTAs, or adapt content to a funnel stage or publishing platform.

Operating rule.
Follow the canonical skill instructions below. Treat user-provided facts, source materials, brand rules, requested formats, and output constraints as authoritative. Use available tools only when helpful. If a capability is unavailable, continue manually when possible and separate verified facts from assumptions.

Canonical skill instructions.
[Paste the complete body of SKILL.md here.]
```

## Structured Inputs

```json
{
  "source_content": "",
  "business_goal": "",
  "funnel_stage": "",
  "audience": "",
  "platforms": [],
  "formats": [],
  "brand_voice": [],
  "prohibited_language": [],
  "offer": "",
  "cta": "",
  "publishing_window": "",
  "production_limits": "",
  "output_format": "markdown"
}
```

Omit unknown optional fields. Do not fabricate missing facts.

## Fallbacks

| Missing Capability | Fallback |
| --- | --- |
| Browsing | Avoid time-sensitive claims or mark them for verification. |
| File upload | Ask the user to paste the relevant source in labeled sections. |
| Long context | Process chunks, keep a fact ledger, then synthesize. |
| Persistent memory | Request the brand brief and constraints at the start. |
| Image generation | Deliver slide copy, visual direction, and a shot list. |
| External app access | Produce import-ready Markdown, CSV, JSON, or field mappings. |
| Reliable structured output | Provide fenced JSON and validate required keys. |
