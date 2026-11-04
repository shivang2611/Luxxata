'use client';
// Generated from the legacy template's isHome block.
import { Fragment } from 'react';
import { t, at } from '../runtime';
import Img from '../Img';
import TripCardSV from '../TripCardSV';
import { useLx } from '../context';

export default function HomeView() {
  const v = useLx();
  return (
    <>
      {" "}
      <section data-screen-label="Home · 01 Hero">
        {" "}
        <div style={{ position: "relative", minHeight: "min(88vh,860px)", background: "#363636", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
          {(v.frames || []).map((f, $index) => (
            <Fragment key={$index}>
              {" "}
              <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "flex-start", justifyContent: "flex-end", padding: "32px clamp(20px,6vw,96px)", opacity: `${t(f?.op)}`, transition: "opacity 420ms cubic-bezier(0.32,0.72,0.32,1)" }}>
                <Img src={at(f?.img)} alt={at(f?.ph)} loading={$index === 0 ? 'eager' : 'lazy'} fetchPriority={$index === 0 ? 'high' : undefined} sizes="100vw" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              {" "}
            </Fragment>
          ))}
          <div style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.25)", pointerEvents: "none" }} />
          <div style={{ position: "relative", width: "100%", padding: "clamp(48px,8vw,100.8px) clamp(20px,6vw,96px)", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-end", color: "#FFFFFF" }}>
            <div style={{ flex: "1 1 520px", display: "flex", flexDirection: "column", gap: "25.2px", maxWidth: "820px" }}>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
                History · Coast · Nile · Desert
              </span>
              <h1 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "clamp(44px,7vw,84px)", lineHeight: "1", letterSpacing: "-0.01em" }}>
                {"Find your kind of "}
                <span style={{ fontFamily: "var(--font-merriweather),Georgia,serif", fontStyle: "italic", fontWeight: "400" }}>
                  Egypt
                </span>
              </h1>
              <p style={{ margin: "0", fontSize: "15.4px", lineHeight: "1.75", maxWidth: "480px", textWrap: "pretty" }}>
                The pyramids at first light. A slow sail between Luxor and Aswan. A Red Sea reef, a desert night. Each journey is planned around the reason you are going.
              </p>
              <div style={{ display: "flex", gap: "16px 32px", flexWrap: "wrap", alignItems: "center" }}>
                <button onClick={v.goFinder} style={{ display: "inline-flex", alignItems: "center", padding: "16.8px 33.6px", background: "#FFFFFF", color: "#000000", border: "1px solid #FFFFFF", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp2 lxp1">
                  Find My Egypt Trip
                </button>
                <button onClick={v.goCatalogue} style={{ background: "none", border: "none", borderBottom: "1px solid #FFFFFF", padding: "0 0 4px", color: "#FFFFFF", whiteSpace: "nowrap", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp3">
                  Explore Journeys
                </button>
              </div>
            </div>
            <div data-hcap="" style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end", textAlign: "right" }}>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
                {t(v.frame?.num)}{" / 05"}
              </span>
              <span style={{ fontFamily: "var(--font-merriweather),Georgia,serif", fontStyle: "italic", fontSize: "22px", lineHeight: "1.2" }}>
                {t(v.frame?.title)}
              </span>
              {v.showCoords ? (
                <>
                  {" "}
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
                    {t(v.frame?.coord)}
                  </span>
                  {" "}
                </>
              ) : null}
            </div>
          </div>
        </div>
        {" "}
        <div data-hthumbs="" style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "8px", padding: "0 clamp(20px,6vw,96px)", background: "#FFFFFF" }}>
          {(v.frames || []).map((f, $index) => (
            <Fragment key={$index}>
              {" "}
              <button onClick={f?.go} style={{ background: "none", border: "none", borderTop: `1px solid ${t(f?.bd)}`, padding: "16px 0 0", textAlign: "left", display: "flex", flexDirection: "column", gap: "4px", transition: "border-color 420ms" }}>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#939393" }}>
                  {t(f?.num)}
                </span>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "13px", color: `${t(f?.fg)}` }}>
                  {t(f?.short)}
                </span>
              </button>
              {" "}
            </Fragment>
          ))}
        </div>
        {" "}
      </section>
      {" "}
      <section data-screen-label="Home · 02 Journeys" style={{ padding: "128px clamp(20px,6vw,96px) 0" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            02
          </span>
          <span style={{ flex: "1", borderTop: "1px solid #000000" }} />
          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Signature journeys
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
          <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "clamp(28px,6vw,39.8px)", lineHeight: "1.1", letterSpacing: "-0.01em", maxWidth: "620px" }}>
            Five journeys, five different reasons to go.
          </h2>
          <button onClick={v.goCatalogue} style={{ background: "none", border: "none", borderBottom: "1px solid #000000", padding: "0 0 2px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            {"Compare all "}{t(v.tripCount)}{" trips"}
          </button>
        </div>
        {" "}
        <div style={{ display: "flex", gap: "32px", overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", alignItems: "stretch", margin: "0 calc(-1 * clamp(20px,6vw,96px))", padding: "0 clamp(20px,6vw,96px) 24px", scrollPadding: "0 clamp(20px,6vw,96px)" }}>
          {(v.signature || []).map((t, $index) => (
            <Fragment key={$index}>
              {" "}
              <div style={{ flex: "0 0 clamp(250px,calc((100% - 96px) / 4),380px)", minWidth: "0", scrollSnapAlign: "start", display: "flex" }}>
                <TripCardSV key={t?.name} trip={t} onOpen={t?.onOpen} />
              </div>
              {" "}
            </Fragment>
          ))}
        </div>
        {" "}
      </section>
      {" "}
      <section data-screen-label="Home · 03 Curate" style={{ margin: "128px clamp(20px,6vw,96px) 0", background: "#F8F8F8", borderRadius: "8.4px", padding: "clamp(32px,5vw,64px)" }}>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,64px)", alignItems: "flex-end" }}>
          <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
              03 · Curate your own
            </span>
            <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "clamp(28px,6vw,39.8px)", lineHeight: "1.1", letterSpacing: "-0.01em" }}>
              Five questions. A shortlist before any contact details.
            </h2>
          </div>
          <div style={{ flex: "1.2 1 420px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
              01 / 05 · Who is travelling?
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {(v.teaser || []).map((o, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <button onClick={o?.pick} style={{ height: "48px", padding: "0 20px", background: "#FFFFFF", border: "1px solid #ABABAB", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "13px", color: "#000000" }} className="lxp4">
                    {t(o?.label)}
                  </button>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        {" "}
      </section>
      {" "}
      <section data-screen-label="Home · 04 Reviews" style={{ marginTop: "128px", borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5" }}>
        {" "}
        <div data-rev="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", padding: "0 clamp(20px,6vw,96px)" }}>
          <div style={{ padding: "40px 32px 40px 0", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Verified reviews
            </span>
            <span style={{ fontSize: "39.8px", lineHeight: "1.1" }}>
              {"4.9 "}
              <span style={{ fontSize: "18px", color: "#363636" }}>
                / 5
              </span>
            </span>
            <span style={{ fontSize: "20px", letterSpacing: "3px", color: "#F5B50A" }}>
              ★★★★★
            </span>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "13px", color: "#363636" }}>
              132 reviews
            </span>
          </div>
          {(v.quotes || []).map((q, $index) => (
            <Fragment key={$index}>
              {" "}
              <figure style={{ margin: "0", padding: "40px 32px", borderLeft: "1px solid #E5E5E5", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <Img src={at(q?.img)} alt={at(q?.who)} loading="lazy" style={{ width: "64px", height: "64px", borderRadius: "5px", objectFit: "cover", display: "block", flex: "none", background: "#F3F3F3" }} />
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px", fontFamily: "var(--font-outfit),sans-serif" }}>
                    <span style={{ fontSize: "15px", letterSpacing: "2px", color: "#F5B50A" }}>
                      ★★★★★
                    </span>
                    <span style={{ fontWeight: "500", fontSize: "13px" }}>
                      {t(q?.rating)}
                    </span>
                  </span>
                </div>
                <blockquote style={{ margin: "0", fontSize: "18px", lineHeight: "1.45", fontStyle: "italic", textWrap: "pretty" }}>
                  “{t(q?.text)}”
                </blockquote>
                <figcaption style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                  {t(q?.who)}
                </figcaption>
              </figure>
              {" "}
            </Fragment>
          ))}
        </div>
        {" "}
      </section>
      {" "}
    </>
  );
}
