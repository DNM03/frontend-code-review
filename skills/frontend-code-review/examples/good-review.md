# Good Review Example

## Critical issues

None.

## Important improvements

### 1. Missing mutation error handling

**Where:** `components/jobs/CreateJobForm.tsx`, `createJobMutation`

**Problem:** The mutation only handles success. If the API fails, the user gets no visible feedback.

**Why it matters:** The user may think the job was created even when the request failed. This is especially risky in admin workflows where users expect save actions to be reliable.

**Fix:** Add `onError`, keep the form values, and show a clear error message.

```tsx
const createJobMutation = useMutation({
  mutationFn: createJob,
  onSuccess: () => {
    toast.success("Job created");
    queryClient.invalidateQueries({ queryKey: ["jobs"] });
  },
  onError: () => {
    toast.error("Could not create job. Please try again.");
  },
});
```

### 2. Submit button can be clicked multiple times

**Where:** `components/jobs/CreateJobForm.tsx`, submit button

**Problem:** The submit button is still clickable while the mutation is pending.

**Why it matters:** Users can accidentally create duplicate jobs if the network is slow.

**Fix:** Disable the button while pending and show a pending label.

```tsx
<Button type="submit" disabled={createJobMutation.isPending}>
  {createJobMutation.isPending ? "Creating..." : "Create job"}
</Button>
```

## Nice-to-have polish

### 1. Empty state can be more helpful

**Where:** `app/[locale]/jobs/page.tsx`

**Problem:** The empty state only says `No jobs`.

**Fix:** Tell the user what to do next.

```tsx
<EmptyState
  title="No jobs yet"
  description="Create your first job post to start collecting candidates."
  action={<Button>Create job</Button>}
/>
```

## Summary

This implementation is close, but I would not merge it yet. The main risk is that the mutation path has no error handling or duplicate-submit prevention, so users may think a failed request succeeded or accidentally create duplicate records.

## Final recommendation

**Final recommendation:** Safe after the important fixes above.
