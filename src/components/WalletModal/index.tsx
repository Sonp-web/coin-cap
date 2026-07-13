import { Popover } from "antd";
import "./style.css";
import { WalletButton } from "./WalletButton";
import { WalletModalProps } from "./WalletModalProps";
const WalletModal: React.FC = () => {
  return (
    <>
      <Popover
        placement="bottom"
        trigger="click"
        content={<WalletModalProps />}
        align={{
          offset: [-10, 0],
        }}
        overlayClassName="profile-modal"
      >
        <span className="favourites-modal__span">
          <WalletButton />
        </span>
      </Popover>
    </>
  );
};
export default WalletModal;
