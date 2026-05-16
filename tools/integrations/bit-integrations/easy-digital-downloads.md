# Easy Digital Downloads

WordPress plugin for selling digital products — files, software licenses, and subscriptions.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via EDD endpoints |
| MCP | - | Not available |
| CLI | - | WP-CLI commands available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: API Key pair (consumer key + secret) or Application Password
- **Header**: `Authorization: Basic base64(key:secret)`
- **Get token**: EDD Settings > API Keys, or WordPress Users > Application Passwords

## Common Agent Operations

### List products
```bash
GET https://yoursite.com/wp-json/edd/v3/products

Authorization: Basic {base64_key_secret}
```

### Get single product
```bash
GET https://yoursite.com/wp-json/edd/v3/products/{id}

Authorization: Basic {base64_key_secret}
```

### List orders
```bash
GET https://yoursite.com/wp-json/edd/v3/orders?status=complete&number=50

Authorization: Basic {base64_key_secret}
```

### Get customer
```bash
GET https://yoursite.com/wp-json/edd/v3/customers/{id}

Authorization: Basic {base64_key_secret}
```

### List discounts
```bash
GET https://yoursite.com/wp-json/edd/v3/discounts

Authorization: Basic {base64_key_secret}
```

## Key Fields

### Product
- `id` - Product post ID
- `title` - Product name
- `price` - Base price
- `files` - Downloadable file array
- `categories` / `tags` - Taxonomy terms

### Order
- `id` - Order ID
- `status` - complete, pending, refunded, failed
- `total` - Order total
- `date_created` - ISO 8601 timestamp
- `customer_id` - Linked customer
- `items` - Line items array

### Customer
- `id` - Customer ID
- `email` - Email address
- `name` - Full name
- `purchase_count` - Total purchases
- `purchase_value` - Lifetime value

## Parameters

- `status` - Filter orders by status
- `customer` - Filter by customer ID or email
- `number` - Results per page (default 20)
- `offset` - Pagination offset
- `orderby` / `order` - Sort field and direction

## When to Use

- Sync digital product sales to a CRM
- Track customer lifetime value and purchase history
- Automate license delivery and fulfillment
- Pull revenue data into reporting dashboards
- Trigger post-purchase email sequences

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- marketing:email-sequence
- data:analyze
- small-business:sales-brief
