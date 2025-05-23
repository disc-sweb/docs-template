---
id: usage
title: Usage Guide
sidebar_position: 4
---

# Usage guide

Guidance on navigating the new website, including key features.

## Website Navigation

| Page                    | Route                         | Purpose                                                                                         |
| ----------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------- |
| **Home**                | `/`                           | Landing page introducing the platform and guiding users to other pages.                         |
| **Login**               | `/login`                      | Login with existing account or redirect to Signup or Forgot Password.                           |
| **Courses**             | `/courses`                    | Browse available training courses and filter by language or category.                           |
| **Course Detail**       | `/courses/:courseId`          | Detailed view of a specific course with video player.                                           |
| **Course Registration** | `/courses/:courseId/register` | Register for a specific course, redirect to Payment, and Confirmation page for the transaction. |

Admin will also have access to the Upload Course and Edit Course pages in order to add, delete, or edit courses in this website.

## Development workflow

### Start the live‑reload server

```bash
npm run start
```

This command will run a local server at `http://localhost:3001` and supports hot reloading on changes to source files.

### Creating Content

To add a new page to the website, following the existing file structure for naming and organization:

```bash
mkdir src/pages/new-page
touch src/pages/new-page/NewPage.jsx
```

To add a new reusable component:

```bash
mkdir src/common/components/new-component
touch src/common/components/new-component/NewComponent.jsx
```

### Build for Production

```bash
npm run build
```

Creates an optimized production build.

## Theming and Styling

Modify styles in `src/App.css`, the appropriate stylesheet file, or inside the `.jsx` file.
