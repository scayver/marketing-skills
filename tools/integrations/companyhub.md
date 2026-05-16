# CompanyHub CRM

Customizable CRM platform that lets businesses model their own sales process with custom objects, fields, and automated follow-up sequences without writing code.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API with JSON; API key authentication |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Key (request header)
- **Header**: `X-API-KEY: {api_key}`
- **Get token**: CompanyHub > Settings > API Keys > Generate Key

## Common Agent Operations

### Get all contacts (leads)
```
GET https://api.companyhub.com/v1/contacts

X-API-KEY: {api_key}
Content-Type: application/json
```

### Create a contact
```
POST https://api.companyhub.com/v1/contacts

X-API-KEY: {api_key}
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1 555 000 0000",
  "company": "Acme Corp",
  "lead_source": "Website"
}
```

### Create a deal
```
POST https://api.companyhub.com/v1/deals

X-API-KEY: {api_key}
Content-Type: application/json

{
  "name": "Website Redesign Project",
  "contact_id": "abc123",
  "amount": 8000,
  "stage": "Proposal",
  "expected_close_date": "2026-07-01"
}
```

### Update a contact
```
PUT https://api.companyhub.com/v1/contacts/{contact_id}

X-API-KEY: {api_key}
Content-Type: application/json

{"company": "New Corp", "lead_source": "Referral"}
```

## Key Fields

### Contact
- `name` - Full name (required)
- `email` - Email address; used for deduplication
- `phone` - Phone number
- `company` - Associated company name
- `lead_source` - Origin of the lead (e.g., Website, Referral, Ad)
- Custom fields defined in your CompanyHub schema are also available

### Deal
- `name` - Deal title
- `contact_id` - Associated contact record ID
- `amount` - Deal value
- `stage` - Pipeline stage name
- `expected_close_date` - ISO 8601 date

## Parameters

- `contact_id` - Required for update and deal association
- `deal_id` - Required for deal updates and retrieval
- `page` - Pagination page number
- `per_page` - Results per page

## When to Use

- Automatically creating CRM contacts from web form submissions
- Pushing quote or proposal requests into a customized deal pipeline
- Syncing B2B inquiry data (company, role) into company-level records
- Building a lead intake workflow where each form maps to custom CRM fields

## Rate Limits

- See [companyhub.com](https://companyhub.com) or contact support for current limits

## Relevant Skills

- crm-management
- lead-generation
- sales-brief
