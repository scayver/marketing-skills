# Zendesk Sell

Zendesk Sell is a sales CRM platform for managing leads, contacts, deals, and sales pipelines with integrated communication tools. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Support and Helpdesk
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Zendesk-Sell.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create leads, contacts, and deals in Zendesk Sell |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Zendesk Sell lead, contact, and deal fields |

## Action Events

- Create lead
- Create contact
- Create deal

## Authentication

- **Type**: API Token
- **Required**: API token from Zendesk Sell (Settings > Integrations > API). Enter the token in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Lead Form to Zendesk Sell Lead
**Trigger:** WordPress lead capture form submission
**Action:** Create a new lead in Zendesk Sell with name, email, phone, and company
**Use case:** Automatically populate the Zendesk Sell lead pipeline from website lead capture forms

### Recipe 2: Contact Form to Zendesk Sell Contact
**Trigger:** WordPress contact form submission
**Action:** Create a Zendesk Sell contact with the submitter's details
**Use case:** Build a Zendesk Sell contact database from all website form inquiries

### Recipe 3: Quote Request to Zendesk Sell Deal
**Trigger:** WordPress quote request form submission
**Action:** Create a new deal in Zendesk Sell with the prospect's details and opportunity value
**Use case:** Instantly create a tracked sales opportunity in Zendesk Sell from web quote requests

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Zendesk Sell as the Action.
5. In Zendesk Sell, go to Settings > Integrations > API and generate an API token.
6. Enter the token in Bit Integrations.
7. Select the action event (create lead, contact, or deal).
8. Map fields: first_name, last_name, email, phone, company_name.
9. Save and test.

## When to Use

- When WordPress lead forms should populate the Zendesk Sell sales pipeline automatically
- When contact form submissions should create Zendesk Sell contacts for sales follow-up
- When web quote requests should create tracked deals in Zendesk Sell

## Related Integrations

- freshdesk.md
- zoho-desk.md
- hubspot.md
- pipedrive.md
