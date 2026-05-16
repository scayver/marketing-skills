# HubSpot

CRM and marketing automation platform for managing contacts, deals, companies, and email campaigns.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Full REST API for CRM objects, marketing, and reporting |
| MCP | ✓ | HubSpot MCP server available |
| CLI | - | Not available |
| SDK | ✓ | Official SDKs for Node, Python, PHP, Ruby |

## Authentication

- **Type**: Private App Access Token
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: HubSpot Settings > Integrations > Private Apps > Create a private app

## Common Agent Operations

### Create a contact

```bash
POST https://api.hubapi.com/crm/v3/objects/contacts

Authorization: Bearer {access_token}
Content-Type: application/json

{"properties": {"email": "user@example.com", "firstname": "Jane", "lastname": "Doe", "phone": "+15555550100"}}
```

### Search contacts

```bash
POST https://api.hubapi.com/crm/v3/objects/contacts/search

Authorization: Bearer {access_token}
Content-Type: application/json

{"filterGroups": [{"filters": [{"propertyName": "email", "operator": "EQ", "value": "user@example.com"}]}]}
```

### Create a deal

```bash
POST https://api.hubapi.com/crm/v3/objects/deals

Authorization: Bearer {access_token}
Content-Type: application/json

{"properties": {"dealname": "New Deal", "dealstage": "appointmentscheduled", "amount": "5000"}}
```

### Get all contacts

```bash
GET https://api.hubapi.com/crm/v3/objects/contacts?limit=100&properties=email,firstname,lastname

Authorization: Bearer {access_token}
```

### Add contact to a static list

```bash
POST https://api.hubapi.com/contacts/v1/lists/{list_id}/add

Authorization: Bearer {access_token}
Content-Type: application/json

{"vids": [12345]}
```

## Key Fields

### Contact Object
- `email` - Primary contact identifier
- `firstname`, `lastname` - Name fields
- `phone` - Phone number
- `company` - Associated company name
- `hs_lead_status` - Lead status (NEW, OPEN, IN_PROGRESS, etc.)
- `lifecyclestage` - subscriber, lead, marketingqualifiedlead, opportunity, customer

### Deal Object
- `dealname` - Name of the deal
- `amount` - Deal value
- `dealstage` - Pipeline stage ID
- `closedate` - Expected close date (Unix ms)
- `pipeline` - Pipeline ID

## Parameters

- `limit` - Results per page (max 100)
- `after` - Cursor for pagination
- `properties` - Comma-separated list of properties to return
- `associations` - Include associated objects

## When to Use

- Managing inbound leads from forms and landing pages
- Tracking sales pipeline and deal stages
- Running email marketing campaigns and sequences
- Scoring and segmenting leads by lifecycle stage
- Reporting on marketing attribution and revenue

## Rate Limits

- 100 requests per 10 seconds (private apps)
- 150,000 requests per day (varies by tier)

## Relevant Skills

- crm-management
- lead-generation
- email-marketing
- sales:pipeline-review
