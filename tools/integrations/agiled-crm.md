# Agiled CRM

All-in-one business management platform for agencies and freelancers combining CRM, project management, invoicing, proposals, contracts, and HR tools.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://app.agilecrm.com/dev/api/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK |

## Authentication

- **Type**: Basic Auth (email + REST API Key)
- **Header**: `Authorization: Basic {base64(email:api_key)}`
- **Get token**: Agiled > Admin Settings > API & Analytics > API Key

## Common Agent Operations

### Create a contact

```bash
POST https://app.agilecrm.com/dev/api/contacts

Authorization: Basic {base64_credentials}
Accept: application/json
Content-Type: application/json

{
  "star_value": 0,
  "tags": ["lead", "website"],
  "properties": [
    {"type": "SYSTEM", "name": "first_name", "value": "Jane"},
    {"type": "SYSTEM", "name": "last_name", "value": "Doe"},
    {"type": "SYSTEM", "name": "email", "subtype": "work", "value": "jane@example.com"},
    {"type": "SYSTEM", "name": "phone", "subtype": "work", "value": "+15551234567"}
  ]
}
```

### Get contact by email

```bash
GET https://app.agilecrm.com/dev/api/contacts/search/email/jane@example.com

Authorization: Basic {base64_credentials}
Accept: application/json
```

### Create a deal

```bash
POST https://app.agilecrm.com/dev/api/opportunity

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "name": "Website Project",
  "expected_value": 5000,
  "milestone": "Proposal",
  "contact_ids": [12345]
}
```

### Add a tag to a contact

```bash
POST https://app.agilecrm.com/dev/api/contacts/edit/tags

Authorization: Basic {base64_credentials}
Content-Type: application/x-www-form-urlencoded

id=12345&tags=["qualified","hot-lead"]
```

### List contacts

```bash
GET https://app.agilecrm.com/dev/api/contacts?page_size=50&cursor=

Authorization: Basic {base64_credentials}
Accept: application/json
```

## Key Fields

### Contact
- `id` - Contact ID
- `properties` - Array of typed property objects (SYSTEM or CUSTOM type)
- `tags` - Array of tag strings
- `star_value` - Lead score (0–5)
- `lead_score` - Numeric score
- `owner_id` - Assigned user ID

### Deal (Opportunity)
- `id` - Deal ID
- `name` - Deal name
- `expected_value` - Deal value
- `milestone` - Pipeline stage name
- `probability` - Win probability percentage
- `contact_ids` - Linked contact IDs

## Parameters

- `page_size` - Results per page (max 100)
- `cursor` - Pagination cursor from previous response
- `sort_key` - Field to sort by
- `sort_type` - ASC or DESC

## When to Use

- Adding inbound leads from forms or landing pages to Agiled CRM automatically
- Creating deals from proposal requests or consultation bookings
- Tagging contacts by lead source for segmentation
- Syncing client data from external booking or payment platforms

## Rate Limits

- See Agiled pricing page; API rate limits vary by plan

## Relevant Skills

- crm-management
- lead-generation
- sales:account-research
