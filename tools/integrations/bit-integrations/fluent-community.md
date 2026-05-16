# FluentCommunity

WordPress community platform plugin with social feeds, spaces, and member management built on WordPress.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via FluentCommunity endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List members
```bash
GET https://yoursite.com/wp-json/fluent-community/v2/members

Authorization: Basic {base64_credentials}
```

### Get member profile
```bash
GET https://yoursite.com/wp-json/fluent-community/v2/members/{id}

Authorization: Basic {base64_credentials}
```

### List spaces
```bash
GET https://yoursite.com/wp-json/fluent-community/v2/spaces

Authorization: Basic {base64_credentials}
```

### List posts in space
```bash
GET https://yoursite.com/wp-json/fluent-community/v2/spaces/{space_id}/posts

Authorization: Basic {base64_credentials}
```

## Key Fields

### Member
- `id` - WordPress user ID
- `display_name` - Member display name
- `email` - Member email
- `role` - Community role (admin, moderator, member)
- `joined_at` - Join date
- `spaces` - Spaces the member belongs to

### Space
- `id` - Space ID
- `title` - Space name
- `description` - Space description
- `visibility` - public, private
- `member_count` - Number of members

### Post
- `id` - Post ID
- `content` - Post body
- `author_id` - Author user ID
- `space_id` - Parent space
- `created_at` - ISO 8601 timestamp

## Parameters

- `per_page` - Results per page
- `page` - Page number
- `space_id` - Filter posts by space

## When to Use

- Sync community members to an email marketing list
- Monitor new posts for community management
- Automate welcome messages for new members
- Report on community engagement and growth

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- community-management
