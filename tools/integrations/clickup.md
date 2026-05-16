# ClickUp

All-in-one project management and productivity platform with tasks, docs, goals, automations, and highly configurable custom views and workflows.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v2; v3 in beta |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Unofficial community SDKs for Python, Node.js |

## Authentication

- **Type**: Personal API Token or OAuth 2.0
- **Header**: `Authorization: {api_key}` (no "Bearer" prefix for personal token)
- **Get token**: ClickUp > Profile avatar > Apps > API Token

## Common Agent Operations

### Get all workspaces (teams)
```
GET https://api.clickup.com/api/v2/team

Authorization: {api_key}
```

### Get lists in a folder
```
GET https://api.clickup.com/api/v2/folder/{folder_id}/list

Authorization: {api_key}
```

### Create a task
```
POST https://api.clickup.com/api/v2/list/{list_id}/task

Authorization: {api_key}
Content-Type: application/json

{
  "name": "Follow up with lead",
  "description": "Submitted pricing form on 2026-05-15",
  "assignees": [12345678],
  "priority": 2,
  "due_date": 1748908800000,
  "status": "Open",
  "custom_fields": [
    {"id": "abc123", "value": "jane@example.com"}
  ]
}
```

### Update a task
```
PUT https://api.clickup.com/api/v2/task/{task_id}

Authorization: {api_key}
Content-Type: application/json

{"status": "In Progress", "priority": 1}
```

### Get tasks in a list
```
GET https://api.clickup.com/api/v2/list/{list_id}/task?page=0&order_by=created

Authorization: {api_key}
```

## Key Fields

### Task
- `name` - Task title (required)
- `description` - Plain text body
- `status` - Current status matching list's status options
- `priority` - 1 (urgent), 2 (high), 3 (normal), 4 (low)
- `due_date` - Unix timestamp in milliseconds
- `assignees` - Array of user IDs
- `custom_fields` - Array of `{id, value}` for custom field data
- `list_id` - Target list for task creation

### List
- `id` - List identifier
- `name` - List name
- `folder.id` - Parent folder
- `space.id` - Parent space

## Parameters

- `list_id` - Required for task creation
- `task_id` - Required for task updates and retrieval
- `page` - Zero-indexed pagination for task listing
- `order_by` - Sort field (`created`, `updated`, `due_date`)
- `include_closed` - Include closed tasks in results (`true`/`false`)

## When to Use

- Creating tasks automatically from form submissions or CRM events
- Building lead-to-task pipelines where each new inquiry becomes a ClickUp card
- Syncing order or support ticket data into ClickUp for team follow-up
- Tracking custom field data (deal value, product SKU) directly on tasks

## Rate Limits

- 100 requests per minute per API token
- See [clickup.com/api](https://clickup.com/api) for current limits

## Relevant Skills

- crm-management
- operations:process-doc
- lead-generation
