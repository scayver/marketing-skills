# SyncSpider

SyncSpider is an eCommerce-focused integration platform for syncing product, order, and customer data across online stores, marketplaces, and marketing tools.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API with API key authentication |
| MCP | - | No official MCP server |
| CLI | - | No official CLI |
| SDK | - | No official SDK; use REST directly |

## Authentication

- **Type**: API Key
- **Header**: `X-Api-Key: {api_key}`
- **Get token**: SyncSpider Dashboard > Settings > API Keys

## Common Agent Operations

### List Tasks (Sync Jobs)
```bash
GET https://app.syncspider.com/api/v1/tasks

X-Api-Key: {api_key}
```

### Get a Single Task
```bash
GET https://app.syncspider.com/api/v1/tasks/{id}

X-Api-Key: {api_key}
```

### Trigger a Task Run
```bash
POST https://app.syncspider.com/api/v1/tasks/{id}/run

X-Api-Key: {api_key}
```

### Register a Webhook
```bash
POST https://app.syncspider.com/api/v1/webhooks

X-Api-Key: {api_key}
Content-Type: application/json

{
  "url": "https://yoursite.com/webhook-receiver",
  "event": "task.completed"
}
```

## Key Fields

### Task
- `id` - Task ID
- `name` - Task name
- `source` - Source connector name
- `destination` - Destination connector name
- `status` - active, inactive, running
- `last_run` - ISO 8601 timestamp of last execution

## Parameters

- `status` - Filter tasks by status
- `page` / `per_page` - Pagination controls

## When to Use

- Keeping product catalogs in sync across multiple stores
- Automating order data flow between platforms
- Triggering downstream workflows when a sync task completes
- Monitoring sync job health via status polling or webhooks

## Rate Limits

- See SyncSpider pricing page for API call limits

## Relevant Skills

- operations:process-doc
- data:explore-data
- marketing:campaign-plan
- engineering:documentation
