// js/app.js — robust hamburger that works with multiple markup variants
(function () {
  // Look for a toggle button (any of these selectors will work)
  const toggler = document.querySelector(
    '#hamburger, #navToggle, .nav-toggle, .hamburger, [data-nav-toggle]'
  );

  // Look for the menu/list we need to open (any of these will work)
  const menu = document.querySelector(
    '#siteNav, #primaryNav, .site-nav, nav .menu, nav .nav__list, nav ul'
  );

  if (!toggler || !menu) return; // nothing to wire up

  const OPEN_CLASSES = ['open', 'is-open', 'show'];

  const isOpen = () => OPEN_CLASSES.some(c => menu.classList.contains(c));
  const setOpen = (state) => {
    OPEN_CLASSES.forEach(c => menu.classList.toggle(c, state));
    document.body.classList.toggle('no-scroll', state);
    toggler.setAttribute('aria-expanded', state ? 'true' : 'false');
  };

  // Toggle on click
  toggler.addEventListener('click', (e) => {
    e.preventDefault();
    setOpen(!isOpen());
  });

  // Close after clicking a link in the drawer (good on mobile)
  menu.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && isOpen()) setOpen(false);
  });

  // Close on ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) setOpen(false);
  });
})();
