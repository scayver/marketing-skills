# bbPress

Lightweight and fast WordPress forum plugin maintained by Automattic — adds discussion forums, topics, and replies to any WordPress site with minimal overhead.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/wp/v2/topics/` and `/wp-json/wp/v2/replies/` |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI `wp bbp` commands |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords > Add New

## Common Agent Operations

### List forum topics

```bash
GET https://yoursite.com/wp-json/wp/v2/topics?per_page=20&orderby=date&order=desc

Authorization: Basic {base64_credentials}
```

### Get a single topic

```bash
GET https://yoursite.com/wp-json/wp/v2/topics/{topic_id}

Authorization: Basic {base64_credentials}
```

### Create a new topic

```bash
POST https://yoursite.com/wp-json/wp/v2/topics

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "title": "Discussion: Best practices",
  "content": "What are your thoughts on...",
  "status": "publish",
  "bbp_forum_id": 5
}
```

### List replies to a topic

```bash
GET https://yoursite.com/wp-json/wp/v2/replies?topic_id={topic_id}&per_page=50

Authorization: Basic {base64_credentials}
```

### Assign a user to a forum role via PHP

```php
// Grant forum moderator role to a user
bbp_set_user_role( $user_id, bbp_get_moderator_role() );

// Add user as a keymaster
bbp_set_user_role( $user_id, bbp_get_keymaster_role() );
```

## Key Fields

### Topic
- `id` - Topic post ID
- `title` - Topic title
- `content` - Topic body
- `author` - Author user ID
- `bbp_forum_id` - Parent forum ID
- `status` - publish, spam, trash
- `date` - Creation date

### Reply
- `id` - Reply post ID
- `content` - Reply body
- `author` - Author user ID
- `topic_id` - Parent topic ID

### Forum Role
- `bbp_keymaster` - Full admin access
- `bbp_moderator` - Moderation access
- `bbp_participant` - Standard posting access
- `bbp_spectator` - Read-only access

## Parameters

- `per_page` - Results per page (max 100)
- `page` - Pagination page
- `topic_id` - Filter replies by topic
- `forum_id` - Filter topics by forum
- `orderby` - Sort field (date, title, etc.)

## When to Use

- Programmatically creating forum topics for announcements or documentation
- Assigning moderator roles to users on membership activation
- Pulling topic and reply data for community activity reports
- Automating forum access grants based on registration or purchase events

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- content-strategy
- crm-management
