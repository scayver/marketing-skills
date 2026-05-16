# IFTTT

Consumer and business automation platform that connects apps, devices, and services via simple if-this-then-that applets.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Webhooks (Maker) for triggering applets; limited applet management API |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Webhooks only |

## Authentication

- **Type**: API Key (Webhooks key)
- **URL pattern**: `https://maker.ifttt.com/trigger/{event}/with/key/{key}`
- **Get key**: IFTTT account > Explore > Webhooks > Documentation

## Common Agent Operations

### Trigger a named IFTTT event

```bash
POST https://maker.ifttt.com/trigger/{event_name}/json/with/key/{webhooks_key}

Content-Type: application/json

{"value1": "data_one", "value2": "data_two", "value3": "data_three"}
```

### Trigger event with GET (simple)

```bash
GET https://maker.ifttt.com/trigger/{event_name}/with/key/{webhooks_key}?value1=hello&value2=world
```

### Send event with extra fields (JSON endpoint)

```bash
POST https://maker.ifttt.com/trigger/{event_name}/json/with/key/{webhooks_key}

Content-Type: application/json

{"name": "Jane Doe", "email": "jane@example.com", "message": "Hello"}
```

### Test connection

```bash
GET https://maker.ifttt.com/trigger/test/with/key/{webhooks_key}
```

## Key Fields

### Webhook Payload
- `value1` - First data field passed to the applet
- `value2` - Second data field passed to the applet
- `value3` - Third data field passed to the applet

### JSON Endpoint (extended)
- Any JSON key/value pairs — mapped to applet ingredients by key name

### Event Object
- `event_name` - Name of the event as configured in the Webhooks applet trigger
- `occurred_at` - Timestamp IFTTT records for the trigger

## Parameters

- `event_name` - Must exactly match the event name in the IFTTT applet
- `value1`, `value2`, `value3` - Data values passed into the applet (classic endpoint)

## When to Use

- Triggering smart home device actions from web events
- Posting to social media when a specific event occurs
- Sending mobile push notifications on external triggers
- Connecting apps that have IFTTT support but no direct API

## Rate Limits

- Free tier: 3 applets, limited triggers per month
- Pro tier: Unlimited applets, 2,000+ partner API calls/month
- See ifttt.com/plans for current limits

## Relevant Skills

- social-media
- lead-generation
- email-marketing
