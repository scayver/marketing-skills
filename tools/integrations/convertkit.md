# Kit (ConvertKit)

Creator-focused email marketing platform that uses tags, sequences, and forms instead of traditional lists to manage and nurture subscriber audiences.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v3 at api.convertkit.com |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official Ruby gem; community libraries for PHP, Python, Node.js |

## Authentication

- **Type**: API Key (query parameter)
- **Parameter**: `api_key={api_key}` or `api_secret={api_secret}` depending on endpoint
- **Get token**: Kit account > Settings > Advanced > API Key / API Secret

## Common Agent Operations

### List all forms
```
GET https://api.convertkit.com/v3/forms?api_key={api_key}
```

### Subscribe someone to a form
```
POST https://api.convertkit.com/v3/forms/{form_id}/subscribe

Content-Type: application/json

{
  "api_key": "{api_key}",
  "email": "jane@example.com",
  "first_name": "Jane",
  "tags": [12345, 67890]
}
```

### Apply a tag to a subscriber
```
POST https://api.convertkit.com/v3/tags/{tag_id}/subscribe

Content-Type: application/json

{"api_key": "{api_key}", "email": "jane@example.com"}
```

### Add subscriber to a sequence
```
POST https://api.convertkit.com/v3/sequences/{sequence_id}/subscribe

Content-Type: application/json

{"api_key": "{api_key}", "email": "jane@example.com", "first_name": "Jane"}
```

### List all tags
```
GET https://api.convertkit.com/v3/tags?api_key={api_key}
```

### Unsubscribe a contact
```
PUT https://api.convertkit.com/v3/unsubscribe

Content-Type: application/json

{"api_secret": "{api_secret}", "email": "jane@example.com"}
```

## Key Fields

### Subscriber
- `email` - Subscriber email address (required)
- `first_name` - First name
- `tags` - Array of tag IDs to apply on subscribe
- `fields` - Object of custom field key/value pairs

### Form
- `id` - Form ID required for subscription endpoint
- `name` - Form name
- `subscriber_count` - Total subscribers via this form

### Tag
- `id` - Tag ID
- `name` - Tag label
- `created_at` - ISO 8601 creation timestamp

### Sequence
- `id` - Sequence ID
- `name` - Sequence name

## Parameters

- `api_key` - Required for most read/subscribe operations
- `api_secret` - Required for unsubscribe and some write operations
- `form_id` - Targets a specific opt-in form
- `tag_id` - Targets a specific tag
- `sequence_id` - Targets a specific email sequence

## When to Use

- Adding subscribers from web forms, course enrollments, or e-commerce events
- Tagging subscribers by lead source, product, or behavior for segmentation
- Enrolling new subscribers in onboarding or drip sequences automatically
- Managing creator-style audiences where tag logic replaces traditional list segments

## Rate Limits

- 120 requests per minute per API key
- See [developers.kit.com](https://developers.kit.com) for current limits

## Relevant Skills

- email-marketing
- lead-generation
- course-creation
