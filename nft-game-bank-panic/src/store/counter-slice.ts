import { createSlice } from "@reduxjs/toolkit";

// Create Slice combine the actions, initialState, and reducer into 1 function
const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    value: 0,
    name: "Redux toolkit example"
  },
  reducers: {
    // Action increment
    increment: (state) => {
      state.value += 1;
    },
    // Action decrement
    decrement: (state) => {
      state.value -= 1;
    },
    // Action incrememtnByAmount
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
