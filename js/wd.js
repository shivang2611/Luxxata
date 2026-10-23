(function(){
const L=window.L,X=window.LX,{$,$$}=L;
const IMG=['2024/05/egypt-s1-1.jpg','2024/05/azerbaijan-2.jpg','2024/05/turkey-s2.jpg','2025/04/halong-bay-vietnam.jpg'];
L.wd={
 html:()=>`<section class="sec wd2"><div class="wrap"><div class="wd2-h rv2"><div><span class="eyebrow">What we do</span><h2>What we do</h2></div><a class="link" href="#/about-us">${X.home.readMore}</a></div>
 <div class="wd2-g" data-wd><div class="wd2-l" role="tablist" aria-label="What we do">${X.home.what.map((w,i)=>`<div class="wd2-i ${i?'':'on'}"><button role="tab" id="wdt${i}" aria-selected="${i===0}" aria-controls="wdp${i}" data-wi="${i}"><span class="n">0${i+1}</span><span class="t">${w[0]}</span></button><div class="wd2-p" id="wdp${i}" role="tabpanel" aria-labelledby="wdt${i}"><div><p>${w[1]}</p></div></div><i class="wd2-b"><b></b></i></div>`).join('')}</div>
 <div class="wd2-v">${IMG.map((s,i)=>`<div class="wd2-m ${i?'':'on'}">${L.img(s,X.home.what[i][0],'',i===0)}</div>`).join('')}</div></div></div></section>`,
 init:()=>{const root=$('[data-wd]');if(!root)return;const I=$$('.wd2-i',root),M=$$('.wd2-m',root),B=$$('.wd2-b b',root),n=I.length,D=4000;let cur=0,tm,hov=false,vis=false;
  const set=i=>{cur=(i+n)%n;I.forEach((e,j)=>{e.classList.toggle('on',j===cur);$('button',e).setAttribute('aria-selected',j===cur)});M.forEach((m,j)=>m.classList.toggle('on',j===cur));B.forEach((b,j)=>{b.style.animation='none';if(j===cur){b.offsetWidth;b.style.animation=hov||!vis?'none':'wdp '+D+'ms linear forwards';b.style.width=hov||!vis?'100%':''}else b.style.width=''})};
  const sched=()=>{clearTimeout(tm);if(!hov&&vis)tm=setTimeout(()=>{set(cur+1);sched()},D)};
  $$('[data-wi]',root).forEach(b=>{const i=+b.dataset.wi;b.onclick=()=>{set(i);sched()};b.onmouseenter=()=>{if(matchMedia('(hover:hover)').matches){hov=true;clearTimeout(tm);set(i)}};b.onfocus=()=>{hov=true;clearTimeout(tm);set(i)};b.onkeydown=e=>{if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();$$('[data-wi]',root)[(i+1)%n].focus()}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();$$('[data-wi]',root)[(i-1+n)%n].focus()}}});
  root.addEventListener('mouseleave',()=>{hov=false;set(cur);sched()});root.addEventListener('focusout',e=>{if(!root.contains(e.relatedTarget)){hov=false;set(cur);sched()}});
  const o=new IntersectionObserver(es=>es.forEach(e=>{vis=e.isIntersecting;set(cur);sched()}),{threshold:.35});o.observe(root);L.cleanups.push(()=>{o.disconnect();clearTimeout(tm)});set(0)}};
})();
