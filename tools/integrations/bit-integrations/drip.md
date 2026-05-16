# Drip

E-commerce-focused email marketing and automation platform known for deep behavioral segmentation, event-based workflows, revenue attribution, and powerful subscriber tagging.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v2 at api.getdrip.com |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official Ruby gem; community PHP and Node.js libraries |

## Authentication

- **Type**: Bearer Token (API token)
- **Header**: `Authorization: Bearer {api_token}`
- **Get token**: Drip account > User Settings > User Info > API Token
- **Account ID**: Found in the URL when logged in: `app.getdrip.com/{account_id}/`

## Common Agent Operations

### Create or update a subscriber
```
POST https://api.getdrip.com/v2/{account_id}/subscribers

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "subscribers": [{
    "email": "jane@example.com",
    "first_name": "Jane",
    "last_name": "Smith",
    "tags": ["lead", "webinar-2026"],
    "custom_fields": {"source": "website", "plan": "pro"},
    "new_email": null
  }]
}
```

### Apply a tag to a subscriber
```
POST https://api.getdrip.com/v2/{account_id}/tags

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "tags": [{
    "email": "jane@example.com",
    "tag": "customer"
  }]
}
```

### Record a custom event
```
POST https://api.getdrip.com/v2/{account_id}/events

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "events": [{
    "email": "jane@example.com",
    "action": "Purchased",
    "properties": {"product_name": "Pro Plan", "value": "99.00"}
  }]
}
```

### Unsubscribe a contact
```
POST https://api.getdrip.com/v2/{account_id}/unsubscribes

Authorization: Bearer {api_token}
Content-Type: application/json

{"unsubscribes": [{"email": "jane@example.com"}]}
```

### Get subscriber details
```
GET https://api.getdrip.com/v2/{account_id}/subscribers/{subscriber_id_or_email}

Authorization: Bearer {api_token}
```

## Key Fields

### Subscriber
- `email` - Email address (required)
- `first_name` / `last_name` - Name fields
- `tags` - Array of tag strings to apply
- `custom_fields` - Object of key/value pairs for custom data
- `status` - active / unsubscribed / bounced

### Event
- `email` - Subscriber email to associate the event with
- `action` - Event name string (e.g., "Purchased", "Signed Up")
- `properties` - Object of arbitrary key/value metadata

## Parameters

- `account_id` - Required in every URL path
- `subscriber_id` - Numeric ID or email address for single subscriber lookup
- `page` - Pagination page number (1-indexed)
- `per_page` - Results per page (max 1000)

## When to Use

- Adding e-commerce customers to behavioral email workflows based on purchase history
- Tagging subscribers by product, behavior, or lead source for fine-grained segmentation
- Recording custom events (purchases, enrollments, upgrades) to trigger Drip automations
- Syncing high-value subscriber data from an external CRM into Drip for email personalization

## Rate Limits

- 3,600 requests per hour per account
- See [developer.drip.com](https://developer.drip.com) for current limits

## Relevant Skills

- email-marketing
- ecommerce
- lead-generation
