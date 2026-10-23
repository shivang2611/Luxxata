(function(){const L=window.L;L.dhero={html:()=>`<section class="hd"><div class="wrap"><div class="hd-g"><div class="lc"><div><nav class="bc" id="bc"></nav><h1 class="dxt" id="h" aria-label=""></h1><p class="lead2" id="p1"></p></div><div class="lc-b"><div class="cap" id="cap" aria-live="polite"></div><div class="ctl"><button id="pv" aria-label="Previous photo">‹</button><button id="nx" aria-label="Next photo">›</button><div class="cnt"><span class="roll"><i id="rl"></i></span><small id="tot"></small></div><div class="bar"><i id="br"></i></div></div></div></div><div class="dk" id="dk" role="group" aria-roledescription="carousel" aria-label="Photos"></div></div><div class="rest"><div class="whw"><h2 class="wh">Why <span id="wn"></span></h2><div class="wr"></div></div><div class="zz" id="zz"></div></div></div></section>`,init(slug){

const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches,E='cubic-bezier(.2,.7,.2,1)',slugs=Object.keys(LX.dest),D=5200;
let cur=slug,order=[],cards=[],tm,hov=false,busy=false,drag=null,sl=[],N='';
const capOf=s=>s.cap.split('. ')[0].replace(/\.$/,'');
function pos(c,r,n){if(r===0)return 'translate3d(0,0,0) rotate(0) scale(1)';return `translate3d(${r*52}px,${r*-16}px,${-r*90}px) rotate(${r*3.6}deg) scale(${1-r*.035})`}
function lay(entry){cards.forEach((c,i)=>{const r=order.indexOf(i);c.classList.toggle('f',r===0);c.style.zIndex=cards.length-r;c.style.opacity=r>2?0:1;c.style.filter=r?'brightness('+(1-r*.05)+')':'none';c.setAttribute('aria-hidden',r!==0);if(!c._d)c.style.transform=pos(c,r,cards.length)})}
function info(first){const i=order[0];const t=capOf(sl[i]);const c=$('#cap');const set=()=>{c.innerHTML='<span>'+t+'</span>'};if(first||RM){set()}else{const o=c.firstElementChild;o&&o.animate([{transform:'none',opacity:1},{transform:'translateY(-100%)',opacity:0}],{duration:260,easing:E,fill:'forwards'}).finished.then(()=>{set();c.firstElementChild.animate([{transform:'translateY(100%)',opacity:0},{transform:'none',opacity:1}],{duration:520,easing:E})}).catch(set)}
 const roll=$('#rl');if(!roll.children.length)roll.innerHTML=sl.map((_,j)=>'<i>'+String(j+1).padStart(2,'0')+'</i>').join('');roll.style.transform=`translateY(${-i}em)`;roll.style.transition=first||RM?'none':'transform .7s '+E}
function bar(){const b=$('#br');b.getAnimations().forEach(a=>a.cancel());b.style.width='0';if(!RM&&!hov&&!drag)b.animate([{width:'0'},{width:'100%'}],{duration:D,easing:'linear',fill:'forwards'})}
function sched(){clearTimeout(tm);bar();if(!RM&&!hov)tm=setTimeout(()=>step(1),D)}
async function step(d){if(busy||sl.length<2)return;busy=true;clearTimeout(tm);const n=order.length;
 if(d>0){const fc=cards[order[0]];fc._d=1;const a=fc.animate([{transform:fc.style.transform||pos(fc,0)},{transform:'translate3d(110%,-6%,60px) rotate(16deg)',opacity:0}],{duration:RM?1:620,easing:E,fill:'forwards'});await a.finished.catch(()=>{});order.push(order.shift());fc._d=0;a.cancel();fc.style.transition='none';fc.style.opacity=0;lay();void fc.offsetWidth;fc.style.transition='';lay();info()}
 else{order.unshift(order.pop());const fc=cards[order[0]];fc._d=1;fc.style.zIndex=99;const a=fc.animate([{transform:'translate3d(-110%,-4%,60px) rotate(-14deg)',opacity:0},{transform:pos(fc,0),opacity:1}],{duration:RM?1:700,easing:E});lay();await a.finished.catch(()=>{});fc._d=0;info()}
 lay();busy=false;sched()}
function build(){const d=LX.dest[cur];N=d.name;sl=d.slides.slice(0,3);order=sl.map((_,i)=>i);
 $('#bc').innerHTML='<a href="#">Home</a> / Destinations / '+N;$('#wn').textContent=N;$('#tot').textContent='/ '+String(sl.length).padStart(2,'0');
 const h=$('#h');h.setAttribute('aria-label',N+' DMC');let li=0;h.innerHTML=(N+' DMC').split(' ').map(w=>'<span class="wd" aria-hidden="true">'+w.split('').map(c=>'<span class="dxl" style="--i:'+(li++)+'">'+c+'</span>').join('')+'</span>').join(' ');
 $('#p1').textContent=d.intro[0];const ps=d.intro.slice(1),pi=[sl[1]||sl[0],sl[2]||sl[0]],fo=['62% 40%','30% 60%'];$('#zz').innerHTML=ps.map((p,i)=>'<div class="zr'+(i%2?' zrev':'')+'"><div class="zt"><span class="zn">0'+(i+1)+'</span><p>'+p+'</p></div><div class="zp"><div class="zi" style="--o:'+fo[i%2]+'">'+L.img(pi[i%2].img,N)+'</div></div></div>').join('');zobs();
 const dk=$('#dk');dk.innerHTML=sl.map((s,i)=>`<div class="cd" data-i="${i}"><div class="tl"><div class="ph1">${L.img(s.img,N,'',i===0)}</div><div class="gl"></div><span class="tag">${String(i+1).padStart(2,'0')}</span></div></div>`).join('');
 cards=[...dk.children];$('#rl').innerHTML='';
 cards.forEach((c,i)=>{c.style.transform='translate3d(0,60px,-200px) rotate(0)';c.style.opacity=0});lay();info(true);
 requestAnimationFrame(()=>cards.forEach((c,i)=>{const r=order.indexOf(i);c.style.transition='none';c.style.transform=`translate3d(${r*52+120}px,${240}px,${-r*90-200}px) rotate(${r*3.6+8}deg)`;c.style.opacity=0;void c.offsetWidth;c.style.transition='transform 1.1s cubic-bezier(.34,1.3,.5,1) '+(r*130+250)+'ms,opacity .7s ease '+(r*130+250)+'ms';c.style.transform=pos(c,r);c.style.opacity=r>2?0:1}));
 setTimeout(()=>{cards.forEach(c=>c.style.transition='');sched()},900)}
$('#nx').onclick=()=>step(1);$('#pv').onclick=()=>step(-1);
const dk=$('#dk');
dk.addEventListener('pointermove',e=>{const c=cards[order[0]];if(!c||drag)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;if(RM)return;c.firstChild.style.transform=`rotateY(${((x-.5)*12).toFixed(2)}deg) rotateX(${((.5-y)*10).toFixed(2)}deg)`;c.style.setProperty('--gx',x*100+'%');c.style.setProperty('--gy',y*100+'%')});
dk.addEventListener('pointerleave',()=>{const c=cards[order[0]];c&&(c.firstChild.style.transform='')});
dk.addEventListener('pointerenter',()=>{hov=true;clearTimeout(tm);$('#br').getAnimations().forEach(a=>a.pause())});dk.addEventListener('pointerleave',()=>{hov=false;if(!drag)sched()});
dk.addEventListener('pointerdown',e=>{const c=cards[order[0]];if(busy||!c)return;drag={x:e.clientX,c};dk.setPointerCapture(e.pointerId);c.style.transition='none'});
dk.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x;drag.c.style.transform=`translate3d(${dx}px,0,0) rotate(${dx*.05}deg)`});
dk.addEventListener('pointerup',e=>{if(!drag)return;const dx=e.clientX-drag.x,c=drag.c;drag=null;c.style.transition='';if(Math.abs(dx)>110){c.style.transform=pos(c,0);step(dx<0?1:-1)}else{c.style.transform=pos(c,0);sched()}});
dk.tabIndex=0;dk.addEventListener('keydown',e=>{if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
build();
function zobs(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('zon');io.unobserve(e.target)}}),{threshold:.2});document.querySelectorAll('.zr').forEach(z=>io.observe(z))}
function zpar(){if(RM)return;document.querySelectorAll('.zi img').forEach(i=>{const r=i.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;i.style.transform='translateY('+((r.top+r.height/2-innerHeight/2)*-.08).toFixed(1)+'px) scale(1.5)'})}
addEventListener('scroll',zpar,{passive:true});L.cleanups.push(()=>{removeEventListener('scroll',zpar);clearTimeout(tm)});

}}})();
