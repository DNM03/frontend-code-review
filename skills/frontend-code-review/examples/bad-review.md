# Bad Review Example

This review is not useful:

```md
Looks good overall. Maybe improve error handling and performance. Also the UI could be better.
```

Why this is bad:

- no file location
- no severity
- no concrete production impact
- no code example
- no explanation of what "better" means
- mixes bugs, performance, and UI taste into one vague sentence

Better:

```md
### Missing mutation error handling

**Where:** `CreateJobForm.tsx`, `createJobMutation`

**Problem:** The mutation only handles `onSuccess`.

**Why it matters:** If the request fails, the user receives no feedback and can submit again without knowing what happened.

**Fix:** Add `onError`, disable the submit button while pending, and preserve form input.
```
