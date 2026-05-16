# Make

Visual automation platform (formerly Integromat) for connecting apps and automating multi-step workflows with advanced data routing and transformation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://us1.make.com/api/v2/` |
| MCP | - | No official MCP server |
| CLI | - | No official CLI |
| SDK | - | No official SDK; community libraries available |

## Authentication

- **Type**: API Token (Bearer)
- **Header**: `Authorization: Token {api_token}`
- **Get token**: Make Dashboard > Profile icon > API > Generate API Token

## Common Agent Operations

### List scenarios
```bash
GET https://us1.make.com/api/v2/scenarios?teamId={team_id}

Authorization: Token {api_token}
```

### Activate a scenario
```bash
PATCH https://us1.make.com/api/v2/scenarios/{scenario_id}

Authorization: Token {api_token}
Content-Type: application/json

{"isActive": true}
```

### List executions for a scenario
```bash
GET https://us1.make.com/api/v2/scenarios/{scenario_id}/logs

Authorization: Token {api_token}
```

### Trigger a scenario via webhook
```bash
POST https://hook.us1.make.com/{webhook_path}

Content-Type: application/json

{"key": "value", "email": "user@example.com"}
```

## Key Fields

### Scenario
- `id` - Scenario ID
- `name` - Scenario display name
- `isActive` - Whether the scenario is enabled
- `teamId` - Owning team ID
- `scheduling` - Scheduling configuration object

### Execution Log
- `status` - Execution status (success, error, warning)
- `duration` - Run time in milliseconds
- `operations` - Number of operations consumed

## Parameters

- `teamId` - Filter by team (required for most endpoints)
- `pg[limit]` - Page size
- `pg[offset]` - Pagination offset

## When to Use

- Orchestrating multi-step automations across many SaaS tools with visual logic
- Building complex data transformation pipelines between platforms
- Triggering external workflows from API events or webhooks
- Monitoring and managing automation health and execution logs programmatically

## Rate Limits

- Varies by plan; see Make pricing page for operation limits per month

## Relevant Skills

- operations:process-optimization
- operations:runbook
- marketing:campaign-plan
