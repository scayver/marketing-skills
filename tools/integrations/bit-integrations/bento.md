# Bento

Behavior-based email marketing and automation platform built for developers and SaaS businesses — combines event tracking, segmentation, tagging, broadcast emails, and transactional email in one platform.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://app.bentonow.com/api/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official Ruby, Node.js, PHP, Python SDKs |

## Authentication

- **Type**: HTTP Basic Auth with Publishable Key + Secret Key
- **Header**: `Authorization: Basic {base64(publishable_key:secret_key)}`
- **Get token**: Bento > Settings > API Keys — copy Publishable Key and Secret Key

## Common Agent Operations

### Subscribe a contact

```bash
POST https://app.bentonow.com/api/v1/fetch/subscribers

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "site_uuid": "{site_uuid}",
  "subscriber": {
    "email": "jane@example.com",
    "first_name": "Jane",
    "last_name": "Doe"
  }
}
```

### Add tags to a subscriber

```bash
POST https://app.bentonow.com/api/v1/fetch/tags

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "site_uuid": "{site_uuid}",
  "tag_name": "purchased",
  "subscriber": {"email": "jane@example.com"}
}
```

### Track a custom event

```bash
POST https://app.bentonow.com/api/v1/fetch/events

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "site_uuid": "{site_uuid}",
  "events": [
    {
      "email": "jane@example.com",
      "type": "$purchase",
      "fields": {"order_id": "WC-1234", "amount": 99.00}
    }
  ]
}
```

### Get subscriber details

```bash
GET https://app.bentonow.com/api/v1/fetch/subscribers?site_uuid={site_uuid}&email=jane@example.com

Authorization: Basic {base64_credentials}
```

### Remove a tag from a subscriber

```bash
DELETE https://app.bentonow.com/api/v1/fetch/tags

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"site_uuid": "{site_uuid}", "tag_name": "trial", "subscriber": {"email": "jane@example.com"}}
```

## Key Fields

### Subscriber
- `email` - Email address (required, unique identifier)
- `first_name`, `last_name` - Name fields
- `tags` - Array of applied tag strings
- `fields` - Custom field key-value pairs
- `uuid` - Bento-generated subscriber UUID

### Event
- `type` - Event name (e.g., `$purchase`, `$pageview`, `course_completed`)
- `fields` - Event-specific metadata object
- `email` - Subscriber email the event belongs to

## Parameters

- `site_uuid` - Required on all requests — your Bento site identifier
- `email` - Filter or identify subscriber by email

## When to Use

- Tracking SaaS or e-commerce user behavior events for behavior-based automation
- Subscribing users from sign-up or lead capture forms with tag-based segmentation
- Triggering email sequences based on specific events (purchase, trial start, feature use)
- Sending transactional emails alongside behavioral marketing campaigns

## Rate Limits

- See Bento pricing page for rate limits and subscriber limits by plan

## Relevant Skills

- email-marketing
- lead-generation
- ecommerce
