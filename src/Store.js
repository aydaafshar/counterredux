import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increase: (state) => {
      state.count = state.count + 1;
    },
    decrease: (state) => {
      state.count = state.count - 1;
    },
    set: (state, action) => {
      state.count = action.payload.count;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
export const { increase, decrease, set, reset } = counterSlice.actions;
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
