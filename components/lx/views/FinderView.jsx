'use client';
// Generated from the legacy template's isFinder block.
import { Fragment } from 'react';
import { $t, $at, $css } from '../runtime';
import TripCardSV from '../TripCardSV';
import { useLx } from '../context';

export default function FinderView() {
  const v = useLx();
  return (
    <>
      {" "}
      <section data-screen-label="Trip finder" style={{ padding: "48px clamp(20px,6vw,96px) 0" }}>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,64px)" }}>
          <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
              Find your Egypt
            </span>
            <h1 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "39.8px", lineHeight: "1.1", letterSpacing: "-0.01em" }}>
              Five questions. Your shortlist.
            </h1>
            <div style={{ borderTop: "1px solid #000000" }}>
              {" "}
              {(v.stepList || []).map((s, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <button onClick={s?.go} style={{ width: "100%", display: "grid", gridTemplateColumns: "32px 1fr", gap: "8px", padding: "12px 0", background: "none", border: "none", borderBottom: "1px solid #E5E5E5", textAlign: "left", color: `${$t(s?.fg)}` }}>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", paddingTop: "4px" }}>
                      {$t(s?.num)}
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px" }}>
                        {$t(s?.label)}
                      </span>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12px", color: "#000000" }}>
                        {$t(s?.answer)}
                      </span>
                    </span>
                  </button>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
          </div>
          <div style={{ flex: "2.2 1 480px", minWidth: "0" }}>
            {" "}
            {v.inQuestions ? (
              <>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                    <span>
                      {"Question "}{$t(v.stepNum)}{" of 05"}
                    </span>
                    <button onClick={v.fBack} style={{ background: "none", border: "none", padding: "0", font: "inherit", color: "#363636" }}>
                      ← Back
                    </button>
                  </div>
                  <div style={{ height: "1px", background: "#E5E5E5" }}>
                    <div style={{ height: "1px", background: "#000000", width: `${$t(v.progress)}`, transition: "width 400ms" }} />
                  </div>
                  <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "16px 0 8px", fontWeight: "400", fontSize: "clamp(32px,4vw,48px)", lineHeight: "1.1" }}>
                    {$t(v.question)}
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,220px),1fr))", gap: "8px" }}>
                    {(v.options || []).map((o, $index) => (
                      <Fragment key={$index}>
                        {" "}
                        <button onClick={o?.pick} style={{ minHeight: "64px", padding: "16px 20px", background: `${$t(o?.bg)}`, color: `${$t(o?.fg)}`, border: `1px solid ${$t(o?.bd)}`, borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", textAlign: "left", display: "flex", flexDirection: "column", gap: "4px", transition: "all 200ms" }} className="lxp4">
                          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "13px" }}>
                            {$t(o?.label)}
                          </span>
                          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", opacity: ".75" }}>
                            {$t(o?.sub)}
                          </span>
                        </button>
                        {" "}
                      </Fragment>
                    ))}
                  </div>
                </div>
                {" "}
              </>
            ) : null}
            {" "}
            {v.showResults ? (
              <>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", flexWrap: "wrap" }}>
                    <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "32px", lineHeight: "1.15" }}>
                      Three journeys that fit.
                    </h2>
                    <button onClick={v.fRestart} style={{ background: "none", border: "none", borderBottom: "1px solid #000000", padding: "0 0 2px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                      Start again
                    </button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,220px),1fr))", gap: "32px" }}>
                    {(v.results || []).map((t, $index) => (
                      <Fragment key={$index}>
                        {" "}
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: `${$t(t?.matchC)}` }}>
                            {$t(t?.match)}
                          </span>
                          <TripCardSV key={t?.name} trip={t} onOpen={t?.onOpen} />
                        </div>
                        {" "}
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ background: "#000000", color: "#FFFFFF", borderRadius: "8.4px", padding: "40px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "460px" }}>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
                        Personalised proposal
                      </span>
                      <span style={{ fontSize: "22.7px", lineHeight: "1.3" }}>
                        Share your details to receive a tailored route, stays and an exact price.
                      </span>
                    </div>
                    <button onClick={v.enquireFinder} style={{ height: "48px", padding: "0 32px", background: "#FFFFFF", color: "#000000", border: "none", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp8">
                      Get my proposal
                    </button>
                  </div>
                </div>
                {" "}
              </>
            ) : null}
            {" "}
          </div>
        </div>
        {" "}
      </section>
      {" "}
    </>
  );
}
