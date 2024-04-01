import { configureStore } from "@reduxjs/toolkit";
import OpenSettingSlice, { SettingProps } from "./features/OpenSettingSlice";

const store = configureStore({
  reducer: {
    openSetting: OpenSettingSlice,
  },
});

export type RootState = {
  openSetting: SettingProps;
};

export default store;
