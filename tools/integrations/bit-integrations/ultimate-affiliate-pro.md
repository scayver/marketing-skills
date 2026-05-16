# Ultimate Affiliate Pro

Ultimate Affiliate Pro is a WordPress affiliate plugin with multi-tier commissions, bonuses, social sharing rewards, and referral tracking.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/uap/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Affiliates
```bash
GET https://yoursite.com/wp-json/uap/v1/affiliates

Authorization: Basic {base64_credentials}
```

### Get a Single Affiliate
```bash
GET https://yoursite.com/wp-json/uap/v1/affiliates/{id}

Authorization: Basic {base64_credentials}
```

### List Referrals
```bash
GET https://yoursite.com/wp-json/uap/v1/referrals

Authorization: Basic {base64_credentials}
```

### List Commissions
```bash
GET https://yoursite.com/wp-json/uap/v1/commissions

Authorization: Basic {base64_credentials}
```

### List Payouts
```bash
GET https://yoursite.com/wp-json/uap/v1/payouts

Authorization: Basic {base64_credentials}
```

## Key Fields

### Affiliate
- `id` - Affiliate record ID
- `user_id` - WordPress user ID
- `status` - active, inactive, pending
- `affiliate_link` - Unique referral URL
- `balance` - Unpaid commission balance

### Referral
- `id` - Referral ID
- `affiliate_id` - Owning affiliate
- `order_id` - Associated order
- `commission` - Earned commission amount
- `status` - pending, approved, rejected, paid

## Parameters

- `status` - Filter affiliates, referrals, or payouts by status
- `affiliate_id` - Scope referrals or commissions to an affiliate
- `per_page` / `page` - Pagination controls
- `date_from` / `date_to` - Filter by date range

## When to Use

- Automating affiliate approval notifications
- Triggering payout workflows when balance exceeds a threshold
- Reporting on multi-tier commission structures
- Syncing affiliate performance data to a CRM or spreadsheet

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:campaign-plan
- sales:pipeline-review
- data:analyze
- operations:process-doc
