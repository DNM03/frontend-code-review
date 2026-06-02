# Evaluation Cases

Each directory is an isolated review target. Pass only that directory to the
reviewing agent. Keep expected findings under `../answer-key/`.

| Case | Category | Expected signal |
| --- | --- | --- |
| `01-clean-icon-button` | Accessibility | Clean isolated snippet |
| `02-placeholder-handler-conditional` | Precision | Conditional note only |
| `03-derived-state-effect` | React | Avoid derived state Effect |
| `04-hydration-mismatch` | React | Hydration instability |
| `05-server-action-missing-authorization` | Next.js security | Critical authorization gap |
| `06-cache-components-missing-suspense` | Next.js App Router | Suspense boundary |
| `07-cache-invalidation-semantics` | Next.js App Router | Explicit invalidation semantics |
| `08-query-key-missing-filter` | TanStack Query | Complete query key |
| `09-query-waterfall` | TanStack Query | Parallel Suspense queries |
| `10-unsafe-html-xss` | Frontend security | Critical HTML injection |
| `11-dialog-focus-accessibility` | Accessibility | Modal keyboard behavior |
| `12-lcp-image-lazy-loading` | Performance | LCP image discovery |
| `13-i18n-fallback-missing-key` | i18n | Fallback-hidden key gap |
| `14-typescript-exhaustiveness` | TypeScript | Exhaustive union handling |
| `15-clean-nextjs-page` | Next.js App Router | Clean repository-style page |

Add new cases only for repeated failure patterns or newly supported behavior.
