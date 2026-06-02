# Cache Components missing Suspense

## runtime-data-outside-suspense

- Severity: critical
- File: `app/page.tsx`
- Required concept: With `cacheComponents: true`, request-time runtime data such
  as `cookies()` must be isolated behind a nearby `Suspense` boundary or moved
  into an appropriate dynamic scope.
- Impact: Prerendering can fail with an uncached data outside Suspense error.
