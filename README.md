<div align="center">

# Web Frontend : EDev Learning

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Pages](https://img.shields.io/badge/Pages-6-6c757d?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge)

> Front-end only (forms are UI demos), not connected to a backend.

</div>

---

## ✨ Features

- ទំព័រ **Home** មាន hero headline (typewriter effect) និង login card
- ទំព័រ **About** បង្ហាញ course overview, stats និង what you'll learn
- ទំព័រ **Service** ជា grid នៃសេវាកម្មដែលផ្តល់ជូន (courses, mentorship, career support)
- ទំព័រ **Projects** ជា card gallery នៃ student project modules
- ទំព័រ **Contact** មាន contact info និង message form
- ទំព័រ **Sign Up** សម្រាប់បង្កើត account (password confirmation)
- **Mobile hamburger menu** សម្រាប់ nav លើអេក្រង់តូច
- **Scroll-reveal animation** សម្រាប់ card/section (IntersectionObserver)
- **Client-side form validation** (required fields + email format) នៅលើ login និង contact form
- Responsive ពេញលេញ គ្រប់ទំហំអេក្រង់ (Desktop / Tablet / Mobile)

---

## 📁 Project Structure

```
EDev-Learning-Course/
├── css/
│   └── style.css         → Shared styles for every page
├── html/
│   ├── about.html        → About EDev Learning + course stats
│   ├── contact.html      → Contact info + message form
│   ├── projects.html     → Showcase of student project modules
│   ├── service.html      → Services offered (course, mentorship, etc.)
│   └── signup.html       → Create-account page
├── js/
│   └── main.js           → Mobile menu, typewriter, scroll reveal, validation
├── index.html            → Home page — hero section + login card
└── README.md
```

---

## 📄 Pages

| Page | Path | Description |
|---|---|---|
| Home | `index.html` | Hero headline, course pitch, and a login/sign-up card |
| About | `html/about.html` | Course overview, stats, and what you'll learn |
| Service | `html/service.html` | Grid of offered services (courses, mentorship, career support) |
| Projects | `html/projects.html` | Card gallery of student project modules |
| Contact | `html/contact.html` | Contact details and a message form |
| Sign Up | `html/signup.html` | Create-account form with password confirmation |

---

## 🎨 Design Notes

- **Color palette:** navy background (`#0d1b2e` → `#1c3a56`) with a single orange accent (`#f7801e`)
- **Typography:** Georgia (serif) for headings, Arial for body/UI text
- Layout ប្រើ `display:flex` លើ `<body>` ដើម្បីឲ្យ footer ជាប់នៅបាតអេក្រង់ជានិច្ច
- SVG សម្រាប់ tree silhouette, social icons និង page icons (គ្មានពឹងផ្អែក external image)

---

## 🚀 How to Run

1. Clone ឬ download repository នេះ
2. បើកឯកសារ `index.html` ដោយ browser ណាមួយ ឬប្រើ local dev server (ឧ. VS Code **Live Server**)
3. រុករកទំព័រតាមរយៈ navbar : Home / About / Service / Projects / Contact

---

## 🔧 Known Limitations & Future Improvements

Project នេះសរសេរជា plain HTML/CSS/JS សុទ្ធ (គ្មាន build tool ឬ framework) ដូច្នេះមានចំណុចខ្លះដែលដឹងស្រាប់ថាមិនទាន់ល្អឥតខ្ចោះ៖

- **Code duplication:** navbar និង social icons (SVG) ត្រូវបាន copy-paste ដដែលៗនៅគ្រប់ទំព័រទាំង 6 ព្រោះគ្មាន templating/include system។ ក្នុង production ពិតប្រាកដគួរប្រើ static site generator (ឧ. 11ty, Astro) ឬ framework component (React/Vue) ដើម្បីចែក navbar/footer ជា component តែមួយ
- **Inline `onsubmit="return false;"`** លើ search form មិនស្របគ្នាទាំងស្រុងជាមួយ pattern `addEventListener` ដែលប្រើក្នុង `main.js` សម្រាប់ login/contact/signup form; គួរផ្លាស់ទៅ unobtrusive JS ដូចគ្នា
- **Social links** ប្រើ `href="#"` ទាំងអស់, ជា placeholder សម្រាប់ demo មិនទាន់ភ្ជាប់ទៅ profile ពិតប្រាកដ
- **គ្មាន `<meta name="description">`** នៅគ្រប់ទំព័រ សម្រាប់ SEO
- Forms ទាំងអស់ជា **UI demo only** មិនទាន់ភ្ជាប់ទៅ backend/API ពិតប្រាកដ (survives client-side validation តែមិន persist data)

> ចំណុចទាំងនេះមិនប៉ះពាល់ដល់ការដំណើរការនៃគេហទំព័រទេ គ្រាន់តែជា refinement សម្រាប់ដំណាក់កាលបន្ទាប់ (production-ready) ប៉ុណ្ណោះ។
