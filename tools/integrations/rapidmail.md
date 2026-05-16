# Rapidmail

German email marketing platform focused on GDPR compliance, reliable deliverability, and straightforward newsletter and campaign management for European businesses.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.rapidmail.io/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK; standard REST |

## Authentication

- **Type**: HTTP Basic Authentication
- **Header**: `Authorization: Basic {base64(username:password)}`
- **Get credentials**: Rapidmail account > Settings > API section (API username and password)

## Common Agent Operations

### List recipient lists

```bash
GET https://api.rapidmail.io/recipientlists

Authorization: Basic {base64(username:password)}
```

### Create recipient (subscribe)

```bash
POST https://api.rapidmail.io/recipients

Authorization: Basic {base64(username:password)}
Content-Type: application/json

{"recipientlist_id": 12345, "email": "jane@example.com", "firstname": "Jane", "lastname": "Doe"}
```

### Get recipient

```bash
GET https://api.rapidmail.io/recipients?email=jane@example.com

Authorization: Basic {base64(username:password)}
```

### List mailings

```bash
GET https://api.rapidmail.io/mailings

Authorization: Basic {base64(username:password)}
```

### Get mailing statistics

```bash
GET https://api.rapidmail.io/mailings/{mailing_id}/stats

Authorization: Basic {base64(username:password)}
```

## Key Fields

### Recipient Object
- `id` - Recipient ID
- `email` - Email address
- `firstname` - First name
- `lastname` - Last name
- `recipientlist_id` - List ID
- `created` - Subscription date
- `status` - active / unsubscribed / bounced

### Mailing Object
- `id` - Mailing ID
- `name` - Campaign name
- `status` - draft / scheduled / sent
- `sent_at` - Send timestamp
- `recipient_count` - Number of recipients

## Parameters

- `recipientlist_id` - Target specific list
- `email` - Filter by email address
- `status` - Filter by status
- `limit` - Results per page

## When to Use

- Managing email marketing for European audiences with GDPR compliance
- Growing subscriber lists from web forms and landing pages
- Sending newsletters and promotional campaigns
- Tracking open rates, click rates, and unsubscribes

## Rate Limits

- See Rapidmail pricing page for plan limits

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
