# Output Format

Use this output format for code reviews unless the user asks otherwise.

## Critical issues

Critical issues are:

- production-breaking bugs
- security risks
- data loss risks
- severe accessibility blockers
- serious SEO/indexing mistakes
- auth/session problems
- bugs that block core user flows

Format:

```md
### 1. Clear issue title

**Where:** [`file/path.tsx`](/absolute/path/file/path.tsx:42), component/function name

**Problem:** What is wrong.

**Why it matters:** Production or user impact.

**Fix:** Concrete fix. Include code if useful.
```

For repository reviews, use clickable file links with line references. For
pasted snippets, reference the component, function, or relevant expression.
Label findings as conditional when they depend on context that is not
available.

For pasted snippets, report verified issues separately from context-dependent
considerations. Conditional concerns must not affect the final recommendation.
Do not infer requirements from the surrounding repository unless the user asks
for repository-context review. Do not introduce framework-specific
considerations unless the pasted snippet identifies that framework.

## Important improvements

Important improvements are:

- maintainability issues
- likely UX confusion
- missing loading/error/empty states
- inefficient data fetching
- weak TypeScript modeling
- moderate accessibility issues
- unclear component boundaries

Use the same format as critical issues.

## Nice-to-have polish

Nice-to-have issues are:

- naming
- small simplification
- minor visual polish
- optional refactor
- consistency improvement

Keep these short.

## Summary

Write one short paragraph after the findings.

Include:

- overall judgment
- biggest risk
- whether it is safe to merge

Example:

```md
The implementation is close, but I would not merge yet. The main risk is that failed mutations leave the user with no feedback and allow duplicate submissions.
```

## Suggested patch

When possible, provide code.

Use focused code blocks.

Do not rewrite unrelated files.

Example:

```tsx
const createJobMutation = useMutation({
  mutationFn: createJob,
  onSuccess: () => {
    toast.success("Job created");
    queryClient.invalidateQueries({ queryKey: ["jobs"] });
  },
  onError: () => {
    toast.error("Could not create job");
  },
});
```

## Final recommendation

End with one of:

```md
**Final recommendation:** Safe to merge.
```

```md
**Final recommendation:** Safe after the important fixes above.
```

```md
**Final recommendation:** Not safe to merge yet.
```

## Tone

Be direct but not harsh.

Prefer:

```md
This can break when `userId` is undefined.
```

Avoid:

```md
This code is bad.
```
