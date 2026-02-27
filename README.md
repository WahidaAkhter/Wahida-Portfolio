<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&pause=1000&color=3B82F6&center=true&vCenter=true&random=false&width=500&lines=Wahida's+Portfolio;A+Passionate+Web+Developer" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://wahida-portfolios.netlify.app/">
    <img src="https://img.shields.io/badge/🌐_Live_Site-Visit_Now-blue?style=for-the-badge" alt="Live Site" />
  </a>
  <a href="https://github.com/WahidaAkhter">
    <img src="https://img.shields.io/badge/GitHub-WahidaAkhter-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/wahida-akhter">
    <img src="https://img.shields.io/badge/LinkedIn-Wahida_Akhter-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn" />
  </a>
</p>

---

## 👋 About This Project

This is my personal developer portfolio — a place where I showcase who I am, what I build, and how I approach web development. I designed and developed it from scratch to reflect my style: clean, modern, and interactive. It's not just a static page; I wanted visitors to actually *feel* something when they scroll through it, so I put a lot of thought into animations, layout, and responsiveness.

Whether you're a recruiter, a fellow developer, or someone who just stumbled across this — welcome! I hope you enjoy exploring it as much as I enjoyed building it.

---

## 🛠️ Built With

Here's every piece of technology that went into bringing this portfolio to life:

| Technology | What I Used It For |
|---|---|
| **React 19** | The entire UI is component-based. I broke everything into reusable pieces — `Navbar`, `Hero`, `Technologies`, `Projects`, `Contact`, and `Footer` — which makes the code super easy to maintain and extend. |
| **Vite 6** | My build tool of choice. It gives me lightning-fast hot module replacement during development and produces an optimized production bundle. Way faster than Create React App for a project like this. |
| **Tailwind CSS 3** | I styled the whole site using Tailwind's utility classes. It let me build a fully responsive, dark-themed layout without writing a single separate CSS file (well, almost — just a tiny `index.css` for the base setup). |
| **Framer Motion** | This is where the magic comes in. I used Framer Motion for the hero section slide-in, the bouncing tech icons, staggered project card reveals, and the letter-by-letter typing animation in the hero text. Every animation was hand-tuned. |
| **React Icons** | For all the icons across the site — social media links in the navbar (GitHub, LinkedIn, Facebook, Instagram), tech stack icons (HTML5, CSS3, JavaScript, React, Tailwind, Bootstrap, Framer), and the hamburger menu toggle. |
| **PostCSS + Autoprefixer** | Running behind the scenes to process Tailwind's CSS and automatically add vendor prefixes so everything looks consistent across different browsers. |
| **ESLint** | Keeps my code clean and catches potential bugs before they become real problems. I configured it with React-specific plugins for hooks and refresh rules. |

---

## 🖥️ What It Looks Like (Section Breakdown)

The portfolio is structured into six distinct sections, each serving a clear purpose:

**1. Navigation Bar** — Social media icons (GitHub, LinkedIn, Facebook, Instagram) aligned to the right. On mobile, everything collapses into a clean hamburger menu with smooth open/close transitions.

**2. Hero Section** — The first thing visitors see. Features my name, a typing animation that spells out *"A Passionate Web Developer"* letter-by-letter with a cursor effect, a short bio paragraph, my photo, and a direct link to download my resume.

**3. Technologies** — Floating, animated tech icons that bounce continuously. Each icon has a staggered delay so the motion feels organic, not robotic. Hovering over any icon scales it up for a nice interactive touch.

**4. Projects** — A responsive grid of project cards that slide in from below as you scroll. Each card shows a title, description, screenshot, and a link to the GitHub repository. There's also a "See More Projects on GitHub" button at the bottom for anyone who wants to dig deeper.

**5. Contact Form** — A minimal, elegant form with fields for name, email, and message. Styled with Tailwind's dark slate tones and blue focus rings so it blends naturally with the rest of the site.

**6. Footer** — Simple and clean. Just a note saying the site was designed and developed by me ❤️.

---

## ⚙️ How It Works Under the Hood

Here's a quick look at what happens behind the scenes when you visit the site:

```
wahida-portfolio/
│
├── index.html              ← Entry point (Vite injects the React app here)
├── vite.config.js           ← Vite configuration with React plugin
├── tailwind.config.js       ← Tailwind scans all JSX files for utility classes
├── postcss.config.js        ← PostCSS pipeline (Tailwind + Autoprefixer)
├── package.json             ← Dependencies and scripts
│
├── public/
│   └── wahida resume up.pdf ← Downloadable resume
│
└── src/
    ├── main.jsx             ← React DOM render entry
    ├── App.jsx              ← Root component (assembles all sections)
    ├── index.css            ← Tailwind base/components/utilities imports
    │
    ├── assets/              ← Images (profile photo, project screenshots, favicon)
    │
    └── components/
        ├── Navbar.jsx                  ← Responsive nav with social links
        ├── Hero.jsx                    ← Hero section with photo + typing animation
        ├── LetterByLetterWithCursor.jsx ← Custom typing effect component
        ├── Technologies.jsx            ← Animated floating tech icons
        ├── Projects.jsx                ← Project grid with scroll-triggered reveals
        ├── ProjectCard.jsx             ← Reusable card component for each project
        ├── Contact.jsx                 ← Contact form
        └── Footer.jsx                  ← Footer with attribution
```

**The flow is pretty straightforward:**

1. Vite serves `index.html`, which loads `main.jsx`.
2. `main.jsx` renders the `App` component into the DOM.
3. `App.jsx` composes all six sections in order — Navbar → Hero → Technologies → Projects → Contact → Footer.
4. Tailwind CSS handles all styling via utility classes; PostCSS and Autoprefixer process everything at build time.
5. Framer Motion powers every animation — from the hero entrance to the project card reveals.
6. The built site is deployed to **Netlify** for free hosting with automatic HTTPS and fast CDN delivery.

---

## 🚀 Run It Locally

If you want to play around with the code on your own machine:

```bash
# Clone the repository
git clone https://github.com/WahidaAkhter/Wahida-Portfolio.git

# Navigate into the project
cd Wahida-Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site should open at `http://localhost:5173` (or whatever port Vite picks). Any changes you make to the source files will hot-reload instantly.

To build for production:

```bash
npm run build
```

This generates an optimized `dist/` folder ready for deployment.

---

## 📬 Let's Connect

I'm always happy to chat about web development, collaboration opportunities, or just tech in general. Feel free to reach out!

<p align="center">
  <a href="https://github.com/WahidaAkhter">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/wahida-akhter">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://www.facebook.com/wahidaakhter280">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" />
  </a>
  <a href="https://www.instagram.com/wahidaakhter280/">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
</p>

---

<p align="center">
  Designed & developed with ❤️ by <strong>Wahida Akhter</strong>
</p>
