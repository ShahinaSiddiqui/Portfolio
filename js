/* Mobile menu & small helpers */
(function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');

  if(!btn || !nav) return;

  function closeMenu(){
    btn.setAttribute('aria-expanded','false');
    document.body.classList.remove('nav-open');
  }
  function openMenu(){
    btn.setAttribute('aria-expanded','true');
    document.body.classList.add('nav-open');
  }

  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  // Close on link click
  nav.addEventListener('click', e=>{
    if(e.target.matches('a')) closeMenu();
  });

  // Close on ESC
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape') closeMenu();
  });
})();
