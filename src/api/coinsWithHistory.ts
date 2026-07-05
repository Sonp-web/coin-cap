import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCoins, type CoinType } from "./coinCapApi";
import { getHistoryCoin, type ResultType } from "./historyApi";

export interface CoinsWithHistoryType extends CoinType {
  history: ResultType[];
}
export const getCoinsWithHistory = createAsyncThunk<
  CoinsWithHistoryType[],
  { limit?: number; offset?: number; interval?: string } | undefined
>("coins/getCoinsWithHistory", async (params = {}, thunkAPI) => {
  const { limit = 10, offset = 0, interval = "m15" } = params || {};
  const coins = await thunkAPI.dispatch(getCoins({ limit, offset })).unwrap();

  const withHistory = await Promise.all(
    coins.map(async (coin) => {
      const history = await thunkAPI
        .dispatch(getHistoryCoin({ slug: coin.id, interval }))
        .unwrap();
      return { ...coin, history };
    }),
  );

  return withHistory;
});
