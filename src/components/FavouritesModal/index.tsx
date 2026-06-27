import { Popover } from "antd";
import HeaderButton from "../HeaderButton/index";
import { StarOutlined } from "@ant-design/icons";
import "./style.css";
import FavouritesModalProps from "../FavouritesModalProps";

const text = <span>My Main Watchlist</span>;
const FavouritesModal: React.FC = () => {
  return (
    <>
      <Popover
        placement="bottom"
        trigger="hover"
        title={text}
        content={<FavouritesModalProps />}
        align={{
          offset: [0, 0],
        }}
        overlayClassName="favourites-modal"
      >
        <span className="favourites-modal__span">
          <HeaderButton icon={<StarOutlined />}>Избранное</HeaderButton>
        </span>
      </Popover>
    </>
  );
};
export default FavouritesModal;
