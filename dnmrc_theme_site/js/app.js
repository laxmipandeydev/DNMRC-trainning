// js/app.js

document.addEventListener("DOMContentLoaded", () => {
  /* ================= NAVBAR ================= */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && nav && navLinks) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      navLinks.classList.toggle("active");
      navToggle.textContent = nav.classList.contains("active") ? "✖" : "☰";
    });
  }

  /* ================= COURSES: LEARN MORE ================= */
  const buttons = document.querySelectorAll(".fancy-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".fancy-card");
      if (!card) return;

      const detail = card.querySelector(".course-detail");
      if (!detail) return;

      const isOpen = detail.classList.toggle("open");
      btn.textContent = isOpen ? "SHOW LESS" : "LEARN MORE";
    });
  });
});

/* ================= HEADER SCROLL EFFECT ================= */
document.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 20);
});
