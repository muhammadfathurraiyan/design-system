# Copilot Instructions — design-system

A Next.js 16 App Router showcase of a vendored shadcn/ui component library. The repo is a component gallery, not an app with routes: `app/page.tsx` renders a single preview page (`components/home/component-preview.tsx`) that composes primitives from `components/ui/`.

## Commands

```bash
npm run dev        # next dev (regenerates the AGENTS.md block)
npm run build      # next build
npm run lint       # eslint (whole repo)
npx eslint components/ui/button.tsx        # lint a single file
npx tsc --noEmit                          # typecheck
npx prettier --check <file>               # format check
```

There is no test suite and no test runner configured — do not add test commands or assume Vitest/Jest/Playwright exist.

## Architecture

- **Next.js 16** with `cacheComponents`, `partialPrefetching`, and a Turbopack CSS rule mapping `*.css` to `@tailwindcss/turbopack` (`next.config.ts`). This Next version has breaking changes versus older training data: read the matching guide in `node_modules/next/dist/docs/` before writing Next-specific code. `AGENTS.md` holds the managed block that `next dev` re-adds — keep it in commits rather than deleting it.
- **Base UI, not Radix.** Components wrap `@base-ui/react/*` primitives. Composition uses `render={<Button />}`, never `asChild`. Custom element wrappers (`Badge`, `Item`, `Bubble`, `Marker`, `Attachment`, `Breadcrumb`, `ButtonGroup`) use `useRender` + `mergeProps` from `@base-ui/react`.
- **No `clsx`/`tailwind-merge`.** Class merging is `import { cn } from "cn"` (the compiled `cn` package). `lib/utils.ts` only re-exports it; do not import `@/lib/utils`.
- **Tailwind v4, CSS-variable theme.** Tokens live in `app/globals.css` (`:root`, `.dark`, `@theme inline`). shadcn config is `components.json` (`style: base-vega`, `base: base`, `iconLibrary: remixicon`). Update tokens in `app/globals.css`; never add a `tailwind.config`.
- **Icons are `@remixicon/react`.** Never import `lucide-react`.
- **Chat primitives** (`MessageScroller`, `Questionnaire`) come from `@shadcn/react/*`; the rest are local wrappers in `components/ui/`.
- **Code highlighting** is lazy: `lib/highlighter.tsx` maps language name → dynamic Shiki import (plus aliases). A new language must be added to both `languages` and, if it has a short form, `aliases`. `hooks/use-highlighted-code.ts` streams Shiki grammar state line-by-line — preserve the incremental-tokenization design.

## Conventions

- Every primitive carries a `data-slot="<kebab-name>"` attribute (roots set it directly; `useRender`-based components pass `state: { slot }`). Styling across components keys off these (`has-[>[...]]`, `*:data-[slot=...]`), so keep them stable.
- Variants use `cva` with a `defaultVariants` block. Export the variants object only where callers compose from outside (`buttonVariants`, `badgeVariants`, `toggleVariants`, `tabsListVariants`, `markerVariants`) — e.g. `className={buttonVariants({ variant, size })}` in `components/home/component-preview.tsx`.
- `"use client"` only on components that need state, effects, or event handlers (~39 of 63 files in `components/ui/`). Server components stay directives-free.
- Next 16 typed props are global: `LayoutProps<"/">`, `PageProps<"/route">`. Don't hand-write `params`/`children` shapes.
- **`react-hooks/set-state-in-effect` is enforced.** Do not call `setState` synchronously in an effect body; `hooks/use-mobile.ts` and `components/ui/carousel.tsx` follow this pattern. For external stores (matchMedia, Embla) use `React.useSyncExternalStore(subscribe, getSnapshot, serverSnapshot)`.
- Styling rules from `.agents/skills/shadcn/rules/`: semantic tokens only (`bg-primary`, `text-muted-foreground`) — no raw palette colors and no manual `dark:` color overrides; `size-*` instead of `w-* h-*` when equal; `gap-*` with flex instead of `space-x-*`/`space-y-*`; `truncate`; no manual `z-index` on overlays; icons inside components get `data-icon="inline-start" | "inline-end"` and no sizing classes.
- Prettier is configured with `prettier-plugin-tailwindcss`, but the checked-in components are semicolon-free generator output and `prettier --check` does not currently pass repo-wide. Do not run `prettier --write` across `components/ui/` — it would rewrite every file.

## Adding or changing components

Use the shadcn CLI rather than writing or copying component source by hand:

```bash
npx shadcn@latest info --json          # project config, installed components, resolved paths
npx shadcn@latest docs <component>     # docs + example URLs
npx shadcn@latest add <component> --dry-run
npx shadcn@latest add <component> --diff <file>
```

`.agents/skills/shadcn/` holds the full skill (composition, styling, forms, icons, base-vs-radix, design-system page spec). Never use `--overwrite` without explicit approval, and do not fetch raw component files from GitHub. After adding from a third-party registry, rewrite import paths to the `@` alias and swap icons for `@remixicon/react`.

The showcase page is structured per `.agents/skills/shadcn/design-system-page.md` (foundations → components → compositions).
