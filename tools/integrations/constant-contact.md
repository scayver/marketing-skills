# Constant Contact

Email marketing platform popular with small businesses for easy list management, drag-and-drop campaign creation, and reporting tools.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v3 at api.cc.email |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official PHP SDK; community libraries for Python, Ruby |

## Authentication

- **Type**: OAuth 2.0
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Create an app at [developer.constantcontact.com](https://developer.constantcontact.com) and complete the OAuth 2.0 authorization flow

## Common Agent Operations

### Get all contact lists
```
GET https://api.cc.email/v3/contact_lists

Authorization: Bearer {access_token}
```

### Create or update a contact
```
POST https://api.cc.email/v3/contacts/sign_up_form

Authorization: Bearer {access_token}
Content-Type: application/json

{
  "email_address": "jane@example.com",
  "first_name": "Jane",
  "last_name": "Smith",
  "phone_numbers": [{"phone_number": "+15550000000", "kind": "home"}],
  "list_memberships": ["list_id_here"],
  "create_source": "Contact"
}
```

### Get contact details
```
GET https://api.cc.email/v3/contacts?email=jane@example.com

Authorization: Bearer {access_token}
```

### Remove contact from a list
```
DELETE https://api.cc.email/v3/contacts/{contact_id}/list_memberships/{list_id}

Authorization: Bearer {access_token}
```

### Get campaign activity report
```
GET https://api.cc.email/v3/reports/email_reports/{campaign_activity_id}/tracking/opens

Authorization: Bearer {access_token}
```

## Key Fields

### Contact
- `email_address` - Primary email (required)
- `first_name` / `last_name` - Name fields
- `phone_numbers` - Array of `{phone_number, kind}` objects (kind: home, work, mobile, other)
- `list_memberships` - Array of list IDs to enroll the contact in
- `create_source` - Origin label (Contact, Account)
- `custom_fields` - Array of `{custom_field_id, value}` objects

### Contact List
- `list_id` - Unique list identifier
- `name` - List display name
- `membership_count` - Total active subscribers

## Parameters

- `email` - Filter contacts by email address (GET contacts)
- `list_id` - Scopes list membership operations
- `campaign_activity_id` - Required for campaign-level reporting
- `limit` - Max results per page (max 500)

## When to Use

- Growing subscriber lists from web forms or e-commerce events
- Segmenting customers into separate Constant Contact lists by purchase behavior
- Pulling campaign open and click metrics for performance reporting
- Syncing member or course enrollment data into email nurture lists

## Rate Limits

- 10,000 requests per day; burst limit of 4 requests per second
- See [developer.constantcontact.com](https://developer.constantcontact.com) for current limits

## Relevant Skills

- email-marketing
- lead-generation
- content-strategy
