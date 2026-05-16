# License Manager for WooCommerce

WordPress plugin that generates, delivers, and manages software license keys for products sold through WooCommerce.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/lmfwc/v2/ |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress hooks and REST API only |

## Authentication

- **Type**: Consumer Key + Consumer Secret (Basic Auth)
- **Header**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get keys**: WooCommerce Settings > Advanced > REST API > Add Key; set permissions to Read/Write

## Common Agent Operations

### List license keys

```bash
GET https://yoursite.com/wp-json/lmfwc/v2/licenses?per_page=50

Authorization: Basic {base64(key:secret)}
```

### Get a specific license

```bash
GET https://yoursite.com/wp-json/lmfwc/v2/licenses/{license_key}

Authorization: Basic {base64(key:secret)}
```

### Create a license key

```bash
POST https://yoursite.com/wp-json/lmfwc/v2/licenses

Authorization: Basic {base64(key:secret)}
Content-Type: application/json

{"licenseKey": "XXXX-YYYY-ZZZZ", "status": 2, "productId": 123, "expiresAt": "2026-12-31"}
```

### Activate a license key

```bash
GET https://yoursite.com/wp-json/lmfwc/v2/licenses/activate/{license_key}

Authorization: Basic {base64(key:secret)}
```

### Validate a license key

```bash
GET https://yoursite.com/wp-json/lmfwc/v2/licenses/validate/{license_key}

Authorization: Basic {base64(key:secret)}
```

## Key Fields

### License Object
- `licenseKey` - The actual license key string
- `status` - 1=Sold | 2=Delivered | 3=Active | 4=Inactive | 5=Expired
- `productId` - Associated WooCommerce product ID
- `orderId` - WooCommerce order ID
- `userId` - WordPress user ID of the licensee
- `expiresAt` - Expiration date (Y-m-d format)
- `timesActivated` - Number of activations used
- `timesActivatedMax` - Maximum allowed activations

### Generator Object
- `id` - Generator ID
- `name` - Generator name
- `charset` - Character set for key generation
- `chunks` - Number of character chunks
- `chunkLength` - Length of each chunk
- `separator` - Character used between chunks

## Parameters

- `per_page` - Results per page
- `page` - Pagination offset
- `status` - Filter by license status
- `productId` - Filter by product

## When to Use

- Generating and delivering license keys on WooCommerce product purchases
- Validating license keys in a customer portal or verification form
- Managing software activations and deactivations
- Tracking license expiry and sending renewal reminders

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- ecommerce
- affiliate-marketing
