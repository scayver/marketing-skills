# WP Fusion

WP Fusion is a WordPress plugin that connects WordPress sites to over 100 CRMs and marketing automation platforms, providing tag-based access control, contact sync, and automation bridging.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wp-fusion/v1/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI |
| SDK | - | Not available |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Apply a tag to a contact
```
POST https://yoursite.com/wp-json/wp-fusion/v1/tags

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "user_id": 42,
  "tags": ["customer", "course-completed"]
}
```

### Remove a tag from a contact
```
DELETE https://yoursite.com/wp-json/wp-fusion/v1/tags

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "user_id": 42,
  "tags": ["trial-user"]
}
```

### Update contact data in connected CRM
```
POST https://yoursite.com/wp-json/wp-fusion/v1/contacts/{user_id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane@example.com",
  "custom_field": "value"
}
```

### Get tags for a user
```
GET https://yoursite.com/wp-json/wp-fusion/v1/tags/{user_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Tag Operation
- `user_id` - WordPress user ID
- `tags` - Array of tag names or IDs to apply or remove

### Contact Object
- `user_id` - WordPress user ID
- `contact_id` - CRM contact ID
- `email` - Contact email address
- `tags` - Current array of tags applied in the CRM
- `meta` - WordPress user meta fields synced to CRM

## Parameters

- `user_id` - WordPress user to operate on
- `tags` - Tag names to apply or remove
- `force_sync` - Boolean to force immediate sync to CRM

## When to Use

- Applying or removing CRM tags based on LMS completions, membership events, or form submissions
- Syncing WordPress user data to CRMs not directly supported by other integrations
- Managing access control to gated content based on CRM tag state
- Bridging multiple WordPress plugins to a single CRM via WP Fusion's unified layer

## Rate Limits

- Subject to WordPress server limits and connected CRM's API rate limits
- WP Fusion queues sync operations; avoid flooding with simultaneous bulk updates

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- sales:account-research
