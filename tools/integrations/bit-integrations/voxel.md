# Voxel

Voxel is an advanced WordPress theme and directory/listing builder for creating custom post type directories, classifieds, booking sites, and community platforms. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action — Yes | Trigger — No (requires Pro)
**Category:** WordPress Core and Utility
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/Voxel-1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/Voxel.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires when a post type is submitted or an order is placed (requires Pro) |
| As Action | ✓ | Creates a Voxel post type entry (free tier) |
| Free Tier | ✓ | Action is free; Trigger requires Bit Integrations Pro |
| Field Mapping | ✓ | Map form or event fields to Voxel post type fields |

## Trigger Events

- Post type submitted (user submits a listing or custom post)
- Order placed (Voxel's built-in order system)
- Membership activated
- Review submitted

## Action Events

- Create post type entry (listing, directory item, classified ad, booking)
- Update post type entry

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Voxel theme must be installed and active on the same WordPress site as Bit Integrations
- **Note**: No external API key required; Bit Integrations communicates directly with Voxel via WordPress hooks

## Common Workflow Recipes

### Recipe 1: New Listing Submission to CRM
**Trigger:** Voxel post type submitted (new listing or directory entry)
**Action:** Create contact in HubSpot, Pipedrive, or Zoho CRM
**Use case:** Automatically capture listing owners as CRM contacts when they submit entries to your directory

### Recipe 2: Voxel Order to Email Notification
**Trigger:** Voxel order placed
**Action:** Send notification via Slack or email
**Use case:** Alert your team in real time when a paid listing or booking order comes in through Voxel

### Recipe 3: Form Submission to Voxel Listing
**Trigger:** WordPress form (WPForms, Gravity Forms, Bit Form)
**Action:** Create Voxel post type entry
**Use case:** Let users submit directory listings through a standard WordPress form and automatically create the Voxel listing on the backend

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Voxel as the Trigger (for submission or order events) or as the Action (to create entries).
4. If using as a Trigger, select the post type and the specific event (submitted, order placed, etc.).
5. If using as an Action, select the post type you want to create entries in.
6. Map the relevant fields between the trigger source and the Voxel post type fields.
7. Save and test by submitting a real listing or placing a test order.

## When to Use

- Building automated workflows around a Voxel-powered directory or marketplace
- Syncing new listing submissions to a CRM or email marketing platform
- Notifying a team channel when new paid listings or bookings come in
- Creating Voxel listings programmatically from external form submissions
- Connecting Voxel's order system to accounting or project management tools

## Related Integrations

- post-creation.md
- wp-post.md
- hubspot.md
- google-sheets.md
