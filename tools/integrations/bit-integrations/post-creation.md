# Post Creation

Post Creation is a native WordPress action in Bit Integrations that creates WordPress posts, pages, or custom post types from form or event data. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** WordPress Core and Utility
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Post-Creation.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create any WordPress post type from form or event data |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to post fields including custom meta and taxonomy terms |

## Action Events

- Create WordPress post, page, or custom post type

## Authentication

- **Type**: WordPress-native
- **Required**: No external account needed. Works with WordPress core post creation capabilities.

## Common Workflow Recipes

### Recipe 1: Submission Form to Published Post
**Trigger:** WordPress content submission form
**Action:** Create a new WordPress post (published or pending review) with the submitted title and content
**Use case:** Enable community members or contributors to submit content via a form that auto-creates posts in WordPress

### Recipe 2: Event Registration to Custom Post Type Entry
**Trigger:** Event registration form submission
**Action:** Create a custom post type record (e.g., "attendee" CPT) with the registrant's details
**Use case:** Build a WordPress-native attendee or applicant database from form submissions using custom post types

### Recipe 3: WooCommerce Order to Order Record CPT
**Trigger:** WooCommerce order completed
**Action:** Create a custom post type record representing the order for a custom CRM or tracking system
**Use case:** Build a custom WooCommerce order management view using a dedicated CPT populated by Bit Integrations

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Post Creation as the Action.
5. Select the target post type (post, page, or any registered custom post type).
6. Map fields: post_title, post_content, post_status, post_author, post_type, taxonomy terms, custom meta fields.
7. Save and test.

## When to Use

- When form submissions should create WordPress posts, pages, or CPT entries automatically
- When building a front-end content submission workflow that writes to WordPress without admin access
- When custom post types should be populated from form or WooCommerce events for custom dashboards or directories

## Related Integrations

- wp-post.md
- advanced-custom-fields.md
- jetengine.md
- pods.md
