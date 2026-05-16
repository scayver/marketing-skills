# Freshsales

CRM platform by Freshworks with AI-powered contact management, deal tracking, and built-in phone and email tools.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API (Freshsales Suite) |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API-only |

## Authentication

- **Type**: Bearer Token (API Key)
- **Header**: `Authorization: Token token={api_key}`
- **Get token**: Freshsales > Settings > API Settings > Your API Key

## Common Agent Operations

### List contacts
```bash
GET https://YOUR_DOMAIN.myfreshworks.com/crm/sales/api/contacts?per_page=50

Authorization: Token token={api_key}
```

### Create contact
```bash
POST https://YOUR_DOMAIN.myfreshworks.com/crm/sales/api/contacts

Authorization: Token token={api_key}
Content-Type: application/json

{
  "contact": {
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane@example.com",
    "mobile_number": "+1234567890"
  }
}
```

### List deals
```bash
GET https://YOUR_DOMAIN.myfreshworks.com/crm/sales/api/deals

Authorization: Token token={api_key}
```

### Create deal
```bash
POST https://YOUR_DOMAIN.myfreshworks.com/crm/sales/api/deals

Authorization: Token token={api_key}
Content-Type: application/json

{
  "deal": {
    "name": "Acme Corp Renewal",
    "amount": 5000,
    "contact_id": 123,
    "deal_stage_id": 2
  }
}
```

## Key Fields

### Contact
- `id` - Contact ID
- `first_name` / `last_name` - Name
- `email` - Email address
- `mobile_number` - Phone number
- `owner_id` - Assigned sales rep
- `lead_source_id` - Source of lead
- `created_at` - ISO 8601 timestamp

### Deal
- `id` - Deal ID
- `name` - Deal name
- `amount` - Deal value
- `deal_stage_id` - Current pipeline stage
- `contact_id` - Primary contact
- `account_id` - Linked account
- `close_date` - Expected close date

## Parameters

- `per_page` - Results per page (max 100)
- `page` - Page number
- `sort` / `sort_type` - Sort field and direction
- `filter_id` - Saved filter ID

## When to Use

- Add leads from web forms directly to Freshsales CRM
- Update deal stages from external payment events
- Sync account data from billing systems
- Trigger outreach sequences on deal stage changes

## Rate Limits

- 1000 API calls/hour; see Freshsales pricing for plan limits

## Relevant Skills

- sales:account-research
- sales:pipeline-review
- sales:draft-outreach
