# EmailOctopus

Affordable email marketing platform built on Amazon SES, offering list management, campaigns, and automation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1.6 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API-only; community libraries available |

## Authentication

- **Type**: API Key (query parameter)
- **Parameter**: `api_key={your_api_key}`
- **Get token**: EmailOctopus Dashboard > API

## Common Agent Operations

### Add contact to list
```bash
POST https://emailoctopus.com/api/1.6/lists/{list_id}/contacts

Content-Type: application/json

{
  "api_key": "{your_api_key}",
  "email_address": "user@example.com",
  "fields": {"FirstName": "Jane", "LastName": "Doe"},
  "status": "SUBSCRIBED"
}
```

### Get list contacts
```bash
GET https://emailoctopus.com/api/1.6/lists/{list_id}/contacts?api_key={your_api_key}&limit=100
```

### Get single contact
```bash
GET https://emailoctopus.com/api/1.6/lists/{list_id}/contacts/{contact_id}?api_key={your_api_key}
```

### List campaigns
```bash
GET https://emailoctopus.com/api/1.6/campaigns?api_key={your_api_key}
```

### Get campaign report
```bash
GET https://emailoctopus.com/api/1.6/campaigns/{campaign_id}/reports/summary?api_key={your_api_key}
```

## Key Fields

### Contact
- `id` - Contact UUID
- `email_address` - Primary identifier
- `fields` - Custom field map (FirstName, LastName, etc.)
- `status` - SUBSCRIBED, UNSUBSCRIBED, PENDING

### Campaign
- `id` - Campaign UUID
- `name` - Campaign name
- `status` - DRAFT, SENDING, SENT
- `created_at` - ISO 8601 timestamp

### Report Summary
- `sent` - Total emails sent
- `opened` - Unique opens
- `clicked` - Unique clicks
- `bounced` - Bounces
- `unsubscribed` - Unsubscribes

## Parameters

- `limit` - Max results per page (default 100, max 100)
- `page` - Cursor-based pagination token

## When to Use

- Add new subscribers to a marketing list
- Sync contacts from a signup form
- Pull campaign performance metrics for reporting
- Manage subscriber status (subscribe/unsubscribe)

## Rate Limits

- See EmailOctopus pricing page; varies by plan

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
