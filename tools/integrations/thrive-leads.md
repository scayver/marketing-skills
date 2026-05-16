# Thrive Leads

Thrive Leads is a WordPress opt-in and lead generation plugin by Thrive Themes for building high-converting popups, sticky ribbons, in-content forms, and two-step opt-ins.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; operates via WordPress hooks |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK |

## Authentication

- **Type**: WordPress Application Password (for WP REST API access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

Thrive Leads does not expose a public REST API. Data access is via WordPress hooks, native email service connections, or the Thrive Dashboard reporting UI.

### Hook into Form Submission
```php
// Runs when a Thrive Leads form is submitted
add_action( 'thrive_leads_form_submit', function( $data ) {
  $email   = sanitize_email( $data['email'] );
  $form_id = intval( $data['form_id'] );
  // Route lead to CRM or trigger downstream logic
}, 10, 1 );
```

### Hook into Lead Group Opt-in
```php
add_action( 'thrive_leads_opt_in', function( $post_id, $form_type, $connection, $data ) {
  // $data contains submitted field values
  // $connection is the configured email service ID
}, 10, 4 );
```

### Read Lead Groups (WP Post Query)
```php
$lead_groups = get_posts([
  'post_type'   => 'tl_lead_group',
  'post_status' => 'publish',
  'numberposts' => -1,
]);
```

## Key Fields

### Lead Group (WordPress CPT `tl_lead_group`)
- `ID` - WordPress post ID
- `post_title` - Lead group name
- `meta.tl_connection` - Connected email service configuration

### Submitted Lead Data
- `email` - Subscriber email
- `name` - Subscriber name (if collected)
- `form_id` - Originating form ID
- `lead_group_id` - Parent lead group

## Parameters

- Form behavior (triggers, targeting, A/B test variants) configured in Thrive Leads admin UI
- Programmatic access requires custom WordPress hooks

## When to Use

- Routing Thrive Leads opt-ins to a CRM not natively supported
- Triggering custom onboarding sequences on opt-in
- Logging lead source and form ID to a reporting database
- A/B testing opt-in copy and syncing winners to analytics

## Rate Limits

- No platform-level rate limits; constrained by WordPress server performance

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- data:analyze
- operations:process-doc
