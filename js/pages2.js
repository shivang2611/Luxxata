(function(){
const X=window.LX,L=window.L,{$,$$,esc}=L,P=L.pages;
const RM=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
const O=P.destination;
const dn=s=>L.name(s);const ctb=()=>`<ul class="ct"><li><span>Email</span><a href="mailto:${L.C.email}">${L.C.email}</a></li><li><span>Phone</span><a href="tel:${L.C.tel}">${L.C.phone}</a></li><li><span>Corporate Office</span>${L.C.office}</li></ul>`;
const dimg=s=>X.home.slides.find(x=>x.name.toLowerCase()===s);
/* shared v2 blocks */
const why2=(o={})=>{const it=[['H24 Support','We are always available to take up queries and challenges from our travellers and Business Partners.'],['Accessibility Management','Team at Luxxata Holidays is always prepared to assist and provide the best solutions and proposals to all business partners'],[o.third||'Years Experiences','Experience in delivering seamless travel solutions for B2B segment.'],[o.fourth||'VISAS Assistance','End-to-end visa support for individuals and groups - trusted guidance, documentation help, and smooth processing for all major destinations.']];
 return `<section class="sec sec--w"><div class="wrap"><div class="head rv2"><h2>Why Choose Us</h2><p>${o.sub||'We create successful group travel experiences for you.'}</p></div><div class="why2 st">${it.map((x,i)=>`<div class="rv2"><span class="big">${i===2?'<span data-count="10">0</span>+':i===0?'H24':i===3?'Visa':'ACM'}</span><h4>${x[0]}</h4><p>${x[1]}</p></div>`).join('')}</div></div></section>`};
L.why2=why2;const reviews=()=>`<section class="sec rqw"><div class="wrap">${L.reviews.top()}<div class="vids st">${[["https://upload.wikimedia.org/wikipedia/commons/b/b6/Grand_Canyon_Nat._Park_Mather_Point%2C_20101223-050_%28b-roll%29_%285286278649%29.webm#t=2","Corporate incentive group","Egypt"],["https://upload.wikimedia.org/wikipedia/commons/8/82/View_from_Rosh_Hanikra_%28Israeli_-_Lebanese_border%29_on_the_northern_coast_of_Israel.webm#t=3","Family holiday","Jordan"],["https://upload.wikimedia.org/wikipedia/commons/0/06/Bike_Trip_to_Leh-Ladakh-_Part_1-_Journey_through_Spiti_Valley.webm#t=20","School tour","Turkey"]].map((v,i)=>`<figure class="vc rv2"><div class="vcard" data-vid><video src="${v[0]}" preload="metadata" playsinline loop aria-label="Sample traveller video ${i+1}"></video><button class="vp" aria-label="Play sample traveller video ${i+1}"><i></i></button><span class="vt">SAMPLE</span><span class="vb"><i></i></span></div><figcaption><b>${v[1]}</b><span>${v[2]}</span></figcaption></figure>`).join('')}</div></div></div></section>`;
/* HOME v2 */
P.home=()=>{const H=X.home,hs=H.hero,sl=H.slides;
 const names=sl.map(s=>`<span>${s.name}</span><span class="dot" aria-hidden="true">\u2022</span>`).join('');
 const h=`${L.heroB.html(sl,hs)}
 <div class="mq" aria-hidden="true"><div class="mq-t">${names}${names}</div></div>
 ${L.wd.html()}
 ${L.journey.html()}
 <section class="sec sec--w" id="explore"><div class="wrap"><div class="head rv2"><h2>Destinations</h2><p>${H.destSub}</p></div><div class="dr" tabindex="0" aria-label="Destinations"><div class="dr-t">${sl.map((s=>{const k=s.name.toLowerCase();return '<a href="#/destination/'+k+'"><span class="im">'+L.img(s.img,s.name)+'</span><b>'+s.name+'</b><span class="meta">'+X.dest[k].pkgs.length+' tour packages</span></a>'})).join('')}${sl.map((s=>{const k=s.name.toLowerCase();return '<a href="#/destination/'+k+'"><span class="im">'+L.img(s.img,s.name)+'</span><b>'+s.name+'</b><span class="meta">'+X.dest[k].pkgs.length+' tour packages</span></a>'})).join('')}</div></div></div></section>
 <section class="sec"><div class="wrap"><div class="head rv2"><span class="eyebrow">Tour packages</span><h2>Choose a destination</h2></div><div class="chips" id="pk-tabs" role="group" aria-label="Destination packages">${L.NAV.map((s,i)=>`<button class="chip" data-t="${s}" aria-pressed="${i===0}">${dn(s)}</button>`).join('')}</div><div id="pk-out" style="margin-top:32px"></div></div></section>
 ${why2()}${reviews()}
 
 <section class="sec"><div class="wrap"><div class="head rv2"><h2>Travel Tips &amp; Articles</h2></div><div class="grid st">${X.articles.slice(0,3).map(a=>`<article class="card rv2"><a class="pic" href="#/blog/${a.slug}" aria-label="${esc(a.title)}">${L.img(a.img,a.title)}</a><div class="bd"><h3><a href="#/blog/${a.slug}" style="text-decoration:none">${esc(a.title)}</a></h3><p>${esc(a.excerpt)}</p><a class="link go" style="align-self:flex-start" href="#/blog/${a.slug}">Read More</a></div></article>`).join('')}</div></div></section>
 <section class="sec sec--w"><div class="wrap"><div class="grid--2" style="align-items:start"><div class="stack rv2"><h2>Get in touch!</h2><p class="lead">${H.touch}</p>${ctb()}</div>${L.form({title:'Get in touch!',cta:'Submit'})}</div></div></section>`;
 return {t:'Home',h,i(){L.reviews.init();
  L.heroB.init(sl);
  L.wd.init();
  /* packages by destination */
  const out=$('#pk-out'),draw=s=>{const d=X.dest[s];out.classList.remove('fadein');out.innerHTML=L.rail(d.pkgs.map(p=>L.pkgCard(p,s)),d.name+' tour packages')+`<p style="margin-top:20px"><a class="link" href="#/destination/${s}">All ${d.name} tour packages</a></p>`;L.bindRail(out);out.querySelectorAll('.rv').forEach(x=>x.classList.add('in'));void out.offsetWidth;out.classList.add('fadein')};
  $('#pk-tabs').onclick=e=>{const b=e.target.closest('[data-t]');if(!b)return;$$('#pk-tabs .chip').forEach(c=>c.setAttribute('aria-pressed',c===b));draw(b.dataset.t)};draw('egypt');
  L.journey.init();
 }}};
/* DESTINATION v2 */
P.destination=slug=>{const d=X.dest[slug];if(!d)return P.notfound();const N=d.name,k=L.NAV.indexOf(slug),nx=L.NAV[(k+1)%L.NAV.length],ni=dimg(nx);
 const sl=d.slides.map(s=>{if(slug==='egypt'){const i=s.cap.indexOf('. ');return {img:s.img,cap:s.cap,title:s.cap.slice(0,i+1),text:s.cap.slice(i+2)}}return {img:s.img,cap:s.cap}});
 const h=`${L.dhero.html()}
 ${L.hl.html(d)}
  <section class="sec sec--w"><div class="wrap"><div class="head rv2"><h2>${d.pkgTitle}</h2><p>${d.pkgSub}</p></div>${L.rail(d.pkgs.map(p=>L.pkgCard(p,slug)),N+' tour packages')}</div></section>
 ${why2({sub:d.whySub,third:d.thirdYears?'Years':null})}${reviews()}
 <section class="sec" style="padding-block:clamp(40px,5vw,72px)"><div class="wrap"><div class="grid--2" style="align-items:center"><div class="stack rv2"><h2>Itinerary Request</h2><p class="lead">${X.home.touch}</p>${ctb()}</div>${L.form({title:'Itinerary Request',dest:slug})}</div></div></section>
 <a class="nxt" href="#/destination/${nx}"><div class="wrap nxt-g"><div><span class="eyebrow">Next destination</span><h2>${dn(nx)}</h2><span class="btn nxt-b" style="margin-top:28px">Explore ${dn(nx)} <span aria-hidden="true">\u2192</span></span></div><div class="nxt-i">${L.img(ni.img,dn(nx))}</div></div></a>`;
 return {t:N+' DMC',h,topbar:slug,i(){L.dhero.init(slug);L.hl.init();L.reviews.init()}}};
})();
