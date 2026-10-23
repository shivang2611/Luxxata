(function(){
const L=window.L,{$,$$,esc}=L,RM=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
L.heroB={
 html:(sl,hs)=>`<section class="hb"><div class="hb-t"><span class="eyebrow rv2">${hs.eyebrow}</span><h1 class="rv2">${hs.h}</h1><p class="lead rv2">${hs.sub}</p><div class="row rv2"><button class="btn" data-act="proposal">${hs.btn}</button></div></div>
 <div class="hb-r" data-hero aria-roledescription="carousel" aria-label="Destinations"><div class="hb-st">${sl.map((s,i)=>`<a class="hb-s ${i?'':'on'}" href="#/destination/${s.name.toLowerCase()}" aria-label="${s.name}" ${i?'tabindex="-1" aria-hidden="true"':''}>${L.img(s.img,s.name,'',i===0)}</a>`).join('')}</div>
 <div class="hb-cap"><h2 data-hname>${sl[0].name}</h2><a class="link" data-hlink href="#/destination/${sl[0].name.toLowerCase()}">Explore ${sl[0].name}</a></div><div class="hb-th" role="group" aria-label="Choose destination">${sl.map((s,i)=>`<button class="${i?'':'on'}" data-hi="${i}" aria-label="${s.name}">${L.img(s.img,s.name)}</button>`).join('')}</div></div></section>`,
 init:sl=>{const hr=$('[data-hero]'),S=$$('.hb-s',hr),T=$$('[data-hi]',hr),n=S.length,sec=$('.hb');let cur=0,hov=false,tm;const INT=1500;
  const show=i=>{cur=(i+n)%n;S.forEach((s,j)=>{s.classList.toggle('on',j===cur);s.setAttribute('aria-hidden',j!==cur);s.tabIndex=j===cur?0:-1});T.forEach((t,j)=>t.classList.toggle('on',j===cur));const nm=$('[data-hname]'),lk=$('[data-hlink]');nm.textContent=sl[cur].name;lk.textContent='Explore '+sl[cur].name;lk.href='#/destination/'+sl[cur].name.toLowerCase();const tb=T[cur].parentElement;tb.scrollTo({left:T[cur].offsetLeft-tb.offsetLeft-40,behavior:'auto'})};
  const sched=()=>{clearTimeout(tm);if(!hov)tm=setTimeout(()=>{show(cur+1);sched()},INT)};
  const nx=()=>{show(cur+1);sched()},pv=()=>{show(cur-1);sched()};T.forEach((t,i)=>t.onclick=()=>{show(i);sched()});
  hr.addEventListener('mouseenter',()=>{hov=true;clearTimeout(tm)});hr.addEventListener('mouseleave',()=>{hov=false;sched()});hr.addEventListener('focusin',()=>{hov=true;clearTimeout(tm)});hr.addEventListener('focusout',()=>{hov=false;sched()});
  hr.addEventListener('keydown',e=>{if(e.key==='ArrowRight')nx();if(e.key==='ArrowLeft')pv()});
  let sx=null;hr.addEventListener('pointerdown',e=>{sx=e.clientX});hr.addEventListener('pointerup',e=>{if(sx!==null&&Math.abs(e.clientX-sx)>50){e.clientX<sx?nx():pv()}sx=null});
  show(0);sched();L.cleanups.push(()=>clearTimeout(tm))}};
})();
