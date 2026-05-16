# DirectIQ

Email marketing platform for small and mid-size businesses offering campaign creation, list management, subscriber segmentation, and deliverability analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API with API key authentication |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Key (request header or query parameter)
- **Header**: `X-API-KEY: {api_key}` or append `?api_key={api_key}` to URL
- **Get token**: DirectIQ account > Settings > API section

## Common Agent Operations

### List subscriber lists
```
GET https://api.directiq.com/v1/lists

X-API-KEY: {api_key}
```

### Add a subscriber to a list
```
POST https://api.directiq.com/v1/lists/{list_id}/subscribers

X-API-KEY: {api_key}
Content-Type: application/json

{
  "email": "jane@example.com",
  "first_name": "Jane",
  "last_name": "Smith"
}
```

### Update subscriber fields
```
PUT https://api.directiq.com/v1/subscribers/{subscriber_id}

X-API-KEY: {api_key}
Content-Type: application/json

{"first_name": "Jane", "custom_field_1": "VIP"}
```

### Unsubscribe a contact
```
DELETE https://api.directiq.com/v1/lists/{list_id}/subscribers/{email}

X-API-KEY: {api_key}
```

### Get campaign statistics
```
GET https://api.directiq.com/v1/campaigns/{campaign_id}/stats

X-API-KEY: {api_key}
```

## Key Fields

### Subscriber
- `email` - Email address (required)
- `first_name` - First name
- `last_name` - Last name
- `list_id` - Target list identifier

### List
- `id` - List identifier
- `name` - List display name
- `subscriber_count` - Active subscriber count

### Campaign
- `id` - Campaign identifier
- `name` - Campaign name
- `status` - draft / scheduled / sent
- `stats.opens` - Open count
- `stats.clicks` - Click count

## Parameters

- `list_id` - Targets a specific subscriber list
- `subscriber_id` - Targets a specific subscriber for updates
- `email` - Used to identify a subscriber for unsubscribe or lookup operations
- `campaign_id` - Targets a specific campaign for stats retrieval

## When to Use

- Growing email lists from web forms or e-commerce events
- Segmenting customers into separate lists by behavior or product
- Pulling campaign open and click performance for reporting
- Syncing buyer or enrollment data into email nurture lists

## Rate Limits

- See [directiq.com](https://www.directiq.com) or contact support for current limits

## Relevant Skills

- email-marketing
- lead-generation
- content-strategy
