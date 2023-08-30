import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slice";

export default configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});
