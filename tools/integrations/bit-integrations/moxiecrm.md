# Moxie CRM

Lightweight CRM built for solopreneurs and freelancers, combining client management, project tracking, time logging, and invoicing in one interface.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API with API key authentication |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Key
- **Header**: `Authorization: Bearer {api_key}`
- **Get token**: Moxie account Settings > Integrations or API section

## Common Agent Operations

### List contacts
```bash
GET https://app.withmoxie.com/api/v1/contacts

Authorization: Bearer {api_key}
```

### Create a contact
```bash
POST https://app.withmoxie.com/api/v1/contacts

Authorization: Bearer {api_key}
Content-Type: application/json

{"name": "Jane Doe", "email": "jane@example.com", "phone": "555-1234", "company": "Acme Co"}
```

### Create a project
```bash
POST https://app.withmoxie.com/api/v1/projects

Authorization: Bearer {api_key}
Content-Type: application/json

{"name": "Website Redesign", "contact_id": "abc123", "status": "active"}
```

### List projects
```bash
GET https://app.withmoxie.com/api/v1/projects

Authorization: Bearer {api_key}
```

## Key Fields

### Contact
- `id` - Contact UUID
- `name` - Full name (required)
- `email` - Email address
- `phone` - Phone number
- `company` - Company name

### Project
- `id` - Project UUID
- `name` - Project name
- `contact_id` - Associated contact ID
- `status` - Project status (active, completed, archived)

## Parameters

- `page` - Page number
- `per_page` - Results per page
- `status` - Filter by status

## When to Use

- Managing client contacts and freelance project records via API
- Automating contact creation from website inquiry forms or scheduling tools
- Creating project records programmatically when new clients are onboarded
- Tracking billable time and generating invoices for freelance work

## Rate Limits

- See Moxie pricing page; contact support for API rate limit details

## Relevant Skills

- sales:account-research
- sales:draft-outreach
- operations:process-doc
