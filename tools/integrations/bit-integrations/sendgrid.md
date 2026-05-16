# SendGrid

Cloud-based email delivery and marketing platform by Twilio for high-volume transactional and marketing email sending with advanced analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.sendgrid.com/v3/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official SDKs for Python, Node.js, Ruby, PHP, Go, Java, C# |

## Authentication

- **Type**: API Key (Bearer)
- **Header**: `Authorization: Bearer {api_key}`
- **Get token**: SendGrid Settings > API Keys > Create API Key

## Common Agent Operations

### Send email

```bash
POST https://api.sendgrid.com/v3/mail/send

Authorization: Bearer {api_key}
Content-Type: application/json

{
  "personalizations": [{"to": [{"email": "jane@example.com"}]}],
  "from": {"email": "sender@yourdomain.com"},
  "subject": "Hello, Jane!",
  "content": [{"type": "text/plain", "value": "Your message here"}]
}
```

### Add/update marketing contacts

```bash
PUT https://api.sendgrid.com/v3/marketing/contacts

Authorization: Bearer {api_key}
Content-Type: application/json

{"list_ids": ["abc123"], "contacts": [{"email": "jane@example.com", "first_name": "Jane", "last_name": "Doe"}]}
```

### List marketing lists

```bash
GET https://api.sendgrid.com/v3/marketing/lists

Authorization: Bearer {api_key}
```

### Search contacts

```bash
POST https://api.sendgrid.com/v3/marketing/contacts/search

Authorization: Bearer {api_key}
Content-Type: application/json

{"query": "email LIKE 'jane%'"}
```

### Get email statistics

```bash
GET https://api.sendgrid.com/v3/stats?start_date=2026-05-01&end_date=2026-05-15

Authorization: Bearer {api_key}
```

## Key Fields

### Contact Object
- `id` - Contact ID
- `email` - Email address
- `first_name` - First name
- `last_name` - Last name
- `list_ids` - Array of list IDs
- `custom_fields` - Custom field values

### Email Send Object
- `personalizations` - Array of recipient objects
- `from` - Sender email and name
- `subject` - Email subject
- `content` - Array of content objects (text/plain, text/html)
- `template_id` - Dynamic template ID

### Statistics Object
- `date` - Date
- `stats[].metrics.delivered` - Delivered count
- `stats[].metrics.opens` - Opens count
- `stats[].metrics.clicks` - Clicks count
- `stats[].metrics.bounces` - Bounce count

## Parameters

- `start_date` - Stats start date (YYYY-MM-DD)
- `end_date` - Stats end date
- `page_size` - Results per page (max 1000)
- `page_token` - Pagination token

## When to Use

- Sending high-volume transactional emails (receipts, notifications, password resets)
- Managing marketing contact lists and segmentation
- Running email campaigns with dynamic templates
- Monitoring deliverability metrics and bounce rates

## Rate Limits

- Free: 100 emails/day; Essentials: 40K/month; Pro/Premier: higher limits
- API: 3,000 requests/second burst, sustained limits by plan

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
