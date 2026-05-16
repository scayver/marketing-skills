# Solid Affiliate

Solid Affiliate is a WordPress affiliate marketing plugin for managing affiliates, referrals, commissions, and payouts on WooCommerce stores.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/solid-affiliate/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI commands available |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Affiliates
```bash
GET https://yoursite.com/wp-json/solid-affiliate/v1/affiliates

Authorization: Basic {base64_credentials}
```

### Get a Single Affiliate
```bash
GET https://yoursite.com/wp-json/solid-affiliate/v1/affiliates/{id}

Authorization: Basic {base64_credentials}
```

### List Referrals
```bash
GET https://yoursite.com/wp-json/solid-affiliate/v1/referrals

Authorization: Basic {base64_credentials}
```

### List Payouts
```bash
GET https://yoursite.com/wp-json/solid-affiliate/v1/payouts

Authorization: Basic {base64_credentials}
```

### Create a Payout
```bash
POST https://yoursite.com/wp-json/solid-affiliate/v1/payouts

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "affiliate_id": 42,
  "amount": 50.00,
  "status": "paid"
}
```

## Key Fields

### Affiliate
- `id` - Unique affiliate ID
- `user_id` - Associated WordPress user ID
- `status` - active, inactive, pending
- `affiliate_link` - Unique referral URL

### Referral
- `id` - Referral ID
- `affiliate_id` - Owning affiliate
- `order_id` - WooCommerce order ID
- `commission_amount` - Calculated commission
- `status` - unpaid, paid, rejected

## Parameters

- `status` - Filter affiliates or referrals by status
- `per_page` / `page` - Pagination controls
- `affiliate_id` - Filter referrals or payouts by affiliate

## When to Use

- Automating affiliate onboarding and approval notifications
- Reporting on referral and commission data
- Triggering payouts based on referral thresholds
- Syncing affiliate performance data to a CRM or reporting tool

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:campaign-plan
- sales:pipeline-review
- data:analyze
- operations:process-doc
