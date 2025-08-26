/* Robust mobile menu toggle – no HTML edits needed */
(function () {
  const header =
    document.querySelector(".site-header") ||
    document.querySelector("header");

  if (!header) return;

  const nav =
    header.querySelector("nav") ||
    document.querySelector("header nav") ||
    document.querySelector("nav");

  if (!nav) return;

  // Helper: is this a hamburger-ish element?
  function isToggle(el) {
    if (!el) return false;
    const cls = el.classList || { contains: () => false };
    const name = (el.getAttribute("aria-label") || "").toLowerCase();
    const id = (el.id || "").toLowerCase();

    return (
      el.matches?.("[data-menu-toggle], [data-nav-toggle]") ||
      el.matches?.('button[aria-controls], [aria-expanded]') ||
      name.includes("menu") ||
      id.includes("menu") ||
      ["menu-btn", "menu", "hamburger", "nav-toggle", "menu-toggle", "bars", "menu-icon"].some(c => cls.contains(c)) ||
      (el.tagName === "BUTTON" && (el.textContent || "").trim() === "☰")
    );
  }

  // Click anywhere in header; if a toggle was hit, open/close the drawer
  header.addEventListener("click", (e) => {
    const t = e.target.closest("button, a, div, span, svg");
    if (!t) return;
    if (!isToggle(t)) return;

    e.preventDefault();
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("no-scroll", open);

    try {
      t.setAttribute("aria-expanded", open ? "true" : "false");
      t.setAttribute("aria-controls", nav.id || "main-nav");
      if (!nav.id) nav.id = "main-nav";
    } catch (_) {}
  });

  // Close on link tap
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      nav.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    }
  });

  // ESC to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      nav.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    }
  });
})();
