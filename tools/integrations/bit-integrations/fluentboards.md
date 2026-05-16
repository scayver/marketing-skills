# FluentBoards

WordPress-native kanban-style project management plugin for boards, tasks, and sprints inside WordPress.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via FluentBoards endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List boards
```bash
GET https://yoursite.com/wp-json/fluent-boards/v1/boards

Authorization: Basic {base64_credentials}
```

### Get board tasks
```bash
GET https://yoursite.com/wp-json/fluent-boards/v1/boards/{board_id}/tasks

Authorization: Basic {base64_credentials}
```

### Create task
```bash
POST https://yoursite.com/wp-json/fluent-boards/v1/boards/{board_id}/tasks

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "title": "Design landing page",
  "assignee_id": 3,
  "due_date": "2024-06-15",
  "stage_id": 2
}
```

### List sprints
```bash
GET https://yoursite.com/wp-json/fluent-boards/v1/boards/{board_id}/sprints

Authorization: Basic {base64_credentials}
```

## Key Fields

### Board
- `id` - Board ID
- `title` - Board name
- `description` - Board description
- `stages` - Array of column/stage objects

### Task
- `id` - Task ID
- `title` - Task title
- `description` - Task details
- `stage_id` - Current board column
- `assignee_id` - Assigned user
- `due_date` - Due date
- `priority` - low, medium, high
- `labels` - Array of labels

### Sprint
- `id` - Sprint ID
- `title` - Sprint name
- `start_date` / `end_date` - Sprint dates
- `status` - active, completed, planned

## Parameters

- `board_id` - Target board
- `stage_id` - Filter tasks by stage
- `assignee_id` - Filter by assignee
- `per_page` / `page` - Pagination

## When to Use

- Create tasks automatically from form submissions
- Sync project status to external reporting tools
- Trigger Slack notifications on task completion
- Automate sprint planning from a backlog source

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- product-management:sprint-planning
- operations:process-doc
- engineering:standup
