// Simple mobile hamburger toggle
const toggle   = document.querySelector('.menu-toggle');
const nav      = document.getElementById('site-nav');
const backdrop = document.querySelector('.backdrop');

function openNav(){
  nav.classList.add('open');
  backdrop.classList.add('show');
  toggle.setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
}
function closeNav(){
  nav.classList.remove('open');
  backdrop.classList.remove('show');
  toggle.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}

if (toggle && nav && backdrop){
  // ensure backdrop exists visually
  backdrop.removeAttribute('hidden');

  toggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) closeNav();
    else openNav();
  });

  backdrop.addEventListener('click', closeNav);
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}
