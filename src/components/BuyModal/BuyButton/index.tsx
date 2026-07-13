import { Button } from "antd";
export const BuyButton: React.FC = () => {
  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
      }}
      className="coin-item-button"
    >
      Покупка
    </Button>
  );
};
