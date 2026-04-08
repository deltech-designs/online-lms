

export default function SidebarUserCard() {
  return (
    <div
      style={{
        padding: "16px",
        borderTop: "1px solid #E8ECF0",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      {/* User avatar */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3B9EFF, #5B6EF7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFF",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        A
      </div>

      {/* User info */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
            color: "#0F172A",
          }}
        >
          Alex Johnson
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            color: "#64748B",
          }}
        >
          Student
        </p>
      </div>

      {/* Settings icon */}
      <button
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#64748B",
        }}
        title="Settings"
      >
        ⚙️
      </button>
    </div>
  );
}
