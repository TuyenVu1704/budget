import { configureStore } from "@reduxjs/toolkit";
import dataReducerSlice from "./dataReducerSlice";
const store = configureStore({
  reducer: {
    DATA: dataReducerSlice,
  },
});

export default store;
