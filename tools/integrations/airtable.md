# Airtable

Flexible cloud database combining the simplicity of a spreadsheet with the power of a relational database — used for CRM, project tracking, content calendars, and more.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.airtable.com/v0/{baseId}/{tableName}` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official JavaScript SDK (`airtable` npm package) |

## Authentication

- **Type**: Personal Access Token
- **Header**: `Authorization: Bearer {token}`
- **Get token**: airtable.com/create/tokens — create token with `data.records:read`, `data.records:write`, `schema.bases:read` scopes

## Common Agent Operations

### List records in a table

```bash
GET https://api.airtable.com/v0/{baseId}/{tableName}?maxRecords=100&view=Grid%20view

Authorization: Bearer {token}
```

### Create a record

```bash
POST https://api.airtable.com/v0/{baseId}/{tableName}

Authorization: Bearer {token}
Content-Type: application/json

{
  "fields": {
    "Name": "Jane Doe",
    "Email": "jane@example.com",
    "Status": "Lead",
    "Source": "Website"
  }
}
```

### Update a record

```bash
PATCH https://api.airtable.com/v0/{baseId}/{tableName}/{recordId}

Authorization: Bearer {token}
Content-Type: application/json

{"fields": {"Status": "Qualified", "Notes": "Followed up via email"}}
```

### Search records with a filter formula

```bash
GET https://api.airtable.com/v0/{baseId}/{tableName}?filterByFormula={Email}="jane@example.com"

Authorization: Bearer {token}
```

### Delete a record

```bash
DELETE https://api.airtable.com/v0/{baseId}/{tableName}/{recordId}

Authorization: Bearer {token}
```

## Key Fields

### Record
- `id` - Record ID (starts with `rec`)
- `fields` - Object containing all field values
- `createdTime` - ISO 8601 creation timestamp

### Table Schema
- `id` - Field ID
- `name` - Field name (column header)
- `type` - singleLineText, email, number, singleSelect, date, checkbox, linkedRecord, etc.
- `options` - Field-specific config (e.g., choices for singleSelect)

## Parameters

- `maxRecords` - Max records to return per page (default 100, max 100)
- `pageSize` - Records per page (max 100)
- `offset` - Pagination cursor from previous response
- `filterByFormula` - Airtable formula string for filtering
- `sort` - Array of field/direction sort objects
- `view` - Restrict results to a specific view's records and order

## When to Use

- Logging leads, form submissions, or orders into a structured Airtable base
- Building lightweight CRM or project trackers that non-technical teams can edit
- Centralizing marketing campaign data across sources into a single Airtable base
- Generating filtered views and reports from structured data via API

## Rate Limits

- 5 requests per second per base
- Contact Airtable for higher limits via enterprise plan

## Relevant Skills

- crm-management
- content-strategy
- lead-generation
- data:explore-data
