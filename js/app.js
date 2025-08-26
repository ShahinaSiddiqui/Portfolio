/* Mobile nav + little safety helpers — no HTML edits required */
(function () {
  // find the header, nav and the "hamburger" button (very tolerant selectors)
  const header =
    document.querySelector(".site-header") ||
    document.querySelector("header");

  if (!header) return;

  const nav =
    header.querySelector("nav") ||
    document.querySelector("nav");

  // a button with common class names OR with the ☰ character
  let btn =
    header.querySelector(
      '.menu-btn, .menu, .hamburger, .nav-toggle, [data-menu-toggle], button[aria-label*="menu" i]'
    ) || Array.from(header.querySelectorAll("button, a"))
      .find(el => (el.textContent || "").trim() === "☰");

  if (!nav || !btn) return;

  // initial a11y state
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "main-nav");
  nav.id = nav.id || "main-nav";

  const closeNav = () => {
    nav.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    btn.setAttribute("aria-expanded", "false");
  };

  const openNav = () => {
    nav.classList.add("is-open");
    document.body.classList.add("no-scroll");
    btn.setAttribute("aria-expanded", "true");
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    (nav.classList.contains("is-open") ? closeNav : openNav)();
  });

  // close after tapping a menu link (single-page anchors etc.)
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeNav();
  });

  // ESC to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
})();
