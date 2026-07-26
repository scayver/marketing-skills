# Gen System Bridge

Marketing Skills OS remains useful as a local, open-source system. Gen System provides the hosted control plane when a team needs tenant storage, shared visibility, approvals, connectors, billing, or cross-module coordination.

## Boundary

Marketing Skills OS owns:

- Marketing context and workflow definitions.
- Marketing skill instructions.
- Platform integration guides.
- CLI helper references.
- Local run records.
- Marketing evaluations and scorecards.
- Artifact and metric lineage.

Gen System owns:

- Tenant and workspace persistence.
- Human identity and permissions.
- Shared dashboard presentation.
- Connector credentials and OAuth state.
- Approval enforcement for hosted actions.
- Cross-module analytics and billing.
- Retention, audit, and operational monitoring.

## Portable Import Package

The first bridge contract uses the local run package created under .marketing-os/runs/<run-id>/ or .marketing-os/exports/.

    manifest.json
    product-context/
    workflows/
    skills/
    tools/
    runs/
    decisions/
    approvals/
    scorecards/
    metrics/
    artifacts/
    lineage/

Every imported record should preserve:

- schema_version.
- Stable resource IDs.
- Source repository and source commit when available.
- Run IDs and parent run IDs.
- Approval history.
- Artifact versions.
- Source lineage.
- Confidence and data-quality status.

## Synchronization Modes

| Mode | Direction | Use |
|---|---|---|
| Local only | None | Run Marketing Skills OS without a host platform. |
| Export only | Local to Gen System | Move a reviewed package into a hosted workspace. |
| One way | Local to Gen System | Publish approved local records to a tenant. |
| Controlled two way | Both directions | Sync records when permissions and conflict rules exist. |
| Archived snapshot | Local to Gen System | Preserve a point-in-time operating state. |

## Safety Rules

Gen System should reject incompatible schema versions, missing provenance, invalid approval states, and records that claim a tool operation without an execution record. Import should remain additive and idempotent. Local execution must never require Gen System availability.
