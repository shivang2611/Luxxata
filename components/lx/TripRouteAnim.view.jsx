// Generated from legacy/js/components.js (TripRouteAnim template).
import { Fragment } from 'react';
import { $t, $at, $css } from './runtime';
import Img from './Img';

export default function TripRouteAnimView({ v }) {
  return (
    <>
    <div data-routemap="" style={{ width: "100%", background: "#F3F3F3", borderRadius: "8.4px", padding: "clamp(14px,3.5vw,40px)", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "28px 40px", alignItems: "center" }}>
      <div style={{ position: "relative", containerType: "inline-size", flex: "1 1 440px", minWidth: "0", maxWidth: "700px", width: "100%", margin: "0 auto" }}>
        {" "}
        <svg viewBox={$at(v.vb)} role="img" aria-label="Animated route map" style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}>
          <defs>
            <clipPath id="trmclip">
              <rect x="0" y="0" width={$at(v.vw)} height={$at(v.vh)} />
            </clipPath>
          </defs>
          <g display={$at(v.cDisp)}>
            <rect x="0" y="0" width="700" height="640" fill="#FFFFFF" stroke="#A8A8A8" strokeWidth="1.5" />
            <path d="M0 0 L250 0 L270 130 L240 250 L200 330 L120 420 L90 640 L0 640 Z" fill="#FAF9F7" />
            <path d="M440 0 C430 110 392 190 408 290 C418 370 378 470 388 640 L368 640 C358 470 398 370 388 290 C372 190 410 110 420 0 Z" fill="#E4E4E4" />
            <path d="M420 0 C410 110 372 190 388 290 C398 370 358 470 368 640" fill="none" stroke="#A8A8A8" strokeWidth="1.2" />
            <path d="M440 0 C430 110 392 190 408 290 C418 370 378 470 388 640" fill="none" stroke="#A8A8A8" strokeWidth="1.2" />
            <path d="M392 168 C380 190 378 232 392 262 C406 240 412 196 402 168 Z" fill="#FFFFFF" stroke="#A8A8A8" strokeWidth="1.2" />
            <path d="M420 215 L610 150 L700 120" fill="none" stroke="#D4D4D4" strokeWidth="1.5" strokeDasharray="2 6" />
            <path d="M60 640 L120 520 L205 380 L330 300 L395 250" fill="none" stroke="#D4D4D4" strokeWidth="1.5" strokeDasharray="2 6" />
            <path d="M440 330 C520 330 560 250 600 150" fill="none" stroke="#D4D4D4" strokeWidth="1.5" strokeDasharray="2 6" />
            <text x="22" y="40" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "13px", letterSpacing: "0.18em" }} fill="#939393">
              WESTERN DESERT
            </text>
            <text x="490" y="40" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "13px", letterSpacing: "0.18em" }} fill="#939393">
              EASTERN DESERT
            </text>
            <text x="530" y="560" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "13px", letterSpacing: "0.18em" }} fill="#939393">
              MOKATTAM
            </text>
            <text x="468" y="190" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "13px", letterSpacing: "0.18em" }} fill="#939393">
              CAIRO
            </text>
            <text x="30" y="500" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "13px", letterSpacing: "0.18em" }} fill="#939393">
              GIZA PLATEAU
            </text>
            <text x="436" y="430" transform="rotate(-80 436 430)" style={{ fontFamily: "var(--font-merriweather),Georgia,serif", fontSize: "17px", fontStyle: "italic" }} fill="#939393">
              Nile
            </text>
            <g transform="translate(655 600)">
              <path d="M0 -16 L6 0 L0 -4 L-6 0 Z" fill="#363636" />
              <text x="0" y="16" textAnchor="middle" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "11px" }} fill="#939393">
                N
              </text>
            </g>
          </g>
          <g display={$at(v.eDisp)}>
            <path d="M20 20 L75 20 L137 34 L159 36 L259 70 L307 50 L344 28 L384 23 L415 25 L434 25 L462 47 L482 54 L517 55 L554 49 L579 39 L597 92 L620 159 L607 197 L593 257 L580 282 L555 269 L533 235 L512 202 L485 167 L467 152 L473 182 L511 232 L540 277 L554 315 L562 349 L597 412 L653 540 L665 589 L702 632 L738 670 L20 670 Z" fill="#FFFFFF" stroke="#A8A8A8" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M467 152 L510 205 L545 255 L575 285" fill="none" stroke="#E4E4E4" strokeWidth="7" strokeLinecap="round" />
            <path d="M462 47 L465 87 L469 127" fill="none" stroke="#A8A8A8" strokeWidth="1.2" strokeDasharray="1.5 4" />
            <path d="M347 29 L358 62 L378 92 L395 128 L397 167 L377 227 L369 259 L374 287 L402 332 L437 374 L457 394 L485 392 L482 422" fill="none" stroke="#A8A8A8" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M432 27 L415 62 L395 128" fill="none" stroke="#A8A8A8" strokeWidth="1.5" />
            <path d="M498 530 L493 552 L467 602 L437 632 L415 652 L401 671" fill="none" stroke="#E4E4E4" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <text x="117" y="9" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "14px", letterSpacing: "0.18em" }} fill="#939393">
              MEDITERRANEAN SEA
            </text>
            <text x="64" y="433" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "14px", letterSpacing: "0.18em" }} fill="#939393">
              WESTERN DESERT
            </text>
            <text x="615" y="447" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "14px", letterSpacing: "0.18em" }} fill="#939393">
              RED SEA
            </text>
            <text x="522" y="162" style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "14px", letterSpacing: "0.18em" }} fill="#939393">
              SINAI
            </text>
            <text x="357" y="332" transform="rotate(-55 357 332)" style={{ fontFamily: "var(--font-merriweather),Georgia,serif", fontSize: "19px", fontStyle: "italic" }} fill="#939393">
              Nile
            </text>
          </g>
          <g clipPath="url(#trmclip)">
            {(v.legs || []).map((g, $index) => (
              <Fragment key={$index}>
                <path d={$at(g?.d)} fill="none" stroke="#000000" strokeWidth={$at(g?.w)} strokeOpacity={$at(g?.op)} strokeLinecap="round" strokeLinejoin="round" />
              </Fragment>
            ))}
            <circle cx={$at(v.ringX)} cy={$at(v.ringY)} r={$at(v.ringR)} fill="none" stroke="#000000" strokeWidth="1.5" opacity={$at(v.ringO)} />
            <g transform={$at(v.planeT)} opacity={$at(v.planeO)}>
              <path d="M16 0 L10 -2 L-2 -12 L-6 -12 L0 -2 L-9 -2 L-12 -6 L-15 -6 L-13 0 L-15 6 L-12 6 L-9 2 L0 2 L-6 12 L-2 12 L10 2 Z" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
        {" "}
        {(v.pins || []).map((p, $index) => (
          <Fragment key={$index}>
            {" "}
            <div style={{ position: "absolute", left: `${$t(p?.left)}`, top: `${$t(p?.top)}`, width: "0", height: "0", pointerEvents: "none" }}>
              {" "}
              <span style={{ position: "absolute", left: "-2.8cqw", top: "-2.8cqw", width: "5.6cqw", height: "5.6cqw", borderRadius: "50%", background: `${$t(p?.bgc)}`, border: "2px solid #000000", boxSizing: "border-box", color: `${$t(p?.fg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "clamp(11px,2.5cqw,21px)" }}>
                {$t(p?.n)}
              </span>
              {" "}
              <span style={{ position: "absolute", top: "-1.6cqw", ...$css(p?.side), whiteSpace: "nowrap", fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(11px,2.8cqw,21px)", lineHeight: "3.2cqw", color: "#000000", background: `${$t(p?.bg)}`, padding: `${$t(p?.pad)}`, borderRadius: "4px", textShadow: "0 0 3px #FFFFFF,0 0 3px #FFFFFF" }}>
                {$t(p?.label)}
              </span>
              {" "}
            </div>
            {" "}
          </Fragment>
        ))}
        {" "}
        <div style={{ position: "absolute", top: `${$t(v.popTop)}%`, ...$css(v.popSide), transform: "translateY(-50%)", width: "clamp(150px,38%,260px)", background: "#FFFFFF", borderRadius: "8.4px", boxShadow: "0 6px 24px rgba(0,0,0,0.2)", overflow: "hidden", opacity: `${$t(v.popO)}`, marginTop: `${$t(v.popY)}px`, pointerEvents: "none" }}>
          {" "}
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", background: "#E4E4E4" }}>
            {" "}
            {(v.photos || []).map((p, $index) => (
              <Fragment key={$index}>
                {" "}
                {p?.u ? (
                  <>
                    <Img src={$at(p?.u)} alt={$at(p?.cap)} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: `${$t(p?.op)}`, transition: "opacity 350ms ease" }} />
                  </>
                ) : null}
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ padding: "10px 12px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#939393" }}>
              {$t(v.popKicker)}
            </span>
            <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: "clamp(13px,1.6vw,16px)", lineHeight: "1.2" }}>
              {$t(v.popTitle)}
            </span>
            <span style={{ display: `${$t(v.textDisp)}`, fontSize: "12px", lineHeight: "1.5", color: "#363636" }}>
              {$t(v.popText)}
            </span>
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div style={{ flex: "1 1 260px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}>
          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Your route · day by day
          </span>
          <button onClick={v.toggleAll} style={{ background: "none", border: "none", borderBottom: "1px solid #000000", padding: "0 0 2px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "400", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#000000" }}>
            {$t(v.allLabel)}
          </button>
        </div>
        <div style={{ borderTop: "1px solid #000000" }}>
          {" "}
          {(v.dayRows || []).map((d, $index) => (
            <Fragment key={$index}>
              {" "}
              <div style={{ borderBottom: "1px solid #ABABAB", background: `${$t(d?.bg)}`, transition: "background 300ms ease" }}>
                {" "}
                <button onClick={d?.toggle} style={{ width: "100%", display: "grid", gridTemplateColumns: "52px 1fr auto", gap: "12px", alignItems: "center", padding: "14px 0", background: "none", border: "none", textAlign: "left", color: "#000000" }}>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: `${$t(d?.w)}`, fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    {"Day "}{$t(d?.n)}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                    <span style={{ fontSize: "17px", lineHeight: "1.3" }}>
                      {$t(d?.title)}
                    </span>
                    <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", color: "#939393" }}>
                      {$t(d?.place)}
                    </span>
                  </span>
                  <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "20px", width: "18px", textAlign: "center" }}>
                    {$t(d?.sign)}
                  </span>
                </button>
                {" "}
                <div style={{ display: "grid", gridTemplateRows: `${$t(d?.rows)}`, transition: "grid-template-rows 350ms ease" }}>
                  <div style={{ minHeight: "0", overflow: "hidden" }}>
                    {" "}
                    <div style={{ padding: "0 0 18px 64px", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.65", color: "#111111" }}>
                        {$t(d?.body)}
                      </p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", padding: "6px 10px", background: "#FFFFFF", borderRadius: "52.5px" }}>
                          {"Walking · "}{$t(d?.walk)}
                        </span>
                        <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "12px", padding: "6px 10px", background: "#FFFFFF", borderRadius: "52.5px" }}>
                          {"Free time · "}{$t(d?.free)}
                        </span>
                      </div>
                    </div>
                    {" "}
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </Fragment>
          ))}
          {" "}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
          <button onClick={v.replay} style={{ height: "44px", padding: "0 24px", background: "#000000", color: "#FFFFFF", border: "1px solid #000000", borderRadius: "52.5px", fontFamily: "var(--font-outfit),sans-serif", fontWeight: "500", fontSize: "12.6px", letterSpacing: "0.1em", textTransform: "uppercase" }} className="lxp11">
            Replay
          </button>
          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: "300", fontSize: "14px", color: "#939393" }}>
            Indicative route. Not to scale.
          </span>
        </div>
      </div>
    </div>
    </>
  );
}
