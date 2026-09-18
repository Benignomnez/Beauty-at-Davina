# Deployment — read this before pushing anything

**Vercel's Production Branch is `claude/contact-page-impl-s1prl6`.** This is set in the
Vercel project's dashboard (Settings → Git), not in this repo, so it isn't visible from
git alone and won't change just because a task is assigned a different branch name.

There is no `main`/`master` on this repo. Confirm with:
```
git ls-remote --heads origin
```

## What this means for every session

- A task may tell you to develop on some other branch (e.g. a per-task
  `claude/<task-slug>` branch). That's fine for committing, but **nothing you push there
  reaches the live site** until it also lands on `claude/contact-page-impl-s1prl6`.
- Before considering a fix "live" or telling the user/PM it's deployed, push (or
  fast-forward merge) your commits onto `claude/contact-page-impl-s1prl6` as well:
  ```
  git push origin <your-branch>:claude/contact-page-impl-s1prl6
  ```
  This has been a clean fast-forward every time so far (no divergent history on that
  branch) — if it's ever *not* a fast-forward, stop and check with the user before
  force-pushing anything to it, since that's the branch actually serving customers.
- If you don't have explicit permission to push to a branch other than your assigned
  one, ask first — but flag this dependency immediately rather than silently reporting
  a fix as "pushed" when it only reached your task branch.

## PR-merge workflow (adopted 2026-09-18)

`claude/contact-page-impl-s1prl6` is trunk. Going forward, work does not get pushed to
it directly — it lands via PR:

1. Create a feature branch off `claude/contact-page-impl-s1prl6` (not off whatever
   throwaway branch a task session happens to be assigned):
   ```
   git fetch origin claude/contact-page-impl-s1prl6
   git checkout -b claude/<feature-slug> origin/claude/contact-page-impl-s1prl6
   ```
2. Commit there, push, open a PR with base `claude/contact-page-impl-s1prl6`.
3. Merge the PR. Vercel deploys automatically since it already tracks that branch.

If a task's own instructions pin you to a different branch name, still open the PR from
that branch into `claude/contact-page-impl-s1prl6` rather than fast-forward-pushing
directly into it — the fast-forward-push escape hatch above stays documented for
whoever needs to unblock a stuck deploy, but it's the exception now, not the default.

**This is process discipline, not an enforced rule.** No tool available to Claude Code
sessions in this repo can set GitHub branch protection or change the default branch —
that needs a human with repo-admin access. Until someone does the one-time setup below,
a direct push to `claude/contact-page-impl-s1prl6` will still silently succeed.

## One-time manual setup still needed (repo admin, ~2 min)

To make the above actually enforced instead of just documented:

1. GitHub → repo → **Settings → Branches → Add branch protection rule**
   - Branch name pattern: `claude/contact-page-impl-s1prl6`
   - Enable "Require a pull request before merging"
   - (Optional) "Require status checks to pass" once/if CI exists
2. GitHub → repo → **Settings → General → Default branch** → set it to
   `claude/contact-page-impl-s1prl6`, so new PRs default to the right base.
3. Longer-term, real fix: rename this to `main` (or create a proper `main`) once it's
   safe to touch Vercel's Production Branch setting to match — renaming today without
   also updating Vercel would break deploys, so don't do it until that's coordinated.
