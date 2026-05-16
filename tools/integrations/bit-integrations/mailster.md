# Mailster

WordPress-native newsletter plugin for managing subscribers, campaigns, and automated email sequences.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/mailster/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password or cookie-based auth
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all subscriber lists
```bash
GET https://yoursite.com/wp-json/mailster/v1/lists

Authorization: Basic {base64_credentials}
```

### Add a subscriber
```bash
POST https://yoursite.com/wp-json/mailster/v1/subscribers

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"email": "user@example.com", "first_name": "Jane", "last_name": "Doe", "list": [1, 2]}
```

### Get subscriber by email
```bash
GET https://yoursite.com/wp-json/mailster/v1/subscribers?email=user@example.com

Authorization: Basic {base64_credentials}
```

### Get campaigns
```bash
GET https://yoursite.com/wp-json/mailster/v1/campaigns

Authorization: Basic {base64_credentials}
```

### Unsubscribe a contact
```bash
DELETE https://yoursite.com/wp-json/mailster/v1/subscribers/{id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Subscriber
- `email` - Subscriber email address (required)
- `first_name` - First name
- `last_name` - Last name
- `list` - Array of list IDs to subscribe to
- `status` - Subscription status (0=unconfirmed, 1=subscribed, -1=unsubscribed)

### Campaign
- `ID` - Campaign post ID
- `post_title` - Campaign name
- `status` - Campaign status (draft, sent, etc.)

## Parameters

- `email` - Filter subscribers by email
- `list` - Filter by list ID
- `status` - Filter by subscription status
- `per_page` - Results per page (default 10)

## When to Use

- Managing email newsletter lists hosted on a self-managed WordPress site
- Automating subscriber additions from form submissions or e-commerce events
- Building segmented lists based on user behavior or purchase history
- Running automated onboarding email sequences for new members or customers

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- marketing:email-sequence
- marketing:draft-content
- marketing:campaign-plan
