import { useState } from "react";
import type { NavItem } from "../../types";
import TopBar from "../Navbar/Topbar";
import SideBar from "../Sidebar/SideBar";
import DashboardPage from "./Dashboardpage";

export default function DashboardLayout() {
  const [activeItem, setActiveItem] = useState<NavItem>("Dashboard");

  const handleItemClick = (item: NavItem) => {
    setActiveItem(item);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* LEFT */}
      <SideBar activeItem={activeItem} onItemClick={handleItemClick} />

      {/* RIGHT */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* TOP */}
        <TopBar />

        {/* CONTENT */}
        <DashboardPage />
      </div>
    </div>
  );
}
