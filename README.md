# NextIdea – Startup Idea Sharing Platform
live Link : https://my-idea-share-platform.vercel.app/
---

## Project Overview

NextIdea is a web-based startup idea sharing platform where users can share innovative ideas, explore community ideas, and engage through comments and discussions.

The platform focuses on idea validation, collaboration, and innovation, allowing users to improve concepts through feedback instead of scheduling or booking systems.

---

## Key Features

- Secure Authentication (Email/Password + Google Login)
- Add, Edit & Delete Startup Ideas
- Explore all user-submitted ideas
- Search ideas by title (case-insensitive)
- Filter ideas by category
- Comment system (Add, Edit, Delete comments)
- User profile management
- My Ideas dashboard
- My Interactions tracking
- Dark/Light theme support
- Protected routes with JWT authentication
- Fully responsive (Mobile, Tablet, Desktop)
- Trending ideas section based on engagement

---

## Tech Stack

Frontend:
- Next.js (App Router)
- Tailwind CSS / HeroUI
- Animate.css
- React Hot Toast

Backend:
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- REST API

---

## Authentication System
- Better Auth authentication
- JWT based authentication
- Token generated on login
- Token stored on client-side
- Protected routes using middleware
- Email & Password login
- Google login

---

## Main Pages

Home Page:
- Hero banner (3 slides)
- Trending ideas (6 cards)
- CTA: Explore Ideas

Ideas Page:
- All ideas in 3-column grid
- Search system (case-insensitive regex)
- Category filter
- View Details button

Add Idea (Private):
- Submit startup ideas
- Save to database
- Success notification

Idea Details (Private):
- Full idea information
- Comment system:
  - Add comment
  - Edit comment
  - Delete comment

My Ideas (Private):
- User created ideas
- Update and delete functionality

My Interactions (Private):
- User comment history

---

## Extra Features

- Dynamic route-based title (SEO friendly)
- Custom 404 page
- Loading spinner during data fetching
- Toast notifications for all actions
- Fully responsive UI
- Protected routing with redirect system

---

## Search and Filter Logic

- Search by title using regex (case-insensitive)
- Filter by category
- Optional date range filter using $gte and $lte

---

## Theme System

- Global Dark/Light mode toggle
- Consistent design tokens:
  - bg-background
  - text-foreground
- Consistent UI across all pages

---

## Responsive Design

- Mobile friendly
- Tablet optimized
- Desktop ready

---

## Project Goal

The goal of NextIdea is to build a collaborative platform where users can share startup ideas, validate concepts through feedback, and improve innovation through community engagement.
