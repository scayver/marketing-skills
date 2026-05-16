# OptinMonster

OptinMonster is a lead generation and conversion optimization platform for building popups, slide-ins, and opt-in forms with advanced targeting rules. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Popups and Lead Capture
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Optin-Monster.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add leads to OptinMonster campaigns |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to OptinMonster lead fields |

## Action Events

- Add lead to campaign

## Authentication

- **Type**: API Key
- **Required**: API key from your OptinMonster account. Enter in Bit Integrations along with the target campaign ID.

## Common Workflow Recipes

### Recipe 1: Form Submission to OptinMonster Lead Capture
**Trigger:** WordPress form submission
**Action:** Add the lead to an OptinMonster campaign for follow-up
**Use case:** Centralize leads from multiple WordPress forms into OptinMonster's lead management system

### Recipe 2: WooCommerce Browse Abandonment to OptinMonster
**Trigger:** WooCommerce or custom trigger event
**Action:** Add the user to an OptinMonster retargeting campaign
**Use case:** Target cart or browse abandoners with OptinMonster campaigns triggered by WooCommerce events

### Recipe 3: User Registration to OptinMonster Nurture Campaign
**Trigger:** WordPress user registration
**Action:** Add the new user to an OptinMonster onboarding or nurture campaign
**Use case:** Present new registrations with targeted OptinMonster popups or follow-up sequences

## Setup Steps

1. Install Bit Integrations Pro on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select OptinMonster as the Action.
5. Log in to OptinMonster and go to account settings to get your API key.
6. Enter the API key in Bit Integrations and select the target campaign.
7. Map form fields to OptinMonster lead fields.
8. Save and test.

## When to Use

- When WordPress form leads should be added to OptinMonster campaigns for targeted popup display
- When building a lead capture funnel that uses OptinMonster for behavioral targeting
- When centralizing lead management in OptinMonster from multiple WordPress form sources

## Related Integrations

- popup-maker.md
- hustle.md
- thrive-leads.md
- convert-pro.md
