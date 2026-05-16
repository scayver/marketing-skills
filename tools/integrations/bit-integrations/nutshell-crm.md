# Nutshell CRM

User-friendly sales CRM and email marketing platform for small and mid-size B2B teams, combining contact management, pipeline tracking, and built-in email automation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | JSON-RPC REST API at `https://app.nutshell.com/api/v1/json` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: HTTP Basic Auth (username + API key)
- **Header**: `Authorization: Basic {base64(email:api_key)}`
- **Get token**: Nutshell Settings > Integrations > API Keys > Generate New Key

## Common Agent Operations

### Find contacts by email
```bash
POST https://app.nutshell.com/api/v1/json

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"method": "findContacts", "params": {"query": {"email": "jane@example.com"}}, "id": "1"}
```

### Create a contact (person)
```bash
POST https://app.nutshell.com/api/v1/json

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"method": "newContact", "params": {"contact": {"name": "Jane Doe", "email": ["jane@example.com"], "phone": ["555-1234"]}}, "id": "2"}
```

### Create a lead
```bash
POST https://app.nutshell.com/api/v1/json

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"method": "newLead", "params": {"lead": {"description": "Website inquiry", "contacts": [{"id": 42}], "sources": [{"id": 1}]}}, "id": "3"}
```

### Get all leads
```bash
POST https://app.nutshell.com/api/v1/json

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"method": "findLeads", "params": {"query": {"status": 0}}, "id": "4"}
```

## Key Fields

### Contact
- `id` - Contact ID
- `name` - Full name (or first/last split)
- `email` - Array of email strings
- `phone` - Array of phone strings
- `accounts` - Array of associated account IDs

### Lead
- `id` - Lead ID
- `description` - Lead description/notes
- `contacts` - Array of associated contact objects
- `value` - Expected deal value
- `status` - Lead status (0=Open, 1=Won, 2=Lost, etc.)

## Parameters

- `query` - JSON filter object for find methods
- `limit` - Results per page
- `page` - Page number (0-indexed)

## When to Use

- Managing B2B sales pipelines with contact and account tracking
- Creating contacts and open leads from website inquiry forms
- Tracking deal status and sales velocity for pipeline reporting
- Running targeted email campaigns to segmented contact lists

## Rate Limits

- See Nutshell API documentation; limits apply per account plan

## Relevant Skills

- sales:account-research
- sales:pipeline-review
- sales:draft-outreach
