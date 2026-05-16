# WP Simple Pay

WP Simple Pay is a WordPress plugin for creating Stripe-powered payment forms without a full shopping cart, suited for one-time payments, donations, subscriptions, and simple product sales.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wpsp/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Not available; uses Stripe SDK internally |

## Authentication

- **Type**: WordPress Application Password (for REST API) + Stripe API key (for payment processing)
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords; Stripe keys in WP Simple Pay > Settings > Stripe

## Common Agent Operations

### List payment forms
```
GET https://yoursite.com/wp-json/wpsp/v1/forms

Authorization: Basic {base64_credentials}
```

### Get form details
```
GET https://yoursite.com/wp-json/wpsp/v1/forms/{form_id}

Authorization: Basic {base64_credentials}
```

### List payment records
```
GET https://yoursite.com/wp-json/wpsp/v1/payments?per_page=50

Authorization: Basic {base64_credentials}
```

### Get a specific payment
```
GET https://yoursite.com/wp-json/wpsp/v1/payments/{payment_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Payment Form Object
- `id` - Form ID
- `title` - Form name
- `type` - `on-site`, `stripe-checkout`
- `status` - `publish`, `draft`
- `price_options` - Array of price amounts and recurrence settings

### Payment Object
- `id` - Payment ID
- `form_id` - Associated form ID
- `customer_email` - Payer email
- `customer_name` - Payer name
- `amount` - Payment amount in cents
- `currency` - ISO 4217 currency code
- `status` - `paid`, `pending`, `failed`, `refunded`
- `stripe_payment_intent_id` - Stripe payment intent ID
- `date` - Payment date (ISO 8601)

### Subscription Object
- `id` - Subscription ID
- `customer_email` - Subscriber email
- `stripe_subscription_id` - Stripe subscription ID
- `status` - `active`, `cancelled`, `past_due`
- `next_payment_date` - Next billing date

## Parameters

- `form_id` - Filter payments by form
- `status` - Filter by payment status
- `per_page` - Results per page
- `after` / `before` - Date range filter

## When to Use

- Querying payment records to sync with CRM or accounting tools
- Triggering post-payment workflows (course enrollment, email sequences, CRM updates)
- Building payment reporting dashboards for Stripe-based WordPress transactions
- Monitoring subscription status for renewal or churn management

## Rate Limits

- Subject to WordPress server limits; Stripe rate limits apply to underlying payment operations
- Stripe API: 100 read requests per second per secret key

## Relevant Skills

- marketing:email-sequence
- sales:forecast
- data:analyze
