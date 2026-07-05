import React from "react";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

export type ChartDataPoint = {
  date: string;
  capitalization: string;
};

// const chartData: ChartDataPoint[] = [
//   { date: "2026-05-27", capitalization: 1420000000000 },
//   { date: "2026-05-28", capitalization: 1410000000000 },
//   { date: "2026-05-29", capitalization: 1395000000000 },
//   { date: "2026-05-30", capitalization: 1402000000000 },
//   { date: "2026-05-31", capitalization: 1388000000000 },
//   { date: "2026-06-01", capitalization: 1375000000000 },
//   { date: "2026-06-02", capitalization: 1360000000000 },
//   { date: "2026-06-03", capitalization: 1345000000000 },
//   { date: "2026-06-04", capitalization: 1352000000000 },
//   { date: "2026-06-05", capitalization: 1338000000000 },
//   { date: "2026-06-06", capitalization: 1325000000000 },
//   { date: "2026-06-07", capitalization: 1310000000000 },
//   { date: "2026-06-08", capitalization: 1298000000000 },
//   { date: "2026-06-09", capitalization: 1305000000000 },
//   { date: "2026-06-10", capitalization: 1290000000000 },
//   { date: "2026-06-11", capitalization: 1275000000000 },
//   { date: "2026-06-12", capitalization: 1260000000000 },
//   { date: "2026-06-13", capitalization: 1272000000000 },
//   { date: "2026-06-14", capitalization: 1285000000000 },
//   { date: "2026-06-15", capitalization: 1292000000000 },
//   { date: "2026-06-16", capitalization: 1300000000000 },
//   { date: "2026-06-17", capitalization: 1295000000000 },
//   { date: "2026-06-18", capitalization: 1288000000000 },
//   { date: "2026-06-19", capitalization: 1279000000000 },
//   { date: "2026-06-20", capitalization: 1265000000000 },
//   { date: "2026-06-21", capitalization: 1270000000000 },
//   { date: "2026-06-22", capitalization: 1282000000000 },
//   { date: "2026-06-23", capitalization: 1290000000000 },
//   { date: "2026-06-24", capitalization: 1285000000000 },
//   { date: "2026-06-25", capitalization: 1278000000000 },
//   { date: "2026-06-26", capitalization: 1280000000000 },
// ];

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
