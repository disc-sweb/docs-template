---
id: overview
title: Documentation Overview
sidebar_position: 2
---

# Project Overview 

## Project Vision and Goals 
The purpose of this redesign is to maintain the current design as much as possible while integrating user-friendly practices. 

The feature we focused on adding to the website was a new courses page. Users can log in and view the courses they own, as well as browse and purchase new courses. A short preview of each course is given before being prompted to pay to further watch the course. 

## Target Audience 
Our target audience is people who are interested in childbirth and doula education. Info should be easily searchable for the target audience, allowing doula training for existing and aspiring doulas to be accessible. 

## Key Features of the Redesign 

| Feature             | Why it matters                                                                       |
| ------------------- | ------------------------------------------------------------------------------------ |
| Home page           | Utilizes user-friendly practices for a professional first impression to users.       |
| Admin login         | Allows admins add or edit attributes of online courses.                              |
| User login          | Allows users to watch courses they already own and pay for new courses.              |
| Courses page        | Allows users to see previews of courses they are interested in, as well as provide a brief description of the course content. |

## Tech Stack 

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
| ESLint, Prettier    | Consistent code formatting.               |
