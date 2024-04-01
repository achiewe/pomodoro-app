import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ShortBreakProps {
  shortBreak: number;
}

const initialState: ShortBreakProps = {
  shortBreak: 5,
};

const ShortBreakSlice = createSlice({
  name: "shortBreak",
  initialState,
  reducers: {
    setShortBreak: (state, action: PayloadAction<number>) => {
      state.shortBreak = action.payload;
    },
  },
});

export const { setShortBreak } = ShortBreakSlice.actions;
export default ShortBreakSlice.reducer;
