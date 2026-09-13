document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ---------- 1. Responsive Navigation / Hamburger Menu ----------
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  const navBackdrop = document.querySelector(".nav-backdrop");

  if (hamburger && navMenu) {
    function toggleMenu() {
      const isOpen = navMenu.classList.contains("active");
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
      if (navBackdrop) navBackdrop.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", !isOpen);
    }

    function closeMenu() {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      if (navBackdrop) navBackdrop.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }

    hamburger.addEventListener("click", toggleMenu);

    if (navBackdrop) {
      navBackdrop.addEventListener("click", closeMenu);
    }

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
  }

  // ---------- 2. Image Slider (Gallery Page) ----------
  const slider = document.querySelector(".slider");
  const sliderTrack = document.querySelector(".slider-track");

  if (slider && sliderTrack) {
    const slides = sliderTrack.querySelectorAll("img");
    const nextBtn = slider.querySelector(".slider-btn.next");
    const prevBtn = slider.querySelector(".slider-btn.prev");
    const counter = slider.querySelector(".slider-counter");
    let currentSlide = 0;

    function updateSlide() {
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
      if (counter) {
        counter.textContent = `${currentSlide + 1} / ${slides.length}`;
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
      });
    }

    updateSlide();
  }

  // ---------- 3. Modal Pop-up / Lightbox (Gallery Page) ----------
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("imageModal");

  if (modal && galleryItems.length > 0) {
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    const modalClose = modal.querySelector(".modal-close");

    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const img = item.querySelector("img");
        const figcaption = item.querySelector("figcaption");
        if (img && modalImg) {
          modalImg.src = img.src;
          modalImg.alt = img.alt;
        }
        if (figcaption && modalCaption) {
          modalCaption.textContent = figcaption.textContent;
        }
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });

    function closeModal() {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    if (modalClose) {
      modalClose.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }

  // ---------- 4. Client-Side Form Validation (Contact Page) ----------
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const formSuccess = document.getElementById("formSuccess");

    function showError(input, errorId, message) {
      const errorEl = document.getElementById(errorId);
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add("visible");
      }
      return false;
    }

    function clearError(input, errorId) {
      const errorEl = document.getElementById(errorId);
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      if (errorEl) {
        errorEl.textContent = "";
        errorEl.classList.remove("visible");
      }
      return true;
    }

    function validateName() {
      const val = nameInput.value.trim();
      if (val === "") {
        return showError(nameInput, "nameError", "Name is required.");
      }
      if (val.length < 3) {
        return showError(nameInput, "nameError", "Name must be at least 3 characters.");
      }
      return clearError(nameInput, "nameError");
    }

    function validateEmail() {
      const val = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (val === "") {
        return showError(emailInput, "emailError", "Email is required.");
      }
      if (!emailRegex.test(val)) {
        return showError(emailInput, "emailError", "Enter a valid email address.");
      }
      return clearError(emailInput, "emailError");
    }

    function validatePhone() {
      if (!phoneInput) return true;
      const val = phoneInput.value.trim();
      const phoneRegex = /^(\+92|0)?3[0-9]{9}$/;
      if (val === "") {
        return showError(phoneInput, "phoneError", "Phone number is required.");
      }
      if (!phoneRegex.test(val.replace(/[\s-]/g, ""))) {
        return showError(phoneInput, "phoneError", "Enter a valid phone number (e.g. 0300-1234567).");
      }
      return clearError(phoneInput, "phoneError");
    }

    function validateMessage() {
      const val = messageInput.value.trim();
      if (val === "") {
        return showError(messageInput, "messageError", "Message cannot be empty.");
      }
      if (val.length < 10) {
        return showError(messageInput, "messageError", "Message must be at least 10 characters.");
      }
      return clearError(messageInput, "messageError");
    }

    // Real-time input listeners
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    if (phoneInput) phoneInput.addEventListener("input", validatePhone);
    messageInput.addEventListener("input", validateMessage);

    // Submit handler
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        if (formSuccess) {
          formSuccess.textContent = `Thank you, ${nameInput.value.trim()}! Your message has been sent successfully.`;
          formSuccess.classList.add("visible");
        }
        contactForm.reset();
        [nameInput, emailInput, phoneInput, messageInput].forEach(function (el) {
          if (el) el.classList.remove("is-valid");
        });
      }
    });
  }
});
