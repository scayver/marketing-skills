# PeepSo

WordPress social network plugin for building community sites with member profiles, activity streams, groups, and messaging.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/peepso/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks only |

## Authentication

- **Type**: WordPress REST API (Application Password or JWT)
- **Header**: `Authorization: Bearer {application_password}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List members

```bash
GET https://yoursite.com/wp-json/peepso/v1/members

Authorization: Bearer {token}
```

### Get member profile

```bash
GET https://yoursite.com/wp-json/peepso/v1/members/{user_id}

Authorization: Bearer {token}
```

### Get activity stream

```bash
GET https://yoursite.com/wp-json/peepso/v1/activity?page=1&per_page=20

Authorization: Bearer {token}
```

### List groups

```bash
GET https://yoursite.com/wp-json/peepso/v1/groups

Authorization: Bearer {token}
```

### Get group members

```bash
GET https://yoursite.com/wp-json/peepso/v1/groups/{group_id}/members

Authorization: Bearer {token}
```

## Key Fields

### Member Object
- `user_id` - WordPress user ID
- `user_login` - Username
- `user_email` - Email address
- `display_name` - Display name
- `avatar_url` - Profile picture URL

### Activity Object
- `activity_id` - Unique activity ID
- `user_id` - Author user ID
- `activity_type` - Type of activity (post, comment, etc.)
- `activity_date` - Timestamp

### Group Object
- `group_id` - Group ID
- `group_name` - Group name
- `member_count` - Number of members

## Parameters

- `page` - Page number for pagination
- `per_page` - Results per page (default 10)
- `user_id` - Filter by user
- `group_id` - Filter by group

## When to Use

- Building community-driven membership sites
- Automating member onboarding into social groups
- Tracking community activity for engagement reports
- Syncing community members with external CRM or email tools

## Rate Limits

- Subject to WordPress server limits; no dedicated rate limit

## Relevant Skills

- marketing:content-creation
- operations:process-doc
- human-resources:onboarding
