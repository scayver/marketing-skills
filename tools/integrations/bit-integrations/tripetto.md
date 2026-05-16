# Tripetto

Tripetto is a WordPress form builder supporting classic and conversational (chat-like) form layouts, suitable for surveys, quizzes, and multi-step guided forms.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; operates via WordPress hooks and native connections |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | ✓ | Tripetto JavaScript SDK for embedding forms in custom apps |

## Authentication

- **Type**: WordPress Application Password (for WP REST API access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

Tripetto does not expose a plugin-specific REST API. Submissions are handled via WordPress hooks or Tripetto's native service connections (EmailOctopus, Mailchimp, Slack, webhooks).

### Hook into Form Submission (PHP)
```php
// Fires when any Tripetto form is submitted
add_action( 'tripetto_runner_submit', function( $instance, $fields, $entry ) {
  foreach ( $fields as $field ) {
    $key   = $field['alias'] ?? $field['name'];
    $value = $field['value'];
    // Route $key => $value to external system
  }
}, 10, 3 );
```

### Configure a Webhook Connection (via Tripetto admin UI)
Tripetto supports native webhook output — configure in the form editor under Connections > Webhook. The payload is a JSON object with all field values.

### Embed Form via JavaScript SDK
```js
import { TripettoRunner } from "@tripetto/runner";

TripettoRunner.run({
  element: document.getElementById("form-container"),
  form: { /* exported form definition JSON */ },
  onSubmit: (instance) => {
    const fields = TripettoRunner.fields(instance);
    // fields is an array of {name, alias, value} objects
  },
});
```

## Key Fields

### Submission Entry
- `alias` / `name` - Field identifier
- `value` - Submitted field value
- `type` - Field type (text, email, number, choice, etc.)

### Webhook Payload
- `fields` - Array of field objects with name and value
- `form_id` - Originating form identifier
- `timestamp` - ISO 8601 submission time

## Parameters

- Form behavior configured in Tripetto's visual form editor
- Native connections (Mailchimp, EmailOctopus, Slack, Webhook) set up in-editor

## When to Use

- Collecting conversational survey responses with branching logic
- Routing multi-step form submissions to email lists or CRMs
- Embedding custom-branded forms in headless or custom app contexts
- Capturing quiz results and sending personalized follow-ups

## Rate Limits

- No platform-level rate limits; constrained by WordPress server performance

## Relevant Skills

- marketing:draft-content
- data:explore-data
- marketing:email-sequence
- product-management:synthesize-research
