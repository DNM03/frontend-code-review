# Frontend Review Skills

Agent skills for practical frontend engineering reviews.

## Available Skill

### `frontend-code-review`

Review React, Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and
TanStack Query code for:

- runtime bugs and production risks
- React and Next.js Server/Client Component boundaries
- Server Actions, route handlers, and cache invalidation
- data fetching, mutations, query keys, and request waterfalls
- frontend security boundaries, unsafe HTML, URLs, and secrets
- TypeScript contracts
- accessibility and responsive UI
- loading, empty, error, and disabled states
- performance, SEO metadata, and localization gaps

The skill prioritizes concrete findings with severity, impact, and focused
fixes. For repository reviews, it reports clickable file and line references.
For isolated snippets, it separates verified issues from context-dependent
considerations.

## Install

List the available skills:

```bash
npx skills add DNM03/frontend-code-review --list
```

Install for Codex:

```bash
npx skills add DNM03/frontend-code-review \
  --skill frontend-code-review \
  --agent codex
```

Install for Claude Code:

```bash
npx skills add DNM03/frontend-code-review \
  --skill frontend-code-review \
  --agent claude-code
```

Add `--global` to install the skill for all projects.

## Use

Start a fresh agent session after installation.

Review the current branch:

```txt
Use $frontend-code-review to review the current branch against main.
Prioritize production bugs, accessibility, UX states, and maintainability.
Report severity-ordered findings with clickable file and line references.
```

Review one file:

```txt
Use $frontend-code-review to review src/components/CreateJobForm.tsx.
```

Review a pasted snippet without repository assumptions:

```txt
Use $frontend-code-review to review only this pasted snippet.
Do not inspect repository context.
```

## Contributing

Installable skills live under `skills/`. The committed regression fixtures and
manual A/B workflow live under [`evals/`](evals/README.md).

```txt
skills/
└── frontend-code-review/
    ├── SKILL.md
    ├── agents/
    ├── references/
    └── examples/
```

## License

[MIT](LICENSE)
