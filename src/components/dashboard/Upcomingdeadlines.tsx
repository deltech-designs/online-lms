

import type { Deadline } from "../../types";
import { DEADLINES } from "../../data";

// ── Single deadline row ───────────────────────────────────────
function DeadlineItem({ deadline }: { deadline: Deadline }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 0",
        borderBottom: "1px solid #F0F3F6",
      }}
    >
      {/* Date badge e.g. "OCT / 24" */}
      <div
        style={{
          width: 42,
          height: 42,
          background: "linear-gradient(135deg, #EFF6FF, #EEF2FF)",
          borderRadius: 10,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 8,
            fontWeight: 700,
            color: "#3B9EFF",
            letterSpacing: "0.1em",
          }}
        >
          {deadline.month}
        </span>
        <span
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: "#0F172A",
            lineHeight: 1.1,
          }}
        >
          {deadline.day}
        </span>
      </div>

      {/* Title and course name */}
      <div>
        <p
          style={{ margin: 0, fontWeight: 600, fontSize: 12, color: "#0F172A" }}
        >
          {deadline.title}
        </p>
        <p style={{ margin: "2px 0 0", fontSize: 11, color: "#94A3B8" }}>
          {deadline.course}
        </p>
      </div>
    </div>
  );
}

// ── Section panel ─────────────────────────────────────────────
export default function UpcomingDeadlines() {
  return (
    <div
      style={{
        background: "#FFF",
        border: "1px solid #E8ECF0",
        borderRadius: 16,
        padding: "18px",
      }}
    >
      <p
        style={{
          margin: "0 0 4px",
          fontWeight: 700,
          fontSize: 14,
          color: "#0F172A",
          fontFamily: "'Sora', sans-serif",
        }}
      >
        Upcoming Deadlines
      </p>

      {DEADLINES.map((deadline) => (
        <DeadlineItem key={deadline.id} deadline={deadline} />
      ))}

      {/* Link to full schedule */}
      <button
        style={{
          width: "100%",
          marginTop: 12,
          padding: "8px",
          background: "transparent",
          border: "1px solid #E8ECF0",
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 12,
          color: "#3B9EFF",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        View Full Schedule
      </button>
    </div>
  );
}
