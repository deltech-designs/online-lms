

import WelcomeBanner from "./Welcomebanner";
import StatsRow            from "./Statsrow";
import ContinueLearning    from "./Continueleaning";
import RecommendedCourses  from "./Recommendcourse";
import UpcomingDeadlines   from "./Upcomingdeadlines";
import ActivityChart       from "./Activitychart";


export default function DashboardPage() {
  return (
    <main style={{ flex: 1, overflowY: "auto", padding: "24px 28px 40px" }}>
      


     
      {/* Row 1 — greeting + streak */}
      <div style={{ marginBottom: 18  }}>

      <WelcomeBanner />
      </div>

      {/* Row 2 — four stat cards */}
      <div style={{ marginBottom: 18 }}>

      <StatsRow />
      </div>

      {/* Row 3 — two-column layout */}
      <div style={{ display: "flex", gap: 18 }}>

        {/* Left column — course sections */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 18 }}>
          <ContinueLearning />
          <RecommendedCourses />
        </div>

        {/* Right column — schedule + activity */}
        <div style={{ width: 268, flexShrink: 0, display: "flex", flexDirection: "column", gap: 18 }}>
          <UpcomingDeadlines />
          <ActivityChart />
        </div>
      </div>

   
    </main>
  );
}
