# SuiteDash

SuiteDash is an all-in-one business platform combining CRM, client portals, project management, invoicing, scheduling, and white-label branding for agencies and service businesses.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://app.suitedash.com/api/` |
| MCP | - | No official MCP server |
| CLI | - | No official CLI |
| SDK | - | No official SDK; use REST directly |

## Authentication

- **Type**: Bearer Token
- **Header**: `Authorization: Bearer {api_token}`
- **Get token**: SuiteDash Dashboard > Settings > API > Generate Token

## Common Agent Operations

### List Contacts
```bash
GET https://app.suitedash.com/api/contacts

Authorization: Bearer {api_token}
Content-Type: application/json
```

### Create a Contact
```bash
POST https://app.suitedash.com/api/contacts

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane@example.com"
}
```

### List Projects
```bash
GET https://app.suitedash.com/api/projects

Authorization: Bearer {api_token}
```

### Create a Project
```bash
POST https://app.suitedash.com/api/projects

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "title": "Website Redesign",
  "contact_id": 101,
  "status": "active"
}
```

### List Invoices
```bash
GET https://app.suitedash.com/api/invoices

Authorization: Bearer {api_token}
```

## Key Fields

### Contact
- `id` - Unique contact ID
- `email` - Primary email
- `first_name` / `last_name` - Name fields
- `company` - Associated company

### Project
- `id` - Project ID
- `title` - Project name
- `contact_id` - Linked client
- `status` - active, completed, on-hold

### Invoice
- `id` - Invoice ID
- `contact_id` - Billed client
- `total` - Invoice amount
- `status` - draft, sent, paid, overdue

## Parameters

- `page` / `per_page` - Pagination controls
- `status` - Filter records by status

## When to Use

- Creating client records from intake forms
- Spawning projects from proposal acceptances
- Generating invoices from completed milestones
- Syncing task and project status to reporting tools

## Rate Limits

- See SuiteDash pricing page for API limits

## Relevant Skills

- operations:process-doc
- finance:financial-statements
- sales:account-research
- product-management:stakeholder-update
