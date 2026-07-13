import { Popover } from "antd";
import { BuyModalProps } from "./BuyModalProps";
import { BuyButton } from "./BuyButton";
export type BuyModalType = {
  url: string;
};
export const BuyModal: React.FC<BuyModalType> = ({ url }) => {
  return (
    <>
      <Popover
        placement="bottom"
        trigger="click"
        content={<BuyModalProps url={url}/>}
        align={{
          offset: [-10, 0],
        }}
        overlayClassName="profile-modal"
      >
        <span className="favourites-modal__span">
          <BuyButton  />
        </span>
      </Popover>
    </>
  );
};
