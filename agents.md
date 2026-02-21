# Agent Guidelines

This document defines the rules and workflows that all agents must follow when contributing to this project. These are not suggestions — they are requirements.

-----

## Git Flow Branching Strategy

This project enforces **Git Flow**. No exceptions.

### The Golden Rule

**Never commit directly to `main` or `dev`.** These branches are protected. All work must happen on dedicated branches and be merged in via pull request or explicit merge commit.

-----

## Branch Types

### `main`

The production branch. Reflects what is live. Only receives merges from `dev` (via a release) or from a `hotfix/*` branch. Never commit here directly.

### `dev`

The integration branch. All completed feature and bugfix work lands here first. Never commit here directly.

### `feature/*`

For all new functionality. Branch off `dev`, merge back into `dev`.

```
git checkout dev
git pull origin dev
git checkout -b feature/my-feature-name
```

### `bugfix/*`

For non-critical bug fixes discovered during development. Branch off `dev`, merge back into `dev`.

```
git checkout dev
git pull origin dev
git checkout -b bugfix/issue-description
```

### `hotfix/*`

For critical production bugs that cannot wait for the next release cycle. Branch off `main`, merge into **both** `main` and `dev`.

```
git checkout main
git pull origin main
git checkout -b hotfix/critical-issue-description
```

### `release/*`

For release preparation (version bumps, changelogs, final QA). Branch off `dev`, merge into both `main` and `dev`.

```
git checkout dev
git pull origin dev
git checkout -b release/v1.2.0
```

-----

## Worktrees

When parallel workstreams are needed — such as working on a bugfix while a feature is in progress — use **git worktrees** rather than stashing or context-switching on the same working tree.

```bash
# Add a worktree for a bugfix without disturbing current work
git worktree add ../project-bugfix-login bugfix/login-null-pointer

# List active worktrees
git worktree list

# Remove a worktree when done
git worktree remove ../project-bugfix-login
```

Each worktree must still follow the same branching rules. Do not create a worktree that points to `main` or `dev` for development purposes.

-----

## Commit Standards

Commits must be **meaningful and atomic**. Each commit should represent a single logical change. Do not bundle unrelated changes into one commit, and do not commit broken or half-finished work unless explicitly marked as WIP.

This project uses **[Gitmoji](https://gitmoji.dev/) Semantic Commits** — a standardized format that combines conventional commit types with emoji for fast visual scanning of history.

### Commit Message Format

```
<emoji> <type>(<scope>): <short summary>

<optional body explaining the why, not the what>

<optional footer: references, breaking changes>
```

### Gitmoji Type Reference

|Emoji|Code                     |Type      |Use When                                  |
|-----|-------------------------|----------|------------------------------------------|
|✨    |`:sparkles:`             |`feat`    |Introducing a new feature                 |
|🐛    |`:bug:`                  |`fix`     |Fixing a bug                              |
|🚑️    |`:ambulance:`            |`hotfix`  |Critical production fix                   |
|♻️    |`:recycle:`              |`refactor`|Refactoring code without changing behavior|
|📝    |`:memo:`                 |`docs`    |Adding or updating documentation          |
|✅    |`:white_check_mark:`     |`test`    |Adding or updating tests                  |
|🔧    |`:wrench:`               |`chore`   |Configuration, tooling, or build changes  |
|⚡️    |`:zap:`                  |`perf`    |Improving performance                     |
|🎨    |`:art:`                  |`style`   |Improving code structure or formatting    |
|🔒️    |`:lock:`                 |`security`|Fixing a security issue                   |
|🚀    |`:rocket:`               |`deploy`  |Deployment-related changes                |
|💄    |`:lipstick:`             |`ui`      |Updating UI or styles                     |
|🗃️    |`:card_file_box:`        |`db`      |Database-related changes                  |
|➕    |`:heavy_plus_sign:`      |`deps`    |Adding a dependency                       |
|➖    |`:heavy_minus_sign:`     |`deps`    |Removing a dependency                     |
|⬆️    |`:arrow_up:`             |`deps`    |Upgrading dependencies                    |
|⬇️    |`:arrow_down:`           |`deps`    |Downgrading dependencies                  |
|🔥    |`:fire:`                 |`remove`  |Removing code or files                    |
|🚧    |`:construction:`         |`wip`     |Work in progress (do not merge)           |
|⏪️    |`:rewind:`               |`revert`  |Reverting changes                         |
|💡    |`:bulb:`                 |`comment` |Adding or updating source code comments   |
|🌐    |`:globe_with_meridians:` |`i18n`    |Internationalization or localization      |
|🏗️    |`:building_construction:`|`arch`    |Making architectural changes              |

### Examples

```
✨ feat(auth): add OAuth2 login support

Replaces the legacy session-based login with OAuth2 to support
SSO integration requirements from the Q2 roadmap.
```

```
🐛 fix(cart): prevent duplicate item entries on rapid click

Debounce was missing on the add-to-cart handler, causing race
conditions when users clicked quickly. Added 300ms debounce.

Closes #412
```

```
🚑️ hotfix(payments): correct rounding error on invoice totals

Totals were being truncated instead of rounded, causing
off-by-one-cent errors on multi-line invoices.

Closes #891
```

```
♻️ refactor(api): extract request validation into middleware

No behavior change. Consolidates duplicated validation logic
across 6 route handlers into a single reusable middleware.
```

```
📝 docs(readme): update local dev setup instructions
```

-----

## Merging Rules

### Merging into `dev`

Always use `--no-ff` (no fast-forward). This ensures a merge commit is created, preserving the history of the branch and making it clear when a feature or bugfix was integrated.

```bash
git checkout dev
git pull origin dev
git merge --no-ff feature/my-feature-name -m "Merge feature/my-feature-name into dev"
git push origin dev
```

### Merging into `main`

Same rule applies. Always `--no-ff`.

```bash
git checkout main
git pull origin main
git merge --no-ff release/v1.2.0 -m "Merge release/v1.2.0 into main"
git push origin main
```

### After Merging a Hotfix

A hotfix must be merged into **both** `main` and `dev` with `--no-ff` each time.

```bash
# Merge into main
git checkout main
git merge --no-ff hotfix/critical-issue -m "Merge hotfix/critical-issue into main"
git push origin main

# Merge into dev
git checkout dev
git merge --no-ff hotfix/critical-issue -m "Merge hotfix/critical-issue into dev"
git push origin dev
```

-----

## Enforcement Summary

|Rule                    |Requirement                                                   |
|------------------------|--------------------------------------------------------------|
|Direct commits to `main`|❌ Never                                                       |
|Direct commits to `dev` |❌ Never                                                       |
|Branch naming           |✅ Must follow `feature/*`, `bugfix/*`, `hotfix/*`, `release/*`|
|Merge strategy          |✅ Always `--no-ff`                                            |
|Commit messages         |✅ Must be descriptive and follow format                       |
|Parallel work           |✅ Use `git worktree`                                          |

-----

## Quick Reference

```bash
# Start a new feature
git checkout dev && git pull origin dev
git checkout -b feature/your-feature

# Commit as you go
git add -p   # stage changes interactively
git commit -m "✨ feat(scope): describe what and why"

# Finish and merge
git checkout dev && git pull origin dev
git merge --no-ff feature/your-feature -m "Merge feature/your-feature into dev"
git push origin dev

# Clean up
git branch -d feature/your-feature
```
