# Copper CRM

Google Workspace-native CRM that lives inside Gmail and Google Calendar, designed for teams that manage sales relationships entirely within Google apps.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1 at api.copper.com |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Unofficial community libraries; Copper-maintained Postman collection |

## Authentication

- **Type**: API Key + User Email (three required headers)
- **Headers**:
  - `X-PW-AccessToken: {api_key}`
  - `X-PW-Application: developer_api`
  - `X-PW-UserEmail: {your_copper_account_email}`
- **Get token**: Copper > Settings > Integrations > API Keys

## Common Agent Operations

### Search for a person by email
```
POST https://api.copper.com/developer_api/v1/people/search

X-PW-AccessToken: {api_key}
X-PW-Application: developer_api
X-PW-UserEmail: {account_email}
Content-Type: application/json

{"emails": [{"email": "jane@example.com"}]}
```

### Create a person
```
POST https://api.copper.com/developer_api/v1/people

X-PW-AccessToken: {api_key}
X-PW-Application: developer_api
X-PW-UserEmail: {account_email}
Content-Type: application/json

{
  "name": "Jane Smith",
  "emails": [{"email": "jane@example.com", "category": "work"}],
  "phone_numbers": [{"number": "+1 555 000 0000", "category": "work"}],
  "company_name": "Acme Corp"
}
```

### Create an opportunity
```
POST https://api.copper.com/developer_api/v1/opportunities

X-PW-AccessToken: {api_key}
X-PW-Application: developer_api
X-PW-UserEmail: {account_email}
Content-Type: application/json

{
  "name": "Website Project",
  "primary_contact_id": 12345,
  "pipeline_id": 67890,
  "pipeline_stage_id": 11111,
  "monetary_value": 5000
}
```

### List pipeline stages
```
GET https://api.copper.com/developer_api/v1/pipeline_stages

X-PW-AccessToken: {api_key}
X-PW-Application: developer_api
X-PW-UserEmail: {account_email}
```

## Key Fields

### Person
- `name` - Full name (required)
- `emails` - Array of `{email, category}` objects
- `phone_numbers` - Array of `{number, category}` objects
- `company_name` - Associated company name (string)
- `custom_fields` - Array of `{custom_field_definition_id, value}` objects

### Opportunity
- `name` - Opportunity title
- `primary_contact_id` - ID of the associated person
- `pipeline_id` - Target pipeline
- `pipeline_stage_id` - Target pipeline stage
- `monetary_value` - Deal amount (numeric)
- `close_date` - Unix timestamp of expected close

### Company
- `name` - Company name (required)
- `email_domain` - Primary email domain

## Parameters

- `page_number` - 1-indexed pagination
- `page_size` - Results per page (max 200)
- `sort_by` - Field to sort results by
- `sort_direction` - `asc` or `desc`

## When to Use

- Adding new contacts to Copper directly from web form submissions
- Creating pipeline opportunities when a proposal or quote is requested
- Searching for existing contacts before creating duplicates
- Syncing lead data captured outside Gmail into the Google Workspace CRM workflow

## Rate Limits

- 600 requests per minute
- See [developer.copper.com](https://developer.copper.com) for current limits

## Relevant Skills

- crm-management
- lead-generation
- sales-brief
