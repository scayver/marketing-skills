# FlowMattic

WordPress-native automation plugin that connects WordPress plugins and external services without leaving the WordPress dashboard.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress action/filter hooks; internal webhook receiver |

## Authentication

- **Type**: WordPress admin credentials for configuration
- **Header**: N/A — configured via WordPress admin dashboard
- **Get token**: No external API token; webhooks use secret keys set in FlowMattic settings

## Common Agent Operations

### Trigger workflow via webhook
```bash
POST https://yoursite.com/?flowmattic-webhook=true&key={webhook_key}

Content-Type: application/json

{
  "email": "user@example.com",
  "name": "Jane Doe",
  "event": "signup"
}
```

### Listen for WordPress hook (custom action)
```php
// FlowMattic fires custom hooks that other plugins can listen to
add_action('flowmattic_workflow_completed', function($workflow_id, $data) {
    // React to completed automation
}, 10, 2);
```

### REST endpoint for workflow execution
```bash
POST https://yoursite.com/wp-json/flowmattic/v1/run-workflow

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"workflow_id": 42, "data": {"email": "user@example.com"}}
```

## Key Fields

### Webhook Payload
- `key` - Webhook secret key set in FlowMattic
- Any field names matching the workflow's mapped fields

### Workflow
- `workflow_id` - Internal workflow identifier
- `trigger` - What starts the workflow (form, hook, webhook, schedule)
- `actions` - Ordered list of automation steps

## Parameters

- `key` - Webhook authentication key
- `workflow_id` - Target workflow ID

## When to Use

- Chain WordPress plugin events into multi-step automations
- Receive external webhook payloads and route to WordPress plugins
- Schedule recurring WordPress-based automations
- Connect form submissions to email marketing without custom code

## Rate Limits

- No external API; limits are server-side only

## Relevant Skills

- operations:process-doc
- operations:runbook
- marketing:campaign-plan
