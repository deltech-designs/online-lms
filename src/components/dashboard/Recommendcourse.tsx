

import type { Recommendation } from "../../types";
import { RECOMMENDATIONS } from "../../data";

// ── Single recommendation card ────────────────────────────────
function RecommendCard({ rec }: { rec: Recommendation }) {
  return (
    <div
      style={{
        background: rec.bgColor,
        borderRadius: 14,
        padding: "16px",
        color: "#FFF",
        display: "flex",
        gap: 12,
        flexShrink: 0,
        width: 252,
      }}
    >
      {/* Book emoji thumbnail */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 10,
          background: "rgba(255,255,255,0.1)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
        }}
      >
        📖
      </div>

      {/* Text content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Tag e.g. "NEW · 24 LESSONS" */}
        <span
          style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#94A3B8",
            display: "block",
            marginBottom: 3,
          }}
        >
          {rec.tag}
        </span>

        <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 13 }}>
          {rec.title}
        </p>
        <p
          style={{
            margin: "0 0 8px",
            fontSize: 11,
            opacity: 0.7,
            lineHeight: 1.4,
          }}
        >
          {rec.description}
        </p>

        {/* Instructor + price */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 11, opacity: 0.6 }}>{rec.instructor}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#3B9EFF" }}>
            {rec.price}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────
export default function RecommendedCourses() {
  return (
    <div
      style={{
        background: "#FFF",
        border: "1px solid #E8ECF0",
        borderRadius: 16,
        padding: "18px",
      }}
    >
      {/* Header with arrow buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <p
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: 15,
            color: "#0F172A",
            fontFamily: "'Sora', sans-serif",
          }}
        >
          Recommended for You
        </p>

        {/* Previous / next arrow buttons */}
        <div style={{ display: "flex", gap: 6 }}>
          {["‹", "›"].map((arrow) => (
            <button
              key={arrow}
              style={{
                width: 26,
                height: 26,
                borderRadius: 7,
                border: "1px solid #E8ECF0",
                background: "#FFF",
                cursor: "pointer",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64748B",
              }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", gap: 12, overflow: "hidden" }}>
        {RECOMMENDATIONS.map((rec) => (
          <RecommendCard key={rec.id} rec={rec} />
        ))}
      </div>
    </div>
  );
}
