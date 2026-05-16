# Salesflare

Automated B2B CRM for startups and small businesses that reduces manual data entry by pulling contact and company data from email, social profiles, and calendar automatically.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.salesflare.com/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK; standard REST |

## Authentication

- **Type**: API Token (Bearer)
- **Header**: `Authorization: Bearer {api_key}`
- **Get token**: Salesflare Settings > Integrations > API > Generate API Key

## Common Agent Operations

### List contacts

```bash
GET https://api.salesflare.com/contacts

Authorization: Bearer {api_key}
```

### Create contact

```bash
POST https://api.salesflare.com/contacts

Authorization: Bearer {api_key}
Content-Type: application/json

{"firstname": "Jane", "lastname": "Doe", "email": ["jane@example.com"], "phone_number": ["+1-555-0100"]}
```

### List accounts (companies)

```bash
GET https://api.salesflare.com/accounts

Authorization: Bearer {api_key}
```

### Create opportunity

```bash
POST https://api.salesflare.com/opportunities

Authorization: Bearer {api_key}
Content-Type: application/json

{"name": "Acme Corp Deal", "account_id": 42, "value": 5000, "stage": "Contacted"}
```

### List tasks

```bash
GET https://api.salesflare.com/tasks

Authorization: Bearer {api_key}
```

## Key Fields

### Contact Object
- `id` - Contact ID
- `firstname` - First name
- `lastname` - Last name
- `email` - Array of email addresses
- `phone_number` - Array of phone numbers
- `account` - Associated account object

### Opportunity Object
- `id` - Opportunity ID
- `name` - Opportunity name
- `value` - Deal value
- `stage` - Pipeline stage
- `account_id` - Associated account ID
- `close_date` - Expected close date

### Account Object
- `id` - Account ID
- `name` - Company name
- `website` - Company website (used for auto-enrichment)

## Parameters

- `page` - Page number
- `per_page` - Results per page
- `search` - Search by name or email

## When to Use

- Managing B2B sales pipelines with automated contact enrichment
- Logging leads from external sources with minimal manual entry
- Tracking opportunities and accounts for small sales teams
- Syncing website form submissions into the CRM automatically

## Rate Limits

- See Salesflare pricing page for plan-based limits

## Relevant Skills

- sales:pipeline-review
- sales:call-prep
- sales:forecast
