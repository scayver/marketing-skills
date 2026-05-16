# SureTriggers

SureTriggers is a WordPress-native automation platform by SureBiz that connects WordPress plugins and external apps via triggers and actions from the WordPress dashboard.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/suretriggers/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Workflows
```bash
GET https://yoursite.com/wp-json/suretriggers/v1/workflows

Authorization: Basic {base64_credentials}
```

### Get a Single Workflow
```bash
GET https://yoursite.com/wp-json/suretriggers/v1/workflows/{id}

Authorization: Basic {base64_credentials}
```

### List Available Triggers
```bash
GET https://yoursite.com/wp-json/suretriggers/v1/triggers

Authorization: Basic {base64_credentials}
```

### List Available Actions
```bash
GET https://yoursite.com/wp-json/suretriggers/v1/actions

Authorization: Basic {base64_credentials}
```

## Key Fields

### Workflow
- `id` - Workflow ID
- `name` - Workflow name
- `status` - active, inactive
- `trigger` - Trigger configuration object
- `actions` - Array of action steps

## Parameters

- `status` - Filter workflows by active/inactive
- `per_page` / `page` - Pagination controls

## When to Use

- Auditing automation workflows configured on a WordPress site
- Checking workflow status for debugging or monitoring
- Enumerating available triggers and actions for integration mapping
- Programmatically toggling workflows based on business events

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- operations:process-doc
- engineering:documentation
- marketing:campaign-plan
- data:explore-data
