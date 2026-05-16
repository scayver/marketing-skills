# Omnisend

Ecommerce-focused email and SMS marketing platform with advanced segmentation, omnichannel automation, and built-in ecommerce event tracking.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.omnisend.com/v3/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Key (header)
- **Header**: `X-API-KEY: {api_key}`
- **Get token**: Omnisend account > Store Settings > Integrations & API > API Keys > Generate API Key

## Common Agent Operations

### Create or update a contact
```bash
POST https://api.omnisend.com/v3/contacts

X-API-KEY: {api_key}
Content-Type: application/json

{"email": "user@example.com", "firstName": "Jane", "lastName": "Doe", "tags": ["website-lead"], "status": "subscribed", "statusDate": "2026-05-15T00:00:00Z"}
```

### Get a contact by email
```bash
GET https://api.omnisend.com/v3/contacts?email=user@example.com

X-API-KEY: {api_key}
```

### Track a custom event
```bash
POST https://api.omnisend.com/v3/events

X-API-KEY: {api_key}
Content-Type: application/json

{"email": "user@example.com", "eventName": "course_enrolled", "fields": {"course_name": "Intro to SEO"}}
```

### List campaigns
```bash
GET https://api.omnisend.com/v3/campaigns

X-API-KEY: {api_key}
```

## Key Fields

### Contact
- `email` - Email address (required)
- `firstName` - First name
- `lastName` - Last name
- `phone` - Phone number in E.164 format
- `tags` - Array of tag strings
- `status` - Subscription status (subscribed, nonSubscribed, unsubscribed)
- `customProperties` - Object of custom field key-value pairs

### Event
- `email` - Contact email
- `eventName` - Custom event name
- `fields` - Object of event property key-value pairs

## Parameters

- `email` - Filter contacts by email
- `tag` - Filter contacts by tag
- `status` - Filter by subscription status
- `limit` - Results per page (max 250)

## When to Use

- Growing and managing ecommerce email/SMS subscriber lists
- Triggering post-purchase, cart abandonment, or browse abandonment automations
- Segmenting audiences by purchase behavior, tags, or custom properties
- Tracking custom events to trigger behavioral automation workflows

## Rate Limits

- 400 requests per minute; see Omnisend API documentation for details

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
