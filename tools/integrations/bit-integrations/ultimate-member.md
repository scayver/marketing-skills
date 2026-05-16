# Ultimate Member

Ultimate Member is a WordPress plugin for building user profiles, member directories, and community features with role-based access control and custom profile fields.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/wp/v2/users/` and `/wp-json/um-api/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI with WP user commands |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Members (WordPress Users)
```bash
GET https://yoursite.com/wp-json/wp/v2/users?roles=subscriber

Authorization: Basic {base64_credentials}
```

### Get a Single User's Profile
```bash
GET https://yoursite.com/wp-json/wp/v2/users/{id}

Authorization: Basic {base64_credentials}
```

### Create a User
```bash
POST https://yoursite.com/wp-json/wp/v2/users

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "username": "jdoe",
  "email": "jane@example.com",
  "password": "SecurePass1!",
  "roles": ["subscriber"]
}
```

### Update User Meta (Custom Profile Fields)
```bash
POST https://yoursite.com/wp-json/wp/v2/users/{id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"meta": {"company": "Acme Corp", "phone": "+15551234567"}}
```

### Get User Role via UM API
```bash
GET https://yoursite.com/wp-json/um-api/v1/user/{id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### User
- `id` - WordPress user ID
- `username` - Login name
- `email` - Email address
- `roles` - Array of WordPress role slugs
- `meta.account_status` - Ultimate Member account status (approved, pending, inactive)
- `meta.um_role` - Ultimate Member role assigned to user

## Parameters

- `roles` - Filter users by WordPress role
- `per_page` / `page` - Pagination controls
- `search` - Text search across username and email
- `meta_key` / `meta_value` - Filter by custom user meta

## When to Use

- Automating user account approval based on form submissions
- Syncing member profile data to a CRM
- Granting or revoking UM roles based on purchase events
- Reporting on member registration counts and account statuses

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:campaign-plan
- operations:process-doc
- data:analyze
- customer-support:customer-research
