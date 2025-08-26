/* Mobile nav toggle — resilient version */
(function(){
  const toggle   = document.querySelector('.menu-toggle');
  const nav      = document.querySelector('#site-nav');
  const backdrop = document.querySelector('.backdrop');
  if(!toggle || !nav) return;

  function openNav(){
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    if(backdrop){
      backdrop.classList.add('show');
      backdrop.removeAttribute('hidden');
    }
    // stop body scroll when menu open
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function closeNav(){
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    if(backdrop){
      backdrop.classList.remove('show');
      // keep it in DOM but invisible
    }
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    nav.classList.contains('open') ? closeNav() : openNav();
  });

  if(backdrop){
    backdrop.addEventListener('click', closeNav);
  }

  // Close when a nav link is tapped
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  // Safety: close on Escape
  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && nav.classList.contains('open')) closeNav();
  });
})();
