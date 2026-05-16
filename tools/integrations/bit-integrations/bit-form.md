# Bit Form

Bit Form is a drag-and-drop WordPress form builder made by the same team as Bit Integrations. Available as both a Trigger and an Action in the Bit Integrations WordPress plugin — fires a workflow when a form is submitted, or creates/updates form entries as an action in a workflow.

**Role:** Trigger and Action
**Free Tier:** Yes
**Category:** Form Builders
**Trigger Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Bit-Form-1.svg`
**Action Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Bit_Form1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on form submission |
| As Action | ✓ | Can create or update Bit Form entries |
| Free Tier | ✓ | Free |
| Field Mapping | ✓ | All form fields available for mapping to action platforms |

## Trigger Events

- Form submitted (all forms or specific form selection)

## Action Capabilities

When used as an Action, Bit Form can:

- Create a new form entry in a selected Bit Form form
- Update an existing form entry based on a matched field value

This allows other triggers (e.g., a CRM update, a payment, or a webhook) to write data back into a Bit Form entry.

## What Data Gets Passed

When a form is submitted, Bit Integrations passes the following data to any connected action:

- All form field values (text, email, phone, textarea, dropdowns, checkboxes, file URLs)
- Form ID and form name
- Submission timestamp
- Page URL where form was submitted
- Hidden field values (UTM source, UTM medium, UTM campaign, referrer, etc.)

## Connecting to Action Platforms

After selecting Bit Form as the trigger in Bit Integrations, connect it to any of these action platforms:

| Action Platform | Common Use Case |
|----------------|----------------|
| HubSpot | Create CRM contact from form data |
| Mailchimp / ActiveCampaign / MailerLite | Add subscriber to email list |
| Google Sheets | Log submission as spreadsheet row |
| Slack | Send team notification on new lead |
| Zapier / Make / n8n | Route to any downstream app |
| Pipedrive / Zoho CRM | Create deal or lead record |
| Telegram / WhatsApp | Instant lead notification to phone |

## Setup Steps

1. Install and activate Bit Form on your WordPress site.
2. Install and activate Bit Integrations (free from wordpress.org/plugins/bit-integrations/).
3. Create a form in Bit Form and publish it on a page.
4. Go to Bit Integrations > Create Integration.
5. Select Bit Form as the trigger (or as the action if writing entries).
6. Select the specific form you want to connect (or "all forms").
7. Select your action platform (HubSpot, Mailchimp, Google Sheets, etc.).
8. Map the form fields to the destination platform fields.
9. Save and test by submitting the form with real data.
10. Check the destination platform to confirm the data arrived correctly.

## Field Mapping Tips

- Always map the email field — it is the primary identifier in most action platforms.
- Use hidden fields in your form to capture UTM parameters and pass them as lead source data to your CRM.
- Map the form name or page URL field so you can track which form generated each lead.
- If the action platform supports tags, apply a tag matching the form name for easy segmentation.

## When to Use

- Capturing leads from contact forms and sending them directly to a CRM
- Growing an email list by connecting opt-in forms to email marketing platforms
- Logging all form submissions to a Google Sheet for team review
- Sending real-time lead notifications to Slack or WhatsApp
- Triggering a welcome email automation when someone fills out a form
- Writing data from external systems back into Bit Form entries
- Passing UTM data from forms into CRM contact records for attribution

## Related Integrations

- hubspot.md
- mailchimp.md
- google-sheets.md
- slack.md
- zapier.md
