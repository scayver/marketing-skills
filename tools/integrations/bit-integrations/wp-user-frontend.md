# WP User Frontend

WP User Frontend is a WordPress plugin that allows users to submit posts, manage profiles, and register from the front end without accessing the WordPress admin. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-User-Frontend.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create post, create user |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Create post — publish or draft a WordPress post via WP User Frontend
- Create user — register a new WordPress user via WP User Frontend

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WP User Frontend must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Create user account from external form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** WP User Frontend — Create user
**Key fields mapped:** Email, username, first name, last name
**Use case:** Automatically create a WordPress account from a front-end form without using native WP registration

### Recipe 2: Create post from CRM contact data
**Trigger:** HubSpot / Zoho CRM — New contact or deal created
**Action:** WP User Frontend — Create post
**Key fields mapped:** Title, content, post type, category
**Use case:** Publish WordPress content automatically when CRM events occur (e.g., create a case study post when a deal is won)

### Recipe 3: Create user after WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** WP User Frontend — Create user
**Key fields mapped:** Customer email, first name, last name
**Use case:** Register a WordPress user account for first-time buyers without requiring them to register manually

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select WP User Frontend as the action.
4. Choose Create Post or Create User.
5. For Create User: map email, username, and name fields from your trigger source.
6. For Create Post: map title, content, and category fields.
7. Save and test with a real event (submit a test form or complete a test purchase).

## When to Use

- You want to create WordPress user accounts automatically from external triggers
- You need to publish WordPress posts programmatically from CRM or form data
- You use WP User Frontend for front-end content management and want to integrate it into automation flows
- You want to onboard users with WordPress accounts as part of a broader checkout or form workflow

## Related Integrations

- user-registration.md
- wp-user-registration.md
- profile-builder.md
- woocommerce.md
