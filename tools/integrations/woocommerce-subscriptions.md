# WooCommerce Subscriptions

WooCommerce Subscriptions is the official WooCommerce extension for selling recurring products and services with automatic renewal billing and subscriber lifecycle management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wc/v3/subscriptions/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI with WooCommerce commands |
| SDK | - | Not available |

## Authentication

- **Type**: Consumer Key + Consumer Secret
- **Header**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get token**: WooCommerce Admin > Settings > Advanced > REST API > Add Key

## Common Agent Operations

### List all subscriptions
```
GET https://yoursite.com/wp-json/wc/v3/subscriptions?status=active&per_page=100

Authorization: Basic {base64_credentials}
```

### Get a specific subscription
```
GET https://yoursite.com/wp-json/wc/v3/subscriptions/{subscription_id}

Authorization: Basic {base64_credentials}
```

### Update subscription status
```
PUT https://yoursite.com/wp-json/wc/v3/subscriptions/{subscription_id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"status": "cancelled"}
```

### List subscription notes
```
GET https://yoursite.com/wp-json/wc/v3/subscriptions/{subscription_id}/notes

Authorization: Basic {base64_credentials}
```

## Key Fields

### Subscription Object
- `id` - Subscription ID
- `status` - `active`, `cancelled`, `on-hold`, `expired`, `pending`, `pending-cancel`
- `customer_id` - WordPress user ID
- `total` - Recurring total as string
- `billing_period` - `day`, `week`, `month`, `year`
- `billing_interval` - Number of billing periods between renewals
- `next_payment_date_gmt` - ISO 8601 next renewal date
- `start_date_gmt` - Subscription start date
- `line_items` - Array of subscribed products

### Renewal Order Object
- `id` - Renewal order ID
- `parent_id` - Parent subscription ID
- `status` - Order status
- `date_created` - Renewal date

## Parameters

- `status` - Filter by subscription status
- `customer` - Filter by customer ID
- `product` - Filter by subscribed product ID
- `per_page` - Results per page (max 100)

## When to Use

- Querying active subscribers for targeted retention campaigns
- Monitoring upcoming renewals to proactively prevent churn
- Cancelling or pausing subscriptions based on external payment failure events
- Building MRR and churn reports from subscription data

## Rate Limits

- No built-in rate limits; subject to WordPress server capacity
- Use pagination and date filters for large subscription lists

## Relevant Skills

- marketing:email-sequence
- data:analyze
- sales:forecast
