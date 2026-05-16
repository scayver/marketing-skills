# Advanced Custom Fields

Advanced Custom Fields (ACF) is the most widely used WordPress plugin for adding custom field groups to posts, pages, users, and other content types. Available as an Action (free and Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes (basic); Pro features require Bit Integrations Pro
**Category:** Project Management and Productivity
**Icon (free):** `https://bit-integrations.com/wp-content/uploads/2026/02/Advanced_Custom_Fields1.svg`
**Icon (pro):** `https://bit-integrations.com/wp-content/uploads/2026/02/Advanced-Custom-Fields.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Update custom field values on posts or users |
| Free Tier | ✓ | Basic ACF field updates; advanced field types may require Pro |
| Field Mapping | ✓ | Map form fields to ACF field keys or field names |

## Action Events

- Update custom field value on a post
- Update custom field value on a user

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and Advanced Custom Fields (free or Pro) must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Profile Form to ACF User Meta Fields
**Trigger:** WordPress profile update form submission
**Action:** Update ACF custom fields on the user profile (bio, company, phone, etc.)
**Use case:** Allow users to update their ACF profile fields via a front-end form without WordPress admin access

### Recipe 2: Post Submission Form to ACF Post Meta
**Trigger:** Front-end content submission form
**Action:** Create or update ACF fields on a post (reviews, ratings, specifications, etc.)
**Use case:** Populate ACF-powered post data from user-submitted forms without backend access

### Recipe 3: WooCommerce Order to Product ACF Field Update
**Trigger:** WooCommerce order completed
**Action:** Update an ACF field on the purchased product (e.g., stock notes, buyer count)
**Use case:** Log purchase-related data in ACF product fields automatically on each sale

## Setup Steps

1. Install Bit Integrations and Advanced Custom Fields on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Advanced Custom Fields as the Action.
5. Select the target post type or user and the specific ACF field group.
6. Map form fields to ACF field keys or names.
7. Save and test.

## When to Use

- When form submissions should populate or update ACF custom fields on posts or users
- When building front-end editing experiences that write to ACF-managed content
- When WooCommerce or LMS events should update metadata stored in ACF fields

## Related Integrations

- post-creation.md
- wp-post.md
- jetengine.md
- pods.md
