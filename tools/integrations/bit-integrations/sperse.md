# Sperse

Sperse is a business management platform offering client portals, invoicing, project management, and contact management for service businesses.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API with API key authentication |
| MCP | - | No official MCP server |
| CLI | - | No official CLI |
| SDK | - | No official SDK; use REST directly |

## Authentication

- **Type**: API Key
- **Header**: `X-API-Key: {api_key}`
- **Get token**: Sperse Dashboard > Settings > API Keys

## Common Agent Operations

### List Contacts
```bash
GET https://api.sperse.com/v1/contacts

X-API-Key: {api_key}
```

### Create a Contact
```bash
POST https://api.sperse.com/v1/contacts

X-API-Key: {api_key}
Content-Type: application/json

{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane@example.com",
  "company": "Acme Corp"
}
```

### List Projects
```bash
GET https://api.sperse.com/v1/projects

X-API-Key: {api_key}
```

### Create an Invoice
```bash
POST https://api.sperse.com/v1/invoices

X-API-Key: {api_key}
Content-Type: application/json

{
  "contact_id": "cnt_123",
  "line_items": [
    {"description": "Consulting", "quantity": 5, "unit_price": 150}
  ],
  "due_date": "2026-06-01"
}
```

## Key Fields

### Contact
- `id` - Unique contact identifier
- `email` - Primary email address
- `company` - Organization name
- `status` - active, inactive

### Invoice
- `id` - Invoice identifier
- `contact_id` - Associated contact
- `total` - Invoice total
- `status` - draft, sent, paid, overdue

## Parameters

- `page` / `per_page` - Pagination controls
- `status` - Filter contacts or invoices by status
- `contact_id` - Scope projects or invoices to a contact

## When to Use

- Automating client onboarding by creating contacts from lead forms
- Generating invoices from project completion events
- Syncing project status to reporting dashboards
- Sending invoice reminders via integrated email

## Rate Limits

- See Sperse pricing page for API limits

## Relevant Skills

- operations:process-doc
- finance:financial-statements
- sales:account-research
- data:analyze
