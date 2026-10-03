const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("mobile-open", !open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  note.textContent = "Thanks! This demo form is ready to connect to EmailJS or another email service.";
  note.style.color = "#d86a84";
  form.reset();
});
