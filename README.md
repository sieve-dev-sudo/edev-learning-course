<div align="center">

# Web Frontend : EDev Learning

</div>

## 🛠️ Tech Stack

**ភាសាសរសេរកូដ និង ឧបករណ៍**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)
![Pages](https://img.shields.io/badge/Pages-6-6c757d?style=flat)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=flat)

---

## ✨ Features

- **Multi-Page Website**: ទំព័រទាំង 6 (Home, About, Service, Projects, Contact, Sign Up) ប្រើ style និង script រួមគ្នា
- **Hero + Typewriter Effect**: ទំព័រ Home មាន headline បែប typewriter និង login card
- **Course Overview**: ទំព័រ About បង្ហាញ course overview, stats និង what you'll learn
- **Service Grid**: ទំព័រ Service បង្ហាញសេវាកម្ម (courses, mentorship, career support) ជា grid
- **Project Gallery**: ទំព័រ Projects ជា card gallery នៃ student project modules
- **Contact Form**: ទំព័រ Contact មាន contact info និង message form
- **Sign Up Form**: បង្កើត account ជាមួយ password confirmation
- **Mobile Hamburger Menu**: nav ប្តូរជា hamburger លើអេក្រង់តូច (≤480px)
- **Scroll-Reveal Animation**: card/section លេចឡើងពេល scroll (IntersectionObserver)
- **Client-Side Form Validation**: ឆែក required fields និង email format លើ login, contact និង sign up form
- **Accessibility**: `aria-label`, `aria-expanded`, `:focus-visible` និងគាំទ្រ `prefers-reduced-motion`
- **No Dependencies**: plain HTML/CSS/JS សុទ្ធ គ្មាន framework ឬ build tool

---

## 📱 Responsive Breakpoints

Layout ប្តូរដោយស្វ័យប្រវត្តិតាមទំហំអេក្រង់ ដោយគ្មានចាំបាច់ setup អ្វីទេ :

| ទំហំអេក្រង់ | អ្វីដែលផ្លាស់ប្តូរ |
|---|---|
| Desktop (>1100px) | Hero ជា 2 ជួរ (អត្ថបទ + login card), navbar ពេញ |
| ≤1100px | Hero ប្តូរជាជួរតែមួយ, អត្ថបទនិងប៊ូតុងនៅកណ្តាល |
| ≤820px | Navbar នៅកណ្តាល, search box ពេញទទឹង, ទំហំ heading តូចជាងមុន |
| ≤480px | បង្ហាញ hamburger menu, លាក់ search box, nav links ជា dropdown |

---

## 📄 Pages

| Page | Path | Description |
|---|---|---|
| Home | `index.html` | Hero headline, course pitch, និង login/sign-up card |
| About | `html/about.html` | Course overview, stats និង what you'll learn |
| Service | `html/service.html` | Grid នៃសេវាកម្ម (courses, mentorship, career support) |
| Projects | `html/projects.html` | Card gallery នៃ student project modules |
| Contact | `html/contact.html` | Contact details និង message form |
| Sign Up | `html/signup.html` | Create-account form ជាមួយ password confirmation |

---

## 📁 Project Structure

```
Edev-Learning-Course/
├── css/
│   └── style.css         → Shared styles សម្រាប់គ្រប់ទំព័រ
├── html/
│   ├── about.html        → About EDev Learning + course stats
│   ├── contact.html      → Contact info + message form
│   ├── projects.html     → Showcase នៃ student project modules
│   ├── service.html      → Services (course, mentorship, ។ល។)
│   └── signup.html       → Create-account page
├── js/
│   └── main.js           → Mobile menu, typewriter, scroll reveal, validation
├── index.html            → Home page : hero section + login card
└── README.md
```

---

## 🎨 Design Notes

- **Color palette:** navy background (`#0d1b2e` → `#1c3a56`) ជាមួយ orange accent តែមួយ (`#f7801e`)
- **Typography:** Georgia (serif) សម្រាប់ headings, Arial សម្រាប់ body/UI text
- Layout ប្រើ `display:flex` លើ `<body>` ដើម្បីឲ្យ footer ជាប់នៅបាតអេក្រង់ជានិច្ច
- SVG សម្រាប់ tree silhouette, social icons និង page icons (គ្មានពឹងផ្អែក external image)

---

## 🚀 How to Run

1. Clone Repository :

   ```bash
   git clone <url-repo> edev-learning-course
   cd edev-learning-course
   ```

2. បើកឯកសារ `index.html` ដោយ browser ណាមួយ ឬប្រើ local dev server (ឧ. VS Code **Live Server**)

3. រុករកទំព័រតាមរយៈ navbar : Home / About / Service / Projects / Contact

មិនចាំបាច់ install dependencies អ្វីទេ។

---

## 🔧 Known Limitations & Future Improvements

- **Code duplication:** navbar និង social icons (SVG) ត្រូវបាន copy-paste នៅគ្រប់ទំព័រទាំង 6 ព្រោះគ្មាន templating/include system។ ក្នុង production គួរប្រើ static site generator (ឧ. 11ty, Astro) ឬ framework component (React/Vue)
- **Inline `onsubmit="return false;"`** លើ search form មិនស្របជាមួយ pattern `addEventListener` ក្នុង `main.js`; គួរផ្លាស់ទៅ unobtrusive JS ដូចគ្នា
- **Social links** ប្រើ `href="#"` ជា placeholder សម្រាប់ demo
- **គ្មាន `<meta name="description">`** នៅគ្រប់ទំព័រ សម្រាប់ SEO
- Forms ទាំងអស់ជា **UI demo only** (មាន client-side validation តែមិន persist data)

---

## 👤 Author

**Built with ❤️ and code by Mr. Siev E**
