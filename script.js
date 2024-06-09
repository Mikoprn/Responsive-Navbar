//Header scrolled
const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("scroll-hidden");
    navMenu.classList.remove("active");
    menuButton.classList.remove("active");
  } else {
    header.classList.remove("scroll-hidden");
  }

  lastScrollY = window.scrollY;
});

// Navigation
const menuButton = document.querySelector(".menu__button");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll("nav__link");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  menuButton.classList.remove("active");
  navMenu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!menuButton.contains(e.target) && !navMenu.contains(e.target)) {
    menuButton.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
