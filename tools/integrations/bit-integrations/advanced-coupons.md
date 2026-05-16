# Advanced Coupons

WooCommerce extension that adds powerful coupon features including BOGO deals, cart conditions, shipping discounts, loyalty programs, and auto-apply coupons.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Extends WooCommerce REST API at `/wp-json/wc/v3/coupons` |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI WooCommerce commands apply |
| SDK | - | No dedicated SDK |

## Authentication

- **Type**: WooCommerce API Key (Consumer Key + Consumer Secret)
- **Header**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get token**: WooCommerce > Settings > Advanced > REST API > Add Key

## Common Agent Operations

### Create a coupon

```bash
POST https://yoursite.com/wp-json/wc/v3/coupons

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "code": "SAVE20",
  "discount_type": "percent",
  "amount": "20",
  "individual_use": true,
  "usage_limit": 1,
  "expiry_date": "2025-12-31",
  "email_restrictions": ["customer@example.com"]
}
```

### Get a coupon by code

```bash
GET https://yoursite.com/wp-json/wc/v3/coupons?code=SAVE20

Authorization: Basic {base64_credentials}
```

### Update a coupon

```bash
PUT https://yoursite.com/wp-json/wc/v3/coupons/{coupon_id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"usage_limit": 5, "expiry_date": "2026-03-31"}
```

### List all coupons

```bash
GET https://yoursite.com/wp-json/wc/v3/coupons?per_page=50

Authorization: Basic {base64_credentials}
```

### Delete a coupon

```bash
DELETE https://yoursite.com/wp-json/wc/v3/coupons/{coupon_id}?force=true

Authorization: Basic {base64_credentials}
```

## Key Fields

### Coupon
- `code` - Coupon code string (required, unique)
- `discount_type` - percent, fixed_cart, fixed_product
- `amount` - Discount value as string
- `individual_use` - Boolean; prevents combining with other coupons
- `usage_limit` - Max total uses (null = unlimited)
- `usage_limit_per_user` - Max uses per customer
- `expiry_date` - Expiration date in YYYY-MM-DD format
- `minimum_amount` - Minimum cart total required
- `email_restrictions` - Array of emails that can use this coupon

## Parameters

- `code` - Filter coupons by code
- `per_page` - Results per page (max 100)
- `page` - Page number
- `after` / `before` - Filter by date created

## When to Use

- Generating personalized single-use coupons for post-purchase retention
- Creating loyalty reward coupons programmatically on milestones
- Setting up BOGO or shipping discount campaigns via API
- Restricting coupons to specific customer emails for VIP offers

## Rate Limits

- Subject to WordPress server limits; WooCommerce imposes no additional rate limiting

## Relevant Skills

- ecommerce
- email-marketing
- affiliate-marketing
