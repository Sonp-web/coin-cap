import { createSlice } from "@reduxjs/toolkit";
import {
  getCoinsWithHistory,
  type CoinsWithHistoryType,
} from "../../api/coinsWithHistory";

type CoinsType = {
  coins: CoinsWithHistoryType[];
};
const initialState: CoinsType = {
  coins: [],
};
const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoinsWithHistory.fulfilled, (state, action) => {
      console.log("✅ Данные загружены:", action.payload);
      state.coins = action.payload;
    });
  },
});
export default coinsSlice.reducer;
