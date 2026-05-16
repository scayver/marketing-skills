# Asana

Asana is a work management platform for tracking tasks, projects, and team workflows. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Asana1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create or update tasks in Asana |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Asana task fields |

## Action Events

- Create task
- Update task

## Authentication

- **Type**: API Key (Personal Access Token)
- **Required**: Personal Access Token from Asana (Profile > Apps > Manage Developer Apps). Enter in Bit Integrations along with target workspace and project.

## Common Workflow Recipes

### Recipe 1: Contact Form to Asana Task
**Trigger:** WordPress contact or support form submission
**Action:** Create an Asana task with the submitter's details and message
**Use case:** Route form inquiries directly into Asana as actionable tasks for the team

### Recipe 2: WooCommerce Order to Fulfillment Task
**Trigger:** WooCommerce order placed
**Action:** Create an Asana task in the fulfillment project with order details
**Use case:** Trigger manual fulfillment or review tasks in Asana for each new order

### Recipe 3: Job Application Form to Hiring Project Task
**Trigger:** Job application form submission
**Action:** Create an Asana task in the recruiting project with applicant name and details
**Use case:** Track incoming job applications as tasks in the hiring pipeline

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Asana as the Action.
5. In Asana, go to Profile > Apps > Manage Developer Apps and create a Personal Access Token.
6. Enter the token in Bit Integrations and select the target workspace and project.
7. Map fields: name, notes, due_date, assignee, projects, workspace.
8. Save and test.

## When to Use

- When form submissions or WooCommerce events should create trackable tasks in Asana
- When your team manages work in Asana and needs WordPress data to flow in automatically
- When routing support requests, leads, or orders into a structured Asana project

## Related Integrations

- clickup.md
- trello.md
- notion.md
- google-sheets.md
