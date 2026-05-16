# Encharge

Marketing automation platform for SaaS businesses, focused on behavior-based email flows and user lifecycle management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API-only |

## Authentication

- **Type**: API Key
- **Header**: `X-Encharge-Token: {api_key}`
- **Get token**: Encharge App > Settings > API Keys

## Common Agent Operations

### Create or update user
```bash
POST https://api.encharge.io/v1/people

X-Encharge-Token: {api_key}
Content-Type: application/json

{
  "email": "user@example.com",
  "firstName": "Jane",
  "lastName": "Doe",
  "tags": ["trial", "signup"]
}
```

### Track event
```bash
POST https://api.encharge.io/v1/events

X-Encharge-Token: {api_key}
Content-Type: application/json

{
  "name": "Signed Up",
  "email": "user@example.com",
  "properties": {"plan": "pro", "source": "landing-page"}
}
```

### Get user by email
```bash
GET https://api.encharge.io/v1/people?email=user@example.com

X-Encharge-Token: {api_key}
```

### List segments
```bash
GET https://api.encharge.io/v1/segments

X-Encharge-Token: {api_key}
```

## Key Fields

### Person (User)
- `email` - Primary identifier
- `firstName` / `lastName` - Name fields
- `tags` - Array of string tags
- `userId` - External user ID for SaaS apps
- `createdAt` - Account creation date

### Event
- `name` - Event name (e.g., "Upgraded Plan")
- `email` - User identifier
- `properties` - Custom key-value attributes
- `timestamp` - ISO 8601 event time

## Parameters

- `email` - Filter people by email
- `tag` - Filter by tag
- `limit` / `offset` - Pagination

## When to Use

- Onboard new SaaS trial users with behavior-driven flows
- Trigger upgrade nudge emails based on feature usage events
- Segment users by plan, activity, or lifecycle stage
- Sync user data from your app on sign-up or plan change

## Rate Limits

- See Encharge pricing page

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- product-management:metrics-review
