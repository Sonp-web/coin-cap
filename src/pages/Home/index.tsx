import InfoList from "../../components/InfoList";
import NewsList from "../../components/NewsList";
import CoinList from "../../components/CoinList";
import Subscribe from "../../components/Subscribe";
const Home: React.FC = () => {
  return (
    <>
      <InfoList />
      <NewsList />
      <CoinList />
      <Subscribe />
    </>
  );
};
export default Home;
