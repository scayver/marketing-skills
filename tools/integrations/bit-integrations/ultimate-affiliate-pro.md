# Ultimate Affiliate Pro

Ultimate Affiliate Pro is a feature-rich WordPress affiliate plugin with multi-tier commissions, bonuses, and social sharing capabilities. Available as an Action (Pro) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No
**Category:** Affiliate Management
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/04/Ultimate-Affiliate-Pro-1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/04/Ultimate-Affiliate-Pro.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan |
| As Action | ✓ | Requires Pro plan |
| Free Tier | — | Both roles require Pro |
| Field Mapping | ✓ | Map fields to Ultimate Affiliate Pro affiliate data |

## Trigger Events

- Affiliate registered
- Commission earned or approved

## Action Events

- Register affiliate
- Update affiliate rank or commission rate

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Ultimate Affiliate Pro must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Affiliate Sign-Up Form to Ultimate Affiliate Pro
**Trigger:** WordPress affiliate sign-up form submission
**Action:** Register the applicant as an affiliate in Ultimate Affiliate Pro
**Use case:** Build a custom affiliate recruitment workflow with automated registration

### Recipe 2: Commission Earned to Slack or Email Alert
**Trigger:** Ultimate Affiliate Pro commission earned
**Action:** Send a Slack message or email with commission details
**Use case:** Keep affiliates or the internal team informed of commissions in real time

### Recipe 3: Affiliate Milestone to Rank Upgrade
**Trigger:** Affiliate referral count or commission threshold reached
**Action:** Update affiliate rank in Ultimate Affiliate Pro
**Use case:** Automate multi-tier affiliate rank promotions based on performance milestones

## Setup Steps

1. Install Bit Integrations Pro and Ultimate Affiliate Pro on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select Ultimate Affiliate Pro as the Trigger and choose the event.
4. For Action: Choose your trigger source, then select Ultimate Affiliate Pro as the Action.
5. Map fields.
6. Save and test.

## When to Use

- When using Ultimate Affiliate Pro's multi-tier commission features and needing automated workflows
- When affiliate events should trigger notifications, CRM updates, or rank changes automatically
- When building a sophisticated affiliate program with automated lifecycle management

## Related Integrations

- affiliatewp.md
- slicewp.md
- wc-affiliate.md
- fluentaffiliate.md
