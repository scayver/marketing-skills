# weForms

weForms is a fast, Gutenberg-compatible WordPress form builder focused on performance and simplicity for contact forms, surveys, and lead capture.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/weforms/v1/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI |
| SDK | - | Not available |

## Authentication

- **Type**: WordPress Application Password or Cookie Auth
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all forms
```
GET https://yoursite.com/wp-json/weforms/v1/contact-forms

Authorization: Basic {base64_credentials}
```

### Get a specific form
```
GET https://yoursite.com/wp-json/weforms/v1/contact-forms/{form_id}

Authorization: Basic {base64_credentials}
```

### Get form entries
```
GET https://yoursite.com/wp-json/weforms/v1/contact-forms/{form_id}/entries

Authorization: Basic {base64_credentials}
```

### Get a single entry
```
GET https://yoursite.com/wp-json/weforms/v1/contact-forms/{form_id}/entries/{entry_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Form Object
- `id` - Form ID
- `title` - Form name
- `fields` - Array of field definitions
- `settings` - Form settings (notifications, redirects)
- `created_at` - Creation timestamp

### Entry Object
- `id` - Entry ID
- `form_id` - Associated form ID
- `fields` - Key-value pairs of submitted field data
- `created_at` - Submission timestamp
- `ip_address` - Submitter IP address

## Parameters

- `per_page` - Entries per page (default 10)
- `page` - Page number for pagination
- `order` - `asc` or `desc` (default `desc`)
- `form_id` - Filter entries by specific form

## When to Use

- Retrieving lead submissions programmatically for CRM import
- Auditing form entries for data quality or compliance
- Building custom reporting dashboards on top of form data
- Exporting submissions to external data stores or spreadsheets

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit
- Batch entry exports with pagination to avoid server timeouts

## Relevant Skills

- marketing:draft-content
- marketing:campaign-plan
- data:explore-data
