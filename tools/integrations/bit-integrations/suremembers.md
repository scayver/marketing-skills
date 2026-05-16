# SureMembers

SureMembers is a lightweight WordPress membership plugin for fast setup and access control with group-based content restriction.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/suremembers/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Access Groups
```bash
GET https://yoursite.com/wp-json/suremembers/v1/access-groups

Authorization: Basic {base64_credentials}
```

### Get a Single Access Group
```bash
GET https://yoursite.com/wp-json/suremembers/v1/access-groups/{id}

Authorization: Basic {base64_credentials}
```

### List Members
```bash
GET https://yoursite.com/wp-json/suremembers/v1/members

Authorization: Basic {base64_credentials}
```

### Add a Member to an Access Group
```bash
POST https://yoursite.com/wp-json/suremembers/v1/access-groups/{id}/members

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"user_id": 42}
```

### Remove a Member from an Access Group
```bash
DELETE https://yoursite.com/wp-json/suremembers/v1/access-groups/{id}/members/{user_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Access Group
- `id` - Group ID
- `name` - Group name
- `restricted_content` - Array of restricted post/page IDs
- `status` - active, inactive

### Member
- `id` - WordPress user ID
- `email` - User email address
- `access_groups` - Array of group IDs the user belongs to
- `joined_at` - Timestamp of group enrollment

## Parameters

- `per_page` / `page` - Pagination controls
- `status` - Filter members by active/inactive

## When to Use

- Automating membership enrollment after purchase or registration
- Revoking access when subscriptions lapse or are cancelled
- Syncing membership status to a CRM for segmentation
- Reporting on member counts per access group

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:campaign-plan
- operations:process-doc
- data:analyze
- sales:account-research
