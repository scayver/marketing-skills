# Forminator

Forminator is a free WordPress form, quiz, and poll builder by WPMU DEV, supporting contact forms, payment forms, quizzes, and polls in one plugin. Available as a Trigger in the Bit Integrations WordPress plugin — fires a workflow when a form, quiz, or poll is submitted.

**Role:** Trigger
**Free Tier:** No
**Category:** Form Builders
**Form Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Forminator_Form1.svg`
**Quiz and Poll Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Forminator-Form.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on form, quiz, or poll submission |
| As Action | — | Not available as action |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | All form fields available for mapping to action platforms |

## Trigger Events

- Form submitted (all forms or specific form selection)
- Quiz completed (quiz result data passed to connected action)
- Poll submitted (poll response data passed to connected action)

## What Data Gets Passed

When a form is submitted, Bit Integrations passes the following data to any connected action:

- All form field values (text, email, phone, textarea, dropdowns, checkboxes, file URLs)
- Form ID and form name
- Submission timestamp
- Page URL where form was submitted
- Hidden field values (UTM source, UTM medium, UTM campaign, referrer, etc.)
- Quiz score and result (when trigger is a quiz submission)
- Poll answer (when trigger is a poll submission)

## Connecting to Action Platforms

After selecting Forminator as the trigger in Bit Integrations, connect it to any of these action platforms:

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

1. Install and activate Forminator on your WordPress site.
2. Install and activate Bit Integrations (free from wordpress.org/plugins/bit-integrations/).
3. Create a form (or quiz/poll) in Forminator and publish it on a page.
4. Go to Bit Integrations > Create Integration.
5. Select Forminator Form (or Forminator Quiz And Poll) as the trigger.
6. Select the specific form you want to connect (or "all forms").
7. Select your action platform (HubSpot, Mailchimp, Google Sheets, etc.).
8. Map the form fields to the destination platform fields.
9. Save and test by submitting the form with real data.
10. Check the destination platform to confirm the data arrived correctly.

## Field Mapping Tips

- Always map the email field — it is the primary identifier in most action platforms.
- Use hidden fields in your form to capture UTM parameters and pass them as lead source data to your CRM.
- Map the form name or page URL field so you can track which form generated each lead.
- For quiz triggers, map the score or result field to a CRM property for lead segmentation.
- If the action platform supports tags, apply a tag matching the form name for easy segmentation.

## When to Use

- Capturing leads from contact forms and sending them directly to a CRM
- Growing an email list by connecting opt-in forms to email marketing platforms
- Logging all form submissions to a Google Sheet for team review
- Sending real-time lead notifications to Slack or WhatsApp
- Triggering segmented email sequences based on quiz results
- Passing UTM data from forms into CRM contact records for attribution

## Related Integrations

- hubspot.md
- mailchimp.md
- google-sheets.md
- slack.md
- zapier.md
