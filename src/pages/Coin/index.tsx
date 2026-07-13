import { Col, Row } from "antd";
import { CoinInfo } from "../../components/Coin/CoinInfo";
import CapitalizationChart from "../../components/CapitalizationChart";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

export const Coin: React.FC = () => {
  const { id } = useParams();

  const coins = useAppSelector((state) => state.coins.coins);
  console.log(coins);

  const coin = coins.find((item) => item.id === id);
  console.log(coin);

  if (!coin) {
    return <div>123</div>;
  }

  return (
    <>
      <Row>
        <Col span={6}>
          <CoinInfo />
        </Col>
        <Col span={18}>
          {" "}
          <CapitalizationChart
            data={coin.history}
            color={`${
              ((Number(coin.history[coin.history.length - 1].capitalization) -
                Number(coin.history[0].capitalization)) /
                Number(coin.history[0].capitalization)) *
                100 >
              0
                ? "#16c784"
                : "#ea3943"
            }`}
            width="904px"
            height="470px"
          />
        </Col>
      </Row>
    </>
  );
};
