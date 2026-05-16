# Ant Apps

Business management platform offering CRM, project management, invoicing, and team collaboration tools in a unified workspace for agencies and small businesses.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API with API key authentication |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Key
- **Header**: `Authorization: Bearer {api_key}` or `X-API-Key: {api_key}`
- **Get token**: Ant Apps > Settings > Integrations > API Key

## Common Agent Operations

### Create a contact

```bash
POST https://app.antapps.com/api/v1/contacts

Authorization: Bearer {api_key}
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+15551234567",
  "company": "Acme Corp",
  "source": "website"
}
```

### Create a lead

```bash
POST https://app.antapps.com/api/v1/leads

Authorization: Bearer {api_key}
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+15551234567",
  "status": "new",
  "notes": "Interested in enterprise plan"
}
```

### List contacts

```bash
GET https://app.antapps.com/api/v1/contacts?page=1&per_page=50

Authorization: Bearer {api_key}
```

### Create a project

```bash
POST https://app.antapps.com/api/v1/projects

Authorization: Bearer {api_key}
Content-Type: application/json

{"name": "Website Redesign", "client_id": 42, "status": "active"}
```

### Create an invoice

```bash
POST https://app.antapps.com/api/v1/invoices

Authorization: Bearer {api_key}
Content-Type: application/json

{"client_id": 42, "amount": 2500, "due_date": "2025-09-01", "items": [{"description": "Design services", "amount": 2500}]}
```

## Key Fields

### Contact
- `id` - Contact ID
- `name` - Full name (required)
- `email` - Email address
- `phone` - Phone number
- `company` - Company name
- `source` - Lead source

### Lead
- `id` - Lead ID
- `name` - Lead name
- `email` - Email address
- `status` - new, contacted, qualified, lost
- `notes` - Free-text notes

### Project
- `id` - Project ID
- `name` - Project name
- `client_id` - Associated contact/client ID
- `status` - active, completed, on-hold

## Parameters

- `page` - Pagination page number
- `per_page` - Results per page
- `status` - Filter records by status
- `client_id` - Filter projects or invoices by client

## When to Use

- Adding website leads directly into Ant Apps CRM from form submissions
- Creating client records and projects when onboarding new customers
- Generating invoices programmatically from order or service data
- Syncing contact data from external platforms into Ant Apps

## Rate Limits

- See Ant Apps pricing page for API limits by plan tier

## Relevant Skills

- crm-management
- lead-generation
- ecommerce
