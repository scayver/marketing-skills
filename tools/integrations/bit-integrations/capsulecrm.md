# Capsule CRM

Capsule CRM is a simple and clean customer relationship management tool that helps small businesses manage contacts, sales pipelines, and tasks without complexity. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/CapsuleCRM1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create People, Organisations, and Opportunities in Capsule |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Capsule CRM fields |

## Action Events

- Create Person
- Create Organisation
- Create Opportunity

## Authentication

- **Type**: API Token
- **Where to get credentials**: Capsule My Preferences > API Authentication Token — copy the token shown in your account settings
- **Required fields in Bit Integrations**: API Token

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| firstName | Person first name | Optional |
| lastName | Person last name | Required |
| emailAddress | Email address | Optional; used for deduplication |
| phoneNumber | Phone number | Optional |
| organisationName | Associated organisation name | Optional |
| tag | Tag to apply to the record | Optional; string label |

## Common Workflow Recipes

### Recipe 1: Contact Form to Capsule Person
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Person in Capsule CRM
**Key fields mapped:** First Name, Last Name, Email, Phone, Organisation Name
**Use case:** Automatically add website contacts to Capsule CRM so small business owners can track relationships without manual entry.

### Recipe 2: Sales Inquiry to Capsule Opportunity
**Trigger:** Contact Form 7 sales inquiry submission
**Action:** Create Opportunity in Capsule CRM
**Key fields mapped:** First Name, Last Name, Email, Opportunity Name, Value, Stage
**Use case:** Push website sales inquiries into the Capsule pipeline so your team can follow up and close deals.

### Recipe 3: Event Registration to Tagged Capsule Person
**Trigger:** Elementor form event registration
**Action:** Create Person with tag in Capsule CRM
**Key fields mapped:** First Name, Last Name, Email, Tag = Event2024
**Use case:** Add event registrants as tagged Capsule contacts so you can segment and follow up with attendees post-event.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Capsule CRM as the action.
5. Connect your Capsule account using your API Authentication Token from My Preferences.
6. Select the object type (Person, Organisation, Opportunity) you want to create.
7. Map the fields from your trigger to Capsule CRM fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You run a small business and want a straightforward CRM without learning curve
- You need website form submissions to appear in Capsule automatically for contact management
- You want to tag website contacts differently based on which form they submitted
- You use Capsule's pipeline to track proposals and need web leads feeding into it automatically

## Related Integrations

- zoho-bigin.md
- nutshell-crm.md
- clinchpad.md
- nimble.md
