# Calculated Fields Form

WordPress form builder plugin that creates forms with dynamically computed fields using mathematical formulas, conditional logic, and real-time calculations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-only plugin |
| MCP | - | Not available |
| CLI | - | WP-CLI can query submission database table |
| SDK | - | Not available |
| WordPress REST | ✓ | Standard WP REST API; custom endpoint via plugin hooks |

## Authentication

- **Type**: WordPress application password (for REST access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List forms (as WordPress posts)
```
GET /wp-json/wp/v2/posts?post_type=cp_calculatedfieldsf&per_page=100

Authorization: Basic {base64_credentials}
```

### Query submissions via WP-CLI
```bash
wp db query "SELECT form_id, date_time, fields FROM wp_cp_calculated_fields_form_submits ORDER BY date_time DESC LIMIT 50;"
```

### Hook into form submission (PHP)
```php
add_action('cp_calculated_fields_form_submit', function($form_id, $fields) {
    // $fields contains all submitted and calculated values
}, 10, 2);
```

### Get a specific form's configuration
```
GET /wp-json/wp/v2/posts/{form_post_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Submission Record
- `form_id` - WordPress post ID of the form
- `date_time` - Timestamp of submission
- `fields` - Serialized key/value pairs of field names and values, including computed results
- `ip_address` - Submitter IP address

### Form Post
- `ID` - WordPress post ID
- `post_title` - Human-readable form name
- `post_content` - Serialized configuration with field definitions and formulas

## Parameters

- `form_id` - Targets a specific form in hooks or database queries
- `fields` - Array of submitted values keyed by field name
- `calculated_value` - Output of a formula field (e.g., price estimate, total, score)

## When to Use

- Building quote calculators, pricing estimators, or ROI tools on WordPress
- Capturing formula outputs (loan payments, BMI, totals) alongside user inputs
- Triggering automations when a user submits a form with a computed result
- Logging calculator submissions with results for sales pipeline or reporting

## Rate Limits

- No external API; performance governed by WordPress server capacity

## Relevant Skills

- lead-generation
- content-strategy
