# Capsule CRM

Simple, clean CRM for small businesses to manage contacts, sales pipelines, tasks, and opportunities without unnecessary complexity.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v2 with JSON responses |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Unofficial community libraries available; official PHP library |

## Authentication

- **Type**: Bearer Token (API Token)
- **Header**: `Authorization: Bearer {api_token}`
- **Get token**: Capsule > My Preferences > API Authentication Token

## Common Agent Operations

### Create a person (contact)
```
POST https://api.capsulecrm.com/api/v2/people

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "person": {
    "firstName": "Jane",
    "lastName": "Smith",
    "emailAddresses": [{"address": "jane@example.com"}],
    "phoneNumbers": [{"number": "+1 555 000 0000"}],
    "organisation": {"name": "Acme Corp"}
  }
}
```

### Create an opportunity
```
POST https://api.capsulecrm.com/api/v2/opportunities

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "opportunity": {
    "name": "Website Redesign",
    "value": {"amount": 5000, "currency": "USD"},
    "milestone": {"id": 123},
    "party": {"id": 456}
  }
}
```

### Search for contacts
```
GET https://api.capsulecrm.com/api/v2/people?q=jane@example.com

Authorization: Bearer {api_token}
```

### Create a task
```
POST https://api.capsulecrm.com/api/v2/tasks

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "task": {
    "description": "Follow up on proposal",
    "dueOn": "2026-06-01",
    "party": {"id": 456}
  }
}
```

## Key Fields

### Person
- `firstName` / `lastName` - Contact name
- `emailAddresses` - Array of `{address}` objects
- `phoneNumbers` - Array of `{number}` objects
- `organisation.name` - Associated company name
- `tags` - Array of tag strings for segmentation

### Opportunity
- `name` - Opportunity title
- `value.amount` - Deal value
- `milestone.id` - Pipeline stage ID
- `party.id` - ID of the associated person or organisation

### Task
- `description` - Task summary
- `dueOn` - ISO 8601 date
- `party.id` - Associated contact or org ID

## Parameters

- `q` - Full-text search query for people/organisations
- `page` - Pagination (1-indexed)
- `perPage` - Results per page (max 100)
- `tag` - Filter contacts by tag

## When to Use

- Adding website or form leads directly to Capsule as person records
- Creating pipeline opportunities when a proposal or quote is requested
- Tagging contacts based on lead source for segmentation
- Managing follow-up tasks for sales outreach

## Rate Limits

- 4,000 requests per hour
- See [developer.capsulecrm.com](https://developer.capsulecrm.com) for current limits

## Relevant Skills

- crm-management
- lead-generation
- sales-brief
