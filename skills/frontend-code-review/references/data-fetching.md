# Data Fetching and API Client Review Notes

## Server state mindset

TanStack Query is for server state:

- fetched from somewhere external
- cached
- refetched
- shared across components
- potentially stale

Do not use TanStack Query as a replacement for local UI state.

## Query keys

Query keys must include all values that affect the fetched data.

Bad:

```tsx
useQuery({
  queryKey: ["jobs"],
  queryFn: () => getJobs(filters),
});
```

Better:

```tsx
useQuery({
  queryKey: ["jobs", filters],
  queryFn: () => getJobs(filters),
});
```

Review for:

- missing filters
- missing pagination params
- missing locale
- missing user/account/workspace id
- unstable non-serializable values
- query keys that are too broad

## `enabled`

Use `enabled` when a query depends on data that may not exist yet.

```tsx
useQuery({
  queryKey: ["profile", userId],
  queryFn: () => getProfile(userId),
  enabled: Boolean(userId),
});
```

Check that `queryFn` cannot run with `undefined` IDs.

## Important defaults

Review configuration with TanStack Query defaults in mind:

- queries are stale by default
- stale queries can refetch on mount, focus, and reconnect
- retries can delay error UI and are unsafe for some endpoints
- inactive queries remain cached before garbage collection

Do not flag default refetching as a bug without understanding the intended freshness policy.

## Loading states

For each query, check whether the UI handles:

- initial loading
- background refetching
- empty results
- error
- retry/recovery

Do not only check whether the API call works.

## Mutations

Mutations are normally for create/update/delete or server-side effects.

A good mutation handles:

- pending state
- success feedback
- error feedback
- cache invalidation or cache update
- duplicate submit prevention

Example:

```tsx
const mutation = useMutation({
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

## Invalidation

After a mutation, invalidate the queries that are now stale.

Bad:

```tsx
queryClient.invalidateQueries();
```

This may refetch too much.

Better:

```tsx
queryClient.invalidateQueries({ queryKey: ["jobs"] });
queryClient.invalidateQueries({ queryKey: ["job", createdJob.id] });
```

Review whether the invalidation target matches the changed data.

## Optimistic updates

Optimistic updates can improve UX, but they duplicate server behavior on the client.

Only recommend optimistic updates when:

- the expected server result is simple and predictable
- rollback is implemented
- concurrent mutations are considered
- the UX benefit is worth the complexity

A safer optimistic update pattern includes:

- `onMutate`
- `cancelQueries`
- snapshot previous cache
- `setQueryData`
- rollback in `onError`
- invalidate in `onSettled`

## API client review

For a custom fetch client, check:

- base URL handling
- trailing slash normalization
- auth header injection
- request cloning before retry
- response body consumption before retry
- consistent error shape
- timeout/cancellation support when needed
- refresh token race handling
- infinite retry prevention
- cancellation or stale-response protection when requests can race

## Token refresh flow

Good refresh behavior:

1. A request receives 401.
2. If it is not an auth endpoint, start refresh.
3. If refresh is already in flight, wait for the existing refresh promise.
4. If refresh succeeds, retry the original request once.
5. If refresh fails, clear tokens and notify auth expired.
6. Do not retry refresh/login/logout endpoints forever.

Review for:

- multiple refresh requests racing
- old token overwritten by stale response
- failed original request retrying endlessly
- no fallback when refresh token is missing
- requests continuing after logout

## Request waterfalls

Look for serial and nested requests that could run in parallel. Common patterns:

- child queries mounted only after an unrelated parent query finishes
- dependent queries where an API shape could avoid the extra round trip
- multiple `useSuspenseQuery` calls that serialize inside one component

When using Suspense for parallel queries, consider `useSuspenseQueries`.

## SSR and hydration

For SSR or React Server Component integrations, check:

- a new server `QueryClient` is created per request
- the browser does not recreate its `QueryClient` during initial suspension
- dehydrated state is safely serialized before embedding in HTML
- prefetches start early enough to avoid server-side waterfalls
- pending-query dehydration is used deliberately when streaming

Do not recommend custom SSR serialization with raw `JSON.stringify` for untrusted data.

## Server state and editable forms

Copying query data into local form state can be correct when it deliberately initializes an
editable draft. Flag accidental copies that silently opt out of background server-state updates.
