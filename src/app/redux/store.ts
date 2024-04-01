import { configureStore } from "@reduxjs/toolkit";
import OpenSettingSlice, { SettingProps } from "./features/OpenSettingSlice";
import PanelOptionSlice, { PanelProps } from "./features/PanelOptionSlice";
import PomodoroSlice, { PomodoroProps } from "./features/PomodoroSlice";
import ShortBreakSlice, { ShortBreakProps } from "./features/ShortBreakSlice";
import LongBreakSlice, { LongBreakProps } from "./features/LongBreakSlice";

const store = configureStore({
  reducer: {
    openSetting: OpenSettingSlice,
    panelOption: PanelOptionSlice,
    pomodoroTimer: PomodoroSlice,
    shortBreak: ShortBreakSlice,
    longBreak: LongBreakSlice,
  },
});

export type RootState = {
  openSetting: SettingProps;
  panelOption: PanelProps;
  pomodoroTimer: PomodoroProps;
  shortBreak: ShortBreakProps;
  longBreak: LongBreakProps;
};

export default store;
