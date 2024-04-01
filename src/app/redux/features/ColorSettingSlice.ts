import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ColorContProps {
  contentColor: string;
}

const initialState: ColorContProps = {
  contentColor: "red",
};

const ColorSettingSlice = createSlice({
  name: "contentColor",
  initialState,
  reducers: {
    setContentColor: (state, action: PayloadAction<string>) => {
      state.contentColor = action.payload;
    },
  },
});

export const { setContentColor } = ColorSettingSlice.actions;
export default ColorSettingSlice.reducer;
