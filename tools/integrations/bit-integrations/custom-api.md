# Custom API (Generic REST Integration)

A configurable generic HTTP client pattern for sending data to any REST API endpoint with custom methods, headers, and body structures — used when no dedicated connector exists for the target platform.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Connects to any REST API endpoint |
| MCP | - | Not applicable |
| CLI | ✓ | curl or httpie for testing and scripting |
| SDK | - | Use platform-specific SDKs for the target service |

## Authentication

Configure authentication to match the target API's requirements:

- **API Key header**: `Authorization: Bearer {token}` or `X-API-Key: {key}`
- **Basic auth**: `Authorization: Basic {base64(username:password)}`
- **Custom header**: Any header name and value the target API requires
- **Query parameter**: Append `?api_key={key}` to the URL

## Common Agent Operations

### POST JSON data to an external API
```bash
curl -X POST https://api.example.com/v1/contacts \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "name": "Jane Smith",
    "source": "website"
  }'
```

### GET data from an external API
```bash
curl -X GET "https://api.example.com/v1/contacts?email=jane@example.com" \
  -H "Authorization: Bearer {token}" \
  -H "Accept: application/json"
```

### PUT update to an external API
```bash
curl -X PUT https://api.example.com/v1/contacts/12345 \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{"status": "customer", "plan": "pro"}'
```

### Send form-encoded data
```bash
curl -X POST https://api.example.com/v1/leads \
  -H "Authorization: Bearer {token}" \
  --data-urlencode "email=jane@example.com" \
  --data-urlencode "name=Jane Smith"
```

## Key Fields

### Request Configuration
- `method` - HTTP verb: GET, POST, PUT, PATCH, DELETE
- `url` - Full endpoint URL including any path parameters
- `headers` - Object of header name/value pairs
- `body` - JSON object, form-encoded string, or raw payload
- `content_type` - application/json, application/x-www-form-urlencoded, multipart/form-data

### Response Handling
- `status_code` - HTTP response code (200, 201, 400, 401, 429, 500)
- `response_body` - JSON or text returned by the target API
- `headers` - Response headers (e.g., rate limit info, pagination tokens)

## Parameters

- `timeout` - Request timeout in seconds; set conservatively for reliability
- `retry_on` - Status codes that should trigger a retry (e.g., 429, 503)
- `pagination_token` - Cursor or page token from response headers or body for paginated APIs
- `idempotency_key` - Unique key to prevent duplicate submissions on retry

## When to Use

- The target platform has a REST API but no dedicated integration connector
- Connecting to proprietary, internal, or enterprise APIs unique to your stack
- Sending webhooks or event data to a custom-built backend service
- Testing API endpoints before building a full integration
- Building lightweight one-off integrations that don't justify a full connector

## Rate Limits

- Rate limits are determined entirely by the target API — check that platform's documentation
- Common patterns: per-minute request caps, daily quotas, per-endpoint burst limits

## Relevant Skills

- lead-generation
- crm-management
- email-marketing
