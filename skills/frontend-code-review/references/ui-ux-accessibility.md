# UI/UX and Accessibility Review Notes

## UI review mindset

UI review is not only about looking beautiful.

A good UI should make the next action obvious, reduce cognitive load, and represent system state clearly.

## Visual hierarchy

Every screen should have:

- one clear primary focus
- clear section grouping
- consistent spacing
- readable typography
- obvious primary action
- lower emphasis for secondary information

Common admin/dashboard issue:

> Too many cards, labels, and numbers compete for attention.

Recommend:

- group related metrics
- make the most important number larger
- use charts for trend/comparison data
- reduce repeated labels
- add section headings
- move secondary details into detail views
- use empty space intentionally

## Dense data pages

For tables/admin pages, check:

- search/filter discoverability
- sortable columns
- sticky useful controls
- empty table state
- loading skeleton
- pagination or infinite scroll
- row click behavior
- keyboard navigation
- bulk action clarity
- destructive action confirmation

## Charts and summaries

When the page shows many metrics, consider whether a chart would help.

Use charts when users need to understand:

- trend over time
- category breakdown
- comparison
- progress toward target
- anomaly or outlier

Do not add charts only for decoration.

## Empty states

A good empty state tells users:

1. what happened
2. why the space is empty
3. what to do next

Bad:

```txt
No data
```

Better:

```txt
No candidates yet.
Add your first candidate or import a CSV to start building this pipeline.
```

## Loading states

Use:

- skeletons for page sections
- button loading state for submits
- disabled state to prevent duplicate action
- optimistic UI only when rollback is safe

Avoid full-page spinners when only one section is loading.

## Error states

A good error state includes:

- human-readable message
- recovery action
- retry path
- preserved user input when possible

Bad:

```txt
Error 500
```

Better:

```txt
Could not save this job. Your changes are still here. Please try again.
```

## Responsive layout

Check:

- mobile width
- tablet width
- desktop width
- horizontal overflow
- sticky headers/footers
- modals/sheets on small screens
- touch target size
- text wrapping
- table alternatives on mobile

## Tailwind responsive review

Prefer mobile-first classes.

Example:

```tsx
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
```

Review whether responsive classes create sensible layout at each breakpoint.

## Tailwind state variants

Interactive controls should visibly support states:

- hover
- focus-visible
- active
- disabled
- aria-selected
- data-state
- dark mode when relevant

Example:

```tsx
<button className="rounded-md px-3 py-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50">
  Save
</button>
```

## shadcn/ui review

shadcn/ui is a component distribution pattern, not a black-box component library.

Review whether the project:

- keeps components consistent after copying them in
- preserves accessibility behavior from Radix-based components
- uses design tokens consistently
- avoids one-off component variants everywhere
- keeps form messages and labels connected
- avoids editing shared components in ways that break accessibility

## Native HTML first

Prefer native elements when possible.

Bad:

```tsx
<div onClick={handleSave}>Save</div>
```

Better:

```tsx
<button type="button" onClick={handleSave}>
  Save
</button>
```

## ARIA

ARIA can improve accessibility, but it does not automatically add native behavior.

For clickable controls:

- prefer `<button>`
- use `aria-label` for icon-only buttons
- ensure keyboard activation works
- ensure focus style is visible

Icon-only button:

```tsx
<button type="button" aria-label="Search">
  <SearchIcon aria-hidden="true" />
</button>
```

## Forms

Check:

- visible labels
- error messages near fields
- `aria-invalid` when invalid
- `aria-describedby` connecting help/error text
- submit disabled/pending state
- user input preserved after failure
- server-side validation errors mapped to fields
