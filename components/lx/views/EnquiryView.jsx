'use client';
// Generated from the legacy template's isEnquiry block.
import { Fragment } from 'react';
import { t, at } from '../runtime';
import { useLx } from '../context';

export default function EnquiryView() {
  const v = useLx();
  return (
    <>
      {" "}
      <section data-screen-label="Enquiry" style={{ padding: "48px clamp(20px,6vw,96px) 0" }}>
        {" "}
        {v.notSent ? (
          <>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,64px)", alignItems: "flex-start" }}>
              <div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "40px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
                    Plan my trip
                  </span>
                  <h1 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "clamp(39.8px,5vw,56px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
                    Tell us about your journey.
                  </h1>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    01 · Enquiring about
                  </span>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <select onChange={v.setTrip} value={t(v.enq?.trip)} style={{ flex: "1 1 240px", height: "48px", padding: "0 12px", border: "1px solid #939393", borderRadius: "52.5px", background: "#FFFFFF", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "13px", color: "#000000" }}>
                      {(v.tripOptions || []).map((o, $index) => (
                        <Fragment key={$index}>
                          <option value={at(o?.v)}>
                            {t(o?.l)}
                          </option>
                        </Fragment>
                      ))}
                    </select>
                    <select onChange={v.setTraveller} value={t(v.enq?.traveller)} style={{ flex: "1 1 200px", height: "48px", padding: "0 12px", border: "1px solid #939393", borderRadius: "52.5px", background: "#FFFFFF", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "13px", color: "#000000" }}>
                      {(v.travellerOptions || []).map((o, $index) => (
                        <Fragment key={$index}>
                          <option value={at(o?.v)}>
                            {t(o?.l)}
                          </option>
                        </Fragment>
                      ))}
                    </select>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    02 · I am planning
                  </span>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {(v.forWhom || []).map((c, $index) => (
                      <Fragment key={$index}>
                        <button onClick={c?.pick} style={{ height: "40px", padding: "0 16px", background: `${t(c?.bg)}`, color: `${t(c?.fg)}`, border: `1px solid ${t(c?.bd)}`, borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "13px" }}>
                          {t(c?.label)}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    03 · Travellers
                  </span>
                  <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                    {(v.counters || []).map((c, $index) => (
                      <Fragment key={$index}>
                        {" "}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "13px", width: "64px" }}>
                            {t(c?.label)}
                          </span>
                          <div style={{ display: "flex", alignItems: "center", border: "1px solid #ABABAB", borderRadius: "52.5px" }}>
                            <button onClick={c?.dec} style={{ width: "40px", height: "40px", background: "none", border: "none", fontFamily: "var(--font-outfit),sans-serif", fontSize: "16px" }}>
                              –
                            </button>
                            <span style={{ width: "32px", textAlign: "center", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "13px" }}>
                              {t(c?.v)}
                            </span>
                            <button onClick={c?.inc} style={{ width: "40px", height: "40px", background: "none", border: "none", fontFamily: "var(--font-outfit),sans-serif", fontSize: "16px" }}>
                              +
                            </button>
                          </div>
                        </div>
                        {" "}
                      </Fragment>
                    ))}
                  </div>
                </div>
                {(v.chipGroups || []).map((g, $index) => (
                  <Fragment key={$index}>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                        {t(g?.label)}
                      </span>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {(g?.chips || []).map((c, $index) => (
                          <Fragment key={$index}>
                            <button onClick={c?.pick} style={{ height: "40px", padding: "0 16px", background: `${t(c?.bg)}`, color: `${t(c?.fg)}`, border: `1px solid ${t(c?.bd)}`, borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "13px" }}>
                              {t(c?.label)}
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    {" "}
                  </Fragment>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    07 · Your details
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px" }}>
                    {(v.fields || []).map((f, $index) => (
                      <Fragment key={$index}>
                        {" "}
                        <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", color: "#363636" }}>
                            {t(f?.label)}
                          </span>
                          <input type={at(f?.type)} value={t(f?.value)} onChange={f?.onChange} placeholder={at(f?.ph)} style={{ height: "48px", padding: "0 14px", border: `1px solid ${t(f?.bd)}`, borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "13px", color: "#000000", background: "#FFFFFF" }} />
                        </label>
                        {" "}
                      </Fragment>
                    ))}
                  </div>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", color: "#363636" }}>
                      Anything we should know? Pace, mobility, celebrations, dietary needs
                    </span>
                    <textarea value={t(v.enq?.notes)} onChange={v.setNotes} rows="4" style={{ padding: "16px 20px", border: "1px solid #939393", borderRadius: "8.4px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "13px", resize: "vertical" }} />
                  </label>
                  {v.showError ? (
                    <>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12px", color: "#8c1c13" }}>
                        Please add your name and a valid email so a planner can reply.
                      </span>
                    </>
                  ) : null}
                  <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", marginTop: "8px" }}>
                    <button onClick={v.submit} style={{ height: "48px", padding: "0 32px", background: "#000000", color: "#FFFFFF", border: "none", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp6">
                      Send my brief
                    </button>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "11px", color: "#939393" }}>
                      No payment taken. Details used only to plan your trip.
                    </span>
                  </div>
                </div>
              </div>
              <aside style={{ flex: "1 1 300px", position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ background: "#F8F8F8", borderRadius: "8.4px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                    Your brief so far
                  </span>
                  {(v.summary || []).map((s, $index) => (
                    <Fragment key={$index}>
                      {" "}
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "8px 0", borderBottom: "1px solid #E5E5E5", fontFamily: "var(--font-outfit),sans-serif", fontSize: "12px" }}>
                        <span style={{ fontWeight: "300", color: "#363636" }}>
                          {t(s?.k)}
                        </span>
                        <span style={{ fontWeight: "600", textAlign: "right" }}>
                          {t(s?.v)}
                        </span>
                      </div>
                      {" "}
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    What happens next
                  </span>
                  {(v.nextSteps || []).map((n, $index) => (
                    <Fragment key={$index}>
                      {" "}
                      <div style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "8px", borderTop: "1px solid #E5E5E5", paddingTop: "12px" }}>
                        <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", color: "#000000", paddingTop: "3px" }}>
                          {t(n?.num)}
                        </span>
                        <span style={{ fontSize: "13px", lineHeight: "1.55" }}>
                          {t(n?.text)}
                        </span>
                      </div>
                      {" "}
                    </Fragment>
                  ))}
                </div>
              </aside>
            </div>
            {" "}
          </>
        ) : null}
        {" "}
        {v.sent ? (
          <>
            {" "}
            <div data-screen-label="Enquiry · Confirmation" style={{ maxWidth: "720px", margin: "32px auto 0", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
              <span style={{ width: "48px", height: "48px", border: "1px solid #000000", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-outfit),sans-serif", fontSize: "18px" }}>
                ✓
              </span>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
                {"Reference "}{t(v.ref)}
              </span>
              <h1 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "clamp(39.8px,5vw,56px)", lineHeight: "1.05" }}>
                {"Thank you, "}{t(v.firstName)}.
              </h1>
              <p style={{ margin: "0", fontSize: "15.4px", lineHeight: "1.75", color: "#111111" }}>
                {"Your brief for "}
                <em>
                  {t(v.sentTrip)}
                </em>
                {" is with a planner. Expect a personal reply within one working day, then your proposal."}
              </p>
              <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "24px", textAlign: "left", marginTop: "16px" }}>
                {(v.nextSteps || []).map((n, $index) => (
                  <Fragment key={$index}>
                    {" "}
                    <div style={{ borderTop: "1px solid #000000", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", color: "#000000" }}>
                        {t(n?.num)}
                      </span>
                      <span style={{ fontSize: "13px", lineHeight: "1.55" }}>
                        {t(n?.text)}
                      </span>
                    </div>
                    {" "}
                  </Fragment>
                ))}
              </div>
              <button onClick={v.goCatalogue} style={{ height: "48px", padding: "0 32px", background: "#FFFFFF", color: "#000000", border: "1px solid #000000", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp9">
                Keep browsing journeys
              </button>
            </div>
            {" "}
          </>
        ) : null}
        {" "}
      </section>
      {" "}
    </>
  );
}
