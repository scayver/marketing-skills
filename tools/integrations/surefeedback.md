# SureFeedback

SureFeedback is a WordPress client feedback and project collaboration plugin for collecting visual feedback on websites and digital projects.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/surefeedback/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Projects
```bash
GET https://yoursite.com/wp-json/surefeedback/v1/projects

Authorization: Basic {base64_credentials}
```

### Get a Single Project
```bash
GET https://yoursite.com/wp-json/surefeedback/v1/projects/{id}

Authorization: Basic {base64_credentials}
```

### List Feedback Items
```bash
GET https://yoursite.com/wp-json/surefeedback/v1/feedback?project_id={id}

Authorization: Basic {base64_credentials}
```

### Get a Single Feedback Item
```bash
GET https://yoursite.com/wp-json/surefeedback/v1/feedback/{id}

Authorization: Basic {base64_credentials}
```

### List Comments on Feedback
```bash
GET https://yoursite.com/wp-json/surefeedback/v1/feedback/{id}/comments

Authorization: Basic {base64_credentials}
```

## Key Fields

### Project
- `id` - Project ID
- `title` - Project name
- `client_id` - Associated client user
- `status` - active, completed, archived

### Feedback
- `id` - Feedback item ID
- `project_id` - Parent project
- `content` - Feedback text
- `status` - open, resolved, in-progress
- `created_at` - Submission timestamp

## Parameters

- `project_id` - Required to scope feedback to a project
- `status` - Filter feedback by status
- `per_page` / `page` - Pagination controls

## When to Use

- Notifying team members when new client feedback is submitted
- Syncing resolved feedback counts to project management tools
- Generating weekly feedback summary reports
- Escalating unresolved feedback items automatically

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- product-management:synthesize-research
- customer-support:ticket-triage
- operations:process-doc
- data:analyze
