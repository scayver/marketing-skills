# Google Contacts

Google Contacts is Google's contact management service for storing and organizing personal and business contacts. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Google_Contacts1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create contacts in Google Contacts |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Google Contacts fields |

## Action Events

- Create contact

## Authentication

- **Type**: OAuth 2.0
- **Required**: Authorize Bit Integrations via Google OAuth. Contacts are created in the authenticated Google account.

## Common Workflow Recipes

### Recipe 1: Lead Form to Google Contacts
**Trigger:** WordPress lead or contact form submission
**Action:** Create a new Google Contact with name, email, phone, and organization
**Use case:** Automatically build and maintain a contact list in Google Contacts from every website inquiry

### Recipe 2: WooCommerce Customer to Google Contacts
**Trigger:** WooCommerce order completed
**Action:** Create a Google Contact for each new customer with their billing details
**Use case:** Keep a Google Contacts-based customer directory up to date with every new purchase

### Recipe 3: Event Registration to Google Contacts
**Trigger:** Event registration form submission
**Action:** Add each registrant as a Google Contact with event notes in the organization field
**Use case:** Build a reusable contact list from event attendees for future outreach

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Google Contacts as the Action.
5. Click "Authorize" and sign in with your Google account.
6. Map fields: givenName, familyName, emailAddresses, phoneNumbers, organization.
7. Save and test.

## When to Use

- When form submissions should automatically populate Google Contacts for personal or team use
- When maintaining a Google-based contact directory synced with WordPress form data
- When sales or support teams manage contacts primarily in Google Contacts

## Related Integrations

- google-sheets.md
- google-calendar.md
- zoho-desk.md
- freshdesk.md
