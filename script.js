// Highlight current page in nav (based on <body data-page="...">)
(function(){
  const page = document.body.getAttribute('data-page');
  const sel = page === 'home' ? 'index.html' : page + '.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    if(a.getAttribute('href') === sel){
      a.classList.add('is-active');
    }
  });
})();

// Simple carousel (Projects page)
document.querySelectorAll('.carousel').forEach(car=>{
  const imgs = [...car.querySelectorAll('.car-img')];
  if(!imgs.length) return;
  let i = 0;
  const show = k => imgs.forEach((im,ix)=>im.classList.toggle('active', ix===k));
  show(0);
  car.querySelector('.next')?.addEventListener('click',()=>{ i=(i+1)%imgs.length; show(i); });
  car.querySelector('.prev')?.addEventListener('click',()=>{ i=(i-1+imgs.length)%imgs.length; show(i); });
});

// Animated rings (Skills page)
document.querySelectorAll('.ring').forEach(r=>{
  r.style.setProperty('--val', +r.dataset.val||0);
});

// Call button (Contact page)
const callBtn = document.getElementById('callBtn');
if(callBtn){
  let seen = false;
  callBtn.addEventListener('click', ()=>{
    if(!seen){ callBtn.textContent = 'Call (+91 70874 33166)'; seen = true; }
    else { location.href = 'tel:+917087433166'; }
  });
}
