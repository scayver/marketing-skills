# AffiliateWP

The leading affiliate management plugin for WordPress, providing full affiliate program management with referral tracking, real-time reporting, and integrated payouts.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/affwp/v1/` |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI commands via `wp affwp` |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Key passed as query parameter
- **Header**: N/A — use `?key={api_key}` query parameter
- **Get token**: WordPress Admin > AffiliateWP > Settings > REST API > Add Key

## Common Agent Operations

### List affiliates

```bash
GET https://yoursite.com/wp-json/affwp/v1/affiliates?key={api_key}&number=50&offset=0
```

### Get a single affiliate

```bash
GET https://yoursite.com/wp-json/affwp/v1/affiliates/{affiliate_id}?key={api_key}
```

### Create an affiliate

```bash
POST https://yoursite.com/wp-json/affwp/v1/affiliates?key={api_key}

Content-Type: application/json

{"user_id": 42, "status": "active", "rate": "20", "rate_type": "percentage"}
```

### List referrals

```bash
GET https://yoursite.com/wp-json/affwp/v1/referrals?key={api_key}&affiliate_id=7&status=paid&number=100
```

### Get payouts for an affiliate

```bash
GET https://yoursite.com/wp-json/affwp/v1/payouts?key={api_key}&affiliate_id=7
```

## Key Fields

### Affiliate
- `affiliate_id` - Unique affiliate ID
- `user_id` - Linked WordPress user ID
- `status` - active, inactive, pending, rejected
- `rate` - Commission rate value
- `rate_type` - percentage or flat
- `earnings` - Total earnings to date
- `referrals` - Total referral count
- `affiliate_url` - Unique referral URL

### Referral
- `referral_id` - Unique referral ID
- `affiliate_id` - Owning affiliate
- `amount` - Referral commission amount
- `status` - pending, paid, rejected, unpaid
- `description` - Purchase description
- `reference` - Order ID or external reference
- `date` - Creation timestamp

### Payout
- `payout_id` - Payout ID
- `affiliate_id` - Affiliate receiving payment
- `amount` - Payout total
- `payout_method` - PayPal, manual, etc.

## Parameters

- `key` - API key (required on all requests)
- `number` - Results per page (default 20)
- `offset` - Pagination offset
- `status` - Filter by status (active, pending, paid, etc.)
- `affiliate_id` - Filter referrals or payouts by affiliate

## When to Use

- Reporting on affiliate performance and referral revenue
- Automating affiliate account creation from application forms
- Syncing affiliate data to external CRM or analytics platforms
- Monitoring pending referrals and triggering payout workflows

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- affiliate-marketing
- ecommerce
- lead-generation
