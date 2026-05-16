# SureForms

SureForms is an AI-powered WordPress form builder by the SureBiz team, designed for creating high-converting forms with a Gutenberg-native block interface.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/sureforms/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Forms
```bash
GET https://yoursite.com/wp-json/sureforms/v1/forms

Authorization: Basic {base64_credentials}
```

### Get a Single Form
```bash
GET https://yoursite.com/wp-json/sureforms/v1/forms/{id}

Authorization: Basic {base64_credentials}
```

### List Form Entries
```bash
GET https://yoursite.com/wp-json/sureforms/v1/entries?form_id={id}

Authorization: Basic {base64_credentials}
```

### Get a Single Entry
```bash
GET https://yoursite.com/wp-json/sureforms/v1/entries/{id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Form
- `id` - Form ID
- `title` - Form name
- `fields` - Array of field configurations
- `status` - publish, draft

### Entry
- `id` - Entry ID
- `form_id` - Originating form
- `data` - Key-value map of submitted field values
- `created_at` - ISO 8601 submission timestamp
- `user_id` - WordPress user ID if logged in (optional)

## Parameters

- `form_id` - Required to scope entries to a specific form
- `per_page` / `page` - Pagination controls
- `date_from` / `date_to` - Filter entries by submission date range

## When to Use

- Capturing leads from AI-generated forms and routing to a CRM
- Triggering email sequences on form submission
- Aggregating form entry data for reporting
- Syncing form responses to spreadsheets or project tools

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:draft-content
- marketing:email-sequence
- data:explore-data
- operations:process-doc
