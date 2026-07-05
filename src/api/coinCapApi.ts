import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./apiConfig";
export type CoinType = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  
};
type ResultGetCoinsType = {
  timestamp: number;
  data: CoinType[];
};
export type GetCoinsType = {
  limit?: number;
  offset?: number;
};

export const getCoins = createAsyncThunk<CoinType[], GetCoinsType>(
  "/assets",
  async ({ limit = 10, offset = 0 }, thunkAPI) => {
    try {
      const { data } = await instance.get<ResultGetCoinsType>("/assets", {
        params: { limit, offset },
      });
      const result = data.data.map((item) => {
        return {
          id: item.id,
          rank: item.rank,
          symbol: item.symbol,
          name: item.name,
          supply: Number(item.supply).toFixed(2),
          marketCapUsd: Number(item.marketCapUsd).toFixed(2),
          volumeUsd24Hr: Number(item.volumeUsd24Hr).toFixed(2),
          priceUsd: Number(item.priceUsd).toFixed(2),
          changePercent24Hr: Number(item.changePercent24Hr).toFixed(2),
          vwap24Hr: Number(item.vwap24Hr).toFixed(2),
        };
      });

      return result;
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
