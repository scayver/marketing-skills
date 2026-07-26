# Marketing OS Contracts

These JSON Schemas define the portable contracts used by Marketing Skills OS and its Gen System bridge.

The contracts describe the resource types that agents and host systems exchange:

- Skills.
- Workflows.
- Integration guides.
- CLI tools.
- Runs.
- Decisions.
- Approvals.
- Scorecards.
- Metrics.
- Artifacts.
- Lineage.
- Modules.

The schemas remain dependency-free. External applications can validate them with any JSON Schema 2020-12 validator. The repository validator checks that each schema is present, valid JSON, versioned, and structurally usable. It also checks the workflow manifest that drives the local command center.

## Compatibility

The current Markdown skills, integration guides, and CLI files remain the source material for local agents. These contracts add stable metadata around those resources without requiring a host platform.

Gen System can import validated run packages from `.marketing-os/runs/<run-id>/` or exported files from `.marketing-os/exports/`.
