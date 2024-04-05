import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CircleTabProps {
  circleDashTaboffset: number;
}

const initialState: CircleTabProps = {
  circleDashTaboffset: 1161,
};

const CircleDashTabSlice = createSlice({
  name: "circleDashTaboffset",
  initialState,
  reducers: {
    setCircleDashTaboffset: (state, action: PayloadAction<number>) => {
      state.circleDashTaboffset = action.payload;
    },
  },
});

export const { setCircleDashTaboffset } = CircleDashTabSlice.actions;
export default CircleDashTabSlice.reducer;
