# Booking Calendar Contact Form

Booking Calendar Contact Form is a WordPress plugin that combines a booking calendar with a built-in contact form, allowing visitors to select available dates and submit booking requests in a single form. Available as a Trigger in the Bit Integrations WordPress plugin — fires a workflow when a booking form is submitted.

**Role:** Trigger
**Free Tier:** No
**Category:** Form Builders
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Booking-Calender-.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on booking form submission |
| As Action | — | Not available as action |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | All form fields available for mapping to action platforms |

## Trigger Events

- Booking form submitted (all forms or specific form selection)
- Booking request received with selected date and time

## What Data Gets Passed

When a form is submitted, Bit Integrations passes the following data to any connected action:

- All form field values (text, email, phone, textarea, dropdowns, checkboxes, file URLs)
- Selected booking date and time
- Form ID and form name
- Submission timestamp
- Page URL where form was submitted
- Hidden field values (UTM source, UTM medium, UTM campaign, referrer, etc.)

## Connecting to Action Platforms

After selecting Booking Calendar Contact Form as the trigger in Bit Integrations, connect it to any of these action platforms:

| Action Platform | Common Use Case |
|----------------|----------------|
| HubSpot | Create CRM contact from booking data |
| Mailchimp / ActiveCampaign / MailerLite | Add subscriber and trigger booking confirmation sequence |
| Google Sheets | Log booking request as spreadsheet row |
| Slack | Send team notification on new booking request |
| Zapier / Make / n8n | Route to any downstream app |
| Pipedrive / Zoho CRM | Create deal or lead record from booking |
| Telegram / WhatsApp | Instant booking notification to phone |

## Setup Steps

1. Install and activate Booking Calendar Contact Form on your WordPress site.
2. Install and activate Bit Integrations (free from wordpress.org/plugins/bit-integrations/).
3. Create a booking calendar form and publish it on a page.
4. Go to Bit Integrations > Create Integration.
5. Select Booking Calendar Contact Form as the trigger.
6. Select the specific form you want to connect (or "all forms").
7. Select your action platform (HubSpot, Mailchimp, Google Sheets, etc.).
8. Map the form fields (including date/time fields) to the destination platform fields.
9. Save and test by submitting a booking with real data.
10. Check the destination platform to confirm the data arrived correctly.

## Field Mapping Tips

- Always map the email field — it is the primary identifier in most action platforms.
- Map the selected date and time fields to CRM properties so sales teams see the requested appointment.
- Use hidden fields in your form to capture UTM parameters and pass them as lead source data to your CRM.
- If the action platform supports tags, tag the contact with the booking type or service requested.

## When to Use

- Sending booking request data to a CRM for follow-up and confirmation
- Triggering a booking confirmation email sequence via an email marketing platform
- Logging all booking requests in a Google Sheet for scheduling review
- Sending real-time booking alerts to Slack or WhatsApp for the service team
- Creating CRM deals or leads directly from booking form submissions
- Passing UTM data from booking forms into CRM contact records for attribution

## Related Integrations

- hubspot.md
- mailchimp.md
- google-sheets.md
- slack.md
- zapier.md
