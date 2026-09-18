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

## Root cause / real fix (not yet done)

This is a workaround, not a fix. The actual fix is one of:
1. In Vercel's project settings, point Production Branch at whatever branch is meant to
   be the permanent trunk (ideally after establishing a real `main`), or
2. Adopt a normal PR-merge workflow into a stable branch, with Vercel tracking that
   branch.

Whoever has Vercel dashboard access should make one of these changes — until then, this
file is the only thing preventing fixes from silently not deploying.
