---
id: overview
title: Architecture Overview
sidebar_position: 2
---

# System at a glance

Below is the tech stack **AwesomeProject** fits together.


### Frontend

| Framework           | Purpose                        |
| ------------------- | -------------------------------|
| React               | UI components.                 |
| React Router v7     | Navigation across pages.       |
| styled-components   | Styling components.            |
| Supabase            | Authentication.                |

### Backend

| Framework           | Purpose                        |
| ------------------- | -------------------------------|
| Node.js, Express    | Server-side logic.             |
| PostgreSQL          | Used via Supabase for database.|
| ESLint, Prettier    | Consistent code formatting.    |

## Key directories

```
docs/                → Markdown documentation
src/                 → React pages & components
static/              → Images, favicons, robots.txt…
docusaurus.config.js → Global site config
sidebars.js          → Sidebar structure
```

## Decision log (abridged)

| Date       | Choice                        | Rationale                                              |
| ---------- | ----------------------------- | ------------------------------------------------------ |
| 2025‑04‑10 | Chose Docusaurus over Next.js | Built‑in versioned docs saved weeks of boilerplate     |
| 2025‑04‑14 | Switched CSS to Tailwind      | Faster prototyping, consistent design tokens           |
| 2025‑04‑20 | Enabled Algolia search        | >10× better discoverability for long‑tail docs queries |
