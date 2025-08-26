// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const nav    = document.querySelector('.nav');
const backdrop = document.querySelector('.backdrop');

function closeNav() {
  nav.classList.remove('open');
  backdrop.classList.remove('show');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function openNav() {
  nav.classList.add('open');
  backdrop.classList.add('show');
  toggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

if (toggle && nav && backdrop) {
  toggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) closeNav();
    else openNav();
  });
  backdrop.addEventListener('click', closeNav);
  // Close after tapping a link
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}
