# Popup Maker

Flexible WordPress popup plugin for creating targeted popups, slide-ins, and overlays for lead capture, announcements, and conversion optimization.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-native only |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP action/filter hooks |

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Popup Maker installed and active on the same WordPress site
- **Note**: No external credentials; plugin is fully self-contained

## Common Agent Operations

Popup Maker does not expose a standalone external API. Manage popups via WordPress hooks and JavaScript triggers.

### Hook: On popup open

```php
add_action('pum_popup_open', function($popup_id) {
    // Fires when a popup is opened for a user
});
```

### Hook: On popup close

```php
add_action('pum_popup_close', function($popup_id) {
    // Fires when a popup is closed
});
```

### JavaScript: Open a popup programmatically

```javascript
PUM.open(popup_id);
```

### Hook: On form submission inside popup

```php
add_action('pum_sub_form_success', function($data) {
    // $data contains subscriber email and name
    // Fires when the built-in subscribe form is submitted
});
```

## Key Fields

### Popup Object
- `ID` - WordPress post ID of the popup
- `post_title` - Popup name
- `popup_settings` - Array of display conditions and triggers
- `popup_theme` - Associated theme ID

### Subscriber Data (built-in form)
- `email` - Subscriber email
- `fname` - First name
- `lname` - Last name
- `popup_id` - Popup that captured the subscriber

## Parameters

- `popup_id` - Target a specific popup by WordPress post ID
- `trigger` - Display trigger (click, time delay, scroll, exit intent)

## When to Use

- Displaying targeted popups based on user behavior (scroll depth, exit intent, time on page)
- Capturing email subscribers with popup opt-in forms
- Showing announcements, promotions, or cookie consent overlays
- Triggering popups programmatically from WordPress events via JavaScript

## Rate Limits

- No external API; subject to WordPress server limits only

## Relevant Skills

- marketing:campaign-plan
- marketing:draft-content
- marketing:email-sequence
