import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavouritesCoinType = {
  id: string;
  priceUsd: string;
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
    toggleCoin(state, action: PayloadAction<FavouritesCoinType>) {
      const index = state.favourites.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.favourites.splice(index, 1);
      } else {
        state.favourites.push(action.payload);
      }
    },
  },
});

export default favouritesSlice.reducer;
export const { toggleCoin } = favouritesSlice.actions;
