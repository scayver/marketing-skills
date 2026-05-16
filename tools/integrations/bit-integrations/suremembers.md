# SureMembers

SureMembers is a lightweight WordPress membership plugin by the SureTriggers team, designed for fast setup and access control with group-based content restriction. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** Membership and Access Control
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/SureMembers-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/SureMembers.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires when member access is granted or revoked |
| As Action | ✓ | Grant or revoke group access |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Member access granted — fires when a user is granted access to a SureMembers group
- Member access revoked — fires when a user's access to a SureMembers group is revoked

## Action Events

- Grant group access — give a WordPress user access to a SureMembers group
- Revoke access — remove a user's access from a SureMembers group

## Authentication

- **Type**: WordPress plugin-native
- **Required**: SureMembers must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add contact to email list on access granted
**Trigger:** SureMembers — Member access granted
**Action:** Mailchimp / ConvertKit — Add subscriber or tag
**Key fields mapped:** User email, group name, access date
**Use case:** Automatically add new members to the correct email list or segment when they gain access

### Recipe 2: Grant SureMembers access on WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** SureMembers — Grant group access
**Key fields mapped:** Customer email, product linked to group
**Use case:** Unlock SureMembers-protected content automatically when a WooCommerce product is purchased

### Recipe 3: Revoke access and update CRM on access removed
**Trigger:** SureMembers — Member access revoked
**Action:** HubSpot — Update contact or remove tag
**Key fields mapped:** User email, group name, revocation date
**Use case:** Keep your CRM in sync when members lose access, enabling churn tracking or win-back flows

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select SureMembers as the trigger or action.
4. For triggers, choose the event (e.g., Member Access Granted) and select the group.
5. For actions, choose Grant Group Access or Revoke Access and select the target group.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (grant or revoke access for a test user).

## When to Use

- You use SureMembers for content gating and want to sync access events with your email platform
- You sell access via WooCommerce and deliver it through SureMembers groups
- You need to revoke access programmatically and update connected tools at the same time
- You want a lightweight membership access system integrated into a broader automation stack

## Related Integrations

- memberpress.md
- restrict-content.md
- paid-memberships-pro.md
- woocommerce.md
- wishlist-member.md
