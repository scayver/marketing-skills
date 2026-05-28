# GitHub

Developer platform and source code network for repository activity, open-source signals, developer intent, and project metadata.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API and GraphQL API for repositories, users, organizations, stars, forks, subscribers, issues, and events |
| MCP | ✓ | Available through GitHub MCP servers and GitHub-connected agent environments |
| CLI | ✓ | Official `gh` CLI plus this repo's `tools/clis/github-prospects.js` helper |
| SDK | ✓ | Octokit for JavaScript plus community SDKs for other languages |

## Authentication

- **Type**: Personal access token, fine-grained token, GitHub App token, or OAuth token.
- **Header**: `Authorization: Bearer {token}`.
- **Get token**: GitHub Settings > Developer settings > Personal access tokens.
- **Environment variable**: `GITHUB_TOKEN` or `GH_TOKEN`.

Public repository reads can work without a token, but authenticated requests have higher rate limits and better reliability.

## Common Agent Operations

### Repository summary

```bash
GET https://api.github.com/repos/owner/repo
Authorization: Bearer {token}
Accept: application/vnd.github+json
X-GitHub-Api-Version: 2026-03-10
```

### Stargazers with starred dates

```bash
GET https://api.github.com/repos/owner/repo/stargazers?per_page=100&page=1
Authorization: Bearer {token}
Accept: application/vnd.github.star+json
X-GitHub-Api-Version: 2026-03-10
```

### Forks

```bash
GET https://api.github.com/repos/owner/repo/forks?sort=newest&per_page=100&page=1
Authorization: Bearer {token}
Accept: application/vnd.github+json
X-GitHub-Api-Version: 2026-03-10
```

### Watchers as subscribers

```bash
GET https://api.github.com/repos/owner/repo/subscribers?per_page=100&page=1
Authorization: Bearer {token}
Accept: application/vnd.github+json
X-GitHub-Api-Version: 2026-03-10
```

GitHub's `watchers_count` field often mirrors `stargazers_count`. Use the subscribers endpoint when you need people who chose to watch repository notifications.

### User profile

```bash
GET https://api.github.com/users/octocat
Authorization: Bearer {token}
Accept: application/vnd.github+json
X-GitHub-Api-Version: 2026-03-10
```

### User repositories

```bash
GET https://api.github.com/users/octocat/repos?type=owner&sort=updated&per_page=100
Authorization: Bearer {token}
Accept: application/vnd.github+json
X-GitHub-Api-Version: 2026-03-10
```

## CLI Commands

### Repository intent summary

```bash
GITHUB_TOKEN=ghp_xxx node tools/clis/github-prospects.js repo summary --repo owner/repo
```

### Export developer-intent prospects

```bash
GITHUB_TOKEN=ghp_xxx node tools/clis/github-prospects.js prospects export --repo owner/repo --signals stargazers,forks,watchers --limit 300
```

### List stargazers

```bash
node tools/clis/github-prospects.js stargazers list --repo owner/repo --limit 100
```

### List forks

```bash
node tools/clis/github-prospects.js forks list --repo owner/repo --limit 100
```

### List watchers

```bash
node tools/clis/github-prospects.js watchers list --repo owner/repo --limit 100
```

## Key Fields

### Repository Fields

- `full_name` - Repository identifier in `owner/repo` format.
- `html_url` - Public repository URL.
- `description` - Repository description.
- `topics` - Repository topic tags.
- `language` - Primary detected language.
- `stargazers_count` - Number of stars.
- `forks_count` - Number of forks.
- `subscribers_count` - Number of notification watchers.
- `pushed_at` - Last push timestamp.
- `created_at` - Repository creation timestamp.
- `updated_at` - Last metadata update timestamp.

### Developer-Intent Fields

- `login` - GitHub username or organization name.
- `type` - `User` or `Organization`.
- `html_url` - Public profile URL.
- `signal` - `stargazer`, `fork`, or `watcher`.
- `starred_at` - Timestamp when available through the stargazer media type.
- `fork.full_name` - Fork repository name.
- `fork.pushed_at` - Last activity on the fork.
- `signal_count` - Number of matched intent signals for a user.

## Parameters

- `owner` - Repository owner or organization.
- `repo` - Repository name.
- `per_page` - Page size. Maximum 100 for most list endpoints.
- `page` - Page number for pagination.
- `sort` - Fork sorting mode, commonly `newest`, `oldest`, or `stargazers`.
- `signals` - Comma-separated list for the local CLI: `stargazers`, `forks`, `watchers`.
- `limit` - Maximum rows to return per signal in the local CLI.

## When to Use

- Developer-intent research for SaaS and DevTools products.
- Open-source community analysis.
- Prospecting from competitor or adjacent repository stargazers.
- Finding users who forked a project and may have implementation intent.
- Prioritizing accounts from public technical interest signals.
- Enriching account research before `cold-email` or `linkedin-strategy`.
- Measuring launch traction from stars, forks, and watchers.

## Rate Limits

- Unauthenticated REST API requests usually allow 60 requests per hour per IP.
- Authenticated REST API requests usually allow 5,000 requests per hour for a user token.
- GitHub App and enterprise limits vary by installation and plan.
- Search endpoints have stricter limits than normal repository endpoints.
- Always check response headers such as `x-ratelimit-remaining` and `x-ratelimit-reset` before running large exports.

## Compliance Notes

- Use public GitHub activity as a fit or intent signal, not as standalone permission to contact someone.
- Respect GitHub Terms of Service and API rate limits.
- Do not scrape private, restricted, or access-controlled data.
- Before outreach, check CAN-SPAM, GDPR, CASL, platform rules, and suppression lists.
- Keep a source URL and collection timestamp for every exported prospect.

## Relevant Skills

- prospect-research
- cold-email
- linkedin-strategy
- revops
- sales-enablement
- community-marketing
- launch
- directory-submissions
