import { configureStore } from "@reduxjs/toolkit";
import ShopingCartReducer from "./ShoppingCart";

export const store = configureStore({
  reducer: {
    shoppingCart: ShopingCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
