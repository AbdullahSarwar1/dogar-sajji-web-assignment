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

## Viva Defense Guide

Questions commonly asked in viva:

1. Why use semantic HTML5 elements?
Semantic elements like header, nav, main, section, article, aside, and footer provide meaning to the document structure. They improve accessibility for screen readers and help search engines understand the content hierarchy better than generic div tags.

2. What is box-sizing: border-box?
By default in CSS, padding and borders are added on top of an element width, which can cause layout overflow. Setting box-sizing to border-box includes padding and borders inside the declared width and height, preventing accidental horizontal scrollbars.

3. When to use CSS Grid vs Flexbox?
CSS Grid is used for two dimensional layouts where both rows and columns need structure (such as the menu grid and footer columns). Flexbox is used for one dimensional layouts along a single axis (such as the navbar, buttons, and form rows).

4. How does the form validation work?
Form submission is intercepted using event.preventDefault(). Field values are checked using length checks and regular expressions. If validation fails, error messages appear under the inputs. If all fields pass, a confirmation message is displayed and the form resets.

5. How does the slider and modal work without external libraries?
The slider tracks the active slide index in a variable and applies a CSS translateX transform to the track element. The modal listens for click events on gallery cards, reads the image source and caption, displays the modal overlay, and closes when clicking the close button or pressing Escape.

## How to Run Locally

1. Open the project folder in any modern browser by double clicking index.html
2. Alternatively, run a local server:
   python3 -m http.server 8000
   and navigate to http://localhost:8000 in your browser.
