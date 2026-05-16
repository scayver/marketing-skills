# JetEngine

JetEngine by Crocoblock is a powerful WordPress plugin for creating custom post types, meta fields, taxonomies, relations, and dynamic content. Available as an Action (free) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes (Action free; Trigger requires Pro)
**Category:** Project Management and Productivity
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/Jet-Engine.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/JetEngine.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on JetEngine form submission or post event |
| As Action | ✓ | Free; create or update JetEngine posts and meta fields |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map fields to JetEngine custom post types and meta fields |

## Trigger Events

- JetEngine form submitted
- Custom post type record created or updated
- JetEngine listing filter applied (contextual)

## Action Events

- Create custom post type entry
- Update meta field on a JetEngine post or user
- Create or update a JetEngine relation record

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and JetEngine (by Crocoblock) must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: JetEngine Form to External CRM
**Trigger:** JetEngine form submission
**Action:** Send form data to a CRM (HubSpot, Zoho, Pipedrive) or email platform
**Use case:** Use JetEngine forms as the intake point for CRM and marketing automation workflows

### Recipe 2: External Form to JetEngine Custom Post Type
**Trigger:** Gravity Forms or WPForms submission
**Action:** Create a new JetEngine custom post type entry with mapped field data
**Use case:** Populate a JetEngine-powered directory, listing, or database from any WordPress form

### Recipe 3: WooCommerce Order to JetEngine Booking Record
**Trigger:** WooCommerce order completed
**Action:** Create a JetEngine post type entry representing the booking or order record
**Use case:** Build custom WooCommerce order tracking using JetEngine custom post types

## Setup Steps

1. Install Bit Integrations and JetEngine on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select JetEngine as the Trigger and choose the form or post event.
4. For Action: Choose your trigger source, then select JetEngine as the Action.
5. Select the target custom post type or meta field group.
6. Map fields.
7. Save and test.

## When to Use

- When your site uses JetEngine for custom post types and you need forms to create or update records
- When JetEngine forms should feed external CRMs, email lists, or notification services
- When building custom database applications in WordPress using JetEngine as the data layer

## Related Integrations

- advanced-custom-fields.md
- pods.md
- acpt.md
- post-creation.md
