# GeoDirectory

GeoDirectory is a scalable WordPress business directory and listings plugin for building Yelp or Airbnb-style local directory sites. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** SEO and Analytics
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Geo-Directory.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create business listings in GeoDirectory |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to GeoDirectory listing fields |

## Action Events

- Create business listing

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and GeoDirectory must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Business Submission Form to GeoDirectory Listing
**Trigger:** WordPress business submission form
**Action:** Create a new GeoDirectory business listing with the submitted details
**Use case:** Allow businesses to submit their listings via a custom WordPress form that automatically creates a GeoDirectory entry

### Recipe 2: WooCommerce Business Plan Purchase to Directory Listing
**Trigger:** WooCommerce order completed (directory listing product)
**Action:** Create a GeoDirectory listing for the purchasing business
**Use case:** Automatically publish a directory listing when a business pays for a listing package through WooCommerce

### Recipe 3: Partner Registration to Directory Entry
**Trigger:** Partner or affiliate registration form submission
**Action:** Create a GeoDirectory listing for the new partner
**Use case:** Automatically add new partners or approved affiliates to a public directory page

## Setup Steps

1. Install Bit Integrations Pro and GeoDirectory on your WordPress site.
2. Configure the GeoDirectory listing type and custom fields.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select GeoDirectory as the Action.
6. Select the listing type.
7. Map form fields to GeoDirectory listing fields (business name, address, category, description, website, phone).
8. Save and test.

## When to Use

- When business submission forms should automatically create GeoDirectory listings
- When WooCommerce listing package purchases should publish new directory entries
- When building a business directory site with automated listing creation from form submissions

## Related Integrations

- post-creation.md
- wp-post.md
- airtable.md
- google-sheets.md
