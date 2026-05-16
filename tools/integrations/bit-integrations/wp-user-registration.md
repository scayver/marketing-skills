# WP User Registration

WP User Registration is a WordPress plugin for creating front-end user registration and login forms with drag-and-drop form building and role management. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-User-Registration.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Register user, assign role |
| Free Tier | ✓ | Free |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Register user — create a new WordPress user via WP User Registration
- Assign role — set a specific WordPress user role for the registered user

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WP User Registration must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Register user after WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** WP User Registration — Register user + Assign role
**Key fields mapped:** Customer email, first name, last name, role tied to product
**Use case:** Automatically create a WordPress account with the correct role when a new customer completes a purchase

### Recipe 2: Register user from external form submission
**Trigger:** Contact Form 7 / Gravity Forms — Form submitted
**Action:** WP User Registration — Register user
**Key fields mapped:** Email, first name, last name
**Use case:** Turn a contact or lead form submission into a registered WordPress user

### Recipe 3: Assign role after membership activation
**Trigger:** MemberPress / Restrict Content — Membership activated
**Action:** WP User Registration — Assign role
**Key fields mapped:** User email, role tied to membership level
**Use case:** Upgrade a user's WordPress role when they activate a paid membership

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select WP User Registration as the action.
4. Choose Register User or Assign Role.
5. Map the user email, name, and other fields from your trigger source.
6. Select the WordPress role to assign.
7. Save and test with a real event (complete a test purchase or submit a test form).

## When to Use

- You want to create WordPress user accounts automatically from purchases or form submissions
- You need a free action integration for user registration without upgrading to Pro
- You want to assign WordPress roles programmatically from membership or e-commerce triggers
- You use WP User Registration's form builder and want to trigger registrations from external sources

## Related Integrations

- user-registration.md
- user-registration-membership.md
- profile-builder.md
- memberpress.md
- woocommerce.md
