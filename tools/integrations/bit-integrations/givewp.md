# GiveWP

GiveWP is the leading WordPress donation plugin for nonprofits and fundraising campaigns with payment gateway integration and donor management. Available as an Action (free) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes (Action free; Trigger requires Pro)
**Category:** Gamification and Loyalty
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/GiveWp1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/GiveWp1-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on donation events |
| As Action | ✓ | Free; create donors |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map donor and donation data fields |

## Trigger Events

- Donation completed
- Recurring donation created

## Action Events

- Create donor

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and GiveWP must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Donation Completed to Email Marketing List
**Trigger:** GiveWP donation completed
**Action:** Add the donor to an email marketing list with a donor tag
**Use case:** Automatically grow a donor email list and segment donors for targeted follow-up communications

### Recipe 2: Donation to CRM Contact
**Trigger:** GiveWP donation completed
**Action:** Create or update a CRM contact with donor name, email, and donation amount
**Use case:** Keep CRM donor records synchronized with GiveWP donation activity automatically

### Recipe 3: Recurring Donation to Thank-You Campaign
**Trigger:** GiveWP recurring donation created
**Action:** Add the recurring donor to a special thank-you email sequence
**Use case:** Recognize and nurture recurring donors with automated thank-you and stewardship campaigns

## Setup Steps

1. Install Bit Integrations and GiveWP on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select GiveWP as the Trigger and choose the event (donation completed, recurring created).
4. For Action: Choose your trigger source, then select GiveWP as the Action (create donor).
5. Map fields.
6. Save and test.

## When to Use

- When GiveWP donations should trigger email marketing, CRM, or notification workflows
- When new donors should be added to email lists or CRM records automatically
- When recurring donors need to be recognized with special automated sequences

## Related Integrations

- mailchimp.md
- activecampaign.md
- gamipress.md
- google-sheets.md
