import { Flex, Typography } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import NewsItem from "../../NewsItem";
import "./style.css";
export const CoinPrice: React.FC = () => {
  return (
    <div className="coin-price">
      <Flex className="coin-price-flex">
        <Typography.Paragraph className="coin-price-price">
          64028,04$
        </Typography.Paragraph>
        <div>
          {1 ? (
            <CaretUpOutlined style={{ color: "#16c784" }} />
          ) : (
            <CaretDownOutlined style={{ color: "#ea3943" }} />
          )}
          2,85%
        </div>
      </Flex>

      <NewsItem text="Почему цена на BTC не выросла?" />
    </div>
  );
};
