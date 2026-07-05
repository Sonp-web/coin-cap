import "./App.css";
import CustomHeader from "./components/CustomHeader";
import { ConfigProvider } from "antd";
import InfoList from "./components/InfoList";
import NewsList from "./components/NewsList";
import CoinList from "./components/CoinList";
import Subscribe from "./components/Subscribe";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter, sans-serif",
        },
      }}
    >
      <CustomHeader />
      <InfoList />
      <NewsList />
      <CoinList />
      <Subscribe />
    </ConfigProvider>
  );
}

export default App;
