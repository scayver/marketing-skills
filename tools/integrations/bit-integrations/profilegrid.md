# ProfileGrid

WordPress plugin for building user groups, member directories, and community profiles with group-based access control and activity feeds.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/profilegrid/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress REST API (Application Password)
- **Header**: `Authorization: Bearer {application_password}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List groups

```bash
GET https://yoursite.com/wp-json/profilegrid/v1/groups

Authorization: Bearer {token}
```

### Get group members

```bash
GET https://yoursite.com/wp-json/profilegrid/v1/groups/{group_id}/members

Authorization: Bearer {token}
```

### Get user profile

```bash
GET https://yoursite.com/wp-json/profilegrid/v1/users/{user_id}

Authorization: Bearer {token}
```

### List profile fields

```bash
GET https://yoursite.com/wp-json/profilegrid/v1/fields

Authorization: Bearer {token}
```

### Hook: After user added to group

```php
add_action('pm_group_user_added', function($user_id, $group_id) {
    // Fires when a user is added to a ProfileGrid group
}, 10, 2);
```

## Key Fields

### Group Object
- `group_id` - Group ID
- `group_name` - Group name
- `group_slug` - URL slug
- `member_count` - Number of members
- `is_private` - Boolean privacy flag

### User Profile Object
- `user_id` - WordPress user ID
- `display_name` - Display name
- `email` - Email address
- `groups` - Array of group IDs the user belongs to
- `profile_fields` - Custom profile field values

## Parameters

- `group_id` - Filter by group
- `per_page` - Results per page
- `page` - Pagination

## When to Use

- Building community sites with group-based access and member directories
- Segmenting users into groups based on membership level or purchase
- Automating group enrollment from membership or e-commerce events
- Managing community access control programmatically

## Rate Limits

- Subject to WordPress server limits; no dedicated rate limit

## Relevant Skills

- marketing:campaign-plan
- human-resources:onboarding
- operations:process-doc
