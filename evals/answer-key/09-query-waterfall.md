# Suspense query waterfall

## independent-suspense-queries-serialize

- Severity: important
- File: `Dashboard.tsx`
- Required concept: Independent `useSuspenseQuery` calls in one component
  serialize. Fetch them in parallel, such as with `useSuspenseQueries`.
- Impact: The second independent request starts only after the first resolves.
