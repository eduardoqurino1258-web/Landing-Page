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
const submitButton = document.getElementById("submitButton");

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = "EIf8bOfSxNwKVLIfH";
const EMAILJS_SERVICE_ID = "service_otxqh25";
const EMAILJS_TEMPLATE_ID = "template_yb5cwo7";

if (window.emailjs) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!window.emailjs) {
    note.textContent = "Something went wrong loading the contact form. Please email us directly.";
    note.style.color = "#ff7d96";
    return;
  }

  const originalText = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.innerHTML = "Sending…";
  note.textContent = "Sending your message…";
  note.style.color = "";

  try {
    await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
    note.textContent = "Message sent! We’ll get back to you soon.";
    note.style.color = "#d86a84";
    form.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    note.textContent = "We couldn't send your message. Please email us directly at eduardosdesignco@gmail.com.";
    note.style.color = "#ff7d96";
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = originalText;
  }
});
