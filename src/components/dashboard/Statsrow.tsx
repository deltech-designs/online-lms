
// ─────────────────────────────────────────────────────────────

import type { Stat} from "../../types";
import { STATS } from "../../data";

// ── Single card ───────────────────────────────────────────────
function StatCard({ icon, label, value, accent, pct }: Stat) {
  return (
    <div
      style={{
        flex: 1,
        background: "#FFF",
        border: "1px solid #E8ECF0",
        borderRadius: 14,
        padding: "16px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {/* Emoji icon */}
      <span style={{ fontSize: 18 }}>{icon}</span>

      {/* Label e.g. "Hours Spent" */}
      <p style={{ margin: 0, fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>
        {label}
      </p>

      {/* Big value e.g. "124.5h" */}
      <p
        style={{
          margin: 0,
          fontSize: 20,
          fontWeight: 800,
          color: "#0F172A",
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {value}
      </p>

      {/* Thin coloured progress bar */}
      <div style={{ height: 3, borderRadius: 2, background: "#F0F3F6" }}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            borderRadius: 2,
            background: accent,
          }}
        />
      </div>
    </div>
  );
}

// ── Row of four cards ─────────────────────────────────────────
export default function StatsRow() {
  return (
    <div style={{ display: "flex", gap: 14, marginBottom: 22 }}>
      {STATS.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
