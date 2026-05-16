# SEOPress

SEOPress is a comprehensive WordPress SEO plugin for managing meta titles, descriptions, sitemaps, and social tags. Available as an Action (Pro) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No
**Category:** SEO and Analytics
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/SEOPress.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/SEOPress-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires when posts are published or updated |
| As Action | ✓ | Requires Pro plan; update SEO metadata on posts |
| Free Tier | — | Both roles require Pro |
| Field Mapping | ✓ | Map fields to SEO title, description, and other metadata |

## Trigger Events

- Post published
- Post updated

## Action Events

- Update SEO metadata (title, meta description) on a post

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and SEOPress must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Content Submission Form to SEO Meta Update
**Trigger:** WordPress content submission form
**Action:** Update the SEOPress meta title and description on the created post
**Use case:** Allow content contributors to set SEO metadata via a form that automatically writes to SEOPress fields

### Recipe 2: Post Published to External SEO Notification
**Trigger:** SEOPress post published
**Action:** Send a notification to an SEO team Slack channel or create an Asana task for SEO review
**Use case:** Alert the SEO team automatically whenever new content is published for review and optimization

### Recipe 3: Bulk SEO Meta Update from Spreadsheet Form
**Trigger:** WordPress form submission with SEO fields
**Action:** Update SEOPress metadata on a target post
**Use case:** Enable admins to update post SEO metadata via a form without accessing the post editor

## Setup Steps

1. Install Bit Integrations Pro and SEOPress on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select SEOPress as the Trigger and choose the event (post published, post updated).
4. For Action: Choose your trigger source, then select SEOPress as the Action.
5. Map fields to SEO title and description.
6. Save and test.

## When to Use

- When form-based content workflows should automatically set or update SEOPress metadata
- When post publishing events should trigger SEO team notifications or review tasks
- When managing SEO metadata updates through Bit Integrations workflows rather than manual post editing

## Related Integrations

- post-creation.md
- wp-post.md
- advanced-custom-fields.md
- asana.md
