
// ─────────────────────────────────────────────────────────────

import SearchBar from "./SearchBar";
import NotificationBell from "./Notificationbell";
import NavbarProfile from "./NavbarProfile";

export default function Topbar() {
  return (
    <header
      style={{
        height: 64,
        background: "#FFFFFF",
        borderBottom: "1px solid #E8ECF0",
        display: "flex",
        alignItems: "center",
        padding: "0 28px",
        gap: 14,
        flexShrink: 0,
        position: "sticky",
        top: 0,
        zIndex: 20,
      }}
    >
      {/* Left: search */}
      <SearchBar />

      {/* Right: action icons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginLeft: "auto",
        }}
      >
        {/* Messages icon button */}
        <button
          title="Messages"
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            border: "1px solid #E8ECF0",
            background: "#FFF",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#64748B",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#F4F7FA")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#FFF")}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>

        <NotificationBell />

        {/* Visual separator line */}
        <div
          style={{
            width: 1,
            height: 26,
            background: "#E8ECF0",
            margin: "0 4px",
          }}
        />

        <NavbarProfile />
      </div>
    </header>
  );
}
