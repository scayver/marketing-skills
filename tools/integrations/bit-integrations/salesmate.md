# Salesmate CRM

Salesmate is a smart CRM and sales automation platform designed for growing sales teams, offering pipeline management, built-in calling, and automated follow-up sequences. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Salesmate.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, Deals, Companies, and Activities in Salesmate |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Salesmate fields |

## Action Events

- Create Contact
- Create Deal
- Create Company
- Add activity

## Authentication

- **Type**: API Key + Session Token
- **Where to get credentials**: Salesmate My Account > Integrations — generate an API key and note the session token
- **Required fields in Bit Integrations**: API Key, Session Token

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| firstName | Contact first name | Optional |
| lastName | Contact last name | Required |
| email | Email address | Required; used as unique identifier |
| phone | Phone number | Optional |
| company | Associated company name | Optional |
| pipeline | Target pipeline name | Optional; for Deal records |
| stage | Pipeline stage name | Optional; for Deal records |
| value | Deal monetary value | Optional; numeric |

## Common Workflow Recipes

### Recipe 1: Contact Form to Salesmate Contact
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Contact in Salesmate
**Key fields mapped:** First Name, Last Name, Email, Phone, Company
**Use case:** Automatically add every website inquiry to Salesmate so your sales team can begin outreach immediately.

### Recipe 2: Demo Request to Salesmate Deal
**Trigger:** Elementor demo request form
**Action:** Create Deal in Salesmate
**Key fields mapped:** First Name, Last Name, Email, Company, Pipeline, Stage, Deal Value
**Use case:** Push demo requests directly into the Salesmate pipeline so reps can prioritize and track high-value prospects.

### Recipe 3: WooCommerce Order to Salesmate Activity
**Trigger:** WooCommerce order completed
**Action:** Add activity in Salesmate
**Key fields mapped:** Customer Name, Email, Order Total, Activity Type = Purchase
**Use case:** Log purchase events as Salesmate activities so sales reps have a full interaction timeline for each customer.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Salesmate as the action.
5. Connect your Salesmate account using your API key and session token from My Account > Integrations.
6. Select the object type (Contact, Deal, Company, Activity) you want to create.
7. Map the fields from your trigger to Salesmate fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- Your sales team works in Salesmate and needs website leads to flow in automatically
- You want demo or quote requests to land directly in the Salesmate pipeline with deal values pre-filled
- You need WooCommerce purchases logged as activities in Salesmate for customer timeline tracking
- You want company records and contacts created together from B2B inquiry forms

## Related Integrations

- pipedrive.md
- hubspot.md
- salesflare.md
- companyhub.md
