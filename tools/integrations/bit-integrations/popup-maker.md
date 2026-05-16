# Popup Maker

Popup Maker is a flexible WordPress popup plugin for creating targeted popups, slide-ins, and overlays for lead capture and announcements. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Popups and Lead Capture
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/PopupMaker.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; trigger popup display via Popup Maker |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map event data to popup display conditions |

## Action Events

- Trigger popup display

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Popup Maker must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Thank-You Popup
**Trigger:** WordPress form submission
**Action:** Trigger a Popup Maker thank-you or confirmation popup for the user
**Use case:** Show a personalized thank-you popup immediately after a form is submitted

### Recipe 2: Login to Welcome Back Popup
**Trigger:** WordPress user login
**Action:** Display a Popup Maker welcome back popup with personalized content
**Use case:** Greet returning members with a targeted popup showing new content or offers

### Recipe 3: Purchase to Upsell Popup
**Trigger:** WooCommerce order completed
**Action:** Display a Popup Maker upsell or cross-sell popup to the buyer
**Use case:** Show a post-purchase offer popup to increase average order value

## Setup Steps

1. Install Bit Integrations Pro and Popup Maker on your WordPress site.
2. Create the target popup in Popup Maker.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Popup Maker as the Action.
6. Select the popup to display.
7. Configure trigger conditions.
8. Save and test.

## When to Use

- When WordPress events (form submission, purchase, login) should trigger targeted Popup Maker overlays
- When building conditional popup display logic tied to user actions on the site
- When thank-you, upsell, or announcement popups should be triggered by Bit Integrations workflows

## Related Integrations

- optinmonster.md
- hustle.md
- thrive-leads.md
- convert-pro.md
