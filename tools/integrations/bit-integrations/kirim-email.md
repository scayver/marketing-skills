# Kirim Email

Indonesian email marketing platform for list management, broadcast campaigns, and subscriber automation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API with API key authentication |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API only |

## Authentication

- **Type**: API Key
- **Header**: `Authorization: {api_key}`
- **Get key**: Kirim Email account dashboard > Settings > API

## Common Agent Operations

### Add a subscriber to a list

```bash
POST https://app.kirimemail.com/api/v1/subscriber

Authorization: {api_key}
Content-Type: application/json

{"list_id": "list_abc123", "email": "jane@example.com", "name": "Jane Doe"}
```

### Get all lists

```bash
GET https://app.kirimemail.com/api/v1/lists

Authorization: {api_key}
```

### Update subscriber fields

```bash
PUT https://app.kirimemail.com/api/v1/subscriber/{subscriber_id}

Authorization: {api_key}
Content-Type: application/json

{"name": "Jane Doe", "custom_fields": {"company": "Acme"}}
```

### Unsubscribe a contact

```bash
DELETE https://app.kirimemail.com/api/v1/subscriber/{list_id}/{email}

Authorization: {api_key}
```

### Get campaign stats

```bash
GET https://app.kirimemail.com/api/v1/campaigns/{campaign_id}/stats

Authorization: {api_key}
```

## Key Fields

### Subscriber Object
- `email` - Primary subscriber identifier
- `name` - Full name
- `list_id` - ID of the list the subscriber belongs to
- `status` - subscribed | unsubscribed | bounced
- `custom_fields` - Key/value pairs for custom subscriber data

### List Object
- `id` - Unique list ID
- `name` - List name
- `subscriber_count` - Total active subscribers

### Campaign Object
- `id` - Unique campaign ID
- `subject` - Email subject line
- `status` - Draft | Scheduled | Sent
- `sent_at` - Send timestamp

## Parameters

- `list_id` - Target list for subscriber operations
- `email` - Filter or identify subscriber by email
- `page` - Pagination page number
- `per_page` - Results per page

## When to Use

- Growing and managing email subscriber lists for Indonesian audiences
- Sending broadcast email campaigns to segmented lists
- Syncing subscribers from web forms or purchases to email lists
- Running automated onboarding sequences for new subscribers

## Rate Limits

- See kirimemail.com pricing page for plan-specific limits

## Relevant Skills

- email-marketing
- lead-generation
- content-creation
