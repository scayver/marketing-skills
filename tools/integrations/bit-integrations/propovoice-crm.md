# Propovoice CRM

WordPress-native CRM for agencies and freelancers offering lead management, client portals, project tracking, and proposal generation inside WordPress.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/propovoice/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress REST API (Application Password)
- **Header**: `Authorization: Bearer {application_password}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List leads

```bash
GET https://yoursite.com/wp-json/propovoice/v1/leads

Authorization: Bearer {token}
```

### Create lead

```bash
POST https://yoursite.com/wp-json/propovoice/v1/leads

Authorization: Bearer {token}
Content-Type: application/json

{"name": "Jane Doe", "email": "jane@example.com", "phone": "+1-555-0100", "company": "Acme Corp"}
```

### List clients

```bash
GET https://yoursite.com/wp-json/propovoice/v1/clients

Authorization: Bearer {token}
```

### Create invoice

```bash
POST https://yoursite.com/wp-json/propovoice/v1/invoices

Authorization: Bearer {token}
Content-Type: application/json

{"client_id": "12", "title": "Design Project Invoice", "amount": 2500, "currency": "USD"}
```

### List projects

```bash
GET https://yoursite.com/wp-json/propovoice/v1/projects

Authorization: Bearer {token}
```

## Key Fields

### Lead Object
- `id` - Lead ID
- `name` - Full name
- `email` - Email address
- `phone` - Phone number
- `company` - Company name
- `status` - new / contacted / qualified / lost

### Client Object
- `id` - Client ID
- `name` - Client name
- `email` - Email address
- `company` - Company name
- `created_at` - Creation timestamp

### Invoice Object
- `id` - Invoice ID
- `client_id` - Associated client ID
- `amount` - Invoice amount
- `status` - draft / sent / paid

## Parameters

- `status` - Filter by status
- `per_page` - Results per page
- `page` - Page number

## When to Use

- Managing agency client relationships and proposals within WordPress
- Automating lead creation from website inquiry forms
- Tracking project milestones and invoices for freelance work
- Generating and sending proposals from within the WordPress dashboard

## Rate Limits

- Self-hosted WordPress; limits depend on server configuration

## Relevant Skills

- sales:pipeline-review
- finance:financial-statements
- operations:process-doc
