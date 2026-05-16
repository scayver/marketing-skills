# Convert Pro

Convert Pro is an opt-in and popup plugin for WordPress with advanced targeting, A/B testing, and deep integrations with email marketing services. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Popups and Lead Capture
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Convert-Pro.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add subscribers to Convert Pro |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to Convert Pro subscriber fields |

## Action Events

- Add subscriber

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Convert Pro must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: External Form to Convert Pro Subscriber List
**Trigger:** WordPress form submission (from a non-Convert Pro form)
**Action:** Add the submitter as a Convert Pro subscriber
**Use case:** Feed subscribers from any WordPress form into Convert Pro's list management for centralized opt-in tracking

### Recipe 2: WooCommerce Order to Convert Pro List
**Trigger:** WooCommerce order completed
**Action:** Add the buyer to a Convert Pro subscriber list
**Use case:** Build a buyer subscriber list in Convert Pro for post-purchase retargeting or email campaigns

### Recipe 3: Registration to Convert Pro Subscriber
**Trigger:** WordPress user registration
**Action:** Add the new user as a Convert Pro subscriber
**Use case:** Capture all new WordPress registrations as Convert Pro subscribers for targeted popup campaigns

## Setup Steps

1. Install Bit Integrations Pro and Convert Pro on your WordPress site.
2. Configure Convert Pro lists or module connections.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Convert Pro as the Action.
6. Select the target module or list.
7. Map form fields to subscriber fields (email, name).
8. Save and test.

## When to Use

- When WordPress form events should add contacts to Convert Pro's subscriber management
- When building a Convert Pro-centered lead capture strategy with Bit Integrations form triggers as supplemental sources
- When WooCommerce buyers or registrations should automatically be added to Convert Pro subscriber lists

## Related Integrations

- optinmonster.md
- thrive-leads.md
- hustle.md
- popup-maker.md
