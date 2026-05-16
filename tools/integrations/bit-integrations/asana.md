# Asana

Work management platform for tracking tasks, projects, and team workflows — used by teams to organize, assign, and monitor work across projects and portfolios.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://app.asana.com/api/1.0/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official Python, Node.js, Ruby, PHP, Java SDKs |

## Authentication

- **Type**: Personal Access Token
- **Header**: `Authorization: Bearer {token}`
- **Get token**: Asana > Profile > My Settings > Apps > Manage Developer Apps > Personal access token

## Common Agent Operations

### Create a task

```bash
POST https://app.asana.com/api/1.0/tasks

Authorization: Bearer {token}
Content-Type: application/json

{
  "data": {
    "name": "Follow up with Jane Doe",
    "notes": "Inquiry from website contact form",
    "assignee": "user@example.com",
    "projects": ["1234567890"],
    "due_on": "2025-08-20"
  }
}
```

### List tasks in a project

```bash
GET https://app.asana.com/api/1.0/tasks?project=1234567890&opt_fields=name,assignee,due_on,completed,notes

Authorization: Bearer {token}
```

### Update a task

```bash
PUT https://app.asana.com/api/1.0/tasks/{task_gid}

Authorization: Bearer {token}
Content-Type: application/json

{"data": {"completed": true, "notes": "Resolved — called customer back"}}
```

### List projects in a workspace

```bash
GET https://app.asana.com/api/1.0/projects?workspace={workspace_gid}&opt_fields=name,status

Authorization: Bearer {token}
```

### Add a comment to a task

```bash
POST https://app.asana.com/api/1.0/tasks/{task_gid}/stories

Authorization: Bearer {token}
Content-Type: application/json

{"data": {"text": "Contacted via email — awaiting response."}}
```

## Key Fields

### Task
- `gid` - Global task ID
- `name` - Task name (required)
- `notes` - Task description
- `assignee` - Assignee GID or email
- `projects` - Array of project GIDs
- `due_on` - Due date (YYYY-MM-DD)
- `completed` - Boolean completion state
- `custom_fields` - Custom field values

### Project
- `gid` - Project GID
- `name` - Project name
- `workspace` - Parent workspace GID
- `status` - Project status object

## Parameters

- `project` - Filter tasks by project GID
- `assignee` - Filter tasks by assignee
- `completed_since` - ISO date to filter recently completed tasks
- `opt_fields` - Comma-separated fields to include in response
- `limit` - Results per page (max 100)
- `offset` - Pagination cursor

## When to Use

- Creating tasks from inbound leads, form submissions, or support requests
- Tracking fulfillment or review tasks triggered by orders or applications
- Reporting on project and task completion status across teams
- Syncing external system events (CRM deals, purchases) to actionable Asana tasks

## Rate Limits

- 1,500 requests per minute per API token
- See Asana API documentation for burst and per-endpoint limits

## Relevant Skills

- crm-management
- lead-generation
- email-marketing
