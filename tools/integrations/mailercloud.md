# Mailercloud

Email marketing platform with list management, campaign creation, automation, and subscriber analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API with Bearer token authentication |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API only |

## Authentication

- **Type**: Bearer Token
- **Header**: `Authorization: Bearer {token}`
- **Get token**: Mailercloud account > Settings > API > Generate Token

## Common Agent Operations

### Add a contact to a list

```bash
POST https://api.mailercloud.com/v1/contacts

Authorization: Bearer {token}
Content-Type: application/json

{"email": "jane@example.com", "first_name": "Jane", "last_name": "Doe", "list_id": "list_abc123"}
```

### Get all lists

```bash
GET https://api.mailercloud.com/v1/lists

Authorization: Bearer {token}
```

### Update a contact

```bash
PUT https://api.mailercloud.com/v1/contacts/{contact_id}

Authorization: Bearer {token}
Content-Type: application/json

{"first_name": "Jane", "custom_fields": {"company": "Acme Corp"}}
```

### Unsubscribe a contact

```bash
PUT https://api.mailercloud.com/v1/contacts/{contact_id}/unsubscribe

Authorization: Bearer {token}
```

### Get campaign stats

```bash
GET https://api.mailercloud.com/v1/campaigns/{campaign_id}/stats

Authorization: Bearer {token}
```

## Key Fields

### Contact Object
- `email` - Primary contact identifier
- `first_name`, `last_name` - Name fields
- `list_id` - List the contact belongs to
- `status` - subscribed | unsubscribed | bounced
- `custom_fields` - Key/value pairs for additional data

### List Object
- `id` - Unique list ID
- `name` - List name
- `subscriber_count` - Active subscriber count

### Campaign Object
- `id` - Campaign ID
- `name` - Campaign name
- `status` - Draft | Scheduled | Sent
- `sent_at` - Send timestamp

## Parameters

- `list_id` - Target list for contact operations
- `page` - Pagination page
- `per_page` - Results per page
- `status` - Filter contacts by subscription status

## When to Use

- Growing and managing email lists with list-based segmentation
- Sending broadcast campaigns to segmented subscriber lists
- Syncing new contacts from web forms or purchases to email lists
- Tracking campaign performance metrics (opens, clicks, bounces)

## Rate Limits

- See mailercloud.com documentation for plan-specific limits

## Relevant Skills

- email-marketing
- lead-generation
- content-creation
