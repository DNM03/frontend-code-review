# React and Next.js Review Notes

## React mental model

React UI should be derived from props and state whenever possible.

Effects are for synchronizing with external systems such as:

- browser APIs
- network subscriptions
- timers
- third-party widgets
- manual DOM integration
- external stores

Do not use Effects as the default way to calculate data for rendering.

## You might not need an Effect

Flag code like this:

```tsx
const [fullName, setFullName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

Prefer:

```tsx
const fullName = `${firstName} ${lastName}`;
```

Flag code like this:

```tsx
useEffect(() => {
  if (isSubmitSuccessful) {
    toast.success("Saved");
  }
}, [isSubmitSuccessful]);
```

Prefer handling event-specific logic in the event/mutation callback that caused the event.

## Hooks rules

Check that hooks are:

- called only at the top level
- not called inside conditions
- not called inside loops
- not called inside nested functions
- only called from React components or custom hooks

## State

Prefer the smallest reliable state.

Flag:

- duplicated state
- state that can be derived
- boolean combinations that can become impossible states
- complex state spread across many `useState` calls

For complex UI flows, recommend a reducer or explicit state machine style.

## Functional updates

When new state depends on previous state, prefer:

```tsx
setOpen((prev) => !prev);
```

instead of reading from a possibly stale closure.

## Effects and cleanup

Effects that subscribe, attach listeners, start timers, or create external resources should clean up.

```tsx
useEffect(() => {
  const id = window.setInterval(tick, 1000);

  return () => {
    window.clearInterval(id);
  };
}, []);
```

## Memoization

Do not recommend `useMemo`, `useCallback`, or `React.memo` everywhere.

Use memoization when:

- a calculation is expensive
- referential stability is required by a child optimization
- a stable callback is required by an external subscription
- the project does not use React Compiler and profiling shows a real issue

Do not treat missing memoization as a bug by default.

## Next.js Server and Client Components

In the App Router, Server Components are the default.

Server Components can:

- fetch data on the server
- access server-only environment variables
- render static/non-interactive UI
- avoid sending extra JavaScript to the browser

Server Components cannot:

- use React state
- use Effects
- use browser APIs
- use event handlers

Client Components can:

- use state
- use Effects
- use browser APIs
- handle interactions
- use client-only hooks such as TanStack Query hooks

## `"use client"` review rule

Do not add `"use client"` at the top of a large page/layout unless the whole component truly needs interactivity.

Prefer isolating interactivity into smaller Client Components.

Bad:

```tsx
"use client";

export default function DashboardPage() {
  // entire dashboard becomes client-side
}
```

Better:

```tsx
export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <>
      <StatsSummary stats={stats} />
      <InteractiveFilters />
    </>
  );
}
```

## Data fetching in Next.js

For Server Components, data can be fetched directly with async I/O.

For Client Components, use client-side fetching when the data is user-interactive, frequently changing, or depends on browser-only state.

Do not recommend TanStack Query hooks inside Server Components.

## Redirects

For SEO-important and no-JavaScript-safe redirects, prefer server-side redirects.

Bad:

```tsx
"use client";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/en");
  }, [router]);

  return <Spinner />;
}
```

Better:

```tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}
```

## Metadata

Avoid broad canonical URLs in shared layouts.

Bad:

```ts
export const metadata = {
  alternates: {
    canonical: siteUrl,
  },
};
```

Why this is risky:

- child pages may inherit the homepage canonical
- search engines may treat many pages as duplicates of the homepage

Better:

- keep shared layout metadata generic
- set canonical URLs per SEO-relevant page
- set route-aware `alternates.languages` for localized pages

## Environment variables

In monorepos, Next.js loads environment files from the app/project directory, not automatically from an arbitrary outer repo root.

Review `NEXT_PUBLIC_*` carefully. Anything with `NEXT_PUBLIC_` is exposed to the browser bundle.

## Middleware / proxy

For routing middleware, check:

- matcher excludes API routes when intended
- matcher excludes static assets and Next internals
- locale negotiation does not accidentally allow unsupported locales
- auth redirects do not create loops
