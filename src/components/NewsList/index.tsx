import { Carousel } from "antd";
import type { NewsItemType } from "../NewsItem";
import NewsItem from "../NewsItem";
import "./style.css";
const data: NewsItemType[] = [
  { text: "CoinDesk: Bitcoin, Ethereum, Crypto News and Price Data" },
  { text: "Why a selloff in gold and silver is dragging bitcoin down" },
  {
    text: "What Robinhood’s recent layoffs say about the current state of crypto investments",
  },
  {
    text: "Tether putting $23 billion gold stockpile to work with bullion-backed loans",
  },
  {
    text: "Polymarket hack updated to $3.1 million days after the platform promised users full refunds",
  },
  { text: "Cointelegraph.com News" },
  { text: "Fidelity rebuts claims Bitcoin becomes less secure after halvings" },
  { text: "Here’s what happened in crypto today" },
  { text: "Bitcoin faces fresh capitulation risk as 50K BTC moved at a loss" },
  {
    text: "DCG-backed Yuma launches fund offering institutional exposure to Bittensor",
  },
];
const NewsList: React.FC = () => {
  return (
    <section className="news-list-wrapper">
      <Carousel
        autoplay
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        className="news-carousel"
      >
        {data.map((item) => (
          <NewsItem text={item.text} />
        ))}
      </Carousel>
    </section>
  );
};

export default NewsList;
