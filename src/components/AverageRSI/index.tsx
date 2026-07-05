import React from "react";
import "./style.css";
const AverageRSI: React.FC = () => {
  const value = 46.54;

  return (
    <div style={{ width: "100%" }}>
      <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "400" }}>
        <span className="altcoin-index">{value}</span>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          fontWeight: 500,
        }}
      >
        <span style={{ color: "#A1A7BB" }}>Перепроданность </span>
        <span style={{ color: "#A1A7BB" }}>Перекупленность</span>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: 6,
            background: `linear-gradient(to right, #16C784, #52c41a, #A1A7BB, #fa8c16, #f5222d)`,
            borderRadius: 4,
            position: "relative",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "-6px",
            left: `${value}%`,
            transform: "translateX(-50%)",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "white",
            border: `3px solid #222531`,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            transition: "left 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default AverageRSI;
