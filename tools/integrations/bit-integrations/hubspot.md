# HubSpot

HubSpot is an all-in-one CRM and marketing platform that helps businesses attract, engage, and delight customers through sales, marketing, and service tools. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Hubspot.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create/update contacts, add to lists, create deals, enroll in sequences |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to HubSpot fields |

## Action Events

- Create contact
- Update contact
- Add contact to list
- Create deal
- Add tag
- Enroll contact in sequence

## Authentication

- **Type**: API Key (Private App Token)
- **Where to get credentials**: HubSpot Settings > Integrations > Private Apps — create a new private app and copy the access token
- **Required fields in Bit Integrations**: Private App Token

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| email | Contact email address | Required; used as unique identifier |
| firstname | Contact first name | Optional |
| lastname | Contact last name | Optional |
| phone | Contact phone number | Optional |
| company | Associated company name | Optional |
| hs_lead_status | Lead qualification status | Optional; e.g., NEW, OPEN, IN_PROGRESS |
| lifecyclestage | CRM lifecycle stage | Optional; e.g., lead, customer, subscriber |
| custom properties | Any custom HubSpot property | Must exist in HubSpot before mapping |

## Common Workflow Recipes

### Recipe 1: Contact Form to HubSpot CRM
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create contact in HubSpot
**Key fields mapped:** First Name, Last Name, Email, Phone, Company
**Use case:** Automatically add every website inquiry to your HubSpot CRM without manual data entry.

### Recipe 2: WooCommerce Purchase to HubSpot Deal
**Trigger:** WooCommerce order completed
**Action:** Create deal in HubSpot
**Key fields mapped:** Customer Name, Email, Order Total, Product Name
**Use case:** Mirror every completed purchase as a closed-won deal in HubSpot for revenue tracking.

### Recipe 3: Lead Magnet Download to Sequence Enrollment
**Trigger:** Elementor form submission (lead magnet opt-in)
**Action:** Create contact and enroll in sequence
**Key fields mapped:** Email, First Name, lifecycle stage = lead
**Use case:** Automatically start a nurture email sequence when someone downloads a resource from your site.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select HubSpot as the action.
5. Connect your HubSpot account using your Private App Token from HubSpot Settings > Integrations > Private Apps.
6. Select the HubSpot object type (Contact, Deal, List) you want to write to.
7. Map the fields from your trigger to HubSpot fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You want every WordPress form submission automatically added as a HubSpot contact
- You need WooCommerce orders to create deals in HubSpot without manual entry
- You want to trigger HubSpot sequences based on WordPress user actions
- You need to sync lead magnet opt-ins directly into HubSpot lists for segmented follow-up

## Related Integrations

- salesforce.md
- pipedrive.md
- zoho-crm.md
- salesmate.md
