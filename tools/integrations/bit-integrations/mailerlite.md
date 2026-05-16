# MailerLite

Affordable email marketing platform known for its clean editor, generous free plan, and automation capabilities.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API for subscribers, groups, segments, campaigns, automations |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official PHP SDK; community SDKs for Python, Node |

## Authentication

- **Type**: Bearer Token
- **Header**: `Authorization: Bearer {api_token}`
- **Get token**: MailerLite Integrations > API > Generate new token

## Common Agent Operations

### Create or update a subscriber

```bash
POST https://connect.mailerlite.com/api/subscribers

Authorization: Bearer {api_token}
Content-Type: application/json

{"email": "jane@example.com", "fields": {"name": "Jane Doe", "last_name": "Doe"}, "groups": ["group_id_here"]}
```

### Add subscriber to a group

```bash
POST https://connect.mailerlite.com/api/subscribers/{subscriber_id}/groups/{group_id}

Authorization: Bearer {api_token}
```

### Get all groups

```bash
GET https://connect.mailerlite.com/api/groups?limit=50

Authorization: Bearer {api_token}
```

### Get subscribers in a group

```bash
GET https://connect.mailerlite.com/api/groups/{group_id}/subscribers?limit=100

Authorization: Bearer {api_token}
```

### Get automations

```bash
GET https://connect.mailerlite.com/api/automations

Authorization: Bearer {api_token}
```

## Key Fields

### Subscriber Object
- `id` - Unique subscriber ID
- `email` - Primary email address
- `status` - active | unsubscribed | bounced | junk | unconfirmed
- `fields` - Custom field values (name, last_name, company, phone, etc.)
- `groups` - Array of group objects subscriber belongs to
- `subscribed_at` - Subscription timestamp

### Group Object
- `id` - Group ID
- `name` - Group name
- `active_count` - Number of active subscribers

### Automation
- `id` - Automation ID
- `name` - Automation name
- `status` - active | draft
- `trigger` - Trigger type (signup, date, etc.)

## Parameters

- `limit` - Results per page (max 1000)
- `cursor` - Cursor for pagination
- `filter[status]` - Filter subscribers by status
- `sort` - Sort field

## When to Use

- Growing email lists with a clean, affordable platform
- Segmenting subscribers into groups by lead source or behavior
- Running automated email sequences triggered by subscriber events
- Sending newsletters and campaigns to targeted subscriber groups

## Rate Limits

- 120 requests per minute
- See developers.mailerlite.com for endpoint-specific limits

## Relevant Skills

- email-marketing
- lead-generation
- content-creation
