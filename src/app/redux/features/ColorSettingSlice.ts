import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ColorContProps {
  ContentColor: string;
}

const initialState: ColorContProps = {
  ContentColor: "red",
};

const ColorSettingSlice = createSlice({
  name: "ContentColor",
  initialState,
  reducers: {
    setContentColor: (state, action: PayloadAction<string>) => {
      state.ContentColor = action.payload;
    },
  },
});

export const { setContentColor } = ColorSettingSlice.actions;
export default ColorSettingSlice.reducer;
