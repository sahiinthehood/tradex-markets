import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/legal", label: "Legal" },
];

export function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(10px)",
        background: "rgba(247, 245, 240, 0.82)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="section-shell"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          minHeight: "3.75rem",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            fontSize: "1.05rem",
          }}
        >
          TradeX <span style={{ color: "var(--teal)" }}>Markets</span>
        </Link>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.9rem",
                color: "var(--ink-soft)",
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="btn btn-primary"
            style={{ minHeight: "2.2rem", padding: "0.4rem 0.8rem", fontSize: "0.84rem" }}
          >
            Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        marginTop: "4rem",
        padding: "2.5rem 0 3rem",
      }}
    >
      <div className="section-shell" style={{ display: "grid", gap: "1.25rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "baseline",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              TradeX Markets
            </div>
            <p style={{ margin: "0.4rem 0 0", color: "var(--ink-soft)", fontSize: "0.92rem", maxWidth: "36rem" }}>
              Bootstrap CFD broker path for South Africa, Namibia, and an international allowlist.
              Not licensed yet — partner / white-label first; Mauritius FSC target when funded.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", fontSize: "0.9rem" }}>
            <Link href="/roadmap">Roadmap</Link>
            <Link href="/legal">Risk &amp; restricted countries</Link>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--ink-soft)", maxWidth: "52rem" }}>
          CFDs are complex and carry a high risk of losing money rapidly due to leverage. This site
          does not solicit residents of the US, UK, EU/EEA, Australia, or other restricted
          jurisdictions. See <Link href="/legal" style={{ textDecoration: "underline" }}>/legal</Link>.
        </p>
      </div>
    </footer>
  );
}
