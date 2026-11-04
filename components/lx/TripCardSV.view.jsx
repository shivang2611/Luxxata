// Generated from legacy/js/components.js (TripCardSV template).
import { Fragment } from 'react';
import { t, at } from './runtime';
import Img from './Img';

export default function TripCardSVView({ v }) {
  return (
    <>
    <button onClick={v.onOpen} style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", height: "100%", textAlign: "left", background: "none", border: "none", padding: "0", cursor: "pointer", color: "#000000", fontFamily: "var(--font-merriweather),Georgia,serif" }}>
      <div style={{ position: "relative", isolation: "isolate", width: "100%", aspectRatio: "4 / 5", background: "#F3F3F3", borderRadius: "8.4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {(v.slides || []).map((b, $index) => (
          <Fragment key={$index}>
            {b?.u ? (
              <>
                <Img src={at(b?.u)} alt={at(v.trip?.name)} loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: `${t(b?.op)}`, zIndex: `${t(b?.z)}`, transition: `opacity 900ms ease ${t(b?.dl)}` }} />
              </>
            ) : null}
          </Fragment>
        ))}
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "18px", zIndex: "5", display: `${t(v.multiDisp)}`, justifyContent: "center", alignItems: "center", gap: "6px", pointerEvents: "none" }}>
          {(v.slides || []).map((p, $index) => (
            <Fragment key={$index}>
              <span style={{ height: "6px", width: `${t(p?.w)}`, borderRadius: "6px", background: "#FFFFFF", opacity: `${t(p?.po)}`, transition: "width 400ms ease,opacity 400ms ease" }} />
            </Fragment>
          ))}
        </div>
        <span role="button" aria-label="Previous photo" data-z="" onClick={v.prev} style={{ position: "absolute", zIndex: "5", left: "12px", top: "50%", marginTop: "-18px", width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.88)", display: `${t(v.multiDisp)}`, alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.18)" }} className="lxp7">
          <svg width="14.4" height="14.4" viewBox="0 0 16 16" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10.5 2.5 5 8l5.500 5.500" />
          </svg>
        </span>
        <span role="button" aria-label="Next photo" onClick={v.next} style={{ position: "absolute", zIndex: "5", right: "12px", top: "50%", marginTop: "-18px", width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.88)", display: `${t(v.multiDisp)}`, alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.18)" }} className="lxp7">
          <svg width="14.4" height="14.4" viewBox="0 0 16 16" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5.5 2.5 11 8l-5.500 5.500" />
          </svg>
        </span>
        <span style={{ position: "absolute", top: "12px", left: "12px", zIndex: "10", pointerEvents: "none", background: "#FFFFFF", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", padding: "5px 8px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
          {t(v.trip?.tag)}
        </span>
        <span style={{ position: "absolute", bottom: "12px", right: "12px", zIndex: "10", pointerEvents: "none", background: "#000000", color: "#FFFFFF", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", padding: "5px 8px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
          {t(v.trip?.dur)}
        </span>
      </div>
      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
        {t(v.trip?.route)}
      </span>
      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "22px", lineHeight: "1.2" }}>
        {t(v.trip?.name)}
      </span>
      <span style={{ fontSize: "12px", lineHeight: "1.45", color: "#363636", textWrap: "pretty" }}>
        {t(v.trip?.why)}
      </span>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "6px 16px", borderTop: "1px solid #E5E5E5", paddingTop: "12px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px" }}>
        <span style={{ color: "#939393" }}>
          Best for
        </span>
        <span>
          {t(v.trip?.best)}
        </span>
        <span style={{ color: "#939393" }}>
          Pace
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          {(v.trip?.paceDots || []).map((p, $index) => (
            <Fragment key={$index}>
              <span style={{ width: "12px", height: "3px", background: `${t(p?.c)}` }} />
            </Fragment>
          ))}
          <span style={{ marginLeft: "6px" }}>
            {t(v.trip?.pace)}
          </span>
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid #E5E5E5", paddingTop: "12px", marginTop: "auto" }}>
        <span style={{ fontSize: "18px" }}>
          {t(v.trip?.price)}
        </span>
        <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", lineHeight: "1.5", color: "#363636", textWrap: "pretty" }}>
          {t(v.trip?.basis)}
          <br />
          Based on min. 4 paying passengers
        </span>
      </div>
      <span data-cta2={at(v.nudge)} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "44px", marginTop: "4px", border: "1px solid #000000", borderRadius: "52.5px", color: "#000000", background: "#FFFFFF", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp9">
        <span data-txt2="">
          View itinerary
        </span>
        <span data-arrow="" aria-hidden="true">
          →
        </span>
      </span>
    </button>
    </>
  );
}
