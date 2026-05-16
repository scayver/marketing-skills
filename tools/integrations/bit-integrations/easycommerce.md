# EasyCommerce

WordPress ecommerce plugin for building lightweight online stores with simplified product management and checkout.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via EasyCommerce endpoints |
| MCP | - | Not available |
| CLI | - | WP-CLI compatible |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password or cookie-based auth
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List products
```bash
GET https://yoursite.com/wp-json/easycommerce/v1/products

Authorization: Basic {base64_credentials}
```

### Get single product
```bash
GET https://yoursite.com/wp-json/easycommerce/v1/products/{id}

Authorization: Basic {base64_credentials}
```

### List orders
```bash
GET https://yoursite.com/wp-json/easycommerce/v1/orders?status=completed

Authorization: Basic {base64_credentials}
```

### Get customers
```bash
GET https://yoursite.com/wp-json/easycommerce/v1/customers

Authorization: Basic {base64_credentials}
```

## Key Fields

### Product
- `id` - Product ID
- `name` - Product name
- `price` - Sale price
- `regular_price` - Regular price
- `stock_quantity` - Inventory count
- `status` - publish, draft

### Order
- `id` - Order ID
- `status` - pending, processing, completed, cancelled
- `total` - Order total
- `customer_email` - Buyer email
- `line_items` - Products in order

## Parameters

- `status` - Filter by order or product status
- `per_page` - Results per page
- `page` - Page number
- `orderby` / `order` - Sort field and direction

## When to Use

- Sync store orders to a CRM or marketing platform
- Monitor inventory levels programmatically
- Pull customer purchase history for segmentation
- Automate post-purchase email flows

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- small-business:sales-brief
- marketing:email-sequence
- data:analyze
