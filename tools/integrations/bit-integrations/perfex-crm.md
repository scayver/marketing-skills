# Perfex CRM

Self-hosted open-source CRM for managing clients, projects, invoices, estimates, tasks, and support tickets.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://YOUR_DOMAIN/api/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP module system only |

## Authentication

- **Type**: API Token (Bearer)
- **Header**: `Authorization: Bearer {api_token}`
- **Get token**: Perfex Admin > Setup > API > Generate Token

## Common Agent Operations

### List clients

```bash
GET https://YOUR_DOMAIN/api/clients

Authorization: Bearer {api_token}
```

### Create client

```bash
POST https://YOUR_DOMAIN/api/clients

Authorization: Bearer {api_token}
Content-Type: application/json

{"company": "Acme Corp", "firstname": "Jane", "lastname": "Doe", "email": "jane@acme.com"}
```

### List projects

```bash
GET https://YOUR_DOMAIN/api/projects

Authorization: Bearer {api_token}
```

### Create invoice

```bash
POST https://YOUR_DOMAIN/api/invoices

Authorization: Bearer {api_token}
Content-Type: application/json

{"clientid": "5", "number": "INV-001", "date": "2026-05-15", "duedate": "2026-06-15"}
```

### List tasks

```bash
GET https://YOUR_DOMAIN/api/tasks

Authorization: Bearer {api_token}
```

## Key Fields

### Client Object
- `userid` - Client ID
- `company` - Company name
- `email` - Email address
- `phonenumber` - Phone number
- `country` - Country

### Project Object
- `id` - Project ID
- `name` - Project name
- `clientid` - Associated client ID
- `status` - Status (1=In Progress, 2=On Hold, 3=Cancelled, 4=Finished)
- `deadline` - Project deadline

### Invoice Object
- `id` - Invoice ID
- `clientid` - Client ID
- `total` - Total amount
- `status` - Payment status

## Parameters

- `page` - Page number
- `limit` - Results per page
- `search` - Search query
- `clientid` - Filter by client

## When to Use

- Managing freelance or agency client relationships
- Automating invoice creation from project milestones
- Syncing client data with external tools
- Tracking project and task status programmatically

## Rate Limits

- Self-hosted; limits depend on server configuration

## Relevant Skills

- sales:pipeline-review
- finance:financial-statements
- operations:process-doc
