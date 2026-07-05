import { Row, Col, Button, Typography } from "antd";
import "./style.css";
import CapitalizationChart from "../CapitalizationChart";
import CoinItem from "../CoinItem";
import ArrowsUpDown from "../ArrowsUpDown";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { getCoinsWithHistory } from "../../api/coinsWithHistory";
import PaginationControls from "../PaginationControls";
import { setFilter } from "../../redux/slices/filterSlice";

const CoinList: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCoinsWithHistory());
  }, [dispatch]);
  const coins = useAppSelector((state) => state.coins.coins);
  const filter = useAppSelector((state) => state.filter);
  console.log(coins);

  return (
    <section>
      <div className="coin-list-wrapper">
        <Row gutter={[16, 16]} className="coin-list">
          <Col span={1}></Col>
          <Col span={1}>#</Col>
          <Col span={5} className="coin-list-name">
            <Button onClick={() => dispatch(setFilter("name"))}>
              Имя
              <ArrowsUpDown isDone={filter.name} />
            </Button>
          </Col>
          <Col span={1}></Col>
          <Col span={2} className="coin-list-price">
            <Button onClick={() => dispatch(setFilter("priceUsd"))}>
              Цена
              <ArrowsUpDown isDone={filter.priceUsd} />
            </Button>
          </Col>
          <Col span={1} className="coin-list-price">
            <Button onClick={() => dispatch(setFilter("percent1"))}>
              1ч%
              <ArrowsUpDown isDone={filter.percent1} />
            </Button>
          </Col>
          <Col span={1} className="coin-list-price">
            <Button onClick={() => dispatch(setFilter("percent24"))}>
              24ч%
              <ArrowsUpDown isDone={filter.percent24} />
            </Button>
          </Col>
          <Col span={1} className="coin-list-price">
            <Button onClick={() => dispatch(setFilter("percent7"))}>
              7дн%
              <ArrowsUpDown isDone={filter.percent7} />
            </Button>
          </Col>
          <Col span={3} className="coin-list-price">
            <Button onClick={() => dispatch(setFilter("value"))}>
              Рын. капитализация
              <ArrowsUpDown isDone={filter.value} />
            </Button>
          </Col>
          <Col span={3} className="coin-list-price">
            <Button onClick={() => dispatch(setFilter("value24"))}>
              Объем (24 ч)
              <ArrowsUpDown isDone={filter.value24} />
            </Button>
          </Col>
          <Col span={3} className="coin-list-price">
            <Button onClick={() => dispatch(setFilter("trade"))}>
              Оборотное предложение
              <ArrowsUpDown isDone={filter.trade} />
            </Button>
          </Col>
          <Col span={2}>Цена % (7дн)</Col>
        </Row>
        <Row
          gutter={[0, 0]}
          className="coin-list-items"
          style={{ padding: "10px 0", alignItems: "center" }}
        >
          {coins.map((item) => (
            <CoinItem
              key={crypto.randomUUID()}
              id={item.rank}
              symbol={item.symbol}
              name={item.name}
              priceUsd={item.priceUsd}
              percent1={Number(
                (
                  ((Number(item.vwap24Hr) - Number(item.priceUsd)) /
                    Number(item.vwap24Hr)) *
                  100
                ).toFixed(2),
              )}
              percent24={Number(item.changePercent24Hr)}
              percent7={Number(
                (
                  ((Number(
                    item.history[item.history.length - 1].capitalization,
                  ) -
                    Number(item.history[0].capitalization)) /
                    Number(item.history[0].capitalization)) *
                  100
                ).toFixed(2),
              )}
              value={item.marketCapUsd}
              value24={item.volumeUsd24Hr}
              trade={item.supply}
              capital7={
                <CapitalizationChart
                  data={item.history}
                  color={`${
                    ((Number(
                      item.history[item.history.length - 1].capitalization,
                    ) -
                      Number(item.history[0].capitalization)) /
                      Number(item.history[0].capitalization)) *
                      100 >
                    0
                      ? "#16c784"
                      : "#ea3943"
                  }`}
                  width="84px"
                  height="36px"
                />
              }
            />
          ))}
        </Row>
      </div>
      <PaginationControls />
      <Typography.Title level={2} className="coin-list-title">
        Топ-10 Криптовалюты по рыночной капитализации
      </Typography.Title>
      <Typography.Paragraph className="coin-list-paragraph">
        Глобальная капитализация рынка криптовалют составляет $2.07T., что на
        0.49% меньше, чем за предыдущий день.
      </Typography.Paragraph>
    </section>
  );
};
export default CoinList;
