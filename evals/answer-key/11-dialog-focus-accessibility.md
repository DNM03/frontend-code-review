# Dialog focus accessibility

## incomplete-dialog-behavior

- Severity: important
- File: `ConfirmDialog.tsx`
- Required concept: Use a maintained dialog primitive or implement initial
  focus, focus containment, Escape dismissal, and focus restoration.
- Impact: Keyboard and assistive-technology users can lose context or move
  outside the modal.

## unnamed-dialog

- Severity: important
- File: `ConfirmDialog.tsx`
- Required concept: Give the dialog an accessible name, such as
  `aria-labelledby` pointing to the heading.
- Impact: Assistive technology may announce an unnamed dialog.
