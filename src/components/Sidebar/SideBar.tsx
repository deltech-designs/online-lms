

import type { NavItem } from "../../types";
import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";
import UpgradeBanner from "./UpgradeBanner";
import SidebarUserCard from "./sidebarUserCard";

interface SidebarProps {
  activeItem: NavItem;
  onItemClick: (item: NavItem) => void;
}

export default function SideBar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <aside
      style={{
        width: 236,
        height: "100vh",
        background: "#FFFFFF",
        borderRight: "1px solid #E8ECF0",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <SidebarLogo />
      <SidebarNav activeItem={activeItem} onItemClick={onItemClick} />
      <UpgradeBanner />
      <SidebarUserCard />
    </aside>
  );
}
