# Poptics

WordPress popup and lead generation plugin for building conversion-focused opt-in forms, notification bars, and targeted popup campaigns.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-native only |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP action/filter hooks |

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Poptics installed and active on the same WordPress site
- **Note**: No external API key required; plugin operates within WordPress

## Common Agent Operations

Poptics does not expose a standalone external REST API. Manage leads and campaigns via WordPress hooks or the admin interface.

### Hook: On lead captured

```php
add_action('poptics_lead_captured', function($lead_data, $campaign_id) {
    // $lead_data contains email, name, and custom fields
    // $campaign_id identifies the popup campaign
}, 10, 2);
```

### Hook: On popup displayed

```php
add_action('poptics_popup_shown', function($popup_id, $user_id) {
    // Fires when a popup is shown to a visitor
}, 10, 2);
```

### List campaigns (WordPress admin AJAX)

```bash
POST https://yoursite.com/wp-admin/admin-ajax.php

action=poptics_get_campaigns
nonce={wp_nonce}
```

## Key Fields

### Lead Object
- `email` - Lead email address
- `name` - Lead name
- `campaign_id` - Campaign the lead came from
- `captured_at` - Capture timestamp
- `source_url` - Page where popup was shown

## Parameters

- `campaign_id` - Target specific popup campaign
- `list_id` - Target specific lead list

## When to Use

- Building email opt-in campaigns with popup forms
- Capturing leads from exit-intent or timed popups
- Running notification bar campaigns for announcements or promotions
- Tracking popup performance and lead capture rates

## Rate Limits

- No external API; subject to WordPress server limits only

## Relevant Skills

- marketing:campaign-plan
- marketing:content-creation
- marketing:email-sequence
