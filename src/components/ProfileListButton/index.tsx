import { Button } from "antd";
import "./style.css";
import { RightOutlined } from "@ant-design/icons";

type MyObject = {
  text: string;
};
const loginMap: MyObject[] = [{ text: "Language" }, { text: "Currency" }];

const ProfileListButton: React.FC = () => {
  return (
    <>
      {loginMap.map((item) => (
        <Button className="profile-list-button">
          <p>{item.text}</p>
          <p className="profile-list-button_value">
            value
            <RightOutlined />
          </p>
        </Button>
      ))}
    </>
  );
};
export default ProfileListButton;
