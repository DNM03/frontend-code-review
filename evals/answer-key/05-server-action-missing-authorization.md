# Server Action missing authorization

## account-delete-without-authorization

- Severity: critical
- File: `actions.ts`
- Required concept: Treat exported Server Actions as public mutation endpoints.
  Authenticate the user, authorize deletion of the selected account, and
  validate the submitted identifier before deleting.
- Impact: A caller can attempt to delete an arbitrary account by id.
