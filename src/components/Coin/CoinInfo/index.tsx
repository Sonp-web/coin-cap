import { Flex } from "antd";
import { CoinTitle } from "../CoinTitle";
import { CoinPrice } from "../CoinPrice";
import { CoinDescr } from "../CoinDescr";
import "./style.css";
export const CoinInfo: React.FC = () => {
  return (
    <Flex vertical className="coin-info">
      <CoinTitle />
      <CoinPrice />
      <CoinDescr />
    </Flex>
  );
};
