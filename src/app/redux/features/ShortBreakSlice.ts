import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ShortBreakProps {
  shortBreak: string;
}

const initialState: ShortBreakProps = {
  shortBreak: "5:00",
};

const ShortBreakSlice = createSlice({
  name: "shortBreak",
  initialState,
  reducers: {
    setShortBreak: (state, action: PayloadAction<string>) => {
      state.shortBreak = action.payload;
    },
  },
});

export const { setShortBreak } = ShortBreakSlice.actions;
export default ShortBreakSlice.reducer;
