import { Popover } from "antd";
import "./style.css";
import ProfileButton from "../ProfileButton";
import ProfileModalProps from "../ProfileModalProps";
const ProfileModal: React.FC = () => {
  return (
    <>
      <Popover
        placement="bottom"
        trigger="click"
        content={<ProfileModalProps />}
        align={{
          offset: [-10, 0],
        }}
        overlayClassName="profile-modal"
      >
        <span className="favourites-modal__span">
          <ProfileButton />
        </span>
      </Popover>
    </>
  );
};
export default ProfileModal;
