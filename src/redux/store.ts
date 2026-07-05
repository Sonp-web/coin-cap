import { configureStore } from "@reduxjs/toolkit";
import coinsSlice from "./slices/coinsSilce";
import filterSlice from "./slices/filterSlice";
import favouritesSlice from "./slices/favouritesSlice";

const store = configureStore({
  reducer: {
    coins: coinsSlice,
    filter: filterSlice,
    favourites: favouritesSlice,
  },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
