# Roadmap

This roadmap focuses on making Marketing Skills OS the most useful open-source Marketing OS for AI agents.

The project keeps the `scayver/marketing-skills` install path for compatibility.

## Roadmap Principles

- Build for real marketing work, not prompt demos.
- Keep everything local-first, inspectable, and agent-readable.
- Prefer durable workflows over one-off prompts.
- Make every skill, integration guide, CLI helper, and template easier to validate.
- Keep the install path stable while the OS layer becomes more capable.
- Avoid adding dependencies unless they unlock clear value.

## Current Foundation

| Area | Status | What Exists Today |
|------|--------|-------------------|
| Skills | Shipped | 71 marketing and growth skills with structured activation and output standards |
| Integration guides | Shipped | 347 standalone platform references for APIs, webhooks, SDKs, auth, fields, and operations |
| CLI helpers | Shipped | 62 zero-dependency JavaScript helpers for common marketing platforms |
| Marketing OS skill | Shipped | `marketing-os` routes broad marketing goals into workflows, skills, tools, metrics, and next actions |
| Local workspace | Shipped | `.marketing-os/` initializer, templates, active workflow files, reviews, and snapshots |
| Dashboard layer | Shipped | Generated Markdown dashboard and static HTML dashboard |
| Outcome index | Shipped | Generated routing index by workflow, stage, deliverable, metric, integration, and CLI |
| First-run guide | Shipped | `docs/GETTING_STARTED.md` with checklist, workflow picker, quickstart prompts, troubleshooting, and dashboard links |
| Social launch system | Shipped | Social post library, category posts, launch-week posts, and 30-day posting calendar |
| Validation | Shipped | Local validator and GitHub Actions workflow for repo coherence |

## Recently Shipped

The latest local work expanded the OS from 59 to 71 skills and improved dashboard visibility.

| Area | Shipped Update | Why It Matters |
|------|----------------|----------------|
| Prospecting | Added `prospecting` | Gives agents a dedicated lead-list and qualification workflow before outreach |
| SMS | Added `sms` | Adds compliant SMS and MMS campaign planning, opt-in, STOP, HELP, and A2P 10DLC guidance |
| Research | Added `market-research` and `competitive-teardown` | Improves category, sizing, segmentation, and product intelligence workflows |
| Content engines | Added `podcast-pipeline`, `yt-competitive-analysis`, and `content-humanizer` | Expands multi-channel repurposing, YouTube strategy, and AI-pattern cleanup |
| Brand systems | Added `brand-guidelines` | Makes brand voice, visual identity, and governance easier for agents to apply |
| Measurement | Added `social-media-analyzer` | Adds ROI and performance analysis for social content, not only post creation |
| Safety and quality | Added `skill-security-auditor`, `a11y-audit`, and `env-secrets-manager` | Improves imported-skill safety, frontend accessibility, and credential hygiene |
| Dashboard | Added OS Layer Skill Coverage to generated Markdown and HTML dashboards | Makes supporting skills visible even when they are not attached to workflow cards |
| First-run UX | Expanded `docs/GETTING_STARTED.md` with a decision tree and first prompt chooser | Helps new users choose the right workflow faster |
| Examples | Added `docs/EXAMPLE_WORKFLOWS.md` with six end-to-end workflow examples | Shows how skills, integrations, CLIs, deliverables, and metrics work together |
| Validation | Added manifest coverage, integration-section, and social CSV quality checks | Catches missing skill routing, stale tool references, thin integration guides, and malformed social assets |
| Contributor readiness | Expanded `CONTRIBUTING.md` with asset-specific checklists | Gives contributors clearer rules for skills, integrations, CLIs, and examples |

## Next Priority Stack

These are the highest-value next updates.

| Priority | Workstream | Recommended Next Move | Success Signal |
|----------|------------|-----------------------|----------------|
| 1 | First-run UX | Add screenshots or GIF-ready command sequences for the 7 OS workflows | A new user can see the workflow loop before running it |
| 2 | Skill quality | Add realistic examples and quality checks to `product-marketing`, `marketing-os`, `prospecting`, `landing-page-cro`, and `email-marketing` | High-use skills produce less generic first drafts |
| 3 | Tool guide reliability | Add official docs links, auth failure notes, and safe-operation notes to high-use integration guides | Tool references become safer for agent execution |
| 4 | CLI consistency | Enforce `--help`, `--json`, and `--dry-run` consistency for CLI helpers | Agents can call CLIs with predictable outputs |
| 5 | Examples | Add rendered artifacts for each example workflow | GitHub visitors can see complete end-to-end outputs |
| 6 | Community readiness | Add pull request checklist sections by asset type | Contributors know how reviewers will evaluate each change |

## Phase 1: Make The OS Easier To Start

Goal: help a new user install the repo, understand what to do first, and get value in the first 10 minutes.

### Planned Improvements

- Expand `GETTING_STARTED.md` with screenshots or rendered previews of the dashboard outputs.
- Add short demo videos or GIF-ready command sequences for the 7 OS workflows.
- Add more copy-paste examples for first-run prompts by business type.

### Success Criteria

- A new user can install Marketing Skills OS and run one workflow without reading the whole README.
- The README points clearly to one first action.
- Each workflow has a copy-paste start prompt and expected deliverables.
- The first-run path handles users with blank `.marketing-os/product-context.md` gracefully. *(Shipped)*

## Phase 2: Improve Skill Quality And Coverage

Goal: make every skill more useful, more specific, and easier for agents to route correctly.

### Priority Skill Refinements

- Strengthen `product-marketing` as the root context skill.
- Tighten `marketing-os` routing rules and readiness gates.
- Connect `prospecting` and `prospect-research` more tightly so lead list building, account research, and developer-intent workflows route cleanly.
- Add examples to `sms` for opt-in flows, STOP and HELP handling, cart recovery, event reminders, and win-back.
- Add examples to `market-research` for TAM SAM SOM, segmentation, survey plans, and interview synthesis.
- Add examples to `competitive-teardown` for pricing, UX, reviews, hiring signals, and action prioritization.
- Add examples to `content-humanizer` that show before, diagnosis, rewrite, and residual risk.
- Add examples to `a11y-audit` that connect accessibility issues to conversion and user impact.
- Expand `local-seo` with location page QA, review mining, Google Business Profile checks, and service-area templates.
- Improve `seo-content-strategy` with clearer SERP analysis, cluster mapping, and content gap workflows.
- Improve `landing-page-cro` with before-and-after examples, page-section scoring, and test prioritization.
- Improve `email-marketing` with lifecycle campaign maps and segmentation examples.
- Improve `analytics` with event taxonomy, attribution notes, and dashboard QA checks.

### Candidate New Skills

| Skill | Why It Matters |
|-------|----------------|
| `newsletter-growth` | Covers newsletter positioning, referral loops, editorial calendars, and sponsor readiness |
| `founder-led-sales` | Connects founder positioning, outbound, content, and sales conversations |
| `agency-operations` | Helps agencies turn Marketing Skills OS into client delivery workflows |
| `client-onboarding` | Creates intake, kickoff, access, timeline, and expectation-setting systems |
| `marketing-data-qa` | Validates tracking plans, field naming, attribution, and dashboard inputs |
| `partnerships-pipeline` | Turns co-marketing and partner research into a repeatable pipeline workflow |
| `case-study-writer` | Converts customer proof into sales, SEO, PR, and lifecycle assets |
| `offer-design` | Helps users structure offers, guarantees, bonuses, bundles, and pricing logic |

### Success Criteria

- High-use skills include realistic examples and quality checks.
- Broad prompts route reliably to the right starting skill.
- Every major workflow has clear "do this first" and "do this next" instructions.

## Phase 3: Upgrade Tool And Integration Guides

Goal: make tool references reliable enough for agents to plan real platform work without guessing.

### Planned Improvements

- Add official documentation links to every integration guide.
- Add environment variable naming recommendations where relevant.
- Add authentication failure notes and common error responses.
- Add webhook payload examples for high-use platforms.
- Add pagination, rate-limit, and retry behavior where public docs define them.
- Add field mapping notes for CRMs, email platforms, analytics tools, and forms.
- Add "agent-safe operation" notes for destructive API calls.
- Add a generated integration index grouped by category, auth type, API availability, and relevant skills.
- Add a "safe operations" section for APIs that can create, update, delete, send, publish, or bill.
- Expand the minimum reference schema beyond the currently enforced core sections.

### Priority Guide Categories

- CRM and sales platforms.
- Email and lifecycle marketing platforms.
- Analytics, product analytics, and attribution tools.
- SEO and content intelligence tools.
- Ads platforms.
- Forms, surveys, and lead capture tools.
- WordPress and ecommerce plugins.
- Automation platforms and webhooks.

### Success Criteria

- Agents can identify auth type, endpoint pattern, common operations, and limits from each guide.
- Tool guides are independent, platform-specific, and not framed around any single integration plugin.
- Validation can detect incomplete or malformed integration guide sections.

## Phase 4: Make CLI Helpers More Useful

Goal: turn the CLI folder into practical, scriptable marketing operations.

### Planned Improvements

- Add a standard CLI output schema across all helper tools.
- Add `--json`, `--dry-run`, and `--help` consistency checks.
- Add example commands for every CLI in `tools/clis/README.md`.
- Add environment variable documentation per CLI.
- Add safer failure messages for missing credentials.
- Add sample workflows that combine a CLI result with a skill output.
- Add fixture-based tests for high-use CLIs.
- Add a CLI compatibility matrix in `tools/clis/README.md`.
- Add examples that show how agents should pass CLI output into skill workflows.

### Candidate New CLI Helpers

| CLI | Purpose |
|-----|---------|
| `workflow-score.js` | Score a workflow plan against required context, deliverables, tools, and metrics |
| `content-gap.js` | Compare planned content topics against existing files or CSV exports |
| `campaign-brief.js` | Generate a campaign brief skeleton from product context and workflow id |
| `repo-audit.js` | Check Marketing Skills OS installs inside another local project |
| `social-calendar.js` | Turn the social post library into a dated posting plan |

### Success Criteria

- CLI helpers produce predictable JSON for agent consumption.
- Missing credential errors are clear and non-destructive.
- Users can combine scripts with `.marketing-os/` templates without extra setup.

## Phase 5: Improve Generated Indexes And Dashboards

Goal: make the repo easier to browse by outcome, stage, asset type, tool, and next action.

### Shipped

- Generated dashboard.
- Generated outcome index.
- Dashboard check mode.
- Outcome index check mode.
- OS Layer Skill Coverage in Markdown and HTML dashboard outputs.
- Manifest coverage validation for every skill.
- Stale workflow skill, integration, and CLI reference validation.
- Social post CSV quality validation.

### Planned Improvements

- Add a generated skill index by category, trigger, workflow stage, and related tools.
- Add a generated integration index by category, auth type, API availability, and relevant workflows.
- Add a generated CLI index with command examples and required environment variables.
- Add dashboard filters to the static HTML output.
- Add anchor-safe links for every workflow, skill, integration, and CLI.
- Add generated skill, integration, and CLI indexes beyond the current dashboard and outcome index.
- Add a human-readable coverage report in addition to validation failures.

### Success Criteria

- Users can browse the OS without knowing exact skill names.
- Agents can route from a business goal to a workflow, then to skills, integrations, CLIs, templates, and metrics.
- Generated files remain reproducible from local source files.

## Phase 6: Add Real-World Examples

Goal: prove what the OS can do with realistic scenarios and copy-pasteable artifacts.

### Planned Examples

- SaaS launch command center.
- Developer-intent outbound workflow.
- Local SMB lead-generation workflow.
- Ecommerce product launch workflow.
- SEO growth workflow.
- Landing page conversion review. *(Shipped in `docs/EXAMPLE_WORKFLOWS.md`)*
- Weekly marketing review.
- Founder authority content plan.
- Agency client delivery workflow.
- SMS lifecycle campaign.
- Competitive teardown to landing page rewrite.
- Podcast episode to 7-day content engine.
- Social performance review to next-month content plan.
- Accessibility audit to CRO fix backlog.

### Example Format

Each example should include:

- Business context.
- Starting prompt.
- Skills used.
- Tool guides used.
- CLI helpers used, if any.
- Deliverables produced.
- Metrics to review.
- What to do next.

### Success Criteria

- Examples show full workflows, not isolated prompt outputs.
- Users can copy an example and adapt it to their project.
- Examples make the repo easier to understand from GitHub alone.

## Phase 7: Contribution And Community Readiness

Goal: make it easy for contributors to improve the OS without breaking consistency.

### Planned Improvements

- Add contribution templates for new skills, tool guides, CLI helpers, and examples.
- Add style and quality checklists for each asset type.
- Add issue labels for skill requests, integration requests, CLI requests, docs, examples, validation, and good first issues.
- Add a contributor guide section on how to choose between a skill, tool guide, CLI, or example.
- Add review criteria for accepting new marketing frameworks or platform references.

### Success Criteria

- Contributors know exactly what kind of asset to add.
- New files follow local conventions.
- Validation catches common mistakes before review.

## Quality And Validation Roadmap

Validation should become stricter over time without making contribution painful.

### Planned Checks

- Skill frontmatter schema validation.
- Skill section requirements.
- Integration guide section requirements.
- CLI help and dry-run checks.
- Local link checks across generated social assets.
- Generated index freshness checks.
- Count consistency checks across README, dashboard, registry, and validation docs.
- Markdown whitespace and formatting checks.
- Optional spelling and terminology checks for public docs.
- Dashboard coverage checks for all manifest-layer skills. *(Shipped)*
- CSV quality checks for social post categories, install commands, and repo URLs. *(Shipped)*
- New skill duplicate-overlap check against existing skill descriptions.
- Secret-pattern scans for skills, docs, examples, and CLI fixtures.

## Non-Goals

These are not priorities right now:

- A hosted SaaS version.
- Paid cloud sync.
- Heavy frontend framework dependencies.
- A database-backed dashboard.
- Renaming the package or install path.
- Replacing existing agent skill standards with a custom format.

## How To Contribute

Useful contributions include:

- Better examples for existing skills.
- Official API documentation links for integration guides.
- Safer auth and rate-limit notes.
- More realistic workflow prompts.
- New CLI helpers with predictable JSON output.
- Validation improvements.
- Before-and-after examples from real marketing work.

Start with:

- [`CONTRIBUTING.md`](../CONTRIBUTING.md).
- [`VALIDATION.md`](../VALIDATION.md).
- [`docs/MARKETING_OS.md`](MARKETING_OS.md).
- [`docs/MARKETING_OS_DASHBOARD.md`](MARKETING_OS_DASHBOARD.md).

## Release Themes

| Release Theme | Focus |
|---------------|-------|
| Usability | First-run guide, quickstart prompts, workflow decision tree |
| Quality | Stronger skill examples, stricter validation, better tool guide structure |
| Execution | More CLI workflows, campaign briefs, social calendars, content gap helpers |
| Navigation | Generated skill, integration, CLI, and outcome indexes |
| Proof | Real examples, demo workflows, showcases, before-and-after artifacts |
