# ClinchPad

Lightweight pipeline-focused CRM for small teams and freelancers that provides visual deal tracking across customizable stages without complex setup.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1 with JSON |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Key (query parameter)
- **Parameter**: `api_key={your_api_key}` appended to every request URL
- **Get token**: ClinchPad account > Settings > API

## Common Agent Operations

### List all pipelines
```
GET https://clinchpad.com/api/v1/pipelines?api_key={api_key}
```

### List leads in a pipeline
```
GET https://clinchpad.com/api/v1/leads?api_key={api_key}&pipeline_id={pipeline_id}
```

### Create a lead
```
POST https://clinchpad.com/api/v1/leads?api_key={api_key}

Content-Type: application/json

{
  "name": "Jane Smith",
  "pipeline_id": "abc123",
  "stage_id": "def456",
  "contacts": [
    {"email": "jane@example.com", "phone": "+1 555 000 0000"}
  ]
}
```

### Update a lead's stage
```
PUT https://clinchpad.com/api/v1/leads/{lead_id}?api_key={api_key}

Content-Type: application/json

{"stage_id": "ghi789"}
```

## Key Fields

### Lead
- `name` - Lead/deal name (required)
- `pipeline_id` - Target pipeline (defaults to primary pipeline)
- `stage_id` - Target pipeline stage (defaults to first stage)
- `contacts` - Array of contact objects with `email` and `phone`
- `value` - Estimated deal value
- `expected_close` - Expected close date (ISO 8601)

### Pipeline
- `id` - Pipeline identifier
- `name` - Pipeline name

### Stage
- `id` - Stage identifier
- `name` - Stage label (e.g., Prospecting, Proposal, Closed)

## Parameters

- `api_key` - Required on every request
- `pipeline_id` - Filter leads by pipeline
- `stage_id` - Filter leads by stage
- `lead_id` - Required for update and delete operations

## When to Use

- Adding website inquiry leads directly into a visual ClinchPad pipeline
- Routing different form submissions to different pipeline stages based on inquiry type
- Tracking freelance project proposals from inquiry through to close
- Simple deal tracking without the complexity of a full-featured CRM

## Rate Limits

- See ClinchPad account settings or contact support for current limits

## Relevant Skills

- crm-management
- lead-generation
- sales-brief
