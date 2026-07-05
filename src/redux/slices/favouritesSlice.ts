import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavouritesCoinType = {
  id: string;
  priceUsd: number;
  percent24: number;
};
type FavouritesCoinsType = {
  favourites: FavouritesCoinType[];
};
const initialState: FavouritesCoinsType = {
  favourites: [],
};
const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addCoin(state, action: PayloadAction<FavouritesCoinType>) {
      state.favourites.push(action.payload);
    },
  },
});
export default favouritesSlice.reducer;
export const { addCoin } = favouritesSlice.actions;
