'use client';
import { Component } from 'react';
import TripRouteAnimView from './TripRouteAnim.view';

export default class TripRouteAnim extends Component {
  state = { t: 0, narrow: false, manual: {}, all: false };
  componentDidMount() {
    this.t0 = performance.now();
    const tick = (n) => { this.setState({ t: n - this.t0 }); this.raf = requestAnimationFrame(tick); };
    this.raf = requestAnimationFrame(tick);
    this.onR = () => { const v = window.innerWidth < 700; if (v !== this.state.narrow) this.setState({ narrow: v }); };
    this.onR(); window.addEventListener('resize', this.onR);
  }
  componentWillUnmount() { cancelAnimationFrame(this.raf); window.removeEventListener('resize', this.onR); }
  renderVals() {
    const S = this.props.stops || [], DY = this.props.days || [], cairo = this.props.view === 'cairo';
    const W = cairo ? 700 : 760, H = cairo ? 640 : 710;
    const sig = (cairo ? 'c' : 'e') + S.map(s => s.label).join('|') + DY.map(d => d.title).join('|');
    if (sig !== this.sig) { this.sig = sig; this.t0 = performance.now(); }
    const START = cairo ? [770, -30] : [800, -30], HOLD = 2000, BOW = cairo ? 0.06 : 0.12;
    const quad = (a, c, b) => { const o = []; for (let i = 0; i <= 40; i++) { const u = i / 40, m = 1 - u; o.push([m * m * a[0] + 2 * m * u * c[0] + u * u * b[0], m * m * a[1] + 2 * m * u * c[1] + u * u * b[1]]); } return o; };
    const ctrl = (a, b, via, k) => { if (via) return via; const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1; return [(a[0] + b[0]) / 2 - dy / L * L * k, (a[1] + b[1]) / 2 + dx / L * L * k]; };
    const legs = []; let prev = START;
    S.forEach((s, i) => {
      const to = [s.x, s.y];
      if (s.path) legs.push({ pts: s.path, w: 5, fly: 2400 });
      else legs.push({ pts: quad(prev, ctrl(prev, to, s.via, i % 2 ? -BOW : BOW), to), w: 2.5, fly: i === 0 ? 2000 : 1800 });
      prev = to;
    });
    legs.push({ pts: quad(prev, ctrl(prev, START, null, 0.08), START), w: 2.5, fly: 1700 });
    const ease = (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    const Dp = (pts, u) => { let s = ''; const n = Math.max(1, Math.round((pts.length - 1) * u)); for (let i = 0; i <= n; i++) s += (i ? 'L' : 'M') + pts[i][0].toFixed(1) + ' ' + pts[i][1].toFixed(1); return s; };
    const at = (pts, u) => { const f = Math.min(pts.length - 1.001, Math.max(0, u * (pts.length - 1))), i = Math.floor(f), r = f - i, a = pts[i], b = pts[i + 1]; return { p: [a[0] + (b[0] - a[0]) * r, a[1] + (b[1] - a[1]) * r], h: [b[0] - a[0], b[1] - a[1]] }; };
    const sd = S.map((s, i) => DY.map((d, k) => k).filter(k => DY[k].stop === i));
    const ph = [{ k: 'move', s: 0, d: legs[0].fly }];
    S.forEach((s, i) => { if (sd[i].length) ph.push({ k: 'hold', i, d: HOLD * sd[i].length }); ph.push({ k: 'move', s: i + 1, d: legs[i + 1].fly }); });
    ph.push({ k: 'rest', d: 1000 });
    const total = ph.reduce((a, b) => a + b.d, 0);
    const lt = this.state.t % total;
    let acc = 0, cur = ph[0], lp = 0;
    for (const p of ph) { if (lt < acc + p.d) { cur = p; lp = lt - acc; break; } acc += p.d; }
    let pos = START, hd = [-1, 1], planeO = 1, popO = 0, popY = 10, ringR = 15, ringO = 0, active = -1, aStop = 0;
    const out = []; const L = (d, w, op) => out.push({ d, w, op });
    if (cur.k === 'move') {
      const u = ease(lp / cur.d), a = at(legs[cur.s].pts, u); pos = a.p; hd = a.h;
      for (let i = 0; i < cur.s; i++) L(Dp(legs[i].pts, 1), legs[i].w, i === cur.s - 1 ? 1 - 0.85 * Math.min(1, lp / (cur.d * 0.4)) : 0.15);
      L(Dp(legs[cur.s].pts, u), legs[cur.s].w, 1);
      planeO = cur.s === 0 ? Math.min(1, lp / 350) : cur.s === S.length ? Math.max(0, 1 - Math.max(0, u - 0.6) / 0.4) : 1;
      aStop = Math.min(S.length - 1, Math.max(0, cur.s - 1));
    } else if (cur.k === 'hold') {
      pos = [S[cur.i].x, S[cur.i].y]; hd = at(legs[cur.i].pts, 0.995).h; aStop = cur.i;
      for (let i = 0; i <= cur.i; i++) L(Dp(legs[i].pts, 1), legs[i].w, i === cur.i ? 1 : 0.15);
      active = sd[cur.i][Math.min(sd[cur.i].length - 1, Math.floor(lp / HOLD))];
      popO = Math.min(1, lp / 300, (cur.d - lp) / 300); popY = 10 * (1 - Math.min(1, lp / 300));
      const r = (lp % 1000) / 1000; ringR = 15 + r * 24; ringO = (1 - r) * 0.55;
    } else { planeO = 0; aStop = S.length - 1; for (let i = 0; i < legs.length; i++) L(Dp(legs[i].pts, 1), legs[i].w, 0.15); }
    const ang = Math.atan2(hd[1], hd[0]) * 180 / Math.PI;
    const as = S[aStop] || { x: 0, y: 0 }, ad = active >= 0 ? DY[active] : (DY[sd[aStop] && sd[aStop][0]] || { photo: {}, title: '', when: '', text: '' });
    const pins = S.map(s => ({ left: (s.x / W * 100).toFixed(2) + '%', top: (s.y / H * 100).toFixed(2) + '%', n: s.n || '', label: s.label, side: s.n ? (s.left ? 'right:3.6cqw' : 'left:3.6cqw') : 'right:2.6cqw', bg: s.box ? '#FFFFFF' : 'transparent', pad: s.box ? '0 1cqw' : '0', bgc: s.n ? '#000000' : '#FFFFFF', fg: s.n ? '#FFFFFF' : '#000000' }));
    const sdays = (sd[aStop] || []).map(k => DY[k]);
    return {
      vb: '0 0 ' + W + ' ' + H, vw: W, vh: H, cDisp: cairo ? 'inline' : 'none', eDisp: cairo ? 'none' : 'inline',
      replay: () => { this.t0 = performance.now(); },
      legs: out, pins, planeO, popO, popY, ringR, ringO, ringX: active >= 0 ? S[aStop].x : -100, ringY: active >= 0 ? S[aStop].y : -100,
      planeT: 'translate(' + pos[0].toFixed(1) + ' ' + pos[1].toFixed(1) + ') rotate(' + ang.toFixed(1) + ') scale(1.3)',
      popTop: Math.min(76, Math.max(24, as.y / H * 100)).toFixed(1),
      popSide: as.x > W * 0.45 ? 'right:max(0px,min(' + (100 - (as.x - 40) / W * 100).toFixed(1) + '%,calc(100% - clamp(150px,38%,260px))))' : 'left:max(0px,min(' + ((as.x + 40) / W * 100).toFixed(1) + '%,calc(100% - clamp(150px,38%,260px))))',
      photos: sdays.map(d => ({ u: d.photo && d.photo.u, cap: d.title, op: d === ad ? 1 : 0 })),
      popKicker: ad.n ? 'Day ' + ad.n + ' · ' + ad.when : '', popTitle: ad.title, popText: ad.text, textDisp: this.state.narrow ? 'none' : 'block',
      toggleAll: () => this.setState(x => ({ all: !x.all, manual: {} })), allLabel: this.state.all ? 'Collapse all' : 'Expand all',
      dayRows: DY.map((d, i) => { const open = this.state.all || this.state.manual[i] || i === active; return { n: d.n, title: d.title, place: d.place, body: d.text, walk: d.walk, free: d.when, w: i === active ? 500 : 400, bg: 'transparent', rows: open ? '1fr' : '0fr', sign: open ? '–' : '+', toggle: () => this.setState(x => ({ manual: { ...x.manual, [i]: !(x.manual[i] || x.all) }, all: false })) }; })
    };
  }
  render() {
    return <TripRouteAnimView v={{ ...this.props, ...this.renderVals() }} />;
  }
}
