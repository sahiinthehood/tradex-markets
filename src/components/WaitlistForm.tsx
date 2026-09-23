"use client";

import { FormEvent, useEffect, useMemo, useState, type CSSProperties } from "react";
import { useSearchParams } from "next/navigation";

type Intent = "demo" | "waitlist";

export function WaitlistForm({ defaultIntent = "waitlist" }: { defaultIntent?: Intent }) {
  const params = useSearchParams();
  const intentFromQuery = params.get("intent");
  const initialIntent: Intent =
    intentFromQuery === "demo" || intentFromQuery === "waitlist"
      ? intentFromQuery
      : defaultIntent;

  const [intent, setIntent] = useState<Intent>(initialIntent);
  const [email, setEmail] = useState("");
  const [market, setMarket] = useState("South Africa");
  const [note, setNote] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setIntent(initialIntent);
  }, [initialIntent]);

  const title = useMemo(
    () => (intent === "demo" ? "Request demo access" : "Join the waitlist"),
    [intent],
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = {
      email: email.trim().toLowerCase(),
      market,
      intent,
      note: note.trim(),
      source: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_source") || "direct" : "direct",
      ref: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("ref") || "" : "",
      at: new Date().toISOString(),
    };
    try {
      const key = "tradex_markets_waitlist";
      const prev = JSON.parse(localStorage.getItem(key) || "[]");
      localStorage.setItem(key, JSON.stringify([payload, ...(Array.isArray(prev) ? prev : [])]));
    } catch {
      /* ignore storage failures */
    }
    setDone(true);
  }

  if (done) {
    return (
      <div
        id={intent === "demo" ? "demo" : "waitlist"}
        style={{
          padding: "1.5rem",
          border: "1px solid var(--line)",
          background: "rgba(255,255,255,0.55)",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem", fontFamily: "var(--font-syne), sans-serif" }}>
          You&apos;re on the list
        </h3>
        <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: 1.6 }}>
          We&apos;ll reach out when demo or partner onboarding opens for your market. No live
          trading claims until a licensed partner path is live.
        </p>
      </div>
    );
  }

  return (
    <form
      id={intent === "demo" ? "demo" : "waitlist"}
      onSubmit={onSubmit}
      style={{
        display: "grid",
        gap: "0.9rem",
        padding: "1.5rem",
        border: "1px solid var(--line)",
        background: "rgba(255,255,255,0.55)",
      }}
    >
      <div>
        <h3 style={{ margin: "0 0 0.35rem", fontFamily: "var(--font-syne), sans-serif" }}>{title}</h3>
        <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: 1.55 }}>
          Bootstrap stage — no Mauritius licence yet. Demo and live accounts will open under a
          licensed partner first.
        </p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {(["demo", "waitlist"] as Intent[]).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setIntent(value)}
            className={intent === value ? "btn btn-primary" : "btn btn-secondary"}
            style={{ minHeight: "2.2rem", padding: "0.4rem 0.85rem", fontSize: "0.85rem" }}
          >
            {value === "demo" ? "Demo" : "Waitlist"}
          </button>
        ))}
      </div>

      <label style={{ display: "grid", gap: "0.35rem", fontSize: "0.9rem" }}>
        Email
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={inputStyle}
        />
      </label>

      <label style={{ display: "grid", gap: "0.35rem", fontSize: "0.9rem" }}>
        Primary market
        <select value={market} onChange={(e) => setMarket(e.target.value)} style={inputStyle}>
          <option>South Africa</option>
          <option>Namibia</option>
          <option>Other (allowlist)</option>
        </select>
      </label>

      <label style={{ display: "grid", gap: "0.35rem", fontSize: "0.9rem" }}>
        Optional note
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="Trading experience, preferred platform, or TradeHub link…"
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </label>

      <button type="submit" className="btn btn-primary">
        {intent === "demo" ? "Request demo" : "Join waitlist"}
      </button>
      <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--ink-soft)" }}>
        By submitting you confirm you are not a resident of a restricted country listed on{" "}
        <a href="/legal" style={{ textDecoration: "underline" }}>
          /legal
        </a>
        .
      </p>
    </form>
  );
}

const inputStyle: CSSProperties = {
  border: "1px solid var(--line)",
  background: "rgba(255,255,255,0.8)",
  padding: "0.7rem 0.8rem",
  borderRadius: "var(--radius)",
  font: "inherit",
  color: "var(--ink)",
};
