# Security Policy

## Reporting a Vulnerability

If you find a security issue in a CLI helper, integration guide, workflow, or documentation example, please open a GitHub issue with the `bug` label or contact the maintainer privately if public disclosure would expose credentials or user data.

Do not include live API keys, access tokens, private customer data, or production secrets in an issue, pull request, screenshot, or example output.

## Secret Handling

This repository is designed so API credentials stay outside the repo.

- CLI helpers read credentials from environment variables.
- `.env` files are ignored by git.
- Documentation examples must use placeholder tokens such as `{api_key}` or `***`.
- Pull requests should not include real request logs with authorization headers.

## Supported Versions

The latest commit on `main` is the supported version. Older tags or forks may not receive fixes.

## Maintainer

Created and maintained by Alain Dorcelus (ScayverGraphix).

Support the work: [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain) or CashApp $AlainDorcelus.
