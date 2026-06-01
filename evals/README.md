# Frontend Code Review Evaluations

Use these evaluations to compare Codex reviews with and without
`$frontend-code-review`.

## Workflow

1. Add a small frontend case under `cases/`.
2. Add its expected findings under `answer-key/`.
3. Start a fresh Codex session and run the baseline prompt:

   ```txt
   Review the code in <case-path>. Report bugs, production risks, and important improvements.
   Do not use $frontend-code-review.
   ```

4. Start another fresh Codex session and run the skill prompt:

   ```txt
   Use $frontend-code-review to review the code in <case-path>.
   ```

5. Save both outputs under `results/` and score them with `rubric.md`.
6. Repeat important cases across multiple fresh sessions before changing the
   skill. Update the skill only for repeated failure patterns.

Keep evaluation cases outside `skills/` so they are not installed with the
published skill.
