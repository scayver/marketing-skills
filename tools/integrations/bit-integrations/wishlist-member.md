# Wishlist Member

Wishlist Member is a WordPress membership plugin for creating protected membership sites with level-based content access and payment integration. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No — both Trigger and Action require Pro
**Category:** Membership and Access Control
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/WishList-Member-3.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/WishList-Member-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires when a member is added to or removed from a level |
| As Action | ✓ | Add or remove member from a level |
| Free Tier | — | Requires Pro for both Trigger and Action |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Member added to level — fires when a user is added to a Wishlist Member membership level
- Member removed from level — fires when a user is removed from a Wishlist Member level

## Action Events

- Add member to level — assign a WordPress user to a Wishlist Member membership level
- Remove from level — remove a user from a Wishlist Member level

## Authentication

- **Type**: API key from Wishlist Member settings
- **Required**: Wishlist Member API key, found in Wishlist Member > Settings > API; enter it in Bit Integrations when configuring the connection
- **Note**: Wishlist Member must be installed and active on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Sync new members to email platform on level assignment
**Trigger:** Wishlist Member — Member added to level
**Action:** Mailchimp / ActiveCampaign — Add to list or tag
**Key fields mapped:** User email, membership level, date added
**Use case:** Automatically add new Wishlist Member members to the correct email list or segment

### Recipe 2: Add member to level on WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** Wishlist Member — Add member to level
**Key fields mapped:** Customer email, product linked to membership level
**Use case:** Grant Wishlist Member access when a WooCommerce product is purchased

### Recipe 3: Remove level and update CRM on member removal
**Trigger:** Wishlist Member — Member removed from level
**Action:** HubSpot / Zoho CRM — Update contact or remove tag
**Key fields mapped:** User email, level name, removal date
**Use case:** Keep CRM records accurate when members leave or are removed from a membership level

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. In Wishlist Member, go to Settings > API and copy your API key.
3. Go to Bit Integrations > Create Integration.
4. Select Wishlist Member as the trigger or action.
5. Enter the Wishlist Member API key when prompted by Bit Integrations.
6. For triggers, choose the event (e.g., Member Added to Level) and select the level.
7. For actions, choose Add Member to Level or Remove from Level and select the target level.
8. Map the relevant fields to the connected platform.
9. Save and test with a real event (add or remove a test member from a level).

## When to Use

- You use Wishlist Member for membership access and want to sync level changes with your email platform or CRM
- You sell Wishlist Member access via WooCommerce and want enrollment automated
- You need to trigger email automations when members are added to or removed from levels
- You want to integrate Wishlist Member into a broader multi-tool automation stack

## Related Integrations

- memberpress.md
- restrict-content.md
- paid-memberships-pro.md
- suremembers.md
- woocommerce.md
