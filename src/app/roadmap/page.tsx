import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "How TradeX Markets launches: bootstrap funnel, partner white-label / IB, ops and regulatory requirements, Mauritius FSC switch, and TradeHub connection.",
};

const phases = [
  {
    name: "Phase A — Bootstrap funnel",
    timing: "Weeks 0–4 · minimal cash",
    points: [
      "Lock brand + this site (demo / waitlist CTAs)",
      "Shortlist and sign partner / white-label / IB term sheet (revenue share preferred)",
      "Hard geo-blocklist in signup (US, UK, EU/EEA, AU, sanctions, partner/PSP refusals)",
      "Manual support + lean ops; Mauritius counsel conversation only — no full pack spend yet",
    ],
    exit: "Demo live · partner path agreed · geo-blocks enforced · first leads",
  },
  {
    name: "Phase B — Soft launch via partner",
    timing: "Weeks 4–12",
    points: [
      "Real deposits/trades under the partner’s licence + PSP",
      "TradeX Markets brand UX where the agreement allows; clear licensed counterparty disclosure",
      "KYC/AML via partner stack; tiny symbol set, leverage and deposit caps",
      "Track unit economics (CPA, deposit, revenue share)",
    ],
    exit: "Paying clients · withdrawals working · no compliance incidents · margin toward own licence",
  },
  {
    name: "Phase C — Own Mauritius entity",
    timing: "When ~$40k–$90k+ reserved",
    points: [
      "Incorporate + inject ~MUR 1,000,000 capital (SEC-2.1B typical path — confirm with counsel)",
      "FSC application pack, MLRO / directors / Management Company substance",
      "Migrate clients/tech off partner (or dual-run)",
      "Own PSP applications under Mauritius licence",
    ],
    exit: "Licence live + own payments path (Gate G4)",
  },
  {
    name: "Phase D — Credibility upgrade",
    timing: "Later, revenue-funded",
    points: [
      "Consider FSCA / CySEC / similar only when cashflow supports it",
      "Optional MT5/cTrader + LP once volume justifies deal economics",
    ],
    exit: "Broader institutional credibility without burning bootstrap runway",
  },
];

export default function RoadmapPage() {
  return (
    <div className="section-shell" style={{ padding: "3rem 0 4rem" }}>
      <header className="prose-block" style={{ maxWidth: "42rem", marginBottom: "2.75rem" }}>
        <p
          style={{
            margin: "0 0 0.6rem",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--teal-deep)",
          }}
        >
          How we launch
        </p>
        <h1
          style={{
            margin: "0 0 0.85rem",
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            letterSpacing: "-0.035em",
            lineHeight: 1.1,
          }}
        >
          Bootstrap sequence for a credible CFD broker
        </h1>
        <p>
          Showcase for founders who want the honest path: partner first, Mauritius when funded.
          Jurisdiction target is Mauritius FSC (cheaper capital than Seychelles). Soft-launch geos
          are open <em>within</em> an allowlist — never a claim of worldwide regulatory cover.
        </p>
      </header>

      <section style={{ marginBottom: "3.5rem" }}>
        <h2 style={h2}>1. How to get there</h2>
        <ol
          style={{
            margin: 0,
            paddingLeft: "1.2rem",
            color: "var(--ink-soft)",
            lineHeight: 1.7,
            maxWidth: "46rem",
          }}
        >
          <li>Publish brand site with demo/waitlist + restricted-countries disclosure (this site).</li>
          <li>Sign one IB / white-label partner — that agreement <strong>is</strong> go-live.</li>
          <li>Enforce geo-blocks + KYC before first real client.</li>
          <li>Deposits/withdrawals only via partner PSP until you hold a licence.</li>
          <li>Support + risk caps; save toward Mauritius capital (~$40k–$90k+ gate).</li>
          <li>File Mauritius pack only when funded; migrate off partner when licence + PSP are live.</li>
        </ol>
        <p style={{ color: "var(--ink-soft)", maxWidth: "46rem", lineHeight: 1.65 }}>
          Kill switch: no partner deal and no capital → stay demo/waitlist only. Do not hold client
          funds.
        </p>
      </section>

      <section style={{ marginBottom: "3.5rem" }}>
        <h2 style={h2}>2. Complete roadmap (phases)</h2>
        <div className="phase-rail" style={{ display: "grid", gap: "1.4rem", paddingLeft: "0.2rem" }}>
          {phases.map((phase) => (
            <article
              key={phase.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1.2rem 1fr",
                gap: "0.9rem",
                alignItems: "start",
              }}
            >
              <span
                aria-hidden
                style={{
                  width: "0.7rem",
                  height: "0.7rem",
                  marginTop: "0.45rem",
                  borderRadius: "999px",
                  background: "var(--teal)",
                }}
              />
              <div
                style={{
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,0.45)",
                  padding: "1.15rem 1.25rem",
                }}
              >
                <h3 style={{ margin: "0 0 0.25rem", fontFamily: "var(--font-syne), sans-serif" }}>
                  {phase.name}
                </h3>
                <p
                  style={{
                    margin: "0 0 0.75rem",
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.78rem",
                    color: "var(--teal-deep)",
                  }}
                >
                  {phase.timing}
                </p>
                <ul style={{ margin: "0 0 0.75rem", paddingLeft: "1.1rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                  {phase.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p style={{ margin: 0, fontSize: "0.92rem" }}>
                  <strong>Exit:</strong> {phase.exit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3.5rem", display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <div>
          <h2 style={h2}>3. Requirements — ops / tech</h2>
          <ul style={list}>
            <li>Prefer partner-included CRM, KYC, payments, and trading platform</li>
            <li>Web trading MVP: demo + one live account type; market / limit / stop</li>
            <li>Admin kill switch (symbol + client); exportable trade/ledger data</li>
            <li>Founder-owned risk + ops; fractional compliance advice; support hours covered</li>
            <li>Skip custom platform builds and MT5 deals until revenue exists</li>
          </ul>
        </div>
        <div>
          <h2 style={h2}>4. Regulatory requirements</h2>
          <ul style={list}>
            <li>Do not claim “Mauritius regulated” before the licence is issued</li>
            <li>No marketing CFDs into UK / EU / AU / US without the right local licence</li>
            <li>Hard-block sanctioned countries/persons; honour partner licence exclusions</li>
            <li>Written partner/IB/WL agreement stating who is licensed and who holds funds</li>
            <li>When filing Mauritius: confirm licence code with counsel (e.g. SEC-2.1B vs Broker)</li>
          </ul>
        </div>
        <div>
          <h2 style={h2}>5. Financial requirements</h2>
          <ul style={list}>
            <li>Bootstrap lean: partner setup $0–$5k preferred; site DIY; light counsel $1k–$5k</li>
            <li>Mauritius own-licence gate: save ~$40k–$90k+ (capital dominates ~$20–25k equivalent)</li>
            <li>Indicative Mauritius fees: application ~$750; annual ~$2.5k — confirm current schedule</li>
            <li>Do not self B-book without a dedicated risk buffer</li>
            <li>Seychelles rejected on capital ($100k paid-up) for this bootstrap plan</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: "3.5rem", maxWidth: "48rem" }}>
        <h2 style={h2}>6. How white-labeling / IB under a licensed partner works</h2>
        <p style={para}>
          An <strong>introducing broker (IB)</strong> or <strong>white-label</strong> arrangement lets
          TradeX Markets acquire clients under our brand while the <strong>partner’s licensed entity</strong>{" "}
          remains the counterparty: they hold client money, run KYC/AML, provide the trading platform
          and PSP, and share revenue. You own funnel quality and support; they own regulatory perimeter.
        </p>
        <p style={para}>
          Soft-launch rule: your site must disclose who the licensed firm is. Deposits never sit in an
          unlicensed TradeX Markets account. Offboarding terms matter — exportable ledgers and a
          migration clause keep Phase C viable.
        </p>
      </section>

      <section style={{ marginBottom: "3.5rem", maxWidth: "48rem" }}>
        <h2 style={h2}>7. Switching to own Mauritius licence</h2>
        <p style={para}>
          When Gate G3 is funded (~$40k–$90k+ reserved), incorporate, inject capital, appoint
          substance (often via Management Company), and submit the FSC pack. Run dual-stack if needed,
          then migrate clients and PSP under the Mauritius entity (Gate G4). Until then, stay on
          partner terms — pause full application spend.
        </p>
        <p style={para}>
          Neither Mauritius nor a partner licence lets you legally solicit UK/EU/AU/US retail as if
          you were locally regulated. The allowlist stays.
        </p>
      </section>

      <section
        style={{
          maxWidth: "48rem",
          borderTop: "1px solid var(--line)",
          paddingTop: "2rem",
        }}
      >
        <h2 style={h2}>8. TradeHub connection</h2>
        <p style={para}>
          On <a href="https://tradehub-app.com" style={{ textDecoration: "underline" }}>TradeHub</a>,{" "}
          <strong>Trade X</strong> today is the in-app live broker portal (route{" "}
          <code>/TradehubMarkets</code>), currently backed by a third-party licensed stack with MT5 /
          wallet / KYC flows. TradeX Markets is designed to <strong>replace that integration</strong>:
          TradeHub keeps signals, journal, and terminal tools; broker CTAs deep-link to TradeX Markets
          demo/waitlist now, then to the partner portal (and later own stack) for live accounts.
        </p>
        <p style={para}>
          Recommended TradeHub hooks: <code>?utm_source=tradehub&amp;ref=tradehub&amp;intent=demo|waitlist</code>{" "}
          into this site; rename nav copy from “Trade X” to <strong>TradeX Markets</strong>; prefer
          new-tab deep-links for KYC/deposits over full-page iframes. Full technical notes live in the
          Broker Project internal doc.
        </p>
        <p style={{ ...para, marginBottom: 0 }}>
          <Link href="/?intent=demo#demo" className="btn btn-primary" style={{ marginRight: "0.6rem" }}>
            Open demo
          </Link>
          <Link href="/legal" className="btn btn-secondary">
            Restricted countries
          </Link>
        </p>
      </section>
    </div>
  );
}

const h2: CSSProperties = {
  margin: "0 0 0.85rem",
  fontFamily: "var(--font-syne), sans-serif",
  fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)",
  letterSpacing: "-0.025em",
};

const list: CSSProperties = {
  margin: 0,
  paddingLeft: "1.1rem",
  color: "var(--ink-soft)",
  lineHeight: 1.65,
};

const para: CSSProperties = {
  color: "var(--ink-soft)",
  lineHeight: 1.7,
  margin: "0 0 1rem",
};
