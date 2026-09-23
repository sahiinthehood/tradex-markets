import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Risk disclaimer and restricted countries for TradeX Markets. Hard-block list includes US, UK, EU/EEA, Australia, and sanctioned jurisdictions.",
};

export default function LegalPage() {
  return (
    <div className="section-shell" style={{ padding: "3rem 0 4rem", maxWidth: "46rem" }}>
      <header style={{ marginBottom: "2.5rem" }}>
        <h1
          style={{
            margin: "0 0 0.75rem",
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2rem, 4vw, 2.6rem)",
            letterSpacing: "-0.035em",
          }}
        >
          Risk &amp; restricted countries
        </h1>
        <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: 1.65 }}>
          TradeX Markets is in a bootstrap stage. This page is a disclosure stub — not legal advice.
          Confirm geo and marketing rules with counsel and any licensed partner before onboarding
          clients.
        </p>
      </header>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={h2}>Licence status</h2>
        <p style={para}>
          TradeX Markets does <strong>not</strong> currently hold a Mauritius FSC (or other) licence.
          Soft launch, when it happens, will be as an IB / white-label under a licensed partner. Do
          not treat this website as an offer of regulated brokerage services in any jurisdiction
          where that would be unlawful.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={h2}>CFD risk warning</h2>
        <p style={para}>
          Contracts for difference (CFDs) are complex instruments and come with a high risk of losing
          money rapidly due to leverage. You should consider whether you understand how CFDs work and
          whether you can afford to take the high risk of losing your money. Past performance is not
          a reliable indicator of future results.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={h2}>Restricted countries (hard block)</h2>
        <p style={para}>
          We do not accept residents of the following (non-exhaustive; also blocked: sanctioned
          countries/persons and any geo refused by partner or PSP):
        </p>
        <ul style={list}>
          <li>United States (including US persons wherever located)</li>
          <li>United Kingdom</li>
          <li>European Union / EEA member states</li>
          <li>Australia</li>
          <li>Typically also Canada, New Zealand, Japan, Israel — pending counsel / partner terms</li>
          <li>OFAC / UN / EU / UK sanctioned jurisdictions and listed persons</li>
        </ul>
        <p style={para}>
          Primary marketing focus: <strong>South Africa</strong> and <strong>Namibia</strong>, plus
          other markets inside the partner allowlist. “Open onboarding” means open inside that
          allowlist — not worldwide regulatory cover. We do not run acquisition ads into blocked
          geos.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={h2}>Demo &amp; waitlist</h2>
        <p style={para}>
          Demo and waitlist requests collect interest only. They do not open a live funded account.
          Live accounts require KYC/AML under a licensed structure and may be refused.
        </p>
      </section>

      <p style={{ margin: 0 }}>
        <Link href="/" className="btn btn-secondary">
          Back to home
        </Link>
      </p>
    </div>
  );
}

const h2: CSSProperties = {
  margin: "0 0 0.7rem",
  fontFamily: "var(--font-syne), sans-serif",
  fontSize: "1.35rem",
  letterSpacing: "-0.02em",
};

const para: CSSProperties = {
  color: "var(--ink-soft)",
  lineHeight: 1.7,
  margin: "0 0 0.75rem",
};

const list: CSSProperties = {
  margin: "0 0 1rem",
  paddingLeft: "1.1rem",
  color: "var(--ink-soft)",
  lineHeight: 1.65,
};
