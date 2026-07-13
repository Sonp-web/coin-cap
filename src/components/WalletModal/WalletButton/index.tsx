import { PieChartOutlined } from "@ant-design/icons";
import { Button } from "antd";
export const WalletButton: React.FC = () => {
  return (
    <Button className="header-button">
      <PieChartOutlined />
      Портфель
    </Button>
  );
};
