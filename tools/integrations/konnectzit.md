# KonnectzIT

Visual automation platform for connecting 1,000+ apps and automating multi-step workflows, popular for its lifetime deal pricing.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Webhook trigger endpoint for receiving data |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Webhook-based; no SDK |

## Authentication

- **Type**: Webhook URL (no separate authentication header)
- **URL pattern**: Unique webhook URL generated per flow in KonnectzIT
- **Get URL**: KonnectzIT dashboard > Create Flow > Select "Webhook" trigger > Copy URL

## Common Agent Operations

### Send data to a KonnectzIT flow

```bash
POST https://hooks.konnectzit.com/hooks/{unique_id}

Content-Type: application/json

{"email": "jane@example.com", "name": "Jane Doe", "source": "contact-form"}
```

### Send order data to trigger a fulfillment flow

```bash
POST https://hooks.konnectzit.com/hooks/{unique_id}

Content-Type: application/json

{
  "order_id": "WC-1234",
  "customer_email": "jane@example.com",
  "product_name": "Online Course",
  "amount": "99.00"
}
```

### Send user registration event

```bash
POST https://hooks.konnectzit.com/hooks/{unique_id}

Content-Type: application/json

{"user_id": 42, "email": "newuser@example.com", "username": "jane_doe", "registered_at": "2025-06-01T10:00:00Z"}
```

## Key Fields

### Webhook Payload
- Any JSON key/value pair is accepted and becomes an available field in the flow
- `email` - Typically used as the primary identifier
- `name` - Contact or user name
- Field names must be consistent across calls for reliable downstream mapping

## Parameters

- Webhook URL `unique_id` - Generated per flow; acts as the authentication token
- JSON body - All fields passed become available as trigger data in connected actions

## When to Use

- Routing WordPress or ecommerce events to 1,000+ connected apps
- Building multi-step automations with filters, delays, and data transforms
- Connecting apps not natively supported by your primary integration tool
- Running cost-effective automations with a one-time lifetime deal plan

## Rate Limits

- Free tier: Limited tasks/month
- Paid plans: Higher task limits; see konnectzit.com/pricing for details

## Relevant Skills

- lead-generation
- email-marketing
- ecommerce
