import { createSlice } from "@reduxjs/toolkit";

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
    setOpenSetting: (state) => {
      state.openSetting = !state.openSetting;
    },
  },
});

export const { setOpenSetting } = OpenSettingSlice.actions;
export default OpenSettingSlice.reducer;
