import React from "react";
import "./style.css";
const AltcoinSeasonIndex: React.FC = () => {
  const value = 47;

  return (
    <div style={{ width: "100%" }}>
      <p style={{ textAlign: "left", fontSize: "18px", fontWeight: "400" }}>
        <span className="altcoin-index">{value}</span>/100
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          fontWeight: 500,
        }}
      >
        <span style={{ color: "#A1A7BB" }}>Bitcoin (Биткоин)</span>
        <span style={{ color: "#A1A7BB" }}>Альтсезон</span>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: 6,
            background: `linear-gradient(to right, #fadb14, #a0d911, #52c41a, #16C784, #006d75)`,
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

export default AltcoinSeasonIndex;
