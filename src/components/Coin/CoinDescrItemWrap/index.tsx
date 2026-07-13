import { Typography } from "antd";
import "./style.css";
type CoinDescrItemWrapPropsType = {
  title: string;
  text: string;
};
export const CoinDescrItemWrap: React.FC<CoinDescrItemWrapPropsType> = ({
  title,
  text,
}) => {
  return (
    <div className="coin-descr-item-wrap">
      <Typography.Paragraph className="coin-descr-item-wrap-title">
        {title}
      </Typography.Paragraph>
      <Typography.Paragraph className="coin-descr-item-wrap-text">
        {text}
      </Typography.Paragraph>
    </div>
  );
};
