import { Flex } from "antd";
import { useAppSelector } from "../../../hooks/hooks";
import { selectWallet } from "../../../redux/slices/walletSlice";
export const WalletModalProps: React.FC = () => {
  const wallet = useAppSelector(selectWallet);

  console.log(wallet);

  if (wallet.length == 0) {
    return (
      <div className="favourites-modal-props__wrapper">
        <p className="favourites-modal-props__temp">Add Coins to Your Wallet</p>
      </div>
    );
  } else {
    return (
      <div>
        {wallet.map((item) => (
          <Flex key={item.name} gap="middle">
            <p>{item.name}</p>
            <p>{item.priceUsd}</p>
            <p>{item.count}</p>
            <p>{item.value}</p>
          </Flex>
        ))}
      </div>
    );
  }
};
