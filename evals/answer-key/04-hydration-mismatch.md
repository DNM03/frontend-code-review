# Hydration mismatch

## time-rendered-during-hydration

- Severity: important
- File: `Clock.tsx`
- Required concept: Rendering the current localized time can produce different
  server and client output during hydration.
- Impact: React can report a hydration mismatch and regenerate the subtree.
