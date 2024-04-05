import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CircleMobProps {
  circleDashoffset: number;
}

const initialState: CircleMobProps = {
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
