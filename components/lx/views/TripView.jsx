'use client';
// Generated from the legacy template's isTrip block.
import { Fragment } from 'react';
import { t, at } from '../runtime';
import Img from '../Img';
import TripCardSV from '../TripCardSV';
import TripRouteAnim from '../TripRouteAnim';
import { useLx } from '../context';

export default function TripView() {
  const v = useLx();
  return (
    <>
      {" "}
      <section data-screen-label="Trip · Hero" style={{ padding: "24px clamp(20px,6vw,96px) 0" }}>
        {" "}
        <div style={{ display: "flex", gap: "8px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", color: "#363636", marginBottom: "32px" }}>
          <button onClick={v.goCatalogue} style={{ background: "none", border: "none", padding: "0", font: "inherit", color: "#363636" }}>
            Our Trips
          </button>
          <span>
            /
          </span>
          <span style={{ color: "#000000" }}>
            {t(v.trip?.name)}
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px,4vw,64px)", alignItems: "flex-end", marginBottom: "32px" }}>
          <div style={{ flex: "1 1 460px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
              {t(v.trip?.collsLabel)}
            </span>
            <h1 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "clamp(39.8px,5.4vw,72px)", lineHeight: "1.02", letterSpacing: "-0.01em" }}>
              {t(v.trip?.name)}
            </h1>
            <p style={{ margin: "0", fontSize: "15.4px", lineHeight: "1.75", color: "#111111", maxWidth: "560px" }}>
              {t(v.trip?.long)}
            </p>
          </div>
          <div style={{ flex: "1 1 300px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", borderTop: "1px solid #000000" }}>
            {(v.trip?.facts || []).map((f, $index) => (
              <Fragment key={$index}>
                {" "}
                <div style={{ padding: "12px 12px 12px 0", borderBottom: "1px solid #E5E5E5", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#939393" }}>
                    {t(f?.k)}
                  </span>
                  <span style={{ fontSize: "14px" }}>
                    {t(f?.v)}
                  </span>
                </div>
                {" "}
              </Fragment>
            ))}
          </div>
        </div>
        {" "}
        <div data-bnr="" style={{ position: "relative", overflow: "hidden", width: "100%", aspectRatio: "4 / 3", maxHeight: "84vh", background: "#F3F3F3", borderRadius: "8.4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {(v.bannerSlides || []).map((b, $index) => (
            <Fragment key={$index}>
              <div style={{ position: "absolute", inset: "0", background: `${t(b?.bg)}`, opacity: `${t(b?.op)}`, zIndex: `${t(b?.z)}`, transition: "opacity 700ms ease" }}>
                {b?.u ? (
                  <>
                    <Img data-mob="" src={at(b?.u)} alt={at(v.trip?.name)} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: `center ${t(b?.posY)}` }} />
                  </>
                ) : null}
                {b?.ud ? (
                  <>
                    <Img data-dsk="" src={at(b?.ud)} alt={at(v.trip?.name)} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: `center ${t(b?.posY)}` }} />
                  </>
                ) : null}
              </div>
            </Fragment>
          ))}
          <div style={{ position: "absolute", left: "0", right: "0", bottom: "14px", zIndex: "5", display: `${t(v.multiDisp)}`, justifyContent: "center", alignItems: "center", gap: "6px", pointerEvents: "none" }}>
            {(v.bannerSlides || []).map((p, $index) => (
              <Fragment key={$index}>
                <span style={{ height: "6px", width: `${t(p?.w)}`, borderRadius: "6px", background: "#FFFFFF", opacity: `${t(p?.po)}`, transition: "width 400ms ease,opacity 400ms ease" }} />
              </Fragment>
            ))}
          </div>
          <span role="button" aria-label="Previous photo" data-z="" onClick={v.prevBanner} style={{ position: "absolute", zIndex: "5", left: "12px", top: "50%", marginTop: "-22px", width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.88)", display: `${t(v.multiDisp)}`, alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.18)" }} className="lxp7">
            <svg width="17.6" height="17.6" viewBox="0 0 16 16" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10.5 2.5 5 8l5.500 5.500" />
            </svg>
          </span>
          <span role="button" aria-label="Next photo" onClick={v.nextBanner} style={{ position: "absolute", zIndex: "5", right: "12px", top: "50%", marginTop: "-22px", width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.88)", display: `${t(v.multiDisp)}`, alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.18)" }} className="lxp7">
            <svg width="17.6" height="17.6" viewBox="0 0 16 16" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5.5 2.5 11 8l-5.500 5.500" />
            </svg>
          </span>
        </div>
        {" "}
      </section>
      {" "}
      <div id="trip-band" data-screen-label="Trip · Customise bar" style={{ padding: "24px clamp(20px,6vw,96px) 0" }}>
        {" "}
        <div style={{ visibility: `${t(v.bandVis)}`, background: "#F8F8F8", borderRadius: "8.4px", padding: "clamp(16px,3vw,28px)", display: "flex", flexWrap: "wrap", gap: "20px 40px", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
              Indicative price
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 10px" }}>
              <span style={{ fontSize: "clamp(30px,8vw,39.8px)", lineHeight: "1" }}>
                {t(v.trip?.priceShort)}
              </span>
              <span style={{ fontSize: "13px", lineHeight: "1.4", color: "#363636", flex: "1 1 180px", minWidth: "0", textWrap: "pretty" }}>
                {"per person | twin sharing | excl. flights & GST"}
              </span>
            </div>
          </div>
          <div style={{ flex: "1 1 300px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,130px),1fr))", gap: "4px 24px" }}>
            {(v.trip?.priceRows || []).map((r, $index) => (
              <Fragment key={$index}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "6px 0", fontFamily: "var(--font-outfit),sans-serif", fontSize: "12px" }}>
                  <span style={{ fontWeight: "300", color: "#363636" }}>
                    {t(r?.k)}
                  </span>
                  <span style={{ fontWeight: "600" }}>
                    {t(r?.v)}
                  </span>
                </div>
                {" "}
              </Fragment>
            ))}
          </div>
          <div style={{ flex: "0 1 280px", minWidth: "220px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {v.hasExtras ? (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-outfit),sans-serif", fontSize: "12px" }}>
                  <span style={{ fontWeight: "300" }}>
                    Selected additions
                  </span>
                  <span style={{ fontWeight: "600" }}>
                    {t(v.extrasTotal)}
                  </span>
                </div>
              </>
            ) : null}
            <button data-cta={at(v.ctaNudge)} onClick={v.enquireTrip} style={{ height: "48px", width: "100%", background: "#000000", color: "#FFFFFF", border: "none", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp6">
              <span data-txt="">
                Customise This Trip
              </span>
              <span data-arrow="" aria-hidden="true">
                →
              </span>
            </button>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "11px", lineHeight: "1.5", color: "#363636" }}>
              Prices vary by date, room and availability. Your proposal confirms the exact cost before payment.
            </span>
          </div>
        </div>
        {" "}
      </div>
      {" "}
      <div data-screen-label="Trip · Customise strip" style={{ position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "40", background: "#FFFFFF", borderTop: "1px solid #E5E5E5", boxShadow: "0 -1px 2px rgba(0,0,0,0.10)", padding: "8px clamp(16px,6vw,96px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", transform: `translateY(${t(v.stripY)})`, opacity: `${t(v.stripO)}`, pointerEvents: `${t(v.stripPE)}`, transition: "transform 300ms ease,opacity 300ms ease" }}>
        <span style={{ display: "flex", alignItems: "baseline", gap: "10px", minWidth: "0", flexWrap: "wrap" }}>
          <span style={{ fontSize: "18px" }}>
            {t(v.trip?.priceShort)}
          </span>
          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#939393" }}>
            {"pp · "}{t(v.trip?.dur)}
          </span>
        </span>
        <button data-cta={at(v.ctaNudge)} onClick={v.enquireTrip} style={{ height: "44px", padding: "0 18px", background: "#000000", color: "#FFFFFF", border: "none", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp6">
          <span data-txt="">
            Customise This Trip
          </span>
          <span data-arrow="" aria-hidden="true">
            →
          </span>
        </button>
      </div>
      {" "}
      <section style={{ padding: "48px clamp(20px,6vw,96px) 0", display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,64px)", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "64px" }}>
          <div data-screen-label="Trip · Best for" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Is this the right holiday?
            </span>
            <p style={{ margin: "0", fontSize: "22.7px", lineHeight: "1.35", textWrap: "pretty" }}>
              {"Best for "}{t(v.trip?.bestLower)}{". "}{t(v.trip?.why)}
            </p>
          </div>
          <div data-screen-label="Trip · Route" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Where you go
            </span>
            <div style={{ display: "flex", width: "100%" }}>
              {(v.trip?.legs || []).map((l, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={{ flex: `${t(l?.flex)}`, minWidth: "0", display: "flex", flexDirection: "column", gap: "10px", paddingRight: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ width: "11px", height: "11px", borderRadius: "50%", border: "1px solid #000000", background: `${t(l?.dot)}`, flex: "none" }} />
                      <span style={{ flex: "1", borderTop: "1px solid #000000" }} />
                    </div>
                    <span style={{ fontSize: "14px", lineHeight: "1.3" }}>
                      {t(l?.place)}
                    </span>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
                      {t(l?.nights)}
                    </span>
                  </div>
                  {" "}
                </Fragment>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: "none" }}>
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#000000" }} />
                <span style={{ fontSize: "14px" }}>
                  Home
                </span>
              </div>
            </div>
            <TripRouteAnim stops={v.animStops} days={v.animDays} view={v.animView} />
          </div>
          <div data-screen-label="Trip · Stays" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Where you stay
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "24px" }}>
              {(v.trip?.stays || []).map((s, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ position: "relative", overflow: "hidden", width: "100%", aspectRatio: "4 / 3", background: "#F3F3F3", borderRadius: "8.4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Img src={at(s?.img)} alt={at(s?.place)} loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
                      {"Example · "}{t(s?.place)}
                    </span>
                    <span style={{ fontSize: "14px", lineHeight: "1.45" }}>
                      {t(s?.stay)}
                    </span>
                  </div>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
          {v.trip?.hasCruise ? (
            <>
              {" "}
              <div data-screen-label="Trip · Cruise" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  The cruise
                </span>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "16px" }}>
                  {(v.cruise || []).map((c, $index) => (
                    <Fragment key={$index}>
                      {" "}
                      <div style={{ border: "1px solid #ABABAB", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                          {t(c?.k)}
                        </span>
                        <span style={{ fontSize: "18px" }}>
                          {t(c?.t)}
                        </span>
                        <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#363636" }}>
                          {t(c?.b)}
                        </span>
                        <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12px", marginTop: "4px" }}>
                          {t(c?.p)}
                        </span>
                      </div>
                      {" "}
                    </Fragment>
                  ))}
                </div>
              </div>
              {" "}
            </>
          ) : null}
          <div data-screen-label="Trip · Inclusions" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              {"What you're paying for"}
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "24px" }}>
              {(v.trip?.inc || []).map((g, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={{ borderTop: "1px solid #000000" }}>
                    {" "}
                    <div style={{ padding: "12px 0", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: `${t(g?.c)}` }}>
                      {t(g?.h)}
                    </div>
                    {" "}
                    {(g?.items || []).map((i, $index) => (
                      <Fragment key={$index}>
                        <div style={{ padding: "8px 0", borderTop: "1px solid #E5E5E5", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", lineHeight: "1.5" }}>
                          {t(i)}
                        </div>
                      </Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
          <div data-screen-label="Trip · Customise" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Make it yours
            </span>
            <div style={{ borderTop: "1px solid #000000" }}>
              {" "}
              {(v.custom || []).map((c, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <button onClick={c?.toggle} style={{ width: "100%", display: "grid", gridTemplateColumns: "24px 1fr auto", gap: "12px", alignItems: "center", padding: "14px 0", background: "none", border: "none", borderBottom: "1px solid #E5E5E5", textAlign: "left", color: "#000000" }}>
                    <span style={{ width: "16px", height: "16px", border: "1px solid #000000", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", background: `${t(c?.bg)}`, color: "#FFFFFF", fontSize: "11px", lineHeight: "14px", textAlign: "center", fontFamily: "var(--font-outfit),sans-serif" }}>
                      {t(c?.tick)}
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {t(c?.t)}
                    </span>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12px", color: "#363636" }}>
                      {t(c?.p)}
                    </span>
                  </button>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
          </div>
          <div data-screen-label="Trip · Story" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", background: "#F8F8F8", borderRadius: "8.4px", padding: "clamp(16px,3vw,32px)" }}>
              <div style={{ flex: "none", width: "clamp(88px,14vw,128px)", aspectRatio: "1 / 1", borderRadius: "5px", background: "#EDEDED", overflow: "hidden", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "8px", boxSizing: "border-box", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "11px", letterSpacing: "0.08em", lineHeight: "1.3", color: "#939393" }}>
                {t(v.tripRev?.ph)}
                {v.tripRev?.img ? (
                  <>
                    <Img src={at(v.tripRev?.img)} alt={at(v.tripRev?.who)} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </>
                ) : null}
              </div>
              <div style={{ flex: "1 1 260px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-outfit),sans-serif" }}>
                  <span style={{ fontSize: "16px", letterSpacing: "2px", color: "#F5B50A" }}>
                    ★★★★★
                  </span>
                  <span style={{ fontWeight: "500", fontSize: "14px" }}>
                    {t(v.tripRev?.rating)}
                  </span>
                </div>
                <blockquote style={{ margin: "0", fontSize: "clamp(17px,2.2vw,22.7px)", lineHeight: "1.4", fontStyle: "italic", textWrap: "pretty" }}>
                  “{t(v.tripRev?.quote)}”
                </blockquote>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                  {t(v.tripRev?.who)}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
              {(v.tripRevDots || []).map((x, $index) => (
                <Fragment key={$index}>
                  <button onClick={x?.pick} aria-label={at(x?.label)} style={{ width: "24px", height: "24px", background: "none", border: "none", padding: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: `${t(x?.w)}px`, height: "6px", borderRadius: "3px", background: `${t(x?.bg)}`, transition: "all 250ms ease" }} />
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
          <div data-screen-label="Trip · Similar" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Explore similar itineraries
              </span>
              <p style={{ margin: "0", fontSize: "15.4px", lineHeight: "1.75", color: "#111111", maxWidth: "560px" }}>
                Three other ways to see Egypt, each with a different focus.
              </p>
            </div>
            <div style={{ display: "flex", gap: "24px", overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", alignItems: "stretch", paddingBottom: "8px" }}>
              {(v.similar || []).map((t, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={{ flex: "0 0 clamp(250px,calc((100% - 48px) / 3),380px)", minWidth: "0", scrollSnapAlign: "start", display: "flex" }}>
                    <TripCardSV key={t?.name} trip={t} onOpen={t?.onOpen} />
                  </div>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
          <div data-screen-label="Trip · Booking" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              How booking works
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,140px),1fr))", borderTop: "1px solid #000000" }}>
              {(v.booking || []).map((b, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={{ padding: "16px 16px 0 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", color: "#000000" }}>
                      {t(b?.n)}
                    </span>
                    <span style={{ fontSize: "14px" }}>
                      {t(b?.t)}
                    </span>
                    <span style={{ fontSize: "12px", lineHeight: "1.5", color: "#363636" }}>
                      {t(b?.b)}
                    </span>
                  </div>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      {" "}
    </>
  );
}
