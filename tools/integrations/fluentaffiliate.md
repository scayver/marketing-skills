# FluentAffiliate

WordPress affiliate management plugin for running affiliate programs, tracking commissions, and managing payouts.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via FluentAffiliate endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List affiliates
```bash
GET https://yoursite.com/wp-json/fluent-affiliate/v2/affiliates

Authorization: Basic {base64_credentials}
```

### Get affiliate details
```bash
GET https://yoursite.com/wp-json/fluent-affiliate/v2/affiliates/{id}

Authorization: Basic {base64_credentials}
```

### List commissions
```bash
GET https://yoursite.com/wp-json/fluent-affiliate/v2/commissions?status=approved

Authorization: Basic {base64_credentials}
```

### List payouts
```bash
GET https://yoursite.com/wp-json/fluent-affiliate/v2/payouts

Authorization: Basic {base64_credentials}
```

## Key Fields

### Affiliate
- `id` - Affiliate ID (WordPress user ID)
- `display_name` - Affiliate name
- `email` - Email address
- `status` - active, inactive, pending
- `referral_code` - Unique referral slug
- `balance` - Unpaid commission balance

### Commission
- `id` - Commission ID
- `affiliate_id` - Earning affiliate
- `amount` - Commission amount
- `status` - pending, approved, rejected, paid
- `order_id` - Source order
- `created_at` - Timestamp

### Payout
- `id` - Payout ID
- `affiliate_id` - Paid affiliate
- `amount` - Payout amount
- `method` - PayPal, bank transfer, etc.
- `paid_at` - Payment date

## Parameters

- `status` - Filter by commission or payout status
- `affiliate_id` - Filter by specific affiliate
- `per_page` / `page` - Pagination

## When to Use

- Automate payout notifications to affiliates
- Sync affiliate data to a CRM for relationship management
- Generate commission reports for accounting
- Monitor affiliate performance and top earners

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- sales:pipeline-review
- finance:financial-statements
- marketing:performance-report
