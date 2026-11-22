<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project overview

`design-system` is a Next.js 16 App Router app whose purpose is showcasing a vendored shadcn/ui component library. There is one route: `app/page.tsx` renders `components/home/component-preview.tsx`, which composes primitives from `components/ui/`. This is a component gallery, not a product app.

## Commands

```bash
npm run dev                            # next dev
npm run build                          # next build
npm run lint                           # eslint, whole repo
npx eslint components/ui/button.tsx    # lint one file
npx tsc --noEmit                       # typecheck
npx prettier --check <file>            # format check
```

No test runner is configured (no Vitest/Jest/Playwright). Do not invent test commands.

## Architecture

- **Next.js 16** with `cacheComponents`, `partialPrefetching`, and a Turbopack `*.css` rule pointing at `@tailwindcss/turbopack` (see `next.config.ts`). APIs differ from older Next versions — read `node_modules/next/dist/docs/` before writing Next-specific code.
- `AGENTS.md` contains managed blocks that `next dev` writes and restores (`node_modules/next/dist/server/lib/generate-agent-files.js`). `experimental.agentFeedback` is enabled, so a feedback block is also added. Commit them; deleting them only recreates uncommitted changes. Edit around the blocks, never inside them.
- **Base UI, not Radix.** Components wrap `@base-ui/react/*`. Composition uses `render={<Button />}`, never `asChild`. Element-polymorphic wrappers (`Badge`, `Item`, `Bubble`, `Marker`, `Attachment`, `Breadcrumb`, `ButtonGroup`) are built with `useRender` + `mergeProps` from `@base-ui/react`.
- **Class merging is `import { cn } from "cn"`** (the compiled `cn` package). There is no `clsx` or `tailwind-merge` dependency and `lib/utils.ts` only re-exports `cn` from `cn` — import from `"cn"` directly.
- **Tailwind v4 with CSS-variable theming.** Tokens live in `app/globals.css` (`:root`, `.dark`, `@theme inline`). shadcn config is `components.json` (`style: base-vega`, `base: base`, `iconLibrary: remixicon`, aliases under `@/`). Change tokens in `app/globals.css`; there is no `tailwind.config`.
- **Icons come from `@remixicon/react`.** Not `lucide-react`.
- **Chat primitives** — `MessageScroller` and `Questionnaire` wrap `@shadcn/react/message-scroller` and `@shadcn/react/questionnaire`; other components in `components/ui/` are local.
- **Code highlighting** — `lib/highlighter.tsx` lazily imports Shiki grammars per language and holds an alias map; new languages go in both `languages` and `aliases`. `hooks/use-highlighted-code.ts` tokenizes incrementally as code streams, carrying `GrammarState` between renders; preserve that design rather than re-tokenizing the whole string.

## Conventions

- Every component part sets `data-slot="<kebab-name>"` (roots directly, `useRender` components via `state.slot`). Cross-component CSS selects on these (`has-[>[...]]`, `*:data-[slot=...]`), so don't rename them.
- Variants use `cva` with `defaultVariants`. The variants object is exported only where external composition needs it: `buttonVariants`, `badgeVariants`, `toggleVariants`, `tabsListVariants`, `markerVariants`.
- `"use client"` only where state, effects, or handlers are needed; purely presentational components stay server-compatible.
- Next 16 provides global prop types — type layouts as `LayoutProps<"/">`, pages as `PageProps<"/route">`. Don't hand-roll `params`/`children`.
- **`react-hooks/set-state-in-effect` is enforced by ESLint.** Never call `setState` synchronously in an effect body. For external stores (matchMedia, Embla) use `React.useSyncExternalStore(subscribe, getSnapshot, serverSnapshot)`. `hooks/use-mobile.ts` and `components/ui/carousel.tsx` follow this pattern.
- Styling rules (`.agents/skills/shadcn/rules/styling.md`, `icons.md`): semantic tokens only (`bg-primary`, `text-muted-foreground`) — no raw palette colors, no manual `dark:` color overrides; `size-*` when width equals height; `gap-*` on flex instead of `space-x-*`/`space-y-*`; `truncate`; no manual `z-index` on overlays; icons inside components take `data-icon="inline-start" | "inline-end"` and no sizing classes.
- Prettier is configured with `prettier-plugin-tailwindcss`, but the checked-in components are semicolon-free generator output and `prettier --check` fails repo-wide. Do not `prettier --write` across `components/ui/` — it rewrites every file.

## Changing components

Prefer the shadcn CLI over hand-writing or copying source:

```bash
npx shadcn@latest info --json          # config, installed components, resolved paths
npx shadcn@latest docs <component>     # docs and example URLs
npx shadcn@latest add <component> --dry-run
npx shadcn@latest add <component> --diff <file>
```

`.agents/skills/shadcn/SKILL.md` and `.agents/skills/shadcn/rules/` hold the full guidance (composition, forms, icons, base-vs-radix, styling). Don't fetch raw component files from GitHub, and don't use `--overwrite` without explicit approval. After adding from a third-party registry, rewrite import paths to the `@` alias and swap icons to `@remixicon/react`.

The showcase page follows `.agents/skills/shadcn/design-system-page.md`: foundations, then components, then compositions.

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->
