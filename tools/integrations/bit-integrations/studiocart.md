# StudioCart

StudioCart is a WordPress checkout and sales plugin designed for coaches, course creators, and service businesses, with order bumps, upsells, and payment form creation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/studiocart/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Products
```bash
GET https://yoursite.com/wp-json/studiocart/v1/products

Authorization: Basic {base64_credentials}
```

### Get a Single Product
```bash
GET https://yoursite.com/wp-json/studiocart/v1/products/{id}

Authorization: Basic {base64_credentials}
```

### List Orders
```bash
GET https://yoursite.com/wp-json/studiocart/v1/orders

Authorization: Basic {base64_credentials}
```

### Get Order Details
```bash
GET https://yoursite.com/wp-json/studiocart/v1/orders/{id}

Authorization: Basic {base64_credentials}
```

### List Customers
```bash
GET https://yoursite.com/wp-json/studiocart/v1/customers

Authorization: Basic {base64_credentials}
```

## Key Fields

### Product
- `id` - Product ID
- `name` - Product name
- `price` - Base price
- `type` - one-time, subscription, payment-plan

### Order
- `id` - Order ID
- `customer_email` - Buyer's email address
- `product_id` - Purchased product
- `total` - Amount charged
- `status` - complete, pending, refunded, cancelled

## Parameters

- `per_page` / `page` - Pagination controls
- `status` - Filter orders by status
- `product_id` - Filter orders by product

## When to Use

- Triggering CRM updates or onboarding sequences on purchase
- Syncing order data to accounting or fulfillment tools
- Building revenue dashboards from checkout data
- Automating upsell or cross-sell follow-ups

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:email-sequence
- sales:pipeline-review
- data:analyze
- operations:process-doc
