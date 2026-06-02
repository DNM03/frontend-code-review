# Next.js 16 App Router Review Notes

Apply this reference to current Next.js 16 App Router projects. Inspect `package.json` and
`next.config.*` before applying version-sensitive cache rules.

## Server and Client Components

Pages and layouts are Server Components by default. Flag:

- browser APIs, state, Effects, or event handlers in Server Components
- server-only data imported into Client Components
- broad `"use client"` boundaries that expand the client bundle unnecessarily
- sensitive data serialized into Client Component props

## Errors and route UX

Distinguish expected errors from uncaught exceptions:

- return or render expected form and request errors explicitly
- use `notFound()` with `not-found.tsx` for absent route resources
- use `error.tsx` or global error handling for uncaught exceptions
- add meaningful `loading.tsx` or close `<Suspense>` boundaries for streamed content

## Cache Components

Only apply these rules when `cacheComponents: true` is enabled.

Check:

- uncached async or runtime work is inside a close `<Suspense>` boundary
- `'use cache'` is used only for cacheable work
- `cookies()`, `headers()`, and other request-time values are read outside cached scopes
- cached work uses `cacheLife` and `cacheTag` when lifetime or invalidation matters
- loading fallbacks preserve useful layout and avoid a blank shell

## Caching and revalidation

Review intent before recommending cache APIs:

- `updateTag()` is for immediate read-your-own-writes behavior in Server Actions
- `revalidateTag(tag, "max")` is for stale-while-revalidate behavior
- `revalidatePath()` invalidates a route path or layout, not every consumer of shared data
- `refresh()` refreshes the client router but does not invalidate tagged data

## Server Functions and Server Actions

Treat every Server Function as a public mutation endpoint:

- verify authentication and authorization inside the action
- validate `FormData` and other client-controlled arguments before mutation
- show pending and expected-error states
- call cache invalidation before `redirect()`
- remember that `redirect()` throws framework control flow
- preserve progressive enhancement where a normal form action is appropriate

## Proxy and route handlers

Starting with Next.js 16, Middleware is called Proxy. Use it for request-time rewrites, redirects,
and optimistic checks. Do not use Proxy for slow fetching or as the only authorization layer.

Treat Route Handlers as public API endpoints. Check authentication, authorization, validation,
HTTP status codes, and cache behavior.

## Metadata and routing

Check route-aware metadata for public pages:

- title, description, canonical URL, Open Graph image, robots behavior
- sitemap and locale alternates when relevant
- server-side redirects for crawler-important routes
- supported locale handling and redirect-loop prevention
