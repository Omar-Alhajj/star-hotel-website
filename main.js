const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const toTop = document.getElementById("toTop");
const bookingForm = document.getElementById("bookingForm");
const toast = document.getElementById("toast");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.textContent = open ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const today = new Date().toISOString().split("T")[0];
checkin.min = today;
checkout.min = today;

checkin.addEventListener("change", () => {
  checkout.min = checkin.value;
  if (checkout.value && checkout.value < checkin.value) checkout.value = "";
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
});

window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 500 ? "grid" : "none";
});

toTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
