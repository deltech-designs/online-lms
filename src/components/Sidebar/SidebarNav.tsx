

import type { NavItem } from "../../types";
import { NAV_ITEMS } from "../../data";
import { NAV_ICONS } from "./NavIcons";

interface SidebarNavProps {
  activeItem: NavItem; // which page is currently open
  onItemClick: (item: NavItem) => void; // called when user clicks a link
}

export default function SidebarNav({
  activeItem,
  onItemClick,
}: SidebarNavProps) {
  return (
    <nav style={{ padding: "0 10px", flex: 1 }}>
      {/* Section label above the links */}
      <p
        style={{
          padding: "18px 10px 8px",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "#94A3B8",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Main Menu
      </p>

      {/* One button per nav item */}
      {NAV_ITEMS.map((item) => {
        const isActive = item === activeItem;

        return (
          <button
            key={item}
            onClick={() => onItemClick(item)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              // active page gets a light blue background
              background: isActive ? "#EFF6FF" : "transparent",
              color: isActive ? "#3B9EFF" : "#64748B",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: isActive ? 600 : 400,
              fontSize: 14,
              marginBottom: 2,
              textAlign: "left",
              transition: "all 0.15s ease",
            }}
          >
            {/* Icon */}
            <span
              style={{
                color: isActive ? "#3B9EFF" : "#94A3B8",
                display: "flex",
                alignItems: "center",
              }}
            >
              {NAV_ICONS[item]}
            </span>

            {/* Label */}
            {item}

            {/* Blue dot on the right when active */}
            {isActive && (
              <span
                style={{
                  marginLeft: "auto",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#3B9EFF",
                }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
