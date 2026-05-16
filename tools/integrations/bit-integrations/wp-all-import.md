# WP All Import

WP All Import is a powerful WordPress plugin for importing data from CSV, XML, and other file formats into WordPress posts, pages, and custom post types. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Cloud Storage
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-All-Import.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; trigger WP All Import to import data into WordPress |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map incoming data fields to WP All Import import template fields |

## Action Events

- Import data into WordPress posts, pages, or custom post types using a pre-configured WP All Import import template

## Authentication

- **Type**: WordPress plugin-native + API key
- **Required**: WP All Import Pro must be installed. An API key from WP All Import is required to trigger imports programmatically. Enter the API key in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: External Data Webhook to WordPress Post Import
**Trigger:** Incoming webhook (external data feed)
**Action:** Trigger WP All Import to import the received data as WordPress posts
**Use case:** Automatically import product listings or content from external data sources into WordPress

### Recipe 2: Scheduled Data Sync to Custom Post Type
**Trigger:** Scheduled or external data delivery event
**Action:** WP All Import imports data into a custom post type (e.g., properties, products, listings)
**Use case:** Keep WordPress content synchronized with external databases or feeds automatically

### Recipe 3: Form Submission Data Batch to Import
**Trigger:** Bulk data form submission or file upload
**Action:** Process uploaded data file through WP All Import into WordPress posts
**Use case:** Allow admins to submit data files via a form that automatically triggers a WP All Import run

## Setup Steps

1. Install Bit Integrations Pro and WP All Import Pro on your WordPress site.
2. In WP All Import, create and configure an import template for the target post type.
3. Go to WP All Import settings and obtain the API key.
4. Go to Bit Integrations > Create Integration.
5. Choose your trigger.
6. Select WP All Import as the Action.
7. Enter the WP All Import API key and select the target import template.
8. Map fields.
9. Save and test.

## When to Use

- When external data needs to be imported into WordPress as posts or custom post types automatically
- When running scheduled or event-triggered content sync jobs between external sources and WordPress
- When large data sets need to be imported into WordPress without manual WP Admin interaction

## Related Integrations

- post-creation.md
- wp-post.md
- webhook-incoming.md
- custom-api.md
