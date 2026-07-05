import React from "react";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

export type ChartDataPoint = {
  date: string;
  capitalization: number;
};

const CapitalizationChart: React.FC<{
  data: ChartDataPoint[];
  color: string;
  width?: string;
  height?: string;
}> = ({ data, color, width = "240px", height = "40px" }) => {
  return (
    <div style={{ minWidth: width, height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <YAxis domain={["auto", "auto"]} hide={true} />
          <Line
            type="monotone"
            dataKey="capitalization"
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={false}
            isAnimationActive={false}
            name="Капитализация"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CapitalizationChart;
