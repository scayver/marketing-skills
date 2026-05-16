# Integrately

One-click automation platform with 8M+ pre-built workflows for connecting popular business apps via webhooks.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Webhook trigger endpoint for receiving data |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Webhook-based; no SDK |

## Authentication

- **Type**: Webhook URL (no separate authentication header required)
- **URL pattern**: Unique webhook URL generated per automation inside Integrately
- **Get URL**: Integrately dashboard > Create Automation > Select "Webhook" as trigger > Copy URL

## Common Agent Operations

### Send data to an Integrately webhook trigger

```bash
POST https://hook.integrately.com/webhook/{unique_id}

Content-Type: application/json

{"email": "jane@example.com", "name": "Jane Doe", "source": "website-form"}
```

### Send form data with multiple fields

```bash
POST https://hook.integrately.com/webhook/{unique_id}

Content-Type: application/json

{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane@example.com",
  "phone": "+15555550100",
  "message": "Interested in your services"
}
```

### Send as form-encoded data

```bash
POST https://hook.integrately.com/webhook/{unique_id}

Content-Type: application/x-www-form-urlencoded

email=jane%40example.com&name=Jane+Doe
```

## Key Fields

### Webhook Payload
- Any JSON key/value pair is accepted and becomes an available field in the Integrately automation
- `email` - Typically used as the primary identifier downstream
- `name` - Contact name
- Field names must be consistent across requests for reliable mapping

## Parameters

- Webhook URL `unique_id` - Generated per automation; acts as authentication
- JSON body - Passed as trigger fields to connected app actions

## When to Use

- Routing event data to apps not directly supported by your primary tools
- Using Integrately's pre-built one-click automation templates
- Connecting data sources to Mailchimp, HubSpot, Google Sheets, or 1,000+ other apps
- Building simple multi-step automations without code

## Rate Limits

- Free tier: 1,000 tasks/month, 5 automations
- Starter and above: Unlimited automations, higher task limits
- See integrately.com/pricing for current plan details

## Relevant Skills

- lead-generation
- email-marketing
- crm-management
