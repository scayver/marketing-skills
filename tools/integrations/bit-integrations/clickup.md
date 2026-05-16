# ClickUp

ClickUp is an all-in-one project management and productivity platform with tasks, docs, goals, and custom views. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ClickUp1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create or update tasks in ClickUp |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to ClickUp task fields including custom fields |

## Action Events

- Create task
- Update task

## Authentication

- **Type**: API Key (Personal API Token)
- **Required**: Personal API token from ClickUp (Profile avatar > Apps > API Token). Enter in Bit Integrations along with target team, space, folder, and list.

## Common Workflow Recipes

### Recipe 1: Lead Form to ClickUp Sales Pipeline Task
**Trigger:** WordPress lead form submission
**Action:** Create a ClickUp task in the sales pipeline list with lead details
**Use case:** Populate the sales pipeline in ClickUp automatically from website lead captures

### Recipe 2: Support Request to ClickUp Help Desk List
**Trigger:** WordPress support form submission
**Action:** Create a ClickUp task in the support list with issue details and priority
**Use case:** Manage support requests as ClickUp tasks with status tracking and assignment

### Recipe 3: WooCommerce Order to Order Management Task
**Trigger:** WooCommerce order placed
**Action:** Create a ClickUp task in the order fulfillment list with order number and details
**Use case:** Track each order as a task in ClickUp for teams managing fulfillment manually

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select ClickUp as the Action.
5. In ClickUp, go to Profile avatar > Apps > API Token and copy your personal token.
6. Enter the token in Bit Integrations and select the target list.
7. Map fields: name, description, due_date, assignees, list_id, status, priority, custom_fields.
8. Save and test.

## When to Use

- When your team tracks work in ClickUp and needs WordPress data to create tasks automatically
- When building a lead-to-task or order-to-task pipeline with ClickUp as the destination
- When you need to pass custom field data from forms into ClickUp task custom fields

## Related Integrations

- asana.md
- trello.md
- notion.md
- airtable.md
