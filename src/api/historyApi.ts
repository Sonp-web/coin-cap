import instance from "./apiConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
export type HistoryCoinType = {
  circulatingSupply: number;
  priceUsd: string;
  time: number;
  date: string;
};
export type GetHistoryCoinType = {
  slug: string;
  interval?: string;
};
type ResultGetHyctoryCoinType = {
  timestamp: number;
  data: HistoryCoinType[];
};
export type ResultType = {
  date: string;
  capitalization: string;
};
export const getHistoryCoin = createAsyncThunk<
  ResultType[],
  GetHistoryCoinType
>("/assets/slug/history", async ({ slug, interval = "m15" }) => {
  const { data } = await instance.get<ResultGetHyctoryCoinType>(
    `/assets/${slug}/history`,
    { params: { slug: slug, interval: interval } },
  );
  const result = data.data.map((item) => {
    return {
      date: item.date,
      capitalization: item.priceUsd,
    };
  });

  return result;
});
