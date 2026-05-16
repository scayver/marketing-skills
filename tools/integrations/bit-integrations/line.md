# LINE

Messaging app and platform widely used in Japan, Thailand, Taiwan, and Southeast Asia for personal and business communication.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Messaging API for push messages, group messages, and user profiles |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official SDKs for Node, Python, Java, PHP, Ruby, Go |

## Authentication

- **Type**: Channel Access Token
- **Header**: `Authorization: Bearer {channel_access_token}`
- **Get token**: LINE Developers console > Channel > Messaging API > Channel access token

## Common Agent Operations

### Send a push message to a user

```bash
POST https://api.line.me/v2/bot/message/push

Authorization: Bearer {channel_access_token}
Content-Type: application/json

{"to": "{user_id}", "messages": [{"type": "text", "text": "Hello from our system!"}]}
```

### Send a broadcast message to all followers

```bash
POST https://api.line.me/v2/bot/message/broadcast

Authorization: Bearer {channel_access_token}
Content-Type: application/json

{"messages": [{"type": "text", "text": "New announcement for all followers"}]}
```

### Send a multicast message to multiple users

```bash
POST https://api.line.me/v2/bot/message/multicast

Authorization: Bearer {channel_access_token}
Content-Type: application/json

{"to": ["{user_id_1}", "{user_id_2}"], "messages": [{"type": "text", "text": "Your order is ready"}]}
```

### Get user profile

```bash
GET https://api.line.me/v2/bot/profile/{user_id}

Authorization: Bearer {channel_access_token}
```

### Reply to a webhook event

```bash
POST https://api.line.me/v2/bot/message/reply

Authorization: Bearer {channel_access_token}
Content-Type: application/json

{"replyToken": "{reply_token}", "messages": [{"type": "text", "text": "Thank you for your message!"}]}
```

## Key Fields

### Message Object
- `type` - text | image | sticker | flex | template | audio
- `text` - Message text content (for text type)
- `to` - Recipient user ID, group ID, or room ID

### User Profile Object
- `userId` - LINE user ID
- `displayName` - User's display name
- `pictureUrl` - Profile picture URL
- `statusMessage` - User's status message
- `language` - User's language setting

### Webhook Event Object
- `type` - message | follow | unfollow | join | leave | postback
- `replyToken` - Token for replying to this specific event
- `source` - Object with user/group/room context

## Parameters

- `to` - Recipient user ID (for push/multicast)
- `replyToken` - Required for reply messages
- `notificationDisabled` - Whether to suppress push notification

## When to Use

- Sending order confirmations and notifications to LINE users in Asian markets
- Broadcasting announcements to all LINE followers of a business account
- Responding to customer messages via LINE Messaging API webhook
- Delivering transactional alerts through LINE instead of SMS or email

## Rate Limits

- Free tier (Developer trial): 500 push messages/month
- Paid plans: Based on messaging plan; see line.biz for pricing

## Relevant Skills

- social-media
- email-marketing
- ecommerce
