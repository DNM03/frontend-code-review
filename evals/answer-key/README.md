# Answer Key Template

Keep expected findings hidden from the reviewing agent.

Create one Markdown file per case:

```md
# Case Name

## issue-id

- Severity: important
- File: `CreateJobForm.tsx`
- Required concept: Disable submission while the mutation is pending.
- Acceptable variants: Prevent repeated submission in the submit handler.
```

Include only seeded or independently verified issues. Do not penalize a review
for omitting optional polish unless it is part of the case.
