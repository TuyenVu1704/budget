import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const dataReducerSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload);
    },
    deleteData(state, action) {
      const newData = state.data.filter((item) => item.id !== action.payload);
      state.data = [...newData];
    },
  },
});

const { actions, reducer } = dataReducerSlice;

export const { addData, deleteData } = actions;

export default reducer;
