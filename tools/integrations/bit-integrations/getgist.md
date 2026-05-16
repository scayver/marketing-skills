# GetGist

GetGist is a customer messaging and email marketing platform combining live chat, email automation, and CRM tools for growing SaaS and service businesses. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/GetGist.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create contact, add tag |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Create contact
- Add tag to contact
- Update contact fields

## Authentication

- **Type**: API Key
- **Where to get credentials**: GetGist account settings > API section
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Name | Contact full name | Optional |
| Phone | Contact phone number | Optional |
| Tags | Tags to apply to the contact | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Create contact in GetGist and apply a welcome tag
**Key fields mapped:** Email, Name
**Use case:** Automatically grow your contact base when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Create contact in GetGist with buyer tag
**Key fields mapped:** Email, Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Create contact in GetGist with enrollment tag
**Key fields mapped:** Email, Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select GetGist as the action.
5. Connect your GetGist account using your API Key.
6. Configure the contact action and tags to apply.
7. Map the email field and any name or tag fields.
8. Save and test with a real form submission.

## When to Use

- Growing a contact base from WordPress form submissions automatically
- Segmenting new contacts by lead source using tags
- Syncing WooCommerce buyers to GetGist for post-purchase messaging
- Adding new members or course students to onboarding email sequences
- Replacing manual CSV imports from WordPress to your customer messaging platform

## Related Integrations

- activecampaign.md
- encharge.md
- mailchimp.md
