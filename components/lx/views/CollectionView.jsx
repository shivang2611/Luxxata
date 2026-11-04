'use client';
// Generated from the legacy template's isCollection block.
import { Fragment } from 'react';
import { t, at } from '../runtime';
import Img from '../Img';
import TripCardSV from '../TripCardSV';
import { useLx } from '../context';

export default function CollectionView() {
  const v = useLx();
  return (
    <>
      {" "}
      <section data-screen-label="Collection · Promise" style={{ padding: "24px clamp(20px,6vw,96px) 0" }}>
        {" "}
        <div style={{ display: "flex", gap: "8px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", color: "#363636", marginBottom: "32px" }}>
          <button onClick={v.goCollections} style={{ background: "none", border: "none", padding: "0", font: "inherit", color: "#363636" }}>
            Find Your Egypt
          </button>
          <span>
            /
          </span>
          <span style={{ color: "#000000" }}>
            {t(v.coll?.name)}
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,64px)", alignItems: "flex-end", marginBottom: "32px" }}>
          <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
                {"Collection · "}{t(v.coll?.name)}
              </span>
              {v.coll?.notLive ? (
                <>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", padding: "4px 8px", border: "1px solid #ABABAB", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", color: "#363636" }}>
                    {t(v.coll?.status)}
                  </span>
                </>
              ) : null}
            </span>
            <h1 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "clamp(39.8px,5vw,64px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
              {t(v.coll?.promise)}
            </h1>
          </div>
          <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
            <p style={{ margin: "0", fontSize: "15.4px", lineHeight: "1.75", color: "#111111", textWrap: "pretty" }}>
              {t(v.coll?.intro)}
            </p>
            <button onClick={v.enquireColl} style={{ height: "48px", padding: "0 32px", background: "#000000", color: "#FFFFFF", border: "none", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp6">
              Plan this kind of trip
            </button>
          </div>
        </div>
        {" "}
        <div style={{ position: "relative", overflow: "hidden", width: "100%", aspectRatio: "21 / 9", background: "#F3F3F3", borderRadius: "8.4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Img src={at(v.coll?.img)} alt={at(v.coll?.ph)} loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        {" "}
      </section>
      {" "}
      {v.coll?.full ? (
        <>
          {" "}
          <section data-screen-label="Collection · Who it suits" style={{ padding: "64px clamp(20px,6vw,96px) 0" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Who it suits
              </span>
              <span style={{ flex: "1", borderTop: "1px solid #000000" }} />
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "32px" }}>
              {(v.coll?.suits || []).map((s, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "18px", lineHeight: "1.35" }}>
                      {t(s?.t)}
                    </span>
                    <span style={{ fontSize: "13px", lineHeight: "1.6", color: "#363636" }}>
                      {t(s?.b)}
                    </span>
                  </div>
                  {" "}
                </Fragment>
              ))}
            </div>
            {" "}
          </section>
          {" "}
        </>
      ) : null}
      {" "}
      <section data-screen-label="Collection · Trips" style={{ padding: "64px clamp(20px,6vw,96px) 0" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Recommended journeys
          </span>
          <span style={{ flex: "1", borderTop: "1px solid #000000" }} />
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))", gap: "48px 32px" }}>
          {(v.collTrips || []).map((t, $index) => (
            <Fragment key={$index}>
              {" "}
              <TripCardSV key={t?.name} trip={t} onOpen={t?.onOpen} />
              {" "}
            </Fragment>
          ))}
        </div>
        {" "}
      </section>
      {" "}
      {v.coll?.full ? (
        <>
          {" "}
          <section data-screen-label="Collection · Preview" style={{ padding: "64px clamp(20px,6vw,96px) 0" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                The experience
              </span>
              <span style={{ flex: "1", borderTop: "1px solid #000000" }} />
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "32px", alignItems: "start" }}>
              {(v.coll?.preview || []).map((p, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ position: "relative", overflow: "hidden", width: "100%", aspectRatio: `${t(p?.ratio)}`, background: "#F3F3F3", borderRadius: "8.4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Img src={at(p?.img)} alt={at(p?.ph)} loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <figcaption style={{ fontSize: "13px", lineHeight: "1.55", fontStyle: "italic", color: "#363636" }}>
                      {t(p?.cap)}
                    </figcaption>
                  </figure>
                  {" "}
                </Fragment>
              ))}
            </div>
            {" "}
          </section>
          {" "}
          <section data-screen-label="Collection · Choice guide" style={{ padding: "64px clamp(20px,6vw,96px) 0" }}>
            {" "}
            <div style={{ background: "#F8F8F8", borderRadius: "8.4px", padding: "clamp(24px,4vw,48px)" }}>
              {" "}
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
                Choice guide
              </span>
              {" "}
              <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "12px 0 32px", fontWeight: "400", fontSize: "32px", lineHeight: "1.15" }}>
                {t(v.coll?.guideQ)}
              </h2>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "24px" }}>
                {(v.coll?.guide || []).map((g, $index) => (
                  <Fragment key={$index}>
                    {" "}
                    <div style={{ background: "#FFFFFF", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                        {t(g?.label)}
                      </span>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "22px", lineHeight: "1.2" }}>
                        {t(g?.title)}
                      </span>
                      <div style={{ borderTop: "1px solid #E5E5E5" }}>
                        {" "}
                        {(g?.pts || []).map((pt, $index) => (
                          <Fragment key={$index}>
                            <div style={{ padding: "10px 0", borderBottom: "1px solid #E5E5E5", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", lineHeight: "1.5" }}>
                              {t(pt)}
                            </div>
                          </Fragment>
                        ))}
                        {" "}
                      </div>
                    </div>
                    {" "}
                  </Fragment>
                ))}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section data-screen-label="Collection · Pace" style={{ padding: "64px clamp(20px,6vw,96px) 0" }}>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,64px)" }}>
              <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
                  Sample pace
                </span>
                <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "32px", lineHeight: "1.15" }}>
                  How a day feels.
                </h2>
              </div>
              <div style={{ flex: "2 1 420px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))", borderTop: "1px solid #000000" }}>
                {(v.coll?.pace || []).map((p, $index) => (
                  <Fragment key={$index}>
                    {" "}
                    <div style={{ padding: "16px 16px 0 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em" }}>
                        {t(p?.time)}
                      </span>
                      <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#111111" }}>
                        {t(p?.t)}
                      </span>
                    </div>
                    {" "}
                  </Fragment>
                ))}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section data-screen-label="Collection · Evidence & price" style={{ padding: "64px clamp(20px,6vw,96px) 0" }}>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "32px", borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5" }}>
              <figure style={{ margin: "0", padding: "32px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
                <blockquote style={{ margin: "0", fontSize: "22.7px", lineHeight: "1.35", fontStyle: "italic" }}>
                  “{t(v.coll?.quote)}”
                </blockquote>
                <figcaption style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#363636" }}>
                  {t(v.coll?.quoteBy)}
                </figcaption>
              </figure>
              <div style={{ padding: "32px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  {"Price & inclusions"}
                </span>
                <span style={{ fontSize: "32px", lineHeight: "1.15" }}>
                  {t(v.coll?.priceFrom)}
                </span>
                <span style={{ fontSize: "13px", lineHeight: "1.6", color: "#363636" }}>
                  {t(v.coll?.priceNote)}
                </span>
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section data-screen-label="Collection · FAQ" style={{ padding: "64px clamp(20px,6vw,96px) 0" }}>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,64px)" }}>
              <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
                  Questions
                </span>
                <h2 style={{ fontFamily: "var(--font-outfit),sans-serif", margin: "0", fontWeight: "400", fontSize: "32px", lineHeight: "1.15" }}>
                  Before you choose.
                </h2>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", color: "#363636", marginTop: "8px" }}>
                  {"Guide · "}{t(v.coll?.article)}
                </span>
              </div>
              <div style={{ flex: "2 1 420px", borderTop: "1px solid #000000" }}>
                {" "}
                {(v.collFaqs || []).map((f, $index) => (
                  <Fragment key={$index}>
                    {" "}
                    <div style={{ borderBottom: "1px solid #E5E5E5" }}>
                      {" "}
                      <button onClick={f?.toggle} style={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "center", padding: "20px 0", background: "none", border: "none", textAlign: "left", color: "#000000" }}>
                        <span style={{ fontSize: "18px", lineHeight: "1.35" }}>
                          {t(f?.q)}
                        </span>
                        <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "20px" }}>
                          {t(f?.sign)}
                        </span>
                      </button>
                      {" "}
                      {f?.open ? (
                        <>
                          <p style={{ margin: "0", padding: "0 40px 24px 0", fontSize: "14px", lineHeight: "1.65", color: "#111111" }}>
                            {t(f?.a)}
                          </p>
                        </>
                      ) : null}
                      {" "}
                    </div>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
        </>
      ) : null}
      {" "}
      <section data-screen-label="Collection · CTA" style={{ margin: "64px clamp(20px,6vw,96px) 0", border: "1px solid #000000", padding: "clamp(32px,5vw,48px)", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
            {t(v.coll?.name)}
          </span>
          <span style={{ fontSize: "32px", lineHeight: "1.15" }}>
            Plan a journey in this collection.
          </span>
        </div>
        <button onClick={v.enquireColl} style={{ height: "48px", padding: "0 32px", background: "#000000", color: "#FFFFFF", border: "none", borderRadius: "52.5px", whiteSpace: "nowrap", flex: "none", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "600", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp6">
          Start my enquiry
        </button>
      </section>
      {" "}
    </>
  );
}
