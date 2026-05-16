# AffiliateWP

AffiliateWP is the leading affiliate management plugin for WordPress, enabling full affiliate program management with referral tracking and payouts. Available as an Action (free) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes (Action free; Trigger requires Pro)
**Category:** Affiliate Management
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/AffiliateWP1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/AffiliateWP1-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on affiliate and referral events |
| As Action | ✓ | Free; register affiliates and manage referrals |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map form fields to affiliate and referral fields |

## Trigger Events

- Affiliate registered
- Referral created
- Referral approved

## Action Events

- Register affiliate
- Add referral
- Approve affiliate

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and AffiliateWP must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Affiliate Registration Form to AffiliateWP
**Trigger:** WordPress affiliate application form submission
**Action:** Register the applicant as an affiliate in AffiliateWP
**Use case:** Build a custom affiliate application experience and automatically create affiliate accounts on approval

### Recipe 2: New Affiliate to Welcome Email and CRM
**Trigger:** AffiliateWP affiliate registered
**Action:** Add new affiliate to an email marketing list and create a CRM contact
**Use case:** Welcome new affiliates automatically and add them to onboarding sequences

### Recipe 3: Referral Approved to Slack Notification
**Trigger:** AffiliateWP referral approved
**Action:** Send a Slack notification to the sales channel with referral details
**Use case:** Alert the team when affiliate referrals are approved for review or processing

## Setup Steps

1. Install Bit Integrations and AffiliateWP on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select AffiliateWP as the Trigger and choose the event (affiliate registered, referral created, etc.).
4. For Action: Choose your trigger source, then select AffiliateWP as the Action.
5. Select the action event (register affiliate, add referral, etc.).
6. Map fields.
7. Save and test.

## When to Use

- When automating affiliate onboarding from application forms into AffiliateWP
- When affiliate or referral events should trigger notifications, CRM updates, or email sequences
- When building a fully automated affiliate program workflow in WordPress

## Related Integrations

- slicewp.md
- solid-affiliate.md
- mailchimp.md
- slack.md
