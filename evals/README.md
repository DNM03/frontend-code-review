# Frontend Code Review Evaluations

Use these evaluations to compare Codex reviews with and without
`$frontend-code-review`.

## Workflow

1. Choose a small frontend case under `cases/`.
2. Read its expected findings under `answer-key/` only after the review runs.
   Do not include answer-key files in the agent's review scope.
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

## Included Suite

The committed suite covers clean controls, isolated-snippet precision, React
rendering and hydration, Next.js 16 App Router behavior, TanStack Query caching
and waterfalls, frontend security, accessibility, performance, i18n, and
TypeScript exhaustiveness.

Run the complete suite before a release candidate. During development, run the
changed category plus both clean controls.
