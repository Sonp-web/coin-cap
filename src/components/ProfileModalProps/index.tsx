import "./style.css";
import { Flex } from "antd";
import LoginButton from "../LoginButton";
import RegistrationButton from "../RegistrationButton";
import ProfileListButton from "../ProfileListButton";
import ThemeChoice from "../ThemeChoice";
import ProfileSettings from "../ProfileSettings";
import LoginRegistrationModal from "../LoginRegistrationModal";

const ProfileModalProps: React.FC = () => {
  return (
    <Flex gap="small" vertical>
      <Flex gap="medium" className="profile-modal-props_wrapper">
        <LoginRegistrationModal />
      </Flex>
      <hr className="profile-modal-props__hr" />
      <ProfileSettings />
      {/* // <ProfileListButton /> */}
      <ThemeChoice />
    </Flex>
  );
};
export default ProfileModalProps;
