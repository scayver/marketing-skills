# Mailrelay

Email marketing platform for subscriber management, campaigns, and automation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API or webhook API for core platform operations |
| MCP | - | Not available |
| CLI | - | Not available unless provided by the platform |
| SDK | ✓ | SDK availability varies by language and plan |

## Authentication

- **Type**: API Token, OAuth 2.0, or signed webhook URL depending on account setup
- **Header**: `Authorization: Bearer {api_token}`
- **Get token**: Developer settings, API settings, private app settings, or webhook settings inside the Mailrelay dashboard

## Common Agent Operations

### List records

```bash
GET https://api.mailrelay.com/v1/records?limit=50

Authorization: Bearer {api_token}
```

### Get one record

```bash
GET https://api.mailrelay.com/v1/records/{record_id}

Authorization: Bearer {api_token}
```

### Create record

```bash
POST https://api.mailrelay.com/v1/records

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "email": "customer@example.com",
  "first_name": "Jane",
  "last_name": "Doe",
  "source": "website"
}
```

### Update record

```bash
PATCH https://api.mailrelay.com/v1/records/{record_id}

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "status": "active",
  "tags": ["lead", "website"]
}
```

### Send event or webhook payload

```bash
POST https://api.mailrelay.com/v1/events

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "event": "form_submitted",
  "email": "customer@example.com",
  "properties": {
    "page_url": "https://example.com/contact",
    "campaign": "spring-launch"
  }
}
```

## Key Fields

- `id` - Unique platform record identifier
- `email` - Contact or user email address
- `first_name` - First name
- `last_name` - Last name
- `phone` - Phone number when supported
- `status` - Record, subscriber, deal, ticket, or workflow state
- `tags` - Segmentation, source, or lifecycle labels
- `created_at` - Record creation timestamp
- `updated_at` - Last update timestamp

## Parameters

- `limit` - Number of records returned per request
- `offset` or `page` - Pagination position
- `sort` - Sort field and direction when supported
- `filter` - Field-level filter expression
- `query` - Search term for matching records

## When to Use

- Sync website leads or customer records
- Enrich customer profiles
- Trigger follow-up workflows
- Report on campaign or lifecycle performance
- Connect marketing, sales, support, and operations data

## Rate Limits

- Varies by plan and endpoint
- OAuth apps often receive per-minute and daily limits
- Bulk imports may use separate async limits
- Use pagination and backoff for large sync jobs

## Relevant Skills

- email-marketing
- emails
- analytics
