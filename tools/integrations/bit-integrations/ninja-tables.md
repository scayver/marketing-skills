# Ninja Tables

Ninja Tables is a WordPress table plugin for creating responsive, interactive data tables on posts and pages. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Community and Forum
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Ninja-Tables.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add rows to Ninja Tables data tables |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to Ninja Tables column definitions |

## Action Events

- Add row to table

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Ninja Tables must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Public Leaderboard Table
**Trigger:** WordPress form submission (quiz score, competition entry, etc.)
**Action:** Add a new row to a Ninja Tables public leaderboard
**Use case:** Display live leaderboards or competition results populated automatically from form submissions

### Recipe 2: Registration to Member Directory Table
**Trigger:** WordPress user registration
**Action:** Add the new member's details as a row in a Ninja Tables member directory
**Use case:** Maintain a publicly visible member directory table updated automatically on registration

### Recipe 3: WooCommerce Order to Order Status Table
**Trigger:** WooCommerce order completed
**Action:** Add a row to a Ninja Tables order tracking table
**Use case:** Display a live order status table to customers or admins populated from WooCommerce orders

## Setup Steps

1. Install Bit Integrations Pro and Ninja Tables on your WordPress site.
2. Create the target Ninja Tables table with the appropriate column structure.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Ninja Tables as the Action.
6. Select the target table.
7. Map form fields to table columns.
8. Save and test.

## When to Use

- When form submissions or WordPress events should automatically populate a Ninja Tables data table
- When building live leaderboards, directories, or status tables from WordPress event data
- When displaying structured WordPress data on the front end using Ninja Tables

## Related Integrations

- google-sheets.md
- airtable.md
- post-creation.md
