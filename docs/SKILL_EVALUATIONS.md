# Skill Evaluations

Marketing Skills OS uses small, portable evaluation cases to test whether a skill routes correctly, respects missing context, separates evidence from assumptions, and produces the expected output shape.

Each evaluated skill stores cases in `skills/<skill-name>/evals/evals.json`. The format follows the source project’s useful pattern while keeping the cases local and dependency free.

## Evaluation Fields

| Field | Purpose |
|---|---|
| `skill_name` | Confirms the evaluation belongs to the intended skill. |
| `id` | Stable case identifier. |
| `prompt` | User request used for the test. |
| `expected_output` | Behavioral expectation for a good response. |
| `assertions` | Short checks a reviewer or runner can verify. |

## Initial Coverage

The v1.5.0 skills include evaluation cases for orchestration, research, prospecting, SMS compliance, social measurement, skill safety, campaigns, customer proof, podcast repurposing, YouTube analysis, brand review, accessibility, and paid advertising operations.

## Review Standard

Evaluation cases should test decisions and failure modes, not exact wording. Add a case when a skill gains a new workflow, external dependency, safety boundary, or output format.

## Next Step

Run the evaluation cases against the target agent and record failures as skill or routing issues before adding more prose.
