import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SettingProps {
  openSetting: boolean;
}

const initialState: SettingProps = {
  openSetting: false,
};

const OpenSettingSlice = createSlice({
  name: "openSetting",
  initialState,
  reducers: {
    setOpenSetting: (state, action: PayloadAction<boolean>) => {
      state.openSetting = action.payload;
    },
  },
});

export const { setOpenSetting } = OpenSettingSlice.actions;
export default OpenSettingSlice.reducer;
