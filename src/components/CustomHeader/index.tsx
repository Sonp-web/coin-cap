import { Layout, Menu, Flex, type MenuProps } from "antd";
import "./style.css";
import HeaderButton from "../HeaderButton";
import { PieChartOutlined } from "@ant-design/icons";
import InputButton from "../InputButton";
import LoginButton from "../LoginButton";
import FavouritesModal from "../FavouritesModal";
import ProfileModal from "../ProfileModal";
const { Header } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  lineHeight: "64px",
  borderBottom: "solid 1px #323546",
};

const navBar: MenuProps["items"] = ["Криптовалюты", "Биржи", "Конвертер"].map(
  (key) => ({
    key,
    label: key,
  }),
);

const CustomHeader: React.FC = () => {
  return (
    <>
      <Header style={headerStyle}>
        <section className="header-section">
          <Menu
            className="custom-menu"
            mode="horizontal"
            defaultSelectedKeys={["Криптовалюты"]}
            items={navBar}
          />
          <Flex align="center" gap="small">
            <HeaderButton icon={<PieChartOutlined />}>Портфель</HeaderButton>

            <FavouritesModal />
            <InputButton />
            <ProfileModal />
          </Flex>
        </section>
      </Header>
    </>
  );
};
export default CustomHeader;
