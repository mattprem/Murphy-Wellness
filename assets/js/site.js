const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const drawer = document.querySelector("[data-mobile-drawer]");
const drawerClose = document.querySelector("[data-menu-close]");
const accordionTriggers = document.querySelectorAll("[data-accordion-trigger]");
const revealItems = document.querySelectorAll("[data-reveal]");
const yearTargets = document.querySelectorAll("[data-year]");
const formStatus = document.querySelector("[data-form-status]");

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function setDrawerState(open) {
  if (!drawer || !menuToggle) return;
  drawer.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
}

function bindDrawer() {
  if (!menuToggle || !drawer) return;

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    setDrawerState(open);
  });

  drawerClose?.addEventListener("click", () => setDrawerState(false));

  drawer.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-menu-backdrop")) {
      setDrawerState(false);
    }
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setDrawerState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setDrawerState(false);
  });
}

function bindAccordion() {
  accordionTriggers.forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const icon = button.querySelector(".faq-icon");

      button.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
      if (icon) icon.textContent = expanded ? "+" : "−";
    });
  });
}

function bindReveal() {
  if (!revealItems.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
}

function setYear() {
  const year = new Date().getFullYear();
  yearTargets.forEach((target) => {
    target.textContent = String(year);
  });
}

function showFormStatusFromQuery() {
  if (!formStatus) return;
  const params = new URLSearchParams(window.location.search);
  const status = params.get("status");

  if (status === "missing") {
    formStatus.hidden = false;
    formStatus.textContent = "Please complete the required fields before submitting the form.";
  } else if (status === "error") {
    formStatus.hidden = false;
    formStatus.textContent = "We were not able to send your message. Please call Murphy Wellness directly at (620) 992-6088.";
  }
}

updateHeaderState();
bindDrawer();
bindAccordion();
bindReveal();
setYear();
showFormStatusFromQuery();

window.addEventListener("scroll", updateHeaderState, { passive: true });
