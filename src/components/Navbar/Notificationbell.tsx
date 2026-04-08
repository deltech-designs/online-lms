

export default function NavbarProfile() {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 10px 4px 4px",
        borderRadius: 10,
        border: "1px solid #E8ECF0",
        background: "#FFF",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#F4F7FA")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#FFF")}
    >
      {/* Avatar circle */}
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FCD34D, #F97316)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFF",
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        A
      </div>

      {/* Name + role */}
      <div style={{ textAlign: "left" }}>
        <p
          style={{ margin: 0, fontWeight: 600, fontSize: 12, color: "#0F172A" }}
        >
          Alex J.
        </p>
        <p style={{ margin: 0, fontSize: 10, color: "#94A3B8" }}>Pro Student</p>
      </div>

      {/* Chevron (down arrow) */}
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#94A3B8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

