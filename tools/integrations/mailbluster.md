# MailBluster

Bulk email marketing platform built on Amazon SES for high-volume sending at low per-email cost with a hosted management interface.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API for subscribers and campaigns |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API only |

## Authentication

- **Type**: API Key
- **Header**: `Authorization: {api_key}`
- **Get key**: MailBluster account > Settings > API

## Common Agent Operations

### Create a subscriber

```bash
POST https://app.mailbluster.com/api/leads

Authorization: {api_key}
Content-Type: application/json

{"email": "jane@example.com", "firstName": "Jane", "lastName": "Doe", "subscribed": true}
```

### Update a subscriber

```bash
PUT https://app.mailbluster.com/api/leads/{email}

Authorization: {api_key}
Content-Type: application/json

{"firstName": "Jane", "subscribed": true, "fields": {"company": "Acme Corp"}}
```

### Get subscriber details

```bash
GET https://app.mailbluster.com/api/leads/{email}

Authorization: {api_key}
```

### Delete a subscriber

```bash
DELETE https://app.mailbluster.com/api/leads/{email}

Authorization: {api_key}
```

### Get all campaigns

```bash
GET https://app.mailbluster.com/api/campaigns

Authorization: {api_key}
```

## Key Fields

### Subscriber (Lead) Object
- `email` - Primary subscriber identifier
- `firstName`, `lastName` - Name fields
- `subscribed` - true | false
- `fields` - Custom field key/value pairs
- `timezone` - Subscriber timezone
- `countryCode` - Two-letter country code

### Campaign Object
- `id` - Unique campaign ID
- `name` - Campaign name
- `subject` - Email subject
- `status` - Draft | Scheduled | Sent
- `scheduledDateTime` - Scheduled send time

## Parameters

- `email` - Subscriber email as path parameter
- `subscribed` - true to subscribe, false to unsubscribe
- `fields` - Object of custom field key/value pairs

## When to Use

- Sending high-volume email campaigns at Amazon SES rates
- Managing large subscriber lists with custom segmentation fields
- Building cost-effective bulk email infrastructure for SaaS or ecommerce
- Syncing subscribers from web forms or purchases into a bulk sender

## Rate Limits

- Limited by Amazon SES sending quota for the connected account
- See mailbluster.com documentation for API-specific rate limits

## Relevant Skills

- email-marketing
- lead-generation
- ecommerce
