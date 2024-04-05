import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CircleMobProps {
  circleDashMoboffset: number;
}

const initialState: CircleMobProps = {
  circleDashMoboffset: 753,
};

const CircleDashMobSlice = createSlice({
  name: "circleDashMoboffset",
  initialState,
  reducers: {
    setCircleDashMoboffset: (state, action: PayloadAction<number>) => {
      state.circleDashMoboffset = action.payload;
    },
  },
});

export const { setCircleDashMoboffset } = CircleDashMobSlice.actions;
export default CircleDashMobSlice.reducer;
