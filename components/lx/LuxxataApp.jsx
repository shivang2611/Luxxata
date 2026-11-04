'use client';
// The site controller: shared state and render values for every page, ported
// from the legacy Luxxata logic class. Pages read its values through useLx().
import { Component } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IMG, B, PL, COLLS, TRIP_IMGS, DESK, REV_PH, TRIP_REVS, REVIEWS, LENMAP, TRIPS, FRAMES, STEPS, fmt, chip, L, G } from '@/lib/data';
import { pathFor, routeFor } from '@/lib/routes';
import { newRef, sendLead } from '@/lib/leads';
import { PHONE_HINT, isIndianMobile } from '@/lib/phone';
import { LxContext } from './context';
import Shell from './Shell.generated';

class Luxxata extends Component {
  state = { nudge:false, stuck:false, hdrH:68, rvOff:0, tick:0, popOpen:false, popSent:false, popErr:false, pop:{name:'',email:'',phone:'',notes:''}, page:'home', trip:'best', coll:'ancient', frame:0, fStep:0, fAns:{}, faq:0, cfaq:0, days:{0:true}, extras:{}, catColl:'all', catLen:'all', narrow:false, scrolled:false, sent:false, err:false,
    enq:{ trip:'', coll:'', forWhom:'Myself', adults:2, children:0, when:'', length:'', budget:'', name:'', email:'', phone:'', notes:'', traveller:'' } };
  componentDidMount() {
    this.tk = setInterval(() => this.setState(x => ({ tick: x.tick + 1 })), 4000);
    try { if (!sessionStorage.getItem('lxPop')) this.pt = setTimeout(() => this.setState({ popOpen:true }), 5000); } catch (e) { this.pt = setTimeout(() => this.setState({ popOpen:true }), 5000); }
    this.t = setInterval(() => { if ((this.props.autoplay ?? true) && this.props.route.page === 'home') this.setState(s => ({ frame: (s.frame + 1) % 5 })); }, 5000);
    this.onR = () => this.setState({ narrow: window.innerWidth < 900 });
    this.onS = () => { const v = window.scrollY > 8, hh = window.innerWidth <= 760 ? 60 : 68, el = document.getElementById('trip-band'), st = !!el && el.getBoundingClientRect().bottom < hh + 8; if (v !== this.state.scrolled || st !== this.state.stuck || hh !== this.state.hdrH) this.setState({ scrolled: v, stuck: st, hdrH: hh }); };
    this.onR(); window.addEventListener('resize', this.onR); window.addEventListener('scroll', this.onS); document.addEventListener('scroll', this.onS, true); window.addEventListener('touchmove', this.onS, { passive: true }); this.nt = setTimeout(() => this.setState({ nudge: true }), 5000); this.sp = setInterval(this.onS, 250); this.onU = () => { this.userScrolled = true; }; window.addEventListener('wheel', this.onU, { passive: true }); window.addEventListener('touchstart', this.onU, { passive: true });
  }
  componentWillUnmount() { clearInterval(this.t); window.removeEventListener('resize', this.onR); window.removeEventListener('scroll', this.onS); document.removeEventListener('scroll', this.onS, true); window.removeEventListener('touchmove', this.onS); clearInterval(this.sp); window.removeEventListener('wheel', this.onU); window.removeEventListener('touchstart', this.onU); }
  resetScroll() {
    window.scrollTo(0, 0);
    const se = document.scrollingElement || document.documentElement; se.scrollTop = 0; document.body.scrollTop = 0;
    let el = document.querySelector('header');
    while (el && el !== document.body) { if (el.scrollTop > 0) el.scrollTop = 0; el = el.parentElement; }
  }
  // Was an in-memory page switch; now every page has its own URL.
  go(page, extra = {}) {
    this.setState({ stuck: false, ...extra });
    this.props.navigate(pathFor(page, { ...this.state, ...extra }));
    this.resetScroll();
  }

  openTrip = id => this.go('trip', { trip: id, days: { 0: true }, extras: {} });
  openColl = id => this.go('collection', { coll: id, cfaq: 0 });
  enquire(ctx) { this.go('enquiry', { sent:false, err:false, enq: { ...this.state.enq, ...ctx } }); }
  setEnq(k, v) { this.setState(s => ({ enq: { ...s.enq, [k]: v } })); }
  card(t) {
    const c = COLLS.find(c => c.id === t.colls[0]);
    return { imgs: TRIP_IMGS[t.id] || [t.img], name:t.name, dur:t.dur, route:t.legs.map(l => l[0].replace(' & Giza','')).join(' · '), best:t.best, why:t.why, ph:t.ph, img:t.img, tag:c.name,
      pace:['','Easy','Balanced','Full'][t.pace], paceDots:[1,2,3].map(n => ({ c: n <= t.pace ? B : L })),
      price: t.price ? 'From ' + fmt(t.price) : 'On proposal', basis: t.id === 'classroom' ? 'Per group' : 'Per person | twin sharing | excl. flights & GST',
      onOpen: () => this.openTrip(t.id) };
  }
  renderVals() {
    const s = { ...this.state, ...this.props.route }, P = s.page;
    const trip = TRIPS.find(t => t.id === s.trip), coll = COLLS.find(c => c.id === s.coll);
    const navMap = [['Find Your Egypt','collections',['collections','collection','finder']],['Our Trips','catalogue',['catalogue','trip']],['Plan Your Visit','home:faq',[]],['Why Amira','home:how',[]]];
    const nights = trip.legs.reduce((a, l) => a + l[1], 0);
    const days = []; trip.legs.forEach(([p, n]) => { const list = PL[p].days; for (let i = 0; i < n; i++) days.push({ place: p, d: list[Math.min(i, list.length - 1)] }); });
    if (trip.daysOv) days.forEach((x, i) => { if (trip.daysOv[i]) x.d = trip.daysOv[i]; });
    days.push({ place: 'Departure', d: trip.depOv || ['Fly home', 'Private transfer to the airport, timed to your flight.', 'Minimal', 'Morning'] });
    const allOpen = days.every((_, i) => s.days[i]);
    const hasCruise = trip.legs.some(l => l[0] === 'Nile cruise'), hasCairo = trip.legs.some(l => l[0] === 'Cairo & Giza');
    const CUSTOM = [['Private guiding throughout', 24000], ['Upgrade to a suite or Nile-view room', 20000], ['Add a night at the start', 15000], ['Add three nights on the Red Sea', 43000], ['Abu Simbel by air', 34000]];
    const extrasSum = CUSTOM.reduce((a, c, i) => a + (s.extras[i] ? c[1] : 0), 0);
    const tripCard = this.card(trip);
    const ST = { 'Cairo & Giza':[395,128,'r'], 'Nile cruise':[482,422,'l','Nile cruise · Luxor'], 'Luxor':[482,422,'r',null,1], 'Hurghada':[553,316,'r',null,1], 'Red Sea resort':[559,337,'r',null,1], 'Marine base':[600,428,'r','Red Sea marine base',1], 'Sharm el-Sheikh':[585,271,'l',null,1], 'White Desert':[198,310,'r',null,1,[255,241]], 'Siwa Oasis':[53,184,'r',null,0,[157,36]] };
    const CRU_PTS = [[482,422],[477,447],[497,469],[499,507],[498,530]].flatMap((a, i, A) => i ? [0.25, 0.5, 0.75, 1].map(f => [A[i - 1][0] + (a[0] - A[i - 1][0]) * f, A[i - 1][1] + (a[1] - A[i - 1][1]) * f]) : [a]);
    const ASW = [498, 530], CRU = 'M482 422 L477 447 L497 469 L499 507 L498 530';
    const routeSegs = [], routeEnds = []; let rCruise = false, rTransfer = false, prev = null;
    const PINS = trip.legs.map(([p], i) => { const s = ST[p] || [300, 250, 'r']; const left = s[2] === 'l';
      if (prev) { routeSegs.push({ d: 'M' + prev[0] + ' ' + prev[1] + (s[5] ? ' L' + s[5][0] + ' ' + s[5][1] : '') + ' L' + s[0] + ' ' + s[1], w: 2, dash: '7 7' }); rTransfer = true; }
      prev = [s[0], s[1]];
      if (p === 'Nile cruise') { routeSegs.push({ d: CRU, w: 5, dash: 'none' }); routeEnds.push({ x: ASW[0], y: ASW[1] }); rCruise = true; prev = ASW; }
      return { left: (s[0] / 7.6).toFixed(2) + '%', top: (s[1] / 7.1).toFixed(2) + '%', n: String(i + 1), place: s[3] || p, circ: 'flex', bg: s[4] ? '#FFFFFF' : 'transparent', pad: s[4] ? '0 1cqw' : '0', color: '#000000', side: left ? 'right:3.6cqw' : 'left:3.6cqw' }; });
    const aswan = trip.legs.some(([p]) => p === 'Nile cruise') ? [{ left: (ASW[0] / 7.6).toFixed(2) + '%', top: (ASW[1] / 7.1).toFixed(2) + '%', n: '', place: 'Aswan', circ: 'none', bg: 'transparent', pad: '0', color: '#363636', side: 'right:2.2cqw', small: true }] : [];
    const routeD = '';
    const U7 = id => '/images/u/' + id.replace(/^photo-/, '') + '.webp';
    const PLACE_PH = { 'Cairo & Giza':[U7('photo-1568322445389-f64ac2515020'),'The Pyramids and the Sphinx, Giza'], 'Nile cruise':[U7('photo-1584719763904-2799b453ba8d'),'Karnak Temple, Luxor'], 'Luxor':[U7('photo-1584719763904-2799b453ba8d'),'Karnak Temple, Luxor'], 'Aswan':[U7('photo-1778402153163-fc9a5fd0131a'),'A Nile cruise ship at Aswan'], 'Hurghada':[U7('photo-1738935457539-936fdb320c51'),'Hurghada, on the Red Sea'], 'White Desert':[U7('photo-1778402502974-62d3c32b7111'),'The White Desert'], 'Siwa Oasis':[U7('photo-1758720944577-559b852e8493'),'Siwa Oasis'] };
    const cairoOnly = trip.legs.length === 1 && trip.legs[0][0] === 'Cairo & Giza';
    const animView = cairoOnly ? 'cairo' : 'egypt';
    const CPH = { 'Arrive in Cairo': U7('photo-1595979904086-471704dc0e81'), 'The Pyramids of Giza': U7('photo-1568322445389-f64ac2515020'), 'The Grand Egyptian Museum': U7('photo-1777189978576-08b21689fcc9'), 'Old Cairo & Khan el-Khalili': U7('photo-1710211288826-b7df3ab71588'), 'Cairo at leisure': U7('photo-1636020895075-5e598638375e'), 'Fly home': U7('photo-1738580787552-5803e7be8e58') };
    const CAIRO_POS = [[400,215,'l','Zamalek'],[165,455,'r','Giza Pyramids'],[235,360,'r','Grand Museum'],[480,262,'r','Khan el-Khalili'],[610,95,'l','Cairo Airport']];
    let animStops = [], animDays = [];
    const dphoto = (d, i, stopP) => ({ u: d.d[4] || CPH[d.d[0]] || (trip.legs.length === 1 && TRIP_IMGS[trip.id] ? TRIP_IMGS[trip.id][i % TRIP_IMGS[trip.id].length].replace(/w=\d+/, 'w=700').replace('q=80', 'q=70') : (PLACE_PH[stopP] || PLACE_PH['Cairo & Giza'])[0]) });
    if (cairoOnly) {
      animStops = days.map((d, i) => { const c = CAIRO_POS[Math.min(i, 4)]; return { x: c[0], y: c[1], n: String(i + 1), label: c[3], left: c[2] === 'l', box: false }; });
      animDays = days.map((d, i) => ({ n: i + 1, title: d.d[0], when: d.d[3], text: d.d[1], walk: d.d[2], place: 'Cairo & Giza', stop: i, photo: dphoto(d, i, 'Cairo & Giza') }));
    } else {
      let nn = 0; const stopIdx = {};
      trip.legs.forEach(([p, nights]) => { const s = ST[p] || [300, 250, 'r']; nn++; stopIdx[p] = animStops.length;
        animStops.push({ x: s[0], y: s[1], via: s[5] || null, n: String(nn), label: s[3] || p, left: s[2] === 'l', box: !!s[4] });
        if (p === 'Nile cruise') animStops.push({ x: ASW[0], y: ASW[1], path: CRU_PTS, n: '', label: 'Aswan', left: false, box: false }); });
      let k = 0;
      trip.legs.forEach(([p, nights]) => { for (let i = 0; i < nights; i++, k++) { const d = days[k]; const st = p === 'Nile cruise' && i === nights - 1 ? stopIdx[p] + 1 : stopIdx[p]; animDays.push({ n: k + 1, title: d.d[0], when: d.d[3], text: d.d[1], walk: d.d[2], place: p, stop: st, photo: dphoto(d, k, p === 'Nile cruise' && st !== stopIdx[p] ? 'Aswan' : p) }); } });
      const dd = days[days.length - 1]; animDays.push({ n: days.length, title: dd.d[0], when: dd.d[3], text: dd.d[1], walk: dd.d[2], place: 'Departure', stop: animStops.length - 1, photo: { u: dd.d[4] || CPH['Fly home'] } });
    }
    const tags = Object.values(s.fAns).map(a => a.tag).filter(Boolean);
    const scored = TRIPS.map(t => ({ t, sc: tags.reduce((n, g) => n + (t.tags[g] || 0), 0) })).sort((a, b) => b.sc - a.sc).slice(0, 3);
    const cur = STEPS[Math.min(s.fStep, 4)];
    const catTrips = TRIPS.filter(t => (s.catColl === 'all' || t.colls.includes(s.catColl)) && (s.catLen === 'all' || t.len === s.catLen));
    const e = s.enq, eTrip = TRIPS.find(t => t.id === e.trip), eColl = COLLS.find(c => c.id === e.coll);
    const NEXT = [{ num:'01', text:'A planner reads your brief and replies personally within one working day.' }, { num:'02', text:'Your proposal: route, named stays, inclusions and an exact price.' }, { num:'03', text:'Refine anything, then confirm and pay under clear booking terms.' }];
    // Full name, email and phone are all required on the enquiry form.
    const invalid = { name: !e.name.trim(), email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim()), phone: !isIndianMobile(e.phone) };
    // Shown under a phone field while it holds something that isn't yet a valid mobile number.
    const phoneHint = (raw) => (String(raw).trim() && !isIndianMobile(raw) ? PHONE_HINT : '');
    const canSend = !invalid.name && !invalid.email && !invalid.phone;
    const field = (k, label, type, ph) => ({ label, type, ph, value: e[k], hint: k === 'phone' ? phoneHint(e.phone) : '', bd: s.err && invalid[k] ? '#8c1c13' : '#939393', onChange: ev => this.setEnq(k, ev.target.value) });
    const popOk = !!s.pop.name.trim() && isIndianMobile(s.pop.phone) && (!s.pop.email.trim() || /@/.test(s.pop.email));
    const finderSum = Object.values(s.fAns).map(a => a.label).join(' · ');
    return {
      isHome: P === 'home', isCollections: P === 'collections', isCollection: P === 'collection', isCatalogue: P === 'catalogue', isTrip: P === 'trip', isFinder: P === 'finder', isEnquiry: P === 'enquiry',
      bottomPad: '0px', headerShadow: s.scrolled ? '0 1px 2px rgba(0,0,0,0.10)' : 'none',
      showCoords: this.props.showCoordinates ?? true,
      similar: (() => { if (!trip) return []; const sim = TRIPS.filter(x => x.id !== trip.id).map(x => ({ x, sc: x.colls.filter(c => trip.colls.includes(c)).length * 3 + Object.keys(x.tags).reduce((n, k) => n + Math.min(x.tags[k], trip.tags[k] || 0), 0) })).sort((a, b) => b.sc - a.sc); const picks = [], used = new Set(); sim.forEach(o => { if (picks.length < 3 && !used.has(o.x.colls[0])) { picks.push(o.x); used.add(o.x.colls[0]); } }); sim.forEach(o => { if (picks.length < 3 && !picks.includes(o.x)) picks.push(o.x); }); return picks.map(x => this.card(x)); })(),
      tripRev: (() => { const L = (trip && TRIP_REVS[trip.id]) || TRIP_REVS.gem, k = (s.tick + s.rvOff) % L.length, x = L[k]; return { who: x[0], rating: x[1], quote: x[2], img: REV_PH[x[0]] || '', ph: REV_PH[x[0]] ? '' : 'Photo · ' + x[0] }; })(),
      tripRevDots: ((trip && TRIP_REVS[trip.id]) || TRIP_REVS.gem).map((x, k, A) => ({ label: 'Review ' + (k + 1), w: k === (s.tick + s.rvOff) % A.length ? 18 : 6, bg: k === (s.tick + s.rvOff) % A.length ? '#000000' : '#ABABAB', pick: () => this.setState(z => ({ rvOff: (k - z.tick % A.length + A.length) % A.length })) })),
      rev: REVIEWS[(s.tick + s.rvOff) % 4], revDots: REVIEWS.map((x, k) => ({ label: 'Review ' + (k + 1), w: k === (s.tick + s.rvOff) % 4 ? 18 : 6, bg: k === (s.tick + s.rvOff) % 4 ? '#000000' : '#ABABAB', pick: () => this.setState(z => ({ rvOff: (k - z.tick % 4 + 4) % 4 })) })),
      popOpen: s.popOpen, popForm: !s.popSent, popSent: s.popSent, popErr: s.popErr, pop: s.pop,
      popBlocked: !popOk, popBg: popOk ? '#000000' : '#ABABAB', popCur: popOk ? 'pointer' : 'not-allowed', waBottom: P === 'trip' && s.stuck ? '88px' : '24px',
      nameBd: '#939393', emailBd: s.pop.email.trim() && !/@/.test(s.pop.email) ? '#8c1c13' : '#939393', phoneBd: '#939393', popPhoneHint: phoneHint(s.pop.phone),
      onName: ev => { const v = ev.target.value; this.setState(x => ({ pop:{ ...x.pop, name:v } })); },
      onEmail: ev => { const v = ev.target.value; this.setState(x => ({ pop:{ ...x.pop, email:v } })); },
      onPhone: ev => { const v = ev.target.value; this.setState(x => ({ pop:{ ...x.pop, phone:v } })); },
      onNotes: ev => { const v = ev.target.value; this.setState(x => ({ pop:{ ...x.pop, notes:v } })); },
      closePop: () => { try { sessionStorage.setItem('lxPop','1'); } catch (e) {} this.setState({ popOpen:false }); },
      viewTrips: () => { this.setState({ popOpen: false }); this.go('catalogue'); },
      submitPop: ev => { ev && ev.preventDefault && ev.preventDefault(); const p = s.pop; if (!p.name.trim() || !isIndianMobile(p.phone) || (p.email.trim() && !/@/.test(p.email))) return; if (s.popSending) return; this.setState({ popSending: true, popErr: false });
        sendLead({ source: 'Popup', ref: newRef('POP'), name: p.name, email: p.email, phone: p.phone, notes: p.notes }).then(ok => {
          if (!ok) return this.setState({ popSending: false, popErr: true });
          try { sessionStorage.setItem('lxPop','1'); } catch (e) {}
          this.setState({ popSent: true, popSending: false });
        }); },
      nav: navMap.map(([label, to, act]) => ({ label, bd: act.includes(P) ? G : 'transparent', go: () => { const [pg, a] = to.split(':'); this.go(pg, {}, a); } })),
      goHome: () => this.go('home'), goCatalogue: () => this.go('catalogue'), goCollections: () => this.go('collections'), goFinder: () => this.go('finder'),
      goEnquiry: () => this.enquire({}), 
      frames: FRAMES.map((f, i) => ({ ...f, op: i === s.frame ? 1 : 0, bd: i === s.frame ? G : '#E5E5E5', fg: i === s.frame ? B : '#939393', go: () => this.setState({ frame: i }) })),
      frame: FRAMES[s.frame],
      reasons: ['ancient','allinc','nile','desert','sharm'].map((id, i) => { const c = COLLS.find(x => x.id === id); return { num: '0' + (i + 1), title: c.name, line: c.line, place: c.status === 'Live' ? 'Collection' : c.status, ph: c.ph, img:c.img, go: () => this.openColl(id) }; }),
      quotes: [{ text:'Giza, the museum and then three quiet nights on the Nile. Short, but nothing felt skipped.', who:'Couple, Feast of History', rating:'4.9', img:'/images/u/1707665477765-0966a70d50a0.webp' }, { text:'Two nights in each place meant no constant packing. The drive to Hurghada was well planned.', who:'Travelling with parents, Oriental Escape', rating:'5.0', img:'/images/u/1760722531515-a2b2d5013879.webp' }, { text:'Soft all inclusive meant no bills to think about. A relaxed finish to the trip.', who:'Couple, Red Sea Escape', rating:'4.8', img:'/images/u/1759335526333-12013fa53b0e.webp' }],
      tripCount: TRIPS.length,
      signature: ['best','feast','mystical','oriental','redsea'].map(id => this.card(TRIPS.find(t => t.id === id))),
      who: [['As a couple','Honeymoons, anniversaries, a well-earned break','couple'],['With or for parents','Comfortable pace, clear logistics','parents'],['With friends','Beaches, evenings, distinctive places','friends']]
        .map(([title, line, tag], i) => ({ num: '0' + (i + 1), title, line, go: () => this.go('finder', { fAns: { 0: { label: STEPS[0].opts.find(o => o[2] === tag)[0], tag } }, fStep: 1 }) })),
      beyond: [
        { tag:'Cairo · Giza', title:'The Grand Egyptian Museum', ratio:'3 / 4', offset:'0px', ph:'3:4 · GEM galleries', img:IMG('3:4 · GEM galleries'), body:'The world’s largest museum dedicated to a single civilisation. Each trip shows where it sits in your day and how you are guided.', note:'Admission and guiding stated per trip. Entry slot subject to confirmation. Independent planning, not an official partner.' },
        { tag:'Red Sea', title:'Reefs & the coast', ratio:'1 / 1', offset:'64px', ph:'1:1 · Reef', img:IMG('1:1 · Reef'), body:'Snorkelling and diving from a base chosen for your activity and experience.', note:'Operator and base matched to ability.' },
        { tag:'Sharm el-Sheikh', title:'Farsha & Sharm evenings', ratio:'3 / 4', offset:'0px', ph:'3:4 · Mountain lounge, dusk', img:IMG('3:4 · Mountain lounge, dusk'), body:'A featured evening at the mountain lounge, with alternatives held for every party.', note:'Adults only; couples and mixed groups. Larger groups subject to venue confirmation.' },
        { tag:'Western Desert', title:'Deserts & oases', ratio:'1 / 1', offset:'64px', ph:'1:1 · White Desert', img:IMG('1:1 · White Desert'), body:'White Desert, Siwa or Fayoum — planned as journeys in their own right.', note:'Journey times and comfort stated up front.' }
      ],
      teaser: STEPS[0].opts.map(([label, , tag]) => ({ label, pick: () => this.go('finder', { fAns: { 0: { label, tag } }, fStep: 1 }) })),
      how: [['Stays','Named hotels, resorts and ships — or clearly labelled examples.'],['Transport','Private vehicles, domestic flights and transfers, with rest built in.'],['Guides','Private or shared guiding, stated for every experience.'],['Support','One planner before you go, a local contact while you travel.']].map(([title, body], i) => ({ num: '0' + (i + 1), title, body })),
      story: [['Brief','Parents in their seventies, first visit','The pyramids and the museum. Concerned about walking and early starts.'],['Choices','Private guiding, fewer sites, more time','Lift access confirmed, late starts, rest between visits.'],['Itinerary','Cairo, the GEM, then a gentle Nile','Nine nights. No day longer than they were comfortable with.'],['Feedback','“They came home wanting to go back.”','Planned by their daughter, kept informed throughout.']].map(([stage, title, body]) => ({ stage, title, body })),
      faqs: [['How much does a trip cost?','Every trip shows an indicative price per person in rupees, the occupancy it assumes and whether flights from India are included. GST and TCS are shown separately. Your proposal confirms the exact figure.'],['How long should we go for?','Four or five nights suits Cairo and the museum. Seven to ten adds the Nile, the coast or the desert without rushing.'],['What is the food like?','Meals are planned around your preferences. Vegetarian, Jain and Indian meals are arranged on request, and on resort stays the meal plan is set out in writing.'],['Do Indian passport holders need a visa?','Yes. We guide you through the application and documents well before you fly.'],['How busy are the days?','Each trip carries a pace rating, and every day lists travel, walking and free time.'],['How does booking work?','Enquiry, then a tailored proposal. Once you are happy, availability is confirmed and payment taken under clear terms.']]
        .map(([q, a], i) => ({ q, a, open: s.faq === i, sign: s.faq === i ? '–' : '+', toggle: () => this.setState({ faq: s.faq === i ? -1 : i }) })),
      nextSteps: NEXT,
      collList: COLLS.map((c, i) => ({ num: String(i + 1).padStart(2, '0'), name: c.name, line: c.line, status: c.status, statusBd: c.status === 'Live' ? G : L, statusFg: c.status === 'Live' ? G : '#363636', go: () => this.openColl(c.id) })),
      coll: { ...coll, full: !!coll.full, notLive: coll.status !== 'Live' },
      collTrips: TRIPS.filter(t => t.colls.includes(coll.id)).map(t => this.card(t)),
      collFaqs: (coll.faqs || []).map(([q, a], i) => ({ q, a, open: s.cfaq === i, sign: s.cfaq === i ? '–' : '+', toggle: () => this.setState({ cfaq: s.cfaq === i ? -1 : i }) })),
      enquireColl: () => this.enquire({ coll: coll.id, trip: '' }),
      catColls: [['all','All']].concat(COLLS.map(c => [c.id, c.name])).map(([id, l]) => chip(l, s.catColl === id, () => this.setState({ catColl: id }))),
      catLens: [['all','Any length'],['short','Under a week'],['mid','About a week']].map(([id, l]) => chip(l, s.catLen === id, () => this.setState({ catLen: id }))),
      catTrips: catTrips.map(t => this.card(t)), catEmpty: catTrips.length === 0,
      catCount: 'Showing ' + catTrips.length + ' of ' + TRIPS.length + ' journeys',
      catReset: () => this.setState({ catColl: 'all', catLen: 'all' }),
      prevBanner: () => this.setState(x => ({ tick: x.tick + (tripCard.imgs.length - 1) })),
      nextBanner: () => this.setState(x => ({ tick: x.tick + 1 })),
      multiDisp: tripCard.imgs.length > 1 ? 'flex' : 'none',
      bannerSlides: tripCard.imgs.map((u, i) => ({ posY: /desert-4/.test(u) ? '82%' : '18%', u, op: i === s.tick % tripCard.imgs.length ? 1 : 0, w: i === s.tick % tripCard.imgs.length ? '28px' : '6px', po: i === s.tick % tripCard.imgs.length ? 1 : 0.6, ud: DESK[u] || u, bg: '#F3F3F3', pos: i === s.tick % tripCard.imgs.length ? 'relative' : 'absolute', z: i === s.tick % tripCard.imgs.length ? 1 : 0, dl: '0ms', tr: i === s.tick % tripCard.imgs.length ? 'opacity 600ms ease' : 'none' })),
      animStops, animDays, animView, routeSegs, routeEnds, routeCruise: rCruise, routeTransfer: rTransfer,
      trip: { ...tripCard, long: trip.why + ' ' + nights + ' nights across ' + trip.legs.length + (trip.legs.length > 1 ? ' bases.' : ' base.'), bestLower: trip.best.toLowerCase(), hasCruise,
        collsLabel: trip.colls.map(id => COLLS.find(c => c.id === id).name).join(' · '),
        priceShort: trip.price ? fmt(trip.price + extrasSum) : 'On proposal',
        facts: [{ k:'Duration', v:trip.dur }, { k:'Route', v:tripCard.route }, { k:'Pace', v:tripCard.pace }, { k:'From', v:tripCard.price.replace('From ','') + (trip.price ? ' pp' : '') }],
        pins: PINS.concat(aswan).map(p => p.small ? { ...p, n: '' } : p), legs: trip.legs.map(([p, n], i) => ({ n: String(i + 1), place: p, nights: n + (n > 1 ? ' nights' : ' night'), flex: String(n), dot: i === 0 ? 'rgba(255,255,255,0.75)' : '#FFFFFF' })),
        stays: trip.legs.map(([p]) => ({ place: p, stay: PL[p].stay, img: IMG(p) })),
        priceRows: [{ k:'Occupancy', v:'Two sharing' }, { k:'Group size', v:'Based on min. 4 paying passengers' }, { k:'Sample dates', v:'Oct 2026 – Apr 2027' }, { k:'Flights', v:'From India, quoted separately' }, { k:'Taxes', v:'GST & TCS as applicable' }, { k:'Domestic travel', v: hasCruise ? 'Included' : 'Private transfers included' }, { k:'Single supplement', v:'On request' }],
        inc: [{ h:'Included', c:B, items: trip.incl || ['Accommodation as listed, breakfast daily','Private arrival and departure transfers','Guiding as stated each day','Entrance fees for listed sites'].concat(hasCruise ? ['Full board on the cruise'] : []).concat(hasCairo ? ['GEM admission (entry slot subject to confirmation)'] : []) },
              { h:'Not included', c:'#8c1c13', items: trip.excl || ['Flights from India','Egypt visa fees (we assist with the application)','GST & TCS as applicable','Gratuities and personal spending','Travel insurance'] },
              { h:'Optional', c:G, items: trip.opt || ['Hot-air balloon over Luxor','Abu Simbel by road or air','Additional guided days','Private dinner on the Nile'] }] },
      days: days.map((x, i) => ({ n: 'Day ' + String(i + 1).padStart(2, '0'), place: x.place, title: x.d[0], body: x.d[1], walk: x.d[2], free: x.d[3], open: !!s.days[i], sign: s.days[i] ? '–' : '+', toggle: () => this.setState(st => ({ days: { ...st.days, [i]: !st.days[i] } })) })),
      allDaysLabel: allOpen ? 'Collapse all' : 'Expand all',
      toggleAllDays: () => this.setState({ days: allOpen ? {} : Object.fromEntries(days.map((_, i) => [i, true])) }),
      cruise: [{ k:'Ship option A', t:'Classic five-star ship', b:'Outside cabin with window, pool deck, Egyptologist on board.', p:'Included' }, { k:'Ship option B', t:'Boutique dahabiya', b:'Under sail, eight to twelve cabins, quieter moorings.', p:'From +₹70,000 pp' }],
      custom: CUSTOM.map(([t, p], i) => ({ t, p: '+' + fmt(p) + ' pp', bg: s.extras[i] ? B : '#FFFFFF', tick: s.extras[i] ? '✓' : '', toggle: () => this.setState(st => ({ extras: { ...st.extras, [i]: !st.extras[i] } })) })),
      hasExtras: extrasSum > 0, extrasTotal: '+' + fmt(extrasSum) + ' pp',
      booking: [['01','Enquire','Tell us what to change.'],['02','Proposal','Route, stays, exact price.'],['03','Confirm','Deposit secures the plan.'],['04','Travel','Balance due before departure.']].map(([n, t, b]) => ({ n, t, b })),
      enquireTrip: () => this.enquire({ trip: trip.id, coll: trip.colls[0], length: LENMAP[trip.len] }),
      ctaNudge: s.nudge ? 'on' : 'off', showSticky: false, bandVis: s.stuck ? 'hidden' : 'visible', stripTop: s.hdrH, stripY: s.stuck ? '0' : '100%', stripO: s.stuck ? 1 : 0, stripPE: s.stuck ? 'auto' : 'none',
      stepList: STEPS.map((st, i) => ({ num: '0' + (i + 1), label: st.label, answer: s.fAns[i] ? s.fAns[i].label : '', fg: i === s.fStep ? B : (s.fAns[i] ? B : '#939393'), go: () => this.setState({ fStep: i }) })),
      inQuestions: s.fStep < 5, showResults: s.fStep >= 5,
      stepNum: '0' + (Math.min(s.fStep, 4) + 1), progress: (Math.min(s.fStep, 5) * 20) + '%', question: cur.label,
      options: cur.opts.map(([label, sub, tag]) => { const on = s.fAns[s.fStep] && s.fAns[s.fStep].label === label; return { label, sub, bg: on ? B : '#FFFFFF', fg: on ? '#FFFFFF' : B, bd: on ? B : L, pick: () => this.setState(st => ({ fAns: { ...st.fAns, [st.fStep]: { label, tag } }, fStep: Math.min(st.fStep + 1, 5) })) }; }),
      fBack: () => this.setState(st => ({ fStep: Math.max(0, st.fStep - 1) })),
      fRestart: () => this.setState({ fStep: 0, fAns: {} }),
      results: s.fStep >= 5 ? scored.map((r, i) => ({ ...this.card(r.t), match: i === 0 ? 'Best match' : 'Also suits', matchC: i === 0 ? G : '#939393' })) : [],
      enquireFinder: () => this.enquire({ length: LENMAP[scored[0].t.len], trip: scored[0].t.id, coll: scored[0].t.colls[0], when: s.fAns[3] ? s.fAns[3].label : e.when, budget: s.fAns[4] ? s.fAns[4].label : e.budget, notes: e.notes || ('Trip finder: ' + finderSum) }),
      enq: e, notSent: !s.sent, sent: s.sent, showError: s.err,
      tripOptions: [{ v:'', l:'Not sure yet — help me choose' }].concat(TRIPS.map(t => ({ v: t.id, l: t.name }))).map(o => ({ ...o, sel: o.v === e.trip })),
      travellerOptions: [{ v:'', l:'Type of traveller' }].concat(['Couples','Solo travellers','Travelling with parents','Friends & groups'].map(l => ({ v:l, l }))).map(o => ({ ...o, sel: o.v === e.traveller })),
      setTraveller: ev => this.setEnq('traveller', ev.target.value),
      setTrip: ev => this.setEnq('trip', ev.target.value), setColl: ev => this.setEnq('coll', ev.target.value), setNotes: ev => this.setEnq('notes', ev.target.value),
      forWhom: ['Myself','With my parents','For someone else'].map(l => chip(l, e.forWhom === l, () => this.setEnq('forWhom', l))),
      counters: [['Adults','adults',1],['Children','children',0]].map(([label, k, min]) => ({ label, v: e[k], dec: () => this.setEnq(k, Math.max(min, e[k] - 1)), inc: () => this.setEnq(k, Math.min(20, e[k] + 1)) })),
      chipGroups: [['04 · When','when',['Oct – Dec','Jan – Mar','Apr – Jun','Jul – Sep','Not sure yet']],['05 · Length','length',['4–6 nights','7–8 nights']],['06 · Budget per person','budget',['Under ₹2 lakh','₹2 – 3.5 lakh','₹3.5 – 5 lakh','₹5 lakh +','Help me decide']]]
        .map(([label, k, list]) => ({ label, chips: list.map(l => chip(l, e[k] === l, () => this.setEnq(k, e[k] === l ? '' : l))) })),
      fields: [field('name','Full name','text','Your name'), field('email','Email','email','name@email.com'), field('phone','Mobile number','tel','10-digit mobile')],
      summary: [{ k:'Trip', v: eTrip ? eTrip.name : 'Help me choose' }, { k:'Traveller type', v: e.traveller || 'Not specified' }, { k:'Planning', v: e.forWhom }, { k:'Travellers', v: e.adults + ' adults' + (e.children ? ', ' + e.children + ' children' : '') }, { k:'When', v: e.when || '—' }, { k:'Budget', v: e.budget || '—' }],
      submit: async () => {
        if (invalid.name || invalid.email || invalid.phone) return this.setState({ err: true });
        if (s.sending) return;
        const ref = newRef(eTrip ? eTrip.id.slice(0, 3).toUpperCase() : 'GEN');
        this.setState({ sending: true, err: false, sendErr: false });
        const ok = await sendLead({ ...e, source: 'Enquiry form', ref, trip: eTrip ? eTrip.name : 'Help me choose', coll: eColl ? eColl.name : '' });
        if (!ok) return this.setState({ sending: false, sendErr: true });
        this.setState({ sent: true, sending: false, ref });
        window.scrollTo(0, 0);
      },
      sendLabel: s.sending ? 'Sending…' : 'Send my brief', canSend, sendBg: canSend ? '#000000' : '#ABABAB', sendCur: canSend ? 'pointer' : 'not-allowed', sendErr: s.sendErr,
      ref: s.ref, firstName: (e.name || '').split(' ')[0], sentTrip: eTrip ? eTrip.name : 'your Egypt journey',
      footer: [
        { h:'Find Your Egypt', links: COLLS.filter(c => c.status === 'Live').map(c => ({ label: c.name, go: () => this.openColl(c.id) })) },
        { h:'Our Trips', links: [{ label:'All journeys', go: () => this.go('catalogue') }, { label:'Trip finder', go: () => this.go('finder') }, { label:'Plan my trip', go: () => this.enquire({}) }] },
        { h:'Plan Your Visit', links: ['Costs','When to go','Entry requirements','Accessibility'].map(label => ({ label, go: () => this.go('home', {}, 'faq') })) },
        { h:'Work with us', links: [{ label:'Travel Partners', go: () => {} }, { label:'Contact', go: () => this.enquire({}) }] }
      ]
    };
  }
  render() {
    const v = this.renderVals();
    return (
      <LxContext.Provider value={v}>
        <Shell v={v}>{this.props.children}</Shell>
      </LxContext.Provider>
    );
  }
}

export default function LuxxataApp({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  return <Luxxata route={routeFor(pathname)} navigate={(href) => router.push(href)}>{children}</Luxxata>;
}
