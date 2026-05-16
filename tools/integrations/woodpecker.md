# Woodpecker

Woodpecker is a B2B cold email outreach platform for automating personalized email campaigns and multi-step follow-up sequences targeted at sales prospects.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.woodpecker.co/rest/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Not available |

## Authentication

- **Type**: API Key
- **Header**: `Authorization: Bearer {api_key}`
- **Get token**: Woodpecker dashboard > Settings > Integrations > API Keys

## Common Agent Operations

### List all campaigns
```
GET https://api.woodpecker.co/rest/v1/campaigns

Authorization: Bearer {api_key}
```

### Add a prospect to a campaign
```
POST https://api.woodpecker.co/rest/v1/prospects

Authorization: Bearer {api_key}
Content-Type: application/json

{
  "prospects": [
    {
      "email": "jane@company.com",
      "first_name": "Jane",
      "last_name": "Smith",
      "company": "Acme Corp",
      "campaign": {"id": 12345}
    }
  ]
}
```

### Get campaign statistics
```
GET https://api.woodpecker.co/rest/v1/campaign_list/{campaign_id}/stats

Authorization: Bearer {api_key}
```

### Update a prospect
```
PUT https://api.woodpecker.co/rest/v1/prospects

Authorization: Bearer {api_key}
Content-Type: application/json

{
  "email": "jane@company.com",
  "status": "REPLIED"
}
```

## Key Fields

### Prospect Object
- `email` - Prospect email address (required)
- `first_name` - First name
- `last_name` - Last name
- `company` - Company name
- `industry` - Industry vertical
- `website` - Company website
- `status` - `ACTIVE`, `BOUNCED`, `REPLIED`, `INTERESTED`, `NOT_INTERESTED`, `MAYBE_LATER`
- `campaign.id` - Campaign to enroll the prospect in

### Campaign Object
- `id` - Campaign ID
- `status` - `RUNNING`, `PAUSED`, `COMPLETED`, `DRAFT`
- `name` - Campaign name
- `from_email` - Sending email address

### Stats Object
- `sent` - Total emails sent
- `opened` - Open count
- `clicked` - Click count
- `replied` - Reply count
- `bounced` - Bounce count

## Parameters

- `campaign` - Campaign ID to filter prospects
- `status` - Filter prospects by status
- `per_page` - Results per page

## When to Use

- Enrolling new B2B leads into cold outreach sequences automatically
- Syncing prospect status changes back to CRM on reply or interest signal
- Auditing campaign performance for outreach strategy optimization
- Building lead pipeline from inbound form data into outbound sequences

## Rate Limits

- 200 requests per minute
- See: [Woodpecker API Docs](https://woodpecker.co/api/)

## Relevant Skills

- sales:draft-outreach
- sales:account-research
- marketing:campaign-plan
