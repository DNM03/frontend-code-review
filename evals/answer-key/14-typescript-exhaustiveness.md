# TypeScript exhaustiveness

## error-state-silently-falls-through

- Severity: important
- File: `status.ts`
- Required concept: Handle the `error` variant explicitly and use an exhaustive
  `never` check so future variants cannot silently fall through.
- Impact: Error state is shown as the generic `Unknown` label.
