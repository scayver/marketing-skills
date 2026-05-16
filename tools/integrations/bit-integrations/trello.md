# Trello

Trello is a visual project management tool that organizes work into boards, lists, and cards. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Trello-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create cards, add labels, move cards in Trello |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Trello card fields |

## Action Events

- Create card
- Add label to card
- Move card to another list

## Authentication

- **Type**: API Key + Token
- **Required**: API key and token from https://trello.com/app-key. Enter both in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Contact Form to Trello Card
**Trigger:** WordPress contact form submission
**Action:** Create a Trello card in an inbox or leads list with contact details
**Use case:** Convert form submissions into Trello cards for visual tracking and team assignment

### Recipe 2: Bug Report Form to Bug Tracker Board
**Trigger:** WordPress bug report form submission
**Action:** Create a Trello card in the bug tracker board with description and priority label
**Use case:** Route bug reports directly into a Trello development board for triage

### Recipe 3: Order Completion to Fulfillment Board
**Trigger:** WooCommerce order completed
**Action:** Create a Trello card in the fulfillment board with order details
**Use case:** Visually track orders through fulfillment stages using Trello's kanban layout

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Trello as the Action.
5. Go to https://trello.com/app-key to get your API key and generate a token.
6. Enter both in Bit Integrations and select the target board and list.
7. Map fields: name, desc, due, idList, idBoard, idLabels.
8. Save and test.

## When to Use

- When your team uses Trello boards to manage incoming requests, leads, or orders
- When a visual kanban-style task board is preferred for tracking WordPress-sourced data
- When you want simple card creation from form submissions without complex configuration

## Related Integrations

- asana.md
- clickup.md
- notion.md
- google-sheets.md
