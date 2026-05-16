# Elastic Email

Cost-effective email delivery and marketing platform for bulk sending, contact management, and campaign automation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v4 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official libraries for PHP, Python, Node.js, C# |

## Authentication

- **Type**: API Key
- **Header**: `X-ElasticEmail-ApiKey: {api_key}`
- **Get token**: Elastic Email Dashboard > Settings > API

## Common Agent Operations

### Add or update contact
```bash
POST https://api.elasticemail.com/v4/contacts

X-ElasticEmail-ApiKey: {api_key}
Content-Type: application/json

{
  "Email": "user@example.com",
  "FirstName": "Jane",
  "LastName": "Doe",
  "Status": "Active"
}
```

### List contacts
```bash
GET https://api.elasticemail.com/v4/contacts?limit=100&offset=0

X-ElasticEmail-ApiKey: {api_key}
```

### Send transactional email
```bash
POST https://api.elasticemail.com/v4/emails/transactional

X-ElasticEmail-ApiKey: {api_key}
Content-Type: application/json

{
  "Recipients": {"To": ["user@example.com"]},
  "Content": {
    "From": "sender@yourdomain.com",
    "Subject": "Welcome!",
    "Body": [{"ContentType": "HTML", "Content": "<p>Hello</p>"}]
  }
}
```

### List campaigns
```bash
GET https://api.elasticemail.com/v4/campaigns

X-ElasticEmail-ApiKey: {api_key}
```

## Key Fields

### Contact
- `Email` - Primary identifier
- `FirstName` / `LastName` - Name fields
- `Status` - Active, Unsubscribed, Bounced, Engaged
- `CustomFields` - Key-value custom attributes

### Campaign
- `Name` - Campaign name
- `Status` - Draft, Scheduled, Running, Paused, Cancelled
- `Content` - Subject, from address, body

## Parameters

- `limit` - Max results (default 100)
- `offset` - Pagination offset
- `status` - Filter contacts by status

## When to Use

- Send transactional emails on purchase or signup
- Manage bulk marketing list contacts
- Launch and monitor email campaigns
- Sync contact status from external CRM

## Rate Limits

- See Elastic Email pricing page; varies by plan

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:draft-content
