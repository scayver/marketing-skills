# WC Affiliate

WC Affiliate is a WooCommerce affiliate management plugin for tracking referrals, commissions, and payouts directly within a WooCommerce store.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Extends WooCommerce REST API at `/wp-json/wc/v3/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI with WooCommerce CLI support |
| SDK | - | No external SDK; use WC REST directly |

## Authentication

- **Type**: WooCommerce API Keys (Consumer Key + Consumer Secret)
- **Header**: `Authorization: Basic {base64(ck:cs)}`
- **Get token**: WooCommerce > Settings > Advanced > REST API

## Common Agent Operations

### List Affiliates
```bash
GET https://yoursite.com/wp-json/wc/v3/wc-affiliate/affiliates

Authorization: Basic {base64_credentials}
```

### Get a Single Affiliate
```bash
GET https://yoursite.com/wp-json/wc/v3/wc-affiliate/affiliates/{id}

Authorization: Basic {base64_credentials}
```

### List Referrals
```bash
GET https://yoursite.com/wp-json/wc/v3/wc-affiliate/referrals

Authorization: Basic {base64_credentials}
```

### List Commissions
```bash
GET https://yoursite.com/wp-json/wc/v3/wc-affiliate/commissions

Authorization: Basic {base64_credentials}
```

### Create a Payout
```bash
POST https://yoursite.com/wp-json/wc/v3/wc-affiliate/payouts

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "affiliate_id": 12,
  "amount": 75.00,
  "payment_method": "paypal"
}
```

## Key Fields

### Affiliate
- `id` - Affiliate record ID
- `user_id` - WordPress user ID
- `status` - active, inactive, pending
- `affiliate_url` - Unique referral link
- `balance` - Unpaid commission balance

### Referral
- `id` - Referral ID
- `affiliate_id` - Owning affiliate
- `order_id` - WooCommerce order ID
- `commission` - Earned commission amount
- `status` - pending, approved, rejected, paid

## Parameters

- `status` - Filter affiliates, referrals, or commissions by status
- `affiliate_id` - Scope referrals or commissions to an affiliate
- `per_page` / `page` - Pagination controls

## When to Use

- Automating payout processing when affiliate balances reach a threshold
- Reporting on affiliate revenue attribution per order
- Syncing commission data to accounting tools
- Notifying affiliates of new referral activity

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:campaign-plan
- sales:pipeline-review
- data:analyze
- finance:financial-statements
