# Newsletter

Popular WordPress-native newsletter and email marketing plugin for managing subscribers, segmenting lists, and sending campaigns directly from WordPress.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/newsletter/v2/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Get subscriber by email
```bash
GET https://yoursite.com/wp-json/newsletter/v2/subscribers?email=user@example.com

Authorization: Basic {base64_credentials}
```

### Add a subscriber
```bash
POST https://yoursite.com/wp-json/newsletter/v2/subscribers

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"email": "user@example.com", "name": "Jane Doe", "status": "C", "lists": {"1": 1}}
```

### Update subscriber status
```bash
PUT https://yoursite.com/wp-json/newsletter/v2/subscribers/{id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"status": "U"}
```

### Get newsletter statistics
```bash
GET https://yoursite.com/wp-json/newsletter/v2/statistics

Authorization: Basic {base64_credentials}
```

## Key Fields

### Subscriber
- `id` - Subscriber ID
- `email` - Email address (required)
- `name` - Display name
- `status` - `C` (confirmed), `S` (subscribed), `U` (unsubscribed), `B` (bounced)
- `lists` - Object mapping list ID to subscription status (`1` = subscribed)

### Newsletter Campaign
- `id` - Newsletter post ID
- `subject` - Email subject line
- `status` - Campaign status (draft, sent, etc.)
- `sent` - Number of emails sent

## Parameters

- `email` - Filter subscribers by email
- `status` - Filter by subscription status
- `list` - Filter by list ID
- `per_page` - Results per page

## When to Use

- Managing newsletter subscribers hosted entirely on a self-managed WordPress site
- Automating subscriber additions from form submissions or e-commerce events
- Segmenting subscribers across multiple lists for targeted campaigns
- Running newsletter campaigns without a third-party email service provider

## Rate Limits

- Limited by WordPress server capacity and your email delivery provider

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:draft-content
