# WordPress Posts

WordPress Posts is the native content publishing system within WordPress, providing full CRUD capabilities for posts, pages, and custom post types via the WordPress REST API.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wp/v2/posts/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI (`wp post`) |
| SDK | ✓ | Official WordPress REST API SDKs for JS, PHP |

## Authentication

- **Type**: WordPress Application Password or JWT
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List recent published posts
```
GET https://yoursite.com/wp-json/wp/v2/posts?status=publish&per_page=20&orderby=date

Authorization: Basic {base64_credentials}
```

### Create a new post
```
POST https://yoursite.com/wp-json/wp/v2/posts

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "title": "New Blog Post",
  "content": "<p>Post content here...</p>",
  "status": "publish",
  "categories": [3],
  "tags": [12, 15],
  "meta": {"_yoast_wpseo_metadesc": "SEO description here"}
}
```

### Update an existing post
```
PUT https://yoursite.com/wp-json/wp/v2/posts/{post_id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "status": "publish",
  "title": "Updated Title"
}
```

### Delete a post
```
DELETE https://yoursite.com/wp-json/wp/v2/posts/{post_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Post Object
- `id` - Post ID
- `title.rendered` - Post title (HTML rendered)
- `content.rendered` - Post body (HTML)
- `excerpt.rendered` - Short excerpt
- `status` - `publish`, `draft`, `pending`, `private`, `trash`
- `date` - Publication date (ISO 8601)
- `author` - Author user ID
- `categories` - Array of category IDs
- `tags` - Array of tag IDs
- `slug` - URL slug
- `featured_media` - Featured image attachment ID
- `meta` - Custom meta fields object

## Parameters

- `status` - Filter by post status
- `categories` - Filter by category ID
- `tags` - Filter by tag ID
- `author` - Filter by author user ID
- `search` - Full-text search
- `before` / `after` - Date range filter (ISO 8601)
- `per_page` - Results per page (max 100)

## When to Use

- Publishing content programmatically from external CMS or content pipelines
- Automating blog post creation from content briefs or data feeds
- Bulk updating post statuses, categories, or metadata
- Building editorial workflows that move posts through draft, pending, and publish stages

## Rate Limits

- Subject to WordPress server capacity; no hard API rate limit
- Recommended: paginate with `per_page=100`; avoid concurrent bulk writes

## Relevant Skills

- marketing:content-creation
- marketing:draft-content
- operations:process-doc
