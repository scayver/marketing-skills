# Webhook (Incoming)

An incoming webhook is an HTTP POST endpoint that receives structured data from external systems and triggers downstream automation or processing.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Any system that can send HTTP POST requests |
| MCP | - | N/A — webhook is the receiver, not a calling client |
| CLI | ✓ | Test with `curl` or httpie |
| SDK | - | No SDK needed; standard HTTP |

## Authentication

- **Type**: Shared Secret / HMAC Signature (recommended) or API Key in header
- **Header**: `X-Webhook-Secret: {secret}` or `Authorization: Bearer {token}`
- **Security**: Always validate the sender's signature before processing payload

## Common Agent Operations

### Send a Test Webhook (curl)
```bash
POST https://yoursite.com/webhook-endpoint

Content-Type: application/json
X-Webhook-Secret: {shared_secret}

{
  "event": "order.completed",
  "order_id": "ORD-12345",
  "customer_email": "user@example.com",
  "total": 99.00,
  "timestamp": "2026-05-15T14:30:00Z"
}
```

### Validate HMAC Signature (Python)
```python
import hmac, hashlib

def is_valid_signature(payload_bytes, secret, received_sig):
    computed = hmac.new(secret.encode(), payload_bytes, hashlib.sha256).hexdigest()
    return hmac.compare_digest(computed, received_sig)
```

### Register a Webhook with a Source System
```bash
POST https://api.source-platform.com/v1/webhooks

Authorization: Bearer {source_api_token}
Content-Type: application/json

{
  "url": "https://yoursite.com/webhook-endpoint",
  "events": ["order.completed", "subscription.cancelled"],
  "secret": "{shared_secret}"
}
```

### Acknowledge Receipt (HTTP 200 Response)
```
HTTP/1.1 200 OK
Content-Type: application/json

{"status": "received"}
```

## Key Fields

### Typical Webhook Payload
- `event` - Event type string (e.g., `order.completed`, `user.created`)
- `id` - Unique event or record identifier
- `timestamp` - ISO 8601 event timestamp
- `data` - Nested object with event-specific fields

### Security Headers
- `X-Webhook-Signature` / `X-Hub-Signature-256` - HMAC-SHA256 of payload
- `X-Webhook-Secret` - Pre-shared secret for simpler validation
- `X-Request-Id` - Idempotency key for deduplication

## Parameters

- Return `HTTP 200` within 5 seconds to prevent retry loops from most senders
- Return `HTTP 4xx` only for permanent errors (invalid payload); use `5xx` for transient failures
- Store raw payload before processing to enable replay on failure

## When to Use

- Receiving real-time events from any external platform (payment processors, CRMs, eCommerce)
- Triggering internal automation when a third-party event occurs
- Ingesting data from platforms that push rather than pull
- Building event-driven pipelines without polling

## Rate Limits

- No sending rate limit (you are the receiver); ensure your endpoint can handle burst traffic
- Implement queuing (Redis, SQS, database queue) for high-volume sources

## Relevant Skills

- engineering:documentation
- operations:runbook
- data:explore-data
- marketing:campaign-plan
