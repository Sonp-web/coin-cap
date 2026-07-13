import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CoinType } from "./coinCapApi";
import instance from "./apiConfig";
export type CoinDataType = {
  timestamp: string;
  data: CoinType;
};
export interface GetCoinDataType extends CoinType {
  count: string;
}
export const getCoinData = createAsyncThunk<
  GetCoinDataType,
  { url: string; count: string }
>("assets/coin", async ({ url, count }) => {
  const { data } = await instance.get<CoinDataType>(`/assets/${url}`);
  const result = data.data;
  return { ...result, count: count };
});
