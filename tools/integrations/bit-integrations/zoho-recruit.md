# Zoho Recruit

Zoho Recruit is an applicant tracking system (ATS) for managing candidates, job openings, and hiring pipelines. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Zoho-Recruit.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create candidates and contacts in Zoho Recruit |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Zoho Recruit candidate and contact fields |

## Action Events

- Create candidate
- Create contact

## Authentication

- **Type**: OAuth 2.0
- **Required**: Authorize Bit Integrations via Zoho OAuth. Select the target Zoho Recruit account and job opening.

## Common Workflow Recipes

### Recipe 1: Job Application Form to Zoho Recruit Candidate
**Trigger:** WordPress job application form submission
**Action:** Create a new candidate in Zoho Recruit with name, email, phone, and experience details
**Use case:** Route all web-based job applications directly into Zoho Recruit for ATS tracking

### Recipe 2: Resume Upload Form to Candidate Record
**Trigger:** WordPress form with resume file upload
**Action:** Create a Zoho Recruit candidate record with applicant details
**Use case:** Capture and organize incoming resumes from a WordPress careers page into your ATS

### Recipe 3: Recruitment Event Registration to Candidate Contact
**Trigger:** Job fair or recruitment event registration form
**Action:** Create a Zoho Recruit contact for follow-up
**Use case:** Convert recruitment event attendees into Zoho Recruit contacts for the talent pipeline

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Zoho Recruit as the Action.
5. Authorize Bit Integrations with your Zoho account.
6. Select the target job opening or module.
7. Map fields: Last_Name, Email, Phone, Experience_in_Years, Current_Job_Description.
8. Save and test.

## When to Use

- When your careers page or job application forms should automatically feed Zoho Recruit
- When managing candidate pipelines in Zoho Recruit and using WordPress as the public-facing intake form
- When recruitment events use WordPress forms for registration and you want attendees in Zoho Recruit

## Related Integrations

- zoho-crm.md
- zoho-flow.md
- airtable.md
- google-sheets.md
