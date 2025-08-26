/* js/app.js — mobile hamburger + close logic */
(function () {
  var TOGGLE_SEL =
    '[data-menu-toggle], .menu-toggle, .hamburger, .nav-toggle, header [aria-label*="menu" i]';

  function isMenuOpen() {
    return document.documentElement.classList.contains('menu-open');
  }

  function openMenu() {
    document.documentElement.classList.add('menu-open');
    var btn = document.querySelector(TOGGLE_SEL);
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    document.documentElement.classList.remove('menu-open');
    var btn = document.querySelector(TOGGLE_SEL);
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  // Toggle on tap/click
  document.addEventListener('click', function (ev) {
    var toggle = ev.target.closest(TOGGLE_SEL);
    if (toggle) {
      ev.preventDefault();
      isMenuOpen() ? closeMenu() : openMenu();
      return;
    }

    // Close when a header link is tapped, or when tapping outside the panel
    var clickedHeaderLink = ev.target.closest('header nav a');
    var insidePanel = ev.target.closest('header nav');
    var insideToggle = ev.target.closest(TOGGLE_SEL);

    if (isMenuOpen() && (clickedHeaderLink || (!insidePanel && !insideToggle))) {
      closeMenu();
    }
  });

  // ESC to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isMenuOpen()) closeMenu();
  });
})();
