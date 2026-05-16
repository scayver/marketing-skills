# WP Fusion

WP Fusion is a WordPress plugin that connects your site to over 100 CRMs and marketing platforms, acting as a universal integration layer for tags, contact data, and access control. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Fusion.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Apply tag, remove tag, update contact |
| Free Tier | ✓ | Free |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Apply tag — add a tag to a contact in WP Fusion's connected CRM or marketing platform
- Remove tag — remove a tag from a contact in the connected CRM
- Update contact — push updated user data to the connected CRM via WP Fusion

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WP Fusion must be installed, active, and already connected to your CRM or marketing platform via its own settings; Bit Integrations then communicates with WP Fusion directly
- **Note**: WP Fusion manages its own API connections to external platforms — no additional API credentials are needed in Bit Integrations itself

## Common Workflow Recipes

### Recipe 1: Apply CRM tag on LMS course completion
**Trigger:** LearnDash / TutorLMS — Course completed
**Action:** WP Fusion — Apply tag
**Key fields mapped:** User email, tag tied to course completion
**Use case:** Use WP Fusion to tag contacts in your CRM when they complete a course, enabling CRM-based automations without direct CRM integration in Bit Integrations

### Recipe 2: Remove tag on membership cancellation
**Trigger:** MemberPress — Membership cancelled
**Action:** WP Fusion — Remove tag
**Key fields mapped:** User email, active member tag
**Use case:** Automatically remove active-member tags in your CRM when a membership lapses, keeping list segments accurate

### Recipe 3: Update contact data after form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** WP Fusion — Update contact
**Key fields mapped:** Email, first name, last name, custom field values
**Use case:** Push form data into your CRM via WP Fusion as a single integration point instead of configuring direct CRM connections in multiple places

## Setup Steps

1. Install Bit Integrations and WP Fusion on your WordPress site.
2. Connect WP Fusion to your CRM or marketing platform via its own settings panel.
3. Go to Bit Integrations > Create Integration.
4. Select WP Fusion as the action.
5. Choose the action event: Apply Tag, Remove Tag, or Update Contact.
6. Select or type the tag name, or map the contact fields to update.
7. Map the user email from your trigger source to WP Fusion's contact lookup field.
8. Save and test with a real event to confirm the tag or data update fires in your CRM.

## When to Use

- You want to use WP Fusion as a single CRM integration layer across multiple Bit Integrations workflows
- Your CRM is not directly supported by Bit Integrations but is supported by WP Fusion
- You need to apply or remove CRM tags based on LMS, membership, or form events
- You want to push WordPress user data into your CRM from multiple trigger sources through one consistent action

## Related Integrations

- memberpress.md
- learndash.md
- lifterlms.md
- restrict-content.md
- suremembers.md
