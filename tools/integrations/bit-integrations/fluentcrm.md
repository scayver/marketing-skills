# FluentCRM

FluentCRM is a WordPress-native email marketing automation and CRM plugin that manages contacts, email campaigns, automation sequences, and sales funnels entirely inside the WordPress dashboard. Available as both a Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Fluent_CRM1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fire workflows when FluentCRM contact events occur; requires Bit Integrations Pro |
| As Action | ✓ | Create/update contacts, manage tags and lists, start automations; free |
| Free Tier | ✓ | Action is free; Trigger requires Bit Integrations Pro |
| Field Mapping | ✓ | Map WordPress data fields to FluentCRM fields |

## Trigger Events

- Contact status changed
- Tag applied to contact
- Contact subscribed to list
- Automation sequence completed

## Action Events

- Create contact
- Update contact
- Add tag
- Add to list
- Start automation
- Remove tag

## Authentication

- **Type**: WordPress Plugin Native
- **Where to get credentials**: No external API key required — FluentCRM connects via its WordPress plugin integration; both Bit Integrations and FluentCRM must be installed and active on the same WordPress site
- **Required fields in Bit Integrations**: No external credentials; plugin-to-plugin connection (Pro required for Trigger use)

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| first_name | Contact first name | Optional |
| last_name | Contact last name | Optional |
| email | Email address | Required; primary contact identifier |
| phone | Phone number | Optional |
| address | Physical address | Optional |
| tags | Tags to apply | Optional; comma-separated list of tag names |
| lists | Lists to subscribe to | Optional; comma-separated list names |
| status | Contact subscription status | Optional; e.g., subscribed, pending |

## Common Workflow Recipes

### Recipe 1: WPForms Opt-In to FluentCRM Contact with Tag and List
**Trigger:** WPForms or Gravity Forms opt-in form submission
**Action:** Create Contact and add to list in FluentCRM
**Key fields mapped:** First Name, Last Name, Email, Tags, Lists, Status = subscribed
**Use case:** Add opt-in form subscribers directly to a FluentCRM list and tag them so your email automation can begin immediately.

### Recipe 2: WooCommerce Purchase to FluentCRM Tag and Automation
**Trigger:** WooCommerce order completed
**Action:** Add tag and start automation in FluentCRM
**Key fields mapped:** Email, Tag = Customer, Automation ID
**Use case:** Tag WooCommerce customers in FluentCRM and enroll them in a post-purchase email sequence for retention and upsell campaigns.

### Recipe 3: FluentCRM Tag Applied to External CRM Action
**Trigger:** Tag applied to contact in FluentCRM (Trigger; Pro required)
**Action:** Create or update contact in HubSpot or Salesforce (via separate integration)
**Key fields mapped:** Email, First Name, Last Name, Tag name
**Use case:** When a FluentCRM tag is applied (e.g., Hot Lead), mirror that contact update to your external sales CRM automatically.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/; Pro required to use FluentCRM as a Trigger).
2. Install and activate FluentCRM on the same WordPress site.
3. Go to Bit Integrations > Create Integration in your WordPress dashboard.
4. To use as an Action: select your external trigger source, then select FluentCRM as the action. No credentials needed.
5. To use as a Trigger (Pro): select FluentCRM as the trigger source and choose the event (status changed, tag applied, etc.), then configure your action.
6. Select the FluentCRM action type (Create Contact, Add Tag, Add to List, Start Automation) or trigger event.
7. Map the fields from your trigger to FluentCRM fields (or from FluentCRM to your action).
8. Save and submit a test entry to verify data flows correctly.

## When to Use

- You use FluentCRM for email marketing inside WordPress and want form submissions to add contacts automatically
- You want WooCommerce purchases to trigger FluentCRM email automation sequences without a third-party tool
- You need to sync WordPress user actions (registration, purchase, download) into FluentCRM lists and tags
- You want FluentCRM contact events (tag applied, status changed) to trigger actions in external tools like Slack, HubSpot, or a Google Sheet

## Related Integrations

- keap.md
- gohighlevel.md
- jetpack-crm.md
- propovoice-crm.md
