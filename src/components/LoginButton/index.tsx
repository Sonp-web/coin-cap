import { Button } from "antd";
import "./style.css";
import type { TabsType } from "../LoginRegistrationModal";
export type LoginButtonProps = {
  openModal: (tab: TabsType) => void;
};
const LoginButton: React.FC<LoginButtonProps> = ({ openModal }) => {
  return (
    <Button
      type="primary"
      className="login-button"
      onClick={() => openModal("login")}
    >
      Войти
    </Button>
  );
};
export default LoginButton;
