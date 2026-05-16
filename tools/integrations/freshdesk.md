# Freshdesk

Cloud-based customer support platform for managing tickets, contacts, agent collaboration, and helpdesk workflows.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v2 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official libraries for Ruby, Python, Node.js, PHP |

## Authentication

- **Type**: API Key via HTTP Basic Auth (key as username, any password)
- **Header**: `Authorization: Basic base64(api_key:X)`
- **Get token**: Freshdesk Profile Settings > Your API Key (top right)

## Common Agent Operations

### Create ticket
```bash
POST https://YOUR_DOMAIN.freshdesk.com/api/v2/tickets

Authorization: Basic {base64_api_key:X}
Content-Type: application/json

{
  "subject": "Payment issue",
  "description": "Unable to complete checkout",
  "email": "customer@example.com",
  "priority": 2,
  "status": 2
}
```

### List tickets
```bash
GET https://YOUR_DOMAIN.freshdesk.com/api/v2/tickets?order_type=desc&per_page=50

Authorization: Basic {base64_api_key:X}
```

### Get ticket
```bash
GET https://YOUR_DOMAIN.freshdesk.com/api/v2/tickets/{id}

Authorization: Basic {base64_api_key:X}
```

### Create contact
```bash
POST https://YOUR_DOMAIN.freshdesk.com/api/v2/contacts

Authorization: Basic {base64_api_key:X}
Content-Type: application/json

{"name": "Jane Doe", "email": "jane@example.com", "phone": "+1234567890"}
```

## Key Fields

### Ticket
- `id` - Ticket ID
- `subject` - Ticket subject
- `description` - Ticket body
- `status` - 2=open, 3=pending, 4=resolved, 5=closed
- `priority` - 1=low, 2=medium, 3=high, 4=urgent
- `responder_id` - Assigned agent ID
- `requester_id` - Contact ID
- `created_at` - ISO 8601 timestamp

### Contact
- `id` - Contact ID
- `name` - Full name
- `email` - Email address
- `phone` - Phone number
- `company_id` - Linked company

## Parameters

- `order_type` - asc or desc
- `per_page` - Results per page (max 100)
- `page` - Page number
- `filter` - Predefined filter name

## When to Use

- Create support tickets from form submissions
- Sync customer contacts from a CRM
- Escalate unresolved tickets via external alerts
- Report on ticket volume and resolution time

## Rate Limits

- 1000 requests/hour (Growth plan); higher on Enterprise

## Relevant Skills

- customer-support:ticket-triage
- customer-support:draft-response
- operations:status-report
