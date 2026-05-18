const btn = document.getElementById("btn");
const dots = document.getElementById("dots");
const more = document.getElementById("more");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-cta");

function setReadMoreState(expanded) {
  if (!btn || !dots || !more) {
    return;
  }

  btn.setAttribute("aria-expanded", String(expanded));
  dots.style.display = expanded ? "none" : "inline";
  more.style.display = expanded ? "inline" : "none";
  btn.textContent = expanded ? "Leer menos" : "Leer más";
}

function closeMobileMenu() {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
}

if (btn) {
  btn.addEventListener("click", function () {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    setReadMoreState(!expanded);
  });
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", function () {
    const isOpen = !mobileMenu.classList.contains("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.classList.toggle("open", isOpen);
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

setReadMoreState(false);
