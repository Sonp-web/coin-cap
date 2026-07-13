import { Flex, Typography } from "antd";
import "./style.css";
export const CoinTitle: React.FC = () => {
  return (
    <Flex className="coin-title">
      <Typography.Title className="coin-title-title">Bitcoin</Typography.Title>
      <Typography.Paragraph className="coin-title-symbol">
        BTC
      </Typography.Paragraph>
      <Typography.Paragraph className="coin-title-rank">
        #1
      </Typography.Paragraph>
    </Flex>
  );
};
