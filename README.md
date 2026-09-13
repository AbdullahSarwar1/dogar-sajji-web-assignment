# Dogar Sajji: Authentic Balochi Charcoal Cuisine

Assignment 01: Web Technologies (BS CS F24)
Course Instructor: Dr. Noman Shafi
Student: Abdullah Sarwar

## Project Overview

Dogar Sajji is a fully static website built using pure HTML5, CSS3, and vanilla JavaScript without any frameworks, libraries, or backend databases.

The website contains:
* 5 interlinked pages: Home, About, Menu, Gallery, and Contact
* Semantic HTML5 markup using header, nav, main, section, article, aside, figure, figcaption, table, and footer
* Responsive layout using CSS Grid, Flexbox, media queries, and fluid typography
* Interactive JavaScript features: mobile navigation, gallery slider, image modal popup, and form validation

## Pages Structure

* index.html: Home page with hero banner, 4 feature highlights, signature dishes preview, customer reviews, and footer
* about.html: Heritage story, founder quote aside, and milestone statistics
* menu.html: Complete 12 item menu grid with prices, descriptions, and categories
* gallery.html: Image carousel slider with next and previous controls, 6 image gallery grid, and lightbox modal popup
* contact.html: Contact and reservation form with client side validation, operating hours table, contact info aside, and Google map

## JavaScript Features

1. Mobile Navigation
The hamburger button toggles the navigation menu on smaller screens, updates aria attributes, and closes when a link is clicked, when clicking outside, or on pressing Escape.

2. Image Slider
The gallery page includes a photo slider built using CSS transforms. Users can navigate using next and previous buttons while the slide counter updates in real time.

3. Lightbox Modal
Clicking any image in the gallery opens a modal dialog showing the full image and its caption. The modal can be closed using the close button, clicking the backdrop, or pressing Escape.

4. Client Side Form Validation
The contact form validates all required inputs on submission:
* Full name: required, at least 3 characters
* Email: valid email format checked via regular expression
* Phone number: valid Pakistani mobile format
* Message: required, at least 10 characters
Inline error messages show under invalid fields, and a success confirmation appears when all fields are valid.

## Directory Structure

```text
Dogar Sajji/
  index.html
  about.html
  menu.html
  gallery.html
  contact.html
  README.md
  css/
    style.css
  js/
    script.js
  images/
    hero-sajji.jpeg
    about-img.jpeg
    full-sajji.jpg
    half-sajji.jpeg
    sajji-platter.jpg
    mutton-sajji.jpg
    chicken-tikka.jpg
    seekh-kebab.jpg
    chicken-karahi.jpg
    sajji-rice.jpg
    naan.jpg
    chutney.jpg
    lassi.jpg
    lemonade.jpg
    gallery1.jpg to gallery6.jpg
    *-hero.jpg
```

## Git Branching

Development was done using feature branches merged into the main branch:
* feature-navbar: responsive navbar and hamburger drawer
* feature-home-about: home and about page structure
* feature-menu-filtering: menu grid layout
* feature-gallery-slider-lightbox: image slider and modal popup
* feature-contact-form: contact form validation and hours table
* feature-responsive-compliance: responsive styling and layout cleanup

## How to Run Locally

1. Open the project folder in any modern browser by double clicking index.html
2. Alternatively, run a local server:
   python3 -m http.server 8000
   and navigate to http://localhost:8000 in your browser.
