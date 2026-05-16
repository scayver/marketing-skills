# Sperse.io

Sperse.io is a client portal and business management platform that combines invoicing, project management, and client communication. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Sperse.io_.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data from WordPress to Sperse.io via API |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Sperse.io contact or record fields |

## Action Events

- Create or update records in Sperse.io from WordPress events

## Authentication

- **Type**: API Key
- **Required**: API key from your Sperse.io account settings

## Common Workflow Recipes

### Recipe 1: Contact Form to Sperse.io Client Record
**Trigger:** WordPress contact form submission
**Action:** Create a new client record in Sperse.io with the contact's details
**Use case:** Automatically onboard new client inquiries into your Sperse.io client portal

### Recipe 2: Quote Request Form to Sperse.io Project
**Trigger:** WordPress quote request form submission
**Action:** Create a new project or opportunity in Sperse.io
**Use case:** Convert web inquiries into tracked projects without manual data entry

### Recipe 3: Payment or Registration to Sperse.io Contact
**Trigger:** WooCommerce order completed or user registration
**Action:** Add buyer or registrant as a Sperse.io client
**Use case:** Populate your client portal automatically when someone purchases or registers

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Sperse.io as the Action.
5. Enter your Sperse.io API key in Bit Integrations.
6. Configure target object type (contact, project, etc.).
7. Map fields.
8. Save and test.

## When to Use

- When managing client relationships in Sperse.io and wanting automatic intake from WordPress forms
- When converting web leads or purchasers into Sperse.io client records without manual entry
- When running a service business that uses Sperse.io as a client portal

## Related Integrations

- custom-api.md
- webhook-outgoing.md
- zapier.md
- notion.md
