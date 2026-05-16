# Telegram

Telegram is a cloud-based instant messaging platform with support for bots, channels, groups, and programmatic messaging via its Bot API.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST Bot API at `https://api.telegram.org/bot{token}/` |
| MCP | - | No official MCP server |
| CLI | - | No official CLI |
| SDK | ✓ | Official SDKs in Python, Java, PHP, and community libs for most languages |

## Authentication

- **Type**: Bot Token
- **URL pattern**: `https://api.telegram.org/bot{token}/{method}`
- **Get token**: Message @BotFather on Telegram, create a bot, copy the provided token

## Common Agent Operations

### Send a Message
```bash
POST https://api.telegram.org/bot{token}/sendMessage

Content-Type: application/json

{
  "chat_id": "@yourchannel",
  "text": "Hello from your bot!",
  "parse_mode": "HTML"
}
```

### Send a Message with Markdown
```bash
POST https://api.telegram.org/bot{token}/sendMessage

Content-Type: application/json

{
  "chat_id": 123456789,
  "text": "*Bold* and _italic_ text",
  "parse_mode": "MarkdownV2"
}
```

### Get Bot Updates (Polling)
```bash
GET https://api.telegram.org/bot{token}/getUpdates?offset={update_id}&limit=100
```

### Set a Webhook
```bash
POST https://api.telegram.org/bot{token}/setWebhook

Content-Type: application/json

{"url": "https://yoursite.com/telegram-webhook"}
```

### Get Chat Info
```bash
GET https://api.telegram.org/bot{token}/getChat?chat_id={chat_id}
```

## Key Fields

### Message
- `message_id` - Unique message ID
- `chat.id` - Chat or channel identifier
- `from.id` - Sender's Telegram user ID
- `text` - Message body
- `date` - Unix timestamp

### Update
- `update_id` - Sequential update identifier
- `message` - Incoming message object (if applicable)
- `callback_query` - Button callback data (if applicable)

## Parameters

- `chat_id` - Target chat, group, channel username, or numeric ID
- `parse_mode` - HTML or MarkdownV2 for rich formatting
- `reply_to_message_id` - Thread a reply to a specific message
- `disable_notification` - Send silently (true/false)

## When to Use

- Sending real-time alerts or notifications to a Telegram channel
- Delivering order confirmations, lead alerts, or system events to a team group
- Building interactive bots for customer support or FAQ handling
- Broadcasting marketing announcements to a subscriber channel

## Rate Limits

- 30 messages/second to different chats; 1 message/second per individual chat
- Bulk messaging to channels: no hard limit but spam detection applies

## Relevant Skills

- marketing:campaign-plan
- marketing:draft-content
- operations:runbook
- customer-support:draft-response
