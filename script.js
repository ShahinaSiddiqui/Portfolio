:root{
  --blue1:#008CDB;
  --blue2:#034C8C;
  --blue3:#2481A6;
  --ink:#0D0D0D;
  --bg:#263241;      /* hero background */
  --muted:#607080;
  --light:#F2F2F2;
  --white:#fff;
}

*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  font-family:Poppins,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial;
  color:#1d232b;background:#fff; line-height:1.6;
}

.container{width:min(1120px,92vw); margin-inline:auto}

/* Header */
.site-header{
  position:sticky; top:0; z-index:20; background:#fffdfdE6; backdrop-filter:saturate(140%) blur(6px);
  border-bottom:1px solid #e9edf2;
}
.nav-wrap{display:flex; align-items:center; justify-content:space-between; padding:14px 0}
.brand{font-weight:700; font-size:20px; letter-spacing:.4px}
.brand span{color:var(--blue1)}
.nav a{color:#1c2733; text-decoration:none; font-weight:600; margin-left:18px; padding:8px 10px; border-radius:8px}
.nav a:hover{background:#f1f6fb}
.nav a.is-active{color:var(--white); background:linear-gradient(135deg,var(--blue2),var(--blue1))}

/* HERO */
.hero{
  background:var(--bg); color:var(--white); padding:54px 0 0 0;
}
.hero-grid{
  display:grid; grid-template-columns:1.2fr .9fr; gap:40px; align-items:center; padding:40px 0 24px;
}
.headline{
  font-family:"Caveat",cursive; font-size:56px; line-height:1; margin:0 0 8px; color:#aee4ff;
}
.role{font-weight:700; color:#f9fbff; margin:0 0 16px}
.intro{color:#d7e7f5; max-width:58ch}
.hero-photo img{width:330px; aspect-ratio:1; object-fit:cover; border-radius:50%;
  border:6px solid #e6f4ff1a; box-shadow:0 18px 60px #00000050; display:block; margin-inline:auto;
}

.cta-row{display:flex; gap:14px; flex-wrap:wrap; margin-top:18px}
.btn{
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding:12px 18px; border-radius:12px; text-decoration:none; cursor:pointer;
  font-weight:700; border:2px solid transparent; transition:.25s ease-in-out;
}
.btn-solid{color:#fff; background:linear-gradient(135deg,var(--blue1),var(--blue3))}
.btn-solid:hover{filter:brightness(1.07) saturate(1.05)}
.btn-outline{color:#fff; border-color:#9dd5ff; background:transparent}
.btn-outline:hover{background:#ffffff14}

/* Partners */
.partners{padding:28px 0 42px; background:var(--bg)}
.partners-title{color:#d2e7f7; margin-bottom:14px; font-weight:600}
.logo-row{display:grid; grid-template-columns:repeat(8,minmax(90px,1fr)); gap:26px; align-items:center}
.logo-row img{width:100%; max-height:50px; object-fit:contain; filter:drop-shadow(0 1px 0 #00000010)}

/* Sections */
.section{padding:74px 0}
.section-alt{background:#f9fafc}
.section-title{font-size:32px; margin:0}
.section-sub{color:#5a6b7c; margin:6px 0 28px}

/* Project cards */
.project{display:grid; grid-template-columns:1.1fr 1fr; gap:30px; align-items:center; margin:40px 0}
.project-reverse{grid-template-columns:1fr 1.1fr}
.project-reverse .project-media{order:2}
.project-reverse .project-copy{order:1}
.media-frame{position:relative; background:#0b1220; border-radius:16px; overflow:hidden; box-shadow:0 16px 50px #0b122020}
.media-frame video, .media-frame img{display:block; width:100%; height:100%; object-fit:cover}

/* Carousel */
.carousel{display:grid; grid-template-columns:1fr; --idx:0}
.carousel .car-img{grid-area:1/1; opacity:0; transform:scale(.98); transition:.35s ease}
.carousel .car-img.active{opacity:1; transform:scale(1)}
.car-btn{
  position:absolute; top:50%; transform:translateY(-50%);
  width:38px;height:38px; border-radius:50%; border:none; cursor:pointer;
  color:#fff; background:#0c1825bb; display:grid; place-items:center; font-size:28px; line-height:0;
}
.car-btn:hover{background:#0c1825}
.carousel .prev{left:10px}
.carousel .next{right:10px}

/* Skills */
.skill-cards{display:grid; grid-template-columns:repeat(3,1fr); gap:26px; margin-top:8px}
.skill-card{background:#fff; border:1px solid #eef2f6; border-radius:16px; padding:22px; box-shadow:0 6px 20px #0b122008}
.skill-ico{width:56px; height:56px; object-fit:contain; margin-bottom:10px}

.tools-title{margin-top:34px}
.tools-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:26px; margin-top:14px}
.tool{background:#fff; border:1px solid #eef2f6; border-radius:16px; padding:22px; box-shadow:0 6px 20px #0b122008}
.tool-label{margin-top:10px; margin-bottom:4px}

.ring{
  --val:0;
  width:96px; height:96px; border-radius:50%;
  background:
    conic-gradient(var(--blue1) calc(var(--val)*1%), #e6edf5 0),
    radial-gradient(circle 38px,#fff 98%,transparent 100%);
  display:grid; place-items:center; font-weight:700; color:#102030;
  margin-bottom:10px;
}
.ring span{z-index:2}

/* Contact */
.contact{background:linear-gradient(180deg,#f9fafc,#ffffff)}
.contact-grid{display:grid; grid-template-columns:1.2fr .8fr; gap:26px; align-items:center}
.contact-photo img{width:270px; aspect-ratio:1; object-fit:cover; border-radius:50%; border:6px solid #eef6ff}

.site-footer{border-top:1px solid #eef2f6; padding:16px 0; color:#57697b; background:#fff}

/* Responsive */
@media (max-width:980px){
  .hero-grid,.project,.project-reverse,.contact-grid{grid-template-columns:1fr}
  .project-reverse .project-media,.project-reverse .project-copy{order:initial}
  .logo-row{grid-template-columns:repeat(4,1fr)}
  .skill-cards,.tools-grid{grid-template-columns:1fr}
  .hero-photo img{width:270px}
}
