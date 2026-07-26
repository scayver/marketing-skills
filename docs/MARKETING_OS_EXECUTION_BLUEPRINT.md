# Marketing OS Execution Blueprint

Marketing Skills OS already provides the knowledge layer. This blueprint defines the next build sequence for turning that knowledge into a dependable execution system.

## Current Baseline

- 75 skills.
- 347 standalone integration guides.
- 62 CLI helpers.
- Seven workflow definitions.
- Local workspace initialization.
- Workflow activation with context readiness checks.
- Weekly reviews and state snapshots.
- Generated dashboard and outcome index.
- Skill evaluation fixtures for the highest-risk additions.
- Versioned contracts for execution resources.
- Local run records with dry-run, resume, export, and lineage commands.

## Delivery Order

### Phase 1, Contracts.

Keep the schema set stable. Gradually enrich each skill, integration, CLI, and workflow with version, ownership, security, evaluation, and compatibility metadata.

### Phase 2, Evaluation.

Add positive and negative routing cases for every stable skill. Add golden prompts for the seven workflows. Report output, compliance, security, and metric failures in machine-readable form.

### Phase 3, Execution.

Extend run records with checkpoints, structured tool calls, decision records, approvals, artifact versions, scorecards, and actual metric results. Keep the local manager side-effect free until a governed tool adapter performs the action.

### Phase 4, Reliability.

Classify integrations as tested or reference-only. Document scopes, rate limits, retries, destructive actions, dry-run behavior, and last verification dates. Standardize CLI output and exit codes.

### Phase 5, Human Control.

Expose runs, decisions, approvals, tool health, evaluations, metrics, artifacts, and lineage in the Marketing OS dashboard and Gen System module view.

### Phase 6, Measurement.

Give each workflow a primary metric, baseline, target, measurement window, source, owner, and confidence level. Connect actual outcomes back to the originating run and artifact.

### Phase 7, Modules.

Allow community modules to ship manifests, skills, integrations, workflows, examples, evaluations, and security reports without editing core files.

### Phase 8, Gen System Bridge.

Synchronize the local Marketing OS with Gen System through validated export packages. Import static assets as tenant-scoped drafts, preserve provenance and stable IDs, ingest runs and decisions, connect approvals and metrics, and expose request-to-outcome lineage in the hosted dashboard. Keep local execution independent from Gen System and require explicit approval before any hosted write or external tool action.

## Definition of Done

Marketing OS becomes operational when every core workflow produces a structured run, every stable skill has routing coverage, risky actions require approval, tool status is visible, artifact lineage is preserved, metrics connect to outcomes, and Gen System can import a validated package without undocumented file parsing.

## Next Build Slice

The next implementation slice should add checkpoint updates, structured decision and approval commands, and a generated run index. Do not add more skills until those controls have regression coverage.
