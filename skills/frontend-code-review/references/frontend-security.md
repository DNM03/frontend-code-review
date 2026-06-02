# Frontend Security Review Notes

## XSS and unsafe sinks

React escapes text by default. Review escape hatches carefully:

- `dangerouslySetInnerHTML`
- `innerHTML`, `outerHTML`, `insertAdjacentHTML`, and `document.write`
- untrusted `javascript:` or `data:` URLs
- user-controlled HTML passed through libraries after sanitization

When authored HTML is required, recommend a maintained sanitizer such as DOMPurify. Sanitization
must happen before the final unsafe sink, and sanitized content must not be mutated afterward.

## Server boundaries

Treat Server Actions and Route Handlers as public endpoints:

- verify authentication and authorization server-side
- validate client-controlled input
- avoid relying on hidden buttons or client-side route guards for enforcement
- expose only the data required by Client Components
- keep secrets out of `NEXT_PUBLIC_*` variables and client bundles

## Cookie-authenticated mutations

For cookie-authenticated mutation endpoints, check the project's CSRF strategy. Do not infer that a
framework, CORS, or client wrapper alone provides complete protection.

## SSR serialization

Custom SSR serialization must escape data before embedding it in HTML. Plain `JSON.stringify` of
untrusted dehydrated data can create XSS risk.

## CSP

Content Security Policy is defense in depth, not a substitute for output escaping, sanitization,
authorization, or validation. Check nonce and third-party script handling when CSP is present.
