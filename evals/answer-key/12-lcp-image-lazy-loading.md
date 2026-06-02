# LCP image loading

## likely-lcp-image-lazy-loaded

- Severity: important
- File: `Hero.tsx`
- Required concept: Do not lazy-load a likely above-the-fold hero image. Allow
  early discovery and prioritize it selectively.
- Impact: Lazy loading delays the likely LCP resource.

## fill-image-missing-sizes

- Severity: important
- File: `Hero.tsx`
- Required concept: Add an accurate `sizes` value to a responsive `fill` image.
- Impact: The browser can download an unnecessarily large image candidate.
