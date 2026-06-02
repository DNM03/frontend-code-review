# Performance and SEO Review Notes

## Performance mindset

Performance is part of UX.

Review whether the page feels fast, stable, and responsive.

## Core Web Vitals

Core Web Vitals focus on user experience signals around:

- loading performance: Largest Contentful Paint (LCP)
- responsiveness/interactivity: Interaction to Next Paint (INP)
- visual stability: Cumulative Layout Shift (CLS)

When reviewing frontend code, look for causes of:

- slow initial page load
- delayed interaction feedback
- layout shift
- heavy client JavaScript
- unoptimized images
- unnecessary network waterfalls

## Common performance issues

Check for:

- unnecessary `"use client"` causing large client bundles
- importing heavy libraries into broad client components
- expensive calculations during render
- rendering huge lists without pagination or virtualization
- unoptimized images
- layout shift from images without dimensions
- fetching the same data multiple times
- sequential requests that could be parallel
- overly broad query invalidation
- no caching strategy for expensive server data
- LCP images that are lazy-loaded or discovered late
- long event handlers or heavy client JavaScript that delay interaction feedback

## Next.js image/layout review

Check:

- image dimensions are known when possible
- layout does not jump during loading
- above-the-fold content is prioritized
- loading fallback does not cause major layout shift
- above-the-fold and likely LCP images are not lazy-loaded
- responsive image sizing avoids downloading unnecessarily large files
- fetch priority is used selectively for truly important images

## SEO metadata

For public pages, check:

- title
- description
- canonical URL
- Open Graph title/description/image
- locale alternates if using i18n
- robots behavior
- structured data when relevant

## Canonical URLs

Avoid broad canonical URLs in shared layouts.

Bad:

```ts
export const metadata = {
  alternates: {
    canonical: "https://example.com",
  },
};
```

This can accidentally tell search engines that many child pages are duplicates of the homepage.

Better:

```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `https://example.com/${locale}/jobs`,
      languages: {
        en: "https://example.com/en/jobs",
        vi: "https://example.com/vi/jobs",
      },
    },
  };
}
```

## Redirects

For crawler-important routes, prefer server-side redirects.

Bad:

```tsx
"use client";

useEffect(() => {
  router.replace("/en");
}, []);
```

Problems:

- no-JavaScript clients may see only a spinner
- crawlers may not follow the intended route cleanly
- users may see a flash/loading state

Better:

```tsx
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/en");
}
```

## Private pages

Private pages should usually be `noindex`.

Examples:

- account
- dashboard
- admin
- applications
- saved items
- messages
- notifications
- reset password
- verify email

Public pages should not accidentally inherit `noindex`.

## i18n SEO

For localized pages, check:

- canonical points to the current locale page
- `alternates.languages` points to equivalent pages in other locales
- unsupported locale routes do not silently render fallback content
- `x-default` is set when the project has a global/default route strategy
- sitemap URLs, canonicals, and locale alternates remain consistent

## Open Graph

Public shareable pages should have:

- stable URL
- title
- description
- image
- locale if relevant

Do not generate Open Graph images on the client.
