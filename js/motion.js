(function(){
const L=window.L,{$,$$}=L;const RM=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
let io,cio,px=[],lastY=0,pr=document.getElementById('prog');
if(!pr){pr=document.createElement('div');pr.id='prog';document.body.appendChild(pr)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-vid]');if(!b)return;const v=b.querySelector('video');document.querySelectorAll('[data-vid].play').forEach(o=>{if(o!==b){o.querySelector('video').pause();o.classList.remove('play')}});if(v.paused){v.muted=false;v.play().catch(()=>{v.muted=true;v.play()});b.classList.add('play')}else{v.pause();b.classList.remove('play')}});
document.addEventListener('timeupdate',e=>{const v=e.target;if(v.tagName!=='VIDEO')return;const w=v.closest('[data-vid]');if(w&&v.duration)w.querySelector('.vb i').style.width=(v.currentTime/v.duration*100)+'%'},true);
L.after=()=>{
 io&&io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
 $$('.st').forEach(p=>[...p.children].forEach((c,i)=>c.style.setProperty('--i',i)));
 $$('.imgr,.rv2').forEach(el=>io.observe(el));
 cio&&cio.disconnect();cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const t=+e.target.dataset.count;if(RM()){e.target.textContent=t;return}setTimeout(()=>{const s=performance.now(),f=n=>{const p=Math.min(1,(n-s)/2000);e.target.textContent=Math.round(t*(1-Math.pow(1-p,2.2)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)},500)}),{threshold:1,rootMargin:'0px 0px -12% 0px'});
 $$('[data-count]').forEach(el=>{if(RM())el.textContent=el.dataset.count;else cio.observe(el)});
 px=$$('[data-px]');tick();
};
function tick(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;pr.style.transform='scaleX('+(h>0?Math.min(1,y/h):0)+')';
 const hd=$('#hdr');if(hd){const down=y>lastY&&y>260&&!RM()&&!$('#mm.open')&&!hd.contains(document.activeElement)&&!hd.matches(':hover');hd.classList.toggle('hide',down)}lastY=y;
 if(!RM())px.forEach(e=>{const r=e.parentElement.getBoundingClientRect();if(r.bottom<-200||r.top>innerHeight+200)return;e.style.transform='translate3d(0,'+((r.top+r.height/2-innerHeight/2)*-parseFloat(e.dataset.px)).toFixed(1)+'px,0) scale(1.1)'})}
addEventListener('scroll',()=>requestAnimationFrame(tick),{passive:true});
})();
