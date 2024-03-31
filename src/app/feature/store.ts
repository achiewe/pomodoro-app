import { configureStore } from "@reduxjs/toolkit";
import OpenSettingSlice, { SettingProps } from "./OpenSettingSlice";

const store = configureStore({
  reducer: {
    openSetting: OpenSettingSlice,
  },
});

export type RootState = {
  openSetting: SettingProps;
};
