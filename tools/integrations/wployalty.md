# WPLoyalty

WooCommerce loyalty plugin for points, rewards, referrals, and customer retention.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API, admin AJAX, plugin hooks, or plugin-specific endpoints when available |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI for WordPress-level inspection and plugin management |
| SDK | - | WordPress PHP hooks and REST endpoints are the primary interface |

## Authentication

- **Type**: WordPress Application Password, cookie nonce, or administrator session
- **Header**: `Authorization: Basic base64(username:application_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Check plugin status

```bash
wp plugin status wployalty
```

### List REST routes

```bash
GET https://example.com/wp-json/

Authorization: Basic base64(username:application_password)
```

### Search posts or records

```bash
GET https://example.com/wp-json/wp/v2/search?search=customer&per_page=20

Authorization: Basic base64(username:application_password)
```

### Create a WordPress post or content record

```bash
POST https://example.com/wp-json/wp/v2/posts

Authorization: Basic base64(username:application_password)
Content-Type: application/json

{
  "title": "New Website Lead",
  "status": "draft",
  "content": "Lead source: website form"
}
```

### Update metadata through a plugin endpoint

```bash
POST https://example.com/wp-json/wployalty/v1/records/{record_id}

Authorization: Basic base64(username:application_password)
Content-Type: application/json

{
  "status": "active",
  "source": "website",
  "notes": "Updated by automation"
}
```

### Inspect plugin options

```bash
wp option list --search='wployalty' --format=table
```

## Key Fields

- `id` - WordPress post, user, entry, order, or plugin record ID
- `post_id` - Related content object
- `user_id` - Related WordPress user
- `email` - User, customer, or form submitter email
- `status` - Plugin-specific state such as active, pending, completed, or failed
- `meta` - Custom fields stored as post meta, user meta, order meta, or plugin tables
- `created_at` - Creation timestamp where available
- `updated_at` - Last update timestamp where available

## Parameters

- `per_page` - Number of records per request
- `page` - Pagination page number
- `search` - Full-text search term
- `status` - Filter by record status
- `orderby` - Sort field
- `order` - `asc` or `desc`

## When to Use

- Manage WordPress-native records and plugin data
- Audit plugin configuration
- Connect forms, users, orders, courses, memberships, or content workflows
- Build internal operational reports from WordPress data
- Automate routine site administration tasks

## Rate Limits

- WordPress does not enforce one universal REST API limit by default
- Hosting firewalls, security plugins, and CDN rules may throttle requests
- Use pagination for large datasets
- Avoid unauthenticated write operations

## Relevant Skills

- referrals
- churn-prevention
- email-marketing
