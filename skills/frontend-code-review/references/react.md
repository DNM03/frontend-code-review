# React Review Notes

## Rendering and state

Prefer rendering from props and state directly. Flag duplicated source of truth, state copied from
props without a deliberate reset strategy, and derived state synchronized through Effects.

State is tied to component position, type, and `key`. Review unexpected resets and stale form state
when conditional trees, keys, or component types change.

## Effects

Use Effects to synchronize with external systems: subscriptions, timers, browser APIs, widgets,
and external stores. Keep event-specific logic in event handlers or mutation callbacks.

Check cleanup for subscriptions, listeners, timers, observers, and abortable work. When an Effect
needs the latest value without reconnecting to an external system, consider an Effect Event if the
project React version supports it.

## Hydration

Treat server/client markup mismatches as bugs. Common causes:

- browser-only reads during initial render
- timestamps, randomness, and locale-sensitive formatting
- invalid HTML nesting
- different auth or theme markup on the first client render

Use `suppressHydrationWarning` only for unavoidable one-level differences. Do not use it to hide a
structural mismatch.

## Forms

Check controlled and uncontrolled inputs:

- controlled inputs provide synchronous `onChange`
- inputs do not switch between controlled and uncontrolled modes
- checkboxes and radios use `checked`, not `value`, for selected state
- pending and validation states preserve user input

## Responsiveness and external stores

Use transitions or deferred values only for expensive non-urgent updates. They do not replace
debouncing or prevent network requests.

For external subscriptions, prefer `useSyncExternalStore`. Check stable snapshots and an SSR
snapshot when server rendering requires one.

## Memoization

Do not recommend memoization everywhere. Recommend it when profiling or semantics justify stable
references, expensive calculations, or narrower rerender boundaries.
