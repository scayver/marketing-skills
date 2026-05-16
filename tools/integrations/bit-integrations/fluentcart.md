# FluentCart

Modern WordPress ecommerce plugin by WPManageNinja built for speed, digital products, and streamlined checkout.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via FluentCart endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List products
```bash
GET https://yoursite.com/wp-json/fluent-cart/v1/products

Authorization: Basic {base64_credentials}
```

### List orders
```bash
GET https://yoursite.com/wp-json/fluent-cart/v1/orders?status=completed

Authorization: Basic {base64_credentials}
```

### Get single order
```bash
GET https://yoursite.com/wp-json/fluent-cart/v1/orders/{id}

Authorization: Basic {base64_credentials}
```

### List customers
```bash
GET https://yoursite.com/wp-json/fluent-cart/v1/customers

Authorization: Basic {base64_credentials}
```

## Key Fields

### Product
- `id` - Product ID
- `title` - Product name
- `price` - Sale price
- `type` - physical, digital, subscription
- `status` - publish, draft

### Order
- `id` - Order ID
- `status` - pending, processing, completed, refunded, cancelled
- `total` - Order total
- `currency` - Currency code
- `customer_id` - Linked customer
- `line_items` - Products in order
- `created_at` - ISO 8601 timestamp

### Customer
- `id` - Customer ID
- `email` - Email address
- `name` - Full name
- `total_orders` - Order count
- `total_spent` - Lifetime value

## Parameters

- `status` - Filter orders by status
- `customer_id` - Filter by customer
- `per_page` / `page` - Pagination
- `orderby` / `order` - Sort field and direction

## When to Use

- Sync orders to CRM or fulfillment system
- Trigger post-purchase email sequences
- Monitor revenue and customer lifetime value
- Automate refund or cancellation notifications

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- small-business:sales-brief
- marketing:email-sequence
- data:analyze
