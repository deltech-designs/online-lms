

export default function WelcomeBanner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 22,
      }}
    >
      {/* Welcome text */}
      <div>
        <h1
          style={{
            margin: 0,
            fontFamily: "'Sora', sans-serif",
            fontSize: 24,
            fontWeight: 800,
            color: "#0F172A",
          }}
        >
          Welcome back, Alex! 👋
        </h1>
        <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748B" }}>
          You're doing great! You have 3 assignments due this week.
        </p>
      </div>

      {/* Streak badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#FFF",
          border: "1px solid #E8ECF0",
          borderRadius: 12,
          padding: "8px 16px",
        }}
      >
        <span style={{ fontSize: 20 }}>🔥</span>
        <div>
          <p style={{ margin: 0, fontSize: 10, color: "#94A3B8" }}>
            Daily Streak
          </p>
          <p
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: 15,
              color: "#0F172A",
            }}
          >
            12 Days
          </p>
        </div>
      </div>
    </div>
  );
}
