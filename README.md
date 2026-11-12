# React Router Blog (Task 27)

## Problem Statement
Implement navigation between different React routes using **react-router-dom**, so users can access different sections of the application.

## Routes
| Route | Page | What it shows |
|-------|------|---------------|
| `/` | Home | Large featured post on the left. Profile card, Popular Posts and Tags on the right |
| `/dashboard` | Dashboard | Profile card and Popular Posts on the left. Feed of posts (a video-style post and a text post) on the right |
| `/login` | Login | Centered login card (email, password) |
| `/signup` | Signup | Centered sign up card (name, email, password) |
| `/home` | - | Redirects to `/` |
| `*` | 404 | "This page does not exist" page with a link back to Home |

## Tech Stack
- React 18 + Vite
- react-router-dom v6 (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`, `Navigate`, `useNavigate`, `Outlet`)
- Plain CSS (`src/styles/index.css`)

## How to Run
```bash
npm install
npm run dev        # open http://localhost:5173
```
Production build: `npm run build` then `npm run preview`.

## Project Structure
```
src/
├── main.jsx                 BrowserRouter + AuthProvider
├── App.jsx                  Route definitions + shared Layout
├── components/              Navbar, Footer, PostCard, ProfileCard, PopularPosts, Tags, ScrollToTop
├── pages/                   Home, Dashboard, Login, Signup, NotFound
├── context/AuthContext.jsx  Simple demo authentication
├── data/posts.js            Dummy posts / popular posts / tags
├── assets/                  Logo and image illustrations (SVG)
└── styles/index.css
```

## Decisions Made
- **Nested layout route**: `Layout` renders the Navbar and Footer once and uses `<Outlet />` for the page, so every route shares the same header and footer without repeating code
- **`NavLink` for the navbar**: it adds an `active` class, which is used to underline the current page (Home / Dashboard)
- **Reusable components**: `ProfileCard`, `PopularPosts`, `Tags` and `PostCard` are shared by Home and Dashboard. Only the page layout (grid) differs
- **Simple demo authentication** (`AuthContext`): Sign Up saves the user in `localStorage`, Login checks the saved users. After a successful login or sign up the user is sent to `/dashboard` with `useNavigate`. The navbar then shows "Hi, name" and a Logout button instead of Login / SignUp. Passwords are stored as plain text in `localStorage`, which is fine for a learning project but must never be done in a real app
- **Dashboard is open (not protected)**, as in the sample screenshots, where the Dashboard is visible with the Login / SignUp buttons in the navbar
- **Form validation**: required fields, valid email format and a minimum password length of 6 on Sign Up, with clear error messages
- **`ScrollToTop`**: scrolls to the top on every route change, which `react-router-dom` does not do by default
- **404 route** (`path="*"`) so wrong URLs do not show a blank page
- **Responsive**: two column layouts collapse to one column below 800px and the navbar wraps on small screens
- **Images** are original SVG illustrations in `src/assets`, so the project has no external image dependencies. They can be replaced by real photos with the same file names
- "Read more" expands and collapses the post text

## Live Link
Not deployed (the task asks only for the ZIP upload).
