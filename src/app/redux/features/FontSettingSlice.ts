import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FontProps {
  fontContent: string;
}

const initialState: FontProps = {
  fontContent: "kumbh",
};

const FontSettingSlice = createSlice({
  name: "fontContent",
  initialState,
  reducers: {
    setFontContent: (state, action: PayloadAction<string>) => {
      state.fontContent = action.payload;
    },
  },
});

export const { setFontContent } = FontSettingSlice.actions;
export default FontSettingSlice.reducer;
