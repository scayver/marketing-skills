# WhatsApp Business

WhatsApp Business (via Meta's WhatsApp Cloud API) enables businesses to send messages, notifications, and media to customers at scale using approved message templates.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API via Meta Graph API |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Meta Business SDK (Python, PHP, Node.js) |

## Authentication

- **Type**: Bearer Token (WhatsApp Cloud API access token)
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Meta for Developers > App Dashboard > WhatsApp > API Setup; also requires Phone Number ID and WhatsApp Business Account ID

## Common Agent Operations

### Send a text message
```
POST https://graph.facebook.com/v18.0/{phone_number_id}/messages

Authorization: Bearer {access_token}
Content-Type: application/json

{
  "messaging_product": "whatsapp",
  "to": "15551234567",
  "type": "text",
  "text": {"body": "Hello! Your order has been confirmed."}
}
```

### Send a template message
```
POST https://graph.facebook.com/v18.0/{phone_number_id}/messages

Authorization: Bearer {access_token}
Content-Type: application/json

{
  "messaging_product": "whatsapp",
  "to": "15551234567",
  "type": "template",
  "template": {
    "name": "order_confirmation",
    "language": {"code": "en_US"},
    "components": [
      {
        "type": "body",
        "parameters": [
          {"type": "text", "text": "Jane"},
          {"type": "text", "text": "#12345"}
        ]
      }
    ]
  }
}
```

### Send a media message (image)
```
POST https://graph.facebook.com/v18.0/{phone_number_id}/messages

Authorization: Bearer {access_token}
Content-Type: application/json

{
  "messaging_product": "whatsapp",
  "to": "15551234567",
  "type": "image",
  "image": {
    "link": "https://example.com/product-image.jpg",
    "caption": "Your ordered item"
  }
}
```

### Get message templates
```
GET https://graph.facebook.com/v18.0/{whatsapp_business_account_id}/message_templates

Authorization: Bearer {access_token}
```

## Key Fields

### Message Object
- `messaging_product` - Always `"whatsapp"`
- `to` - Recipient phone number (E.164 format)
- `type` - `text`, `template`, `image`, `document`, `audio`, `video`, `location`
- `text.body` - Message text content
- `template.name` - Approved template name
- `template.language.code` - Language code (e.g., `en_US`)

### Template Component
- `type` - `header`, `body`, or `button`
- `parameters` - Array of variable values for template placeholders

## Parameters

- `phone_number_id` - Your WhatsApp Business phone number ID from Meta dashboard
- `whatsapp_business_account_id` - Your WABA ID for account-level operations
- `to` - Recipient number in E.164 format (e.g., `15551234567`)

## When to Use

- Sending transactional notifications (order confirmations, shipping updates)
- Following up with leads immediately after form submission
- Delivering appointment reminders to reduce no-shows
- Broadcasting promotions to opted-in customers via approved templates
- Customer support messaging in markets where WhatsApp dominates

## Rate Limits

- Free tier: 1,000 free business-initiated conversations per month per WABA
- Paid: varies by tier (Tier 1: 1K/day, Tier 2: 10K/day, Tier 3: 100K/day)
- See: [Meta WhatsApp Pricing](https://developers.facebook.com/docs/whatsapp/pricing)

## Relevant Skills

- marketing:campaign-plan
- marketing:email-sequence
- customer-support:draft-response
