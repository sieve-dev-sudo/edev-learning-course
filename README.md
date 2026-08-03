## Web Dev Course Landing Page : EDev Learning

A multi-page, front-end practice project built to sharpen HTML/CSS skills by
recreating a dark-themed course/login landing page and extending it into a
full mini-site with About, Service, Design, and Contact pages.

> **Status:** Front-end only (static). Login, Sign up, Search, and the Contact
> form are UI mock-ups — they don't connect to a backend or database yet.

## Live Preview

Open `index.html` in a browser, or serve the folder with a local dev server
(e.g. VS Code's **Live Server** extension) and visit `/index.html`.

## Project Structure

```
webdev-course-landing/
├── index.html            # Home page — hero section + login card
├── css/
│   └── style.css         # Shared styles for every page
├── js/
│   └── main.js           # Shared behavior: mobile menu, scroll reveal, form validation
└── html/
    ├── about.html        # About EDev Learning + course stats
    ├── service.html      # Services offered (course, mentorship, etc.)
    ├── design.html       # Showcase of student project modules
    ├── contact.html      # Contact info + message form
    └── signup.html       # Create-account page
```

## Pages

| Page | Path | Description |
|---|---|---|
| Home | `index.html` | Hero headline, course pitch, and a login/sign-up card |
| About | `html/about.html` | Course overview, stats, and what you'll learn |
| Service | `html/service.html` | Grid of offered services (courses, mentorship, career support) |
| Design | `html/design.html` | Card gallery of student project modules |
| Contact | `html/contact.html` | Contact details and a message form |
| Sign Up | `html/signup.html` | Create-account form with password confirmation |

## Tech Stack

- **HTML5** — semantic page structure
- **CSS3** — Flexbox, CSS Grid, custom properties (`:root` variables), responsive media queries
- **SVG** — hand-drawn tree silhouette, social icons, and page icons (no external image dependencies)
- **Vanilla JS** (`js/main.js`, shared across every page) —
  - Mobile hamburger menu for the nav on small screens
  - Scroll-reveal fade-in animation for cards/sections (`IntersectionObserver`)
  - Lightweight client-side form validation (required fields + email format) on the login and contact forms, with inline error messages and a success banner

## Design Notes

- Color palette: navy background (`#0d1b2e` → `#1c3a56`) with a single orange
  accent (`#f7801e`)
- Typography: Georgia (serif) for headings, Arial for body/UI text
- Layout uses `display:flex` on `<body>` so the footer stays pinned to the
  bottom of the viewport on short pages instead of floating mid-screen
- Fully responsive down to mobile (see the `RESPONSIVE` section in
  `style.css`)

## Possible Next Steps

- Hook up the login/sign up/contact forms to a real backend
- Add active-page nav highlighting via JavaScript
- Replace the SVG tree with a real background photo
