# WooCommerce

WooCommerce is the most widely used WordPress eCommerce platform, powering product stores, digital downloads, subscriptions, and online marketplaces.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wc/v3/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI with WooCommerce commands |
| SDK | ✓ | Official PHP, Python, Node.js, Ruby SDKs |

## Authentication

- **Type**: Consumer Key + Consumer Secret (HTTP Basic Auth)
- **Header**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get token**: WooCommerce Admin > Settings > Advanced > REST API > Add Key

## Common Agent Operations

### List recent orders
```
GET https://yoursite.com/wp-json/wc/v3/orders?status=completed&per_page=50

Authorization: Basic {base64_credentials}
```

### Get a specific order
```
GET https://yoursite.com/wp-json/wc/v3/orders/{order_id}

Authorization: Basic {base64_credentials}
```

### Create a coupon
```
POST https://yoursite.com/wp-json/wc/v3/coupons

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "code": "WELCOME20",
  "discount_type": "percent",
  "amount": "20",
  "individual_use": true,
  "usage_limit": 1
}
```

### List products by category
```
GET https://yoursite.com/wp-json/wc/v3/products?category=12&per_page=100

Authorization: Basic {base64_credentials}
```

### Update order status
```
PUT https://yoursite.com/wp-json/wc/v3/orders/{order_id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"status": "completed"}
```

## Key Fields

### Order Object
- `id` - Order ID
- `status` - `pending`, `processing`, `on-hold`, `completed`, `cancelled`, `refunded`, `failed`
- `total` - Order total as string
- `billing` - Customer billing address object
- `line_items` - Array of purchased products
- `customer_id` - WordPress user ID (0 for guest)

### Product Object
- `id` - Product ID
- `name` - Product name
- `sku` - Stock keeping unit
- `price` - Current price
- `stock_status` - `instock`, `outofstock`, `onbackorder`
- `categories` - Array of category objects

### Customer Object
- `id` - Customer ID
- `email` - Customer email
- `first_name` / `last_name` - Name fields
- `orders_count` - Total number of orders
- `total_spent` - Lifetime spend as string

## Parameters

- `status` - Filter orders by status
- `per_page` - Results per page (max 100)
- `after` / `before` - ISO 8601 date range filters
- `customer` - Filter orders by customer ID
- `category` - Filter products by category ID

## When to Use

- Querying purchase data for CRM sync or analytics
- Creating coupons programmatically for marketing campaigns
- Building order fulfillment integrations with 3PL providers
- Syncing product catalog with external inventory systems
- Generating customer LTV and purchase frequency reports

## Rate Limits

- No built-in WooCommerce rate limits; subject to server capacity
- Recommended: max 25 concurrent requests; use `per_page=100` with pagination

## Relevant Skills

- marketing:campaign-plan
- data:analyze
- sales:pipeline-review
