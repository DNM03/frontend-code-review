# Cache invalidation semantics

## incomplete-revalidate-tag-contract

- Severity: important
- File: `actions.ts`
- Required concept: Choose explicit Next.js 16 invalidation semantics. Use
  `updateTag("posts")` for immediate read-your-own-writes behavior in a Server
  Action, or `revalidateTag("posts", "max")` for stale-while-revalidate.
- Impact: The single-argument `revalidateTag` form relies on deprecated behavior
  and does not document the intended user-visible freshness.
