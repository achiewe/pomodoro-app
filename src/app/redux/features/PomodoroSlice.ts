import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PomodoroProps {
  pomodoroTimer: string;
}

const initialState: PomodoroProps = {
  pomodoroTimer: "25",
};

const PomodoroSlice = createSlice({
  name: "pomodoroTimer",
  initialState,
  reducers: {
    setPomodoroTimer: (state, action: PayloadAction<string>) => {
      state.pomodoroTimer = action.payload;
    },
  },
});

export const { setPomodoroTimer } = PomodoroSlice.actions;
export default PomodoroSlice.reducer;
