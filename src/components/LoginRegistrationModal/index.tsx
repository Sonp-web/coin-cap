import { useState } from "react";
import LoginButton from "../LoginButton";
import RegistrationButton from "../RegistrationButton";
import { Modal, Tabs, type TabsProps, Flex } from "antd";
import "./style.css";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
export type TabsType = "login" | "registration";
const LoginRegistrationModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("login");

  const openModal = (tab: TabsType) => {
    setActiveTab(tab);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items: TabsProps["items"] = [
    {
      key: "login",
      label: "Войти",
      children: <LoginForm />,
    },
    {
      key: "registration",
      label: "Зарегистрироваться",
      children: <RegistrationForm />,
    },
  ];

  return (
    <div className="login-registration">
      <Flex gap="small">
        <LoginButton openModal={openModal} />
        <RegistrationButton openModal={openModal} />
      </Flex>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={496}
        className="login-registration-modal"
      >
        <Tabs
          activeKey={activeTab}
          items={items}
          onChange={setActiveTab}
          className="login-registration-tabs"
        />
      </Modal>
    </div>
  );
};
export default LoginRegistrationModal;
