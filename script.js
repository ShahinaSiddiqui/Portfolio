/* =========================
   Small helpers + nav logic
   ========================= */
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));

// Smooth in-page scroll + active link highlight
const links = document.querySelectorAll('.nav-link');
links.forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    nav.classList.remove('open');
  });
});

// Observe sections to set active nav
const sections = [...document.querySelectorAll('section[id]')];
const io = new IntersectionObserver(entries=>{
  for(const e of entries){
    if(e.isIntersecting){
      const id = e.target.getAttribute('id');
      links.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+id));
    }
  }
},{rootMargin:"-45% 0px -45% 0px"});
sections.forEach(s=>io.observe(s));

/* =========================
   Carousel (Projects)
   ========================= */
document.querySelectorAll('.carousel').forEach(car => {
  const images = JSON.parse(car.dataset.images);
  let i = 0;
  const img = car.querySelector('.cimg');
  const set = ()=> img.src = images[i];
  set();

  car.querySelector('.prev').addEventListener('click', ()=>{ i=(i-1+images.length)%images.length; set(); });
  car.querySelector('.next').addEventListener('click', ()=>{ i=(i+1)%images.length; set(); });

  // swipe on mobile
  let sx=0;
  car.addEventListener('touchstart', e=> sx = e.touches[0].clientX, {passive:true});
  car.addEventListener('touchend', e=>{
    const dx = e.changedTouches[0].clientX - sx;
    if(Math.abs(dx) > 40) (dx>0 ? car.querySelector('.prev') : car.querySelector('.next')).click();
  });
});

/* =========================
   Progress Rings (Skills)
   ========================= */
const rings = document.querySelectorAll('.ring');
rings.forEach(r=>{
  const percent = +r.dataset.percent || 0;
  const span = document.createElement('span');
  span.textContent = r.dataset.label || `${percent}%`;
  r.appendChild(span);

  // animate conic-gradient when in view
  const obs = new IntersectionObserver(([e])=>{
    if(!e.isIntersecting) return;
    let p=0;
    const t = setInterval(()=>{
      p += 2;
      r.style.setProperty('--p', p);
      r.style.background = `conic-gradient(var(--blue) 0 ${p*3.6}deg, #e8eef5 0 360deg)`;
      if(p >= percent){ clearInterval(t); }
    }, 12);
    obs.disconnect();
  }, {threshold:.4});
  obs.observe(r);
});

/* =========================
   Minor button niceties
   ========================= */
const resumeBtn = document.getElementById('resumeBtn');
// Already has download attribute; no extra JS required,
// but we keep a guard in case someone removes it.
resumeBtn?.addEventListener('click', (e)=>{
  const a = e.currentTarget;
  if(!a.hasAttribute('download')){
    a.setAttribute('download','resume-shahina-siddiqui.pdf');
  }
});
