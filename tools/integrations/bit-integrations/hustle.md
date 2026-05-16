# Hustle

Hustle is a WordPress popup and opt-in plugin by WPMU DEV for creating email opt-ins, social sharing popups, and slide-ins with module-based management. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Popups and Lead Capture
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Hustle.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add subscribers to Hustle modules |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to Hustle module subscriber fields |

## Action Events

- Add subscriber to module

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Hustle must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Hustle Email Module
**Trigger:** WordPress form submission
**Action:** Add the submitter to a Hustle email opt-in module subscriber list
**Use case:** Build Hustle email opt-in lists from form submissions across the site

### Recipe 2: WooCommerce Purchase to Hustle Campaign
**Trigger:** WooCommerce order completed
**Action:** Add the buyer to a Hustle post-purchase module
**Use case:** Enroll WooCommerce buyers in a Hustle-managed email or re-engagement module

### Recipe 3: User Registration to Hustle Onboarding Module
**Trigger:** WordPress user registration
**Action:** Add the new user to a Hustle onboarding or welcome module
**Use case:** Automatically subscribe new registrations to a Hustle-powered welcome sequence

## Setup Steps

1. Install Bit Integrations Pro and Hustle on your WordPress site.
2. Create the target Hustle module (email opt-in, slide-in, etc.).
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Hustle as the Action.
6. Select the target Hustle module.
7. Map form fields to subscriber fields (email, name).
8. Save and test.

## When to Use

- When WordPress form submissions or purchases should add subscribers to Hustle modules
- When managing email opt-in lists within Hustle populated automatically from WordPress events
- When building a WPMU DEV-centered marketing workflow that uses Hustle for lead capture management

## Related Integrations

- optinmonster.md
- popup-maker.md
- thrive-leads.md
- convert-pro.md
