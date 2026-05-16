# LionDesk CRM

LionDesk is a real estate-focused CRM platform built for agents and brokers, featuring contact management, automated drip campaigns, video texting, and transaction tracking. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Lion-Desk.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts in LionDesk |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to LionDesk fields |

## Action Events

- Create Contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: LionDesk Settings > Developer / API settings — generate and copy the API key
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| first_name | Contact first name | Optional |
| last_name | Contact last name | Required |
| email | Email address | Optional; used for deduplication |
| phone | Phone number | Optional |
| category | Contact category or type | Optional; e.g., Buyer, Seller, Lead |
| note | Additional notes about the contact | Optional |

## Common Workflow Recipes

### Recipe 1: Property Inquiry Form to LionDesk Contact
**Trigger:** WPForms or Gravity Forms property inquiry submission
**Action:** Create Contact in LionDesk
**Key fields mapped:** First Name, Last Name, Email, Phone, Category = Buyer
**Use case:** Automatically add website property inquiries as LionDesk contacts so real estate agents can trigger drip campaigns immediately.

### Recipe 2: Home Valuation Request to LionDesk Seller Contact
**Trigger:** Elementor home valuation form
**Action:** Create Contact in LionDesk
**Key fields mapped:** First Name, Last Name, Email, Phone, Category = Seller, Note = valuation request
**Use case:** Capture home valuation requests and tag contacts as sellers in LionDesk for targeted listing campaigns.

### Recipe 3: Open House Sign-In to LionDesk Contact
**Trigger:** Fluent Forms open house sign-in form
**Action:** Create Contact in LionDesk
**Key fields mapped:** First Name, Last Name, Email, Phone, Note = Open House address and date
**Use case:** Add open house attendees directly to LionDesk so agents can follow up with property-specific drip sequences.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select LionDesk as the action.
5. Connect your LionDesk account using your API key from LionDesk Settings > Developer / API settings.
6. Configure the Contact creation with your desired category and notes.
7. Map the fields from your trigger to LionDesk fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You are a real estate agent or broker using LionDesk and need website leads captured automatically
- You want property inquiry forms to add leads directly to LionDesk drip campaigns
- You need home buyer and seller contacts separated by category from different inquiry forms
- You capture open house sign-ins online and want them added to LionDesk for follow-up

## Related Integrations

- hubspot.md
- capsulecrm.md
- nimble.md
- salesmate.md
