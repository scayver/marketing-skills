# Ant Apps

Ant Apps is a business management platform offering CRM, project management, invoicing, and team collaboration tools in a unified workspace. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Ant-Apps.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | Not available as a trigger |
| As Action | ✓ | Creates records in Ant Apps (free tier) |
| Free Tier | ✓ | Available on Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress form or event fields to Ant Apps fields |

## Action Events

- Create contact or lead record
- Create project or task
- Create customer record

## Authentication

- **Type**: API Key
- **Where to get credentials**: Ant Apps account > Settings > API or Integrations section
- **Required in Bit Integrations**: Ant Apps API key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| name | Contact or record name | Required |
| email | Email address | Required for contact records |
| phone | Phone number | Optional |
| company | Company or organization name | Optional |
| notes | Additional notes or description | Optional |
| status | Lead or contact status | Optional |

## Common Workflow Recipes

### Recipe 1: Contact Form to Ant Apps Lead
**Trigger:** WordPress form submission (WPForms, Gravity Forms, CF7, Bit Form)
**Action:** Create lead or contact in Ant Apps
**Use case:** Automatically add new website inquiries to Ant Apps as leads for follow-up

### Recipe 2: WooCommerce Order to Ant Apps Customer
**Trigger:** WooCommerce order completed
**Action:** Create customer record in Ant Apps
**Use case:** Sync new buyers into Ant Apps for client relationship tracking and invoicing

### Recipe 3: Lead Magnet Download to Ant Apps Contact
**Trigger:** WordPress form submission on a lead magnet landing page
**Action:** Create contact in Ant Apps with lead source tag
**Use case:** Track lead magnet downloads as new contacts in Ant Apps for sales follow-up

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger source (form plugin, WooCommerce, etc.).
4. Select Ant Apps as the action.
5. Enter your Ant Apps API key.
6. Select the record type to create (contact, lead, customer).
7. Map the fields from your trigger to Ant Apps fields.
8. Save and test with a real form submission.

## When to Use

- Capturing website leads directly into Ant Apps for sales tracking
- Syncing WooCommerce customers to Ant Apps for invoicing and project management
- Automating client record creation when new projects or inquiries come through WordPress forms
- Replacing manual data entry between your WordPress site and Ant Apps workspace

## Related Integrations

- hubspot.md
- pipedrive.md
- zoho-crm.md
- google-sheets.md
- wpforms.md
