# Bit Social

Bit Social is a social media auto-poster plugin by Bit Apps that automatically publishes content to connected social media accounts from WordPress. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Communication and Messaging
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Bit-Social.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Publish posts to connected social media accounts via Bit Social |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form or event fields to post content, image URL, schedule time, and target profiles |

## Action Events

- Publish post to connected social accounts (Facebook, Twitter/X, LinkedIn, Instagram, etc.)

## Authentication

- **Type**: WordPress plugin-native + connected social platform accounts
- **Required**: Bit Social must be installed and active on the same WordPress site. Social accounts (Facebook, Twitter/X, LinkedIn, Instagram, etc.) must be connected in Bit Social settings. No additional API keys needed in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: New Post Published to Social Media
**Trigger:** WordPress post published event (via Post Creation or WP Post action)
**Action:** Bit Social publishes the post to all connected social accounts simultaneously
**Use case:** Automatically share every new WordPress blog post to Facebook, LinkedIn, Twitter/X, and Instagram without manual posting

### Recipe 2: WooCommerce Product Added to Social Promotion
**Trigger:** WooCommerce product published
**Action:** Bit Social shares the product announcement across social channels
**Use case:** Automatically promote new product launches on social media the moment they go live in WooCommerce

### Recipe 3: Event Registration Milestone to Social Share
**Trigger:** Specific form submission count or milestone event
**Action:** Bit Social posts a social media announcement of the milestone
**Use case:** Automatically celebrate and announce community milestones (e.g., 100 sign-ups) on social media

## Setup Steps

1. Install both Bit Integrations and Bit Social on your WordPress site.
2. In Bit Social, connect your social accounts (Facebook, Twitter/X, LinkedIn, Instagram, etc.).
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Bit Social as the Action.
6. Select the target social profiles and configure post content.
7. Map fields: post content, image URL, schedule time, target profiles.
8. Save and test.

## When to Use

- When WordPress content or WooCommerce product publishing should automatically post to social media
- When social media sharing needs to be automated without external tools like Buffer or Hootsuite
- When keeping all social automation within the WordPress ecosystem using Bit Apps tools

## Related Integrations

- post-creation.md
- wp-post.md
- zapier.md
- make.md
