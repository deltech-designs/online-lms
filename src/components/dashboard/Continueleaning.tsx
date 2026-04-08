

import type { Course } from "../../types";
import { CONTINUE_COURSES } from "../../data";

// ── Single course card ────────────────────────────────────────
function CourseCard({ course }: { course: Course }) {
  return (
    <>
      <div
        style={{
          background: "#FFF",
          border: "1px solid #E8ECF0",
          borderRadius: 14,
          overflow: "hidden",
        }}
      >
        {/* Colourful gradient thumbnail */}
        <div
          style={{
            height: 112,
            background: course.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Module badge e.g. "MODULE 4 / 12" */}
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "rgba(255,255,255,0.22)",
              backdropFilter: "blur(6px)",
              color: "#FFF",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "3px 8px",
              borderRadius: 20,
            }}
          >
            {course.module}
          </span>

          {/* Play button circle */}
          <div
            style={{
              width: 38,
              height: 38,
              background: "rgba(255,255,255,0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              fontSize: 16,
            }}
          >
            ▶
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: "14px" }}>
          <p
            style={{
              margin: "0 0 2px",
              fontWeight: 700,
              fontSize: 13,
              color: "#0F172A",
            }}
          >
            {course.title}
          </p>
          <p style={{ margin: "0 0 12px", fontSize: 11, color: "#94A3B8" }}>
            {course.subtitle}
          </p>

          {/* Progress bar */}
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 10, color: "#94A3B8" }}>
                Overall Progress
              </span>
              <span style={{ fontSize: 10, fontWeight: 700, color: "#0F172A" }}>
                {course.progress}%
              </span>
            </div>
            <div style={{ height: 4, background: "#F0F3F6", borderRadius: 2 }}>
              <div
                style={{
                  height: "100%",
                  width: `${course.progress}%`,
                  background: "linear-gradient(90deg, #3B9EFF, #5B6EF7)",
                  borderRadius: 2,
                }}
              />
            </div>
          </div>

          {/* Resume button */}
          <button
            style={{
              width: "100%",
              padding: "8px",
              background: "linear-gradient(90deg, #3B9EFF, #5B6EF7)",
              color: "#FFF",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Resume Learning
          </button>
        </div>
      </div>
    </>
  );
}

// ── Section wrapper ───────────────────────────────────────────
export default function ContinueLearning() {
  return (
    <div
      style={{
        background: "#FFF",
        border: "1px solid #E8ECF0",
        borderRadius: 16,
        padding: "18px",
      }}
    >
      {/* Section header */}
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
          Continue Learning
        </p>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#3B9EFF",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            padding: 0,
          }}
        >
          View all →
        </button>
      </div>

      {/* Cards side by side */}
      <div style={{ display: "flex", gap: 14 }}>
        {CONTINUE_COURSES.map((course) => (
          <div key={course.id} style={{ flex: 1 }}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}
