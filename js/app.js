/* js/app.js — robust mobile hamburger */
(function () {
  const TOGGLE_SEL =
    '[data-menu-toggle], .menu-toggle, .hamburger, .nav-toggle, header [aria-label*="menu" i], header .fa-bars';

  document.addEventListener('click', function (ev) {
    const btn = ev.target.closest(TOGGLE_SEL);
    if (btn) {
      ev.preventDefault();
      document.documentElement.classList.toggle('menu-open');
      return;
    }

    // Close on nav link tap or outside tap
    const clickedLink = ev.target.closest('header nav a');
    const clickedInsidePanel = ev.target.closest('header nav');
    const clickedInsideToggle = ev.target.closest(TOGGLE_SEL);

    if (
      document.documentElement.classList.contains('menu-open') &&
      (clickedLink || (!clickedInsidePanel && !clickedInsideToggle))
    ) {
      document.documentElement.classList.remove('menu-open');
    }
  });
})();
