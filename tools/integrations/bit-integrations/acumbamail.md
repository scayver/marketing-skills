# Acumbamail

Spanish email and SMS marketing platform offering list management, campaign automation, transactional email, and subscriber analytics — popular in Spanish-speaking markets.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://acumbamail.com/api/1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK |

## Authentication

- **Type**: Auth Token
- **Header**: N/A — token passed as query parameter or in request body
- **Get token**: Acumbamail > Profile > Settings > Auth Token

## Common Agent Operations

### Subscribe a contact to a list

```bash
POST https://acumbamail.com/api/1/addSubscriber/

Content-Type: application/json

{
  "auth_token": "{auth_token}",
  "list_id": 42,
  "email": "user@example.com",
  "merge_fields": {"NOMBRE": "Jane", "APELLIDOS": "Doe"},
  "double_optin": false
}
```

### Unsubscribe a contact

```bash
POST https://acumbamail.com/api/1/unsubscribeSubscriber/

Content-Type: application/json

{"auth_token": "{auth_token}", "list_id": 42, "email": "user@example.com"}
```

### Get list of subscriber lists

```bash
GET https://acumbamail.com/api/1/getLists/?auth_token={auth_token}
```

### Get subscribers in a list

```bash
GET https://acumbamail.com/api/1/getSubscribers/?auth_token={auth_token}&list_id=42&limit=100&offset=0
```

### Send a transactional email

```bash
POST https://acumbamail.com/api/1/sendTransactionalEmail/

Content-Type: application/json

{
  "auth_token": "{auth_token}",
  "from_email": "hello@yourdomain.com",
  "from_name": "Your Brand",
  "to": [{"email": "user@example.com", "name": "Jane"}],
  "subject": "Your order is confirmed",
  "html": "<p>Thanks for your purchase!</p>"
}
```

## Key Fields

### Subscriber
- `email` - Email address (required)
- `merge_fields` - Key-value pairs for list merge fields (e.g., NOMBRE, APELLIDOS)
- `list_id` - ID of the list to subscribe to
- `double_optin` - Boolean; true sends a confirmation email

### List
- `id` - List ID
- `name` - List name
- `subscribers_count` - Total active subscribers

## Parameters

- `auth_token` - Required on all requests
- `list_id` - Target subscriber list ID
- `limit` - Results per page
- `offset` - Pagination offset
- `double_optin` - Enable double opt-in confirmation (true/false)

## When to Use

- Growing email lists for Spanish-speaking audiences from web forms
- Sending transactional emails (order confirmations, receipts) via API
- Segmenting subscribers by source or campaign using multiple lists
- Automating subscriber management without a manual CSV export

## Rate Limits

- See Acumbamail pricing page for API call limits by plan tier

## Relevant Skills

- email-marketing
- lead-generation
- ecommerce
