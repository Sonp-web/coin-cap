import { Col, Row } from "antd";
import { CoinDescrItemWrap } from "../CoinDescrItemWrap";
import "./style.css";
export const CoinDescr: React.FC = () => {
  return (
    <div className="coin-descr">
      <Row gutter={[10, 12]}>
        <Col span={24}>
          <CoinDescrItemWrap title="Рын. капитализация" text="1,28T $" />
        </Col>

        <Col span={12}>
          <CoinDescrItemWrap title="Объем (24ч)" text="31,15B $" />
        </Col>
        <Col span={12}>
          <CoinDescrItemWrap title="Об./Р.кап (24 ч.)" text="2,6%" />
        </Col>

        <Col span={24}>
          <CoinDescrItemWrap title="FDV" text="1,34T $" />
        </Col>

        <Col span={12}>
          <CoinDescrItemWrap title="Общ. предложение" text="20,05M BTC" />
        </Col>
        <Col span={12}>
          <CoinDescrItemWrap title="Максимальное предложение" text="21M BTC" />
        </Col>

        <Col span={12}>
          <CoinDescrItemWrap title="Оборотное предложение" text="20,05M BTC" />
        </Col>
        <Col span={12}>
          <CoinDescrItemWrap title="Казначейские активы" text="1,33M BTC" />
        </Col>
      </Row>
    </div>
  );
};
