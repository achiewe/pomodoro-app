import { configureStore } from "@reduxjs/toolkit";
import OpenSettingSlice, { SettingProps } from "./features/OpenSettingSlice";
import PanelOptionSlice, { PanelProps } from "./features/PanelOptionSlice";
import PomodoroSlice, { PomodoroProps } from "./features/PomodoroSlice";

const store = configureStore({
  reducer: {
    openSetting: OpenSettingSlice,
    panelOption: PanelOptionSlice,
    pomodoroTimer: PomodoroSlice,
  },
});

export type RootState = {
  openSetting: SettingProps;
  panelOption: PanelProps;
  pomodoroTimer: PomodoroProps;
};

export default store;
