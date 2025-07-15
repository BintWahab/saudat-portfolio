// script.js
console.log("👋 Hi there! Thanks for checking out Saudat's portfolio");

//Show button on scroll
window.onscroll = function() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to top on click
document.getElementById("topBtn").addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: "smooth"});
});

document.getElementById("year").textContent = new Date().getFullYear();

// Typing animation
const textArray = [
  "Product Manager",
  "Program Associate Intern",
  "Tech Enthusiast",
  "Storyteller in Tech"
];

let currentText = 0;
let charIndex = 0;

function type() {
  const typingText = document.getElementById("typing-text");
  if (charIndex < textArray[currentText].length) {
    typingText.textContent += textArray[currentText].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000); // wait before erasing
  }
}

function erase() {
  const typingText = document.getElementById("typing-text");
  if (charIndex > 0) {
    typingText.textContent = textArray[currentText].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    currentText = (currentText + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");
  document.querySelectorAll(".btn").forEach(btn => btn.classList.toggle("dark-mode"));
  document.getElementById("topBtn").classList.toggle("dark-mode");
});
