import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getCoinData } from "../../api/coinData";
import { pick } from "../../utils/pick";
export type WalletCoinType = {
  name: string;
  count: string;
  priceUsd: string;
  value: string;
};
type WalletType = {
  wallet: WalletCoinType[];
};
const initialState: WalletType = {
  wallet: [],
};
const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    deleteCoinFromWallet(state, action: PayloadAction<{ name: string }>) {
      state.wallet.filter((item) => item.name !== action.payload.name);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoinData.fulfilled, (state, action) => {
      const temp = pick(action.payload, ["name", "count", "priceUsd"]);
      temp.priceUsd = Number(temp.priceUsd).toFixed(2);
      const index = state.wallet.findIndex(
        (item) => item.name === action.payload.name,
      );
      if (index === -1) {
        state.wallet.push({
          ...temp,
          value: (Number(temp.count) * Number(temp.priceUsd)).toFixed(2),
        });
      } else {
        state.wallet[index].count += action.payload.count;
        state.wallet[index].value = (
          Number(state.wallet[index].count) *
          Number(state.wallet[index].priceUsd)
        ).toFixed(2);
      }
    });
  },
});
export const selectWallet = (state: { wallet: typeof initialState }) =>
  state.wallet.wallet;
export const { deleteCoinFromWallet } = walletSlice.actions;
export default walletSlice.reducer;
