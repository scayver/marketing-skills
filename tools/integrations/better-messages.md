# Better Messages

WordPress private messaging plugin enabling real-time direct messaging and group chats between users — with a modern UI, push notifications, and BuddyPress/BuddyBoss integration.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/better-messages/v1/` |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords > Add New

## Common Agent Operations

### Send a private message to a user

```bash
POST https://yoursite.com/wp-json/better-messages/v1/send-message

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "recipient_ids": [42],
  "text": "Welcome to the community! Let us know if you need help.",
  "sender_id": 1
}
```

### Get conversation thread

```bash
GET https://yoursite.com/wp-json/better-messages/v1/thread/{thread_id}

Authorization: Basic {base64_credentials}
```

### List threads for a user

```bash
GET https://yoursite.com/wp-json/better-messages/v1/threads?user_id=42

Authorization: Basic {base64_credentials}
```

### Create a group chat

```bash
POST https://yoursite.com/wp-json/better-messages/v1/create-thread

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "participants": [42, 58, 99],
  "name": "Project Alpha Team",
  "text": "Welcome to the project group!"
}
```

## Key Fields

### Message
- `id` - Message ID
- `thread_id` - Parent conversation thread ID
- `sender_id` - WordPress user ID of sender
- `recipient_ids` - Array of recipient WordPress user IDs
- `text` - Message body
- `date_sent` - Timestamp

### Thread
- `id` - Thread ID
- `name` - Thread name (group chats)
- `participants` - Array of participant user IDs
- `last_message` - Preview of most recent message
- `unread_count` - Unread message count for the requesting user

## Parameters

- `user_id` - Filter threads by user
- `thread_id` - Retrieve a specific thread
- `per_page` - Results per page
- `page` - Pagination page

## When to Use

- Sending automated welcome messages to new members or course enrollees
- Notifying users of support ticket updates or status changes via private message
- Building community onboarding flows that include in-platform messaging
- Triggering targeted messages based on membership tier or activity events

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- crm-management
- email-marketing
