# SureCart

SureCart is a modern WordPress eCommerce platform with a cloud-hosted checkout, subscriptions, one-click upsells, and digital product delivery.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/surecart/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI support via plugin |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Products
```bash
GET https://yoursite.com/wp-json/surecart/v1/products

Authorization: Basic {base64_credentials}
```

### List Orders
```bash
GET https://yoursite.com/wp-json/surecart/v1/orders

Authorization: Basic {base64_credentials}
```

### Get a Single Order
```bash
GET https://yoursite.com/wp-json/surecart/v1/orders/{id}

Authorization: Basic {base64_credentials}
```

### List Subscriptions
```bash
GET https://yoursite.com/wp-json/surecart/v1/subscriptions

Authorization: Basic {base64_credentials}
```

### List Customers
```bash
GET https://yoursite.com/wp-json/surecart/v1/customers

Authorization: Basic {base64_credentials}
```

## Key Fields

### Product
- `id` - Product ID
- `name` - Product name
- `status` - publish, draft
- `prices` - Array of pricing options

### Order
- `id` - Order ID
- `customer_id` - Buyer's customer record
- `total_amount` - Order total in cents
- `status` - paid, pending, refunded

### Subscription
- `id` - Subscription ID
- `customer_id` - Subscriber
- `status` - active, cancelled, past_due
- `current_period_end` - Next billing date

## Parameters

- `per_page` / `page` - Pagination controls
- `status` - Filter by record status
- `customer_id` - Scope orders or subscriptions to a customer

## When to Use

- Triggering onboarding sequences on first purchase
- Syncing customer data to a CRM after checkout
- Monitoring subscription churn via status changes
- Building revenue dashboards from order data

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:email-sequence
- sales:pipeline-review
- data:analyze
- operations:process-doc
