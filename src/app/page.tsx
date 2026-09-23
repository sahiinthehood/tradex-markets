import { Suspense } from "react";
import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <>
      <section
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
          minHeight: "calc(100vh - 3.75rem)",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            padding: "clamp(2rem, 6vw, 4.5rem) clamp(1.25rem, 4vw, 4rem)",
          }}
        >
          <div className="atmosphere" />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "34rem" }}>
            <p
              className="animate-rise"
              style={{
                margin: "0 0 0.85rem",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
                letterSpacing: "-0.045em",
                lineHeight: 0.95,
              }}
            >
              TradeX Markets
            </p>
            <h1
              className="animate-rise-delay-1"
              style={{
                margin: "0 0 0.9rem",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.35rem, 3vw, 1.85rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              A broker built for Southern Africa — honest about the bootstrap.
            </h1>
            <p
              className="animate-rise-delay-2"
              style={{
                margin: "0 0 1.5rem",
                color: "var(--ink-soft)",
                fontSize: "1.05rem",
                lineHeight: 1.6,
                maxWidth: "30rem",
              }}
            >
              Primary focus: South Africa and Namibia, with an international allowlist. Live trading
              starts under a licensed partner — not a Mauritius licence claim.
            </p>
            <div className="animate-rise-delay-3" style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
              <Link href="/?intent=demo#demo" className="btn btn-primary">
                Open demo
              </Link>
              <Link href="/?intent=waitlist#waitlist" className="btn btn-secondary">
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="section-shell" style={{ padding: "4.5rem 0 2rem" }}>
        <div className="prose-block" style={{ maxWidth: "40rem" }}>
          <h2>Built to feel like a real product — not a splashy offshore pitch.</h2>
          <p>
            TradeX Markets is the front door for a lean CFD broker path: brand and demo first,
            then IB / white-label under a licensed partner, then own Mauritius FSC licence once
            capital is reserved. We hard-block restricted countries from day one.
          </p>
        </div>
      </section>

      <section className="section-shell" style={{ padding: "2rem 0 1rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              title: "Markets",
              body: "South Africa and Namibia first. International clients only inside the partner/PSP allowlist.",
            },
            {
              title: "Stage",
              body: "Bootstrap: waitlist + demo intent now. No client funds held by TradeX Markets until a licensed structure is live.",
            },
            {
              title: "TradeHub",
              body: "Designed to replace the current Trade X module on TradeHub with clear demo and account deep-links.",
            },
          ].map((item) => (
            <div key={item.title} style={{ borderTop: "1px solid var(--line)", paddingTop: "1rem" }}>
              <h3
                style={{
                  margin: "0 0 0.45rem",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "1.15rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: 1.6 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell" style={{ padding: "3.5rem 0", display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", alignItems: "start" }}>
        <div className="prose-block">
          <h2>Next step</h2>
          <p>
            Request demo access or join the waitlist. When a partner term sheet is signed, onboarding
            will run under their licence, KYC, and payments — with TradeX Markets branding where
            allowed. Read the full path on the{" "}
            <Link href="/roadmap" style={{ textDecoration: "underline" }}>
              roadmap
            </Link>
            .
          </p>
        </div>
        <Suspense fallback={<div style={{ padding: "1.5rem", border: "1px solid var(--line)" }}>Loading form…</div>}>
          <WaitlistForm />
        </Suspense>
      </section>
    </>
  );
}
