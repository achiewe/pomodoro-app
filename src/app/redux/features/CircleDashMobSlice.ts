import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface circleMobProps {
  circleDashoffset: number;
}

const initialState: circleMobProps = {
  circleDashoffset: 753,
};

const CircleDashMobSlice = createSlice({
  name: "circle1Dashoffset",
  initialState,
  reducers: {
    setCircleDashoffset: (state, action: PayloadAction<number>) => {
      state.circleDashoffset = action.payload;
    },
  },
});

export const { setCircleDashoffset } = CircleDashMobSlice.actions;
export default CircleDashMobSlice.reducer;
