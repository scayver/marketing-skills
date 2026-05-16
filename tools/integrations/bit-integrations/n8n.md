# n8n

Open-source, self-hostable workflow automation platform with a node-based visual editor, custom JavaScript support, and 400+ integrations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `http://YOUR_N8N_INSTANCE/api/v1/` |
| MCP | - | No official MCP server |
| CLI | ✓ | `n8n` CLI for self-hosted instance management |
| SDK | - | No official SDK; uses REST API directly |

## Authentication

- **Type**: API Key (Bearer)
- **Header**: `X-N8N-API-KEY: {api_key}`
- **Get token**: n8n Settings > API > Create API Key (requires n8n v0.199+)

## Common Agent Operations

### List workflows
```bash
GET http://your-n8n-instance.com/api/v1/workflows

X-N8N-API-KEY: {api_key}
```

### Get workflow details
```bash
GET http://your-n8n-instance.com/api/v1/workflows/{workflow_id}

X-N8N-API-KEY: {api_key}
```

### Activate a workflow
```bash
POST http://your-n8n-instance.com/api/v1/workflows/{workflow_id}/activate

X-N8N-API-KEY: {api_key}
```

### List executions
```bash
GET http://your-n8n-instance.com/api/v1/executions?workflowId={workflow_id}

X-N8N-API-KEY: {api_key}
```

### Trigger a workflow via webhook
```bash
POST http://your-n8n-instance.com/webhook/{webhook_path}

Content-Type: application/json

{"key": "value", "email": "user@example.com"}
```

## Key Fields

### Workflow
- `id` - Workflow ID
- `name` - Workflow display name
- `active` - Whether the workflow is enabled
- `nodes` - Array of node configuration objects
- `connections` - Node connection map

### Execution
- `id` - Execution ID
- `workflowId` - Associated workflow ID
- `status` - Execution status (success, error, running)
- `startedAt` - Start timestamp
- `stoppedAt` - End timestamp

## Parameters

- `workflowId` - Filter executions by workflow
- `limit` - Results per page
- `cursor` - Pagination cursor

## When to Use

- Self-hosted automation with full data privacy and no per-operation pricing
- Applying custom JavaScript logic, database queries, or proprietary API calls in workflows
- Connecting internal systems not available in SaaS automation platforms
- Orchestrating complex multi-step data pipelines with conditional branching

## Rate Limits

- No built-in rate limits; limited by self-hosted server capacity

## Relevant Skills

- operations:process-optimization
- operations:runbook
- engineering:system-design
