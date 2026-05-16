# SmartSuite

SmartSuite is a collaborative work management platform combining databases, project tracking, and workflows in a no-code environment.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://app.smartsuite.com/api/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No official CLI |
| SDK | - | No official SDK; use REST directly |

## Authentication

- **Type**: API Token
- **Header**: `Authorization: Token {api_key}` and `ACCOUNT-ID: {account_id}`
- **Get token**: Profile > API & Integrations in the SmartSuite dashboard

## Common Agent Operations

### List Solutions
```bash
GET https://app.smartsuite.com/api/v1/solution/

Authorization: Token {api_key}
ACCOUNT-ID: {account_id}
```

### List Applications (Tables) in a Solution
```bash
GET https://app.smartsuite.com/api/v1/solution/{solution_id}/applications/

Authorization: Token {api_key}
ACCOUNT-ID: {account_id}
```

### Create a Record
```bash
POST https://app.smartsuite.com/api/v1/applications/{application_id}/records/

Authorization: Token {api_key}
ACCOUNT-ID: {account_id}
Content-Type: application/json

{
  "title": {"value": "New Lead"},
  "status": {"value": "open"},
  "email": {"value": "contact@example.com"}
}
```

### List Records
```bash
GET https://app.smartsuite.com/api/v1/applications/{application_id}/records/

Authorization: Token {api_key}
ACCOUNT-ID: {account_id}
```

### Update a Record
```bash
PATCH https://app.smartsuite.com/api/v1/applications/{application_id}/records/{record_id}/

Authorization: Token {api_key}
ACCOUNT-ID: {account_id}
Content-Type: application/json

{"status": {"value": "completed"}}
```

## Key Fields

### Record
- `id` - Unique record identifier
- `title` - Record title field
- `application_id` - Parent application (table) ID
- `created_at` - ISO 8601 creation timestamp
- `updated_at` - ISO 8601 last-updated timestamp

## Parameters

- `application_id` - Required for record operations; identifies the target table
- `solution_id` - Required for listing applications
- `limit` / `offset` - Pagination controls for list endpoints

## When to Use

- Syncing leads or contacts into a SmartSuite CRM application
- Creating project records automatically from external form submissions
- Tracking tasks, events, or inventory without manual data entry
- Reporting on SmartSuite data from marketing pipelines

## Rate Limits

- See SmartSuite pricing page and API documentation for current limits

## Relevant Skills

- marketing:campaign-plan
- product-management:write-spec
- operations:process-doc
- data:explore-data
