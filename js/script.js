/**
 * DOGAR SAJJI - CORE JAVASCRIPT
 * Course: Web Technologies (Assignment 01)
 * Instructor: Dr. Noman Shafi
 * Author: Abdullah Sarwar (BS CS F24)
 * 
 * VIVA VOCE CONCEPTS IMPLEMENTED:
 * 1. DOM Traversal & Manipulation: querySelector, querySelectorAll, getElementById, classList, style
 * 2. Event Handling: addEventListener for click, input, blur, submit, scroll, resize, keydown
 * 3. State Management: Slide indices, active filter categories, modal open/close states
 * 4. Asynchronous Timers: setInterval / clearInterval for carousel auto-play
 * 5. Regular Expressions & Client-Side Form Validation: regex test for email and phone numbers
 * 6. Mathematical DOM calculations: Sajji party portion estimator algorithm
 * 7. Accessibility (a11y): aria-expanded, aria-hidden, keyboard trap, Escape key handling
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Log Viva Voce Welcome Message in Console
  console.log(
    "%c🍗 DOGAR SAJJI - Web Technologies Project (Assignment 01)",
    "color: #8b2e1f; font-size: 14px; font-weight: bold;"
  );
  console.log("Author: Abdullah Sarwar | Instructor: Dr. Noman Shafi");

  /* ==========================================================================
     1. RESPONSIVE NAVIGATION & HAMBURGER MENU
     Concepts: Event listeners, classList toggle, ARIA accessibility, backdrop
     ========================================================================== */
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav.main-nav ul");
  let backdrop = document.querySelector(".nav-backdrop");

  // Create backdrop element dynamically if not present in HTML
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);
  }

  function openMenu() {
    if (!hamburger || !navMenu) return;
    hamburger.classList.add("active");
    navMenu.classList.add("active");
    backdrop.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // Prevent background scrolling on mobile
  }

  function closeMenu() {
    if (!hamburger || !navMenu) return;
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    backdrop.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when clicking outside on the backdrop
    backdrop.addEventListener("click", closeMenu);

    // Close when clicking any nav link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navMenu.classList.contains("active")) {
        closeMenu();
      }
    });

    // Reset if window resized past tablet breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
        closeMenu();
      }
    });
  }

  /* ==========================================================================
     2. STICKY HEADER SHADOW ON SCROLL & BACK TO TOP BUTTON
     Concepts: window.scrollY, conditional DOM manipulation, smooth scroll
     ========================================================================== */
  const header = document.querySelector("header.site-header");
  const backToTopBtn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || window.pageYOffset;

    // Header shadow on scroll
    if (header) {
      if (scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* ==========================================================================
     3. IMAGE CAROUSEL / SLIDER (GALLERY PAGE)
     Concepts: CSS Transform manipulation, auto-advance, setInterval/clearInterval,
               dots generation, pause on hover, keyboard navigation
     ========================================================================== */
  const sliderContainer = document.querySelector(".slider-container");
  const sliderTrack = document.querySelector(".slider-track");

  if (sliderContainer && sliderTrack) {
    const slides = sliderTrack.querySelectorAll(".slide");
    const nextBtn = sliderContainer.querySelector(".slider-btn.next");
    const prevBtn = sliderContainer.querySelector(".slider-btn.prev");
    const dotsContainer = sliderContainer.querySelector(".slider-dots");
    const counterDisplay = sliderContainer.querySelector(".slider-counter");

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval = null;

    // Dynamically create dot indicators if container exists
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("button");
        dot.className = i === 0 ? "slider-dot active" : "slider-dot";
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
      }
    }

    function updateSlider(index) {
      currentSlide = (index + totalSlides) % totalSlides;
      
      // Shift track by exactly -currentSlide * 100%
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Update active dot
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll(".slider-dot");
        dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === currentSlide);
        });
      }

      // Update counter
      if (counterDisplay) {
        counterDisplay.textContent = `${currentSlide + 1} / ${totalSlides}`;
      }
    }

    function nextSlide() {
      updateSlider(currentSlide + 1);
    }

    function prevSlide() {
      updateSlider(currentSlide - 1);
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Dot click navigation
    if (dotsContainer) {
      dotsContainer.addEventListener("click", function (e) {
        const targetDot = e.target.closest(".slider-dot");
        if (targetDot) {
          const targetIndex = parseInt(targetDot.dataset.index, 10);
          updateSlider(targetIndex);
        }
      });
    }

    // Auto-advance every 4.5 seconds
    function startAutoSlide() {
      if (!autoSlideInterval) {
        autoSlideInterval = setInterval(nextSlide, 4500);
      }
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    startAutoSlide();

    // Pause on hover
    sliderContainer.addEventListener("mouseenter", stopAutoSlide);
    sliderContainer.addEventListener("mouseleave", startAutoSlide);

    // Keyboard navigation when hovering or focused
    sliderContainer.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    });

    // Initialize display
    updateSlider(0);
  }

  /* ==========================================================================
     4. INTERACTIVE LIGHTBOX / MODAL POP-UP (GALLERY PAGE)
     Concepts: Dynamic modal pop-up, image data extraction, keyboard trap,
               overlay dismissal, index tracking
     ========================================================================== */
  const galleryCards = document.querySelectorAll(".gallery-card");
  const lightboxModal = document.querySelector(".lightbox-modal");

  if (lightboxModal && galleryCards.length > 0) {
    const lightboxImg = lightboxModal.querySelector(".lightbox-img");
    const lightboxTitle = lightboxModal.querySelector(".lightbox-title");
    const lightboxDesc = lightboxModal.querySelector(".lightbox-desc");
    const closeBtn = lightboxModal.querySelector(".lightbox-close");
    const modalPrevBtn = lightboxModal.querySelector(".lightbox-nav.prev");
    const modalNextBtn = lightboxModal.querySelector(".lightbox-nav.next");

    let currentModalIndex = 0;

    // Collect gallery images info
    const galleryItems = [];
    galleryCards.forEach((card, index) => {
      const img = card.querySelector("img");
      const title = card.querySelector("h4") ? card.querySelector("h4").textContent : "Dogar Sajji";
      const desc = card.querySelector("p") ? card.querySelector("p").textContent : "Traditional Balochi Delicacy";
      galleryItems.push({
        src: img ? img.src : "",
        alt: img ? img.alt : "Dogar Sajji",
        title: title,
        desc: desc,
      });

      card.addEventListener("click", () => {
        openLightbox(index);
      });
    });

    function showLightboxItem(index) {
      currentModalIndex = (index + galleryItems.length) % galleryItems.length;
      const item = galleryItems[currentModalIndex];
      if (lightboxImg) {
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
      }
      if (lightboxTitle) lightboxTitle.textContent = item.title;
      if (lightboxDesc) lightboxDesc.textContent = item.desc;
    }

    function openLightbox(index) {
      showLightboxItem(index);
      lightboxModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightboxModal.classList.remove("active");
      document.body.style.overflow = "";
    }

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

    if (modalPrevBtn) {
      modalPrevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showLightboxItem(currentModalIndex - 1);
      });
    }

    if (modalNextBtn) {
      modalNextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showLightboxItem(currentModalIndex + 1);
      });
    }

    // Close when clicking dark backdrop outside content box
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    // Keyboard support for Lightbox
    document.addEventListener("keydown", (e) => {
      if (!lightboxModal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showLightboxItem(currentModalIndex - 1);
      if (e.key === "ArrowRight") showLightboxItem(currentModalIndex + 1);
    });
  }

  /* ==========================================================================
     5. DYNAMIC MENU FILTERING & LIVE SEARCH (MENU PAGE)
     Concepts: data-attributes, DOM filtering, real-time input event,
               counter badges, smooth transitions
     ========================================================================== */
  const menuFilterBtns = document.querySelectorAll(".menu-filter-bar .filter-btn");
  const menuItems = document.querySelectorAll(".menu-grid .menu-item");
  const menuSearchInput = document.querySelector(".menu-search-input");
  const noResultsMsg = document.querySelector(".no-results-msg");

  if (menuItems.length > 0) {
    let currentCategory = "all";
    let searchQuery = "";

    function filterDishes() {
      let visibleCount = 0;

      menuItems.forEach((item) => {
        const itemCategory = item.dataset.category || "all";
        const title = item.querySelector("h3") ? item.querySelector("h3").textContent.toLowerCase() : "";
        const desc = item.querySelector("p") ? item.querySelector("p").textContent.toLowerCase() : "";

        const matchesCategory = currentCategory === "all" || itemCategory === currentCategory;
        const matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery);

        if (matchesCategory && matchesSearch) {
          item.style.display = "";
          visibleCount++;
        } else {
          item.style.display = "none";
        }
      });

      if (noResultsMsg) {
        noResultsMsg.style.display = visibleCount === 0 ? "block" : "none";
      }
    }

    // Category button click handling
    menuFilterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        menuFilterBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        currentCategory = this.dataset.filter || "all";
        filterDishes();
      });
    });

    // Real-time search input handling
    if (menuSearchInput) {
      menuSearchInput.addEventListener("input", function (e) {
        searchQuery = e.target.value.trim().toLowerCase();
        if (searchQuery.length > 0) {
          // Seamless UX: when typing in search, automatically search across all categories
          menuFilterBtns.forEach((b) => b.classList.remove("active"));
          const allBtn = document.querySelector(".menu-filter-bar .filter-btn[data-filter='all']");
          if (allBtn) allBtn.classList.add("active");
          currentCategory = "all";
        }
        filterDishes();
      });
    }

    // Initialize counts on filter badges dynamically
    menuFilterBtns.forEach((btn) => {
      const filter = btn.dataset.filter;
      let count = 0;
      if (filter === "all") {
        count = menuItems.length;
      } else {
        menuItems.forEach((item) => {
          if (item.dataset.category === filter) count++;
        });
      }
      const badge = btn.querySelector(".badge-count");
      if (badge) badge.textContent = count;
    });
  }

  /* ==========================================================================
     6. INTERACTIVE FAQ ACCORDION (ABOUT PAGE)
     Concepts: Collapsible panels, scrollHeight calculation, smooth CSS transitions
     ========================================================================== */
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      const content = item.querySelector(".accordion-content");
      const isActive = item.classList.contains("active");

      // Optional: Close all other accordion items for clean accordion UX
      document.querySelectorAll(".accordion-item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherContent = otherItem.querySelector(".accordion-content");
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  /* ==========================================================================
     7. SAJJI FEAST / PORTION ESTIMATOR CALCULATOR (MENU PAGE)
     Concepts: Mathematical computation, slider input event, dynamic DOM updating
     ========================================================================== */
  const guestSlider = document.getElementById("guestRange");
  const guestCountDisplay = document.getElementById("guestCount");

  if (guestSlider && guestCountDisplay) {
    function updatePortionEstimates() {
      const guests = parseInt(guestSlider.value, 10);
      guestCountDisplay.textContent = guests + (guests === 1 ? " Person" : " Persons");

      // Serving calculation heuristics:
      // 1 Full Sajji feeds ~3-4 people
      // 1 Family Platter feeds ~5-6 people
      // 1 Naan per person + 0.5 buffer
      // 1 Rice portion feeds ~2 people
      const fullSajjiQty = Math.ceil(guests / 3);
      const riceQty = Math.max(1, Math.ceil(guests / 2));
      const naanQty = Math.ceil(guests * 1.5);
      const estimatedCost = (fullSajjiQty * 1800) + (riceQty * 300) + (naanQty * 60);

      const calcResultSajji = document.getElementById("calcSajji");
      const calcResultRice = document.getElementById("calcRice");
      const calcResultNaan = document.getElementById("calcNaan");
      const calcResultCost = document.getElementById("calcCost");

      if (calcResultSajji) calcResultSajji.textContent = `${fullSajjiQty} Whole Sajji`;
      if (calcResultRice) calcResultRice.textContent = `${riceQty} Pilaf Platters`;
      if (calcResultNaan) calcResultNaan.textContent = `${naanQty} Tandoori Naans`;
      if (calcResultCost) calcResultCost.textContent = `~Rs. ${estimatedCost.toLocaleString()}`;
    }

    guestSlider.addEventListener("input", updatePortionEstimates);
    updatePortionEstimates();
  }

  /* ==========================================================================
     8. CLIENT-SIDE FORM VALIDATION (CONTACT PAGE)
     Concepts: preventDefault(), Regular Expressions (RFC email, Pakistani phone),
               input event listeners, visual error indicators, DOM status messages
     ========================================================================== */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const subjectSelect = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const guestGroup = document.getElementById("reservationGuestsGroup");
    const statusBox = document.getElementById("formStatusBox");

    // Toggle guest selector if reservation is selected
    if (subjectSelect && guestGroup) {
      subjectSelect.addEventListener("change", function () {
        if (this.value === "reservation") {
          guestGroup.style.display = "flex";
        } else {
          guestGroup.style.display = "none";
        }
      });
    }

    // Helper functions for error reporting
    function setFieldState(inputElement, errorElementId, errorMessage) {
      const errorSpan = document.getElementById(errorElementId);
      if (errorMessage) {
        inputElement.classList.add("is-invalid");
        inputElement.classList.remove("is-valid");
        if (errorSpan) {
          errorSpan.textContent = errorMessage;
          errorSpan.classList.add("visible");
        }
        return false;
      } else {
        inputElement.classList.remove("is-invalid");
        inputElement.classList.add("is-valid");
        if (errorSpan) {
          errorSpan.textContent = "";
          errorSpan.classList.remove("visible");
        }
        return true;
      }
    }

    // Validators
    function validateName() {
      const val = nameInput.value.trim();
      if (val === "") {
        return setFieldState(nameInput, "nameError", "Please enter your full name.");
      }
      if (val.length < 3) {
        return setFieldState(nameInput, "nameError", "Name must be at least 3 characters.");
      }
      if (!/^[a-zA-Z\s'.]+$/.test(val)) {
        return setFieldState(nameInput, "nameError", "Name must contain letters only.");
      }
      return setFieldState(nameInput, "nameError", "");
    }

    function validateEmail() {
      const val = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (val === "") {
        return setFieldState(emailInput, "emailError", "Email address is required.");
      }
      if (!emailRegex.test(val)) {
        return setFieldState(emailInput, "emailError", "Please enter a valid email (e.g. name@domain.com).");
      }
      return setFieldState(emailInput, "emailError", "");
    }

    function validatePhone() {
      if (!phoneInput) return true;
      const val = phoneInput.value.trim();
      // Pakistani mobile format regex: 03001234567 or +923001234567 or 03xx-xxxxxxx
      const cleanPhone = val.replace(/[\s-]/g, "");
      const phoneRegex = /^(\+92|0)?3[0-9]{9}$/;
      if (val === "") {
        return setFieldState(phoneInput, "phoneError", "Phone number is required for reservations.");
      }
      if (!phoneRegex.test(cleanPhone)) {
        return setFieldState(phoneInput, "phoneError", "Enter valid Pakistani phone (e.g. 0300-1234567).");
      }
      return setFieldState(phoneInput, "phoneError", "");
    }

    function validateSubject() {
      if (!subjectSelect) return true;
      if (subjectSelect.value === "") {
        return setFieldState(subjectSelect, "subjectError", "Please select an inquiry type.");
      }
      return setFieldState(subjectSelect, "subjectError", "");
    }

    function validateMessage() {
      const val = messageInput.value.trim();
      if (val === "") {
        return setFieldState(messageInput, "messageError", "Message cannot be empty.");
      }
      if (val.length < 10) {
        return setFieldState(messageInput, "messageError", "Please write at least 10 characters.");
      }
      return setFieldState(messageInput, "messageError", "");
    }

    // Attach real-time validation on blur / input
    nameInput.addEventListener("blur", validateName);
    nameInput.addEventListener("input", () => {
      if (nameInput.classList.contains("is-invalid")) validateName();
    });

    emailInput.addEventListener("blur", validateEmail);
    emailInput.addEventListener("input", () => {
      if (emailInput.classList.contains("is-invalid")) validateEmail();
    });

    if (phoneInput) {
      phoneInput.addEventListener("blur", validatePhone);
      phoneInput.addEventListener("input", () => {
        if (phoneInput.classList.contains("is-invalid")) validatePhone();
      });
    }

    if (subjectSelect) {
      subjectSelect.addEventListener("change", validateSubject);
    }

    messageInput.addEventListener("blur", validateMessage);
    messageInput.addEventListener("input", () => {
      if (messageInput.classList.contains("is-invalid")) validateMessage();
    });

    // Form Submission
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isSubjectValid = validateSubject();
      const isMessageValid = validateMessage();

      const isFormValid = isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid;

      if (isFormValid) {
        const customerName = nameInput.value.trim();
        const inquiryType = subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex].text : "Message";
        const refId = "DS-" + Math.floor(1000 + Math.random() * 9000);

        if (statusBox) {
          statusBox.className = "form-status-box success";
          statusBox.innerHTML = `
            <strong>Thank You, ${customerName}!</strong><br>
            Your ${inquiryType.toLowerCase()} has been received successfully.<br>
            <small>Booking Reference ID: <strong>#${refId}</strong>. Our team will call you within 30 minutes.</small>
          `;
          statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        // Reset form inputs & valid classes
        contactForm.reset();
        [nameInput, emailInput, phoneInput, subjectSelect, messageInput].forEach((el) => {
          if (el) el.classList.remove("is-valid");
        });

        // Hide notification toast
        showToast(`Confirmation sent for ${customerName}! Ref: #${refId}`);
      } else {
        if (statusBox) {
          statusBox.className = "form-status-box error";
          statusBox.innerHTML = `<strong>Please correct the highlighted errors above before sending.</strong>`;
        }
      }
    });
  }

  /* ==========================================================================
     9. TOAST NOTIFICATION SYSTEM
     Concepts: Dynamic DOM element injection, timeout dismissal, CSS transitions
     ========================================================================== */
  function showToast(message) {
    let toastContainer = document.querySelector(".toast-container");
    if (!toastContainer) {
      toastContainer = document.createElement("div");
      toastContainer.className = "toast-container";
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-icon">✓</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
      toast.classList.add("show");
    }, 10);

    // Auto-remove after 4 seconds
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.remove();
      }, 350);
    }, 4000);
  }

  // Quick Order button handlers across all pages
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemTitle = this.closest(".menu-item")
        ? this.closest(".menu-item").querySelector("h3").textContent
        : "Item";
      showToast(`${itemTitle} added! Proceed to Contact for booking.`);
    });
  });
});
