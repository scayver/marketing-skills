# GiveWP

Leading WordPress donation plugin for nonprofits and fundraising campaigns with payment gateway integration and donor management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via GiveWP endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: API Key + Token (query parameters) or Application Password
- **Header**: `Authorization: Basic base64(username:app_password)` or query params
- **Get token**: GiveWP Settings > API > Generate API Key

## Common Agent Operations

### List donors
```bash
GET https://yoursite.com/wp-json/give-api/v2/donors?key={api_key}&token={token}
```

### Get single donor
```bash
GET https://yoursite.com/wp-json/give-api/v2/donors/{id}?key={api_key}&token={token}
```

### List donations
```bash
GET https://yoursite.com/wp-json/give-api/v2/donations?key={api_key}&token={token}&number=50
```

### List donation forms
```bash
GET https://yoursite.com/wp-json/give-api/v2/forms?key={api_key}&token={token}
```

### Hook on donation completion (PHP)
```php
add_action('give_complete_purchase', function($payment_id, $payment_data) {
    $donor_email = $payment_data['user_email'];
    $amount      = $payment_data['price'];
    // Sync to CRM or email platform
}, 10, 2);
```

## Key Fields

### Donor
- `id` - Donor ID
- `name` - Full name
- `email` - Email address
- `total_donations` - Lifetime donation count
- `total_donated` - Total amount donated
- `user_id` - WordPress user ID (if registered)

### Donation
- `id` - Donation/payment ID
- `form_id` - Source donation form
- `donor_id` - Linked donor
- `amount` - Donation amount
- `currency` - Currency code
- `status` - publish (complete), pending, refunded
- `date` - Donation date

### Donation Form
- `id` - Form post ID
- `title` - Form name
- `goal` - Fundraising goal amount
- `total_income` - Amount raised

## Parameters

- `key` / `token` - API authentication params
- `number` - Results per request (default 10)
- `page` - Pagination
- `form` - Filter donations by form ID

## When to Use

- Add donors to email marketing lists after donating
- Send automated thank-you sequences post-donation
- Pull donation data for grant reporting
- Segment donors by giving level for targeted campaigns

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- marketing:email-sequence
- finance:financial-statements
- operations:status-report
