import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LongBreakProps {
  longBreak: string;
}

const initialState: LongBreakProps = {
  longBreak: "15",
};

const LongBreakSlice = createSlice({
  name: "longBreak",
  initialState,
  reducers: {
    setLongBreak: (state, action: PayloadAction<string>) => {
      state.longBreak = action.payload;
    },
  },
});

export const { setLongBreak } = LongBreakSlice.actions;
export default LongBreakSlice.reducer;
