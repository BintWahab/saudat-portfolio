// script.js

// Console hello
console.log("Portfolio loaded — Saudat's site.");

/* Typing animation */
const textArray = [
  "Product Manager",
  "Program Associate Intern",
  "Program Manager in training",
  "Tech & Product Storyteller"
];
let currentText = 0, charIndex = 0;
function type() {
  const el = document.getElementById("typing-text");
  if (!el) return;
  if (charIndex < textArray[currentText].length) {
    el.textContent += textArray[currentText].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1800);
  }
}
function erase() {
  const el = document.getElementById("typing-text");
  if (!el) return;
  if (charIndex > 0) {
    el.textContent = textArray[currentText].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    currentText = (currentText + 1) % textArray.length;
    setTimeout(type, 400);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  type();
});

/* Scroll-to-top button */
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (!topBtn) return;
  const show = document.body.scrollTop > 250 || document.documentElement.scrollTop > 250;
  topBtn.style.display = show ? "block" : "none";
};

// click -> smooth scroll top
if (topBtn) topBtn.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

/* Dynamic year */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Smooth anchor scrolling */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({behavior:"smooth",block:"start"});
  });
});

/* Dark mode toggle */
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  // init: read saved preference
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    document.querySelectorAll(".card").forEach(c=>c.classList.add("dark-mode"));
    document.querySelectorAll(".btn").forEach(b=>b.classList.add("dark-mode"));
    document.querySelector("header").classList.add("dark-mode");
    document.querySelector("footer").classList.add("dark-mode");
  }
  themeToggle.addEventListener("click", () => {
    const body = document.body;
    const isDark = body.classList.toggle("dark-mode");
    // toggle cards & other elements
    document.querySelectorAll(".card").forEach(c=>c.classList.toggle("dark-mode"));
    document.querySelectorAll(".btn").forEach(b=>b.classList.toggle("dark-mode"));
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
    // save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
