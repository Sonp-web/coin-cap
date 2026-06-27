import { StarFilled } from "@ant-design/icons";
import "./style.css";
const FavouritesModalProps: React.FC = () => {
  const tasks: string[] = [];

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
          <p>{item}</p>
        ))}
      </div>
    );
  }
};
export default FavouritesModalProps;
