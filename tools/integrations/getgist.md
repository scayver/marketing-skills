# Gist (GetGist)

Customer messaging and marketing automation platform combining live chat, email, and CRM for growing businesses.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | JavaScript SDK for browser tracking |

## Authentication

- **Type**: Bearer Token (API Key)
- **Header**: `Authorization: Bearer {api_key}`
- **Get token**: Gist App > Settings > Integrations > API

## Common Agent Operations

### Create or update contact
```bash
POST https://api.getgist.com/contacts

Authorization: Bearer {api_key}
Content-Type: application/json

{
  "email": "jane@example.com",
  "name": "Jane Doe",
  "custom_properties": {"plan": "pro", "signup_source": "landing-page"}
}
```

### Get contact by email
```bash
GET https://api.getgist.com/contacts?email=jane@example.com

Authorization: Bearer {api_key}
```

### Track event
```bash
POST https://api.getgist.com/events

Authorization: Bearer {api_key}
Content-Type: application/json

{
  "email": "jane@example.com",
  "name": "Upgraded Plan",
  "properties": {"from_plan": "basic", "to_plan": "pro"}
}
```

### List conversations
```bash
GET https://api.getgist.com/conversations

Authorization: Bearer {api_key}
```

## Key Fields

### Contact
- `id` - Contact ID
- `email` - Primary identifier
- `name` - Full name
- `signed_up_at` - Registration date
- `custom_properties` - Custom attribute map
- `tags` - Array of tag strings

### Event
- `name` - Event name
- `email` - Contact email
- `properties` - Custom attribute map
- `created_at` - Event timestamp

### Conversation
- `id` - Conversation ID
- `state` - open, closed, snoozed
- `contact_id` - Linked contact
- `created_at` - Start time

## Parameters

- `email` - Filter contacts by email
- `page` / `per_page` - Pagination

## When to Use

- Sync new signups as contacts for behavioral automation
- Track product events to trigger lifecycle emails
- Manage live chat conversations from external triggers
- Segment contacts by custom properties for campaigns

## Rate Limits

- See Gist pricing page; varies by plan

## Relevant Skills

- marketing:email-sequence
- sales:draft-outreach
- customer-support:customer-research
