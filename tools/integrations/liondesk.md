# LionDesk

Real estate-focused CRM for agents and brokers featuring contact management, drip campaigns, video texting, and transaction tracking.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v2 for contacts, tasks, pipelines, and drip campaigns |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API only |

## Authentication

- **Type**: OAuth 2.0
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: LionDesk Settings > Developer > API Keys > OAuth 2.0 credentials

## Common Agent Operations

### Create a contact

```bash
POST https://api-v2.liondesk.com/contacts

Authorization: Bearer {access_token}
Content-Type: application/json

{"first_name": "Jane", "last_name": "Doe", "email": "jane@example.com", "phone": "+15555550100"}
```

### Get all contacts

```bash
GET https://api-v2.liondesk.com/contacts?limit=100&page=1

Authorization: Bearer {access_token}
```

### Search contacts by email

```bash
GET https://api-v2.liondesk.com/contacts?email=jane@example.com

Authorization: Bearer {access_token}
```

### Create a task

```bash
POST https://api-v2.liondesk.com/tasks

Authorization: Bearer {access_token}
Content-Type: application/json

{"title": "Follow up call", "due_date": "2025-07-01", "contact_id": "abc123"}
```

### Add contact to a drip campaign

```bash
POST https://api-v2.liondesk.com/drips/{drip_id}/contacts

Authorization: Bearer {access_token}
Content-Type: application/json

{"contact_id": "abc123"}
```

## Key Fields

### Contact Object
- `id` - Unique contact identifier
- `first_name`, `last_name` - Name fields
- `email` - Primary email address
- `phone` - Phone number
- `category` - Contact type (Buyer, Seller, Lead, etc.)
- `source` - Lead source
- `notes` - Notes about the contact

### Task Object
- `id` - Task ID
- `title` - Task name
- `due_date` - Due date (YYYY-MM-DD)
- `contact_id` - Linked contact
- `status` - open | completed

### Drip Campaign
- `id` - Campaign ID
- `name` - Campaign name
- `status` - active | paused

## Parameters

- `limit` - Results per page
- `page` - Pagination page number
- `email` - Filter contacts by email
- `category` - Filter contacts by category

## When to Use

- Managing real estate buyer and seller leads in a purpose-built CRM
- Automatically enrolling new leads in drip email/SMS campaigns
- Creating follow-up tasks from property inquiry form submissions
- Tracking transactions and pipeline stages for real estate agents

## Rate Limits

- See developer.liondesk.com for current rate limits

## Relevant Skills

- crm-management
- lead-generation
- email-marketing
