'use client';
// Generated from the legacy template's isCatalogue block.
import { Fragment } from 'react';
import { t, at } from '../runtime';
import TripCardSV from '../TripCardSV';
import { useLx } from '../context';

export default function CatalogueView() {
  const v = useLx();
  return (
    <>
      {" "}
      <section data-screen-label="Our Trips" style={{ padding: "48px clamp(20px,6vw,96px) 0" }}>
        {" "}
        <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
          Our Trips
        </span>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap", margin: "16px 0 32px" }}>
          <h1 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "clamp(39.8px,5vw,64px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
            Every curated journey.
          </h1>
          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", color: "#363636" }}>
            {t(v.catCount)}
          </span>
        </div>
        {" "}
        <div data-flt="" style={{ position: "sticky", top: "68px", zIndex: "5", background: "#FFFFFF", borderTop: "1px solid #000000", borderBottom: "1px solid #E5E5E5", padding: "16px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", width: "72px" }}>
              Collection
            </span>
            <div data-fltrow="" style={{ display: "flex", gap: "6px", flexWrap: "wrap", flex: "1" }}>
              {(v.catColls || []).map((c, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <button onClick={c?.pick} style={{ height: "32px", padding: "0 12px", background: `${t(c?.bg)}`, color: `${t(c?.fg)}`, border: `1px solid ${t(c?.bd)}`, borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12px" }}>
                    {t(c?.label)}
                  </button>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", width: "72px" }}>
              Length
            </span>
            <div data-fltrow="" style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {(v.catLens || []).map((c, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <button onClick={c?.pick} style={{ height: "32px", padding: "0 12px", background: `${t(c?.bg)}`, color: `${t(c?.fg)}`, border: `1px solid ${t(c?.bd)}`, borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12px" }}>
                    {t(c?.label)}
                  </button>
                  {" "}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))", gap: "48px 32px", paddingTop: "32px" }}>
          {(v.catTrips || []).map((t, $index) => (
            <Fragment key={$index}>
              {" "}
              <TripCardSV key={t?.name} trip={t} onOpen={t?.onOpen} />
              {" "}
            </Fragment>
          ))}
        </div>
        {" "}
        {v.catEmpty ? (
          <>
            {" "}
            <div style={{ padding: "64px 0", textAlign: "center", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
              <span style={{ fontSize: "22.7px" }}>
                No journeys match both filters.
              </span>
              <button onClick={v.catReset} style={{ background: "none", border: "none", borderBottom: "1px solid #000000", padding: "0 0 2px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Clear filters
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
