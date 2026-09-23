export function HeroVisual() {
  return (
    <div
      className="hero-visual"
      aria-hidden
      style={{
        position: "relative",
        minHeight: "100%",
        width: "100%",
        overflow: "hidden",
        background:
          "linear-gradient(145deg, rgba(18,32,24,0.92) 0%, rgba(15,90,78,0.88) 48%, rgba(42,58,48,0.9) 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.55,
        }}
      />
      <svg
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7fd9c8" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#9fe8d8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e8c27a" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7fd9c8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#7fd9c8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 340 C 70 320, 90 280, 140 290 S 220 360, 280 330 S 360 220, 420 250 S 500 310, 560 240 S 610 180, 640 190 L 640 480 L 0 480 Z"
          fill="url(#fillGrad)"
        />
        <path
          className="chart-path"
          d="M0 340 C 70 320, 90 280, 140 290 S 220 360, 280 330 S 360 220, 420 250 S 500 310, 560 240 S 610 180, 640 190"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle className="live-dot" cx="560" cy="240" r="5.5" fill="#e8c27a" />
        <g fill="rgba(247,255,252,0.72)" fontFamily="ui-monospace, monospace" fontSize="11">
          <text x="28" y="48">
            ZAR · NAD · USD
          </text>
          <text x="28" y="68">
            SA · Namibia desk
          </text>
          <text x="28" y="88" fill="rgba(159,232,216,0.95)">
            SESSION LIVE
          </text>
        </g>
      </svg>
      <div
        style={{
          position: "absolute",
          left: "1.25rem",
          right: "1.25rem",
          bottom: "1.25rem",
          color: "rgba(247,255,252,0.88)",
          fontSize: "0.86rem",
          letterSpacing: "0.02em",
          maxWidth: "22rem",
          lineHeight: 1.45,
        }}
      >
        Markets atmosphere — not a live price feed. Built for Southern African trading hours and an
        international allowlist.
      </div>
    </div>
  );
}
