# Benchmark Email

Email marketing platform offering drag-and-drop campaign creation, list management, marketing automation, landing pages, and contact engagement reporting.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://clientapi.benchmarkemail.com/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Key
- **Header**: `AuthToken: {api_key}`
- **Get token**: Benchmark Email > Account > Integrations > API Key

## Common Agent Operations

### Add a contact to a list

```bash
POST https://clientapi.benchmarkemail.com/Contact/{list_id}/ContactDetails

AuthToken: {api_key}
Content-Type: application/json

{
  "Contact": {
    "Email": "jane@example.com",
    "FirstName": "Jane",
    "LastName": "Doe",
    "Phone": "5551234567"
  }
}
```

### Get all contact lists

```bash
GET https://clientapi.benchmarkemail.com/Contact/?status=1

AuthToken: {api_key}
```

### Get contacts in a list

```bash
GET https://clientapi.benchmarkemail.com/Contact/{list_id}/ContactDetails?pageSize=50&pageNumber=1

AuthToken: {api_key}
```

### Update a contact

```bash
PUT https://clientapi.benchmarkemail.com/Contact/{list_id}/ContactDetails/{contact_id}

AuthToken: {api_key}
Content-Type: application/json

{"Contact": {"FirstName": "Jane", "Phone": "5559876543"}}
```

### Unsubscribe a contact

```bash
DELETE https://clientapi.benchmarkemail.com/Contact/{list_id}/ContactDetails/{contact_id}

AuthToken: {api_key}
```

## Key Fields

### Contact
- `Email` - Email address (required, unique per list)
- `FirstName` - First name
- `LastName` - Last name
- `Phone` - Phone number
- `Company` - Company name
- Custom fields - Additional merge fields defined on the list

### Contact List
- `id` - List ID
- `Name` - List name
- `Status` - 1 = active

## Parameters

- `pageSize` - Results per page (default 20)
- `pageNumber` - Pagination page
- `status` - Filter lists by status (1 = active)
- `list_id` - Target contact list ID

## When to Use

- Adding subscribers from web forms to segmented Benchmark Email lists
- Syncing e-commerce customers to a dedicated buyer list for post-purchase campaigns
- Managing list membership for course or membership site enrollments
- Reporting on list growth and contact engagement metrics

## Rate Limits

- See Benchmark Email pricing page for API call limits by plan tier

## Relevant Skills

- email-marketing
- lead-generation
- ecommerce
