'use client';
// Generated from the legacy template's isCollections block.
import { Fragment } from 'react';
import { t, at } from '../runtime';
import { useLx } from '../context';

export default function CollectionsView() {
  const v = useLx();
  return (
    <>
      {" "}
      <section data-screen-label="Find Your Egypt" style={{ padding: "48px clamp(20px,6vw,96px) 0" }}>
        {" "}
        <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
          Find Your Egypt
        </span>
        {" "}
        <h1 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "16px 0 48px", fontWeight: "400", fontSize: "clamp(39.8px,5vw,64px)", lineHeight: "1.05", letterSpacing: "-0.01em", maxWidth: "760px" }}>
          Browse by the holiday you want.
        </h1>
        {" "}
        <div style={{ borderTop: "1px solid #000000" }}>
          {" "}
          {(v.collList || []).map((c, $index) => (
            <Fragment key={$index}>
              {" "}
              <button onClick={c?.go} style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "16px", alignItems: "center", padding: "24px 0", background: "none", border: "none", borderBottom: "1px solid #E5E5E5", textAlign: "left", color: "#000000" }} className="lxp5">
                <span style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", color: "#939393" }}>
                    {t(c?.num)}
                  </span>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "22px", lineHeight: "1.2" }}>
                    {t(c?.name)}
                  </span>
                </span>
                <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#363636" }}>
                  {t(c?.line)}
                </span>
                <span style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", padding: "5px 8px", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", border: `1px solid ${t(c?.statusBd)}`, color: `${t(c?.statusFg)}` }}>
                    {t(c?.status)}
                  </span>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "14px" }}>
                    →
                  </span>
                </span>
              </button>
              {" "}
            </Fragment>
          ))}
          {" "}
        </div>
        {" "}
      </section>
      {" "}
    </>
  );
}
