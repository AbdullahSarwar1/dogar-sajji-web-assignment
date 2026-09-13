# 🍗 Dogar Sajji — Authentic Balochi Charcoal Cuisine

**Faculty of Information and Technology**  
**Assignment 01 — Web Technologies [BS CS F24 – Morning & Self Support]**  
**Course Instructor:** Dr. Noman Shafi  
**Student Name:** Abdullah Sarwar  

---

## 📖 Project Overview
**Dogar Sajji** is a fully static, multi-page website designed and developed using pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (no backend, server-side frameworks, or third-party libraries).

The project showcases authentic Balochi Sajji cuisine slow-roasted over wood charcoal embers, featuring:
- **5 Fully Interlinked Pages:** Home, About, Menu, Gallery, and Contact.
- **Pure Semantic HTML5:** Extensive usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, structured `<table>`, and `<footer>` elements.
- **Modern Responsive CSS3:** CSS Custom Properties (`var(--primary-color)`), CSS Grid, Flexbox, media queries, and zero horizontal overflow across all screen sizes (360px to 1440px+).
- **Focused Vanilla JavaScript Interactivity:** 4 core interactive features fulfilling all rubric requirements (Hamburger Menu, Carousel Slider, Lightbox Modal Pop-up, and Client-Side Form Validation).

---

## 🌐 Website Pages Architecture

| Page | File | Key Features & Semantic Elements |
| :--- | :--- | :--- |
| **1. Home** | [`index.html`](./index.html) | Sticky header, Hero section with CTA button, 4 `<article>` feature highlights, 12 signature menu dish previews with prices, 4 customer testimonials with `<article>` cards, and uniform footer. |
| **2. About** | [`about.html`](./about.html) | Heritage story, founder quote `<aside>`, culinary principles (Marination, Charcoal, Freshness), and milestone statistics. |
| **3. Menu** | [`menu.html`](./menu.html) | Complete 12-item menu grid with authentic prices, descriptions, and tags (Chef's Special, Best Seller, Fresh Daily). |
| **4. Gallery** | [`gallery.html`](./gallery.html) | **Interactive Carousel Slider** with Next/Prev buttons & slide counter, 6-image gallery grid using `<figure>` and `<figcaption>`, and **Interactive Lightbox Modal Pop-up**. |
| **5. Contact** | [`contact.html`](./contact.html) | **Client-Side Form Validation** (real-time error states, Pakistani phone regex, inline errors, success confirmation), weekly schedule `<table>`, embedded Google Maps, and contact details `<aside>`. |

---

## ⚡ JavaScript Interactive Features (Viva Ready)

1. **Responsive Hamburger Navigation:**
   - Toggles mobile navigation drawer with animated hamburger-to-cross transformation.
   - Sets accessible ARIA attributes (`aria-expanded="true/false"`).
   - Closes when clicking any navigation link, clicking outside, or pressing `Escape`.

2. **Image Carousel Slider (`gallery.html`):**
   - Implemented with pure CSS transforms (`translateX(-${currentSlide * 100}%)`).
   - Includes Next and Previous navigation controls and a dynamic slide counter (`1 / 4`).

3. **Lightbox Modal Pop-up (`gallery.html`):**
   - Clicking any photo in the gallery grid opens a centered modal dialog displaying the image and caption.
   - Closes on clicking the close button (`&times;`), clicking the background overlay, or pressing `Escape`.
   - Freezes background scrolling while open (`document.body.style.overflow = "hidden"`).

4. **Client-Side Form Validation (`contact.html`):**
   - Prevents default form submission (`e.preventDefault()`).
   - Real-time and on-submit validation for:
     - **Name:** Required, minimum 3 characters.
     - **Email:** Standard RFC email regex pattern (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
     - **Phone:** Pakistani mobile format regex (`/^(\+92|0)?3[0-9]{9}$/`).
     - **Message:** Required, minimum 10 characters.
   - Displays clear inline error messages under each field and resets cleanly upon successful submission with a success alert.

---

## 📂 Project Directory Structure

```text
Dogar Sajji/
│
├── index.html              # Home page
├── about.html              # About & Heritage page
├── menu.html               # 12-Item Menu page
├── gallery.html            # Photo Gallery, Carousel Slider & Lightbox Modal
├── contact.html            # Contact & Table Reservation page with Form Validation
├── README.md               # Project documentation & Viva defense guide
│
├── css/
│   └── style.css           # Single unified stylesheet (Grid, Flexbox, Responsive)
│
├── js/
│   └── script.js           # Vanilla JavaScript engine (4 interactive features)
│
└── images/                 # All culinary and layout images
    ├── hero-sajji.jpeg
    ├── about-img.jpeg
    ├── full-sajji.jpg
    ├── half-sajji.jpeg
    ├── sajji-platter.jpg
    ├── mutton-sajji.jpg
    ├── chicken-tikka.jpg
    ├── seekh-kebab.jpg
    ├── chicken-karahi.jpg
    ├── sajji-rice.jpg
    ├── naan.jpg
    ├── chutney.jpg
    ├── lassi.jpg
    ├── lemonade.jpg
    ├── gallery1.jpg - gallery6.jpg
    └── *-hero.jpg
```

---

## 🌿 Git Branching Workflow

In strict accordance with the assignment's version control guidelines, development was executed across proper feature branches merged into `main`:

```text
*   Merge branch 'feature-contact-form' into main
|\  
| * feat(contact): client-side form validation and schedule table
|/  
*   Merge branch 'feature-gallery-slider-modal' into main
|\  
| * feat(gallery): carousel slider and lightbox modal pop-up
|/  
*   Merge branch 'feature-menu' into main
|\  
| * feat(menu): 12-item responsive culinary grid
|/  
*   Merge branch 'feature-about' into main
|\  
| * feat(about): heritage story and founder aside
|/  
*   Merge branch 'feature-home' into main
|\  
| * feat(home): hero banner, feature highlights, and testimonials
|/  
*   Merge branch 'feature-layout-styles' into main
|\  
| * feat(layout): responsive header, navigation, and unified CSS system
|/  
* Initial commit
```

---

## 🎓 Viva Voce Comprehensive Defense Guide

Prepare to confidently answer these examiner questions during evaluation:

### 1. HTML5 Concepts & Semantic Justification
- **Q: Why did you use semantic HTML5 tags instead of `<div>` everywhere?**  
  *Answer:* Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`) give meaningful structure to web documents. They improve accessibility for screen readers and search engines. For instance, each menu dish and testimonial is an `<article>` because it is self-contained. The founder quote on `about.html` and contact details on `contact.html` use `<aside>` because they provide supplementary information related to the main content.
- **Q: How did you implement tables?**  
  *Answer:* On `contact.html`, the opening hours table uses semantic `<caption>`, `<thead>`, `<tbody>`, and `<th scope="col">` to ensure full compliance with standard accessibility practices.

### 2. CSS Concepts: Box Model, Specificity & Layout
- **Q: Explain how `box-sizing: border-box` works in your project.**  
  *Answer:* By default (`content-box`), adding padding and borders increases an element's total width, frequently causing unexpected overflow. With `* { box-sizing: border-box; }`, padding and borders are absorbed inside the specified width, eliminating layout breakage and horizontal scrollbars.
- **Q: When did you choose CSS Grid versus Flexbox?**  
  *Answer:* I used **CSS Grid** for two-dimensional layouts where both rows and columns need alignment (such as the 4-column highlights grid, 12-dish menu grid, and footer columns). I used **Flexbox** for one-dimensional layouts where items align along a single axis (such as the navigation bar, buttons, and form groups).
- **Q: How did you ensure responsiveness across screen sizes?**  
  *Answer:* Using CSS variables, flexible grid tracks (`repeat(auto-fill, minmax(280px, 1fr))`), `max-width: 100%` on images, and targeted media queries at 768px and 480px, ensuring a completely responsive experience without horizontal scrolling.

### 3. JavaScript Concepts: Events, DOM Manipulation & Validation
- **Q: How does your client-side form validation work?**  
  *Answer:* We intercept form submission via `e.preventDefault()`. We validate required inputs using JavaScript string methods and regex patterns (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/` for email, `/^(\+92|0)?3[0-9]{9}$/` for Pakistani phone numbers). Invalid inputs get the `.is-invalid` CSS class and an inline message; valid submissions trigger a confirmation message and reset the form.
- **Q: How is the slider and modal implemented without plugins?**  
  *Answer:* The slider updates the CSS `transform: translateX(-${currentSlide * 100}%)` on the slider track whenever the next/prev buttons are clicked, simultaneously updating the slide counter. The modal adds an `.active` class to the overlay dialog, sets the image source and caption from the clicked card, and handles dismissal via close button, outside click, or `Escape` key.

---

## 🚀 How to Run the Website Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/AbdullahSarwar1/dogar-sajji.git
   ```
2. Navigate into the project folder:
   ```bash
   cd "Dogar Sajji"
   ```
3. Open `index.html` directly in any browser (Google Chrome, Firefox, Edge) or serve via Python:
   ```bash
   python3 -m http.server 8000
   ```
   and visit `http://localhost:8000`.
