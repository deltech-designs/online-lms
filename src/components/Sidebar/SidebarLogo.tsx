

export default function SidebarLogo() {
  return (
    <div
      style={{
        padding: "22px 20px 18px",
        borderBottom: "1px solid #F0F3F6",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* Blue gradient square with the letter "E" */}
      <div
        style={{
          width: 34,
          height: 34,
          background: "linear-gradient(135deg, #3B9EFF, #5B6EF7)",
          borderRadius: 9,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFF",
          fontSize: 15,
          fontWeight: 800,
        }}
      >
        E
      </div>

      {/* Brand name */}
      <span
        style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: 17,
          color: "#0F172A",
        }}
      >
        EduLearn
      </span>
    </div>
  );
}
