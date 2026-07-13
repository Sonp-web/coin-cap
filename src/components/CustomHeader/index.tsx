import { Layout, Menu, Flex, type MenuProps } from "antd";
import "./style.css";
import InputButton from "../InputButton";
import FavouritesModal from "../FavouritesModal";
import ProfileModal from "../ProfileModal";
import { Outlet } from "react-router-dom";
import WalletModal from "../WalletModal";
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
            <WalletModal />
            <FavouritesModal />
            <InputButton />
            <ProfileModal />
          </Flex>
        </section>
      </Header>
      <Outlet />
    </>
  );
};
export default CustomHeader;
