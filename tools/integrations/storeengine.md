# StoreEngine

StoreEngine is a WordPress eCommerce plugin for building and managing online stores with product listings, cart, and checkout functionality.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/storeengine/v1/` |
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
GET https://yoursite.com/wp-json/storeengine/v1/products

Authorization: Basic {base64_credentials}
```

### Get a Single Product
```bash
GET https://yoursite.com/wp-json/storeengine/v1/products/{id}

Authorization: Basic {base64_credentials}
```

### List Orders
```bash
GET https://yoursite.com/wp-json/storeengine/v1/orders

Authorization: Basic {base64_credentials}
```

### Get a Single Order
```bash
GET https://yoursite.com/wp-json/storeengine/v1/orders/{id}

Authorization: Basic {base64_credentials}
```

### List Customers
```bash
GET https://yoursite.com/wp-json/storeengine/v1/customers

Authorization: Basic {base64_credentials}
```

## Key Fields

### Product
- `id` - Product ID
- `name` - Product name
- `price` - Current price
- `status` - publish, draft

### Order
- `id` - Order ID
- `customer_id` - Buyer's customer record
- `total` - Order total
- `status` - pending, completed, refunded

## Parameters

- `per_page` / `page` - Pagination controls
- `status` - Filter orders by status
- `customer_id` - Filter orders by customer

## When to Use

- Syncing product catalog data to external systems
- Triggering fulfillment workflows on order completion
- Building customer order history reports
- Automating post-purchase email sequences

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:campaign-plan
- data:analyze
- operations:process-doc
- sales:account-research
