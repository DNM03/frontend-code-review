"use client";

type ConfirmDialogProps = {
  open: boolean;
  onConfirm: () => void;
};

export function ConfirmDialog({ open, onConfirm }: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true">
      <h2>Delete project?</h2>
      <button type="button" onClick={onConfirm}>
        Delete
      </button>
    </div>
  );
}
