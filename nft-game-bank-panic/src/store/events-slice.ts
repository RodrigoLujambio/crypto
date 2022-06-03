import { createSlice } from "@reduxjs/toolkit";
import { gameEvents, STARTGAME } from "../scenes/gameEvents";
// Create Slice combine the actions, initialState, and reducer into 1 function
const eventsSlice = createSlice({
  name: "GameStore",
  initialState: {
    value: 0,
    name: "Redux toolkit example",
  },
  reducers: {
    // Action startGame
    startGame: (state, { payload }: any) => {
      state.value += 1;
      console.log("start game action",payload);
      gameEvents.emit(STARTGAME, eventsSlice)
    },
  }
});

// Export actions
export const { startGame } = eventsSlice.actions;

// Export reducer
export default eventsSlice.reducer;
