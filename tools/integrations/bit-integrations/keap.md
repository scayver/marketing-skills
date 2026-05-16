# Keap

Keap (formerly Infusionsoft) is a CRM and marketing automation platform for small businesses, combining contact management, email campaigns, pipeline tracking, and payment collection in one tool. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Keap.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, apply Tags, and add to Campaign sequences |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Keap fields |

## Action Events

- Create Contact
- Apply Tag
- Add to Campaign sequence

## Authentication

- **Type**: OAuth 2.0
- **Where to get credentials**: Keap Developer account at keys.developer.keap.com — create an app to get Client ID and Client Secret, then authorize via Bit Integrations OAuth flow
- **Required fields in Bit Integrations**: OAuth connection using Client ID and Client Secret from Keap Developer portal

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| given_name | Contact first name | Optional |
| family_name | Contact last name | Optional |
| email_addresses | Email address | Required; primary contact identifier |
| phone_numbers | Phone number | Optional |
| company_name | Associated company name | Optional |
| tag_ids | Tag IDs to apply to the contact | Optional; must exist in Keap beforehand |

## Common Workflow Recipes

### Recipe 1: Opt-In Form to Keap Contact with Tag
**Trigger:** WPForms or Gravity Forms email opt-in submission
**Action:** Create Contact and apply Tag in Keap
**Key fields mapped:** First Name, Last Name, Email, Tag = LeadMagnet2024
**Use case:** Add opt-in subscribers to Keap and tag them based on the lead magnet they downloaded for targeted follow-up.

### Recipe 2: Contact Form to Keap Campaign Sequence
**Trigger:** Contact Form 7 or Elementor form submission
**Action:** Create Contact and add to Campaign sequence
**Key fields mapped:** First Name, Last Name, Email, Phone, Campaign sequence ID
**Use case:** Enroll new website leads directly in a Keap nurture campaign sequence so automated follow-up begins immediately.

### Recipe 3: WooCommerce Purchase to Keap Customer Tag
**Trigger:** WooCommerce order completed
**Action:** Apply Tag to existing Contact in Keap
**Key fields mapped:** Email, Tag = Customer
**Use case:** Tag WooCommerce customers in Keap to move them from a leads campaign sequence into a post-purchase retention campaign.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Keap as the action.
5. Connect your Keap account using OAuth 2.0 via your Keap Developer app credentials.
6. Select the action (Create Contact, Apply Tag, Add to Sequence) and configure the target.
7. Map the fields from your trigger to Keap fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use Keap's campaign builder for automated email sequences and need web form triggers to enroll contacts
- You want to tag new website leads based on which form they submitted for segmented follow-up
- You need WooCommerce customers to move between Keap campaign sequences automatically after purchase
- You run a small business with complex automated follow-up and want WordPress as the entry point

## Related Integrations

- fluentcrm.md
- hubspot.md
- gohighlevel.md
- salesmate.md
