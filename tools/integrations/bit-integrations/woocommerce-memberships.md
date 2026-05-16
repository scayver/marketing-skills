# WooCommerce Memberships

WooCommerce Memberships is the official WooCommerce extension for creating membership plans that restrict content and grant perks, sold through the WooCommerce checkout.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wc/v3/memberships/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI with WooCommerce commands |
| SDK | - | Not available |

## Authentication

- **Type**: Consumer Key + Consumer Secret
- **Header**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get token**: WooCommerce Admin > Settings > Advanced > REST API > Add Key

## Common Agent Operations

### List membership plans
```
GET https://yoursite.com/wp-json/wc/v3/memberships/plans

Authorization: Basic {base64_credentials}
```

### List user memberships
```
GET https://yoursite.com/wp-json/wc/v3/memberships/members?per_page=100

Authorization: Basic {base64_credentials}
```

### Get a specific user membership
```
GET https://yoursite.com/wp-json/wc/v3/memberships/members/{member_id}

Authorization: Basic {base64_credentials}
```

### Grant a membership to a user
```
POST https://yoursite.com/wp-json/wc/v3/memberships/members

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "customer_id": 42,
  "plan_id": 15,
  "status": "active"
}
```

## Key Fields

### User Membership Object
- `id` - User membership ID
- `customer_id` - WordPress user ID
- `plan_id` - Membership plan ID
- `status` - `active`, `cancelled`, `expired`, `pending`, `paused`
- `start_date` - Membership start date
- `end_date` - Membership expiry date (null for lifetime)

### Membership Plan Object
- `id` - Plan ID
- `name` - Plan display name
- `slug` - Plan slug
- `status` - `publish` or `draft`
- `access_length` - Duration in seconds (null for lifetime)

## Parameters

- `plan_id` - Filter members by plan
- `status` - Filter by membership status
- `customer` - Filter by customer ID or email
- `per_page` - Results per page (max 100)

## When to Use

- Granting or revoking membership access based on external payment or CRM events
- Auditing active memberships for renewal campaigns
- Syncing membership status with email platforms for segmentation
- Building membership lifecycle reports (active, cancelled, expired)

## Rate Limits

- No built-in rate limits; subject to WordPress server capacity
- Use pagination for bulk membership queries

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- data:analyze
