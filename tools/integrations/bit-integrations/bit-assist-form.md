# Bit Assist Form

Bit Assist is a WordPress chat and support widget (made by the same team as Bit Integrations) that includes a built-in form inside the chat interface. Available as a Trigger in the Bit Integrations WordPress plugin — fires a workflow when a form is submitted through the Bit Assist chat widget.

**Role:** Trigger
**Free Tier:** Yes
**Category:** Form Builders
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/BitAssistForm1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on form submission inside the Bit Assist chat widget |
| As Action | — | Not available as action |
| Free Tier | ✓ | Free |
| Field Mapping | ✓ | All form fields available for mapping to action platforms |

## Trigger Events

- Form submitted inside the Bit Assist chat widget

## What Data Gets Passed

When a form is submitted, Bit Integrations passes the following data to any connected action:

- All form field values (text, email, phone, textarea, dropdowns, checkboxes, file URLs)
- Form ID and form name
- Submission timestamp
- Page URL where form was submitted
- Hidden field values (UTM source, UTM medium, UTM campaign, referrer, etc.)

## Connecting to Action Platforms

After selecting Bit Assist Form as the trigger in Bit Integrations, connect it to any of these action platforms:

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

1. Install and activate Bit Assist on your WordPress site.
2. Install and activate Bit Integrations (free from wordpress.org/plugins/bit-integrations/).
3. Create a form inside your Bit Assist widget and publish it on a page.
4. Go to Bit Integrations > Create Integration.
5. Select Bit Assist Form as the trigger.
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

- Capturing leads from contact forms inside the chat widget and sending them directly to a CRM
- Growing an email list by connecting chat opt-in forms to email marketing platforms
- Logging all widget form submissions to a Google Sheet for team review
- Sending real-time lead notifications to Slack or WhatsApp
- Triggering a welcome email automation when someone fills out the chat form
- Passing UTM data from chat forms into CRM contact records for attribution

## Related Integrations

- hubspot.md
- mailchimp.md
- google-sheets.md
- slack.md
- zapier.md
