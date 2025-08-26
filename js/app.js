/* Mobile nav + a few small UX helpers
   Works with either .menu-toggle or .nav-toggle buttons,
   and with .site-nav or nav[aria-label="Primary"].
*/

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- Elements ---------- */
const toggleBtn =
  $('.menu-toggle') ||
  $('.nav-toggle') ||
  $('[data-js="menu-toggle"]');

const navEl =
  $('.site-nav') ||
  $('nav[aria-label="Primary"]') ||
  $('header nav');

/* ---------- Guard ---------- */
if (toggleBtn && navEl) {
  // Init ARIA
  toggleBtn.setAttribute('aria-expanded', 'false');

  // Open/close
  const setOpen = (open) => {
    navEl.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  const toggle = () => setOpen(!navEl.classList.contains('open'));

  toggleBtn.addEventListener('click', toggle);

  // Close on link click (for mobile)
  $$('a', navEl).forEach((a) =>
    a.addEventListener('click', () => setOpen(false))
  );

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navEl.classList.contains('open')) return;
    const withinToggle = toggleBtn.contains(e.target);
    const withinNav = navEl.contains(e.target);
    if (!withinToggle && !withinNav) setOpen(false);
  });
}

/* ---------- Optional: shrink header on scroll ---------- */
const header = $('header');
let lastY = 0;
if (header) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY || window.pageYOffset;
    const down = y > lastY;
    header.classList.toggle('header-scrolled', y > 8);
    header.classList.toggle('scrolling-down', down && y > 80);
    header.classList.toggle('scrolling-up', !down);
    lastY = y;
  });
}

/* ---------- Optional: smooth scroll for same-page links ---------- */
$$('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${id}`);
    }
  });
});
