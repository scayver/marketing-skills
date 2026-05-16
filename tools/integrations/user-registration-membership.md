# User Registration Membership

User Registration Membership is a WordPress membership addon for the User Registration plugin, adding membership plans, access control, and subscription billing to registration forms.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/user-registration/v1/memberships/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Membership Plans
```bash
GET https://yoursite.com/wp-json/user-registration/v1/memberships/plans

Authorization: Basic {base64_credentials}
```

### Get a Single Plan
```bash
GET https://yoursite.com/wp-json/user-registration/v1/memberships/plans/{id}

Authorization: Basic {base64_credentials}
```

### List Member Subscriptions
```bash
GET https://yoursite.com/wp-json/user-registration/v1/memberships/subscriptions

Authorization: Basic {base64_credentials}
```

### Get a Member's Active Membership
```bash
GET https://yoursite.com/wp-json/user-registration/v1/memberships/subscriptions?user_id={id}

Authorization: Basic {base64_credentials}
```

### Assign a Membership to a User
```bash
POST https://yoursite.com/wp-json/user-registration/v1/memberships/subscriptions

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "user_id": 42,
  "plan_id": 7,
  "status": "active"
}
```

## Key Fields

### Membership Plan
- `id` - Plan ID
- `name` - Plan name
- `price` - Plan price
- `duration` - Access duration (days or unlimited)
- `status` - publish, draft

### Subscription
- `id` - Subscription ID
- `user_id` - WordPress user ID
- `plan_id` - Associated membership plan
- `status` - active, expired, cancelled, pending
- `start_date` - Membership start date
- `expiry_date` - Membership expiry date

## Parameters

- `user_id` - Filter subscriptions by WordPress user
- `plan_id` - Filter subscriptions by membership plan
- `status` - Filter subscriptions by active/expired/cancelled
- `per_page` / `page` - Pagination controls

## When to Use

- Automating membership enrollment after payment confirmation
- Revoking access when subscriptions expire or are cancelled
- Syncing membership status to a CRM for segmented outreach
- Reporting on active member counts and plan distribution

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:campaign-plan
- data:analyze
- operations:process-doc
- sales:account-research
