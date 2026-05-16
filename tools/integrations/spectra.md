# Spectra

Spectra (by Brainstorm Force) is a WordPress Gutenberg block plugin that extends the block editor with design blocks, forms, and page-building components.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API for form entries via WP core endpoints |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Form Submissions (via WP Posts)
```bash
GET https://yoursite.com/wp-json/wp/v2/posts?type=uagb-forms

Authorization: Basic {base64_credentials}
```

### Read Form Entry Metadata
```bash
GET https://yoursite.com/wp-json/wp/v2/posts/{entry_id}

Authorization: Basic {base64_credentials}
```

### List Custom Blocks (Post Meta)
```bash
GET https://yoursite.com/wp-json/wp/v2/pages/{page_id}?context=edit

Authorization: Basic {base64_credentials}
```

### Register Webhook for Form Submissions
Spectra's Form block supports native webhook delivery — configure the webhook URL inside the form block settings in the block editor. No REST call required.

## Key Fields

### Form Entry
- `id` - WordPress post ID of the entry
- `meta.uagb_form_id` - Unique identifier of the originating form
- `meta.uagb_fields` - Serialized array of submitted field values
- `date` - ISO 8601 submission timestamp

## Parameters

- `per_page` / `page` - Pagination for list endpoints
- `type` - Post type filter (use plugin's registered CPT)
- `context` - `edit` for full field data including meta

## When to Use

- Capturing leads from Gutenberg-native forms without a third-party form plugin
- Reading form submission data for CRM sync or reporting
- Auditing page layouts and block configurations programmatically
- Triggering downstream automations on form completion

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:draft-content
- marketing:content-creation
- data:explore-data
- operations:process-doc
