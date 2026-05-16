# Klaviyo

Email and SMS marketing platform built for ecommerce with deep behavioral segmentation and automated flows.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Full REST API for profiles, lists, events, campaigns, flows |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official Python SDK; community SDKs for Node, PHP |

## Authentication

- **Type**: Private API Key
- **Header**: `Authorization: Klaviyo-API-Key {api_key}`
- **Revision header**: `revision: 2024-02-15` (required)
- **Get key**: Klaviyo Settings > Account > API Keys > Create Private API Key

## Common Agent Operations

### Create or update a profile

```bash
POST https://a.klaviyo.com/api/profiles/

Authorization: Klaviyo-API-Key {api_key}
revision: 2024-02-15
Content-Type: application/json

{"data": {"type": "profile", "attributes": {"email": "jane@example.com", "first_name": "Jane", "last_name": "Doe"}}}
```

### Subscribe a profile to a list

```bash
POST https://a.klaviyo.com/api/lists/{list_id}/relationships/profiles/

Authorization: Klaviyo-API-Key {api_key}
revision: 2024-02-15
Content-Type: application/json

{"data": [{"type": "profile", "id": "{profile_id}"}]}
```

### Track a custom event

```bash
POST https://a.klaviyo.com/api/events/

Authorization: Klaviyo-API-Key {api_key}
revision: 2024-02-15
Content-Type: application/json

{"data": {"type": "event", "attributes": {"profile": {"email": "jane@example.com"}, "metric": {"name": "Completed Purchase"}, "properties": {"order_value": 99.00}}}}
```

### Get all lists

```bash
GET https://a.klaviyo.com/api/lists/

Authorization: Klaviyo-API-Key {api_key}
revision: 2024-02-15
```

### Get segments

```bash
GET https://a.klaviyo.com/api/segments/

Authorization: Klaviyo-API-Key {api_key}
revision: 2024-02-15
```

## Key Fields

### Profile Object
- `email` - Primary identifier
- `first_name`, `last_name` - Name fields
- `phone_number` - E.164 format for SMS
- `properties` - Custom profile attributes (key/value)
- `location` - Nested address object

### Event Object
- `metric` - Event name (e.g., "Viewed Product", "Completed Purchase")
- `properties` - Event-specific data (order value, product name)
- `time` - ISO 8601 event timestamp

### List / Segment
- `id` - Unique list/segment ID
- `name` - Display name
- `created` - Creation date

## Parameters

- `filter` - Filter expression (e.g., `equals(email,"jane@example.com")`)
- `fields[profile]` - Comma-separated fields to return
- `page[cursor]` - Cursor for pagination
- `sort` - Sort field and direction

## When to Use

- Building post-purchase email and SMS flows for ecommerce stores
- Segmenting customers by purchase behavior, LTV, or engagement
- Tracking custom events to trigger behavioral automations
- Growing and nurturing email and SMS subscriber lists

## Rate Limits

- 75 burst / 700 steady-state requests per minute (private key)
- See developers.klaviyo.com for per-endpoint limits

## Relevant Skills

- email-marketing
- ecommerce
- lead-generation
