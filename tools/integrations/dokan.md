# Dokan

WordPress multivendor marketplace plugin that extends WooCommerce to enable multiple vendors to manage their own storefronts, products, orders, and withdrawals from a single WordPress site.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/dokan/v1/ extending WooCommerce REST API |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI for WordPress-level operations |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress application password or WooCommerce consumer key/secret
- **Header (app password)**: `Authorization: Basic {base64(username:app_password)}`
- **Header (WC keys)**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get credentials**: WordPress Admin > Users > Profile > Application Passwords, or WooCommerce > Settings > Advanced > REST API

## Common Agent Operations

### List all vendors
```
GET /wp-json/dokan/v1/stores

Authorization: Basic {base64_credentials}
```

### Get a specific vendor's store
```
GET /wp-json/dokan/v1/stores/{vendor_id}

Authorization: Basic {base64_credentials}
```

### Get products for a vendor
```
GET /wp-json/dokan/v1/products?author={vendor_id}

Authorization: Basic {base64_credentials}
```

### Get orders for a vendor
```
GET /wp-json/dokan/v1/orders?seller_id={vendor_id}

Authorization: Basic {base64_credentials}
```

### Get vendor withdrawal requests
```
GET /wp-json/dokan/v1/withdrawal?seller_id={vendor_id}

Authorization: Basic {base64_credentials}
```

### Create a withdrawal request for a vendor
```
POST /wp-json/dokan/v1/withdrawal

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "amount": 150.00,
  "method": "paypal"
}
```

## Key Fields

### Vendor (Store)
- `id` - WordPress user ID of the vendor
- `store_name` - Vendor's store display name
- `email` - Vendor email address
- `store_url` - Vendor store slug/URL
- `payment` - Object with vendor's configured payout method
- `enabled` - Whether the vendor's store is active

### Product
- `id` - WooCommerce product ID
- `name` - Product name
- `price` - Current selling price
- `status` - publish / draft / pending
- `author` - Vendor user ID

### Order
- `id` - WooCommerce order ID
- `status` - Order status (processing, completed, etc.)
- `seller_id` - Vendor user ID
- `total` - Order total amount

### Withdrawal
- `amount` - Withdrawal amount
- `method` - Payment method (paypal, bank_transfer, etc.)
- `status` - pending / approved / cancelled

## Parameters

- `vendor_id` / `seller_id` / `author` - Filter results by vendor user ID
- `status` - Filter by store, product, order, or withdrawal status
- `per_page` - Number of results per page (max 100)
- `page` - Pagination page number

## When to Use

- Onboarding new vendors by syncing their registration data to a CRM
- Monitoring new product listings from vendors for quality review workflows
- Pulling vendor revenue and order data for commission reconciliation
- Sending automated notifications when vendor withdrawals are requested or approved

## Rate Limits

- Governed by WordPress REST API server limits; no Dokan-specific published limits

## Relevant Skills

- ecommerce
- affiliate-marketing
- crm-management
