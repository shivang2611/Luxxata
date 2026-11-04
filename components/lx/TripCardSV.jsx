'use client';
import { Component } from 'react';
import TripCardSVView from './TripCardSV.view';

export default class TripCardSV extends Component {
  state = { i: 0, nudge: false };
  componentDidMount() { this.nt = setTimeout(() => this.setState({ nudge: true }), 5000); this.to = setTimeout(() => { this.iv = setInterval(() => this.setState(x => ({ i: x.i + 1 })), 4000); }, Math.random() * 3000); }
  componentWillUnmount() { clearTimeout(this.nt); clearTimeout(this.to); clearInterval(this.iv); }
  renderVals() { const n0 = ((this.props.trip && this.props.trip.imgs) || [1]).length; const prev = ev => { ev.stopPropagation(); ev.preventDefault(); this.setState(x => ({ i: x.i + n0 - 1 })); }; const next = ev => { ev.stopPropagation(); ev.preventDefault(); this.setState(x => ({ i: x.i + 1 })); }; const a = (this.props.trip && this.props.trip.imgs) || [this.props.trip && this.props.trip.img]; return { nudge: this.state.nudge ? 'on' : 'off', multiDisp: a.length > 1 ? 'flex' : 'none', prev, next, slides: a.map((u, k) => ({ u, op: k === this.state.i % a.length ? 1 : 0, w: k === this.state.i % a.length ? '28px' : '6px', po: k === this.state.i % a.length ? 1 : 0.6, z: k === this.state.i % a.length ? 1 : 0, dl: k === this.state.i % a.length ? '0ms' : '900ms' })) }; }
  render() {
    return <TripCardSVView v={{ ...this.props, ...this.renderVals() }} />;
  }
}
