# Action Hook

Action Hook is a trigger that fires a Bit Integrations workflow whenever a specified WordPress action hook is triggered anywhere on the site. Available as a Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger
**Free Tier:** No
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Action-Hook.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on any WordPress action hook |
| As Action | — | — |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map hook parameters to action inputs |

## Trigger Events

- Any WordPress action hook fired by WordPress core, themes, or plugins
- Custom action hooks defined in custom code or plugin logic

## Authentication

- **Type**: WordPress-native
- **Required**: Enter the action hook name (e.g., `save_post`, `woocommerce_order_status_changed`, or a custom hook) in Bit Integrations settings. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Custom Plugin Hook to External API
**Trigger:** A custom `do_action()` hook fired by a theme or plugin
**Action:** Send the hook's data to an external CRM, email platform, or webhook
**Use case:** Integrate any plugin that fires WordPress action hooks with external services, even without a native Bit Integrations connector

### Recipe 2: Post Save to Content Syndication
**Trigger:** `save_post` WordPress action hook
**Action:** Send post data to an external content platform or CDN via API
**Use case:** Syndicate WordPress content to external platforms automatically whenever a post is saved

### Recipe 3: WooCommerce Status Change to Notification
**Trigger:** `woocommerce_order_status_changed` hook
**Action:** Send a Slack or email notification with order details on status change
**Use case:** Get notified via Slack or email for specific WooCommerce order status transitions without a dedicated WooCommerce trigger

## Setup Steps

1. Install Bit Integrations Pro on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Action Hook as the Trigger.
4. Enter the WordPress action hook name to listen for.
5. Configure how hook parameters should be captured and mapped.
6. Set up the desired Action (webhook, email, CRM, etc.).
7. Map hook parameter fields to action inputs.
8. Save and activate.

## When to Use

- When a plugin or theme fires action hooks that should trigger external integrations
- When you need to integrate with WordPress events that don't have a dedicated Bit Integrations trigger
- When building custom automation logic tied to specific WordPress lifecycle events

## Related Integrations

- webhook-incoming.md
- webhook-outgoing.md
- custom-api.md
- post-creation.md
