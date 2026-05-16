# Formidable Forms

WordPress form builder focused on advanced data management, calculated fields, and building application-like forms.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via Formidable endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password or consumer key/secret
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List forms
```bash
GET https://yoursite.com/wp-json/frm/v2/forms

Authorization: Basic {base64_credentials}
```

### Get form entries
```bash
GET https://yoursite.com/wp-json/frm/v2/entries?form_id={id}

Authorization: Basic {base64_credentials}
```

### Get single entry
```bash
GET https://yoursite.com/wp-json/frm/v2/entries/{entry_id}

Authorization: Basic {base64_credentials}
```

### Get form fields
```bash
GET https://yoursite.com/wp-json/frm/v2/fields?form_id={id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Form
- `id` - Form ID
- `name` - Form name
- `key` - URL-safe form key
- `status` - published, draft
- `created_at` - Creation timestamp

### Entry
- `id` - Entry ID
- `form_id` - Parent form
- `item_key` - Unique entry key
- `metas` - Key-value of field IDs to values
- `created_at` - Submission timestamp
- `is_draft` - Draft flag

### Field
- `id` - Field ID
- `name` - Field label
- `type` - text, email, select, checkbox, etc.
- `field_key` - Unique field identifier

## Parameters

- `form_id` - Filter entries by form
- `created_at` - Filter by date range
- `per_page` / `page` - Pagination
- `search` - Search entry values

## When to Use

- Pull complex form data with calculations into reporting tools
- Sync entries to a CRM or database
- Build data-driven directory or listing sites
- Automate entry creation from external data sources

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- data:analyze
- marketing:email-sequence
- operations:process-doc
