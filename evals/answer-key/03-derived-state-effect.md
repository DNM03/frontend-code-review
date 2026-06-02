# Derived state in an Effect

## derived-full-name

- Severity: important
- File: `ProfileName.tsx`
- Required concept: Compute `fullName` during rendering instead of storing it
  in state and updating it in an Effect.
- Impact: The Effect adds an avoidable stale render and extra update.
