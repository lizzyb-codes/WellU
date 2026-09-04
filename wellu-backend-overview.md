# Wellu Backend — What It Tracks

This document summarizes everything the Spring Boot backend manages: the data it stores, the actions it exposes, and who can access what.

## 1. Users (Authentication)

Tracked per user:
- `id` — unique identifier
- `username` — unique
- `email` — unique
- `password` — stored as a BCrypt hash (never plaintext)

What it enables:
- Registering a new account
- Logging in and receiving a JWT (session token)
- Verifying identity on protected requests via that token

## 2. Dashboard Items

Tracked per item:
- `id`
- `title`
- `description`
- `imageUrl`
- `createdAt` — timestamp, set automatically

What it enables:
- Listing all dashboard items (public — no login needed)
- Viewing a single item by id (public)
- Creating a new item (requires login)
- Editing an existing item (requires login)
- Deleting an item (requires login)

## 3. Contact Messages

Tracked per submission:
- `id`
- `name`
- `email`
- `message`
- `submittedAt` — timestamp, set automatically

What it enables:
- Anyone visiting the site can submit the contact form
- Submissions are saved to the database for later review (no admin-viewing endpoint built yet — see "Not yet covered" below)

## 4. Access Control Summary

| Area | Who can access |
|---|---|
| Register / Login | Anyone |
| View dashboard items | Anyone |
| Create / edit / delete dashboard items | Logged-in users only (valid JWT) |
| Submit contact form | Anyone |

## 5. Full Endpoint List

| Method | Endpoint | Auth required? | Purpose |
|---|---|---|---|
| POST | `/api/auth/register` | No | Create an account |
| POST | `/api/auth/login` | No | Log in, get a token |
| GET | `/api/dashboard` | No | List all dashboard items |
| GET | `/api/dashboard/{id}` | No | Get one dashboard item |
| POST | `/api/dashboard` | Yes | Create a dashboard item |
| PUT | `/api/dashboard/{id}` | Yes | Update a dashboard item |
| DELETE | `/api/dashboard/{id}` | Yes | Delete a dashboard item |
| POST | `/api/contact` | No | Submit the contact form |

## 6. Not Yet Covered

Things the current backend does **not** track or do, in case you want them added later:
- An endpoint for admins to view/list submitted contact messages
- Roles/permissions (e.g. "admin" vs "student" — right now every logged-in user has equal access)
- Password reset / forgot-password flow
- Image upload/storage for dashboard item photos (currently just stores a URL string)
- Pagination or search/filtering on dashboard items
- Rate limiting on the contact form or login endpoint
