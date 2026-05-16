# Calculated Fields Form

Calculated Fields Form is a WordPress form builder that specializes in forms with real-time calculations, making it ideal for building quote calculators, pricing estimators, loan calculators, and other forms where field values are computed dynamically. Available as a Trigger in the Bit Integrations WordPress plugin — fires a workflow when a form is submitted.

**Role:** Trigger
**Free Tier:** No
**Category:** Form Builders
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Calculated-Fields-Form.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on form submission |
| As Action | — | Not available as action |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | All form fields available for mapping to action platforms |

## Trigger Events

- Form submitted (all forms or specific form selection)

## What Data Gets Passed

When a form is submitted, Bit Integrations passes the following data to any connected action:

- All form field values (text, email, phone, textarea, dropdowns, checkboxes, file URLs)
- Calculated field results (computed totals, pricing estimates, etc.)
- Form ID and form name
- Submission timestamp
- Page URL where form was submitted
- Hidden field values (UTM source, UTM medium, UTM campaign, referrer, etc.)

## Connecting to Action Platforms

After selecting Calculated Fields Form as the trigger in Bit Integrations, connect it to any of these action platforms:

| Action Platform | Common Use Case |
|----------------|----------------|
| HubSpot | Create CRM contact with estimated deal value from calculator |
| Mailchimp / ActiveCampaign / MailerLite | Add subscriber and tag based on quote result |
| Google Sheets | Log submission with calculated totals as spreadsheet row |
| Slack | Send team notification on new quote request |
| Zapier / Make / n8n | Route to any downstream app |
| Pipedrive / Zoho CRM | Create deal with value from calculator result |
| Telegram / WhatsApp | Instant notification of new estimate request |

## Setup Steps

1. Install and activate Calculated Fields Form on your WordPress site.
2. Install and activate Bit Integrations (free from wordpress.org/plugins/bit-integrations/).
3. Create a calculator form in Calculated Fields Form and publish it on a page.
4. Go to Bit Integrations > Create Integration.
5. Select Calculated Fields Form as the trigger.
6. Select the specific form you want to connect (or "all forms").
7. Select your action platform (HubSpot, Mailchimp, Google Sheets, etc.).
8. Map the form fields (including calculated result fields) to the destination platform fields.
9. Save and test by submitting the form with real data.
10. Check the destination platform to confirm the data and calculated values arrived correctly.

## Field Mapping Tips

- Always map the email field — it is the primary identifier in most action platforms.
- Map calculated result fields (quote totals, estimates) to deal value or custom fields in your CRM.
- Use hidden fields in your form to capture UTM parameters and pass them as lead source data to your CRM.
- Map the form name or page URL field so you can track which calculator generated each lead.
- If the action platform supports tags, tag leads based on the estimated value range for sales prioritization.

## When to Use

- Capturing quote requests from pricing calculators and sending them to a CRM with deal value pre-filled
- Routing estimate submissions to the right sales team based on calculated project size
- Logging all calculator submissions to a Google Sheet with computed totals for pipeline reporting
- Sending real-time notifications when a high-value estimate is submitted
- Triggering a follow-up email sequence with the quote summary
- Passing UTM data from calculator forms into CRM contact records for attribution

## Related Integrations

- wsform.md
- hubspot.md
- mailchimp.md
- google-sheets.md
- slack.md
- zapier.md
