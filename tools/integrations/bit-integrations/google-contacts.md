# Google Contacts

Google's contact management service for storing, organizing, and syncing personal and business contacts.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Google People API v1 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official client libraries for Python, Node.js, Java, PHP, Go |

## Authentication

- **Type**: OAuth 2.0
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Google Cloud Console > Credentials; scopes: `https://www.googleapis.com/auth/contacts`

## Common Agent Operations

### List contacts
```bash
GET https://people.googleapis.com/v1/people/me/connections?personFields=names,emailAddresses,phoneNumbers&pageSize=100

Authorization: Bearer {access_token}
```

### Get contact
```bash
GET https://people.googleapis.com/v1/people/{resourceName}?personFields=names,emailAddresses,phoneNumbers

Authorization: Bearer {access_token}
```

### Create contact
```bash
POST https://people.googleapis.com/v1/people:createContact

Authorization: Bearer {access_token}
Content-Type: application/json

{
  "names": [{"givenName": "Jane", "familyName": "Doe"}],
  "emailAddresses": [{"value": "jane@example.com", "type": "work"}],
  "phoneNumbers": [{"value": "+1234567890", "type": "mobile"}]
}
```

### Search contacts
```bash
GET https://people.googleapis.com/v1/people:searchContacts?query=jane@example.com&readMask=names,emailAddresses

Authorization: Bearer {access_token}
```

## Key Fields

### Person (Contact)
- `resourceName` - Unique identifier (e.g., `people/c12345`)
- `names` - Array with `givenName`, `familyName`, `displayName`
- `emailAddresses` - Array with `value` and `type`
- `phoneNumbers` - Array with `value` and `type`
- `organizations` - Company and job title
- `addresses` - Physical addresses
- `biographies` - Notes field

### Contact Group
- `resourceName` - Group identifier
- `name` - Group display name
- `memberCount` - Number of contacts

## Parameters

- `personFields` - Comma-separated fields to return (required)
- `pageSize` - Contacts per page (max 1000)
- `pageToken` - Pagination token
- `query` - Search string

## When to Use

- Sync CRM contacts to Google Contacts for mobile access
- Import form leads into a Google Contacts list
- Keep contact records updated across tools
- Export contacts for outreach campaigns

## Rate Limits

- 90 requests/second per user; 90 requests/second per project

## Relevant Skills

- sales:account-research
- marketing:email-sequence
- operations:process-doc
