# Translation fallback hides missing key

## vietnamese-settings-key-missing

- Severity: important
- File: `messages/vi.json`
- Required concept: Compare locale key sets. `navigation.settings` is missing in
  Vietnamese while English fallback behavior can hide the gap.
- Impact: Vietnamese users see untranslated fallback text.
