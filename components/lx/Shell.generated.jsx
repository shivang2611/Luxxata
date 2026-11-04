// Generated from legacy/js/components.js (Luxxata template): header, popup, WhatsApp, footer.
import { Fragment } from 'react';
import { t, at } from './runtime';
import Img from './Img';

export default function Shell({ v, children }) {
  return (
    <>
    <div style={{ minHeight: "100vh", background: "#FFFFFF", color: "#000000", fontFamily: "var(--font-merriweather),Georgia,serif", paddingBottom: `${t(v.bottomPad)}` }}>
      {" "}
      {" "}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap", minHeight: "40px", padding: "10px 20px", background: "#000000", color: "#FFFFFF", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", textAlign: "center" }}>
        <span>
          Egypt holidays, planned from India
        </span>
      </div>
      {" "}
      {" "}
      <header style={{ position: "sticky", top: "0", zIndex: "30", background: "#FFFFFF", borderBottom: "1px solid #E5E5E5", boxShadow: `${t(v.headerShadow)}` }}>
        {" "}
        <div data-hdr="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", minHeight: "68px", padding: "8px clamp(20px,6vw,96px)" }}>
          <button data-hlogo="" onClick={v.goHome} style={{ background: "none", border: "none", padding: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", color: "#000000" }}>
            <span style={{ fontFamily: "var(--font-merriweather),Georgia,serif", fontStyle: "italic", fontWeight: "400", fontSize: "30px", lineHeight: "1" }}>
              Amira
            </span>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Journeys in Egypt
            </span>
          </button>
          <div data-hright="" style={{ display: "flex", alignItems: "center", gap: "8px 20px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <button data-cta={at(v.ctaNudge)} onClick={v.goEnquiry} style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", background: "#000000", color: "#FFFFFF", border: "1px solid #000000", borderRadius: "5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "700", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase" }} className="lxp0 lxp1">
              <span data-txt="">
                Plan My Trip
              </span>
              <span data-arrow="" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>
        {" "}
      </header>
      {" "}
      {" "}
    {children}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {v.popOpen ? (
        <>
          {" "}
          <div style={{ position: "fixed", inset: "0", zIndex: "100", background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", overflowY: "auto" }}>
            <div role="dialog" aria-modal="true" data-pd="" style={{ position: "relative", width: "100%", maxWidth: "460px", maxHeight: "calc(100vh - 32px)", overflowY: "auto", background: "#FFFFFF", borderRadius: "8.4px", padding: "clamp(24px,5vw,40px)" }}>
              {" "}
              <button onClick={v.closePop} aria-label="Close" style={{ position: "absolute", top: "12px", right: "12px", width: "44px", height: "44px", background: "none", border: "none", fontFamily: "var(--font-outfit),sans-serif", fontSize: "24px", lineHeight: "1", color: "#000000" }} className="lxp3">
                ×
              </button>
              {" "}
              {v.popForm ? (
                <>
                  {" "}
                  <form data-pf="" onSubmit={v.submitPop} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                      Plan my Egypt trip
                    </span>
                    <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0 32px 0 0", fontWeight: "400", fontSize: "clamp(26px,6vw,32px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}>
                      Tell us where to send your proposal.
                    </h2>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                        Name
                      </span>
                      <input type="text" value={t(v.pop?.name)} onChange={v.onName} placeholder="Your name" style={{ height: "48px", padding: "0 16px", border: `1px solid ${t(v.nameBd)}`, borderRadius: "5px", background: "#FFFFFF", fontFamily: "var(--font-outfit),sans-serif", fontSize: "15px", color: "#000000", width: "100%" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                        Phone number
                      </span>
                      <input type="tel" value={t(v.pop?.phone)} onChange={v.onPhone} placeholder="+91" style={{ height: "48px", padding: "0 16px", border: `1px solid ${t(v.phoneBd)}`, borderRadius: "5px", background: "#FFFFFF", fontFamily: "var(--font-outfit),sans-serif", fontSize: "15px", color: "#000000", width: "100%" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                        {"Email "}
                        <span style={{ color: "#939393" }}>
                          · optional
                        </span>
                      </span>
                      <input type="email" value={t(v.pop?.email)} onChange={v.onEmail} placeholder="you@example.com" style={{ height: "48px", padding: "0 16px", border: `1px solid ${t(v.emailBd)}`, borderRadius: "5px", background: "#FFFFFF", fontFamily: "var(--font-outfit),sans-serif", fontSize: "15px", color: "#000000", width: "100%" }} />
                    </label>
                    <div data-pp="" style={{ display: "flex", gap: "14px", alignItems: "center", background: "#FFF6D6", border: "1.5px solid #F5B50A", borderRadius: "8.4px", padding: "16px", boxShadow: "0 6px 18px rgba(245,181,10,0.30),0 1px 3px rgba(0,0,0,0.10)" }}>
                      <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="11" width="14" height="9" rx="2" />
                          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                        </svg>
                      </span>
                      <p style={{ margin: "0", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "13.5px", lineHeight: "1.5", color: "#000000", textWrap: "pretty" }}>
                        <strong style={{ fontWeight: "600", fontSize: "15px", display: "block", marginBottom: "2px" }}>
                          Your details stay private.
                        </strong>
                        We will only use them to send your proposal. No spam, and no repeated follow-ups.
                      </p>
                    </div>
                    <button type="submit" disabled={!!(v.popBlocked)} style={{ height: "52px", background: `${t(v.popBg)}`, color: "#FFFFFF", border: `1px solid ${t(v.popBg)}`, cursor: `${t(v.popCur)}`, borderRadius: "52.5px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Send
                    </button>
                    <div data-popreview="" data-prv="" style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                      <div style={{ display: "flex", gap: "14px", alignItems: "stretch", border: "1px solid #E5E5E5", borderRadius: "8.4px", padding: "12px", minHeight: "96px" }}>
                        <div style={{ flex: "none", width: "84px", minHeight: "84px", borderRadius: "5px", background: "#F3F3F3", overflow: "hidden", position: "relative" }}>
                          <Img src={at(v.rev?.img)} alt={at(v.rev?.who)} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", justifyContent: "center", gap: "6px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-outfit),sans-serif" }}>
                            <span style={{ fontSize: "14px", letterSpacing: "2px", color: "#F5B50A" }}>
                              {t(v.rev?.stars)}
                              <span style={{ color: "#ABABAB" }}>
                                {t(v.rev?.dim)}
                              </span>
                            </span>
                            <span style={{ fontWeight: "500", fontSize: "13px" }}>
                              {t(v.rev?.rating)}
                            </span>
                          </div>
                          <span style={{ fontSize: "13px", lineHeight: "1.5", fontStyle: "italic" }}>
                            “{t(v.rev?.quote)}”
                          </span>
                          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "11px", color: "#939393" }}>
                            {t(v.rev?.who)}
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
                        {(v.revDots || []).map((x, $index) => (
                          <Fragment key={$index}>
                            <button onClick={x?.pick} aria-label={at(x?.label)} style={{ width: "24px", height: "24px", background: "none", border: "none", padding: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <span style={{ width: `${t(x?.w)}px`, height: "6px", borderRadius: "3px", background: `${t(x?.bg)}`, transition: "all 250ms ease" }} />
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </form>
                  {" "}
                </>
              ) : null}
              {" "}
              {v.popSent ? (
                <>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px 0" }}>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                      Received
                    </span>
                    <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "clamp(26px,6vw,32px)", lineHeight: "1.15" }}>
                      {"Thank you, "}{t(v.pop?.name)}.
                    </h2>
                    <p style={{ margin: "0", fontSize: "15.4px", lineHeight: "1.75" }}>
                      {"We will be in touch on "}{t(v.pop?.phone)}.
                    </p>
                    <button onClick={v.closePop} style={{ height: "52px", background: "#000000", color: "#FFFFFF", border: "1px solid #000000", borderRadius: "52.5px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Close
                    </button>
                  </div>
                  {" "}
                </>
              ) : null}
              {" "}
            </div>
          </div>
          {" "}
        </>
      ) : null}
      {" "}
      {" "}
      <a href="https://wa.me/910000000000?text=Hi%20Amira%2C%20I%27d%20like%20to%20plan%20a%20trip%20to%20Egypt." target="_blank" rel="noopener" aria-label="Chat on WhatsApp" style={{ position: "fixed", right: "20px", bottom: `${t(v.waBottom)}`, zIndex: "90", width: "56px", height: "56px", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }} className="lxp10">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.200-3.400-8.300zM12 21.700c-1.800 0-3.500-.5-5-1.400l-.4-.2-3.800 1 1-3.700-.2-.4a9.800 9.800 0 0 1-1.500-5.200c0-5.400 4.400-9.800 9.900-9.800 2.600 0 5.100 1 6.900 2.900a9.800 9.800 0 0 1 2.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.100c-.2.200-.3.200-.6.100-.3-.1-1.200-.4-2.300-1.400-.9-.8-1.400-1.700-1.600-2-.2-.3 0-.5.100-.6l.4-.5c.1-.1.2-.3.300-.5.1-.2 0-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500.7.300 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
      {" "}
      {" "}
      <footer data-ft="" style={{ marginTop: "128px", background: "#000000", color: "#FFFFFF", padding: "33.6px clamp(20px,6vw,96px)" }}>
        {" "}
        <div style={{ border: "1px solid rgba(255,255,255,0.10)", padding: "clamp(24px,3vw,37.8px)" }}>
          {" "}
          <div data-ftgrid="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))", gap: "33.6px" }}>
            {(v.footer || []).map((c, $index) => (
              <Fragment key={$index}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "4px" }}>
                    {t(c?.h)}
                  </span>
                  {(c?.links || []).map((l, $index) => (
                    <Fragment key={$index}>
                      <button onClick={l?.go} style={{ background: "none", border: "none", padding: "0", textAlign: "left", fontFamily: "var(--font-merriweather),Georgia,serif", fontSize: "13.3px", color: "rgba(255,255,255,0.9)" }} className="lxp3">
                        {t(l?.label)}
                      </button>
                    </Fragment>
                  ))}
                </div>
                {" "}
              </Fragment>
            ))}
          </div>
          {" "}
          <div data-ftbar="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", flexWrap: "wrap", marginTop: "50.4px", paddingTop: "25.2px", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontFamily: "var(--font-merriweather),Georgia,serif", fontStyle: "italic", fontSize: "28px", lineHeight: "1" }}>
                Amira
              </span>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
                Journeys in Egypt
              </span>
            </span>
            <span data-ftcopy="" style={{ fontFamily: "var(--font-merriweather),Georgia,serif", fontSize: "12.6px", lineHeight: "1.57", letterSpacing: "0.04em", color: "rgba(255,255,255,0.7)" }}>
              {"© 2026 Amira · Privacy · Booking terms · Payment & cancellation"}
            </span>
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
    </div>
    </>
  );
}
