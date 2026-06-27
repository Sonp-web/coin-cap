import { Button } from "antd";
import type { ButtonType } from "../RegistrationForm";
import "./style.css";

const RegistrationFormButton: React.FC<ButtonType> = ({ icon, text }) => {
  return (
    <>
      <Button className="registration-form-button">
        {icon}
        <p>{text}</p>
      </Button>
    </>
  );
};
export default RegistrationFormButton;
