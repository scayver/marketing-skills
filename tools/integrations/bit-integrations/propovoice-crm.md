# Propovoice CRM

Propovoice CRM is a WordPress-native CRM plugin built for agencies and freelancers, offering lead management, client portals, project tracking, and proposal generation directly inside WordPress. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Propovoice-CRM.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Leads and Clients in Propovoice CRM |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Propovoice fields |

## Action Events

- Create Lead
- Create Client

## Authentication

- **Type**: WordPress Plugin Native
- **Where to get credentials**: No external API key required — Propovoice CRM connects via its WordPress plugin integration; both Bit Integrations and Propovoice CRM must be installed and active on the same WordPress site
- **Required fields in Bit Integrations**: No credentials needed; plugin-to-plugin connection

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| name | Full name of the lead or client | Required |
| email | Email address | Required; used as unique identifier |
| phone | Phone number | Optional |
| company | Associated company name | Optional |
| address | Physical address | Optional |
| note | Additional notes about the lead or client | Optional |

## Common Workflow Recipes

### Recipe 1: Contact Form to Propovoice Lead
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Lead in Propovoice CRM
**Key fields mapped:** Name, Email, Phone, Company, Note
**Use case:** Automatically add website inquiries as Propovoice leads so agency owners can track prospects and send proposals without leaving WordPress.

### Recipe 2: Client Intake Form to Propovoice Client
**Trigger:** Gravity Forms or Fluent Forms client intake submission
**Action:** Create Client in Propovoice CRM
**Key fields mapped:** Name, Email, Phone, Company, Address
**Use case:** Add new client details from your onboarding form directly as a Propovoice client record, ready for project and invoice management.

### Recipe 3: Service Inquiry to Propovoice Lead with Note
**Trigger:** Elementor service inquiry form
**Action:** Create Lead in Propovoice CRM
**Key fields mapped:** Name, Email, Phone, Company, Note = service type from form
**Use case:** Capture service inquiries as Propovoice leads with the service type noted, so you can send targeted proposals quickly.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Install and activate Propovoice CRM on the same WordPress site.
3. Go to Bit Integrations > Create Integration in your WordPress dashboard.
4. Select your trigger source (the form plugin or WordPress event that starts the workflow).
5. Select Propovoice CRM as the action — no external authentication required.
6. Select the object type (Lead or Client) you want to create.
7. Map the fields from your trigger to Propovoice CRM fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You run an agency or freelance business and manage clients entirely within WordPress using Propovoice
- You want contact forms on your site to automatically create leads in Propovoice without a third-party CRM
- You need client onboarding forms to create Propovoice client records ready for proposals and invoicing
- You prefer keeping all tools inside WordPress rather than connecting to external CRM services

## Related Integrations

- jetpack-crm.md
- agiled-crm.md
- moxiecrm.md
- fluentcrm.md
