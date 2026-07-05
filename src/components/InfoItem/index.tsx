import CapitalizationChart from "../CapitalizationChart";
import "./style.css";
import { Flex } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
export type InfoItemType = {
  title: string;
  value: string;
  percent: number;
};
const InfoItem: React.FC<InfoItemType> = ({ title, value, percent }) => {
  return (
    <Flex vertical align="flex-start">
      <p className="info-item-title">{title}</p>
      <Flex>
        <p className="info-item-value">${value}</p>
        <span
          className={`info-item-percent ${percent > 0 ? "info-item-percent-green" : "info-item-percent-red"}`}
        >
          {percent > 0 ? (
            <CaretUpOutlined style={{ color: "#16c784" }} />
          ) : (
            <CaretDownOutlined style={{ color: "#ea3943" }} />
          )}
          {percent}%
        </span>
      </Flex>
      <CapitalizationChart
        color={percent > 0 ? "#16c784" : "#ea3943"}
        data={[
          { date: "2026-05-27", capitalization: "1420000000000" },
          { date: "2026-05-28", capitalization: "1410000000000" },
          { date: "2026-05-29", capitalization: "1395000000000" },
          { date: "2026-05-30", capitalization: "1402000000000" },
          { date: "2026-05-31", capitalization: "1388000000000" },
          { date: "2026-06-01", capitalization: "1375000000000" },
          { date: "2026-06-02", capitalization: "1360000000000" },
          { date: "2026-06-03", capitalization: "1345000000000" },
          { date: "2026-06-04", capitalization: "1352000000000" },
          { date: "2026-06-05", capitalization: "1338000000000" },
          { date: "2026-06-06", capitalization: "1325000000000" },
          { date: "2026-06-07", capitalization: "1310000000000" },
          { date: "2026-06-08", capitalization: "1298000000000" },
          { date: "2026-06-09", capitalization: "1305000000000" },
          { date: "2026-06-10", capitalization: "1290000000000" },
          { date: "2026-06-11", capitalization: "1275000000000" },
          { date: "2026-06-12", capitalization: "1260000000000" },
          { date: "2026-06-13", capitalization: "1272000000000" },
          { date: "2026-06-14", capitalization: "1285000000000" },
          { date: "2026-06-15", capitalization: "1292000000000" },
          { date: "2026-06-16", capitalization: "1300000000000" },
          { date: "2026-06-17", capitalization: "1295000000000" },
          { date: "2026-06-18", capitalization: "1288000000000" },
          { date: "2026-06-19", capitalization: "1279000000000" },
          { date: "2026-06-20", capitalization: "1265000000000" },
          { date: "2026-06-21", capitalization: "1270000000000" },
          { date: "2026-06-22", capitalization: "1282000000000" },
          { date: "2026-06-23", capitalization: "1290000000000" },
          { date: "2026-06-24", capitalization: "1285000000000" },
          { date: "2026-06-25", capitalization: "1278000000000" },
          { date: "2026-06-26", capitalization: "1280000000000" },
        ]}
      />
    </Flex>
  );
};
export default InfoItem;
