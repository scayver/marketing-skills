# myCred

WordPress points, ranks, and badges plugin for building gamified reward systems with customizable point types, achievements, and leaderboards.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/mycred/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Get a user's point balance
```bash
GET https://yoursite.com/wp-json/mycred/v1/balance/{user_id}

Authorization: Basic {base64_credentials}
```

### Add points to a user
```bash
POST https://yoursite.com/wp-json/mycred/v1/add

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"user_id": 42, "amount": 100, "type": "mycred_default", "ref": "course_completion", "note": "Completed intro course"}
```

### Deduct points from a user
```bash
POST https://yoursite.com/wp-json/mycred/v1/deduct

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"user_id": 42, "amount": 50, "type": "mycred_default", "ref": "penalty", "note": "Late submission"}
```

### Get user point log
```bash
GET https://yoursite.com/wp-json/mycred/v1/log?user_id={user_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Balance
- `user_id` - WordPress user ID
- `balance` - Current point balance
- `type` - Point type key

### Log Entry
- `user_id` - User ID
- `ctype` - Point type
- `amount` - Points added or deducted (negative for deductions)
- `ref` - Reference/event type
- `note` - Human-readable description
- `time` - Timestamp

## Parameters

- `user_id` - Target user
- `type` - Point type key (default: `mycred_default`)
- `per_page` - Log entries per page

## When to Use

- Building gamified learning or community platforms with points and badges
- Rewarding users for LMS completions, quiz passes, or engagement events
- Querying leaderboard data for display or reporting
- Deducting points programmatically based on external events

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- marketing:campaign-plan
- marketing:content-creation
- product-management:product-brainstorming
