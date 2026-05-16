# Teams for WooCommerce Memberships

Teams for WooCommerce Memberships is a WooCommerce extension that enables group or team-based membership purchases, allowing one buyer to grant membership access to multiple team members.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WooCommerce REST API at `/wp-json/wc/v3/` extended with team endpoints |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI with WooCommerce CLI support |
| SDK | - | No external SDK; use WC REST directly |

## Authentication

- **Type**: WooCommerce API Keys (Consumer Key + Consumer Secret)
- **Header**: `Authorization: Basic {base64(ck:cs)}`
- **Get token**: WooCommerce > Settings > Advanced > REST API

## Common Agent Operations

### List Team Memberships
```bash
GET https://yoursite.com/wp-json/wc/v3/memberships/members

Authorization: Basic {base64_credentials}
```

### Get a Single Membership
```bash
GET https://yoursite.com/wp-json/wc/v3/memberships/members/{id}

Authorization: Basic {base64_credentials}
```

### List Teams
```bash
GET https://yoursite.com/wp-json/wc/v3/memberships/teams

Authorization: Basic {base64_credentials}
```

### Get Team Members
```bash
GET https://yoursite.com/wp-json/wc/v3/memberships/teams/{team_id}/members

Authorization: Basic {base64_credentials}
```

### Add a Member to a Team
```bash
POST https://yoursite.com/wp-json/wc/v3/memberships/teams/{team_id}/members

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"user_id": 42, "role": "member"}
```

## Key Fields

### Team
- `id` - Team ID
- `name` - Team name
- `plan_id` - Associated membership plan
- `owner_id` - WordPress user ID of the team owner
- `seat_count` - Total purchased seats
- `seats_used` - Number of active members

### Team Member
- `id` - Membership record ID
- `user_id` - WordPress user ID
- `team_id` - Parent team ID
- `role` - owner or member
- `status` - active, inactive, pending

## Parameters

- `status` - Filter members or teams by status
- `per_page` / `page` - Pagination controls
- `team_id` - Scope members to a specific team

## When to Use

- Automating seat assignment when a team plan is purchased
- Notifying team owners when seats are nearly exhausted
- Syncing team membership status to a CRM for account management
- Reporting on team sizes and plan utilization

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- operations:process-doc
- sales:account-research
- data:analyze
- marketing:campaign-plan
