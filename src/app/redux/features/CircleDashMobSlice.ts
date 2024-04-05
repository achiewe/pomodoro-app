import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface circleMobProps {
  circle1Dashoffset: number;
}

const initialState: circleMobProps = {
  circle1Dashoffset: 753,
};

const CircleDashMobSlice = createSlice({
  name: "circle1Dashoffset",
  initialState,
  reducers: {
    setCircleDashoffset: (state, action: PayloadAction<number>) => {
      state.circle1Dashoffset = action.payload;
    },
  },
});

export const { setCircleDashoffset } = CircleDashMobSlice.actions;
export default CircleDashMobSlice.reducer;
