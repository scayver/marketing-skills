# SendFox

Affordable email marketing tool by AppSumo for content creators and small businesses, featuring simple list building, campaign creation, and automation sequences.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.sendfox.com/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK; standard REST |

## Authentication

- **Type**: Bearer Token (Personal Access Token)
- **Header**: `Authorization: Bearer {personal_access_token}`
- **Get token**: SendFox account > Settings > Personal Access Token

## Common Agent Operations

### List contacts

```bash
GET https://api.sendfox.com/contacts

Authorization: Bearer {token}
```

### Create contact

```bash
POST https://api.sendfox.com/contacts

Authorization: Bearer {token}
Content-Type: application/json

{"email": "jane@example.com", "first_name": "Jane", "last_name": "Doe", "lists": [12345]}
```

### List email lists

```bash
GET https://api.sendfox.com/lists

Authorization: Bearer {token}
```

### Add contact to list

```bash
PATCH https://api.sendfox.com/contacts/{contact_id}

Authorization: Bearer {token}
Content-Type: application/json

{"lists": [12345, 67890]}
```

### Unsubscribe contact

```bash
PATCH https://api.sendfox.com/unsubscribe

Authorization: Bearer {token}
Content-Type: application/json

{"email": "jane@example.com"}
```

## Key Fields

### Contact Object
- `id` - Contact ID
- `email` - Email address
- `first_name` - First name
- `last_name` - Last name
- `unsubscribed` - Boolean unsubscribe status
- `lists` - Array of list IDs

### List Object
- `id` - List ID
- `name` - List name
- `total_count` - Number of contacts

## Parameters

- `page` - Page number
- `per_page` - Results per page
- `email` - Filter by email

## When to Use

- Building and managing email lists for content creators on a budget
- Sending newsletters and drip campaigns to subscribers
- Growing audiences through list segmentation
- Automating subscriber onboarding with simple sequences

## Rate Limits

- See SendFox pricing page for plan-based limits

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:content-creation
