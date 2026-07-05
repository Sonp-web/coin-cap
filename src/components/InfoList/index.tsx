import { Row, Col, Flex } from "antd";
import InfoItem, { type InfoItemType } from "../InfoItem";
import "./style.css";
import FearAndGreedSimple from "../FearAndGreedSimple";
import AltcoinSeasonIndex from "../AltcoinSeasonIndex";
import AverageRSI from "../AverageRSI";

const items: InfoItemType[] = [
  { title: "Рын. капитализация", value: "2.09T", percent: 0.5 },
  { title: "CMC20", value: "121.99", percent: -0.42 },
];
const InfoList: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]} className="info-list-wrapper">
        {items.map((item) => (
          <Col span={4} key={crypto.randomUUID()}>
            <div className="info-item-wrapper">
              <InfoItem
                title={item.title}
                value={item.value}
                percent={item.percent}
              />
            </div>
          </Col>
        ))}{" "}
        <Col span={4}>
          <Flex vertical align="flex-start" className="info-item-wrapper">
            <p className="info-item-title">Страх и жадность</p>
            <FearAndGreedSimple />
          </Flex>
        </Col>
        <Col span={4}>
          <Flex vertical align="flex-start" className="info-item-wrapper">
            <p className="info-item-title">Альтсезон</p>
            <AltcoinSeasonIndex />
          </Flex>
        </Col>
        <Col span={4}>
          <Flex vertical align="flex-start" className="info-item-wrapper">
            <p className="info-item-title">Средний RSI по криптовалютам</p>
            <AverageRSI />
          </Flex>
        </Col>
        <Col span={4}>
          <Flex vertical align="flex-start" className="info-item-wrapper">
            <p className="info-item-title">Заглушка</p>
            {/* <AverageRSI /> */}
          </Flex>
        </Col>
      </Row>
    </>
  );
};
export default InfoList;
