import { Button, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./style.css";
const ProfileButton: React.FC = () => {
  return (
    <>
      <Button className="profile-button__button">
        <Flex className="profile-button__flex">
          <MenuOutlined className="profile-button__icon" />
          <img
            className="profile-button__img"
            alt="basic"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Flex>
      </Button>
    </>
  );
};
export default ProfileButton;
