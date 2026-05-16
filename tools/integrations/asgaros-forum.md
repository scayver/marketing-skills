# Asgaros Forum

Lightweight and easy-to-use WordPress forum plugin for adding discussion boards, categories, and threaded topics to any WordPress site.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No public external REST API |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | WordPress PHP hooks only |

## Authentication

- **Type**: WordPress admin access
- **Header**: N/A — plugin managed within WordPress admin
- **Get token**: N/A — use WordPress Application Password for general WP REST if needed

## Common Agent Operations

Asgaros Forum has no external REST API. Membership and content management is done through WordPress admin or PHP hooks.

### Grant forum membership via PHP

```php
// Add a user as a forum member on user registration
add_action( 'user_register', function( $user_id ) {
    $forum = AsgarosForumMembers::getInstance();
    $forum->addMember( $user_id );
});
```

### Check if user is a forum member (PHP)

```php
$is_member = AsgarosForumMembers::isMember( $user_id );
```

### Create a forum post programmatically (PHP)

```php
$post_data = array(
    'post_title'   => 'New Discussion Topic',
    'post_content' => 'This topic was created automatically.',
    'post_type'    => 'asgarosforum',
    'post_status'  => 'publish',
    'post_author'  => $user_id,
);
wp_insert_post( $post_data );
```

### Query forum topics via WordPress REST API

```bash
GET https://yoursite.com/wp-json/wp/v2/asgarosforum?per_page=20

Authorization: Basic {base64_credentials}
```

## Key Fields

### Forum Topic
- `post_id` - WordPress post ID for the topic
- `post_title` - Topic title
- `post_content` - Topic body
- `post_author` - Author user ID
- `post_parent` - Parent category or forum ID
- `post_status` - publish, draft

### Member
- `user_id` - WordPress user ID
- `is_member` - Boolean forum membership status

## Parameters

- `user_id` - WordPress user ID for membership operations
- `forum_id` - Target forum category ID
- `per_page` - Results per page (WP REST query)

## When to Use

- Automatically granting forum membership when users register or purchase a membership
- Creating welcome topics or pinned announcements programmatically
- Restricting forum access to specific WordPress user roles or membership tiers
- Building simple community discussion boards without a complex dedicated forum platform

## Rate Limits

- No rate limits; governed by WordPress server performance

## Relevant Skills

- content-strategy
- crm-management
