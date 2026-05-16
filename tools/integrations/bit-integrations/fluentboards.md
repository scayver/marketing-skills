# FluentBoards

FluentBoards is a WordPress-native project management plugin that provides kanban-style task and project boards directly within WordPress. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Fluent-Boards.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create tasks or cards in FluentBoards |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to FluentBoards task fields |

## Action Events

- Create task/card in a FluentBoards board

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and FluentBoards must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Support Form to FluentBoards Task
**Trigger:** WordPress support form submission
**Action:** Create a task in a FluentBoards support board with the issue details
**Use case:** Route WordPress support requests into a FluentBoards kanban board for team handling

### Recipe 2: Project Request to FluentBoards Project Card
**Trigger:** WordPress project inquiry form submission
**Action:** Create a FluentBoards card in the incoming projects board
**Use case:** Track new client project requests as cards in FluentBoards without leaving WordPress

### Recipe 3: WooCommerce Order to Order Board Task
**Trigger:** WooCommerce order placed
**Action:** Create a FluentBoards task in the order fulfillment board
**Use case:** Manage order fulfillment tasks visually in FluentBoards alongside other project work

## Setup Steps

1. Install Bit Integrations Pro and FluentBoards on your WordPress site.
2. In FluentBoards, create the target board and stage/column.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select FluentBoards as the Action.
6. Select the target board and stage.
7. Map fields to FluentBoards task fields.
8. Save and test.

## When to Use

- When your team uses FluentBoards for project management and wants WordPress form data to create tasks automatically
- When keeping project management entirely within WordPress without external tools
- When orders, support requests, or leads should flow into FluentBoards as trackable tasks

## Related Integrations

- asana.md
- clickup.md
- trello.md
- fluent-support.md
