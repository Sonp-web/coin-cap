import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type FilterType = {
  id: number;
  name: number;
  priceUsd: number;
  percent1: number;
  percent24: number;
  percent7: number;
  value: number;
  value24: number;
  trade: number;
};
const initialState: FilterType = {
  id: 0,
  name: 0,
  priceUsd: 0,
  percent1: 0,
  percent24: 0,
  percent7: 0,
  value: 0,
  value24: 0,
  trade: 0,
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: <K extends keyof FilterType>(
      state: FilterType,
      action: PayloadAction<K>,
    ) => {
      switch (state[action.payload]) {
        case 0:
          state[action.payload] = 1;
          break;
        case 1:
          state[action.payload] = -1;
          break;
        case -1:
          state[action.payload] = 0;
          break;
      }
      (Object.keys(state) as (keyof FilterType)[]).forEach((element) => {
        if (element != action.payload) {
          state[element] = 0;
        }
      });
    },
  },
});
export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
