# WP Job Manager

WP Job Manager is a lightweight WordPress plugin for creating and managing job listing boards with front-end submission and filtering. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** WordPress Core and Utility
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Job-Manager.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create job listings in WP Job Manager |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to WP Job Manager listing fields |

## Action Events

- Create job listing

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and WP Job Manager must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Job Submission Form to WP Job Manager Listing
**Trigger:** WordPress job submission form
**Action:** Create a new job listing in WP Job Manager with the submitted details
**Use case:** Accept job listings via a custom form and automatically publish them to the WP Job Manager board

### Recipe 2: WooCommerce Job Posting Purchase to Listing
**Trigger:** WooCommerce order completed (job posting product)
**Action:** Create a WP Job Manager listing for the purchased job post
**Use case:** Allow employers to purchase and publish job listings through WooCommerce with automatic creation in WP Job Manager

### Recipe 3: HR System Webhook to Job Listing
**Trigger:** Incoming webhook from an external HR or ATS system
**Action:** Create a WP Job Manager listing from the received job data
**Use case:** Automatically publish job openings from an HR system to a WordPress job board via webhook

## Setup Steps

1. Install Bit Integrations Pro and WP Job Manager on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select WP Job Manager as the Action.
5. Configure job listing status (published, pending, etc.).
6. Map form fields to listing fields (job title, location, company, type, description, expiry date).
7. Save and test.

## When to Use

- When employers should be able to submit job listings via a custom form that auto-creates WP Job Manager entries
- When WooCommerce job posting purchases should automatically publish listings in WP Job Manager
- When external HR systems should sync open positions to a WordPress job board automatically

## Related Integrations

- post-creation.md
- wp-post.md
- zoho-recruit.md
- webhook-incoming.md
