# Austin Pierson — Portfolio

Single-page developer portfolio built with **Next.js 16** (App Router, Turbopack), **React 19**, **Tailwind CSS v4**, **shadcn/ui**, and **motion**. Deployed on Vercel at https://austip24.vercel.app.

## Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build && pnpm start
```

## Updating content

All copy lives in `data/` and is kept separate from the components:

| File                 | Contents                                          |
| -------------------- | ------------------------------------------------- |
| `data/site.ts`       | Name, role, summary, email, links, nav sections   |
| `data/experience.ts` | Work history (timeline)                           |
| `data/education.ts`  | Degrees                                           |
| `data/skills.ts`     | Tech list shown in the About section              |
| `data/projects.ts`   | Project cards (images live in `public/works/`)    |

### Resume

The Resume buttons link to **`public/Pierson_Austin_Resume.pdf`** (path set in `data/site.ts`). To update it, export a web-safe copy (no phone number or street address) and replace that file. Then update `data/` to match the new resume.

## Structure

```
app/                 layout, page, metadata, icon, OG image, sitemap, robots
components/ui/       shadcn/ui primitives (project-owned)
components/layout/   header, mobile nav, footer, section wrapper
components/sections/ hero, about, experience, projects, contact
components/motion/   small client-only animation helpers
data/                portfolio content
```

The old `/about`, `/skills`, `/works`, and `/contact` routes redirect to the matching sections (`/skills` goes to About) (see `next.config.ts`).
