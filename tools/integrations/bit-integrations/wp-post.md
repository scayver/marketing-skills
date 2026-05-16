# WP Post

WP Post is an extended WordPress post management action in Bit Integrations that provides additional control over creating, updating, deleting, and managing post meta beyond the standard Post Creation action. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** WordPress Core and Utility
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WPPost.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create, update, delete posts and custom meta |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to post fields and custom meta keys |

## Action Events

- Create post
- Update post
- Delete post
- Update custom meta field

## Authentication

- **Type**: WordPress-native
- **Required**: No external account needed. Operates on WordPress core post and meta management.

## Common Workflow Recipes

### Recipe 1: Edit Form to Post Update
**Trigger:** WordPress front-end edit form submission
**Action:** Update an existing WordPress post with the submitted field values
**Use case:** Enable front-end post editing via a form that updates the post and its custom meta without accessing the WordPress backend

### Recipe 2: Approval Form to Post Status Change
**Trigger:** WordPress admin approval form submission
**Action:** Update a post's status from "pending" to "published" via WP Post action
**Use case:** Build a custom content moderation workflow where approvers use a form to publish pending posts

### Recipe 3: Cleanup Automation to Post Deletion
**Trigger:** Date-based trigger or form submission
**Action:** Delete a specific post based on a condition (expired listing, completed campaign)
**Use case:** Automate removal of time-sensitive posts (job listings, event posts) after their expiration

## Setup Steps

1. Install Bit Integrations Pro on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select WP Post as the Action.
5. Select the action event (create, update, delete, or update meta).
6. For update/delete: configure how the target post is identified (by ID, title, or meta value).
7. Map fields to post title, content, status, and custom meta keys.
8. Save and test.

## When to Use

- When form submissions should update or delete existing WordPress posts
- When building front-end post management interfaces that write to WordPress core post tables
- When automated workflows need full CRUD control over WordPress posts and custom meta

## Related Integrations

- post-creation.md
- advanced-custom-fields.md
- seopress.md
- action-hook.md
