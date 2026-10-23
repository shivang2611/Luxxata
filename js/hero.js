(function(){
const L=window.L,{$,$$}=L,RM=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
L.heroB={
 html:(sl,hs)=>`<section class="hf" data-hero aria-roledescription="carousel" aria-label="Destinations"><div class="hf-st">${sl.map((s,i)=>`<a class="hf-s ${i?'':'on'}" href="#/destination/${s.name.toLowerCase()}" aria-label="${s.name}" ${i?'tabindex="-1" aria-hidden="true"':''}>${L.img(s.img,s.name,'',i===0)}</a>`).join('')}</div><div class="hf-sc" aria-hidden="true"></div>
 <div class="wrap hf-in"><div class="hf-tx"><span class="hf-eb">${hs.eyebrow}</span><h1>${hs.h}</h1><p class="hf-sub">${hs.sub}</p><div class="row"><button class="btn" data-act="proposal">${hs.btn}</button><button class="btn hf-ol" data-act="scrollto" data-t="explore">Explore destinations</button></div></div>
 <div class="hf-bt"><button class="hf-nx" data-hn aria-label="Next destination"><span class="hf-k">Next</span><span class="hf-nm" data-hnm></span><span class="hf-ln"><i></i></span></button><div class="hf-ct"><span data-hc aria-live="polite"></span><button data-hp aria-label="Previous destination">\u2039</button><button data-hn2 aria-label="Next destination">\u203a</button><button class="hf-pa" data-hpause aria-label="Pause slideshow" aria-pressed="false">II</button></div></div></div></section>`,
 init:sl=>{const sec=$('[data-hero]'),S=$$('.hf-s',sec),n=S.length,ln=$('.hf-ln i',sec);let cur=0,paused=RM(),hov=false,tm;const D=3000;
  const show=i=>{cur=(i+n)%n;S.forEach((s,j)=>{s.classList.toggle('on',j===cur);s.setAttribute('aria-hidden',j!==cur);s.tabIndex=j===cur?0:-1});$('[data-hnm]',sec).textContent=sl[(cur+1)%n].name;$('[data-hc]',sec).textContent=String(cur+1).padStart(2,'0')+' / '+String(n).padStart(2,'0');ln.style.animation='none';ln.offsetWidth;ln.style.width=paused||RM()?'100%':'';ln.style.animation=paused||hov||RM()?'none':'hfp '+D+'ms linear forwards'};
  const sched=()=>{clearTimeout(tm);if(!paused&&!hov)tm=setTimeout(()=>{show(cur+1);sched()},D)};
  const nx=()=>{show(cur+1);sched()};$$('[data-hn],[data-hn2]',sec).forEach(b=>b.onclick=nx);$('[data-hp]',sec).onclick=()=>{show(cur-1);sched()};
  const pb=$('[data-hpause]',sec),setP=()=>{pb.textContent=paused?'\u25b6':'II';pb.setAttribute('aria-pressed',paused);pb.setAttribute('aria-label',paused?'Play slideshow':'Pause slideshow')};pb.onclick=()=>{paused=!paused;setP();show(cur);sched()};setP();
  sec.addEventListener('mouseenter',()=>{hov=true;clearTimeout(tm);ln.style.animationPlayState='paused'});sec.addEventListener('mouseleave',()=>{hov=false;show(cur);sched()});sec.addEventListener('focusin',()=>{hov=true;clearTimeout(tm)});sec.addEventListener('focusout',()=>{hov=false;sched()});
  sec.addEventListener('keydown',e=>{if(e.key==='ArrowRight')nx();if(e.key==='ArrowLeft'){show(cur-1);sched()}});
  let sx=null;sec.addEventListener('pointerdown',e=>{sx=e.clientX});sec.addEventListener('pointerup',e=>{if(sx!==null&&Math.abs(e.clientX-sx)>50){e.clientX<sx?nx():(show(cur-1),sched())}sx=null});
  show(0);sched();L.cleanups.push(()=>clearTimeout(tm))}};
})();
