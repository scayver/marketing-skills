# Keap

CRM and marketing automation platform for small businesses combining contact management, email campaigns, and payment collection.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v2 for contacts, tags, orders, opportunities |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official PHP and Python SDKs available |

## Authentication

- **Type**: OAuth 2.0
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Create an app at keys.developer.keap.com; use Client ID + Client Secret to obtain access token via OAuth 2.0 authorization code flow

## Common Agent Operations

### Create a contact

```bash
POST https://api.infusionsoft.com/crm/rest/v2/contacts

Authorization: Bearer {access_token}
Content-Type: application/json

{"given_name": "Jane", "family_name": "Doe", "email_addresses": [{"email": "jane@example.com", "field": "EMAIL1"}]}
```

### Apply a tag to a contact

```bash
POST https://api.infusionsoft.com/crm/rest/v2/contacts/{contact_id}/tags

Authorization: Bearer {access_token}
Content-Type: application/json

{"tagIds": [456]}
```

### Create an opportunity

```bash
POST https://api.infusionsoft.com/crm/rest/v2/opportunities

Authorization: Bearer {access_token}
Content-Type: application/json

{"contact": {"id": 123}, "opportunity_title": "New Lead", "stage": {"id": 1}}
```

### Get all tags

```bash
GET https://api.infusionsoft.com/crm/rest/v2/tags?limit=100

Authorization: Bearer {access_token}
```

### Search contacts by email

```bash
GET https://api.infusionsoft.com/crm/rest/v2/contacts?email=jane@example.com

Authorization: Bearer {access_token}
```

## Key Fields

### Contact Object
- `id` - Unique contact ID
- `given_name`, `family_name` - First and last name
- `email_addresses` - Array with email and field label
- `phone_numbers` - Array with number and field label
- `company_name` - Associated company
- `tag_ids` - Applied tag IDs

### Opportunity Object
- `opportunity_title` - Name of the opportunity
- `stage` - Current stage object with ID
- `contact` - Linked contact object
- `projected_revenue_high` - Estimated deal value

## Parameters

- `limit` - Number of records to return (max 1000)
- `offset` - Pagination offset
- `email` - Filter contacts by email address
- `since` - Return records updated after this ISO 8601 date

## When to Use

- Running automated email and SMS nurture campaigns for small business leads
- Tagging and segmenting contacts based on form submissions or purchases
- Tracking sales opportunities with pipeline management
- Enrolling contacts in campaign sequences from web events

## Rate Limits

- 25 requests/second per application
- See developer.keap.com for daily/monthly limits by plan

## Relevant Skills

- crm-management
- email-marketing
- lead-generation
