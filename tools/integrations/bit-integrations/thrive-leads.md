# Thrive Leads

Thrive Leads is an opt-in and lead generation plugin by Thrive Themes for building high-converting opt-in forms, popups, and asset delivery systems. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Popups and Lead Capture
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Thrive-Leads.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add subscribers to Thrive Leads asset delivery |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to Thrive Leads subscriber fields |

## Action Events

- Add subscriber to asset delivery

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Thrive Leads must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: External Form to Thrive Leads Lead Magnet Delivery
**Trigger:** WordPress form submission (from a non-Thrive form plugin)
**Action:** Add the submitter to a Thrive Leads asset delivery to send a lead magnet
**Use case:** Deliver lead magnets (eBooks, checklists) via Thrive Leads even when the opt-in form is built in another plugin

### Recipe 2: WooCommerce Purchase to Free Resource Delivery
**Trigger:** WooCommerce order completed (free or low-cost product)
**Action:** Add the buyer to Thrive Leads asset delivery to send a bonus resource
**Use case:** Automatically deliver a bonus PDF or resource to buyers via Thrive Leads after purchase

### Recipe 3: Event Registration to Content Upgrade Delivery
**Trigger:** Event registration form submission
**Action:** Add the registrant to Thrive Leads asset delivery to send event materials
**Use case:** Automatically deliver pre-event materials or confirmations via Thrive Leads asset delivery

## Setup Steps

1. Install Bit Integrations Pro and Thrive Leads (Thrive Suite) on your WordPress site.
2. Create the target asset delivery group in Thrive Leads.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Thrive Leads as the Action.
6. Select the target asset delivery.
7. Map form fields to subscriber fields.
8. Save and test.

## When to Use

- When forms built in other plugins should trigger Thrive Leads asset delivery or lead magnet distribution
- When purchases or registrations should automatically deliver digital assets via Thrive Leads
- When you use Thrive Suite but want Bit Integrations form triggers to feed Thrive Leads workflows

## Related Integrations

- thrive-automator.md
- optinmonster.md
- convert-pro.md
- hustle.md
