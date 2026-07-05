import "./style.css";
import { Button } from "antd";
export type NewsItemType = {
  text: string;
};
const NewsItem: React.FC<NewsItemType> = ({ text }) => {
  return <Button className="news-item">{text}</Button>;
};
export default NewsItem;
