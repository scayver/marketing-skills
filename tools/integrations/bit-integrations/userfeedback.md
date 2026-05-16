# UserFeedback

UserFeedback is a WordPress on-site feedback survey widget that displays targeted survey popups and slide-ins to collect visitor opinions, NPS scores, and satisfaction ratings. Available as a Trigger in the Bit Integrations WordPress plugin — fires a workflow when a survey response is submitted.

**Role:** Trigger
**Free Tier:** No
**Category:** Form Builders
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/User-Feedback.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on survey/feedback form submission |
| As Action | — | Not available as action |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | All survey fields available for mapping to action platforms |

## Trigger Events

- Feedback survey submitted (all surveys or specific survey selection)
- NPS rating submitted
- Satisfaction rating submitted

## What Data Gets Passed

When a form is submitted, Bit Integrations passes the following data to any connected action:

- All survey field values (ratings, text responses, multiple choice answers)
- Survey ID and survey name
- Submission timestamp
- Page URL where survey was submitted
- Hidden field values (UTM source, UTM medium, UTM campaign, referrer, etc.)

## Connecting to Action Platforms

After selecting UserFeedback as the trigger in Bit Integrations, connect it to any of these action platforms:

| Action Platform | Common Use Case |
|----------------|----------------|
| HubSpot | Log NPS score or feedback on existing CRM contact |
| Mailchimp / ActiveCampaign / MailerLite | Tag subscriber based on satisfaction rating |
| Google Sheets | Log all feedback responses for analysis |
| Slack | Send team alert when negative feedback is submitted |
| Zapier / Make / n8n | Route to any downstream app |
| Pipedrive / Zoho CRM | Update deal or contact with customer rating |
| Telegram / WhatsApp | Instant notification of low NPS or critical feedback |

## Setup Steps

1. Install and activate UserFeedback on your WordPress site.
2. Install and activate Bit Integrations (free from wordpress.org/plugins/bit-integrations/).
3. Create a survey in UserFeedback and configure when and where it appears.
4. Go to Bit Integrations > Create Integration.
5. Select UserFeedback as the trigger.
6. Select the specific survey you want to connect (or "all surveys").
7. Select your action platform (HubSpot, Google Sheets, Slack, etc.).
8. Map the survey fields to the destination platform fields.
9. Save and test by submitting the survey with real data.
10. Check the destination platform to confirm the data arrived correctly.

## Field Mapping Tips

- Map the rating field to a CRM custom property to track satisfaction per contact.
- Use the page URL field to identify which page triggered the feedback.
- For NPS surveys, set up a conditional filter so Slack only alerts on scores below 7.
- Map the open-text response field to a notes field in your CRM for qualitative review.

## When to Use

- Routing negative feedback responses to a Slack channel for immediate follow-up
- Logging all NPS responses to a Google Sheet for trend analysis
- Tagging low-NPS contacts in an email marketing platform for a win-back campaign
- Updating CRM contact records with satisfaction scores after each survey response
- Triggering a customer success outreach when a detractor score is submitted

## Related Integrations

- hubspot.md
- mailchimp.md
- google-sheets.md
- slack.md
- zapier.md
