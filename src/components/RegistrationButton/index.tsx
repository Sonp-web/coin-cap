import type { TabsType } from "../LoginRegistrationModal";
import "./style.css";
import { Button } from "antd";
export type RegistrationButtonProps = {
  openModal: (tab: TabsType) => void;
};
const RegistrationButton: React.FC<RegistrationButtonProps> = ({
  openModal,
}) => {
  return (
    <Button
      type="default"
      className="registration-button"
      onClick={() => openModal("registration")}
    >
      Зарегистрироваться
    </Button>
  );
};
export default RegistrationButton;
