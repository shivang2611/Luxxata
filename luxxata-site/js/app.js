(function(){
const L=window.L,X=window.LX,{$,$$}=L;let last=location.hash,pop=false,pos={},y=0;
const routes=[[/^\/?$/,'home'],[/^\/about-us$/,'about-us'],[/^\/contact-us$/,'contact-us'],[/^\/destination\/([\w-]+)$/,'destination'],[/^\/blog$/,'blog'],[/^\/blog-filter$/,'blog-filter'],[/^\/blog\/([\w-]+)$/,'article'],[/^\/privacy-policy$/,'privacy-policy'],[/^\/terms$/,'terms']];
L.q=()=>{const h=location.hash.slice(1),i=h.indexOf('?');return new URLSearchParams(i<0?'':h.slice(i+1))};
let io;
function render(){
 L.cleanups.splice(0).forEach(f=>f());
 const path=(location.hash.slice(1)||'/').split('?')[0];const r=routes.find(x=>x[0].test(path));let out;
 if(r){out=L.pages[r[1]]((path.match(r[0])||[])[1])}else out=L.pages.notfound();
 document.title=out.t+' \u00b7 Luxxata';
 $('#app').innerHTML=L.topbar(out.topbar)+L.header(path)+`<main id="main" tabindex="-1">${out.h}</main>`+L.footer();
 L.bindAll($('#app'));out.i&&out.i();
 io&&io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$('.rv').forEach(x=>io.observe(x));
 hdr();L.after&&L.after()}
function hdr(){const h=$('#hdr');h&&h.classList.toggle('sm',scrollY>40)}
addEventListener('scroll',()=>{y=scrollY;hdr()},{passive:true});addEventListener('popstate',()=>{pop=true});
addEventListener('hashchange',()=>{pos[last]=y;last=location.hash;render();scrollTo(0,pop?(pos[last]||0):0);pop=false});
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-toast]');if(t){L.toast(t.dataset.toast);return}
 const a=e.target.closest('[data-act]');
 if(a){const k=a.dataset.act;
  if(k==='menu'){$('#mm').classList.add('open');document.body.style.overflow='hidden';$('#mm .x').focus()}
  if(k==='mmd'){const d=a.parentElement,o=d.classList.toggle('open');a.setAttribute('aria-expanded',o)}
  if(k==='menu-x'){$('#mm').classList.remove('open');document.body.style.overflow=''}
  if(k==='dd'){const d=a.parentElement,o=d.classList.toggle('open');a.setAttribute('aria-expanded',o)}
  if(k==='scrollto'){const e=document.getElementById(a.dataset.t);if(e)scrollTo({top:e.getBoundingClientRect().top+scrollY-84,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})}
  if(k==='plan')L.modal(L.form({title:'Request a Proposal',dest:a.dataset.dest,msg:a.dataset.msg||''}),'Request a Proposal');
  if(k==='quote')L.modal(L.form({title:'Request a Quote',cta:'Submit'}),'Request a Quote');
  if(k==='proposal')L.modal(L.form({title:'Request a Proposal',cta:'Submit'}),'Request a Proposal');
  if(k==='ask')L.modal(L.form({title:'Itinerary Request',dest:a.dataset.dest,pkg:a.dataset.pkg}),'Itinerary Request');
  return}
 if(!e.target.closest('.dd'))$$('.dd.open').forEach(d=>{d.classList.remove('open');d.firstElementChild.setAttribute('aria-expanded','false')});
 if(e.target.closest('#mm a')){$('#mm').classList.remove('open');document.body.style.overflow=''}
 const l=e.target.closest('a[href^="#/"]');if(l&&l.getAttribute('href')===location.hash)scrollTo(0,0)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=$('#mm.open');if(m){m.classList.remove('open');document.body.style.overflow=''}$$('.dd.open').forEach(d=>d.classList.remove('open'))}});
L.render=render;render();
})();
