# Marketing OS Contracts

Marketing Skills OS uses Markdown as its human-readable source layer and JSON contracts as its machine-readable execution layer.

The contracts give agents and host systems stable identifiers for work that previously lived only in prompts and files.

## Contracted Resources

| Resource | Contract | Purpose |
|---|---|---|
| Skill | schemas/marketing-os/skill.schema.json | Describe activation, context, inputs, outputs, dependencies, security, and evaluation status. |
| Workflow | schemas/marketing-os/workflow.schema.json | Describe routing, skill sequence, tools, gates, artifacts, metrics, and completion. |
| Integration | schemas/marketing-os/integration.schema.json | Describe authentication, operations, scopes, limits, retry guidance, and test status. |
| CLI | schemas/marketing-os/cli-tool.schema.json | Describe inputs, outputs, write behavior, dry-run support, flags, and exit codes. |
| Run | schemas/marketing-os/run.schema.json | Record a request from context validation through next actions. |
| Decision | schemas/marketing-os/decision.schema.json | Record options, evidence, reasoning, confidence, and reversibility. |
| Approval | schemas/marketing-os/approval.schema.json | Record risky actions and human authorization. |
| Scorecard | schemas/marketing-os/scorecard.schema.json | Record quality evaluation and pass thresholds. |
| Metric | schemas/marketing-os/metric.schema.json | Define outcome measurement, ownership, source, and confidence. |
| Artifact | schemas/marketing-os/artifact.schema.json | Give outputs stable identity and review status. |
| Lineage | schemas/marketing-os/lineage.schema.json | Connect requests, context, workflows, skills, tools, artifacts, and metrics. |
| Module | schemas/marketing-os/module.schema.json | Allow validated extensions without editing the core repository. |

## Local Run Lifecycle

Create a run record with:

    npm run os:run-record -- create --target ../my-project --workflow saas-launch --request "Prepare the first launch plan"

The command creates .marketing-os/runs/<run-id>/ with these records:

    run.json
    input/request.md
    input/context.json
    routing/workflow.json
    routing/skills.json
    tools/plan.json
    metrics/plan.json
    decisions/
    approvals/
    artifacts/
    evaluations/
    warnings.json
    errors.json
    next-actions.json

Use --dry-run to inspect the plan without writing files. Use os:resume only for runs in created, paused, or failed state. Use os:export to produce a portable JSON or Markdown package. Use os:lineage to inspect the path from request to planned outcome.

## Governance Boundary

The local run manager records intent and evidence. It does not publish content, send campaigns, spend budget, delete records, or call external APIs. Those actions belong behind explicit tool permissions and approval gates in the host environment.

## Validation

Run:

    npm run os:contracts:check
    npm run validate

The contract checker validates the schema set and the workflow manifest. Repository validation also runs an isolated run lifecycle smoke test.
