# Frontend Review Skills

A growing collection of Agent Skills for practical frontend engineering
reviews.

[![skills.sh](https://skills.sh/b/DNM03/frontend-code-review)](https://skills.sh/DNM03/frontend-code-review)

## Available skills

### `frontend-code-review`

Review React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, and TanStack Query
code for production risks and UI quality.

## Install

After publishing this repository to GitHub, list the available skills with:

```bash
npx skills add DNM03/frontend-code-review --list
```

Install `frontend-code-review` for Codex with:

```bash
npx skills add DNM03/frontend-code-review --skill frontend-code-review --agent codex
```

Install it for Claude Code with:

```bash
npx skills add DNM03/frontend-code-review --skill frontend-code-review --agent claude-code
```

The repository keeps installable packages under `skills/<skill-name>/`, which
is one of the layouts discovered by the `skills` CLI.

## Publish

`skills.sh` installs skills from Git repositories. There is no separate package
upload step for this layout.

```bash
git init
git add .
git commit -m "feat: publish frontend review skills"
gh repo create DNM03/frontend-code-review --public --source=. --remote=origin --push
```

There is no separate upload or submission step. After pushing, run one install
from the GitHub source so `skills.sh` can discover the repository through
anonymous CLI telemetry:

```bash
npx skills add DNM03/frontend-code-review --skill frontend-code-review --agent codex
```

## Structure

```txt
frontend-code-review/
├── README.md
├── LICENSE
├── evals/
└── skills/
    └── frontend-code-review/
        ├── SKILL.md
        ├── agents/
        │   └── openai.yaml
        ├── references/
        └── examples/
```

## Evaluate

Use the manual A/B workflow in [`evals/README.md`](evals/README.md) to compare
fresh Codex reviews with and without a skill.
