# Discord

Voice, video, and text communication platform widely used by gaming communities, developer teams, and online communities — with bots, webhooks, and a full REST API.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v10 at discord.com/api/v10 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official discord.py (Python), discord.js (Node.js), and community libraries |

## Authentication

- **Type**: Bot Token or OAuth 2.0 (for user actions); Webhook URL (no auth required for channel webhooks)
- **Header**: `Authorization: Bot {bot_token}`
- **Get token**: Discord Developer Portal > Applications > {your app} > Bot > Token
- **Webhook**: Discord server > Channel Settings > Integrations > Webhooks > Copy Webhook URL

## Common Agent Operations

### Send a message to a channel via webhook (no auth required)
```
POST https://discord.com/api/webhooks/{webhook_id}/{webhook_token}

Content-Type: application/json

{
  "content": "New lead submitted: Jane Smith (jane@example.com)",
  "username": "Lead Bot",
  "embeds": [{
    "title": "New Form Submission",
    "color": 5763719,
    "fields": [
      {"name": "Name", "value": "Jane Smith", "inline": true},
      {"name": "Email", "value": "jane@example.com", "inline": true}
    ]
  }]
}
```

### Send a message to a channel (Bot)
```
POST https://discord.com/api/v10/channels/{channel_id}/messages

Authorization: Bot {bot_token}
Content-Type: application/json

{"content": "Hello from the bot!"}
```

### Get guild (server) information
```
GET https://discord.com/api/v10/guilds/{guild_id}

Authorization: Bot {bot_token}
```

### List channels in a guild
```
GET https://discord.com/api/v10/guilds/{guild_id}/channels

Authorization: Bot {bot_token}
```

### Add a role to a member
```
PUT https://discord.com/api/v10/guilds/{guild_id}/members/{user_id}/roles/{role_id}

Authorization: Bot {bot_token}
```

## Key Fields

### Message
- `content` - Plain text message body (max 2000 characters)
- `embeds` - Array of rich embed objects with title, color, fields, thumbnail, footer
- `username` - Override display name for webhook messages
- `avatar_url` - Override avatar for webhook messages

### Embed
- `title` - Embed headline
- `description` - Body text
- `color` - Integer color value (decimal form of hex color)
- `fields` - Array of `{name, value, inline}` objects
- `url` - Optional clickable link on the title

### Guild (Server)
- `id` - Guild snowflake ID
- `name` - Server name
- `member_count` - Total member count

### Channel
- `id` - Channel snowflake ID
- `name` - Channel name
- `type` - 0 = text, 2 = voice, 4 = category, 5 = announcement

## Parameters

- `guild_id` - Identifies the Discord server
- `channel_id` - Targets a specific text channel for messages
- `user_id` - Discord user snowflake ID
- `role_id` - Discord role snowflake ID
- `webhook_id` / `webhook_token` - Pair required to send webhook messages

## When to Use

- Sending real-time notifications to a team Discord channel (new lead, new order, new signup)
- Alerting community moderators of new member registrations or events
- Posting sales celebration messages to a #wins channel automatically
- Assigning Discord roles to members who complete a purchase or enrollment

## Rate Limits

- Global: 50 requests per second per bot
- Per-route limits vary; 429 responses include `retry_after` in seconds
- Webhook messages: 30 requests per minute per webhook
- See [discord.com/developers/docs](https://discord.com/developers/docs) for full rate limit documentation

## Relevant Skills

- social-media
- community-management
- event-marketing
