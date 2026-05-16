# Fluent Support

WordPress-native customer support and helpdesk plugin for managing tickets and conversations without leaving WordPress.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via Fluent Support endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List tickets
```bash
GET https://yoursite.com/wp-json/fluent-support/v2/tickets

Authorization: Basic {base64_credentials}
```

### Get single ticket
```bash
GET https://yoursite.com/wp-json/fluent-support/v2/tickets/{id}

Authorization: Basic {base64_credentials}
```

### Create ticket
```bash
POST https://yoursite.com/wp-json/fluent-support/v2/tickets

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "title": "Cannot access my account",
  "content": "I keep getting a 403 error.",
  "customer_id": 12,
  "mailbox_id": 1
}
```

### List agents
```bash
GET https://yoursite.com/wp-json/fluent-support/v2/agents

Authorization: Basic {base64_credentials}
```

## Key Fields

### Ticket
- `id` - Ticket ID
- `title` - Ticket subject
- `content` - First message body
- `status` - open, closed, pending, resolved
- `priority` - low, medium, high
- `customer_id` - Linked customer
- `agent_id` - Assigned agent
- `mailbox_id` - Support inbox
- `created_at` - ISO 8601 timestamp

### Customer
- `id` - Customer ID
- `first_name` / `last_name` - Name
- `email` - Email address

## Parameters

- `status` - Filter tickets by status
- `priority` - Filter by priority
- `agent_id` - Filter by assigned agent
- `per_page` / `page` - Pagination

## When to Use

- Escalate tickets to external tools based on priority
- Sync customer data with a CRM
- Generate support KPI reports
- Alert team channels on new high-priority tickets

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- customer-support:ticket-triage
- customer-support:draft-response
- operations:status-report
