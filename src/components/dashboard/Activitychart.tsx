

import { ACTIVITY_DAYS, ACTIVITY_HEIGHTS } from "../../data";

export default function ActivityChart() {
  return (
    <>
    
      <div style={{
        background: "#FFF",
        border: "1px solid #E8ECF0",
        borderRadius: 16,
        padding: "18px",
      }}>
        {/* Title */}
        <p style={{
          margin: "0 0 14px",
          fontWeight: 700,
          fontSize: 14,
          color: "#0F172A",
          fontFamily: "'Sora', sans-serif",
        }}>
          Learning Activity
        </p>

        {/* Bar chart */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 7, height: 76 }}>
          {ACTIVITY_DAYS.map((day, index) => {
            // highlight Thursday and Sunday differently
            const isHighlighted = index === 3;
            const isMedium      = index === 6;

            const barColor = isHighlighted
              ? "linear-gradient(180deg, #3B9EFF, #5B6EF7)"
              : isMedium
              ? "linear-gradient(180deg, #A5B4FC, #C7D2FE)"
              : "#E8ECF0";

            return (
              <div
                key={day}
                style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
              >
                {/* The bar itself */}
                <div style={{
                  width: "100%",
                  height: ACTIVITY_HEIGHTS[index],
                  background: barColor,
                  borderRadius: "4px 4px 0 0",
                }} />

                {/* Day label below the bar */}
                <span style={{ fontSize: 9, color: "#94A3B8", fontWeight: 500 }}>
                  {day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
