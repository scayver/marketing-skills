# weDocs

weDocs is a WordPress documentation plugin for creating and managing organized knowledge base articles, sections, and documentation sites.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/wedocs/v1/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI with weDocs commands |
| SDK | - | Not available |

## Authentication

- **Type**: WordPress Application Password or Cookie Auth
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all docs
```
GET https://yoursite.com/wp-json/wedocs/v1/docs

Authorization: Basic {base64_credentials}
```

### Get a specific doc section
```
GET https://yoursite.com/wp-json/wedocs/v1/docs/{doc_id}/sections

Authorization: Basic {base64_credentials}
```

### Create a new article
```
POST https://yoursite.com/wp-json/wedocs/v1/docs

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "title": "Getting Started Guide",
  "content": "Welcome to our product...",
  "status": "publish",
  "parent": 42
}
```

### Search articles
```
GET https://yoursite.com/wp-json/wedocs/v1/docs?search=installation

Authorization: Basic {base64_credentials}
```

## Key Fields

### Doc Article
- `id` - Article ID
- `title` - Article title
- `content` - Article body (HTML)
- `status` - `publish`, `draft`, or `pending`
- `parent` - Parent doc or section ID
- `menu_order` - Position in navigation

### Section
- `id` - Section ID
- `doc_id` - Parent documentation ID
- `title` - Section title
- `order` - Display order within doc

## Parameters

- `per_page` - Number of results (default 10, max 100)
- `search` - Filter articles by keyword
- `parent` - Filter by parent section or doc ID
- `status` - Filter by publish status

## When to Use

- Programmatically creating knowledge base articles from support data
- Syncing documentation from external content sources into weDocs
- Auditing and updating existing documentation via API
- Building documentation workflows triggered by product updates

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit
- Recommended: respect server resources, avoid bulk imports without batching

## Relevant Skills

- operations:process-doc
- customer-support:kb-article
- engineering:documentation
