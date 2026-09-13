# 🍗 Dogar Sajji — Authentic Balochi Charcoal Cuisine

**Faculty of Information and Technology**  
**Assignment 01 — Web Technologies [BS CS F24 – Morning & Self Support]**  
**Course Instructor:** Dr. Noman Shafi  
**Student Name:** Abdullah Sarwar  

---

## 📖 Project Overview
**Dogar Sajji** is a fully static, multi-page web application designed and developed using pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (no backend, server-side frameworks, or third-party libraries). 

The project showcases authentic Balochi Sajji cuisine slow-roasted over wood charcoal embers, featuring:
- **5 Fully Interlinked Pages:** Home, About, Menu, Gallery, and Contact & Reservations.
- **Pure Semantic HTML5:** Extensive usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, and structured `<table>` elements.
- **Modern Responsive CSS3:** Unified color system (`var(--variables)`), CSS Grid (2D), Flexbox (1D), fluid typography (`clamp()`), and zero horizontal overflow across all screen sizes (360px to 1440px+).
- **Rich JavaScript Interactivity:** 7 distinct interactive features demonstrating genuine DOM manipulation, event handling, real-time regex validation, timers, and mathematical calculation.

---

## 🌐 Website Pages Architecture

| Page | File | Key Features & Semantic Elements |
| :--- | :--- | :--- |
| **1. Home** | [`index.html`](./index.html) | Sticky header, Chef's announcement `<aside>`, Hero with dual CTA, 4 `<article>` highlight cards, 8 signature dishes, 4 guest reviews with star ratings, dawat CTA banner. |
| **2. About** | [`about.html`](./about.html) | Heritage story, experience badge card, founder's quote `<aside>`, 3 pillars of craft, 4 milestone statistics, **Interactive FAQ Accordion** with collapsible panels. |
| **3. Menu** | [`menu.html`](./menu.html) | Complimentary sides `<aside>`, **Interactive Category Filter Tabs** (12 items with live badges), **Instant Search Input**, **Interactive Dawat Portion Calculator**, and **Portion & Dietary Comparison Table**. |
| **4. Gallery** | [`gallery.html`](./gallery.html) | **Interactive Carousel Slider** (auto-advance, pause on hover, indicator dots, counter, arrow keys), 6-card gallery grid, **Interactive Lightbox Modal Pop-up** with keyboard and overlay dismissal. |
| **5. Contact** | [`contact.html`](./contact.html) | **Client-Side Form Validation** (real-time error states, Pakistani phone regex `03xx-xxxxxxx`, guest selector toggle, confirmation reference ID), **Weekly Hours Schedule Table**, embedded Google Maps, and parking `<aside>`. |

---

## ⚡ JavaScript Interactive Features (Technical Deep-Dive)

1. **Responsive Hamburger Navigation:**
   - Toggles mobile navigation drawer with animated burger-to-cross transformation.
   - Accessible ARIA attributes (`aria-expanded="true/false"`).
   - Auto-closes on outside backdrop click, navigation link click, or pressing `Escape`.

2. **Hero Carousel / Slider (`gallery.html`):**
   - Pure CSS `translateX` sliding with cubic-bezier easing.
   - Previous/Next controls, interactive clickable indicator dots, and live slide counter badge.
   - Auto-slides every 4.5 seconds with pause on mouse hover and keyboard arrow key navigation.

3. **Lightbox Modal Pop-up (`gallery.html`):**
   - Clicking any photo opens an accessible, full-screen backdrop-blurred modal dialog.
   - Displays high-resolution image, title, and descriptive caption.
   - Supports Next/Previous navigation inside the modal, close button, and dismissal on `Escape` or clicking outside.

4. **Category Filter Tabs & Real-Time Search (`menu.html`):**
   - Filters dishes dynamically by `data-category` ("Sajji Specials", "BBQ & Karahi", "Sides & Breads", "Beverages").
   - Live item counters on filter badges.
   - Real-time search input filtering dishes by title and description with friendly empty-state handling.

5. **Dawat & Party Portion Estimator Calculator (`menu.html`):**
   - Dynamic slider adjusting guest count (1 to 30 people).
   - Computes required whole sajjis, basmati pilaf platters, tandoori naans, and estimated cost in PKR.

6. **Interactive FAQ Accordion (`about.html`):**
   - Smooth expand/collapse using dynamic `scrollHeight` and rotating chevron icons.

7. **Client-Side Form Validation (`contact.html`):**
   - Real-time inline validation on `blur` and `input`, plus strict `submit` interception (`e.preventDefault()`).
   - Validates full name (letters only, min 3 chars), email (RFC regex), Pakistani mobile (`/^(\+92|0)?3[0-9]{9}$/`), inquiry dropdown, and message (min 10 chars).
   - Generates a unique booking reference ID (`#DS-xxxx`) and renders an animated confirmation box.

8. **Back-to-Top Floating Button & Toast Notifications:**
   - Floating scroll-to-top button smoothly appearing after 350px scroll.
   - Non-intrusive toast pop-ups on "Quick Order" clicks.

---

## 📂 Project Directory Structure

```text
Dogar Sajji/
│
├── index.html              # Home page
├── about.html              # About & Heritage page
├── menu.html               # Menu, Search, Calculator & Nutritional Table
├── gallery.html            # Photo Gallery, Carousel Slider & Lightbox Modal
├── contact.html            # Reservations, Form Validation, Schedule Table & Map
├── README.md               # Project documentation & Viva guide
│
├── css/
│   └── style.css           # Single unified stylesheet with 20 distinct modular sections
│
├── js/
│   └── script.js           # Core JavaScript engine with all interactive features
│
└── images/                 # 24 optimized, themed high-res culinary images
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
    └── *-hero.jpg / *-hero-bg.jpeg
```

---

## 🌿 Git Branching Workflow

In strict accordance with the assignment's version control guidelines, development followed a proper feature-branching workflow merged into `main`:

```text
*   Merge branch 'feature-contact-form' into main
|\  
| * feat(contact): client-side validation, Pakistani phone regex, schedule table
|/  
*   Merge branch 'feature-gallery-slider-lightbox' into main
|\  
| * feat(gallery): carousel slider with dots and lightbox modal pop-up
|/  
*   Merge branch 'feature-menu-filtering' into main
|\  
| * feat(menu): dynamic category filters, search, nutrition table, dawat calculator
|/  
*   Merge branch 'feature-home-about' into main
|\  
| * feat(home-about): semantic tags, story, and interactive FAQ accordion
|/  
*   Merge branch 'feature-navbar' into main
|\  
| * feat(nav): responsive sticky navbar and mobile hamburger menu
|/  
* Initial project structure
```

---

## 🎓 Viva Voce Comprehensive Defense Guide

Prepare to confidently answer these examiner questions during the face-to-face evaluation:

### 1. HTML5 Concepts & Semantic Justification
- **Q: Why did you use semantic HTML5 tags instead of regular `<div>`s?**  
  *Answer:* Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`) provide structural meaning to search engine crawlers and assistive technologies (screen readers). For example, each dish card and review card is an `<article>` because it represents an independent, self-contained piece of content. Supplementary notices and parking guidelines use `<aside>` because they relate contextually to the parent section.
- **Q: How did you implement tables?**  
  *Answer:* On `contact.html` and `menu.html`, tables use semantic `<caption>`, `<thead>`, `<tbody>`, with `<th scope="col">` for column headers and `<th scope="row">` for row headers, ensuring full compliance with web accessibility standards.

### 2. CSS Concepts: Box Model, Specificity & Layout
- **Q: Explain how `box-sizing: border-box` works in your project.**  
  *Answer:* In standard CSS, `width` only applies to content, meaning `padding` and `border` push the element wider, causing accidental horizontal overflow. With `box-sizing: border-box`, padding and borders are included inside the declared width, preventing layout breakages.
- **Q: When did you use CSS Grid versus Flexbox?**  
  *Answer:* I used **CSS Grid** for two-dimensional layouts where both rows and columns need alignment (e.g. the 4-column highlights grid, 12-dish menu grid, and footer grid). I used **Flexbox** for one-dimensional layouts where items align along a single axis (e.g. the navbar items, button containers, and card headers).
- **Q: How did you ensure responsiveness across screen sizes?**  
  *Answer:* I utilized mobile-first fluid sizing with CSS `clamp()`, flexible CSS Grid tracks (`repeat(auto-fill, minmax(270px, 1fr))`), and targeted media queries at 1024px, 768px, and 480px, eliminating horizontal overflow across all devices from 360px up to 4K displays.

### 3. JavaScript Concepts: Events, DOM Manipulation & Validation
- **Q: How does your form validation work?**  
  *Answer:* We listen to both real-time `blur`/`input` events and the `submit` event. On submit, `e.preventDefault()` halts default browser submission. We validate fields using regular expressions—such as `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` for email and `/^(\+92|0)?3[0-9]{9}$/` for Pakistani mobile numbers. Invalid fields receive `.is-invalid` and display an accessible error message; valid submissions generate a dynamic confirmation box with a unique `#DS-xxxx` reference ID.
- **Q: How did you build the slider and modal without plugins?**  
  *Answer:* The slider tracks an active slide index and translates the `.slider-track` via `transform: translateX(-${currentSlide * 100}%)`. It utilizes `setInterval` for 4.5-second auto-advancement with pause-on-hover via `mouseenter`/`mouseleave`. The modal injects the clicked card's data into the dialog and manages focus and `Escape` key dismissal.

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
3. Open `index.html` in any web browser (Google Chrome, Firefox, Safari, Edge) or serve locally using Python:
   ```bash
   python3 -m http.server 8000
   ```
   and visit `http://localhost:8000`.
