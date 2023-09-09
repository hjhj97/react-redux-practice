import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, step: 1 },
  reducers: {
    addCounter: (state) => {
      state.count = state.count + state.step;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});
export const { addCounter, setStep } = counterSlice.actions;
export default counterSlice.reducer;
