

import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div
      style={{
        flex: 1,
        maxWidth: 400,
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Magnifying glass icon inside the input */}
      <span
        style={{
          position: "absolute",
          left: 11,
          color: "#94A3B8",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none", // so clicking the icon focuses the input
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>

      <input
        type="text"
        placeholder="Search courses, topics..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "100%",
          padding: "9px 12px 9px 33px",
          background: "#F4F7FA",
          border: "1.5px solid transparent",
          borderRadius: 10,
          fontSize: 13,
          color: "#0F172A",
          fontFamily: "'DM Sans', sans-serif",
          outline: "none",
          transition: "border-color 0.15s ease",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#3B9EFF")}
        onBlur={(e) => (e.target.style.borderColor = "transparent")}
      />
    </div>
  );
}
