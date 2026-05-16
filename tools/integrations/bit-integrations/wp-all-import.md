# WP All Import

WP All Import is a WordPress plugin for importing data from XML, CSV, and other file formats into WordPress posts, pages, WooCommerce products, and custom post types.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wp-all-import/v1/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI (`wp import`) |
| SDK | - | Not available |

## Authentication

- **Type**: API Key
- **Header**: `X-WP-All-Import-Key: {api_key}`
- **Get token**: WordPress Admin > All Import > Settings > API; enable API and copy the key

## Common Agent Operations

### List all import jobs
```
GET https://yoursite.com/wp-json/wp-all-import/v1/imports

X-WP-All-Import-Key: {api_key}
```

### Get import job status
```
GET https://yoursite.com/wp-json/wp-all-import/v1/imports/{import_id}

X-WP-All-Import-Key: {api_key}
```

### Trigger an import run
```
POST https://yoursite.com/wp-json/wp-all-import/v1/imports/{import_id}/trigger

X-WP-All-Import-Key: {api_key}
Content-Type: application/json

{}
```

### Get import history / logs
```
GET https://yoursite.com/wp-json/wp-all-import/v1/imports/{import_id}/history

X-WP-All-Import-Key: {api_key}
```

## Key Fields

### Import Job Object
- `id` - Import job ID
- `status` - `pending`, `processing`, `completed`, `failed`
- `file_url` - URL of the source data file
- `post_type` - Target WordPress post type
- `count` - Number of records imported
- `created_at` - Job creation timestamp

### Import History Entry
- `id` - Log entry ID
- `import_id` - Associated import job
- `date` - Run date
- `created` - Records created in this run
- `updated` - Records updated
- `skipped` - Records skipped
- `errors` - Error messages array

## Parameters

- `import_id` - The specific import template to trigger
- `file_url` - Override the source file URL for a run
- `per_page` - Number of history entries to return

## When to Use

- Automating scheduled product catalog syncs from supplier data feeds
- Importing bulk lead or contact data from CSV into WordPress custom post types
- Triggering content imports from external CMS or database exports
- Refreshing WooCommerce product listings from external XML feeds

## Rate Limits

- Subject to WordPress server capacity; no hard API rate limit
- Large imports may time out; use chunked files or WP-CLI for very large datasets

## Relevant Skills

- data:explore-data
- operations:process-doc
- marketing:content-creation
