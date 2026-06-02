# Frontend Review Checklist

Use this as the broad first-pass checklist.

## 1. Correctness

Check for:

- runtime errors
- undefined/null access
- stale state
- stale closures
- missing hook dependencies
- wrong hook dependencies
- conditional hook calls
- unnecessary Effects
- invalid event handling
- async race conditions
- duplicate submissions
- missing cleanup for timers/subscriptions
- controlled/uncontrolled input mismatch
- incorrect form validation
- incorrect date/time handling
- incorrect route params or search params handling
- wrong environment variable usage
- hidden production-only bugs
- hydration mismatches
- unexpected state resets caused by component position, type, or `key`

## 2. TypeScript

Check for:

- unnecessary `any`
- unsafe type assertions
- API response types not modeled
- nullable values not handled
- union types not narrowed
- duplicated types instead of shared types
- missing return types on exported utilities
- weak component prop contracts
- invalid generic usage
- error values typed as `any` or assumed to be `Error`
- incomplete discriminated-union handling
- unsafe indexed access hidden by loose compiler settings

## 3. React

Check for:

- hooks called conditionally
- hooks called inside loops/nested functions
- state derived from props without reason
- duplicated source of truth
- Effects used for derived rendering data
- Effects used for event-specific logic
- expensive computation on every render
- unstable object/function dependencies
- unnecessary `useMemo` / `useCallback`
- missing cleanup in Effects
- stale closure bugs
- too much state in one component
- logic that should become a custom hook
- controlled/uncontrolled input transitions
- unstable external-store snapshots

## 4. Next.js

Check for:

- incorrect Server/Client Component boundary
- unnecessary `"use client"`
- browser APIs in Server Components
- client hooks in Server Components
- server-only secrets exposed through `NEXT_PUBLIC_*`
- missing route-level metadata
- broad canonical URLs in shared layouts
- client-side redirects where server redirects are better
- wrong cache/revalidation behavior
- missing `notFound()` or `redirect()` handling when data is absent
- middleware/proxy matcher issues
- i18n locale routing issues
- locale key set mismatches and fallback behavior that can hide missing translations
- environment files placed in the wrong app directory in monorepos
- missing `loading.tsx`, `error.tsx`, or `not-found.tsx` handling where routes need it
- missing Server Action authorization or validation
- `cacheComponents` work outside close Suspense boundaries
- wrong `updateTag`, `revalidateTag`, `revalidatePath`, or `refresh` semantics
- slow data fetching or full authorization logic in Proxy

## 5. Data fetching and mutations

Check for:

- unstable query keys
- missing filter params in query keys
- wrong `enabled` condition
- missing loading state
- missing error state
- missing empty state
- missing invalidation after mutations
- invalidating too much
- invalidating too little
- no optimistic rollback
- duplicate API requests
- token refresh race conditions
- infinite retry loops
- auth endpoints being retried incorrectly
- retries on non-idempotent operations
- stale request races without cancellation
- serial or nested request waterfalls
- unsafe SSR dehydration serialization

## 6. UI/UX

Check for:

- weak visual hierarchy
- too much text
- no clear primary action
- unclear state transition
- no loading state
- no empty state
- no error recovery
- poor disabled state
- confusing button labels
- no confirmation for destructive actions
- no chart or summary when dense data needs scanning
- poor mobile layout
- horizontal overflow
- weak focus point on admin/dashboard pages
- motion without reduced-motion handling

## 7. Accessibility

Check for:

- icon-only buttons without accessible names
- missing form labels
- clickable `div` instead of `button`
- keyboard traps
- missing focus states
- dialogs/sheets that do not manage focus
- low contrast
- images without meaningful `alt` text
- non-semantic table/list markup
- custom controls without keyboard handling
- `aria-*` used where native HTML would be better
- dialogs without focus entry, trap, Escape handling, close control, or focus restoration
- complex custom widgets without expected keyboard interactions

## 8. Performance

Check for:

- unnecessary client components
- large bundles caused by heavy client-only dependencies
- unnecessary re-renders
- expensive render work
- unoptimized images
- layout shift
- delayed interaction feedback
- repeated network calls
- over-fetching
- no pagination/virtualization for large lists
- LCP images lazy-loaded or discovered too late
- long interaction handlers that can hurt INP

## 9. SEO and shareability

Check for:

- missing or duplicate title/description
- incorrect canonical URL
- incorrect `alternates.languages`
- missing Open Graph metadata on important public pages
- private pages accidentally indexable
- public pages accidentally `noindex`
- client-only redirects for crawler-important routes
- pages rendering only a spinner without JavaScript
- sitemap, canonical, and hreflang equivalents disagreeing

## 10. Frontend security

Check for:

- unsafe HTML sinks without sanitization
- untrusted URLs passed into executable URL contexts
- sensitive data serialized into Client Components
- client-only authorization used as enforcement
- cookie-authenticated mutations without an understood CSRF strategy
- custom SSR serialization that embeds unescaped data
- CSP treated as the only XSS defense
