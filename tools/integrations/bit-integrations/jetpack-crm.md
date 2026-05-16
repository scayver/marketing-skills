# Jetpack CRM

Jetpack CRM is a WordPress-native CRM plugin that brings contact management, lead tracking, invoicing, and transaction history directly into the WordPress dashboard without needing an external service. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/JetPack-CRM.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, Companies, and add Tags in Jetpack CRM |
| Free Tier | — | Requires Bit Integrations Pro |
| Field Mapping | ✓ | Map WordPress data fields to Jetpack CRM fields |

## Action Events

- Create Contact
- Create Company
- Add Tag

## Authentication

- **Type**: WordPress Plugin Native
- **Where to get credentials**: No external API key required — Jetpack CRM connects via its WordPress plugin integration; both Bit Integrations Pro and Jetpack CRM must be installed and active on the same WordPress site
- **Required fields in Bit Integrations**: No external credentials; plugin-to-plugin connection (Pro required)

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| zbsc_fname | Contact first name | Optional |
| zbsc_lname | Contact last name | Required |
| zbsc_email | Email address | Required; used as unique identifier |
| zbsc_phone | Phone number | Optional |
| zbsc_company | Associated company name | Optional |
| tag | Tag label to apply to the contact | Optional; string |

## Common Workflow Recipes

### Recipe 1: Contact Form to Jetpack CRM Contact
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Contact in Jetpack CRM
**Key fields mapped:** First Name, Last Name, Email, Phone, Company
**Use case:** Automatically add WordPress form submissions as Jetpack CRM contacts so all lead data stays inside your WordPress dashboard.

### Recipe 2: WooCommerce Customer to Jetpack CRM Contact with Tag
**Trigger:** WooCommerce order completed
**Action:** Create Contact and add tag in Jetpack CRM
**Key fields mapped:** First Name, Last Name, Email, Phone, Tag = Customer
**Use case:** Create a Jetpack CRM contact record for every WooCommerce customer and tag them so you can segment customers from prospects.

### Recipe 3: Lead Magnet Download to Tagged Jetpack CRM Contact
**Trigger:** Elementor or Fluent Forms lead magnet opt-in
**Action:** Create Contact and add tag in Jetpack CRM
**Key fields mapped:** First Name, Last Name, Email, Tag = LeadMagnet
**Use case:** Add lead magnet downloaders as tagged Jetpack CRM contacts to build a segmented list entirely within WordPress.

## Setup Steps

1. Install Bit Integrations Pro on your WordPress site (Pro version required for Jetpack CRM integration).
2. Install and activate Jetpack CRM on the same WordPress site.
3. Go to Bit Integrations > Create Integration in your WordPress dashboard.
4. Select your trigger source (the form plugin or WordPress event that starts the workflow).
5. Select Jetpack CRM as the action — no external authentication required.
6. Select the object type (Contact, Company) and configure any tags to apply.
7. Map the fields from your trigger to Jetpack CRM fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You want to keep all CRM data inside WordPress without connecting to any external service
- You use WooCommerce and want customer records created in Jetpack CRM automatically after purchase
- You need a GDPR-friendly, self-contained CRM where data never leaves your server
- You want to tag and segment contacts based on which WordPress form or event created them

## Related Integrations

- propovoice-crm.md
- fluentcrm.md
- perfex-crm.md
- zoho-bigin.md
