import { Col, Button } from "antd";
import {
  StarOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  StarFilled,
} from "@ant-design/icons";
import "./style.css";
import { formatNumber } from "../../utils/formatNumber";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleCoin } from "../../redux/slices/favouritesSlice";
import { Link } from "react-router-dom";
import { BuyModal } from "../BuyModal";
export type CoinItemType = {
  id: string;
  url: string;
  name: string;
  symbol: string;
  priceUsd: string;
  percent1: number;
  percent24: number;
  percent7: number;
  value: string;
  value24: string;
  trade: string;
  capital7: React.ReactNode;
};
const CoinItem: React.FC<CoinItemType> = ({
  id,
  url,
  name,
  symbol,
  priceUsd,
  percent1,
  percent24,
  percent7,
  value,
  value24,
  trade,
  capital7,
}) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector((state) => state.favourites.favourites);
  const isFav = favourites.some((item) => item.id === id);
  return (
    <Link to={`/${url}`} className="test">
      <Col span={1} className="coin-item-icon">
        <Button
          onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            e.stopPropagation();
            e.preventDefault();
            dispatch(toggleCoin({ id, priceUsd, percent24 }));
          }}
          className="coin-item-icon"
        >
          {isFav ? (
            <StarFilled style={{ color: "yellow" }} />
          ) : (
            <StarOutlined />
          )}
        </Button>
      </Col>
      <Col span={1}>{id}</Col>
      <Col span={5} className="coin-list-name">
        {name}
      </Col>

      <Col span={1}>
        <BuyModal url={url} />
      </Col>
      <Col span={2} className="coin-list-price">
        {priceUsd}$
      </Col>
      <Col
        span={1}
        className={`coin-list-price ${percent1 > 0 ? "coin-list-price-green" : "coin-list-price-red"}`}
      >
        {percent1 > 0 ? (
          <CaretUpOutlined style={{ color: "#16c784" }} />
        ) : (
          <CaretDownOutlined style={{ color: "#ea3943" }} />
        )}
        {percent1}%
      </Col>
      <Col
        span={1}
        className={`coin-list-price ${percent24 > 0 ? "coin-list-price-green" : "coin-list-price-red"}`}
      >
        {percent24 > 0 ? (
          <CaretUpOutlined style={{ color: "#16c784" }} />
        ) : (
          <CaretDownOutlined style={{ color: "#ea3943" }} />
        )}
        {percent24}%
      </Col>
      <Col
        span={1}
        className={`coin-list-price ${percent7 > 0 ? "coin-list-price-green" : "coin-list-price-red"}`}
      >
        {percent7 > 0 ? (
          <CaretUpOutlined style={{ color: "#16c784" }} />
        ) : (
          <CaretDownOutlined style={{ color: "#ea3943" }} />
        )}
        {percent7}%
      </Col>
      <Col span={3} className="coin-list-price">
        {formatNumber(Number(value))}$
      </Col>
      <Col span={3} className="coin-list-price">
        {formatNumber(Number(value24))}$
      </Col>
      <Col span={3} className="coin-list-price">
        {formatNumber(Number(trade)) + " " + symbol}
      </Col>
      <Col span={2}>{capital7}</Col>
    </Link>
  );
};
export default CoinItem;
