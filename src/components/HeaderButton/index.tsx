import { Button } from "antd";
import "./style.css";
interface WrapperProps {
  icon?: React.ReactNode;
  children: string;
}
const HeaderButton: React.FC<WrapperProps> = ({ children, icon }) => {
  return (
    <>
      <Button className="header-button">
        {icon}
        {children}
      </Button>
    </>
  );
};
export default HeaderButton;
