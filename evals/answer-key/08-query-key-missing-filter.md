# Query key missing filter

## status-not-in-query-key

- Severity: important
- File: `Jobs.tsx`
- Required concept: Include `status` in the query key because the query function
  reads it, for example `["jobs", status]`.
- Impact: Open and closed job lists can reuse the wrong cached data.
