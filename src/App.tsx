import "./App.css";
import CustomHeader from "./components/CustomHeader";
import { ConfigProvider } from "antd";
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
    </ConfigProvider>
  );
}

export default App;
