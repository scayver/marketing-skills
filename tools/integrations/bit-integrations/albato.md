# Albato

No-code automation platform for connecting business apps — popular in Eastern European and CIS markets with a large library of Russian and regional app connectors.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No public REST API for external use |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK |

## Authentication

- **Type**: Webhook URL (inbound)
- **Header**: N/A — Albato generates webhook URLs for each automation trigger
- **Get token**: Albato dashboard > Automations > New automation > Choose "Webhook" as trigger > Copy URL

## Common Agent Operations

Albato has no external REST API. Integrations are managed via the Albato dashboard. External systems communicate with Albato automations via webhook endpoints.

### Send data to an Albato automation (webhook trigger)

```bash
POST https://h.albato.com/wh/{automation_id}/{webhook_token}

Content-Type: application/json

{
  "email": "user@example.com",
  "name": "Jane Doe",
  "source": "website-form"
}
```

### Example: send form data and trigger downstream automation

```bash
POST https://h.albato.com/wh/{automation_id}/{webhook_token}

Content-Type: application/json

{
  "contact_email": "lead@example.com",
  "contact_name": "John Smith",
  "phone": "+79001234567",
  "interest": "Enterprise plan"
}
```

## Key Fields

### Webhook Payload
- Any JSON key-value pairs — Albato maps incoming fields to destination app fields in the automation editor
- Field names must match what was configured in the Albato automation's field mapping step

### Automation
- `automation_id` - Albato automation identifier
- `status` - active or paused
- `trigger` - Source app/event that starts the automation
- `actions` - Ordered list of steps to execute

## Parameters

- Payload keys are custom and defined per automation in the Albato dashboard
- No standard query parameters — all data passes via POST body

## When to Use

- Routing data into apps popular in CIS markets (AmoCRM, Bitrix24, GetCourse, etc.)
- Connecting services not covered by other automation platforms
- Using Albato as an orchestration layer for multi-step workflows triggered by external webhooks
- Bridging WordPress or other source systems to Albato's connector library

## Rate Limits

- See Albato pricing page for automation run limits by plan tier

## Relevant Skills

- crm-management
- email-marketing
- lead-generation
