# TypeScript Review Notes

## TypeScript review mindset

TypeScript should make invalid states harder to represent.

Do not use types only to silence errors.

## Avoid unnecessary `any`

Flag:

```ts
function handleSubmit(values: any) {
  // ...
}
```

Prefer a real type:

```ts
type CreateJobInput = {
  title: string;
  description: string;
  salaryMin?: number;
  salaryMax?: number;
};

function handleSubmit(values: CreateJobInput) {
  // ...
}
```

## Avoid unsafe assertions

Flag:

```ts
const user = response.data as User;
```

Better:

- type the API client response
- validate unknown data at boundaries
- narrow before using

## Narrow unknown errors

Bad:

```ts
catch (error) {
  toast.error(error.message);
}
```

Better:

```ts
catch (error) {
  const message = error instanceof Error ? error.message : "Something went wrong";
  toast.error(message);
}
```

## Model nullable data

If a value can be missing, reflect that in the type and UI.

```ts
type Candidate = {
  id: string;
  name: string;
  email?: string | null;
};
```

Then render safely:

```tsx
<span>{candidate.email ?? "No email"}</span>
```

## Discriminated unions

Use discriminated unions for state that has distinct modes.

Bad:

```ts
type State = {
  loading: boolean;
  error?: string;
  data?: Job[];
};
```

This allows impossible states such as `loading: true` with `data`.

Better:

```ts
type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: Job[] };
```

## Component props

Prefer explicit props.

Bad:

```tsx
function JobCard(props: any) {
  // ...
}
```

Better:

```tsx
type JobCardProps = {
  job: Job;
  onSelect?: (jobId: string) => void;
};

function JobCard({ job, onSelect }: JobCardProps) {
  // ...
}
```

## Generics

Use generics when the function truly works across multiple types.

Bad generic:

```ts
function wrap<T>(value: T): any {
  return { value };
}
```

Better:

```ts
function wrap<T>(value: T): { value: T } {
  return { value };
}
```

## Form schemas

For forms, keep runtime validation and TypeScript types aligned.

Good pattern:

```ts
const schema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;
```

## Exported utilities

For exported utilities, prefer explicit return types when they are part of the project API.

```ts
export function getApiBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_API_URL;
  if (fromEnv && fromEnv.length > 0) return fromEnv.replace(/\/$/, "");
  return "http://localhost:8080";
}
```
