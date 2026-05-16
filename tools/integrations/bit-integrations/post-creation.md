# WordPress Post Creation

WordPress native post creation capability via the REST API for programmatically creating posts, pages, and custom post types.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/wp/v2/` |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI `wp post create` command |
| SDK | - | Language-specific WordPress API clients available |

## Authentication

- **Type**: Application Password or JWT
- **Header**: `Authorization: Bearer {application_password}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Create a post

```bash
POST https://yoursite.com/wp-json/wp/v2/posts

Authorization: Bearer {application_password}
Content-Type: application/json

{"title": "My New Post", "content": "Post body here", "status": "publish", "categories": [3], "tags": [7, 12]}
```

### Create a page

```bash
POST https://yoursite.com/wp-json/wp/v2/pages

Authorization: Bearer {application_password}
Content-Type: application/json

{"title": "New Page", "content": "Page content", "status": "draft", "parent": 0}
```

### Create a custom post type entry

```bash
POST https://yoursite.com/wp-json/wp/v2/{cpt_slug}

Authorization: Bearer {application_password}
Content-Type: application/json

{"title": "Entry Title", "status": "publish", "meta": {"custom_field": "value"}}
```

### WP-CLI: Create a post

```bash
wp post create --post_title="My Post" --post_content="Content" --post_status=publish --post_type=post
```

## Key Fields

### Post Object
- `id` - Post ID
- `title` - Post title (object with `raw` and `rendered`)
- `content` - Post body (object with `raw` and `rendered`)
- `status` - publish / draft / pending / private
- `date` - Publication date (ISO 8601)
- `author` - Author user ID
- `categories` - Array of category term IDs
- `tags` - Array of tag term IDs
- `slug` - URL slug
- `meta` - Custom fields object

## Parameters

- `status` - Post status (publish, draft, pending)
- `per_page` - Items per page (max 100)
- `page` - Page number
- `search` - Full-text search
- `author` - Filter by author ID

## When to Use

- Programmatically publishing content from external data sources
- Building content pipelines that write to WordPress
- Creating CPT entries from form submissions or external triggers
- Automating scheduled or event-based content publication

## Rate Limits

- Subject to WordPress server configuration; no built-in rate limit

## Relevant Skills

- marketing:content-creation
- marketing:draft-content
- operations:process-doc
