import { StarFilled } from "@ant-design/icons";
import "./style.css";
import { useAppSelector } from "../../hooks/hooks";
const FavouritesModalProps: React.FC = () => {
  const tasks = useAppSelector((state) => state.favourites.favourites);

  if (tasks.length == 0) {
    return (
      <div className="favourites-modal-props__wrapper">
        <StarFilled className="favourites-modal-props__star" />
        <p className="favourites-modal-props__temp">
          Add Coins to Your Watchlist
        </p>
      </div>
    );
  } else {
    return (
      <div>
        {tasks.map((item) => (
          <p key={item.id}>{item.id}</p>
        ))}
      </div>
    );
  }
};
export default FavouritesModalProps;
