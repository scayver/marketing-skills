# Trello

Trello is a visual project management tool that organizes work into boards, lists, and cards with drag-and-drop simplicity.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.trello.com/1/` |
| MCP | - | No official MCP server |
| CLI | - | No official CLI |
| SDK | ✓ | Community SDKs in Python, Node.js, Ruby, and others |

## Authentication

- **Type**: API Key + Token (query parameters)
- **Parameters**: `?key={api_key}&token={oauth_token}`
- **Get token**: https://trello.com/app-key — generate API key, then authorize to get a token

## Common Agent Operations

### List Boards
```bash
GET https://api.trello.com/1/members/me/boards?key={api_key}&token={token}
```

### Get Lists on a Board
```bash
GET https://api.trello.com/1/boards/{board_id}/lists?key={api_key}&token={token}
```

### Create a Card
```bash
POST https://api.trello.com/1/cards?key={api_key}&token={token}

Content-Type: application/json

{
  "name": "New Task",
  "desc": "Task description here",
  "idList": "{list_id}",
  "due": "2026-06-01T09:00:00.000Z"
}
```

### Update a Card
```bash
PUT https://api.trello.com/1/cards/{card_id}?key={api_key}&token={token}

Content-Type: application/json

{"idList": "{new_list_id}", "closed": false}
```

### Add a Comment to a Card
```bash
POST https://api.trello.com/1/cards/{card_id}/actions/comments?key={api_key}&token={token}

Content-Type: application/json

{"text": "This has been reviewed and approved."}
```

## Key Fields

### Card
- `id` - Card identifier
- `name` - Card title
- `desc` - Card description
- `idList` - Parent list ID
- `idBoard` - Parent board ID
- `due` - Due date (ISO 8601)
- `labels` - Array of label objects
- `members` - Array of assigned member objects

### List
- `id` - List identifier
- `name` - List name
- `idBoard` - Parent board ID
- `pos` - Position on board

## Parameters

- `fields` - Comma-separated list of fields to return (reduces payload)
- `members` - `true` to include card member details
- `attachments` - `true` to include attachment data

## When to Use

- Creating task cards from lead form submissions or support tickets
- Moving cards between lists to reflect pipeline stage changes
- Commenting on cards with external data or approvals
- Reporting on card counts and due dates by list

## Rate Limits

- 300 requests per 10 seconds per API key
- See Trello developer docs for Power-Up limits

## Relevant Skills

- product-management:sprint-planning
- operations:process-doc
- marketing:campaign-plan
- engineering:documentation
