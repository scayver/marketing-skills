# Paid Memberships Pro

Paid Memberships Pro is a flexible open-source WordPress membership plugin with support for multiple membership levels, recurring payments, and content restriction. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** Membership and Access Control
**Icon:** Action: `https://bitapps.pro/wp-content/uploads/2023/07/paid-memberships-pro.png` — Trigger: `https://bitapps.pro/wp-content/uploads/2023/07/paid-memberships-pro-1.png`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on checkout completion, expiry, and cancellation events |
| As Action | ✓ | Add member or change membership level |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Membership checkout completed — fires when a member completes checkout for a membership
- Membership expired — fires when a membership expires
- Membership cancelled — fires when a member cancels their subscription

## Action Events

- Add member — create or assign a membership to a WordPress user
- Change level — change a user's current Paid Memberships Pro membership level

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Paid Memberships Pro must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add new member to CRM on checkout
**Trigger:** Paid Memberships Pro — Membership checkout completed
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** User email, first name, last name, membership level, checkout date
**Use case:** Automatically create or update CRM contacts when a new member joins

### Recipe 2: Change level and sync email tag after upgrade
**Trigger:** Paid Memberships Pro — Membership checkout completed (on a higher-tier level)
**Action:** Paid Memberships Pro — Change level AND ActiveCampaign — Update tag
**Key fields mapped:** User email, new membership level
**Use case:** Upgrade a member to a new level and simultaneously update their email platform segment

### Recipe 3: Start win-back automation on membership expiry
**Trigger:** Paid Memberships Pro — Membership expired
**Action:** ConvertKit / Mailchimp — Add to automation
**Key fields mapped:** User email, expired membership level, expiry date
**Use case:** Trigger a re-engagement or renewal campaign when memberships lapse

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Paid Memberships Pro as the trigger or action.
4. For triggers, choose the event (e.g., Membership Checkout Completed) and select the membership level.
5. For actions, choose Add Member or Change Level and configure the target level.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (complete a test checkout or expire a test membership).

## When to Use

- You want to push new member data into your CRM or email platform automatically on checkout
- You need to trigger email automations when memberships expire or are cancelled
- You want to change or upgrade membership levels programmatically from external triggers
- You need to sync Paid Memberships Pro data with LMS plugins for course access

## Related Integrations

- memberpress.md
- restrict-content.md
- learndash.md
- lifterlms.md
- woocommerce.md
