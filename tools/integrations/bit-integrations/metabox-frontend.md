# Meta Box Frontend Submission

WordPress extension for the Meta Box plugin that allows users to submit and edit custom post type data from the front end via REST API.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/meta-box/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password or JWT
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List registered Meta Box fields for a post type
```bash
GET https://yoursite.com/wp-json/meta-box/v1/fields?post_type=custom_type

Authorization: Basic {base64_credentials}
```

### Get meta fields for a post
```bash
GET https://yoursite.com/wp-json/meta-box/v1/posts/{post_id}/fields

Authorization: Basic {base64_credentials}
```

### Submit a new post with meta fields (frontend form)
```bash
POST https://yoursite.com/wp-json/wp/v2/{custom_post_type}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"title": "New Listing", "status": "pending", "meta": {"phone": "555-1234", "location": "Austin TX"}}
```

### Update existing post meta
```bash
POST https://yoursite.com/wp-json/wp/v2/{custom_post_type}/{post_id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"meta": {"field_key": "new_value"}}
```

## Key Fields

### Post / Submission
- `id` - Post ID
- `title` - Post title
- `status` - Post status (publish, pending, draft)
- `meta` - Object of meta field key-value pairs
- `author` - Submitting user ID

### Meta Field
- `id` - Field ID
- `type` - Field type (text, textarea, select, image, etc.)
- `name` - Field label
- `value` - Current field value

## Parameters

- `post_type` - Filter fields by post type
- `status` - Filter posts by status
- `per_page` - Results per page

## When to Use

- Running front-end user-submitted directories (jobs, classifieds, listings)
- Automating CRM contact creation from user-submitted profile or listing forms
- Logging custom post type submissions to external reporting tools
- Triggering notifications when users submit or update front-end posts

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- marketing:content-creation
- operations:process-doc
- data:validate-data
