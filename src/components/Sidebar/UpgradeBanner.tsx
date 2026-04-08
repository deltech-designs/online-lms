

export default function UpgradeBanner() {
  return (
    <div
      style={{
        margin: "16px 10px",
        padding: "18px",
        background: "linear-gradient(135deg, #EEF2FF, #E0E7FF)",
        borderRadius: 18,
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#4338CA",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Go Premium
      </p>
      <p
        style={{
          margin: "8px 0 12px",
          fontSize: 14,
          color: "#1E293B",
          lineHeight: 1.4,
        }}
      >
        Unlock expert lessons and priority support.
      </p>
      <button
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 12,
          border: "none",
          background: "#4338CA",
          color: "#FFF",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Upgrade now
      </button>
    </div>
  );
}
