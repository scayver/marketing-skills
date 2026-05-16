# Nimble CRM

Nimble is a social CRM focused on relationship intelligence, automatically enriching contact records with social profile data and helping teams stay on top of follow-ups across email and social channels. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Nimble.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, add Tags, and create Activities in Nimble |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Nimble fields |

## Action Events

- Create Contact
- Add tag
- Create Activity

## Authentication

- **Type**: API Key
- **Where to get credentials**: Nimble Settings > API & Integrations — generate and copy the API key
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| first_name | Contact first name | Optional |
| last_name | Contact last name | Required |
| email | Email address | Required; used for social enrichment and deduplication |
| phone | Phone number | Optional |
| company_name | Associated company name | Optional |
| tag | Tag label to apply to the contact | Optional; string |

## Common Workflow Recipes

### Recipe 1: Contact Form to Nimble Contact with Tag
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Contact and add tag in Nimble
**Key fields mapped:** First Name, Last Name, Email, Phone, Company Name, Tag = WebsiteLead
**Use case:** Add website contacts to Nimble with a tag so you can segment and follow up with web-sourced leads separately.

### Recipe 2: Networking Event Form to Nimble Contact
**Trigger:** Elementor or Fluent Forms networking event sign-up
**Action:** Create Contact in Nimble
**Key fields mapped:** First Name, Last Name, Email, Company Name, Tag = NetworkingEvent
**Use case:** Capture networking event connections via a WordPress form and let Nimble enrich their profiles with social data automatically.

### Recipe 3: Inquiry Form to Nimble Contact and Activity
**Trigger:** Contact Form 7 or WPForms inquiry submission
**Action:** Create Contact and create Activity in Nimble
**Key fields mapped:** First Name, Last Name, Email, Phone, Activity Type = Follow-up Call
**Use case:** Add inquiry contacts to Nimble and immediately log a follow-up call activity so no lead is forgotten.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Nimble as the action.
5. Connect your Nimble account using your API key from Settings > API & Integrations.
6. Select the action (Create Contact, Add Tag, Create Activity) you want to perform.
7. Map the fields from your trigger to Nimble fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You rely on Nimble for relationship intelligence and want website contacts enriched automatically with social data
- You want to tag website leads differently based on the form they submitted for segmented outreach
- You use Nimble's activity tracking and want follow-up tasks created automatically with new contacts
- You work heavily in email and social channels and want Nimble as your central contact hub for web leads

## Related Integrations

- copper-crm.md
- capsulecrm.md
- hubspot.md
- liondesk.md
