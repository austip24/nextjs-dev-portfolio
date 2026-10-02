# AGENTS.md

## Project Overview

This is a personal portfolio website being migrated from:

- Next.js 13 → Next.js 16
- Tailwind CSS v3 → Tailwind CSS v4
- Existing UI/components → shadcn/ui
- React/TypeScript → current versions compatible with Next.js 16

The goal is a modern, fast, maintainable personal portfolio with a polished UI, strong responsive behavior, excellent accessibility, and minimal unnecessary complexity.

Use the existing project as the source of truth during migration. Preserve existing functionality unless there is a clear reason to change it.

---

## Primary Stack

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Radix UI** where used by shadcn components
- **Lucide React** for icons
- **ESLint**
- **Prettier** if already configured

Prefer Next.js App Router conventions.

---

## Core Principles

### 1. Keep It Simple

Do not introduce abstractions unless they solve a real problem.

Prefer:

- Simple components
- Clear file structure
- Native Next.js features
- Server Components by default
- Small, reusable utilities
- shadcn/ui components where appropriate

Avoid:

- Over-engineering
- Unnecessary state management
- Excessive custom hooks
- Wrapper components that provide little value
- Large third-party dependencies for simple functionality

### 2. Preserve Existing Behavior

During the migration:

1. Understand the existing implementation.
2. Preserve existing behavior.
3. Upgrade dependencies and APIs.
4. Improve architecture only when beneficial.

Do not rewrite working features simply because a different implementation is possible.

### 3. Verify Before Changing

Before modifying a significant portion of the application:

- Inspect the relevant files.
- Understand how the current implementation works.
- Check existing dependencies.
- Check Next.js configuration.
- Check Tailwind configuration.
- Check TypeScript configuration.
- Check shadcn configuration.

Do not assume the project follows a standard template.

---

# Next.js Guidelines

## App Router

Use the App Router.

Prefer:

```text
app/
  layout.tsx
  page.tsx
  ...
```

over the Pages Router.

Use Server Components by default.

Only add:

```tsx
"use client";
```

when client-side functionality is actually required.

Typical reasons include:

- React state
- Browser APIs
- Event handlers requiring client execution
- Client-only libraries
- Interactive animations that require client-side behavior

Do not make entire page trees client components unnecessarily.

---

## Next.js 16

Use APIs and patterns compatible with Next.js 16.

Before introducing or modifying framework-specific behavior, verify the current Next.js 16 API rather than relying on assumptions from Next.js 13.

Pay particular attention to:

- Async request APIs
- Routing behavior
- Metadata
- Image handling
- Caching/revalidation
- Server/Client Component boundaries
- Middleware/proxy conventions where applicable
- Turbopack behavior

Do not preserve deprecated Next.js 13 patterns merely for compatibility.

---

# TypeScript

Use strict TypeScript.

Prefer explicit, useful types over `any`.

Avoid:

```ts
any;
```

unless there is a documented reason it is unavoidable.

Prefer:

```ts
unknown;
```

when the type is genuinely unknown and narrow it appropriately.

Use inferred types when inference is clear.

Avoid unnecessary type annotations such as:

```ts
const name: string = "Austin";
```

when TypeScript can already infer the type.

---

# Tailwind CSS v4

This project is migrating from Tailwind CSS v3 to v4.

Treat Tailwind v4 as the source of truth for new code.

Do not introduce Tailwind v3 configuration patterns into new code.

## Tailwind v4 Rules

Prefer Tailwind v4's CSS-first configuration model.

Do not recreate a large `tailwind.config.js` solely because the old v3 project had one.

Before migrating existing customizations, determine whether they should become:

- CSS variables
- `@theme` values
- regular CSS
- utility classes
- component styles

Preserve the existing visual design while modernizing the implementation.

---

## Tailwind Classes

Prefer readable class names.

Example:

```tsx
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-12">
```

Avoid unnecessarily enormous class strings when a component can be decomposed cleanly.

Do not create custom CSS for something Tailwind already handles well.

Use arbitrary values sparingly.

Prefer design-system values over repeated arbitrary values.

Instead of repeatedly using:

```tsx
text-[#143664]
```

prefer a semantic theme variable when the value represents a recurring design token.

---

# shadcn/ui

Use shadcn/ui for reusable interface primitives where appropriate.

Examples:

- Button
- Card
- Dialog
- Sheet
- Dropdown Menu
- Tooltip
- Tabs
- Badge
- Input
- Form controls

Do not install a shadcn component simply because it exists.

Use it when it improves consistency, accessibility, or maintainability.

## Customization

shadcn components are owned by the project.

It is acceptable to modify generated shadcn components when necessary for the portfolio's design system.

Do not blindly overwrite customized components when updating shadcn components.

Prefer composing existing shadcn primitives over introducing another UI library.

---

# UI / Design

The portfolio should feel:

- Modern
- Professional
- Minimal
- Fast
- Responsive
- Technically polished

Avoid excessive visual effects.

Use animation intentionally.

Prefer subtle:

- Transitions
- Hover states
- Entrance animations
- Scroll interactions
- Micro-interactions

Avoid animation that distracts from content.

Accessibility takes priority over visual effects.

---

# Responsive Design

Design mobile-first.

The site must work well at:

- Small mobile screens
- Large mobile screens
- Tablets
- Laptops
- Large desktop displays

Do not optimize exclusively for the development viewport.

Pay particular attention to:

- Navigation
- Typography
- Hero sections
- Project cards
- Images
- Spacing
- Horizontal overflow
- Touch targets

Avoid fixed widths when responsive sizing is more appropriate.

---

# Accessibility

Accessibility is required, not optional.

Use semantic HTML whenever possible.

Prefer:

```html
<nav>
	<main>
		<section>
			<article>
				<footer></footer>
			</article>
		</section>
	</main>
</nav>
```

over generic `<div>` elements.

All interactive controls must be keyboard accessible.

Images require meaningful `alt` text unless they are genuinely decorative.

Do not use color alone to communicate important information.

Maintain sufficient color contrast.

Do not remove focus indicators without replacing them with an accessible alternative.

---

# Images

Use Next.js `<Image>` when appropriate.

Optimize images for:

- Performance
- Responsive layouts
- Appropriate dimensions
- Proper loading behavior

Do not use huge source images when smaller assets are sufficient.

Use descriptive `alt` text for meaningful images.

Use empty alt text for decorative images when appropriate.

---

# SEO / Metadata

The portfolio should have strong basic SEO.

Use Next.js metadata APIs.

At minimum, configure:

- Page title
- Description
- Open Graph metadata
- Twitter/X metadata where appropriate
- Favicon
- Canonical URL when appropriate

Do not duplicate metadata unnecessarily across pages.

Use page-specific metadata when pages represent distinct content.

---

# Components

Organize components logically.

A reasonable structure is:

```text
components/
  ui/
  layout/
  sections/
  ...
```

Use `components/ui` for shadcn/ui primitives.

Use feature/section components for portfolio-specific UI.

For example:

```text
components/
  ui/
    button.tsx
    card.tsx
  sections/
    hero.tsx
    about.tsx
    projects.tsx
    experience.tsx
    contact.tsx
```

Do not create a component solely to wrap one element unless it provides meaningful reuse or organization.

Use https://ui.aceternity.com/components (https://ui.aceternity.com/llms.txt) for reference and inspiration when adding animations alongside "motion" library to add detail and enhance user experience. Prioritize unique experience for portfolio. Keep simple, don't overdo. Default to shadcn components when possible.

---

# Data

Keep portfolio content separate from presentation when practical.

For example:

```ts
const projects = [
  {
    title: "...",
    description: "...",
    technologies: [...],
    href: "...",
  },
];
```

Avoid scattering repeated portfolio content throughout JSX.

Do not introduce a database or CMS unless there is an actual requirement for one.

For a personal portfolio, static data is preferred unless dynamic behavior is necessary.

---

# Icons

Use Lucide React or existing shadcn-compatible icons.

Prefer icons with accessible labels when they are interactive.

For icon-only buttons, provide an accessible label:

```tsx
<Button aria-label="Open GitHub profile">
	<Github />
</Button>
```

Do not use arbitrary Unicode characters as substitutes for interface icons when a proper icon exists.

---

# Fonts

Use Next.js font optimization where appropriate.

Prefer:

```ts
next / font;
```

over manually importing fonts through CSS or external stylesheets when possible.

Choose typography that supports the portfolio's professional and technical aesthetic.

---

# Performance

Performance is a priority.

Prefer Server Components.

Avoid unnecessary client-side JavaScript.

Do not install large libraries for simple functionality.

Be cautious with:

- Animation libraries
- Charting libraries
