# Pipedrive

Sales-focused CRM built around visual pipeline management for tracking deals, contacts, and activities through customizable stages.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.pipedrive.com/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official clients for Node.js, Python, PHP, Go |

## Authentication

- **Type**: API Token or OAuth 2.0
- **Header**: `Authorization: Bearer {api_token}` or append `?api_token={token}` to requests
- **Get token**: Pipedrive Settings > Personal preferences > API

## Common Agent Operations

### List persons

```bash
GET https://api.pipedrive.com/v1/persons

Authorization: Bearer {api_token}
```

### Create person

```bash
POST https://api.pipedrive.com/v1/persons

Authorization: Bearer {api_token}
Content-Type: application/json

{"name": "Jane Doe", "email": [{"value": "jane@example.com", "primary": true}], "phone": [{"value": "+1-555-0100"}]}
```

### Create deal

```bash
POST https://api.pipedrive.com/v1/deals

Authorization: Bearer {api_token}
Content-Type: application/json

{"title": "Acme Corp Deal", "person_id": 42, "pipeline_id": 1, "stage_id": 3, "value": 5000, "currency": "USD"}
```

### List deals

```bash
GET https://api.pipedrive.com/v1/deals?status=open&limit=50

Authorization: Bearer {api_token}
```

### Create activity

```bash
POST https://api.pipedrive.com/v1/activities

Authorization: Bearer {api_token}
Content-Type: application/json

{"subject": "Follow-up call", "type": "call", "due_date": "2026-05-20", "person_id": 42}
```

## Key Fields

### Person Object
- `id` - Person ID
- `name` - Full name
- `email` - Array of email objects
- `phone` - Array of phone objects
- `org_id` - Associated organization ID

### Deal Object
- `id` - Deal ID
- `title` - Deal title
- `value` - Monetary value
- `currency` - Currency code
- `stage_id` - Current pipeline stage
- `status` - open / won / lost / deleted

### Activity Object
- `subject` - Activity title
- `type` - call / meeting / email / task
- `due_date` - Due date (YYYY-MM-DD)
- `done` - Boolean completion status

## Parameters

- `status` - Filter deals by status (open, won, lost)
- `limit` - Results per page (max 500)
- `start` - Pagination offset
- `pipeline_id` - Filter by pipeline

## When to Use

- Managing sales pipelines and tracking deal progression
- Logging contact interactions and scheduling follow-up activities
- Syncing leads from external sources into Pipedrive
- Reporting on pipeline value and deal velocity

## Rate Limits

- 80 requests per 2 seconds per API token
- See Pipedrive pricing page for plan-based limits

## Relevant Skills

- sales:pipeline-review
- sales:call-prep
- sales:forecast
