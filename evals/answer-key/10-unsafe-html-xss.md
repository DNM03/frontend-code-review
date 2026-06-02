# Unsafe HTML injection

## unsanitized-dangerous-html

- Severity: critical
- File: `Article.tsx`
- Required concept: Sanitize untrusted HTML with a maintained sanitizer before
  passing it to `dangerouslySetInnerHTML`, or render a structured safe format.
- Impact: Attacker-controlled markup can execute script in the application.
