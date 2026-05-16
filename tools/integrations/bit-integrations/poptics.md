# Poptics

Poptics is a WordPress popup and lead generation plugin for building conversion-focused opt-in forms and notification bars. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Popups and Lead Capture
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Poptics.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add leads to Poptics campaigns |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to Poptics lead fields |

## Action Events

- Add lead

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Poptics must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Poptics Lead List
**Trigger:** WordPress form submission
**Action:** Add the submitter as a lead in Poptics
**Use case:** Centralize lead capture from multiple form sources into Poptics for management and follow-up

### Recipe 2: User Registration to Poptics Campaign
**Trigger:** WordPress user registration
**Action:** Add the new user to a Poptics lead campaign
**Use case:** Track new registrations as leads in Poptics alongside other opt-in sources

### Recipe 3: Webinar Registration to Poptics List
**Trigger:** Webinar or event registration form submission
**Action:** Add the registrant to a Poptics lead list for post-event follow-up campaigns
**Use case:** Build a Poptics lead database from event registrants for retargeting and nurture

## Setup Steps

1. Install Bit Integrations Pro and Poptics on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Poptics as the Action.
5. Select the target Poptics campaign or list.
6. Map form fields to lead fields.
7. Save and test.

## When to Use

- When consolidating leads from WordPress form plugins into Poptics for campaign management
- When WordPress events should add contacts to Poptics lead lists
- When building a Poptics-centered lead generation strategy supplemented by Bit Integrations form triggers

## Related Integrations

- optinmonster.md
- popup-maker.md
- hustle.md
- thrive-leads.md
