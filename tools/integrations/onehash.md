# OneHash

Open-source ERPNext-based business management platform combining CRM, HR, projects, accounting, and customer support for startups and SMBs.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://{your_instance}.onehash.ai/api/` |
| MCP | - | No official MCP server |
| CLI | - | No official CLI |
| SDK | - | Uses standard ERPNext API conventions |

## Authentication

- **Type**: API Key + API Secret
- **Header**: `Authorization: token {api_key}:{api_secret}`
- **Get token**: OneHash Settings > Integrations > API Access > Generate Keys

## Common Agent Operations

### Create a lead
```bash
POST https://your-instance.onehash.ai/api/resource/Lead

Authorization: token {api_key}:{api_secret}
Content-Type: application/json

{"lead_name": "Jane Doe", "email_id": "jane@example.com", "mobile_no": "555-1234", "company_name": "Acme Co", "source": "Website"}
```

### List leads
```bash
GET https://your-instance.onehash.ai/api/resource/Lead?fields=["lead_name","email_id","status"]&limit=25

Authorization: token {api_key}:{api_secret}
```

### Create a contact
```bash
POST https://your-instance.onehash.ai/api/resource/Contact

Authorization: token {api_key}:{api_secret}
Content-Type: application/json

{"first_name": "Jane", "last_name": "Doe", "email_ids": [{"email_id": "jane@example.com"}], "phone_nos": [{"phone": "555-1234"}]}
```

### Create an opportunity
```bash
POST https://your-instance.onehash.ai/api/resource/Opportunity

Authorization: token {api_key}:{api_secret}
Content-Type: application/json

{"opportunity_from": "Lead", "party_name": "abc123", "opportunity_type": "Sales", "expected_closing": "2026-07-01"}
```

## Key Fields

### Lead
- `name` - Document name (auto-generated ID)
- `lead_name` - Full name of the lead
- `email_id` - Email address
- `mobile_no` - Mobile phone
- `company_name` - Company
- `source` - Lead source (Website, Campaign, etc.)
- `status` - Lead status (Open, Replied, Converted, etc.)

### Contact
- `first_name` / `last_name` - Name fields
- `email_ids` - Array of email objects
- `phone_nos` - Array of phone objects

## Parameters

- `fields` - JSON array of fields to return
- `filters` - JSON array of filter conditions
- `limit` - Results per page (default 20)
- `order_by` - Sort field and direction

## When to Use

- Managing leads, contacts, and opportunities in an open-source ERP environment
- Automating CRM data entry from web forms, marketing, or external events
- Connecting sales pipeline data with HR and accounting in a unified ERP system
- Low-cost CRM alternative for startups needing sales and operations in one platform

## Rate Limits

- See OneHash/ERPNext documentation; limits vary by hosting plan

## Relevant Skills

- sales:account-research
- sales:pipeline-review
- operations:process-doc
