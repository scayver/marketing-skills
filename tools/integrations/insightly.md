# Insightly

CRM and project management platform for managing contacts, leads, opportunities, and post-sale project delivery.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Full REST API for contacts, leads, opportunities, projects, tasks |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Community SDKs for Python, Ruby, .NET |

## Authentication

- **Type**: API Key via HTTP Basic Auth
- **Header**: `Authorization: Basic {base64(api_key:)}`  (API key as username, empty password)
- **Get key**: Insightly dashboard > User Settings (avatar) > API Key

## Common Agent Operations

### Get contacts

```bash
GET https://api.insightly.com/v3.1/Contacts?top=100&skip=0

Authorization: Basic {base64(api_key:)}
```

### Create a contact

```bash
POST https://api.insightly.com/v3.1/Contacts

Authorization: Basic {base64(api_key:)}
Content-Type: application/json

{"FIRST_NAME": "Jane", "LAST_NAME": "Doe", "EMAIL_ADDRESS": "jane@example.com"}
```

### Create a lead

```bash
POST https://api.insightly.com/v3.1/Leads

Authorization: Basic {base64(api_key:)}
Content-Type: application/json

{"FIRST_NAME": "Jane", "LAST_NAME": "Doe", "EMAIL": "jane@example.com", "ORGANISATION_NAME": "Acme Co"}
```

### Create an opportunity

```bash
POST https://api.insightly.com/v3.1/Opportunities

Authorization: Basic {base64(api_key:)}
Content-Type: application/json

{"OPPORTUNITY_NAME": "New Project", "STAGE_ID": 1, "PIPELINE_ID": 1}
```

### Create a task

```bash
POST https://api.insightly.com/v3.1/Tasks

Authorization: Basic {base64(api_key:)}
Content-Type: application/json

{"TITLE": "Follow up call", "DUE_DATE": "2025-06-01T09:00:00Z", "ASSIGNED_USER_ID": 123456}
```

## Key Fields

### Contact / Lead Object
- `CONTACT_ID` / `LEAD_ID` - Unique identifier
- `FIRST_NAME`, `LAST_NAME` - Name fields
- `EMAIL_ADDRESS` - Primary email
- `PHONE` - Phone number
- `ORGANISATION_NAME` - Company name
- `LEAD_SOURCE` - Origin of the lead

### Opportunity Object
- `OPPORTUNITY_NAME` - Name
- `STAGE_ID` - Current pipeline stage
- `PIPELINE_ID` - Associated pipeline
- `BID_AMOUNT` - Estimated value
- `CLOSE_DATE` - Expected close date

## Parameters

- `top` - Number of records to return
- `skip` - Offset for pagination
- `$filter` - OData filter expression
- `$orderby` - Sort field and direction

## When to Use

- Tracking leads and opportunities from inbound inquiries
- Managing post-sale project delivery alongside CRM data
- Creating tasks and follow-ups automatically from web events
- Running a combined sales + project management workflow

## Rate Limits

- See Insightly pricing page for plan-specific limits
- Typical: 10 requests/second, daily limit varies by plan

## Relevant Skills

- crm-management
- lead-generation
- sales:pipeline-review
