import React from "react";
import "./style.css";

const FearAndGreedIndex: React.FC = () => {
  const value = 17;

  const getStatus = (val: number) => {
    if (val <= 25) return "Сильный страх";
    if (val <= 45) return "Страх";
    if (val <= 55) return "Нейтрально";
    if (val <= 75) return "Жадность";
    return "Сильная жадность";
  };

  const cx = 70;
  const cy = 65;
  const r = 55;

  const angle = ((value / 100) * 180 - 180) * (Math.PI / 180);
  const px = cx + r * Math.cos(angle);
  const py = cy + r * Math.sin(angle);

  return (
    <svg width={140} height={70} viewBox="0 0 140 70" className="w100">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f5222d" />
          <stop offset="25%" stopColor="#fa8c16" />
          <stop offset="50%" stopColor="#fadb14" />
          <stop offset="75%" stopColor="#52c41a" />
          <stop offset="100%" stopColor="#006d75" />
        </linearGradient>
      </defs>

      <path
        d="M 15 65 A 55 55 0 0 1 125 65"
        fill="none"
        stroke="url(#grad)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <circle
        cx={px}
        cy={py}
        r="5"
        fill="white"
        stroke="#222531"
        strokeWidth="2"
      />

      <text
        x="70"
        y="42"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="20"
        fontWeight="700"
        fill="#fff"
      >
        {value}
      </text>
      <text
        x="70"
        y="63"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="11"
        fontWeight="400"
        fill="#A1A7BB"
      >
        {getStatus(value)}
      </text>
    </svg>
  );
};

export default FearAndGreedIndex;
