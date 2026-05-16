# ACPT

ACPT (Advanced Custom Post Types) is a WordPress plugin for building and managing custom post types, taxonomies, and meta fields with a visual interface. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ACPT.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create posts and update meta fields for ACPT-managed post types |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to ACPT custom post type and meta field definitions |

## Action Events

- Create post (custom post type entry)
- Update meta field on an existing post

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and ACPT must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Submission Form to ACPT Directory Listing
**Trigger:** WordPress form submission
**Action:** Create a new ACPT custom post type entry (directory listing, profile, review, etc.)
**Use case:** Populate an ACPT-managed directory or database from user-submitted forms

### Recipe 2: User Registration to ACPT Profile Record
**Trigger:** WordPress user registration
**Action:** Create a linked ACPT post type record for the new user
**Use case:** Generate a custom user profile or portfolio entry automatically on registration

### Recipe 3: WooCommerce Purchase to ACPT Content Entry
**Trigger:** WooCommerce order completed
**Action:** Create or update an ACPT post type entry tied to the order or product
**Use case:** Automate content creation in ACPT-powered applications based on WooCommerce events

## Setup Steps

1. Install Bit Integrations and ACPT on your WordPress site.
2. In ACPT, define the target custom post type and meta field groups.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select ACPT as the Action.
6. Select the target custom post type and meta field group.
7. Map form fields to ACPT field definitions.
8. Save and test.

## When to Use

- When building custom post type applications with ACPT and needing form data to create or update records
- When ACPT-managed directories or databases should be populated from WordPress forms automatically
- When you prefer ACPT's visual post type builder over alternatives like ACF or Pods

## Related Integrations

- advanced-custom-fields.md
- jetengine.md
- pods.md
- post-creation.md
