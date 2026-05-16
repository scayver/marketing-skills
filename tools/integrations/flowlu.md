# Flowlu

Business management platform combining CRM, project management, invoicing, and team collaboration.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API-only |

## Authentication

- **Type**: API Key (query parameter)
- **Parameter**: `api_key={your_api_key}`
- **Get token**: Flowlu Settings > API > Generate API Key

## Common Agent Operations

### List contacts
```bash
GET https://YOUR_DOMAIN.flowlu.com/api/crm/v1/contacts/list?api_key={your_api_key}
```

### Create contact
```bash
POST https://YOUR_DOMAIN.flowlu.com/api/crm/v1/contacts/create?api_key={your_api_key}

Content-Type: application/json

{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane@example.com",
  "phone": "+1234567890"
}
```

### List deals (opportunities)
```bash
GET https://YOUR_DOMAIN.flowlu.com/api/crm/v1/opportunities/list?api_key={your_api_key}
```

### Create task
```bash
POST https://YOUR_DOMAIN.flowlu.com/api/tasks/v1/tasks/create?api_key={your_api_key}

Content-Type: application/json

{
  "name": "Follow up call",
  "assigned_to": 5,
  "due_date": "2024-06-01"
}
```

## Key Fields

### Contact
- `id` - Contact ID
- `first_name` / `last_name` - Name
- `email` - Email address
- `phone` - Phone number
- `type` - person or company
- `owner_id` - Assigned user

### Opportunity (Deal)
- `id` - Deal ID
- `name` - Deal name
- `amount` - Deal value
- `stage_id` - Pipeline stage
- `contact_id` - Linked contact
- `close_date` - Expected close date

### Task
- `id` - Task ID
- `name` - Task title
- `status` - open, in_progress, completed
- `due_date` - Due date

## Parameters

- `api_key` - Required on all requests
- `page` / `per_page` - Pagination
- `filter` - Field-based filtering object

## When to Use

- Sync leads from web forms into Flowlu CRM
- Create follow-up tasks after prospect interactions
- Track deals from inquiry to close
- Pull invoice data for financial reporting

## Rate Limits

- See Flowlu pricing page; limits vary by plan

## Relevant Skills

- sales:pipeline-review
- sales:account-research
- operations:process-doc
